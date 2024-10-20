"use client";
import React, { createContext, useContext } from "react";
import api from "@/lib/axios";
import { useAuth } from "./authContext";

interface FavoriteContextType {
  getFavorites: () => Promise<number[]>;
  addFavorite: (id: number) => Promise<boolean>;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined
);

export const FavoriteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();

  const getFavorites = async (): Promise<number[]> => {
    const loggedUser = localStorage.getItem("user");
    try {
      console.log(loggedUser && JSON.parse(loggedUser).sessionId);
      const response = await api.get(
        `/3/account/${
          process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID
        }/favorite/movies?language=en-US&page=1&session_id=${
          loggedUser && JSON.parse(loggedUser).sessionId
        }`
      );

      const favorites = response.data.results;
      return favorites.map((movie: any) => movie.id);
    } catch (error) {
      console.error("Error requesting GET favorites:", error);
      return [];
    }
  };

  const addFavorite = async (id: number): Promise<boolean> => {
    interface PostFavoriteResponse {
      data: {
        success: boolean;
        status_code: number;
        status_message: string;
      };
    }

    try {
      const postFavorite: PostFavoriteResponse = await api.post(
        `/3/account/${
          process.env.NEXT_PUBLIC_TMDB_ACCOUNT_ID
        }/favorite?session_id=${user && user.sessionId}`,
        {
          media_type: "movie",
          media_id: id,
          favorite: true,
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
