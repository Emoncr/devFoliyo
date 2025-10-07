"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Web App",
  "Mobile App",
  "E-commerce",
  "Landing Page",
  "Dashboard",
];

const projects = [
  {
    id: 1,
    title: "SaaS Analytics Dashboard",
    description:
      "Modern analytics dashboard with real-time data visualization and interactive charts for business intelligence.",
    image:
      "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Dashboard",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    client: "TechCorp Inc.",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    description:
      "Cross-platform mobile application for online shopping with seamless payment integration and user experience.",
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Mobile App",
    tags: ["React Native", "Redux", "Stripe", "Firebase"],
    client: "ShopMax",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Banking Web Platform",
    description:
      "Secure online banking platform with account management, transfers, and financial planning tools.",
    image:
      "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Auth0"],
    client: "SecureBank",
    year: "2023",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Restaurant Landing Page",
    description:
      "Beautiful and responsive landing page for a high-end restaurant with online reservation system.",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Landing Page",
    tags: ["Vue.js", "Tailwind CSS", "GSAP", "Contentful"],
    client: "Bella Vista Restaurant",
    year: "2022",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "Comprehensive e-learning platform with course creation, student progress tracking, and video streaming.",
    image:
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Web App",
    tags: ["React", "Node.js", "WebRTC", "AWS S3"],
    client: "EduTech Solutions",
    year: "2022",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Fashion E-commerce Store",
    description:
      "Modern online store for fashion brand with advanced filtering, wishlist, and checkout process.",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "E-commerce",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS3"],
    client: "Fashion Forward",
    year: "2022",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 7,
    title: "Fitness Tracking App",
    description:
      "Mobile fitness application with workout planning, progress tracking, and social features.",
    image:
      "https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Mobile App",
    tags: ["Flutter", "Dart", "Firebase", "Google Fit"],
    client: "FitLife",
    year: "2021",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 8,
    title: "Corporate Website",
    description:
      "Professional corporate website with content management system and multilingual support.",
    image:
      "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Web App",
    tags: ["WordPress", "PHP", "MySQL", "WPML"],
    client: "GlobalTech Corp",
    year: "2021",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 9,
    title: "Real Estate Platform",
    description:
      "Property listing platform with advanced search, virtual tours, and agent management system.",
    image:
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2",
    category: "Web App",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "3D.js"],
    client: "PropertyPro",
    year: "2021",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];
const AllProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

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
                          key={category}
                          variant={
                            selectedCategory === category ? "default" : "ghost"
                          }
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="font-medium mb-2">Technology</h4>
                    <div className="space-y-2">
                      {[
                        "All",
                        "React",
                        "Next.js",
                        "Vue.js",
                        "Angular",
                        "Node.js",
                        "TypeScript",
                      ].map((tech) => (
                        <Button
                          key={tech}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-xs"
                        >
                          {tech}
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
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <Link href={`/portfolio/${project.id}`}>
                              <Button size="sm" variant="secondary">
                                <Eye className="w-3 h-3 mr-1" />
                                View
                              </Button>
                            </Link>
                            <Button size="sm" variant="outline" asChild>
                              <Link href={project.githubUrl}>
                                <Github className="w-3 h-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        {project.featured && (
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-primary/90 text-primary-foreground text-xs">
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                          {project.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No projects found matching your criteria. Try adjusting your
                filters or search query.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllProjectsSection;
