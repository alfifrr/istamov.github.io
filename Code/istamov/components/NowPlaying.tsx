"use client";
import React, { useEffect, useState } from "react";
import { Card, FlowbiteCardTheme } from "flowbite-react";

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

const NowPlaying: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "/3/movie/now_playing?language=en-US&page=1";
      fetch(`/api/apiProxyHandler?endpoint=${encodeURIComponent(endpoint)}`)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Network response was not ok");
          }

          response.json().then((resolvedData) => {
            console.log(resolvedData);
            setMovieData(resolvedData);
          });
        })
        .catch((error) => {
          setError(error as Error);
        });
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-xs">Error: {error.message}</div>;
  }
  if (!movieData) {
    return <div className="text-xs">Loading...</div>;
  }

  const moviesToDisplay = movieData.results.slice(0, 6);
  const posterWidth = 300;

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Now Playing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
        {moviesToDisplay.map((movie: any) => (
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

export default NowPlaying;
