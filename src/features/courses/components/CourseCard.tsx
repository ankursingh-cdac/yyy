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
    <div className="group flex flex-col bg-white rounded-2xl border border-light-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-forest-green/30">
      {/* Course Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-warm-sand/30">
        <Image
          src={course.image}
          alt={course.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 via-transparent to-transparent" />

        {/* Badges Overlay */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-warm-ivory/95 text-forest-green backdrop-blur-sm border border-light-border shadow-sm">
            {course.duration}
          </span>
          {course.hours && (
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-forest-green/90 text-warm-ivory backdrop-blur-sm shadow-sm flex items-center gap-1">
              <Award className="w-3 h-3 text-warm-sand" />
              <span>{course.hours} Hrs</span>
            </span>
          )}
        </div>

        {/* Bottom image overlay metadata */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-warm-ivory/90">
          <span className="flex items-center gap-1 font-sans">
            <Calendar className="w-3.5 h-3.5 text-warm-sand" />
            <span>Batch: {course.upcomingBatch}</span>
          </span>
          <span className="font-sans font-medium text-warm-sand">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        {course.certification && (
          <div className="text-[11px] font-semibold uppercase tracking-wider text-sage-green mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-green" />
            <span>{course.certification}</span>
          </div>
        )}

        <h3 className="font-serif text-2xl font-normal text-forest-green group-hover:text-forest-green/90 transition-colors leading-snug mb-3">
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h3>

        <p className="font-sans text-sm text-muted-text leading-relaxed mb-5 line-clamp-3">
          {course.overview}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-6 border-t border-light-border pt-4">
          {course.highlights.slice(0, 3).map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-dark-charcoal/80 font-sans leading-normal"
            >
              <Check className="w-3.5 h-3.5 text-sage-green shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Price & Action */}
        <div className="mt-auto pt-4 border-t border-light-border flex items-center justify-between">
          <div>
            <div className="text-[11px] font-sans uppercase tracking-wider text-muted-text">
              Course Fee
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif text-2xl font-semibold text-forest-green">
                {formatPrice(course.priceUsd, "USD")}
              </span>
              <span className="text-xs text-muted-text font-sans">
                / {formatPrice(course.priceInr, "INR")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleEnquire}
              className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-forest-green text-warm-ivory hover:bg-[#122e26] transition-all cursor-pointer shadow-sm hover:shadow"
            >
              Enquire
            </button>
            <Link
              href={`/courses/${course.slug}`}
              className="p-2 rounded-full border border-light-border text-forest-green hover:bg-warm-sand/30 transition-colors"
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
