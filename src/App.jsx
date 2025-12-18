import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";
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


import LoadingScreen from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ReactLenis root>

      <Snow />
      <NavBar />
      <Hero />
      <TechStack />
      <LogoSection />
      <ShowcaseSection />
      <FeaturedCards />
      <ExperienceSection />
      <ContactMe />
      <Footer />

    </ReactLenis>
  );
}

export default App;
