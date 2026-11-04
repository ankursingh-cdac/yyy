import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "editorial" | "full";
  children: React.ReactNode;
}

export function SectionContainer({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
    editorial: "max-w-3xl mx-auto px-4 sm:px-6",
    full: "w-full px-4 sm:px-6 lg:px-12",
  };

  return (
    <div className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
