"use client";
import React from "react";
import { Card, Checkbox, FlowbiteCardTheme } from "flowbite-react";

const customCard: FlowbiteCardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-start gap-4 p-2",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};

interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
  onChange: (id: number, checked: boolean) => void;
  user: { sessionId: string | null };
  checkedIds: number[];
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onChange,
  user,
  checkedIds,
}) => {
  const isChecked = checkedIds && checkedIds.includes(movie.id);
  const posterWidth = 300;

  return (
    <Card
      key={movie.id}
      theme={customCard}
      style={{ maxWidth: "200px", height: "auto" }}
      className="max-w-sm"
      imgAlt={movie.title}
      imgSrc={`https://image.tmdb.org/t/p/${
        typeof posterWidth === "string" ? posterWidth : `w${posterWidth}`
      }${movie.poster_path}`}
    >
      {user && user.sessionId && (
        <Checkbox
          checked={isChecked}
          onChange={(e) => onChange && onChange(movie.id, e.target.checked)}
        />
      )}
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {movie.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {movie.overview.length > 50
          ? `${movie.overview.substring(0, 50)}...`
          : movie.overview}
      </p>
    </Card>
  );
};

export default MovieCard;
