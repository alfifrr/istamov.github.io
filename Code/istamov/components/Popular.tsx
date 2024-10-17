"use client";
import { Card, FlowbiteCardTheme } from "flowbite-react";
import React, { useEffect, useState } from "react";

const customCard: FlowbiteCardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-2",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

const Popular: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint1 =
        "/3/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_original_language=en";
      const endpoint2 =
        "/3/discover/movie?include_adult=false&include_video=false&page=2&sort_by=popularity.desc&with_original_language=en";

      try {
        const response1 = await fetch(
          `/api/apiProxyHandler?endpoint=${encodeURIComponent(endpoint1)}`
        );
        if (response1.status !== 200) {
          throw new Error("Network response was not ok for endpoint1");
        }
        const data1 = await response1.json();

        const response2 = await fetch(
          `/api/apiProxyHandler?endpoint=${encodeURIComponent(endpoint2)}`
        );
        if (response2.status !== 200) {
          throw new Error("Network response was not ok for endpoint2");
        }
        const data2 = await response2.json();

        const combinedData = {
          ...data1,
          results: [...data1.results, ...data2.results].slice(0, 30),
        };

        console.log(combinedData);

        setMovieData(combinedData);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div className="text-xs">Error: {error.message}</div>;
  }
  if (!movieData) {
    return <div className="text-xs">Loading...</div>;
  }

  const posterWidth = 300;

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Popular List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
        {movieData.results.map((movie: any) => (
          <Card
            key={movie.id}
            theme={customCard}
            style={{ maxWidth: "200px", height: "auto" }}
            className="max-w-sm"
            imgAlt={movie.title}
            imgSrc={`https://image.tmdb.org/t/p/${
              typeof posterWidth === "string" ? posterWidth : `w${posterWidth}`
            }${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {movie.overview.length > 50
                ? `${movie.overview.substring(0, 50)}...`
                : movie.overview}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Popular;
