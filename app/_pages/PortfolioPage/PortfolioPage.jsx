import React from "react";
import PortfolioHeroSection from "./components/PortfolioHeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import AllProjectsSection from "./components/AllProjectsSection";

const PortfolioPage = () => {
  return (
    <>
      <PortfolioHeroSection />
      <FeaturedProjects />
      <AllProjectsSection />
    </>
  );
};

export default PortfolioPage;
