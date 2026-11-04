"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/common/buttons/SecondaryButton";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";

export function HeroSection() {
  const dispatch = useAppDispatch();

  const handleOpenEnquiry = () => {
    dispatch(openEnquiryModal("200-Hour Yoga Teacher Training Course in Rishikesh"));
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-forest-green">
      {/* Background Cinematic Image with Subtle Parallax/Dimming */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=2400&q=85"
          alt="Himalayan mountain peaks overlooking the sacred River Ganga in Rishikesh"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Editorial Multi-layered Gradient Overlay for Pristine Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 via-forest-green/70 to-forest-green/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-transparent to-black/30" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-warm-ivory flex flex-col items-center">
        {/* Location & Accreditation Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-sans tracking-widest uppercase text-warm-sand mb-8 animate-in fade-in duration-700">
          <MapPin className="w-3.5 h-3.5 text-warm-sand" />
          <span>Rishikesh, Himalayas • Yoga Alliance USA (RYS)</span>
        </div>

        {/* Grand Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-warm-ivory max-w-4xl mb-6">
          Ancient Yogic Wisdom in the Lap of the Himalayas
        </h1>

        {/* Serene Subtitle */}
        <p className="font-sans text-base sm:text-xl md:text-2xl font-light text-warm-sand/90 max-w-2xl leading-relaxed mb-10">
          Immerse yourself in authentic Hatha and Ashtanga Vinyasa Teacher
          Training beside the sacred waters of River Ganga.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <PrimaryButton
            onClick={handleOpenEnquiry}
            variant="sand"
            size="lg"
            className="w-full sm:w-auto text-forest-green"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Programs & Dates
          </PrimaryButton>

          <SecondaryButton
            href="#brand-intro"
            variant="outline-ivory"
            size="lg"
            className="w-full sm:w-auto"
          >
            Discover Aadi Yoga
          </SecondaryButton>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center w-full max-w-3xl">
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-warm-sand">
              2017
            </div>
            <div className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-warm-ivory/80 mt-1">
              Established Lineage
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-warm-sand">
              1,200+
            </div>
            <div className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-warm-ivory/80 mt-1">
              Global Graduates
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-warm-sand">
              RYS 200/300
            </div>
            <div className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-warm-ivory/80 mt-1">
              Yoga Alliance USA
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl text-warm-sand">
              100%
            </div>
            <div className="font-sans text-[11px] sm:text-xs uppercase tracking-wider text-warm-ivory/80 mt-1">
              Authentic Sadhana
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-70">
        <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-warm-sand">
          Scroll Down
        </span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-warm-sand to-transparent animate-pulse" />
      </div>
    </section>
  );
}
