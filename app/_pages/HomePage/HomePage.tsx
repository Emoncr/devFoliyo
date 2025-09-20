import HeroSection from "./components/HeroSection";
import WorkHistorySection from "./components/WorkHistorySection";
import PortfolioSection from "./components/PortfolioSection";
import FeaturedTemplatesSection from "./components/FeaturedTemplatesSection";
import ScheduleSection from "./components/ScheduleSection";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WorkHistorySection />
      <PortfolioSection />
      <FeaturedTemplatesSection />
      <ScheduleSection />
      {/* <TestimonialsSection /> */}
      <Footer />
    </div>
  );
}
