"use client";
import React, { useRef, useState } from "react";
import PortfolioHeroSection from "./components/PortfolioHeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import AllProjectsSection from "./components/AllProjectsSection";

const PortfolioPage = () => {
  const allProjectsRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const scrollToAllProjects = () => {
    if (allProjectsRef.current) {
      allProjectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <PortfolioHeroSection
        setSearchQuery={setSearchQuery}
        onSearch={scrollToAllProjects}
        searchQuery={searchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FeaturedProjects />
      <div ref={allProjectsRef}>
        <AllProjectsSection
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  );
};

export default PortfolioPage;
