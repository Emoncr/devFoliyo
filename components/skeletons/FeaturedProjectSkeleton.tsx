"use client";

import { Card, CardContent } from "../ui/card";

const FeaturedProjectSkeleton = () => {
  const count = 2;
  return (
    <>
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <div className="grid lg:grid-cols-2 gap-12">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className="group">
            <Card className="overflow-hidden">
              <div className="relative overflow-hidden bg-[#f7f7f7] dark:bg-[#0B111D]">
                {/* Image skeleton with shimmer */}
                <div className="relative w-full h-64 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Featured badge skeleton */}
                <div className="absolute top-4 left-4">
                  <div className="relative h-6 w-20 bg-gray-400 dark:bg-gray-600 rounded-full overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Category and date row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="relative h-6 w-24 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                  <div className="flex items-center">
                    <div className="relative h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full mr-1 overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                    <div className="relative h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Title skeleton */}
                <div className="relative h-7 bg-gray-300 dark:bg-gray-700 rounded-lg mb-3 w-3/4 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Description skeleton */}
                <div className="space-y-2 mb-4">
                  {[1, 0.85, 0.7].map((width, lineIndex) => (
                    <div
                      key={lineIndex}
                      className="relative h-4 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden"
                      style={{ width: `${width * 100}%` }}
                    >
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  ))}
                </div>

                {/* Client/Type skeleton */}
                <div className="relative h-4 w-32 bg-gray-200 dark:bg-gray-600 rounded mb-4 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>

                {/* Tags skeleton */}
                <div className="flex flex-wrap gap-2">
                  {Array.from({
                    length: Math.floor(Math.random() * 3) + 3,
                  }).map((_, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="relative h-6 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden"
                      style={{ width: `${Math.random() * 40 + 60}px` }}
                    >
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProjectSkeleton;
