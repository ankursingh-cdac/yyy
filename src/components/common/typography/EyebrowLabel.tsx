import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  text: string;
  variant?: "orange" | "terracotta" | "navy" | "white" | "sage" | "ivory";
  className?: string;
}

export function EyebrowLabel({
  text,
  variant = "orange",
  className,
}: EyebrowLabelProps) {
  const variantStyles = {
    orange: "text-brand-orange bg-brand-orange-light/80 border-brand-orange/30",
    terracotta: "text-brand-terracotta bg-[#FFF0EB] border-brand-terracotta/30",
    navy: "text-deep-navy bg-neutral-light border-border-light",
    white: "text-white bg-white/10 border-white/20",
    sage: "text-brand-orange bg-brand-orange-light/80 border-brand-orange/30",
    ivory: "text-white bg-white/10 border-white/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-sans border mb-3.5 shadow-2xs",
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {text}
    </span>
  );
}
