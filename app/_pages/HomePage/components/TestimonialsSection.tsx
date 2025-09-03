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
import { testimonials } from "@/data";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      {/* Testimonials */}
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
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {
                "Don't just take my word for it - here's what my clients have to say"
              }
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="text-center space-y-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic leading-relaxed">
                  {`"${testimonials[currentTestimonial].content}"`}
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-semibold">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="sm" onClick={prevTestimonial}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={nextTestimonial}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
