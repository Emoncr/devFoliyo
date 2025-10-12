"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowLeft,
  Github,
  Calendar,
  User,
  Globe,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  CircleCheck as CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projectData = {
  title: "EcoCommerce - Sustainable Shopping Platform",
  subtitle: "Full-Stack E-commerce Solution for Eco-Friendly Products",
  description:
    "A comprehensive e-commerce platform dedicated to sustainable and eco-friendly products, featuring advanced filtering, carbon footprint tracking, and community-driven reviews.",
  longDescription: `EcoCommerce represents a revolutionary approach to online shopping, specifically designed for environmentally conscious consumers. This full-stack application combines modern web technologies with sustainability-focused features to create a unique shopping experience.

The platform addresses the growing need for transparent, eco-friendly shopping by providing detailed product sustainability metrics, carbon footprint calculations, and community-driven environmental impact reviews. Built with scalability and performance in mind, the application handles thousands of products while maintaining fast load times and smooth user interactions.`,
  images: [
    "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
  ],
  category: "E-commerce",
  tags: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "TypeScript"],
  client: "GreenTech Solutions",
  year: "2024",
  duration: "6 months",
  role: "Lead Full Stack Developer",
  teamSize: "5 developers",
  liveUrl: "https://ecocommerce-demo.com",
  githubUrl: "https://github.com/alexjohnson/ecocommerce",
  status: "Live",
  technologies: {
    frontend: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Query",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "Redis", "JWT"],
    payment: ["Stripe", "PayPal", "Apple Pay", "Google Pay"],
    deployment: ["AWS EC2", "Docker", "Nginx", "CloudFlare"],
    tools: ["Figma", "Postman", "Jest", "Cypress", "GitHub Actions"],
  },
  features: [
    "Advanced product filtering and search",
    "Carbon footprint tracking for each product",
    "Sustainable packaging options",
    "Community reviews and ratings",
    "Wishlist and favorites functionality",
    "Multi-payment gateway integration",
    "Real-time inventory management",
    "Mobile-responsive design",
    "Admin dashboard for vendors",
    "Email notifications and marketing",
    "Social media integration",
    "Multi-language support",
  ],
  challenges: [
    {
      title: "Complex Sustainability Metrics",
      description:
        "Implementing accurate carbon footprint calculations for diverse product categories required extensive research and API integrations.",
      solution:
        "Developed a custom algorithm that factors in manufacturing, shipping, and packaging data from multiple environmental databases.",
    },
    {
      title: "Performance Optimization",
      description:
        "Managing large product catalogs while maintaining fast search and filtering performance.",
      solution:
        "Implemented advanced caching strategies, database indexing, and lazy loading to achieve sub-second response times.",
    },
    {
      title: "Payment Security",
      description:
        "Ensuring PCI compliance and secure payment processing across multiple payment methods.",
      solution:
        "Integrated industry-leading payment processors with end-to-end encryption and fraud detection systems.",
    },
  ],
  results: [
    {
      metric: "150%",
      description: "Increase in user engagement",
      icon: TrendingUp,
    },
    {
      metric: "89%",
      description: "Customer satisfaction rate",
      icon: Star,
    },
    {
      metric: "45%",
      description: "Reduction in cart abandonment",
      icon: Target,
    },
    {
      metric: "200+",
      description: "Eco-friendly vendors onboarded",
      icon: Users,
    },
  ],
  testimonial: {
    text: "Alex delivered an exceptional e-commerce platform that perfectly captures our vision for sustainable shopping. The attention to detail and innovative features exceeded our expectations.",
    author: "Sarah Mitchell",
    role: "CEO, GreenTech Solutions",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  },
};

export default function PortfolioDetails() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + projectData.images.length) % projectData.images.length
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary">{projectData.category}</Badge>
                  <Badge className="bg-green-500 text-white">
                    {projectData.status}
                  </Badge>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {projectData.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {projectData.subtitle}
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {projectData.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild>
                    <Link href={projectData.liveUrl} target="_blank">
                      <Globe className="mr-2 w-5 h-5" />
                      View Live Site
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={projectData.githubUrl} target="_blank">
                      <Github className="mr-2 w-5 h-5" />
                      View Code
                    </Link>
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      Client
                    </span>
                    <p className="font-medium">{projectData.client}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      Year
                    </span>
                    <p className="font-medium">{projectData.year}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      Duration
                    </span>
                    <p className="font-medium">{projectData.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">
                      Team Size
                    </span>
                    <p className="font-medium">{projectData.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl">
                  <div className="relative h-96">
                    <Image
                      src={projectData.images[currentImageIndex]}
                      alt={`${projectData.title} - Screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {projectData.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-white scale-110"
                              : "bg-white/60 hover:bg-white/80"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Results */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-blue-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Project Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable impact and success metrics achieved through this
              project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectData.results.map((result, index) => {
              const Icon = result.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {result.metric}
                    </h3>
                    <p className="text-muted-foreground">
                      {result.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Lightbulb className="w-8 h-8 text-primary mr-3" />
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {projectData.longDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-6 text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <CheckCircle className="w-8 h-8 text-primary mr-3" />
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-secondary/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="w-8 h-8 text-primary mr-3" />
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {projectData.challenges.map((challenge, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-primary">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {challenge.description}
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                        <p className="text-sm">
                          <strong>Solution:</strong> {challenge.solution}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">
                    Technologies Used
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 text-primary">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.technologies.frontend.map((tech) => (
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
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.technologies.backend.map((tech) => (
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
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Payment</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.technologies.payment.map((tech) => (
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
                    <div>
                      <h4 className="font-medium mb-2 text-primary">
                        Deployment
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.technologies.deployment.map((tech) => (
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
                    <div>
                      <h4 className="font-medium mb-2 text-primary">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {projectData.technologies.tools.map((tech) => (
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
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link href={projectData.liveUrl} target="_blank">
                        <Globe className="mr-2 w-4 h-4" />
                        View Live Site
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={projectData.githubUrl} target="_blank">
                        <Github className="mr-2 w-4 h-4" />
                        View Source Code
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Info</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">Role:</span>
                      <span className="ml-2 text-muted-foreground">
                        {projectData.role}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">Year:</span>
                      <span className="ml-2 text-muted-foreground">
                        {projectData.year}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2 text-muted-foreground">
                        {projectData.duration}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span className="font-medium">Team:</span>
                      <span className="ml-2 text-muted-foreground">
                        {projectData.teamSize}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 border-primary/20">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-xl italic leading-relaxed mb-8 text-muted-foreground">
                "{projectData.testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={projectData.testimonial.avatar}
                  alt={projectData.testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-lg">
                    {projectData.testimonial.author}
                  </p>
                  <p className="text-muted-foreground">
                    {projectData.testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Interested in Similar Work?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'd love to discuss your project and explore how we can create
                something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Get In Touch</Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
