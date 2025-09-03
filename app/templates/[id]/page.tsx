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
  Download,
  Star,
  ShoppingCart,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight,
  Check,
  Zap,
  Shield,
  Smartphone,
  Palette
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Mock template data
const templateData = {
  1: {
    id: 1,
    title: 'Modern Portfolio Pro',
    description: 'Clean and minimal portfolio template perfect for showcasing creative work with smooth animations.',
    longDescription: `A professionally designed portfolio template that combines modern aesthetics with powerful functionality. Perfect for designers, developers, and creative professionals who want to showcase their work in style.

This template features a clean, minimal design with smooth animations and transitions that create an engaging user experience. Built with modern web technologies and best practices, it's fully responsive and optimized for performance.`,
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2'
    ],
    category: 'Portfolio',
    technology: 'React',
    price: 39,
    originalPrice: 59,
    rating: 4.9,
    sales: 1247,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    featured: true,
    discount: 34,
    previewUrl: '#',
    downloadUrl: '#',
    features: [
      'Fully responsive design',
      'Dark/Light mode support',
      'Smooth animations with Framer Motion',
      'SEO optimized',
      'Fast loading performance',
      'Easy customization',
      'Modern typography',
      'Cross-browser compatibility',
      'Mobile-first approach',
      'Clean code structure'
    ],
    includes: [
      'Source code files',
      'Documentation',
      'Design assets',
      'Font files',
      'Installation guide',
      '6 months support',
      'Free updates',
      'Commercial license'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js'],
    pages: ['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact'],
    demoSections: [
      {
        title: 'Hero Section',
        description: 'Eye-catching hero with animated text and call-to-action buttons'
      },
      {
        title: 'Portfolio Gallery',
        description: 'Beautiful grid layout with hover effects and filtering options'
      },
      {
        title: 'About Section',
        description: 'Professional about section with skills and experience timeline'
      },
      {
        title: 'Contact Form',
        description: 'Working contact form with validation and email integration'
      }
    ]
  }
};

export default function TemplateDetail({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const template = templateData[params.id as keyof typeof templateData];

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Template Not Found</h1>
          <Link href="/templates">
            <Button>Back to Templates</Button>
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % template.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + template.images.length) % template.images.length);
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
            <Link href="/templates">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Button>
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary">{template.category}</Badge>
                  {template.featured && (
                    <Badge className="bg-orange-500 text-white">Featured</Badge>
                  )}
                  {template.discount && (
                    <Badge className="bg-red-500 text-white">-{template.discount}%</Badge>
                  )}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">{template.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">{template.description}</p>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{template.rating}</span>
                    <span className="text-muted-foreground ml-1">({template.sales} sales)</span>
                  </div>
                  <Badge variant="outline">{template.technology}</Badge>
                </div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-primary">${template.price}</span>
                    {template.originalPrice > template.price && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${template.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Buy Now - ${template.price}
                  </Button>
                  <Link href={`/templates/${template.id}/preview`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      <Eye className="mr-2 w-5 h-5" />
                      Live Preview
                    </Button>
                  </Link>
                  <Button size="lg" variant="ghost">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="relative">
                <Card className="overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src={template.images[currentImageIndex]}
                      alt={`${template.title} - Screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    
                    {template.images.length > 1 && (
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
                      {template.images.map((_, index) => (
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

      {/* Template Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Template Overview</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {template.longDescription.split('\n\n').map((paragraph, index) => (
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
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Demo Sections</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {template.demoSections.map((section, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                      <p className="text-muted-foreground text-sm">{section.description}</p>
                    </Card>
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
                  <h3 className="font-semibold text-lg mb-4">What's Included</h3>
                  <div className="space-y-3">
                    {template.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
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
                  <h3 className="font-semibold text-lg mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {template.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Template Features</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm">Fast Performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Mobile Responsive</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="text-sm">SEO Optimized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Palette className="w-5 h-5 text-purple-500" />
                      <span className="text-sm">Easy Customization</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-orange-500/5 border-primary/20">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg mb-2">Ready to get started?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant access to this template
                    </p>
                    <Button className="w-full mb-3">
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Buy Now - ${template.price}
                    </Button>
                    <Link href={`/templates/${template.id}/preview`}>
                      <Button variant="outline" className="w-full">
                        <Eye className="mr-2 w-4 h-4" />
                        Live Preview
                      </Button>
                    </Link>
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