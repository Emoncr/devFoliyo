"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import fetchApi from "@/utils/apiMaker";
import useSWR from "swr";
import PortfolioSkeletonShimmer from "@/components/skeletons/PortfolioSkeletonShimmer";

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
  const { data, isLoading } = useSWR(
    "/top-projects",
    fetchApi({
      endpoint: "/project",
      path: "/all?limit=3",
      method: "GET",
    })
  );

  const portfolioHighlights = data?.data?.items || [];

  return (
    <>
      {/* Portfolio Highlights */}
      <section className="py-8 sm:py-10 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
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
                    className="group border border-white/10 hover:border-primary/50 rounded-lg overflow-hidden  transition-transform  duration-200 hover:shadow-lg"
                  >
                    <Card className=" hover:shadow-xl transition-all duration-700 group-hover:scale-[1.01] ">
                      <div className="relative overflow-hidden p-0 bg-[#f7f7f7] dark:bg-[#0B111D]">
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
                      <CardContent className="p-6 group-hover:border-primary/50 transition-border duration-300">
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

                        <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                          <Button size="sm" className="flex-1" asChild>
                            <a
                              href={project.previewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                          {project.githubLink && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 bg-transparent"
                              asChild
                            >
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          )}
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
