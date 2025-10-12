"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import useSWR from "swr";
import fetchApi from "@/utils/apiMaker";
import ProjectCard from "./ProjectCard";
import { useMemo, useState } from "react";
import ProjectsCardSkeletonShimmer from "@/components/skeletons/ProjectsCardSkeletonShimmer";
import EmptyResult from "@/components/common/EmptyResult";
import { useSearchParams } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  coverImage: string;
  sampleImages: string[];
  previewLink: string;
  projectDate: string;
  techStack: string[];
  isFeatured: boolean;
  isHighlighted: boolean;
  categories: string[];
  projectType: string;
  githubLink: string;
}

const categories = [
  { id: 1, value: "all", label: "All" },
  { id: 2, value: "webapp", label: "Web App" },
  { id: 3, value: "Portfolio", label: "Portfolio" },
  { id: 4, value: "e-commerce", label: "E-commerce" },
  { id: 5, value: "landing-page", label: "Landing Page" },
  { id: 6, value: "dashboard", label: "Dashboard" },
];

const technologies = [
  { id: 1, value: "all", label: "All" },
  { id: 2, value: "react.js", label: "React" },
  { id: 3, value: "next.js", label: "Next.js" },
  { id: 4, value: "vue.js", label: "Vue.js" },
  { id: 5, value: "angular.js", label: "Angular" },
  { id: 6, value: "node.js", label: "Node.js" },
  { id: 7, value: "typescript", label: "TypeScript" },
];

interface AllProjectsSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const AllProjectsSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: AllProjectsSectionProps) => {
  const params = useSearchParams();

  const [selectedTechnology, setSelectedTechnology] = useState("all");

  // Build query string based on current selections and search params
  const queryString = useMemo(() => {
    const queryParams = new URLSearchParams();

    if (selectedCategory !== "all") {
      queryParams.set("categories", selectedCategory);
      setSearchQuery("");
    }

    if (selectedTechnology !== "all") {
      queryParams.set("techStack", selectedTechnology);
      setSearchQuery("");
    }

    if (searchQuery) {
      queryParams.set("search", searchQuery);
    }

    const result = queryParams.toString();
    return result ? `?${result}` : "";
  }, [selectedCategory, selectedTechnology, searchQuery]);

  const { data, isLoading } = useSWR(
    `/project/all${queryString}`,
    fetchApi({
      endpoint: "/project",
      path: `/all${queryString}`,
      method: "GET",
    })
  );

  const allProjects = data?.data?.items || [];

  return (
    <>
      {/* All Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Filter Projects</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category?.value}
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start text-xs ${category?.value === selectedCategory && "bg-primary text-white"}`}
                          onClick={() => setSelectedCategory(category?.value)}
                        >
                          {category?.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Technology</h4>
                    <div className="space-y-2">
                      {technologies.map((tech) => (
                        <Button
                          key={tech?.id}
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start text-xs ${tech?.value === selectedTechnology && "bg-primary text-white"}`}
                          onClick={() => setSelectedTechnology(tech?.value)}
                        >
                          {tech?.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Projects Grid */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  All Projects
                </h2>
                <p className="text-xl text-muted-foreground">
                  Explore my complete portfolio of work across different
                  technologies and industries
                </p>
                {params.get("search") && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Searching for:{" "}
                    <span className="font-semibold">
                      {params.get("search")}
                    </span>
                  </p>
                )}
              </motion.div>

              {isLoading ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <ProjectsCardSkeletonShimmer key={index} />
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {allProjects.map((project: Project, index: number) => (
                    <ProjectCard
                      key={project._id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>
              )}

              {!isLoading && allProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <EmptyResult
                    heading="No Projects Found"
                    description="No Project's Found with the selected filters. Please adjust your filters and try again."
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProjectsSection;
