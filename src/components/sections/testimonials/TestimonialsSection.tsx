import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { Star, CheckCircle, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-warm-sand/20 border-y border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Journeys"
          eyebrowVariant="sage"
          title="Voices of Transformation"
          subtitle="Read reflections from international students who lived and trained at Aadi Yoga School in Rishikesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-white border border-light-border shadow-sm flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-warm-sand/40" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-muted-terracotta mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-forest-green leading-snug mb-3">
                  “{item.quote}”
                </blockquote>

                <p className="font-sans text-sm text-muted-text leading-relaxed mb-6">
                  {item.review}
                </p>
              </div>

              {/* Student Metadata */}
              <div className="pt-4 border-t border-light-border flex items-center justify-between">
                <div>
                  <div className="font-sans font-semibold text-sm text-dark-charcoal flex items-center gap-1.5">
                    <span>{item.studentName}</span>
                    {item.verifiedGraduate && (
                      <CheckCircle className="w-3.5 h-3.5 text-sage-green" />
                    )}
                  </div>
                  <div className="text-xs text-muted-text font-sans">
                    {item.country} • {item.courseCompleted} ({item.year})
                  </div>
                </div>

                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-sage-green bg-sage-green/10 px-2.5 py-1 rounded-full">
                  Verified Graduate
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
