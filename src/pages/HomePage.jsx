import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ViewAll from "../components/ViewAll";
import JobsPage from "./JobsPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobsPage ishome={true} />
      <ViewAll />
    </>
  );
};

export default HomePage;
