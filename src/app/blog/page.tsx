import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { CtaSection } from "@/components/sections/contact/CtaSection";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga Wisdom Blog | Aadi Yoga School Rishikesh",
  description:
    "Read articles on yoga philosophy, asana alignment, pranayama techniques, Ayurvedic living, and spiritual practices from Rishikesh.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
};

const blogPosts = [
  {
    title: "What Makes Yoga Teacher Training in Rishikesh Unique",
    excerpt:
      "Rishikesh, a spiritual haven in the foothills of the Himalayas, is renowned as the Yoga Capital of the World. Learn why training beside the Ganga creates a life-altering experience.",
    date: "April 2026",
    category: "Teacher Training",
  },
  {
    title: "Yoga for Thyroid Health: 10 Powerful Poses to Improve Function",
    excerpt:
      "Explore therapeutic asana sequences and pranayama practices that stimulate endocrine function and restore energetic equilibrium naturally.",
    date: "October 2024",
    category: "Yoga Therapy",
  },
  {
    title: "How to Choose the Right Yoga Teacher Training Program in India",
    excerpt:
      "A comprehensive guide for international students assessing Yoga Alliance accreditation, teacher lineage, ashram food, and curriculum depth.",
    date: "March 2024",
    category: "Guidance",
  },
];

export default function BlogPage() {
  return (
    <div>
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/15 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <EyebrowLabel text="Yogic Wisdom" variant="orange" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            The Aadi Yoga Journal
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            Explorations into traditional philosophy, alignment, meditation, and healthy Ayurvedic living.
          </p>
        </SectionContainer>
      </div>

      <section className="py-16 sm:py-24 bg-neutral-light text-charcoal">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white border border-border-light shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-slate mb-3">
                    <span className="font-bold uppercase tracking-wider text-brand-orange">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-muted-slate" />
                      <span>{post.date}</span>
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-3 hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-slate leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-light">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline cursor-pointer">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <CtaSection />
    </div>
  );
}
