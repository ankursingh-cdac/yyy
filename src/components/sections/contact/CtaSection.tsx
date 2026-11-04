"use client";

import React from "react";
import { MessageCircle, Phone, Sparkles, Send } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";
import { siteConfig } from "@/config/site";

export function CtaSection() {
  const dispatch = useAppDispatch();

  const handleOpenEnquiry = () => {
    dispatch(openEnquiryModal());
  };

  return (
    <section className="py-20 sm:py-28 bg-forest-green text-warm-ivory relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] border border-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-sans tracking-widest uppercase text-warm-sand mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Your Sadhana Awaits in Rishikesh</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-warm-ivory leading-[1.12] tracking-tight mb-6 max-w-3xl">
          Begin Your Journey Within.
        </h2>

        <p className="font-sans text-base sm:text-lg text-warm-sand/90 font-light leading-relaxed max-w-2xl mb-10">
          Step onto the sacred soil of Rishikesh beside the holy River Ganga.
          Whether you feel called to become an internationally certified yoga
          teacher or to immerse in deep meditative renewal, our sanctuary doors
          are open.
        </p>

        {/* Action Button Row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            id="enquiry-trigger"
            onClick={handleOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-medium text-sm md:text-base uppercase tracking-widest bg-warm-sand text-forest-green hover:bg-[#cfbfa4] transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Enquire Now / Request Dates</span>
          </button>

          <a
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-sans font-medium text-sm md:text-base uppercase tracking-widest border border-white/30 text-warm-ivory hover:border-warm-ivory hover:bg-white/10 transition-all cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-warm-sand" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs sm:text-sm text-warm-sand/80 font-sans">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-warm-sand" />
            <span>Direct Call:</span>
            <a
              href={siteConfig.contact.phoneHref}
              className="font-medium text-warm-ivory hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <span className="hidden sm:inline opacity-30">•</span>
          <div>Admissions Office: Laxman Jhula, Rishikesh (UK), India</div>
        </div>
      </div>
    </section>
  );
}
