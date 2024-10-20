"use client";
import React, { useEffect, useState } from "react";
import { useFavorite } from "@/contexts/favoriteContext";
import { useAuth } from "@/contexts/authContext";
import MovieCard from "./MovieCard";
import SkeletonLoading from "./SkeletonLoading";

const NowPlaying: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const { user } = useAuth();
  const { addFavorite, getFavorites } = useFavorite();

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

    if (user) {
      getFavorites()
        .then((res) => {
          const ids = res.map((item) => item.id);
          setCheckedIds(ids);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const handleCheckboxChange = (id: number, checked: boolean) => {
    addFavorite(id, checked)
      .then((res) => {
        if (res) {
          if (checked) {
            setCheckedIds((prev) => [...prev, id]);
            console.log("Favorite added");
          } else {
            setCheckedIds((prev) =>
              prev.filter((checkedId) => checkedId !== id)
            );
            console.log("Favorite removed");
          }
        } else {
          console.error("Could not update favorite list");
        }
      })
      .catch((error) => {
        console.log("Error adding favorite:", error);
      });
  };

  if (error) {
    return (
      <div className="text-xs h-screen flex items-center justify-center text-black dark:text-white">
        Error: {error.message}
      </div>
    );
  }
  if (!movieData) {
    return (
      <>
        <h2 className="text-3xl text-center my-4 font-bold text-gray-900 dark:text-white">
          Now Playing
        </h2>
        <SkeletonLoading />
      </>
    );
  }

  const moviesToDisplay = movieData.results.slice(0, 6);

  return (
    <>
      <h2 className="text-3xl text-center my-4 font-bold text-gray-900 dark:text-white">
        Now Playing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
        {moviesToDisplay.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onChange={handleCheckboxChange}
            user={user}
            checkedIds={checkedIds}
          />
        ))}
      </div>
    </>
  );
};

export default NowPlaying;
