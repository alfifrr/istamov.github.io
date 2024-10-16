// main page
import MovieFetcher from "@/components/movieFetcher";

const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to Istamov</h1>
      <MovieFetcher />
    </>
  );
};

export default Home;
