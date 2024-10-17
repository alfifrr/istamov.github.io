// main page
import NowPlaying from "@/components/NowPlaying";
import Popular from "@/components/Popular";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
        Welcome to Istamov
      </h1>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>

      <NowPlaying />
      <Popular />
    </>
  );
};

export default Home;
