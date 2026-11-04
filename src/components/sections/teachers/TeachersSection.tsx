import React from "react";
import Image from "next/image";
import { teachersData } from "@/data/teachers";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { TextLink } from "@/components/common/buttons/TextLink";

export function TeachersSection() {
  return (
    <section id="teachers" className="py-20 sm:py-28 bg-warm-ivory text-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Master Lineage"
          eyebrowVariant="terracotta"
          title="Guided by Himalayan Masters"
          subtitle="Learn directly from seasoned yogis, scholars, and anatomy specialists dedicated to transmitting traditional knowledge with care and precision."
        />

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="group flex flex-col bg-white rounded-2xl border border-light-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-forest-green/20"
            >
              {/* Image Container with Consistent 1:1 or 4:3 Ratio */}
              <div className="relative aspect-square overflow-hidden bg-warm-sand/30">
                <Image
                  src={teacher.image}
                  alt={teacher.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {teacher.experienceYears && (
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-[11px] font-sans font-semibold tracking-wider uppercase bg-warm-ivory/95 text-forest-green backdrop-blur-sm border border-light-border shadow-sm">
                    {teacher.experienceYears}+ Years Sadhana
                  </div>
                )}
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-sage-green mb-1">
                    {teacher.role}
                  </div>
                  <h3 className="font-serif text-2xl text-forest-green mb-2.5">
                    {teacher.name}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-muted-text leading-relaxed line-clamp-3 mb-4">
                    {teacher.bio}
                  </p>
                </div>

                {/* Specialization Tags */}
                <div className="pt-4 border-t border-light-border">
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.specialization.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium bg-warm-sand/30 text-dark-charcoal/80"
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
          <TextLink href="/our-teacher">
            Meet the Complete Faculty & Read Detailed Biographies
          </TextLink>
        </div>
      </div>
    </section>
  );
}
