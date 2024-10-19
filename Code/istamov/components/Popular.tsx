"use client";
import axios from "axios";
import { Button, Card, FlowbiteCardTheme } from "flowbite-react";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useAuth } from "@/contexts/authContext";
import { useFavorite } from "@/contexts/favoriteContext";

const Popular: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [displayedMovies, setDisplayedMovies] = useState<number>(6);
  const { user } = useAuth();
  const { addFavorite } = useFavorite();

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

  const clickFavorite = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    if (user && user.sessionId) {
      addFavorite(id)
        .then((res) => {
          res
            ? console.log("Favorite added")
            : console.error("Could not add favorite");
        })
        .catch((error) => {
          console.log("Error adding favorite:", error);
        });
    }
  };

  const posterWidth = 300;

  const loadMoreMovies = () => {
    setDisplayedMovies((prev) => prev + 6);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Popular List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
        {movieData.results.slice(0, displayedMovies).map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            posterWidth={posterWidth}
            onClick={clickFavorite}
            user={user}
          />
        ))}
      </div>

      {displayedMovies < movieData.results.length && (
        <div className="flex justify-center mt-4">
          <Button onClick={loadMoreMovies}>Load More</Button>
        </div>
      )}
    </>
  );
};

export default Popular;
