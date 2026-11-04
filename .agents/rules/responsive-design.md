# Aadi Yoga – Responsive Design & Accessibility Standards

## 1. Breakpoint Philosophy
- Follow mobile-first design using Tailwind CSS breakpoints:
  - `sm`: 640px (large phones / small tablets)
  - `md`: 768px (tablets / portrait)
  - `lg`: 1024px (laptops / landscape tablets)
  - `xl`: 1280px (standard desktops)
  - `2xl`: 1536px (wide screens)
- Never just shrink desktop components; redesign layout flow intentionally for handheld interactions.

## 2. Touch & Navigation
- All tap targets must be at least 44x44px on mobile devices.
- Mobile navigation is an accessible slide-out sheet or full-screen overlay with quick access to:
  - Phone call: `tel:+918005656529`
  - WhatsApp: `https://wa.me/918005656529`
  - Course categories
  - "Apply Now" primary button
- Disable background scroll when mobile navigation or modals are active.

## 3. Typography & Spacing Scaling
- Use fluid typography or clear responsive steps:
  - Headings: `text-3xl md:text-5xl lg:text-6xl`
  - Section spacing: `py-16 md:py-24 lg:py-32`
  - Container padding: `px-4 sm:px-6 lg:px-8`
- Maintain comfortable maximum line lengths for readability: `max-w-prose` or `max-w-3xl` for editorial paragraphs.
- Zero horizontal overflow: always ensure `overflow-x-hidden` or clean grid wrapping so no horizontal scrollbars occur on mobile.

## 4. Accessibility (a11y)
- All interactive controls must support keyboard navigation (`Tab`, `Enter`, `Escape`, `Space`).
- Accessible color contrast must meet WCAG AA standards (minimum 4.5:1 for normal text).
- Images must have descriptive `alt` tags representing their visual and context content.
- Respect `prefers-reduced-motion` media query to reduce or disable heavy animations.
