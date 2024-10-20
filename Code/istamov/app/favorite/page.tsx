"use client";
import MovieCard from "@/components/MovieCard";
import { NavbarSection } from "@/components/NavbarSection";
import SkeletonLoading from "@/components/SkeletonLoading";
import { useAuth } from "@/contexts/authContext";
import { useFavorite } from "@/contexts/favoriteContext";
import { withAuth } from "@/hoc/pageControl";
import React, { useEffect, useState } from "react";

const Favorite: React.FC = () => {
  const { getFavorites, addFavorite } = useFavorite();
  const { user } = useAuth();
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [movieData, setMovieData] = useState<any[]>([]);

  useEffect(() => {
    getFavorites()
      .then((res) => {
        console.log(res);
        setMovieData(res);
        const ids = res.map((item) => item.id);
        setCheckedIds(ids);
      })
      .catch((error) => {
        console.error(error);
      });
    if (user) {
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

  if (!movieData) {
    return (
      <>
        <NavbarSection />
        <h2 className="text-3xl text-center my-4 font-bold text-gray-900 dark:text-white">
          My Favorite Movies
        </h2>
        <SkeletonLoading />
      </>
    );
  }

  return (
    <>
      <NavbarSection />
      <h2 className="text-3xl text-center my-4 font-bold text-gray-900 dark:text-white">
        My Favorite Movies
      </h2>

      {movieData ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-1 justify-items-center">
          {movieData.map((movie: any) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onChange={handleCheckboxChange}
              user={user}
              checkedIds={checkedIds}
            />
          ))}
        </div>
      ) : (
        <div className="text-xs text-center text-gray-900 dark:text-white">
          No favorite movies found, add them by clicking on the checkboxes!
        </div>
      )}
    </>
  );
};

export default withAuth(Favorite);
