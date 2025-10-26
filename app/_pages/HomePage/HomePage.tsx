"use client";
import HeroSection from "./components/HeroSection";
import WorkHistorySection from "./components/WorkHistorySection";
import PortfolioSection from "./components/PortfolioSection";
import ScheduleSection from "./components/ScheduleSection";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ServicesSection } from "./components/ServicesSection";

export default function HomePage() {

  return (
    <div className="min-h-screen">


      <Navbar />
      <HeroSection />
      <WorkHistorySection />
      <PortfolioSection />
      {/* <FeaturedTemplatesSection /> */}
      <ServicesSection />
      <ScheduleSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}
