import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import FeaturedCards from "./sections/FeaturedCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

function App() {
  return (
    <>
      {/* nav */}
      <NavBar />

      {/* hero */}
      <Hero />

      {/* showcase */}
      <ShowcaseSection />

      {/* LogoSection */}
      <LogoSection />

      {/* FeaturedCards */}
      <FeaturedCards />

      {/* PersonalExperience */}
      <ExperienceSection />

      {/* footer */}
    </>
  );
}

export default App;
