"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock project data - in real app, this would come from API/database
const projectData = {
  1: {
    id: 1,
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive analytics dashboard built for modern SaaS businesses. Features real-time data visualization, interactive charts, and customizable widgets for tracking key business metrics.',
    longDescription: `This project was built to solve the complex data visualization needs of growing SaaS companies. The dashboard provides real-time insights into user behavior, revenue metrics, and operational KPIs through an intuitive and beautiful interface.

Key challenges solved:
• Real-time data processing and visualization
• Complex user permission and role management
• Responsive design for mobile and desktop usage
• Integration with multiple data sources and APIs
• Performance optimization for large datasets`,
    images: [
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2'
    ],
    category: 'Dashboard',
    tags: ['React', 'D3.js', 'Node.js', 'MongoDB', 'WebSocket', 'TypeScript'],
    client: 'TechCorp Inc.',
    year: '2023',
    duration: '4 months',
    role: 'Lead Full Stack Developer',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    technologies: {
      frontend: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
      backend: ['Node.js', 'Express', 'WebSocket', 'Redis'],
      database: ['MongoDB', 'PostgreSQL'],
      deployment: ['Docker', 'AWS', 'Nginx']
    },
    features: [
      'Real-time data visualization with D3.js',
      'Interactive charts and graphs',
      'Customizable dashboard widgets',
      'User role and permission management',
      'Export functionality (PDF, CSV, Excel)',
      'Mobile-responsive design',
      'Dark/Light theme support',
      'Advanced filtering and search'
    ]
  }
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const project = projectData[params.id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" asChild>
                    <Link href={project.liveUrl}>
                      <Globe className="mr-2 w-4 h-4" />
                      View Live
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href={project.githubUrl}>
                      <Github className="mr-2 w-4 h-4" />
                      View Code
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Client:</span>
                    <p className="text-muted-foreground">{project.client}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Year:</span>
                    <p className="text-muted-foreground">{project.year}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Duration:</span>
                    <p className="text-muted-foreground">{project.duration}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Role:</span>
                    <p className="text-muted-foreground">{project.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="relative">
                <Card className="overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {project.images.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                    
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Technologies Used</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.frontend.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.backend.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Database</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.database.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Deployment</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.deployment.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Project Links</h3>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link href={project.liveUrl}>
                        <Globe className="mr-2 w-4 h-4" />
                        View Live Site
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={project.githubUrl}>
                        <Github className="mr-2 w-4 h-4" />
                        View Source Code
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}