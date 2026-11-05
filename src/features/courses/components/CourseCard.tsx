"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Calendar, Check, ArrowRight } from "lucide-react";
import { Course } from "@/types/course";
import { useAppDispatch } from "@/store/hooks";
import { openEnquiryModal } from "@/store/features/ui/uiSlice";
import { formatPrice } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const dispatch = useAppDispatch();

  const handleEnquire = () => {
    dispatch(openEnquiryModal(course.title));
  };

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-border-light overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(20,33,61,0.12)] hover:border-brand-orange/40 hover:-translate-y-1">
      {/* Course Image Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-light">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#24110A]/85 via-[#24110A]/30 to-transparent" />

        {/* Badges Overlay */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-white/95 text-charcoal backdrop-blur-sm border border-border-light shadow-xs">
            {course.duration}
          </span>
          {course.hours && (
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-brand-orange text-white shadow-xs flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-white" />
              <span>{course.hours} Hrs RYS</span>
            </span>
          )}
        </div>

        {/* Bottom image overlay metadata */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-white">
          <span className="flex items-center gap-1.5 font-sans font-medium">
            <Calendar className="w-3.5 h-3.5 text-brand-orange" />
            <span>Batch: {course.upcomingBatch}</span>
          </span>
          <span className="font-sans font-semibold text-brand-orange bg-[#24110A]/85 px-2 py-0.5 rounded text-[11px]">
            {course.level}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6">
        {course.certification && (
          <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span>{course.certification}</span>
          </div>
        )}

        <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-brand-orange transition-colors leading-snug mb-2.5">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        <p className="font-sans text-sm text-muted-slate leading-relaxed mb-4 line-clamp-3">
          {course.overview}
        </p>

        {/* Key Curriculum Bullets */}
        <ul className="space-y-1.5 mb-5 border-t border-border-light pt-3.5">
          {course.highlights.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-charcoal/85 font-sans leading-normal"
            >
              <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Price & Action Row */}
        <div className="mt-auto pt-4 border-t border-border-light flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans font-medium uppercase tracking-wider text-muted-slate">
              From (Twin Sharing)
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-bold text-charcoal">
                {formatPrice(course.priceUsd, "USD")}
              </span>
              <span className="text-xs text-muted-slate font-sans">
                / {formatPrice(course.priceInr, "INR")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEnquire}
              className="px-4 py-2 rounded-md text-xs font-bold bg-brand-orange hover:bg-brand-orange-hover text-white transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-95"
            >
              Enquire
            </button>
            <Link
              href={`/courses/${course.slug}`}
              className="p-2 rounded-md border border-border-light text-charcoal hover:border-brand-orange hover:text-brand-orange hover:bg-neutral-light transition-colors"
              aria-label={`View details of ${course.title}`}
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
