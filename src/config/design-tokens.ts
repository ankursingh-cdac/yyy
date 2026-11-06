/**
 * Aadi Yoga – Centralized Brand Design Tokens
 * 
 * Strict adherence required: No cold blue or AI-style neon colors.
 * Reference: Authentic Aadi Yoga School branding (aadiyogaschool.com)
 * Warm Saffron Orange (#F58220), Faded Red / Terracotta (#C3512F, #A83C24), and Deep Warm Earth (#24110A).
 */

export const BRAND_COLORS = {
  // Primary Warm Saffron Orange
  brandOrange: "#FF8A27",       // Primary radiant saffron orange, logo emblem, buttons, highlights
  brandOrangeHover: "#E67312",  // WCAG compliant hover state
  brandOrangeLight: "#FFF6ED",  // Soft tint for badges and highlights
  
  // Warm Faded Red & Terracotta
  brandTerracotta: "#C3512F",       // Fee tables, schedule highlights, badges
  brandTerracottaDark: "#8F2F14",   // Darker terracotta accent
  brandFadedRed: "#A83C24",         // Warm faded red
  
  // Deep Warm Earth & Ashram Tone (Zero Blue)
  deepEarth: "#24110A",         // Deep warm ashram mahogany/earth for contrast sections, overlays, footer
  deepNavy: "#24110A",          // Replaced by deep warm earth (no cold navy)
  
  // Surfaces & Text
  neutralLight: "#FAF9F6",      // Warm organic linen page background
  charcoal: "#261D1A",          // Warm espresso charcoal for body text and headings
  mutedSlate: "#6B5E59",        // Warm muted text, metadata
  white: "#FFFFFF",             // Crisp card surfaces, containers
  borderLight: "#EBE5E0",       // Subtle warm outlines
} as const;

export const TYPOGRAPHY = {
  fonts: {
    heading: "var(--font-manrope)",
    body: "var(--font-manrope)",
  },
  scales: {
    display: "font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]",
    h1: "font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]",
    h2: "font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2]",
    h3: "font-sans text-xl sm:text-2xl md:text-3xl font-semibold leading-[1.3]",
    h4: "font-sans text-lg sm:text-xl md:text-2xl font-semibold leading-[1.3]",
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
