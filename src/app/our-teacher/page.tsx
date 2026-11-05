import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { TeachersSection } from "@/components/sections/teachers/TeachersSection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export const metadata: Metadata = {
  title: "Our Teachers | Certified Yoga Masters in Rishikesh | Aadi Yoga",
  description:
    "Meet the experienced yoga teachers and Himalayan masters at Aadi Yoga School in Rishikesh. Experts in Hatha, Ashtanga, Anatomy, Philosophy and Meditation.",
  alternates: {
    canonical: `${siteConfig.url}/our-teacher`,
  },
};

export default function OurTeacherPage() {
  return (
    <div>
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/15 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <EyebrowLabel text="Himalayan Lineage" variant="orange" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            Our Revered Teachers
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Guidance from authentic native yogis who live and breathe the ancient Vedic traditions.
          </p>
        </SectionContainer>
      </div>

      <TeachersSection />
      <CtaSection />
    </div>
  );
}
