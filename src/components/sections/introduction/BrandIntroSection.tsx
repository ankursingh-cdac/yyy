import React from "react";
import Image from "next/image";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { TextLink } from "@/components/common/buttons/TextLink";
import { Sparkles, Sun, Compass, Heart } from "lucide-react";
import { heroAssets } from "@/data/image-assets";

export function BrandIntroSection() {
  return (
    <section id="brand-intro" className="py-20 sm:py-28 bg-white text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg border border-border-light bg-neutral-light">
              <Image
                src={heroAssets.ashramGangaView}
                alt="Aadi Yoga School ashram with panoramic view of River Ganga in Rishikesh"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24110A]/70 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Ashram Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-border-light max-w-[240px] sm:max-w-[270px]">
              <div className="flex items-center gap-2 text-brand-orange mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider">
                  Sacred Location
                </span>
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug">
                Near 13 Stories Temple
              </div>
              <div className="text-xs text-muted-slate font-sans mt-1">
                Laxman Jhula, Rishikesh
              </div>
            </div>
          </div>

          {/* Right Column: Brand Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <EyebrowLabel text="Welcome to Aadi Yoga School" variant="orange" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-[1.18] tracking-tight">
                Authentic Yogic Lineage on the Banks of River Ganga
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed font-normal">
              Aadi Yoga School is situated near the historic 13 Stories Temple at Laxman Jhula, Rishikesh—the revered Yoga Capital of the World. Our mission is to preserve and transmit traditional yoga in its purest essence, guided by authentic Himalayan masters and seasoned practitioners.
            </p>

            <p className="font-sans text-sm sm:text-base text-muted-slate leading-relaxed">
              We offer Yoga Alliance USA registered 100-Hour, 200-Hour, and 300-Hour Yoga Teacher Training Courses (YTTC), Aerial Yoga certification, and rejuvenating meditation retreats. Our curriculum integrates classical Hatha, dynamic Ashtanga Vinyasa, rigorous biomechanical alignment, pranayama, and Vedic philosophy.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2">
              <div className="p-4 rounded-lg bg-neutral-light border border-border-light">
                <Sun className="w-5 h-5 text-brand-orange mb-2" />
                <div className="font-serif text-base font-bold text-charcoal">
                  Classical Hatha
                </div>
                <div className="text-xs text-muted-slate mt-1 leading-normal font-sans">
                  Deep somatic asana practice focusing on breath, bandhas, and stability.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-light border border-border-light">
                <Compass className="w-5 h-5 text-brand-orange mb-2" />
                <div className="font-serif text-base font-bold text-charcoal">
                  Ashtanga Vinyasa
                </div>
                <div className="text-xs text-muted-slate mt-1 leading-normal font-sans">
                  Disciplined dynamic primary series flow building stamina and focus.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-neutral-light border border-border-light">
                <Heart className="w-5 h-5 text-brand-orange mb-2" />
                <div className="font-serif text-base font-bold text-charcoal">
                  Ashram Sanctuary
                </div>
                <div className="text-xs text-muted-slate mt-1 leading-normal font-sans">
                  Ayurvedic sattvic food, Ganga meditation, and dedicated yogic community.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <TextLink href="/about-us" text="Read our full story & ashram heritage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
