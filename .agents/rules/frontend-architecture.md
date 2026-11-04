# Aadi Yoga – Frontend Architecture Rules

## 1. Next.js App Router Architecture
- **Framework**: Next.js App Router with React Server Components (RSC) by default.
- **Client Components**: Mark with `'use client'` only when state, event handlers, lifecycle hooks, browser APIs, or Redux hooks are needed.
- **Server Data Fetching**: Prefer Server Components for data loading, passing immutable props down to client presentation components.
- **SEO & Metadata**:
  - Maintain route parity with the live domain `aadiyogaschool.com`.
  - Add page-specific titles, descriptions, and OpenGraph images using Next.js Metadata API.
  - Implement JSON-LD Structured Data (`YogaSchool`, `Organization`, `BreadcrumbList`) in layout and pages.
  - Provide dynamic `sitemap.ts` and `robots.ts` in `src/app/`.

## 2. Redux Toolkit Guidelines
- **Store Creation**: Use `makeStore()` function inside `src/store/index.ts`. Never export a global singleton store.
- **Provider**: Wrap client tree in `StoreProvider` (`src/store/provider.tsx`) using `useRef` to ensure single instance per browser session.
- **Typed Hooks**: Always use `useAppDispatch` and `useAppSelector` from `src/store/hooks.ts`. Never import raw `useDispatch`/`useSelector`.
- **Scope of Redux**:
  - Global UI state (modal open/close, mobile menu, search drawer).
  - User preferences (program filter, currency toggle).
  - Multi-step application/enquiry workflows.
- **Do NOT put in Redux**:
  - Local form state (use React Hook Form + Zod).
  - Server data that does not mutate on the client.
  - URL-driven navigation or query filters (use `next/navigation` search params).

## 3. Directory Structure Standards
```
src/
├── app/                  # Routes, layouts, metadata, global styles, sitemap
├── components/
│   ├── ui/               # Tailored UI primitives (Button, Input, Dialog, etc.)
│   ├── layout/           # Header, Footer, Navigation, MobileNav
│   ├── common/           # SectionHeading, EyebrowLabel, PageContainer
│   └── sections/         # Feature-specific section blocks for pages
├── features/             # Domain logic (courses, enquiries, navigation)
├── store/                # Redux Toolkit setup, slices, hooks
├── config/               # Site configuration, navigation, brand tokens
├── data/                 # Static verified data (courses, teachers, testimonials)
├── hooks/                # Custom reusable React hooks
├── lib/                  # Utilities (cn, formatting, validators)
└── types/                # TypeScript interfaces and domain types
```

## 4. Reusability & Modularity
- Each file must have a single primary responsibility.
- Reusable UI elements must accept standard HTML attributes and a `className` prop merging via `cn()`.
- Do not create monolithic 1,000-line page components. Break sections into modular components in `src/components/sections/`.
