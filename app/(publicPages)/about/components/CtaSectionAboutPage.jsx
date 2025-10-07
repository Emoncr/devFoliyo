"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Layers,
  Zap,
  Figma,
} from "lucide-react";

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
const CtaSectionAboutPage = () => {
  return (
    <>
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
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {`I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can bring your ideas to life.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Mail className="mr-2 w-4 h-4" />
                  Hire Me
                </Button>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CtaSectionAboutPage;
