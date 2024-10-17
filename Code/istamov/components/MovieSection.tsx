"use client";
import axios from "axios";
import React from "react";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";

const MovieSection: React.FC = () => {
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const postFavoriteMovie = async (movieId: number) => {
    const accountId = process.env.ACCOUNT_ID;
    const sessionId = ""; // hardcoded for now
    const accessToken = process.env.FAVORITE_MOVIE_API_KEY;

    const options = {
      method: "POST",
      url: `https://api.themoviedb.org/3/account/${accountId}/favorite`,
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },

      data: {
        media_type: "movie",
        media_id: movieId,
        favorite: true,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <NowPlaying />
      <Popular />
    </>
  );
};

export default MovieSection;
