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
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Himalayan Lineage" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            Our Revered Teachers
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Guidance from authentic native yogis who live and breathe the ancient Vedic traditions.
          </p>
        </SectionContainer>
      </div>

      <TeachersSection />
      <CtaSection />
    </div>
  );
}
