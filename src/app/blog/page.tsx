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
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Yogic Wisdom" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            The Aadi Yoga Journal
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            Explorations into traditional philosophy, alignment, meditation, and healthy Ayurvedic living.
          </p>
        </SectionContainer>
      </div>

      <section className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-light-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-sage-green font-semibold">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-2xl text-forest-green leading-snug mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-text leading-relaxed line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-light-border flex items-center justify-between text-xs text-muted-text font-sans">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </span>
                  <span className="text-forest-green font-semibold flex items-center gap-1 hover:underline">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
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
