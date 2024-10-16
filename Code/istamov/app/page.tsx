// main page
import NowPlaying from "@/components/nowPlayingFetcher";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Istamov</h1>
      <NowPlaying />
    </>
  );
};

export default Home;
