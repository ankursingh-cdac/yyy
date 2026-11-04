"use client";

import React, { useState } from "react";
import { coursesData } from "@/data/courses";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { CourseCategory } from "@/types/course";
import { cn } from "@/lib/utils";

export function CoursesSection() {
  const [activeTab, setActiveTab] = useState<"all" | CourseCategory>("all");

  const filteredCourses =
    activeTab === "all"
      ? coursesData.filter((c) => c.isFeatured !== false)
      : coursesData.filter((c) => c.category === activeTab);

  return (
    <section id="courses" className="py-20 sm:py-28 bg-warm-sand/20 border-y border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certified Academic Programs"
          eyebrowVariant="sage"
          title="Yoga Teacher Training & Retreats"
          subtitle="Internationally certified courses combining classical Hatha, Ashtanga Vinyasa, Pranayama, and Vedic Philosophy registered with Yoga Alliance, USA."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "all"
                ? "bg-forest-green text-warm-ivory shadow-sm"
                : "bg-white text-dark-charcoal/80 hover:bg-warm-ivory border border-light-border"
            )}
          >
            All Programs
          </button>
          <button
            onClick={() => setActiveTab("ttc")}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "ttc"
                ? "bg-forest-green text-warm-ivory shadow-sm"
                : "bg-white text-dark-charcoal/80 hover:bg-warm-ivory border border-light-border"
            )}
          >
            Teacher Training (YTTC)
          </button>
          <button
            onClick={() => setActiveTab("retreat")}
            className={cn(
              "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "retreat"
                ? "bg-forest-green text-warm-ivory shadow-sm"
                : "bg-white text-dark-charcoal/80 hover:bg-warm-ivory border border-light-border"
            )}
          >
            Himalayan Retreats
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom Accreditation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-light-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl text-forest-green">
              Unsure which training corresponds to your path?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-muted-text mt-1">
              Connect with our master teachers to assess your background and select the right YTTC level.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("enquiry-trigger");
              if (el) el.click();
            }}
            className="shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-forest-green text-warm-ivory hover:bg-[#122e26] transition-colors cursor-pointer shadow-sm"
          >
            Request Syllabus & Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
