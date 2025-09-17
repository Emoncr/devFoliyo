"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import fetchApi from "@/utils/apiMaker";
import PortfolioSkeletonShimmer from "@/components/skeletons/PortfolioSkeletonShimmer";
import useSWR from "swr";

interface PortfolioHighlight {
  _id: string;
  title: string;
  coverImage: string;
  previewLink: string;
  githubLink: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  sampleImages: string[];
  isFeatured: boolean;
  isHighlighted: boolean;
  categories: string[];
  techStack: string[];
  projectType: string;
  projectDate: string;
}

const PortfolioSection = () => {
  const { data, isLoading, error } = useSWR(
    "/featured-projects",
    fetchApi({
      endpoint: "/project",
      path: "/all?limit=3",
      method: "GET",
    })
  );

  const portfolioHighlights = data?.data?.items || [];

  console.log(portfolioHighlights);

  return (
    <>
      {/* Portfolio Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"Some of my recent work that I'm proud to showcase"}
            </p>
          </motion.div>

          {isLoading ? (
            <PortfolioSkeletonShimmer />
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {portfolioHighlights.map(
                (project: PortfolioHighlight, index: number) => (
                  <motion.div
                    key={project?._id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-700 group-hover:scale-[1.01]">
                      <div className="relative overflow-hidden p-4 bg-[#f7f7f7] dark:bg-[#0B111D]">
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64  group-hover:scale-110 transition-transform duration-700 rounded-xl shadow-sm object-fill"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button size="sm" variant="secondary">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
