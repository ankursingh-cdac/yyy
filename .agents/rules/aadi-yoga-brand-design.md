# Aadi Yoga – Brand & Design Guidelines

## 1. Brand Identity & Visual Direction
- **Brand**: Aadi Yoga School (Yoga Teacher Training & Himalayan Retreats).
- **Location**: Rishikesh, Uttarakhand, India (Banks of sacred River Ganga, near 13 Stories Temple, Laxman Jhula).
- **Official Domain**: `https://aadiyogaschool.com/`
- **Core Aesthetic**: **AUTHENTIC BRAND IDENTITY + TAILWIND UI EDITORIAL POLISH**.
- **Inspiration**:
  - Genuine ashram sadhana in Rishikesh
  - Sacred River Ganga and Himalayan peaks
  - Authentic Brand Orange (`#F58220`) from original emblem and logo
  - Deep Navy (`#14213D`) for editorial depth and contrast
- **Tone**: Authentic, grounded, disciplined, serene, trustworthy. Never look like a generic bootstrap site or neon fitness app.

---

## 2. Approved Color Palette (FINAL & PERMANENT)
Do NOT introduce arbitrary hex codes. Always use centralized CSS variables and Tailwind color tokens:

### Primary Colors
- **Brand Orange (`#F58220`)**: Primary brand anchor, logo emblem, key action buttons, price badges, and active tabs.
  - CSS Variable: `--color-brand-orange` / Tailwind: `bg-brand-orange`, `text-brand-orange`
- **Brand Orange Hover (`#D96E14`)**: WCAG 2.1 AA compliant darkened hover state for text contrast.
  - CSS Variable: `--color-brand-orange-hover` / Tailwind: `hover:bg-brand-orange-hover`
- **Brand Orange Light (`#FFF4EB`)**: Soft tinted pill and highlight backgrounds.
  - CSS Variable: `--color-brand-orange-light` / Tailwind: `bg-brand-orange-light`

### Secondary Colors
- **Deep Navy (`#14213D`)**: Editorial dark banners, hero contrast, global footer background.
  - CSS Variable: `--color-deep-navy` / Tailwind: `bg-deep-navy`, `text-deep-navy`
- **Brand Terracotta (`#C3512F`)**: Sourced from live fee schedule table headers.
  - CSS Variable: `--color-brand-terracotta` / Tailwind: `bg-brand-terracotta`
- **Neutral Light Background (`#F5F6F8`)**: Primary page background for clarity and legibility.
  - CSS Variable: `--color-neutral-light` / Tailwind: `bg-neutral-light`
- **Surface White (`#FFFFFF`)**: Card surfaces, containers, modals.
  - CSS Variable: `--color-white` / Tailwind: `bg-white`

### Typography & Border Colors
- **Dark Charcoal (`#242424`)**: Main body text and display headings.
  - CSS Variable: `--color-charcoal` / Tailwind: `text-charcoal`
- **Muted Slate (`#666666`)**: Subtitles, duration labels, teacher specialties, footer copy.
  - CSS Variable: `--color-muted-slate` / Tailwind: `text-muted-slate`
- **Border Light (`#E5E7EB`)**: Subtle dividers and card outlines.
  - CSS Variable: `--color-border-light` / Tailwind: `border-border-light`

---

## 3. Editorial Typography System
- **Heading / Display Font**: `Cormorant Garamond` (Google Font via `next/font/google`, `font-serif`).
  - Weights: Regular 400, Medium 500, Semi-bold 600, Bold 700.
- **Body / Interface Font**: `Manrope` (Google Font via `next/font/google`, `font-sans`).
  - Weights: Regular 400, Medium 500, Semi-bold 600, Bold 700.

---

## 4. Authentic Photography Standards
- **Zero External Stock Hotlinking**: Only use local assets stored in `public/images/` and registered in `src/data/image-assets.ts`.
- **Authentic Imagery**: Real Rishikesh ashram photos, authentic Ganga views, verified faculty portraits, genuine training sessions.
