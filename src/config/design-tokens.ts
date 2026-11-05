/**
 * Aadi Yoga – Centralized Brand Design Tokens
 * 
 * Strict adherence required: Do not introduce arbitrary colors or fonts.
 * Reference: Authentic Aadi Yoga School branding (aadiyogaschool.com)
 */

export const BRAND_COLORS = {
  // Primary
  brandOrange: "#F58220",       // Primary brand color, logo emblem, buttons, action highlights
  brandOrangeHover: "#D96E14",  // WCAG compliant hover state
  brandOrangeLight: "#FFF4EB",  // Soft tint for badges and highlights
  
  // Secondary / Contrasting
  deepNavy: "#14213D",          // Dark hero overlays, editorial dark banners, global footer
  brandTerracotta: "#C3512F",   // Fee tables, schedule highlights
  neutralLight: "#F5F6F8",      // Contemporary light background
  charcoal: "#242424",          // Primary dark body text and headings
  mutedSlate: "#666666",        // Secondary descriptions, metadata
  
  // Surfaces & Outlines
  white: "#FFFFFF",             // Card surfaces, containers
  borderLight: "#E5E7EB",       // Subtle dividers and outlines
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: "var(--font-cormorant)",
    body: "var(--font-manrope)",
  },
  scales: {
    display: "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]",
    h1: "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]",
    h2: "font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]",
    h3: "font-serif text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.3]",
    h4: "font-serif text-lg sm:text-xl md:text-2xl font-semibold leading-[1.3]",
    eyebrow: "font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-brand-orange",
    bodyLarge: "font-sans text-lg sm:text-xl font-normal leading-relaxed text-charcoal/90",
    body: "font-sans text-base font-normal leading-relaxed text-charcoal/85",
    bodySmall: "font-sans text-sm font-normal leading-normal text-muted-slate",
    meta: "font-sans text-xs font-semibold uppercase tracking-wider text-muted-slate",
  },
} as const;

export const CONTAINERS = {
  header: "w-full max-w-[1440px] mx-auto px-4 lg:px-8",
  base: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
  editorial: "max-w-3xl mx-auto px-4 sm:px-6",
} as const;
