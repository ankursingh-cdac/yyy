import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { Star, CheckCircle, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Transformations"
          eyebrowVariant="orange"
          title="Voices of Our International Graduates"
          subtitle="Read reflections from practitioners across 80+ countries who lived, trained, and transformed at Aadi Yoga School in Rishikesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-xl bg-neutral-light border border-border-light shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-orange/20" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-brand-orange mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug mb-3">
                  “{item.quote}”
                </blockquote>

                <p className="font-sans text-sm text-muted-slate leading-relaxed mb-6">
                  {item.review}
                </p>
              </div>

              {/* Student Metadata */}
              <div className="pt-4 border-t border-border-light flex items-center justify-between">
                <div>
                  <div className="font-sans font-bold text-sm text-charcoal flex items-center gap-1.5">
                    <span>{item.studentName}</span>
                    {item.verifiedGraduate && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-xs text-muted-slate font-sans mt-0.5">
                    {item.country} • {item.courseCompleted} ({item.year})
                  </div>
                </div>

                <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
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
