"use client";
import React, { useEffect, useState } from "react";
import { useFavorite } from "@/contexts/favoriteContext";
import { useAuth } from "@/contexts/authContext";
import MovieCard from "./MovieCard";

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

    const user = localStorage.getItem("user");
    if (user) {
      getFavorites().then((ids) => {
        console.log(ids);
        setCheckedIds(ids);
      });
    }
  }, []);

  if (error) {
    return <div className="text-xs">Error: {error.message}</div>;
  }
  if (!movieData) {
    return <div className="text-xs">Loading...</div>;
  }

  const clickFavorite = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    // if (user && user.sessionId) {
    //   addFavorite(id)
    //     .then((res) => {
    //       res
    //         ? console.log("Favorite added")
    //         : console.error("Could not add favorite");
    //     })
    //     .catch((error) => {
    //       console.log("Error adding favorite:", error);
    //     });
    // }
  };

  const handleCheckboxChange = (id: number, checked: boolean) => {
    if (checked) {
      addFavorite(id)
        .then((res) => {
          if (res) {
            setCheckedIds((prev) => [...prev, id]);
            console.log("Favorite added");
          } else {
            console.error("Could not add favorite");
          }
        })
        .catch((error) => {
          console.log("Error adding favorite:", error);
        });
    } else {
      setCheckedIds((prev) => prev.filter((checkedId) => checkedId !== id));
    }
  };

  const moviesToDisplay = movieData.results.slice(0, 6);
  const posterWidth = 300;

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Now Playing
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
        {moviesToDisplay.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            posterWidth={posterWidth}
            onClick={clickFavorite}
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
