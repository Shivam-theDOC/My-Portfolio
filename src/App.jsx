import { ReactLenis } from "lenis/react";
import { Snow } from "./components/ChristmasTheme";
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
    <ReactLenis root>
      {/* Snow Effect */}
      <Snow />
      {/* nav */}
      <NavBar />

      {/* hero */}
      <Hero />

      {/* Teck Stack */}
      <TechStack />

      {/* LogoSection */}
      <LogoSection />

      {/* showcase */}
      <ShowcaseSection />


      {/* FeaturedCards */}
      <FeaturedCards />

      {/* PersonalExperience */}
      <ExperienceSection />



      {/* Contact Me */}
      <ContactMe />

      {/* footer */}
      <Footer />
    </ReactLenis>
  );
}

export default App;
