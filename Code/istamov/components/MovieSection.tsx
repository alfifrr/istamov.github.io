"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";
import fetchGuestSessionId from "@/utils/guestSession";

const MovieSection: React.FC = () => {
  return (
    <>
      <NowPlaying />
      <Popular />
    </>
  );
};

export default MovieSection;
