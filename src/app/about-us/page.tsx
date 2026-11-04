import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { BrandIntroSection } from "@/components/sections/introduction/BrandIntroSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export const metadata: Metadata = {
  title: "About Us | Aadi Yoga School Rishikesh",
  description:
    "Learn about Aadi Yoga School, an authentic Yoga Alliance registered yoga institution nestled in Rishikesh along the sacred banks of River Ganga.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <div>
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Our Sacred Heritage" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            About Aadi Yoga School
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Founded with the pure intention of preserving traditional Himalayan yogic knowledge and sharing it with sincere practitioners across the globe.
          </p>
        </SectionContainer>
      </div>

      <BrandIntroSection />
      <ExperienceSection />
      <CtaSection />
    </div>
  );
}
