"use client";
import React, { createContext, useContext } from "react";
import api from "@/lib/axios";

interface MovieData {
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

interface FavoriteContextType {
  getFavorites: () => Promise<MovieData[]>;
  addFavorite: (id: number, favorite: boolean) => Promise<boolean>;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getFavorites = async (): Promise<MovieData[]> => {
    const loggedUser = localStorage.getItem("user");
    try {
      const response = await api.get(
        `/3/account/${
          process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID
        }/favorite/movies?language=en-US&page=1&session_id=${
          loggedUser && JSON.parse(loggedUser).sessionId
        }`
      );

      console.log(response.data.results);
      return response.data.results;
      // return favorites.map((movie: any) => movie.id);
    } catch (error) {
      console.error("Error requesting GET favorites:", error);
      // return [];
      return Promise.reject(error);
    }
  };

  const addFavorite = async (
    id: number,
    favorite: boolean
  ): Promise<boolean> => {
    interface PostFavoriteResponse {
      data: {
        success: boolean;
        status_code: number;
        status_message: string;
      };
    }

    const loggedUser = localStorage.getItem("user");
    try {
      const postFavorite: PostFavoriteResponse = await api.post(
        `/3/account/${
          process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID
        }/favorite?session_id=${
          loggedUser && JSON.parse(loggedUser).sessionId
        }`,
        {
          media_type: "movie",
          media_id: id,
          favorite: favorite,
        }
      );
      return postFavorite.data.success ? true : false;
    } catch (error) {
      console.error("Error requesting POST favorite:", error);
      return false;
    }
  };

  return (
    <FavoriteContext.Provider value={{ getFavorites, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (context === undefined) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
