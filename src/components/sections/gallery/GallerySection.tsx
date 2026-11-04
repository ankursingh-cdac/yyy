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
    <section id="gallery" className="py-20 sm:py-28 bg-warm-ivory text-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sanctuary in Focus"
          eyebrowVariant="terracotta"
          title="Moments of Stillness & Practice"
          subtitle="A glimpse into life at Aadi Yoga School, our practice shalas, and the majestic natural beauty of Rishikesh."
        />

        {/* Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: "all", label: "All Moments" },
            { id: "nature", label: "River Ganga & Nature" },
            { id: "yoga-shala", label: "Practice Shala" },
            { id: "ceremony", label: "Sacred Ceremonies" },
            { id: "community", label: "Sangha & Community" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-sans font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer",
                activeCategory === cat.id
                  ? "bg-forest-green text-warm-ivory shadow-sm"
                  : "bg-white text-muted-text hover:text-dark-charcoal border border-light-border"
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
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-light-border bg-warm-sand/30 shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-dark-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-warm-ivory" />
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-warm-ivory z-10">
                <div className="text-xs uppercase tracking-widest text-warm-sand font-semibold mb-1">
                  {item.category.replace("-", " ")}
                </div>
                <h4 className="font-serif text-lg leading-tight">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-warm-sand/80 mt-1 font-sans">
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
