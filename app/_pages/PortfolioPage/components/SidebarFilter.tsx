"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const categories = [
  { id: 1, value: "all", label: "All" },
  { id: 2, value: "webapp", label: "Web App" },
  { id: 3, value: "Portfolio", label: "Portfolio" },
  { id: 4, value: "e-commerce", label: "E-commerce" },
  { id: 5, value: "landing-page", label: "Landing Page" },
  { id: 6, value: "dashboard", label: "Dashboard" },
];

const technologies = [
  { id: 1, value: "all", label: "All" },
  { id: 2, value: "react.js", label: "React" },
  { id: 3, value: "next.js", label: "Next.js" },
  { id: 4, value: "vue.js", label: "Vue.js" },
  { id: 5, value: "angular.js", label: "Angular" },
  { id: 6, value: "node.js", label: "Node.js" },
  { id: 7, value: "typescript", label: "TypeScript" },
];

interface SidebarFilterProps {
  selectedCategory: string;
  setSelectedCategory: (_category: string) => void;
  selectedTechnology: string;
  setSelectedTechnology: (_technology: string) => void;
}

const SidebarFilter = ({
  selectedCategory,
  setSelectedCategory,
  selectedTechnology,
  setSelectedTechnology,
}: SidebarFilterProps) => {
  return (
    <>
      <Card className="p-6  sticky top-24">
        <h3 className="font-semibold text-lg mb-4 hidden lg:block">
          Filter Projects
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Category</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <Button
                  key={category?.value}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start text-xs ${category?.value === selectedCategory && "bg-primary text-white"}`}
                  onClick={() => setSelectedCategory(category?.value)}
                >
                  {category?.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2">Technology</h4>
            <div className="space-y-2">
              {technologies.map((tech) => (
                <Button
                  key={tech?.id}
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start text-xs ${tech?.value === selectedTechnology && "bg-primary text-white"}`}
                  onClick={() => setSelectedTechnology(tech?.value)}
                >
                  {tech?.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SidebarFilter;
