import React from "react";
import Link from "next/link";
import { GraduationCap, Sunrise, Sparkles, ArrowRight } from "lucide-react";

export function FeaturePillars() {
  const pillars = [
    {
      title: "Yoga Teacher Training Rishikesh India",
      description:
        "Yoga Alliance USA certified 100h, 200h & 300h residential Hatha & Ashtanga Vinyasa courses with authentic masters.",
      href: "/courses/200-hour-yoga-teacher-training-course",
      badge: "RYS 200 / 300",
      icon: <GraduationCap className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Yoga Retreat Classes Rishikesh India",
      description:
        "Rejuvenating 1-week and weekend ashram retreats on the sacred banks of River Ganga with Ayurvedic meals and meditation.",
      href: "/courses/one-week-yoga-retreat-india",
      badge: "7 Days Holistic",
      icon: <Sunrise className="w-6 h-6 text-brand-orange" />,
    },
    {
      title: "Yoga Dropin and Meditation Classes",
      description:
        "Daily morning and evening open asana, pranayama, and guided meditation sessions in our dedicated riverside yoga shala.",
      href: "/courses/yoga-drop-in-classes-in-rishikesh-india",
      badge: "Daily Practice",
      icon: <Sparkles className="w-6 h-6 text-brand-orange" />,
    },
  ];

  return (
    <section className="relative z-20 -mt-12 sm:-mt-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {pillars.map((pillar) => (
          <Link
            key={pillar.title}
            href={pillar.href}
            className="group relative bg-white rounded-xl p-6 sm:p-7 border border-border-light shadow-[0_4px_20px_rgba(36,17,10,0.06)] hover:shadow-[0_10px_30px_rgba(255,138,39,0.12)] hover:border-brand-orange/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange-light flex items-center justify-center group-hover:scale-105 transition-transform">
                  {pillar.icon}
                </div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-light border border-border-light text-charcoal/80">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-brand-orange transition-colors leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-2.5 font-sans text-xs sm:text-sm text-muted-slate leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-border-light/60 flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-orange group-hover:text-brand-orange-hover">
              <span>Explore Curriculum</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
