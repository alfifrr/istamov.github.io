"use client";
import React, { useEffect, useState } from "react";
import fetchAuthentication from "@/services/movieService";
import { Card } from "flowbite-react";

const MovieFetcher: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "/3/movie/now_playing?language=en-US&page=1";
      fetch(`/api/router?endpoint=${encodeURIComponent(endpoint)}`)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Network response was not ok");
          }
          const data = response.json();
          console.log(data);
          setMovieData(data);
        })
        .catch((error) => {
          setError(error as Error);
        });
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Movie Data</h1>
      <pre>{JSON.stringify(movieData, null, 2)}</pre>

      {/* <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc="/images/blog/image-1.jpg"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card> */}
    </>
  );
};

export default MovieFetcher;
