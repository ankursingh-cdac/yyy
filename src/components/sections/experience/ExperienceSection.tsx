import React from "react";
import Image from "next/image";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { Waves, Utensils, Home, Sparkles } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      icon: <Waves className="w-6 h-6 text-warm-sand" />,
      title: "The Holy River Ganga",
      description:
        "Step outside the ashram and breathe in the pure mountain air beside the emerald Ganga, where sages have meditated for millennia.",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Utensils className="w-6 h-6 text-warm-sand" />,
      title: "Sattvic Ayurvedic Nutrition",
      description:
        "Three wholesome, freshly cooked vegetarian meals prepared daily according to Ayurvedic principles to nourish the body for deep sadhana.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Home className="w-6 h-6 text-warm-sand" />,
      title: "Tranquil Ashram Residence",
      description:
        "Peaceful private and shared rooms with attached bathrooms, hot water, high-speed Wi-Fi, and quiet contemplation balconies overlooking the hills.",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-warm-sand" />,
      title: "Evening Ganga Aarti & Kirtan",
      description:
        "Weekly visits to the sacred riverfront ceremonies of Rishikesh, experiencing devotional fire rituals, kirtan chanting, and spiritual unity.",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-forest-green text-warm-ivory relative overflow-hidden">
      {/* Decorative Background Leaf/Water Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-sand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <EyebrowLabel text="Immersive Living" variant="ivory" className="justify-center" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-warm-ivory leading-[1.18] tracking-tight">
            The Rishikesh Ashram Experience
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-warm-sand/90 font-light leading-relaxed">
            Teacher training in Rishikesh is far more than a classroom course.
            It is an immersion into a timeless yogic lifestyle where the
            environment itself becomes your greatest teacher.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-warm-sand/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-forest-green">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-transparent to-transparent" />
                <div className="absolute top-3 left-3 p-2 rounded-xl bg-forest-green/80 backdrop-blur-md border border-white/10">
                  {exp.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory mb-2 leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-sand/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Schedule Preview Snippet */}
        <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-sans uppercase tracking-widest text-warm-sand font-semibold">
                Daily Ashram Sadhana
              </span>
              <h4 className="font-serif text-2xl text-warm-ivory mt-0.5">
                A Day in the Life of a Yoga Student
              </h4>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wider bg-warm-sand/20 text-warm-sand border border-warm-sand/30">
              Monday to Saturday
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">05:30 AM</span>
              <span className="text-warm-ivory/80">Morning Wake-up & Herbal Tea</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">06:00 AM</span>
              <span className="text-warm-ivory/80">Shatkarma & Pranayama</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">07:00 AM</span>
              <span className="text-warm-ivory/80">Hatha / Ashtanga Asana</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">09:00 AM</span>
              <span className="text-warm-ivory/80">Sattvic Ayurvedic Breakfast</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">11:00 AM</span>
              <span className="text-warm-ivory/80">Anatomy & Philosophy</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">01:00 PM</span>
              <span className="text-warm-ivory/80">Nutritious Ashram Lunch</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">04:00 PM</span>
              <span className="text-warm-ivory/80">Alignment & Adjustment Lab</span>
            </div>
            <div className="p-3 rounded-lg bg-black/20">
              <span className="text-warm-sand block font-semibold mb-1">07:00 PM</span>
              <span className="text-warm-ivory/80">Meditation & Dinner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
