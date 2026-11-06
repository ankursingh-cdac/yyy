"use client";

import React, { useState } from "react";
import Image from "next/image";
import { galleryData } from "@/data/gallery";
import { SectionHeading } from "@/components/common/typography/SectionHeading";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-neutral-light text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Moments of Sadhana &amp; Ashram Life"
          subtitle="A visual glimpse into authentic classes, our mountain-facing yoga shala, clean accommodation, and the serene surroundings of Rishikesh."
        />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: "all", label: "All Photos" },
            { id: "training-class", label: "Training Classes" },
            { id: "yoga-shala", label: "Yoga Shala" },
            { id: "accommodation", label: "Accommodation" },
            { id: "food", label: "Sattvic Food" },
            { id: "location", label: "Rishikesh Views" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-md text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                activeCategory === cat.id
                  ? "bg-brand-orange text-white shadow-xs"
                  : "bg-white text-muted-slate hover:text-brand-orange hover:bg-white border border-border-light"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border-light bg-white shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24110A]/95 via-[#24110A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white z-10">
                <div className="text-[11px] uppercase tracking-widest text-brand-orange font-bold mb-1">
                  {item.category.replace("-", " ")}
                </div>
                <h4 className="font-serif text-lg font-bold leading-tight">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-white/80 mt-1 font-sans">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
