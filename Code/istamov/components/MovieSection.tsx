"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import fetchGuestSessionId from "@/utils/guestSession";

const MovieSection: React.FC = () => {
  const [guestSessionId, setGuestSessionId] = useState<string | null>();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const checkGuestSession = async () => {
      const storedGuestSessionId = localStorage.getItem("guestSessionId");
      const storedGuestSessionExpiresAt = localStorage.getItem(
        "guestSessionExpiresAt"
      );

      if (storedGuestSessionId && storedGuestSessionExpiresAt) {
        const expiresAt = new Date(storedGuestSessionExpiresAt).getTime();
        const now = new Date().getTime();

        if (expiresAt > now) {
          setGuestSessionId(storedGuestSessionId);
          return;
        }
      }

      fetchGuestSessionId().then((sessionData) => {
        if (sessionData) {
          const { guestSessionId, expiresAt } = sessionData;
          localStorage.setItem("guestSessionId", guestSessionId);
          localStorage.setItem("guestSessionExpiresAt", expiresAt);
          setGuestSessionId(guestSessionId);
        }
      });
    };

    checkGuestSession();
  }, []);

  const postFavoriteMovie = async (movieId: number) => {
    const accountId = process.env.ACCOUNT_ID;
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
