import React from "react";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface EmptyResultProps {
  onReset?: () => void;
  heading?: string;
  description?: string;
}

const EmptyResult = ({
  onReset,
  heading = "No results found",
  description = "We couldn't find any results for your search.",
}: EmptyResultProps) => {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <Card className="max-w-md w-full  !bg-transparent">
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <div className="rounded-full bg-muted p-4 mb-4">
            <FileQuestion className="w-10 h-10 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{heading}</h3>
          <p className="text-sm text-muted-foreground mb-6">{description}</p>
          {onReset && (
            <Button onClick={onReset} variant="outline">
              Clear Filters
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EmptyResult;
