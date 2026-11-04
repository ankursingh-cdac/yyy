import { HeroSection } from "@/components/sections/hero/HeroSection";
import { BrandIntroSection } from "@/components/sections/introduction/BrandIntroSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { TeachersSection } from "@/components/sections/teachers/TeachersSection";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";
import { GallerySection } from "@/components/sections/gallery/GallerySection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 2: CINEMATIC HERO */}
      <HeroSection />

      {/* SECTION 3: BRAND INTRODUCTION */}
      <BrandIntroSection />

      {/* SECTION 4: YOGA PROGRAMS SHOWCASE */}
      <CoursesSection />

      {/* SECTION 5: THE RISHIKESH EXPERIENCE */}
      <ExperienceSection />

      {/* SECTION 6: TEACHERS & GUIDANCE */}
      <TeachersSection />

      {/* SECTION 7: STUDENT EXPERIENCES & TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 8: IMAGE GALLERY */}
      <GallerySection />

      {/* SECTION 9: CALL TO ACTION */}
      <CtaSection />
    </>
  );
}
