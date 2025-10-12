"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Mail,
} from "lucide-react";
import Link from "next/link";




const CtaSectionAboutPage = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-primary/5 to-blue-500/5 border-primary/20">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {`I'm always interested in new opportunities and exciting
                projects. Let's discuss how we can bring your ideas to life.`}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`https://www.upwork.com/freelancers/~014b8549bb13c7f56d`}
                  target="_blank"
                >
                  <Button size="lg">
                    <Mail className="mr-2 w-4 h-4" />
                    Hire Me
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CtaSectionAboutPage;
