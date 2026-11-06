import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { GallerySection } from "@/components/sections/gallery/GallerySection";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export const metadata: Metadata = {
  title: "Photo Gallery | Aadi Yoga School Rishikesh",
  description:
    "Explore the peaceful campus, yoga shalas, Ganga riverside sessions, and student life at Aadi Yoga School in Rishikesh.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div>
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/15 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            Ashram &amp; Rishikesh Gallery
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Moments of meditation, physical practice, and communal joy in Rishikesh.
          </p>
        </SectionContainer>
      </div>

      <GallerySection />
      <CtaSection />
    </div>
  );
}
