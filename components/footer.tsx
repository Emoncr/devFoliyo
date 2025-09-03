"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AJ</span>
              </div>
              <span className="font-bold text-xl">Alex Johnson</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating beautiful digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.name} variant="ghost" size="sm" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Web Development</span></li>
              <li><span className="text-muted-foreground">UI/UX Design</span></li>
              <li><span className="text-muted-foreground">Template Design</span></li>
              <li><span className="text-muted-foreground">Consulting</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">hello@alexjohnson.dev</span></li>
              <li><span className="text-muted-foreground">+1 (555) 123-4567</span></li>
              <li><span className="text-muted-foreground">San Francisco, CA</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Alex Johnson
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}