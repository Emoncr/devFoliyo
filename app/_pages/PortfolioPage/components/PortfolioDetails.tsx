"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Calendar,
  User,
  Globe,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Zap,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

interface PortfolioDetailsProps {
  project: Project;
}

// Extended project data for modal
const getProjectDetails = (projectId: number) => {
  const projectDetails = {
    1: {
      longDescription:
        "A comprehensive analytics dashboard built for modern SaaS businesses. Features real-time data visualization, interactive charts, and customizable widgets for tracking key business metrics.",
      screenshots: [
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
      ],
      metrics: [
        { value: "40%", label: "Productivity Increase", icon: TrendingUp },
        { value: "95%", label: "User Satisfaction", icon: Award },
        { value: "60%", label: "Faster Delivery", icon: Zap },
        { value: "500+", label: "Active Users", icon: Users },
      ],
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        backend: ["Node.js", "Express", "Socket.io", "JWT"],
        database: ["PostgreSQL", "Redis", "Prisma ORM"],
        tools: ["Docker", "AWS", "Vercel", "GitHub Actions"],
      },
      features: [
        "Real-time data visualization with interactive charts",
        "Customizable dashboard widgets and layouts",
        "Advanced user role and permission management",
        "Export functionality (PDF, CSV, Excel)",
        "Mobile-responsive design with dark/light themes",
        "Advanced filtering and search capabilities",
      ],
    },
    // Default project details for other projects
    default: {
      longDescription:
        "A modern web application built with cutting-edge technologies to solve real-world problems and deliver exceptional user experiences.",
      screenshots: [
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
        "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
      ],
      metrics: [
        { value: "50%", label: "Performance Boost", icon: Zap },
        { value: "98%", label: "Uptime", icon: Award },
        { value: "25%", label: "Cost Reduction", icon: TrendingUp },
        { value: "1000+", label: "Happy Users", icon: Users },
      ],
      techStack: {
        frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB"],
        database: ["MongoDB", "Redis"],
        tools: ["Docker", "AWS", "Vercel"],
      },
      features: [
        "Modern responsive design",
        "Fast performance optimization",
        "Secure authentication system",
        "Real-time data updates",
        "Cross-browser compatibility",
        "SEO optimized structure",
      ],
    },
  };

  return (
    projectDetails[projectId as keyof typeof projectDetails] ||
    projectDetails.default
  );
};

export default function PortfolioDetails({ project }: PortfolioDetailsProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const details = getProjectDetails(project._id as unknown as number);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % details.screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) =>
        (prev - 1 + details.screenshots.length) % details.screenshots.length
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 to-orange-500/5">
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">{project.categories[0]}</Badge>
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="text-muted-foreground">
              {project.projectType} • {project.projectDate}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid lg:grid-cols-3 gap-8 py-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Screenshots */}
            <div className="space-y-4">
              {/* <h3 className="text-xl font-semibold">Project Screenshots</h3> */}
              <div className="relative">
                {/* Browser Frame */}
                <div className="bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-t-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white/50 dark:bg-slate-600/50 rounded-lg px-4 py-1 ml-4">
                      <span className="text-xs text-muted-foreground">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.com
                      </span>
                    </div>
                  </div>

                  <div className="relative h-[200px] lg:h-[400px] bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
                    <Image
                      src={details.screenshots[currentScreenshot]}
                      alt={`${project.title} Screenshot ${currentScreenshot + 1}`}
                      fill
                      className="object-cover"
                    />

                    {details.screenshots.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                          onClick={prevScreenshot}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-80 hover:opacity-100"
                          onClick={nextScreenshot}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Screenshot Navigation */}
                <div className="flex justify-center mt-4 space-x-2">
                  {details.screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentScreenshot
                          ? "bg-primary scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">About This Project</h3>
              <p className="text-muted-foreground leading-relaxed">
                {details.longDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Project Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {details.metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card
                      key={index}
                      className="p-4 text-center hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        {metric.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {metric.label}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>
              <div className="space-y-4">
                {Object.entries(details.techStack).map(
                  ([category, technologies]) => (
                    <div key={category}>
                      <h4 className="font-medium mb-2 capitalize text-primary">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </Card>

            {/* Project Info */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Project Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Client</p>
                    <p className="text-sm text-muted-foreground">
                      {project.projectType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Year</p>
                    <p className="text-sm text-muted-foreground">
                      {project.projectDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Monitor className="w-4 h-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Category</p>
                    <p className="text-sm text-muted-foreground">
                      {project.categories[0]}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link href={project.previewLink} target="_blank">
                  <Globe className="mr-2 w-4 h-4" />
                  View Live Site
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href={project.githubLink} target="_blank">
                  <Github className="mr-2 w-4 h-4" />
                  View Source Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
