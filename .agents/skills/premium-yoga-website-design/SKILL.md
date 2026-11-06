---
name: premium-yoga-website-design
description: Workflows and guidelines for building, styling, and expanding the Aadi Yoga website while preserving editorial aesthetics, SEO parity, and design system tokens.
---

# Premium Yoga Website Design & Implementation Skill

Use this skill whenever adding new pages, courses, sections, or interactive components to the Aadi Yoga website.

## 1. Pre-Flight Checklist Before Writing Code
1. Review `AGENTS.md` and `.agents/rules/aadi-yoga-brand-design.md`.
2. Ensure you are using approved color tokens:
   - Primary: Warm Ivory (`#F7F4EC`), Forest Green (`#183C32`)
   - Secondary: Sage Green (`#71816A`), Warm Sand (`#DCCDB6`), Muted Terracotta (`#B8755B`), Dark Charcoal (`#292C27`)
   - Supporting: White (`#FFFFFF`), Light Border (`#E7E2D7`), Muted Text (`#77796F`)
3. Ensure typography uses:
   - Display/Headings: `Cormorant Garamond` (`font-serif`)
   - Body/Interface: `Manrope` (`font-sans`)
4. Check SEO route parity with `aadiyogaschool.com` (slug naming, canonical URLs, meta titles/descriptions).

## 2. Standard Pattern for New Sections
Every section should follow the editorial pattern:
```tsx
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { SectionHeading } from "@/components/common/typography/SectionHeading";

interface ExampleSectionProps {
  // props
}

export function ExampleSection({ ...props }: ExampleSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-warm-ivory text-dark-charcoal">
      <SectionContainer>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <SectionHeading
            title="Deepen Your Yogic Practice"
            subtitle="Under the guidance of authentic Himalayan masters on the banks of Ganga."
          />
        </div>
        {/* Section content */}
      </SectionContainer>
    </section>
  );
}
```

## 3. SEO Checklist for Any New Route
- Create page inside `src/app/<route-slug>/page.tsx`.
- Add `export const metadata: Metadata = { ... }` with canonical URL pointing to `https://aadiyogaschool.com/<route-slug>`.
- Add route entry to `src/app/sitemap.ts`.
- Ensure JSON-LD Structured Data is embedded where appropriate.
