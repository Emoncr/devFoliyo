"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

import { workHistory } from "@/data";
import Image from "next/image";
import { useTheme } from "next-themes";

const WorkHistorySection = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* Work History */}
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
              Work Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {"I've had the privilege of working with some amazing companies"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workHistory.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Image
                      src={
                        theme === "dark"
                          ? job?.companyLogoDark
                          : job?.companyLogoWhite
                      }
                      alt={job.company}
                      width={160}
                      height={100}
                      className="object-fill mx-auto mb-5"
                    />
                    <h3 className="font-semibold text-lg mb-2">
                      {job.company}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {job.role}
                    </p>
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {job.period}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkHistorySection;
