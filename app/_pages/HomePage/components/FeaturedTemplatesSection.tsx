"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import useSWR from "swr";
import fetchApi from "@/utils/apiMaker";
import PortfolioSkeletonShimmer from "@/components/skeletons/PortfolioSkeletonShimmer";

interface Template {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  coverImage: string;
  sampleImages: string[];
  previewLink: string;
  projectDate: string; // ISO date string (YYYY-MM-DD)
  techStack: string[];
  isFeatured: boolean;
  isHighlighted: boolean;
  categories: string[];
  projectType: string;
  githubLink: string;
  basePrice: number;
  discountPrice: number;
  rating: number;
  badge: string;
  totalSold: number;

  __v: number;
}

const FeaturedTemplatesSection = () => {
  const { data, isLoading, error } = useSWR(
    "/featured-templates",
    fetchApi({
      endpoint: "/template",
      path: "/all?limit=3",
      method: "GET",
    })
  );

  const templates = data?.data?.items || [];

  console.log(templates, "templates");

  return (
    <>
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Premium Templates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready-to-use templates that will save you time and help you create
              stunning websites
            </p>
          </motion.div>

          {isLoading ? (
            <PortfolioSkeletonShimmer />
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {templates.map((template: Template, index: number) => (
                <motion.div
                  key={template?._id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      {template?.coverImage && (
                        <Image
                          src={template.coverImage}
                          alt={template?.title ?? "Template"}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {template?.discountPrice || template?.basePrice ? (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-primary text-primary-foreground">
                            ${template?.discountPrice ?? template?.basePrice}
                          </Badge>
                        </div>
                      ) : null}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">
                        {template?.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {template?.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template?.tags?.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="flex-1"
                          disabled={!template}
                        >
                          Buy Now
                        </Button>
                        {template?.previewLink && (
                          <Button size="sm" variant="outline" asChild>
                            <a
                              href={template.previewLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Preview
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedTemplatesSection;
