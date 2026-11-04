# Aadi Yoga – Coding Standards

## 1. Strict TypeScript Standards
- Enable strict mode in `tsconfig.json` (`"strict": true`).
- **No `any` types**: Declare explicit types or use generics/unknown with narrowing.
- Declare domain interfaces in `src/types/` (e.g. `Course`, `Teacher`, `Testimonial`, `NavSection`).
- All component props must be typed with TypeScript interfaces or types.
- Event handlers and ref types must be strictly typed (e.g., `React.MouseEvent<HTMLButtonElement>`).

## 2. Component Design & Clean Code
- Use Named function components or Arrow functions consistently.
- Always include explicit `displayName` or proper naming for debugging.
- Use the `cn()` utility (`clsx` + `tailwind-merge`) for all dynamic classes.
- Avoid duplicate constants: import from `src/config/` or `src/lib/constants.ts`.
- Avoid hardcoded values in multiple places: brand phone, email, and social links belong in `src/config/site.ts`.

## 3. Forms & Data Validation
- Use `react-hook-form` with `@hookform/resolvers/zod`.
- Declare schemas in `src/features/<feature>/schemas/` or `src/lib/validations/`.
- Validate user input both on blur and submit.
- Provide clear, calm, and accessible error messages matching brand voice.

## 4. Linting & Formatting
- Code must pass `npm run lint` and `npx tsc --noEmit` cleanly with 0 warnings or errors.
- Clean imports ordered:
  1. React & Next.js built-ins (`react`, `next/link`, `next/image`, `next/font`)
  2. Third-party packages (`framer-motion`, `lucide-react`, `@reduxjs/toolkit`)
  3. Absolute project imports (`@/components/...`, `@/store/...`, `@/config/...`)
  4. Relative imports (`./subcomponent`, `../types`)
