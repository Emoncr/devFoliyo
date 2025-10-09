"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Filter, SearchCheck, Cross, X } from "lucide-react";

const categories = [
  { id: 2, value: "webapp", label: "Web App" },
  { id: 3, value: "Portfolio", label: "Portfolio" },
  { id: 4, value: "e-commerce", label: "E-commerce" },
  { id: 5, value: "landing-page", label: "Landing Page" },
  { id: 6, value: "dashboard", label: "Dashboard" },
];

interface PortfolioHeroSectionProps {
  onSearch: () => void;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const PortfolioHeroSection = ({
  onSearch,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: PortfolioHeroSectionProps) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchValue);
    onSearch();
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSearch();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div>
              <Badge variant="secondary" className="mb-4">
                Portfolio
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                My Creative{" "}
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Work
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A showcase of projects I&apos;ve worked on, from web
                applications to mobile apps, each crafted with attention to
                detail and modern best practices.
              </p>
            </div>

            {/* Search and Filters */}
            <form onSubmit={(e) => handleSearchFormSubmit(e)}>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="pl-10 h-12"
                  />
                  {searchValue && (
                    <Button
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 text-muted-foreground "
                      type="button"
                      variant={"ghost"}
                      size={"sm"}
                      onClick={() => setSearchValue("")}
                    >
                      <X />
                    </Button>
                  )}
                </div>
                <Button type="submit" className="w-full md:w-auto h-[46px]">
                  {/* <SearchCheck className="w-4 h-4 mr-2" /> */}
                  Search
                </Button>
              </div>
            </form>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange("all")}
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category?.id}
                    variant={
                      selectedCategory === category?.value
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => handleCategoryChange(category?.value)}
                  >
                    {category?.label}
                  </Button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeroSection;
