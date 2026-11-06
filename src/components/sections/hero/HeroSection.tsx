"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";
import { SecondaryButton } from "@/components/common/buttons/SecondaryButton";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";
import { heroAssets } from "@/data/image-assets";

export function HeroSection() {
  const dispatch = useAppDispatch();

  const handleOpenEnquiry = () => {
    dispatch(openEnquiryModal("200-Hour Yoga Teacher Training Course in Rishikesh"));
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#24110A]">
      {/* Background Cinematic Authentic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroAssets.rishikeshValley}
          alt="Panoramic view of Rishikesh Himalayan foothills and holy Ganga"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Warm Ashram Sunset & Terracotta Vignette Overlay (Zero Blue) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#24110A]/95 via-[#3D1A10]/85 to-[#1F0E09]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24110A] via-transparent to-[#180A05]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white flex flex-col items-center">
      

        {/* Grand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl mb-6">
          Transform Your Practice in the{" "}
          <span className="text-brand-orange underline decoration-brand-orange/40 underline-offset-8">
            Yoga Capital
          </span>{" "}
          of the World
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl md:text-2xl font-normal text-[#FBF8F5] max-w-3xl leading-relaxed mb-10">
          Authentic 100h, 200h, and 300h Yoga Teacher Training &amp; Himalayan Retreats on the sacred banks of River Ganga in Rishikesh, India.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <PrimaryButton
            onClick={handleOpenEnquiry}
            variant="orange"
            size="lg"
            className="w-full sm:w-auto text-white shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Programs &amp; Fees
          </PrimaryButton>

          <SecondaryButton
            href="#courses"
            variant="outline-white"
            size="lg"
            className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:border-brand-orange/60"
          >
            View 2026 Batch Dates
          </SecondaryButton>
        </div>

        {/* Bottom Trust Indicators Strip */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center w-full max-w-3xl">
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-orange flex items-center justify-center gap-1">
              <span>3,000</span>
              <span className="text-xl">+</span>
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mt-1">
              Global Alumni
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-1">
              <span>RYS</span>
              <span className="text-brand-orange text-2xl font-bold">200/300</span>
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mt-1">
              Yoga Alliance USA
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-orange flex items-center justify-center gap-1">
              <Star className="w-6 h-6 fill-brand-orange text-brand-orange inline" />
              <span>4.9</span>
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mt-1">
              Student Rating
            </div>
          </div>
          <div>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-white">
              10+ Yrs
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-white/80 mt-1">
              Authentic Tradition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
