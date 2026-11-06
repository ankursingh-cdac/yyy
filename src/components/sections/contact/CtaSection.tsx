"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles, Send } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  const dispatch = useAppDispatch();

  const handleOpenEnquiry = () => {
    dispatch(openEnquiryModal("Admissions & Upcoming Batch Inquiry"));
  };

  return (
    <section className="py-20 sm:py-28 bg-[#24110A] text-white relative overflow-hidden">
      {/* Background Decorative Rings with Brand Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] border border-brand-orange/20 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border border-brand-terracotta/20 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.12] tracking-tight mb-6 max-w-3xl">
          Begin Your Yogic Journey Beside the Holy Ganga.
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 font-normal leading-relaxed max-w-2xl mb-10">
          Step onto the sacred soil of Rishikesh near Laxman Jhula. Whether you aspire to become an internationally certified yoga teacher or seek personal revitalization, our ashram doors are open to you.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            id="enquiry-trigger"
            onClick={handleOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-sans font-bold text-sm md:text-base uppercase tracking-wider bg-brand-orange hover:bg-brand-orange-hover text-white transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Enquire Now / Request Dates</span>
          </button>

          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-sans font-bold text-sm md:text-base uppercase tracking-wider border border-white/30 text-white hover:border-brand-orange/60 hover:bg-white/10 transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-[#F3EBE6]/75 font-sans">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-brand-orange" />
            <span>Direct Call:</span>
            <a
              href={siteConfig.contact.phoneHref}
              className="font-bold text-white hover:text-brand-orange transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <span className="hidden sm:inline opacity-30">•</span>
          <div>Admissions Desk: Near 13 Stories Temple, Laxman Jhula, Rishikesh, India</div>
        </div>
      </div>
    </section>
  );
}
