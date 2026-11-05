import React from "react";
import Image from "next/image";
import { teachersData } from "@/data/teachers";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { TextLink } from "@/components/common/buttons/TextLink";

export function TeachersSection() {
  return (
    <section id="teachers" className="py-20 sm:py-28 bg-white text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Authentic Masters"
          eyebrowVariant="orange"
          title="Guided by Himalayan Masters &amp; Yogic Scholars"
          subtitle="Learn directly from seasoned yogis, scholars, and anatomy specialists dedicated to transmitting traditional knowledge with care and precision."
        />

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="group flex flex-col bg-white rounded-xl border border-border-light overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_32px_rgba(20,33,61,0.12)] hover:border-brand-orange/40 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-neutral-light">
                <Image
                  src={teacher.image}
                  alt={teacher.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24110A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {teacher.experienceYears && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md text-[11px] font-sans font-bold tracking-wider uppercase bg-white/95 text-charcoal backdrop-blur-sm border border-border-light shadow-2xs">
                    {teacher.experienceYears}+ Years Sadhana
                  </div>
                )}
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-1 font-sans">
                    {teacher.role}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-brand-orange transition-colors mb-2.5">
                    {teacher.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-slate leading-relaxed line-clamp-3 mb-4">
                    {teacher.bio}
                  </p>
                </div>

                {/* Specialization Tags */}
                <div className="pt-4 border-t border-border-light">
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.specialization.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-neutral-light text-charcoal/80 border border-border-light"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <TextLink href="/our-teacher" text="Meet the complete faculty &amp; read detailed biographies" />
        </div>
      </div>
    </section>
  );
}
