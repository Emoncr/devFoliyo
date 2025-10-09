"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";


import Image from "next/image";

const skills = [
  {
    name: "JavaScript/TypeScript",
    level: 95,
    logo: "/icons/TypeScript.png",
  },
  {
    name: "React.js",
    level: 95,
    logo: "/icons/React.png",
  },
  {
    name: "Next.js",
    level: 97,
    logo: "/icons/Next.js.png",
  },
  {
    name: "Redux/Zustand",
    level: 90,
    logo: "/icons/Redux.png",
  },
  {
    name: "Tailwind CSS",
    level: 95,
    logo: "/icons/Tailwind CSS.png",
  },
  {
    name: "Node.js/Express",
    level: 92,
    logo: "/icons/Node.js.png",
  },
  {
    name: "Mongodb Database",
    level: 85,
    logo: "/icons/MongoDB.png",
  },
  {
    name: "Figma Design",
    level: 80,
    logo: "/icons/Icon.png",
  },
  {
    name: "HTML5/CSS3",
    level: 90,
    logo: "/icons/HTML5.png",
  },
  {
    name: "Git/Github",
    level: 90,
    logo: "/icons/git.svg",
  },
  {
    name: "Full Stack Development",
    level: 88,
    logo: "/icons/code.jpg",
  },
  {
    name: "Frontend Development",
    level: 96,
    logo: "/icons/code.jpg",
  },
];



const SkillsSection = () => {
  return (
    <>
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are the technologies and skills I work with to bring ideas to
              life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4 space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <div className="w-12 h-12 bg-slate-50 dark:bg-slate-700 rounded-lg p-2 shadow-sm flex items-center justify-center">
                          <Image
                            src={skill.logo}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {skill.name}
                        </h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Proficiency
                          </span>
                          <span className="text-sm font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
