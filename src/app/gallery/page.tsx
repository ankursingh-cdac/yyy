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
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Visual Sanctuary" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            Ashram & Rishikesh Gallery
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Moments of meditation, physical practice, and communal joy in Rishikesh.
          </p>
        </SectionContainer>
      </div>

      <GallerySection />
      <CtaSection />
    </div>
  );
}
