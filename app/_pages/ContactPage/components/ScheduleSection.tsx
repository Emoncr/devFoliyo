"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MessageCircle,
  Globe,
  Clock,
  CheckCircle2,
  Sparkles,
  Calendar,
  Video,
} from "lucide-react";
import { InlineWidget } from "react-calendly";

const ScheduleSection = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const benefits = [
    {
      icon: MessageCircle,
      title: "Project Discussion",
      description:
        "We'll discuss your project requirements, goals, and timeline in detail.",
    },
    {
      icon: Globe,
      title: "Technical Consultation",
      description:
        "Get expert advice on technology stack, architecture, and best practices.",
    },
    {
      icon: Sparkles,
      title: "Timeline & Pricing",
      description:
        "Receive a detailed timeline and transparent pricing for your project.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <Calendar className="w-4 h-4 mr-2 inline-block" />
              Schedule a Call
            </Badge>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Schedule a Free Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book a 15-minute call to discuss your project and get expert
              advice
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="p-8 lg:p-12 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                What to Expect from Our Call
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="text-center space-y-4"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow h-full">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Duration</p>
                      <p className="text-muted-foreground">15 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Video className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Format</p>
                      <p className="text-muted-foreground">
                        Video call (Google Meet)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Investment</p>
                      <Badge className="bg-gradient-to-r from-primary to-orange-500">
                        FREE
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3 border-t">
                    <p className="font-semibold text-sm">{`What you'll get:`}</p>
                    {[
                      "Expert consultation",
                      "Project roadmap",
                      "Transparent pricing",
                      "No commitment",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary to-orange-500 text-white border-0 hover:shadow-xl transition-shadow h-full flex flex-col justify-center">
                <div className="space-y-6 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <Calendar className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-white/90">
                      Click below to choose a time that works best for you. I
                      typically respond within 24 hours.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full text-lg font-semibold"
                    onClick={() => setIsCalendarOpen(true)}
                  >
                    Book Your Free Call
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                    <Sparkles className="w-4 h-4" />
                    <span>Join 100+ satisfied clients</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] p-0 gap-0 dark:bg-slate-900 dark:border-slate-700">
          <DialogHeader className="p-6 pb-4 dark:bg-slate-900">
            <DialogTitle className="text-2xl dark:text-white">
              Schedule Your Free Consultation
            </DialogTitle>
            <DialogDescription className="dark:text-slate-300">
              {`Select a time that works best for you. I'm looking forward to
              discussing your project!`}
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6 overflow-hidden">
            <InlineWidget
              url="https://calendly.com/biplobemon-dev/30min"
              pageSettings={{
                hideEventTypeDetails: true,
                hideGdprBanner: true,
                primaryColor: "af123f",
                hideLandingPageDetails: true,
              }}
              styles={{
                height: "600px",
                minWidth: "100%",
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ScheduleSection;
