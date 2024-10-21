"use client";
import React, { useEffect, useState } from "react";
import { useFavorite } from "@/contexts/favoriteContext";
import { useAuth } from "@/contexts/authContext";
import MovieCard from "./MovieCard";
import SkeletonLoading from "./SkeletonLoading";
import api from "@/lib/axios";

interface NowPlaying {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const NowPlaying: React.FC = () => {
  const [movieData, setMovieData] = useState<NowPlaying>();
  const [error, setError] = useState<Error | null>(null);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const { user } = useAuth();
  const { addFavorite, getFavorites } = useFavorite();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(
          `/3/movie/now_playing?language=en-US&page=1`
        );
        if (response.status !== 200) {
          throw new Error("Network response was not ok");
        }

        console.log(response.data);
        setMovieData(response.data);
      } catch {
        setError(new Error("Error fetching data"));
      }
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
  }, [getFavorites, user]);

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
        {moviesToDisplay.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onChange={handleCheckboxChange}
            user={user ? { sessionId: user.sessionId } : { sessionId: null }}
            checkedIds={checkedIds}
          />
        ))}
      </div>
    </>
  );
};

export default NowPlaying;
