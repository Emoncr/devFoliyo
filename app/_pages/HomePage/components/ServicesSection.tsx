"use client"
import { motion } from "framer-motion"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code2, Palette, Smartphone, Zap } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  cta: string
}

const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building responsive and modern web applications using latest technologies and best practices",
    icon: <Code2 className="w-8 h-8" />,
    features: ["React.js", "Next.js", "Full Stack", "Responsive Design"],
    cta: "Start Project",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with exceptional user experience and accessibility",
    icon: <Palette className="w-8 h-8" />,
    features: ["Figma Design", "Prototyping", "User Research", "Accessibility"],
    cta: "Discuss Design",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android",
    icon: <Smartphone className="w-8 h-8" />,
    features: ["React Native", "Cross-Platform", "Performance", "App Store Ready"],
    cta: "Build App",
  },
  {
    id: "api",
    title: "API Integration",
    description: "Seamless integration of third-party APIs and services to enhance your application functionality",
    icon: <Zap className="w-8 h-8" />,
    features: ["REST APIs", "GraphQL", "Real-time Data", "Payment Integration"],
    cta: "Integrate Now",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export const ServicesSection = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group hover:border-primary/50">
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-4 p-3 bg-primary/10 w-fit rounded-lg group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{service.icon}</div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button size="sm" className="w-full group/btn" variant="default">
                    {service.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
