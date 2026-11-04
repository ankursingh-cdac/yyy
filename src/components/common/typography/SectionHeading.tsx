import React from "react";
import { cn } from "@/lib/utils";
import { EyebrowLabel } from "./EyebrowLabel";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: "sage" | "terracotta" | "ivory";
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  isDark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "sage",
  title,
  subtitle,
  align = "center",
  isDark = false,
  className,
}: SectionHeadingProps) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16",
        alignment[align],
        className
      )}
    >
      {eyebrow && (
        <EyebrowLabel
          text={eyebrow}
          variant={eyebrowVariant}
          className={align === "center" ? "justify-center" : ""}
        />
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.18] tracking-tight",
          isDark ? "text-warm-ivory" : "text-forest-green"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light",
            isDark ? "text-warm-sand/90" : "text-muted-text"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
