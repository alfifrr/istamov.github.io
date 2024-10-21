// main page
import MovieSection from "@/components/MovieSection";
import { NavbarSection } from "@/components/NavbarSection";

const Home: React.FC = () => {
  return (
    <>
      <NavbarSection />
      <MovieSection />
    </>
  );
};

export default Home;
