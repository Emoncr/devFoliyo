"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  ExternalLink,
  ShoppingCart,
  Maximize,
  Minimize,
  Smartphone,
  Tablet,
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TemplatePreview({ params }: { params: { id: string } }) {
  const [viewMode, setViewMode] = useState('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const getFrameClasses = () => {
    switch (viewMode) {
      case 'mobile':
        return 'w-80 h-[600px]';
      case 'tablet':
        return 'w-[768px] h-[600px]';
      default:
        return 'w-full h-[800px]';
    }
  };

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href={`/templates/${params.id}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Template
              </Button>
            </Link>
            <div>
              <h1 className="font-semibold">Template Preview</h1>
              <p className="text-sm text-muted-foreground">Modern Portfolio Pro</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* View Mode Toggles */}
            <div className="flex items-center space-x-2 bg-secondary rounded-lg p-1">
              <Button
                variant={viewMode === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('mobile')}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'tablet' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('tablet')}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('desktop')}
              >
                <Monitor className="w-4 h-4" />
              </Button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
            
            <Button size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Template
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Frame */}
      <div className={`${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-slate-900' : 'p-6'}`}>
        <div className="flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className={`${getFrameClasses()} ${isFullscreen ? 'w-full h-full' : ''} bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden border`}
          >
            {/* Mock Template Content */}
            <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-y-auto">
              {/* Mock Navigation */}
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
                    <span className="font-bold">Portfolio</span>
                  </div>
                  <div className="hidden md:flex items-center space-x-6 text-sm">
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                  </div>
                  <div className="w-8 h-8 bg-secondary rounded-lg"></div>
                </div>
              </div>
              
              {/* Mock Hero Section */}
              <div className="px-6 py-20 text-center">
                <div className="max-w-4xl mx-auto">
                  <Badge variant="secondary" className="mb-4">Available for work</Badge>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hi, I'm{' '}
                    <span className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                      John Doe
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Full-stack developer creating beautiful, functional web experiences 
                    and premium templates for modern businesses.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
                      View Portfolio
                    </div>
                    <div className="px-6 py-3 border border-border rounded-lg">
                      Download CV
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mock Portfolio Grid */}
              <div className="px-6 py-20 bg-secondary/30">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-100 dark:from-slate-700 dark:to-slate-600"></div>
                        <div className="p-6">
                          <h3 className="font-semibold mb-2">Project {i}</h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            A brief description of this amazing project and its key features.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="secondary" className="text-xs">React</Badge>
                            <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Mock Contact Section */}
              <div className="px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Have a project in mind? Let's work together to bring your ideas to life.
                  </p>
                  <div className="px-6 py-3 bg-primary text-primary-foreground rounded-lg inline-block">
                    Contact Me
                  </div>
                </div>
              </div>
              
              {/* Mock Footer */}
              <div className="bg-secondary/30 px-6 py-12 border-t">
                <div className="max-w-6xl mx-auto text-center">
                  <p className="text-muted-foreground">
                    © 2024 John Doe. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating Action */}
      {!isFullscreen && (
        <div className="fixed bottom-6 right-6">
          <Link href={`/templates/${params.id}`}>
            <Button size="lg" className="shadow-lg">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Buy This Template
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}