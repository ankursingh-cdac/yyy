import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { CoursesSection } from "@/components/sections/courses/CoursesSection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export const metadata: Metadata = {
  title: "Schedule & Fee Structure | Aadi Yoga School Rishikesh",
  description:
    "Check upcoming dates, batch schedules, and transparent course fee structures for 100-Hour, 200-Hour, 300-Hour Yoga Teacher Training and Retreats in Rishikesh.",
  alternates: {
    canonical: `${siteConfig.url}/schedule-fee-2`,
  },
};

export default function ScheduleFeePage() {
  return (
    <div>
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Transparent Investment" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            Course Schedule & Fee Structure
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            All course fees include accommodation, three daily sattvic vegetarian meals, course study material, and weekend cultural excursions in Rishikesh.
          </p>
        </SectionContainer>
      </div>

      <CoursesSection />
      <CtaSection />
    </div>
  );
}
