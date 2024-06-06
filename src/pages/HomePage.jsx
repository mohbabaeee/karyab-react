import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ViewAll from "../components/ViewAll";
import JobsPage from "./JobsPage";
import Background from "../components/Background";

const HomePage = () => {
  return (
    <Background>
      <Hero />
      <HomeCards />
      <JobsPage ishome={true} />
      <ViewAll />
    </Background>
  );
};

export default HomePage;
