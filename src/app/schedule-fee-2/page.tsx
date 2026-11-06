import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { CtaSection } from "@/components/sections/contact/CtaSection";
import { Check, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Schedule & Fee Structure | Aadi Yoga School Rishikesh",
  description:
    "Check upcoming dates, batch schedules, and transparent course fee structures for 100-Hour, 200-Hour, 300-Hour Yoga Teacher Training and Retreats in Rishikesh.",
  alternates: {
    canonical: `${siteConfig.url}/schedule-fee-2`,
  },
};

export default function ScheduleFeePage() {
  const scheduleTables = [
    {
      title: "200 Hours – 22 Days – Yoga Teacher Training",
      subtitle: "Yoga Alliance USA RYT 200 Certification",
      rows: [
        { dates: "Every Month: 1 to 22", days: "22 Days", twin: "$1,000 USD", privateRoom: "$1,300 USD" },
        { dates: "For Jan: 5 Jan to 26 Jan", days: "22 Days", twin: "$1,000 USD", privateRoom: "$1,300 USD" },
      ],
      slug: "200-hour-yoga-teacher-training-course",
    },
    {
      title: "300 Hours – 28 Days – Advanced Yoga Teacher Training",
      subtitle: "Advanced RYT 300 Certification (RYT 500 Pathway)",
      rows: [
        { dates: "Every Month: 1 to 28 (Except: Jan, July)", days: "28 Days", twin: "$1,100 USD", privateRoom: "$1,400 USD" },
      ],
      slug: "residential-300-hour-yoga-teacher-training-course",
    },
    {
      title: "100 Hours – 11 Days – Yoga Teacher Training Foundation",
      subtitle: "Yoga Alliance USA Credit (Phase 1)",
      rows: [
        { dates: "Every Month: 1 to 11", days: "11 Days", twin: "$800 USD", privateRoom: "$1,100 USD" },
        { dates: "For Jan: 5 Jan to 15 Jan", days: "11 Days", twin: "$800 USD", privateRoom: "$1,100 USD" },
      ],
      slug: "100-hour-yoga-teacher-training-course-in-rishikesh-india",
    },
    {
      title: "50 Hours – 6 Days – Aerial Yoga Certification",
      subtitle: "Yoga Alliance Continuing Education (YACEP)",
      rows: [
        { dates: "Monthly (Monday to Saturday)", days: "6 Days", twin: "$400 USD", privateRoom: "$500 USD" },
      ],
      slug: "aerial-yoga-teacher-training",
    },
    {
      title: "6 Nights – 7 Days – Himalayan Yoga Retreat",
      subtitle: "Wellness, Ayurveda & Meditation",
      rows: [
        { dates: "Every Week (Monday to Saturday)", days: "7 Days / 6 Nights", twin: "$400 USD", privateRoom: "$500 USD" },
      ],
      slug: "one-week-yoga-retreat-india",
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/15 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            Course Schedule &amp; Fee Structure
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            All course fees include accommodation, three daily sattvic vegetarian meals, study materials, practical classes, and weekend excursions in Rishikesh.
          </p>
        </SectionContainer>
      </div>

      {/* Main Schedule Tables Section */}
      <div className="py-16 sm:py-24 bg-neutral-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {scheduleTables.map((table, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-border-light shadow-2xs overflow-hidden"
            >
              {/* Table Header */}
              <div className="px-6 py-4 bg-brand-terracotta text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold">
                    {table.title}
                  </h2>
                  <p className="text-xs text-white/90 font-sans mt-0.5">
                    {table.subtitle}
                  </p>
                </div>
                <Link
                  href={`/courses/${table.slug}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white underline underline-offset-4 hover:text-white/80"
                >
                  View Full Syllabus
                </Link>
              </div>

              {/* Table Data */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm font-sans">
                  <thead className="bg-neutral-light border-b border-border-light text-xs uppercase tracking-wider font-bold text-charcoal">
                    <tr>
                      <th className="px-6 py-3.5">Dates / Batches</th>
                      <th className="px-6 py-3.5">Duration</th>
                      <th className="px-6 py-3.5">Twin Sharing Room</th>
                      <th className="px-6 py-3.5">Private AC Room</th>
                      <th className="px-6 py-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light">
                    {table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-neutral-light/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-charcoal flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                          <span>{row.dates}</span>
                        </td>
                        <td className="px-6 py-4 text-muted-slate">{row.days}</td>
                        <td className="px-6 py-4 font-bold text-charcoal">{row.twin}</td>
                        <td className="px-6 py-4 font-bold text-charcoal">{row.privateRoom}</td>
                        <td className="px-6 py-4 text-right">
                          <Link
                            href={`/courses/${table.slug}`}
                            className="inline-flex px-3.5 py-1.5 rounded-md text-xs font-bold bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-2xs"
                          >
                            Apply Here
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Fee Inclusion Box */}
          <div className="p-8 rounded-xl bg-white border border-border-light shadow-2xs">
            <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
              What Is Included In Your Course Fee:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-sans text-charcoal/90">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Accommodation with attached hot water shower</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>3 daily wholesome sattvic Ayurvedic meals</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Comprehensive printed yoga manuals &amp; notebooks</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Yoga Alliance USA international certificate</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Yogic cleansing kit (Neti pot, rubber neti)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Weekend cultural trips (Ganga Aarti, sunrise meditation)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}
