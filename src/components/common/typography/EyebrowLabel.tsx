import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  text: string;
  variant?: "sage" | "terracotta" | "ivory";
  className?: string;
}

export function EyebrowLabel({
  text,
  variant = "sage",
  className,
}: EyebrowLabelProps) {
  const variantStyles = {
    sage: "text-sage-green",
    terracotta: "text-muted-terracotta",
    ivory: "text-warm-sand",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] font-sans mb-3",
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {text}
    </span>
  );
}
