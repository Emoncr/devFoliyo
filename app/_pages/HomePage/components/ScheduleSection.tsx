"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowRight,
  Download,
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Calendar,
  Users,
  Trophy,
  Briefcase,
  CalendarDays,
  Clock,
  Dot,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const ScheduleSection = () => {
  return (
    <>
      {/* Schedule Call Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-white to-red-50 dark:from-slate-800 dark:to-slate-900 border-primary/20">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <div className="flex items-center mb-4">
                    <CalendarDays className="w-8 h-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold">Schedule a Free Call</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {
                      "Let's discuss your project requirements and how I can help bring your ideas to life. Book a free 30-minute consultation call."
                    }
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>30 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Available Mon-Fri</span>
                    </div>
                  </div>
                  <Link href="/contact#schedule">
                    <Button size="lg" className="w-full sm:w-auto">
                      <CalendarDays className="mr-2 w-5 h-5" />
                      Schedule Now
                    </Button>
                  </Link>
                </div>
                <div className="w-full lg:w-80 h-64 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl p-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg h-full p-4 shadow-inner">
                    <div className="text-center mb-4">
                      <h3 className="font-semibold text-sm">December 2024</h3>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-xs">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                        <div
                          key={day}
                          className="text-center font-medium text-muted-foreground p-1"
                        >
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 31 }, (_, i) => (
                        <div
                          key={i + 1}
                          className={`text-center p-1 rounded cursor-pointer hover:bg-primary/20 ${
                            [15, 18, 22].includes(i + 1)
                              ? "bg-primary text-primary-foreground"
                              : ""
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;
