"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Calendar, Eye, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import fetchApi from "@/utils/apiMaker";
import FeaturedProjectSkeleton from "@/components/skeletons/FeaturedProjectSkeleton";

const FeaturedProjects = () => {
  const { data, isLoading } = useSWR(
    "/featured-projects",
    fetchApi({
      endpoint: "/project",
      path: "/all?isFeatured=true",
      method: "GET",
    })
  );

  const featuredProjects = data?.data?.items || [];

  return (
    <>
      {/* Featured Projects */}
      <section className="py-8 sm:py-10 lg:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10 lg:mb-16"
          >
            <h2 className=" text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Highlighting some of my most impactful and innovative work
            </p>
          </motion.div>

          {isLoading ? (
            <FeaturedProjectSkeleton />
          ) : (
            <>
              <div className="grid md:grid-cols-2 md:gap-6 gap-8">
                {featuredProjects
                  .slice(0, 3)
                  .map((project: any, index: number) => (
                    <motion.div
                      key={project._id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group overflow-hidden"
                    >
                      <Card className=" hover:shadow-xl transition-all duration-300">
                        <div className="relative">
                          <Image
                            src={project.coverImage || "/placeholder-image.jpg"}
                            alt={project.title}
                            width={800}
                            height={600}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="flex space-x-4">
                              <Button size="sm" variant="secondary" asChild>
                                <Link
                                  href={project.previewLink || "#"}
                                  target="_blank"
                                >
                                  <Eye className="w-4 h-4 lg:mr-2" />
                                  <span className="hidden lg:block">View</span>
                                </Link>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <Link
                                  href={project.githubLink || "#"}
                                  target="_blank"
                                >
                                  <Github className="w-4 h-4 lg:mr-2" />
                                  <span className="hidden lg:block">Code</span>
                                </Link>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <Link
                                  href={project.githubLink || "#"}
                                  target="_blank"
                                >
                                  <SquareArrowOutUpRight className="w-4 h-4 lg:mr-2" />
                                  <span className="hidden lg:block">
                                    Preview
                                  </span>
                                </Link>
                              </Button>
                            </div>
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary/90 text-primary-foreground">
                              Featured
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="outline">
                              {project.categories?.[0] ||
                                project.projectType ||
                                "Project"}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {project.projectDate
                                ? new Date(project.projectDate).getFullYear()
                                : "2024"}
                            </div>
                          </div>
                          <h3 className="font-semibold text-xl mb-3">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {project.shortDescription}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Type: {project.projectType || "Web App"}
                          </p>
                          <div className="flex flex-wrap gap-2 w-full max-w-[320px]">
                            {project.tags?.map((tag: string) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
