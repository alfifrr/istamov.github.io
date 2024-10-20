import React from "react";
import NowPlaying from "./NowPlaying";
import Popular from "./Popular";

const MovieSection: React.FC = () => {
  return (
    <>
      <NowPlaying />
      <Popular />
    </>
  );
};

export default MovieSection;
