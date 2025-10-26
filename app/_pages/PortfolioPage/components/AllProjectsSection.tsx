"use client";

import { motion } from "framer-motion";

import useSWR from "swr";
import fetchApi from "@/utils/apiMaker";
import ProjectCard from "./ProjectCard";
import { useMemo, useState } from "react";
import ProjectsCardSkeletonShimmer from "@/components/skeletons/ProjectsCardSkeletonShimmer";
import EmptyResult from "@/components/common/EmptyResult";
import { useSearchParams } from "next/navigation";
import SidebarFilter from "./SidebarFilter";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

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

interface AllProjectsSectionProps {
  searchQuery: string;
  setSearchQuery: (_query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (_category: string) => void;
}

const AllProjectsSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: AllProjectsSectionProps) => {
  const params = useSearchParams();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
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
  }, [selectedCategory, selectedTechnology, searchQuery, setSearchQuery]);

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
      <section className="py-8 sm:py-10 lg:py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1 hidden lg:block"
            >
              <SidebarFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
              />
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
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                    All Projects
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-primary text-primary lg:hidden"
                    onClick={() => setIsSheetOpen(true)}
                  >
                    <ListFilter size={16} />
                    <span>Filter</span>
                  </Button>
                </div>
                <p className="text-base sm:text-xl text-muted-foreground mt-4">
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

      {/* Sidebar Filter Sheet for Mobile */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-left">Filter Projects</SheetTitle>
            <SheetDescription className="text-left">
              Select categories and technologies to filter projects
            </SheetDescription>
          </SheetHeader>
          <div className="my-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <SidebarFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedTechnology={selectedTechnology}
                setSelectedTechnology={setSelectedTechnology}
              />
            </motion.div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default AllProjectsSection;
