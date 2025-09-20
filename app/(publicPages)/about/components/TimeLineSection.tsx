"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Server,
  Layers,
  Zap,
  Figma,
} from "lucide-react";
import Image from "next/image";

const skills = [
  {
    name: "JavaScript/TypeScript",
    level: 95,
    icon: Code,
    color: "bg-yellow-500",
    logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "React/Next.js",
    level: 90,
    icon: Globe,
    color: "bg-blue-500",
    logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "Node.js/Express",
    level: 85,
    icon: Server,
    color: "bg-green-500",
    logo: "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "UI/UX Design",
    level: 80,
    icon: Figma,
    color: "bg-purple-500",
    logo: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "Database Design",
    level: 85,
    icon: Database,
    color: "bg-orange-500",
    logo: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "Mobile Development",
    level: 75,
    icon: Smartphone,
    color: "bg-pink-500",
    logo: "https://images.pexels.com/photos/11035382/pexels-photo-11035382.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "Full Stack Development",
    level: 88,
    icon: Layers,
    color: "bg-indigo-500",
    logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    name: "Performance Optimization",
    level: 82,
    icon: Zap,
    color: "bg-red-500",
    logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
];

const timeline = [
  {
    year: "2023",
    title: "Senior Frontend Developer at Google",
    description:
      "Leading frontend development for Google Cloud Console, managing a team of 5 developers.",
    type: "work",
    logo: "https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    year: "2022",
    title: "Launched Premium Template Store",
    description:
      "Started my own template business, serving over 1000+ customers worldwide.",
    type: "achievement",
    logo: null,
  },
  {
    year: "2020",
    title: "Full Stack Developer at Meta",
    description:
      "Worked on React and Instagram web platform, reaching millions of users daily.",
    type: "work",
    logo: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    year: "2018",
    title: "Frontend Developer at Uber",
    description:
      "Built rider and driver web applications, focusing on real-time features.",
    type: "work",
    logo: "https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    year: "2016",
    title: "Started Professional Career",
    description:
      "Joined Airbnb as a Junior Developer, learning from industry experts.",
    type: "work",
    logo: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
  {
    year: "2015",
    title: "Computer Science Degree",
    description:
      "Graduated from Stanford University with honors in Computer Science.",
    type: "education",
    logo: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2",
  },
];

const TimeLineSection = () => {
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The path that led me to where I am today
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-px" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10" />

                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    } pl-16 md:pl-0`}
                  >
                    <Card className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          {item.logo && (
                            <Image
                              src={item.logo}
                              alt={item.title}
                              width={40}
                              height={40}
                              className="rounded-lg mr-3"
                            />
                          )}
                          <div>
                            <Badge
                              variant={
                                item.type === "work"
                                  ? "default"
                                  : item.type === "achievement"
                                  ? "secondary"
                                  : "outline"
                              }
                              className="mb-1"
                            >
                              {item.year}
                            </Badge>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {item.type}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TimeLineSection