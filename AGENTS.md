<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AADI YOGA – MASTER PROJECT INSTRUCTIONS & PERMANENT DIRECTIVES

> **MANDATORY DIRECTIVE FOR ALL ASSISTANTS & AGENTS**:
> This document is the supreme source of truth for the **Aadi Yoga** project.
> Before starting ANY task, editing ANY component, or generating ANY new page, you MUST read this document and the referenced rules in `.agents/rules/`.
> The design system, color palette, typography hierarchy, SEO architecture, and technology standards are PERMANENT and must remain consistent across all phases of development.

---

## 1. Project Overview & Brand Identity
- **Brand**: Aadi Yoga School
- **Location**: Rishikesh, Uttarakhand, India (Near 13 Stories Temple, Laxman Jhula)
- **Official Domain**: `https://aadiyogaschool.com/`
- **Category**: Yoga School, Yoga Alliance USA RYS, Yoga Teacher Training (100h, 200h, 300h YTTC), Yoga Retreats & Himalayan Wellness Education.
- **Approved Aesthetic Direction**: **NATURE-INSPIRED VISUALS + PREMIUM EDITORIAL TYPOGRAPHY**.
  - Evokes: Himalayan mountains, River Ganga, morning sunlight, peaceful ashram shalas, sacred serenity.
  - Feels like: An international luxury wellness and yoga retreat brand.
  - NEVER looks like: A generic bootstrap/AI SaaS template or neon fitness studio.

---

## 2. Permanent Brand Tokens
Never use hardcoded arbitrary colors. Always use CSS variables and Tailwind classes:
- **Warm Ivory (`#F7F4EC`)**: Primary page background (`bg-warm-ivory`, `text-warm-ivory`)
- **Forest Green (`#183C32`)**: Primary brand color, CTA buttons, dark editorial contrast (`bg-forest-green`, `text-forest-green`)
- **Sage Green (`#71816A`)**: Secondary accents, leaf highlights, badges (`bg-sage-green`, `text-sage-green`)
- **Warm Sand (`#DCCDB6`)**: Secondary backgrounds, cards, subtle accents (`bg-warm-sand`, `text-warm-sand`)
- **Muted Terracotta (`#B8755B`)**: Limited decorative accents (`bg-muted-terracotta`, `text-muted-terracotta`)
- **Dark Charcoal (`#292C27`)**: Main body text (`text-dark-charcoal`)
- **White (`#FFFFFF`)**: Card surfaces, clean containers (`bg-white`)
- **Light Border (`#E7E2D7`)**: Subtle dividers and borders (`border-light-border`)
- **Muted Text (`#77796F`)**: Subtitles, metadata, captions (`text-muted-text`)

---

## 3. Typography Standards
- **Primary Display & Headings**: `Cormorant Garamond` (`font-serif` via `next/font/google`).
- **Body, Navigation & Metadata**: `Manrope` (`font-sans` via `next/font/google`).

---

## 4. Architecture & Technology Stack
- **Framework**: Next.js App Router (React Server Components by default).
- **Language**: TypeScript with strict mode enabled (`"strict": true`).
- **Styling**: Tailwind CSS with custom design tokens in `@theme`.
- **State Management**: Redux Toolkit (`@reduxjs/toolkit` and `react-redux`) using `makeStore()` and client `StoreProvider`.
- **Animations**: `framer-motion` (gentle, organic reveals; respect `prefers-reduced-motion`).
- **Icons**: `lucide-react`.
- **Forms**: `react-hook-form` + `zod` for type-safe validation.

---

## 5. Permanent Rules & Skills Reference
Always refer to these documents for deep specifications:
1. Brand Design: [`.agents/rules/aadi-yoga-brand-design.md`](file:///.agents/rules/aadi-yoga-brand-design.md)
2. Frontend Architecture: [`.agents/rules/frontend-architecture.md`](file:///.agents/rules/frontend-architecture.md)
3. Coding Standards: [`.agents/rules/coding-standards.md`](file:///.agents/rules/coding-standards.md)
4. Responsive Design & a11y: [`.agents/rules/responsive-design.md`](file:///.agents/rules/responsive-design.md)
5. Design & Build Skill: [`.agents/skills/premium-yoga-website-design/SKILL.md`](file:///.agents/skills/premium-yoga-website-design/SKILL.md)

---

## 6. SEO & Sitemap Parity Rules
- **Zero SEO Loss**: Any route created must correspond with or preserve the canonical URL structure of `https://aadiyogaschool.com/`.
- Maintain `src/app/sitemap.ts` and `src/app/robots.ts`.
- Embed valid Schema.org JSON-LD (`YogaSchool`, `Organization`, `BreadcrumbList`).
- Verified Phone: `+91 80056 56529`, Email: `aadiyogaschool@gmail.com` / `booking@aadiyogaschool.com`.
- Location: Near 13 Stories Temple, Laxman Jhula, Rishikesh, Uttarakhand 249302, India.
