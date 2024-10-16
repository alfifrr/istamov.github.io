"use client";
import React, { useEffect, useState } from "react";
import fetchAuthentication from "@/services/movieService";

const MovieFetcher: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetchAuthentication()
        .then((data) => {
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
    </>
  );
};

export default MovieFetcher;
