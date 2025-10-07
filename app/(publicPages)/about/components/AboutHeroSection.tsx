"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MapPin,
  Calendar,
  Award,
  Code,
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

const AboutHeroSection = () => {
  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge variant="secondary" className="mb-6">
                  About Me
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Passionate Developer &{" "}
                  <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                    Creative Designer
                  </span>
                </h1>
                <div className="text-base">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {`I'm a passionate, web developer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.`}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {`I began my journey as a web developer in 2020, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 2 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, Tailwindcss and much more.`}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {`I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.`}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {`When I'm not in full-on developer mode, you can find me hovering around on linkedin or twitter. You can follow me on Linkedin and Twitter where I share tech-related tidbits, or you can follow me on GitHub.`}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {`One last thing, I'm available for freelance work, so feel free to reach out and say hello! 😉`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                 Kushita, Bangladesh
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available for projects
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Award className="w-4 h-4 mr-2" />
                  4+ years experience
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto">
                <Mail className="mr-2 w-4 h-4" />
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl blur-2xl" />
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2"
                      alt="Alex Johnson"
                      width={600}
                      height={800}
                      className="w-full h-[500px] object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroSection;
