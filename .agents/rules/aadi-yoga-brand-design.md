# Aadi Yoga – Brand & Design Guidelines

## 1. Brand Identity & Visual Direction
- **Brand**: Aadi Yoga (Yoga School, Teacher Training & Retreats).
- **Location**: Rishikesh, Uttarakhand, India (Banks of sacred River Ganga, near 13 Stories Temple, Laxman Jhula).
- **Core Aesthetic**: **NATURE-INSPIRED VISUALS + PREMIUM EDITORIAL TYPOGRAPHY**.
- **Inspiration**:
  - Himalayan foothills & mist
  - Holy River Ganga & morning sunlight
  - Green forests and tranquil ashram environments
  - Traditional Indian spiritual heritage with contemporary editorial refinement
- **Tone**: Calm, grounding, timeless, trustworthy, meditative, and authentic. Never look like a generic AI-generated template or neon fitness app.

## 2. Approved Color Palette (FINAL & PERMANENT)
Do NOT introduce arbitrary hex codes. Always use centralized CSS variables and Tailwind color tokens:

### Primary Colors
- **Warm Ivory (`#F7F4EC`)**: Primary background for pages and light surfaces. Evokes handmade paper and natural ashram walls.
  - CSS Variable: `--color-warm-ivory` / Tailwind: `bg-warm-ivory`, `text-warm-ivory`
- **Forest Green (`#183C32`)**: Primary brand anchor, primary action buttons, key editorial headings, dark contrast sections.
  - CSS Variable: `--color-forest-green` / Tailwind: `bg-forest-green`, `text-forest-green`

### Secondary Colors
- **Sage Green (`#71816A`)**: Secondary accents, leaf motifs, subtle highlights, badges.
  - CSS Variable: `--color-sage-green` / Tailwind: `bg-sage-green`, `text-sage-green`
- **Warm Sand (`#DCCDB6`)**: Secondary backgrounds, cards, subtle divider accents, course info badges.
  - CSS Variable: `--color-warm-sand` / Tailwind: `bg-warm-sand`, `text-warm-sand`
- **Muted Terracotta (`#B8755B`)**: Limited decorative accents, spiritual accents (kumkum/clay), focus badges.
  - CSS Variable: `--color-muted-terracotta` / Tailwind: `bg-muted-terracotta`, `text-muted-terracotta`
- **Dark Charcoal (`#292C27`)**: Main body text, dark borders, deep contrast.
  - CSS Variable: `--color-dark-charcoal` / Tailwind: `text-dark-charcoal`

### Supporting Colors
- **White (`#FFFFFF`)**: Card surfaces, contrast overlays, modals.
- **Light Border (`#E7E2D7`)**: Delicate borders, clean separation lines.
  - CSS Variable: `--color-light-border` / Tailwind: `border-light-border`
- **Muted Text (`#77796F`)**: Subtitles, metadata, dates, caption copy.
  - CSS Variable: `--color-muted-text` / Tailwind: `text-muted-text`

### Strict Palette Rules
1. Never replace Forest Green with neon or electric green.
2. Never introduce purple, bright pink, or cyber gradients.
3. No harsh drop shadows or neon glows; use soft, warm ambient shadows.
4. Dark sections are permitted only in Forest Green (`#183C32`) or Dark Charcoal (`#292C27`) with Warm Ivory / White typography.

## 3. Editorial Typography System
- **Heading / Display Font**: `Cormorant Garamond` (Google Font via `next/font/google`, `font-serif`).
  - Weights: Regular 400, Medium 500, Semi-bold 600, Italic 400.
  - Style: Refined editorial letter spacing, generous line height, dignified presence.
- **Body / Interface Font**: `Manrope` (Google Font via `next/font/google`, `font-sans`).
  - Weights: Light 300, Regular 400, Medium 500, Semi-bold 600.
  - Style: High legibility, clean sans-serif geometry, crisp metadata.

### Typography Hierarchy Tokens
- **Hero Display**: `text-4xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight tracking-tight`
- **Section Heading (H2)**: `text-3xl md:text-5xl font-serif font-normal leading-tight`
- **Subheading (H3)**: `text-2xl md:text-3xl font-serif font-medium`
- **Card Title (H4)**: `text-xl md:text-2xl font-serif font-medium`
- **Eyebrow Label**: `text-xs uppercase tracking-[0.2em] font-sans font-semibold text-sage-green`
- **Body Large**: `text-lg md:text-xl font-sans text-muted-text leading-relaxed`
- **Body Regular**: `text-base font-sans text-dark-charcoal/90 leading-relaxed`
- **Body Small / Meta**: `text-sm font-sans text-muted-text leading-normal`

## 4. Photography & Imagery Principles
- Authentic photography of Rishikesh, River Ganga, the Himalayas, traditional yoga practice, and the Laxman Jhula campus.
- Avoid hyper-filtered, unnatural stock photos or AI hallucinations.
- Maintain consistent aspect ratios (e.g., `4/3` for course cards, `3/4` for teacher portraits, `16/9` for hero landscape).
- Utilize Next.js `Image` with explicit width/height or `fill` with `sizes` for optimal WebP/AVIF delivery.
- If placeholder images are temporarily used, they must be high-resolution Unsplash captures of genuine Rishikesh / Himalayan landscapes and documented in `src/data/`.

## 5. Motion & Micro-interactions
- Motion is subtle, slow, and serene (mimicking deep breath).
- Use `framer-motion` for gentle fade-up on scroll (`y: 20 -> y: 0`, duration: 0.6s to 0.8s, ease: `[0.22, 1, 0.36, 1]`).
- Respect `prefers-reduced-motion`.
- Interactive hover effects: soft opacity shifts, gentle card elevate (`shadow-md` to `shadow-lg`), and organic border transitions.
