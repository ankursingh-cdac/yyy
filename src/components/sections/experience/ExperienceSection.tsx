import React from "react";
import Image from "next/image";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { Waves, Utensils, Home, Sparkles } from "lucide-react";
import { heroAssets, shalaAssets, accommodationAssets, foodAssets } from "@/data/image-assets";

export function ExperienceSection() {
  const experiences = [
    {
      icon: <Waves className="w-5 h-5 text-brand-orange" />,
      title: "The Holy River Ganga",
      description:
        "Step outside the ashram and breathe in the fresh Himalayan air beside the holy Ganga, where rishis and yogis have meditated for millennia.",
      image: heroAssets.ashramGangaView,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
      title: "Dedicated Yoga Shala",
      description:
        "Spacious, naturally lit yoga hall with authentic wooden flooring, yoga mats, blocks, straps, and serene mountain vistas.",
      image: shalaAssets.practice1,
    },
    {
      icon: <Home className="w-5 h-5 text-brand-orange" />,
      title: "Tranquil Ashram Residence",
      description:
        "Clean private and twin-sharing rooms with attached modern bathrooms, 24/7 hot water, high-speed Wi-Fi, and contemplation balconies.",
      image: accommodationAssets.private1,
    },
    {
      icon: <Utensils className="w-5 h-5 text-brand-orange" />,
      title: "Sattvic Yogic Nutrition",
      description:
        "Three wholesome, freshly cooked vegetarian Ayurvedic meals served daily to nourish your body and maintain mental clarity for deep sadhana.",
      image: foodAssets.sattvicSalad,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-deep-navy text-white relative overflow-hidden">
      {/* Decorative Brand Orange Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <EyebrowLabel text="Life at Aadi Yoga" variant="orange" className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.18] tracking-tight">
            The Authentic Rishikesh Ashram Experience
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-white/80 font-normal leading-relaxed">
            Teacher training in Rishikesh is far more than a classroom course. It is an authentic immersion into a disciplined yogic lifestyle where the holy environment itself deepens your practice.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-brand-orange/40 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-deep-navy">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-deep-navy/80 backdrop-blur-md border border-white/10">
                  {exp.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Ashram Schedule Preview */}
        <div className="mt-16 p-8 rounded-xl bg-white/5 border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-brand-orange font-bold">
                Daily Ashram Sadhana
              </span>
              <h4 className="font-serif text-2xl font-bold text-white mt-0.5">
                A Day in the Life of a Yoga Student
              </h4>
            </div>
            <span className="text-xs font-sans text-white/70">
              Monday to Saturday • Sundays Rest &amp; Excursions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-brand-orange font-bold block mb-1">05:30 AM – 07:00 AM</span>
              <span className="text-white font-medium block">Morning Cleansing &amp; Pranayama</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-brand-orange font-bold block mb-1">07:00 AM – 08:30 AM</span>
              <span className="text-white font-medium block">Hatha Yoga / Ashtanga Flow</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-brand-orange font-bold block mb-1">09:00 AM – 10:00 AM</span>
              <span className="text-white font-medium block">Sattvic Ayurvedic Breakfast</span>
            </div>
            <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
              <span className="text-brand-orange font-bold block mb-1">11:00 AM – 01:00 PM</span>
              <span className="text-white font-medium block">Anatomy &amp; Philosophy Lecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
