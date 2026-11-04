/**
 * Aadi Yoga – Centralized Brand Design Tokens
 * 
 * Strict adherence required: Do not introduce arbitrary colors or fonts.
 * Reference: .agents/rules/aadi-yoga-brand-design.md
 */

export const BRAND_COLORS = {
  // Primary
  warmIvory: "#F7F4EC",       // Primary background
  forestGreen: "#183C32",     // Primary brand, CTAs, headings
  
  // Secondary
  sageGreen: "#71816A",       // Accents, highlights, badges
  warmSand: "#DCCDB6",        // Secondary background, cards
  mutedTerracotta: "#B8755B", // Decorative spiritual accents
  darkCharcoal: "#292C27",    // Primary body text
  
  // Supporting
  white: "#FFFFFF",           // Clean surfaces
  lightBorder: "#E7E2D7",     // Subtle dividers and outlines
  mutedText: "#77796F",       // Secondary text, metadata
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: "var(--font-cormorant)",
    body: "var(--font-manrope)",
  },
  scales: {
    display: "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1]",
    h1: "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15]",
    h2: "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.2]",
    h3: "font-serif text-xl sm:text-2xl md:text-3xl font-medium leading-[1.3]",
    h4: "font-serif text-lg sm:text-xl md:text-2xl font-medium leading-[1.3]",
    eyebrow: "font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-sage-green",
    bodyLarge: "font-sans text-lg sm:text-xl font-normal leading-relaxed text-dark-charcoal/90",
    body: "font-sans text-base font-normal leading-relaxed text-dark-charcoal/85",
    bodySmall: "font-sans text-sm font-normal leading-normal text-muted-text",
    meta: "font-sans text-xs font-medium uppercase tracking-wider text-muted-text",
  },
} as const;

export const CONTAINERS = {
  base: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
  editorial: "max-w-3xl mx-auto px-4 sm:px-6",
} as const;
