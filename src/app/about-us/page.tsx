import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { CtaSection } from "@/components/sections/contact/CtaSection";
import { heroAssets } from "@/data/image-assets";
import { CheckCircle2, Briefcase, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Aadi Yoga School Rishikesh",
  description:
    "Join Aadi Yoga School for certified 100-hour, 200-hour, and 300-hour Yoga Teacher Training in Rishikesh, India. Authentic Hatha and Ashtanga Vinyasa courses.",
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-2 leading-tight">
            Yoga Teacher Training Center in Rishikesh, India
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Welcome to Aadi Yoga School Rishikesh India — Yoga Alliance USA Registered Yoga School (RYS 200 / RYS 300).
          </p>
        </SectionContainer>
      </div>

      {/* Main Narrative Content directly from aadiyogaschool.com */}
      <section className="py-16 sm:py-24 bg-white text-charcoal">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 font-sans text-charcoal/85 leading-relaxed text-sm sm:text-base">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Our Mission &amp; Purpose
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-charcoal mt-1 leading-snug">
                  Welcome to Aadi Yoga School Rishikesh India
                </h2>
              </div>

              <p>
                Aadi Yoga School in Rishikesh India offers Residential{" "}
                <Link
                  href="/courses/100-hour-yoga-teacher-training-course-in-rishikesh-india"
                  className="text-brand-orange font-bold underline"
                >
                  100 Hour
                </Link>
                ,{" "}
                <Link
                  href="/courses/200-hour-yoga-teacher-training-course"
                  className="text-brand-orange font-bold underline"
                >
                  200 Hour
                </Link>
                , Hatha, Ashtanga Yoga Teacher Training Courses in Rishikesh, India Registered with the Yoga Alliance Certification, USA.
              </p>

              <p>
                Aadi Yoga School is founded with the confidence to share the traditional experience of yoga and the intention to lead students along the path of holistic healthy living.
              </p>

              <p>
                During our multi-style (Hatha yoga, Ashtanga yoga, Vinyasa flow yoga, Iyengar yoga) teacher training in India you will get a deep knowledge about the yoga asana and its styles. We have the best yoga schools in Yoga Capital Rishikesh India with a peaceful yogic environment nearby Laxman Jhula Rishikesh India. During your YTTC, you will learn different multi styles yoga poses and asana with Pranayama, Breathing exercises, Meditations, Yoga Philosophy, Ayurveda, Naturopathy etc.
              </p>

              <p>
                Our school has designed courses in the most comprehensive and unique way, empowering you to stand apart as an inspired yoga teacher.
              </p>

              <div className="p-6 rounded-xl bg-neutral-light border border-border-light space-y-3 my-6">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <Heart className="w-5 h-5 text-brand-orange" />
                  <span>Adjustments for All Levels of Students</span>
                </h3>
                <p className="text-sm text-muted-slate leading-relaxed">
                  At Aadi Yoga School in Rishikesh India, we welcome all age of students having a different type of health issue or potential. We understand that every people don’t have equal potential. People are born with certain limitations, so we focus on adjustments for all level students. Courses are designed to suit beginners, intermediate, to advanced levels.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-brand-orange-light border border-brand-orange/30 space-y-2">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-orange" />
                  <span>Tips for Setting Up Your Yoga Business</span>
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  At Aadi Yoga School in Rishikesh India, we guide and help our students for setting up their own yoga business or yoga studio by sharing our own teaching and yogic business experiences.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/schedule-fee-2"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm uppercase tracking-wider transition-colors"
                >
                  <span>Check 2026 Batch Dates &amp; Fees</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Side Visual & Features (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border-light shadow-md">
                <Image
                  src={heroAssets.ashramGangaView}
                  alt="Aadi Yoga School building overlooking the Ganges river in Rishikesh"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="p-6 rounded-xl bg-white border border-border-light shadow-sm space-y-4">
                <h4 className="font-serif text-xl font-bold text-charcoal">
                  Program Highlights at Aadi Yoga
                </h4>
                <ul className="space-y-3 text-sm text-charcoal/85">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Yoga Alliance USA Registered School (RYS 200 &amp; RYS 300)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Traditional Multi-Style: Classical Hatha &amp; Ashtanga Vinyasa</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>In-depth Anatomy, Biomechanics &amp; Vedic Philosophy</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Clean private &amp; twin-sharing rooms with attached hot baths</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Three wholesome sattvic Ayurvedic meals daily (vegan/gluten-free options)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>Post-graduation studio guidance and international community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      {/* Ashram Experience & Daily Schedule */}
      <ExperienceSection />

      {/* Global CTA */}
      <CtaSection />
    </div>
  );
}
