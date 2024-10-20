"use client";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useAuth } from "@/contexts/authContext";
import { useFavorite } from "@/contexts/favoriteContext";

const Popular: React.FC = () => {
  const [movieData, setMovieData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [displayedMovies, setDisplayedMovies] = useState<number>(6);
  const { user } = useAuth();
  const { addFavorite, getFavorites } = useFavorite();

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

  if (error) {
    return <div className="text-xs">Error: {error.message}</div>;
  }
  if (!movieData) {
    return <div className="text-xs">Loading...</div>;
  }

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
            onChange={handleCheckboxChange}
            user={user}
            checkedIds={checkedIds}
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
