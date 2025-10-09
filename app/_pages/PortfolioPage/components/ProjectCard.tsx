"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  coverImage: string;
  sampleImages: string[];
  previewLink: string;
  projectDate: string;
  techStack: string[];
  isFeatured: boolean;
  isHighlighted: boolean;
  categories: string[];
  projectType: string;
  githubLink: string;
}
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <>
      <motion.div
        key={project._id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
        viewport={{ once: true }}
        className="group"
      >
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
          <div className="relative overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex space-x-2">
                <Link href={`/portfolio/${project._id}`}>
                  <Button size="sm" variant="secondary">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                </Link>
                <Button size="sm" variant="outline" asChild>
                  <Link href={project.githubLink}>
                    <Github className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
            {project.isFeatured && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-primary/90 text-primary-foreground text-xs">
                  Featured
                </Badge>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-xs">
                {project.projectType}
              </Badge>
              <span className="text-xs text-muted-foreground">
                {new Date(project.projectDate).getFullYear()}
              </span>
            </div>
            <h3 className="font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};

export default ProjectCard;
