"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import SocialIcons from "./common/SocialIcons";
import Image from "next/image";
import {
  useSpacemanTheme,
} from "@space-man/react-theme-animation";

export default function Footer() {
  const { theme } = useSpacemanTheme();
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <>
                  {theme === "dark" ? (
                    <Image
                      src="/logos/Logo for dark.png"
                      alt="Logo"
                      width={80}
                      height={50}
                    />
                  ) : (
                    <Image
                      src="/logos/Logo for light.png"
                      alt="Logo"
                      width={80}
                      height={80}
                    />
                  )}
                </>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating beautiful digital experiences with modern web
              technologies.
            </p>
            <>
              <SocialIcons />
            </>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground font-medium transition-colors hover:text-primary hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground font-medium transition-colors hover:text-primary hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-muted-foreground font-medium transition-colors hover:text-primary hover:underline"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground font-medium transition-colors hover:text-primary hover:underline"
                >
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/templates"
                  className="text-muted-foreground font-medium transition-colors hover:text-primary hover:underline"
                >
                  Templates
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">UI/UX Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Template Design</span>
              </li>
              <li>
                <span className="text-muted-foreground">Consulting</span>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                  <Link href="mailto:biplobemon.dev@gmail.com">{`biplobemon.dev@gmail.com`}</Link>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary hover:underline transition-colors">
                  <Link href="tel:+8801883049802">{`+880 1883049802`}</Link>
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Kushtia, Khulna, Bangladesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Emon
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            © {new Date().getFullYear()} Emon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
