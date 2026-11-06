import { HeroSection } from "@/components/sections/hero/HeroSection";
import { FeaturePillars } from "@/components/sections/introduction/FeaturePillars";
import { BrandIntroSection } from "@/components/sections/introduction/BrandIntroSection";
import { WhyRishikeshSection } from "@/components/sections/about/WhyRishikeshSection";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { TeachersSection } from "@/components/sections/teachers/TeachersSection";
import { TestimonialsSection } from "@/components/sections/testimonials/TestimonialsSection";
import { LatestBlogsSection } from "@/components/sections/blog/LatestBlogsSection";
import { GallerySection } from "@/components/sections/gallery/GallerySection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. CINEMATIC HERO */}
      <HeroSection />

      {/* 2. 3 QUICK FEATURE PILLARS */}
      <FeaturePillars />

      {/* 3. WELCOME AT AADI YOGA TEACHER TRAINING INDIA */}
      <BrandIntroSection />

      {/* 4. BEST YOGA TEACHER TRAINING INDIA NARRATIVE */}
      <WhyRishikeshSection />

      {/* 5. WHAT WE OFFER (COURSES & RETREATS) */}
      <CoursesSection />

      {/* 6. BEST YOGA TEACHER TRAINING SCHOOL IN RISHIKESH & DAILY SCHEDULE */}
      <ExperienceSection />

      {/* 7. TEACHERS & GUIDANCE */}
      <TeachersSection />

      {/* 8. STUDENT EXPERIENCES & TESTIMONIALS */}
      <TestimonialsSection />

      {/* 9. LATEST BLOGS */}
      <LatestBlogsSection />

      {/* 10. IMAGE GALLERY */}
      <GallerySection />

      {/* 11. CALL TO ACTION & ADMISSIONS */}
      <CtaSection />
    </>
  );
}
