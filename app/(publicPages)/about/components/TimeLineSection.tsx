"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTheme } from "next-themes";

const timeline = [
  {
    year: "Present",
    title: "Frontend Developer at SquareDonations",
    description:
      "Leading frontend development for SquareDonations. Building saas web apps, Dashboards, Plugins and custom scripts for squarespace and wordpress.",
    type: "work",
    logo: "/logos/squaredonation logo.png",
    darkLogo: "/logos/squaredonation logo.png",
    width: 180,
  },
  {
    year: "2024-2025",
    title: "Frontend Developer at Eventizer",
    description:
      "Worked on React.js and Next.js for building a scalable event management platform web app.",
    type: "work",
    darkLogo: "/logos/eventizer_logo_white.png",
    width: 120,
    logo: "/logos/eventizer_logo.webp",
  },
  {
    year: "2021-2024",
    title: "Javascript Developer at Fahim Code LTD",
    description:
      "Worked with React.js, vanilla JavaScript, HTML, and CSS to create custom solutions for WordPress and GoHighLevel, and occasionally worked with Shopify.",
    type: "work",
    logo: "/logos/fahimcode.webp",
    width: 120,
    darkLogo: "/logos/fahimcodewhite.webp",
  },
];

const TimeLineSection = () => {
  const { theme, setTheme } = useTheme();
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
                              src={
                                theme === "dark" ? item?.darkLogo : item?.logo
                              }
                              alt={item.title}
                              width={item?.width || 200}
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
  );
};

export default TimeLineSection;
