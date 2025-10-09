import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsCardSkeletonShimmer = () => {
  return (
    <Card className="overflow-hidden h-full relative">
      {/* Shimmer Overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/60 dark:via-white/20 to-transparent z-10" />

      {/* Image Skeleton */}
      <div className="relative">
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-800" />
        {/* Featured Badge Skeleton */}
        <div className="absolute top-2 right-2">
          <div className="h-5 w-16 bg-gray-400 dark:bg-gray-700 rounded-full" />
        </div>
      </div>

      <CardContent className="p-4">
        {/* Project Type and Year */}
        <div className="flex items-center justify-between mb-2">
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-800 rounded-full" />
          <div className="h-4 w-12 bg-gray-300 dark:bg-gray-800 rounded" />
        </div>

        {/* Title */}
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-800 rounded mb-2" />

        {/* Description */}
        <div className="space-y-2 mb-3">
          <div className="h-4 w-full bg-gray-300 dark:bg-gray-800 rounded" />
          <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-800 rounded" />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          <div className="h-5 w-16 bg-gray-300 dark:bg-gray-800 rounded-full" />
          <div className="h-5 w-20 bg-gray-300 dark:bg-gray-800 rounded-full" />
          <div className="h-5 w-14 bg-gray-300 dark:bg-gray-800 rounded-full" />
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </Card>
  );
};

export default ProjectsCardSkeletonShimmer;
