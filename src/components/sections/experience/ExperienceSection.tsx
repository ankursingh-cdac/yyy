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
    <section className="py-20 sm:py-28 bg-[#24110A] text-white relative overflow-hidden">
      {/* Decorative Brand Orange & Terracotta Warm Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-terracotta/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.18] tracking-tight">
            Best Yoga Teacher Training School in Rishikesh
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-[#F3EBE6]/85 font-normal leading-relaxed">
            Yoga has been considered as a gift to the world from India. India has been a land of sages, Rishis, Munis, and Sadhaks since time immemorial. Aadi Yoga School maintains a beautiful Yoga Ashram on the bank of the Ganga river in the peaceful environs of Rishikesh to facilitate yoga teacher training and retreats in India.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-[#1A0C07] border border-[#3D1D13] rounded-xl overflow-hidden hover:bg-[#200F09] transition-all duration-300 hover:border-brand-orange/50 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1A0C07]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0C07] via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-lg bg-[#2A130C]/90 backdrop-blur-md border border-[#4D2417]">
                  {exp.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#F3EBE6]/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Ashram Schedule Preview */}
        <div className="mt-16 p-8 rounded-xl bg-[#1A0C07] border border-[#3D1D13] max-w-5xl mx-auto shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#3D1D13] pb-5 mb-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-brand-orange font-bold">
                Daily Ashram Schedule
              </span>
              <h4 className="font-serif text-2xl font-bold text-white mt-0.5">
                The Daily Schedule of the Course
              </h4>
            </div>
            <span className="text-xs font-sans text-[#F3EBE6]/70">
              Monday to Saturday • Sundays Rest &amp; Excursions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 text-xs font-sans">
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">06:00 AM – 06:30 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Wake Up &amp; Herbal Tea</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">06:45 AM – 07:00 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Yogic Cleansing (Shatkarma)</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">07:00 AM – 07:30 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Mantra Chanting &amp; Pranayama</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">07:30 AM – 09:00 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Hatha Yoga Asana Practice</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">09:00 AM – 10:00 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Nutritious Sattvic Breakfast</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">10:00 AM – 11:15 AM</span>
              <span className="text-[#F3EBE6] font-medium block">Yoga Anatomy &amp; Physiology</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">11:30 AM – 01:00 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Yoga Philosophy &amp; Sutras</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">01:00 PM – 03:00 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Ayurvedic Lunch &amp; Self-Study</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">03:00 PM – 04:00 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Methodology &amp; Alignment</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">04:30 PM – 06:30 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Ashtanga Vinyasa Series</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">07:00 PM – 08:00 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Fresh Vegetarian Dinner</span>
            </div>
            <div className="p-3 rounded-lg bg-[#24110A] border border-[#3D1D13]">
              <span className="text-brand-orange font-bold block mb-0.5">08:30 PM – 09:30 PM</span>
              <span className="text-[#F3EBE6] font-medium block">Yoga Nidra &amp; Meditation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
