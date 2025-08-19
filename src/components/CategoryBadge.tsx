import React from "react";
import { cn } from "@/lib/utils";

type CategoryBadgeProps = {
  name: string;
  colour: string;
  className?: string;
};

export default function CategoryBadge({ colour, name, className }: CategoryBadgeProps) {
  return (
    <span
      className={cn(
        "flex items-center justify-center w-40 h-8 border rounded-full text-sm font-semibold text-center",
        className
      )}
      style={{
        borderColor: colour,
        color: colour,
        backgroundColor: "transparent",
      }}
    >
      {name}
    </span>
  );
}

