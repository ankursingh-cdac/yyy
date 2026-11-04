import React from "react";
import Image from "next/image";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { TextLink } from "@/components/common/buttons/TextLink";
import { Sparkles, Sun, Compass, Heart } from "lucide-react";

export function BrandIntroSection() {
  return (
    <section id="brand-intro" className="py-20 sm:py-28 bg-warm-ivory text-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-light-border bg-warm-sand/20">
              <Image
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80"
                alt="Yoga practitioner practicing on the riverbank of sacred River Ganga in Rishikesh"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Ashram Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-light-border max-w-[240px] sm:max-w-[270px]">
              <div className="flex items-center gap-2 text-sage-green mb-1.5">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider">
                  Pure Tradition
                </span>
              </div>
              <div className="font-serif text-lg sm:text-xl text-forest-green leading-snug">
                On the Holy Banks of River Ganga
              </div>
              <div className="text-xs text-muted-text font-sans mt-1">
                Laxman Jhula, Rishikesh
              </div>
            </div>
          </div>

          {/* Right Column: Brand Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <EyebrowLabel text="Welcome to Aadi Yoga" variant="terracotta" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-forest-green leading-[1.18] tracking-tight">
                Where the Spirit of Ancient India Meets Contemporary Yogic Pedagogy
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-dark-charcoal/85 leading-relaxed font-normal">
              Aadi Yoga School was founded with an unshakeable conviction: to
              share the genuine, undiluted experience of classical yoga and lead
              seekers along the path of holistic wellbeing. Located in
              Rishikesh—the renowned Yoga Capital of the World—our sanctuary
              stands where sages, rishis, and sadhaks have meditated for
              millennia.
            </p>

            <p className="font-sans text-sm sm:text-base text-muted-text leading-relaxed">
              We offer comprehensive residential 100-Hour, 200-Hour, and
              300-Hour Hatha and Ashtanga Vinyasa Yoga Teacher Training Courses
              registered with Yoga Alliance, USA. Our teachers are native
              masters born and steeped in the Vedic tradition, combining
              rigorous anatomical alignment with profound meditative sadhana.
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2">
              <div className="p-4 rounded-xl bg-white border border-light-border">
                <Sun className="w-5 h-5 text-muted-terracotta mb-2" />
                <div className="font-serif text-base text-forest-green">
                  Traditional Hatha
                </div>
                <div className="text-xs text-muted-text mt-1 leading-normal">
                  Authentic lineage focusing on breath, bandhas & alignment.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-light-border">
                <Compass className="w-5 h-5 text-sage-green mb-2" />
                <div className="font-serif text-base text-forest-green">
                  Ashtanga Vinyasa
                </div>
                <div className="text-xs text-muted-text mt-1 leading-normal">
                  Disciplined dynamic flow building strength and mental clarity.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-light-border">
                <Heart className="w-5 h-5 text-forest-green mb-2" />
                <div className="font-serif text-base text-forest-green">
                  Yogic Lifestyle
                </div>
                <div className="text-xs text-muted-text mt-1 leading-normal">
                  Ayurvedic sattvic food, Ganga meditation & sacred chanting.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <TextLink href="/about-us">
                Discover Our Lineage & Ashram Story
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
