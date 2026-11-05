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
    "Learn about Aadi Yoga School, an authentic Yoga Alliance registered yoga institution nestled in Rishikesh near 13 Stories Temple along the holy River Ganga.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <div>
      <div className="bg-deep-navy text-white py-16 sm:py-24 text-center border-b border-white/10">
        <SectionContainer>
          <EyebrowLabel text="Our Sacred Heritage" variant="orange" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            About Aadi Yoga School
          </h1>
          <p className="font-sans text-base sm:text-lg text-white/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
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
