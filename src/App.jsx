import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import ContactMe from "./sections/ContactMe";
import ExperienceSection from "./sections/ExperienceSection";
import FeaturedCards from "./sections/FeaturedCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

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

      {/* Teck Stack */}
      <TechStack />

      {/* Contact Me */}
      <ContactMe />

      {/* footer */}
      <Footer />
    </>
  );
}

export default App;
