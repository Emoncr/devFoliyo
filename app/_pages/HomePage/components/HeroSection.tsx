"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Download,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Users,
  Trophy,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 2xl:gap-48 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge variant="secondary" className="mb-6 py-1.5 px-4 gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping delay-700 mr-1"></div>
                    Available for new projects
                  </Badge>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                >
                  Hi, I&#39;m{" "}
                  <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                    {"Emon"}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base lg:text-lg text-muted-foreground max-w-lg mt-8"
                >
                  {`I'm a full-stack developer (React.js & Node.js) with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I love working with React.js and Node.js and I'm always excited to learn and explore more about new technology.`}
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-start space-x-4"
              >
                <Link
                  href="#"
                  className="p-2 bg-secondary rounded-lg hover:bg-black hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-secondary rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-secondary rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="p-2 bg-secondary rounded-lg hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/portfolio">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Portfolio
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-6 text-sm text-muted-foreground"
              >
                <div className="flex items-center">
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>6+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>200+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  <span>50+ Projects</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full p-8">
                  <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/image of emon.png"
                      alt="Alex Johnson"
                      width={400}
                      height={400}
                      className="w-full h-full object-fill object-center"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
