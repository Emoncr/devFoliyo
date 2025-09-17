import { Card, CardContent } from "@/components/ui/card";

const PortfolioSkeletonShimmer = ({ count = 3 }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="group">
          <Card className="overflow-hidden">
            <div className="relative overflow-hidden p-4 bg-[#f7f7f7] dark:bg-[#0B111D]">
              {/* Image skeleton with shimmer */}
              <div className="relative w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
            <CardContent className="p-6">
              {/* Title skeleton with shimmer */}
              <div className="relative h-6 bg-gray-300 dark:bg-gray-700 rounded-md mb-2 w-3/4 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Description skeleton with shimmer */}
              <div className="space-y-2 mb-3">
                {[1, 0.85, 0.8, 0.65].map((width, lineIndex) => (
                  <div
                    key={lineIndex}
                    className="relative h-4 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden"
                    style={{ width: `${width * 100}%` }}
                  >
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Tags skeleton with shimmer */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: Math.floor(Math.random() * 4) + 2 }).map(
                  (_, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="relative h-6 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden"
                      style={{ width: `${Math.random() * 40 + 60}px` }}
                    >
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};


export default PortfolioSkeletonShimmer