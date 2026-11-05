"use client";

import React, { useState } from "react";
import { coursesData } from "@/data/courses";
import { CourseCard } from "@/features/courses/components/CourseCard";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { CourseCategory } from "@/types/course";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";
import { cn } from "@/lib/utils";

export function CoursesSection() {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState<"all" | CourseCategory>("all");

  const filteredCourses =
    activeTab === "all"
      ? coursesData
      : coursesData.filter((c) => c.category === activeTab);

  const handleOpenConsultation = () => {
    dispatch(openEnquiryModal("Course Syllabus & Counseling Consultation"));
  };

  return (
    <section id="courses" className="py-20 sm:py-28 bg-neutral-light border-y border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certified Training &amp; Retreats"
          eyebrowVariant="orange"
          title="Yoga Teacher Training Courses &amp; Himalayan Retreats"
          subtitle="Internationally certified courses in classical Hatha, Ashtanga Vinyasa, Pranayama, and Vedic Philosophy registered with Yoga Alliance, USA."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-5 py-2.5 rounded-md text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "all"
                ? "bg-brand-orange text-white shadow-xs"
                : "bg-white text-charcoal/80 hover:text-brand-orange hover:bg-neutral-light border border-border-light"
            )}
          >
            All Programs
          </button>
          <button
            onClick={() => setActiveTab("ttc")}
            className={cn(
              "px-5 py-2.5 rounded-md text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "ttc"
                ? "bg-brand-orange text-white shadow-xs"
                : "bg-white text-charcoal/80 hover:text-brand-orange hover:bg-neutral-light border border-border-light"
            )}
          >
            Teacher Training (100h, 200h, 300h)
          </button>
          <button
            onClick={() => setActiveTab("retreat")}
            className={cn(
              "px-5 py-2.5 rounded-md text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
              activeTab === "retreat"
                ? "bg-brand-orange text-white shadow-xs"
                : "bg-white text-charcoal/80 hover:text-brand-orange hover:bg-neutral-light border border-border-light"
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

        {/* Bottom Consultation Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-white border border-border-light shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
              Unsure which training level matches your experience?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-muted-slate mt-1">
              Connect with our master teachers to evaluate your background and select between 100h, 200h, or 300h YTTC.
            </p>
          </div>
          <button
            onClick={handleOpenConsultation}
            className="shrink-0 px-6 py-3 rounded-md text-xs font-bold uppercase tracking-wider bg-brand-orange hover:bg-brand-orange-hover text-white transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Request Syllabus &amp; Dates
          </button>
        </div>
      </div>
    </section>
  );
}
