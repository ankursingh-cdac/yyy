import React from "react";
import Link from "next/link";
import { Mountain, Waves, Compass, ArrowRight } from "lucide-react";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";

export function WhyRishikeshSection() {
  return (
    <section className="py-20 sm:py-28 bg-white text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-[1.18] tracking-tight">
            Best Yoga Teacher Training India
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-muted-slate leading-relaxed">
            Are you planning to do a Yoga Teacher Training Course in India? Not certain which area to pick?
          </p>
        </div>

        {/* Narrative & Location Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 font-sans text-sm sm:text-base text-charcoal/85 leading-relaxed">
            <p>
              Despite the fact that you can discover yoga teacher training classes across India, numerous practitioners travel to India to receive their authentic yoga education certification. Some seek to become familiar with the genuine lessons of yoga directly at its origination, while others choose India for its spiritual grounding and holistic environment.
            </p>
            <p>
              Set forth plainly, Dharamsala feels like a peak escape with mountain perspectives. Rishikesh consolidates reflective contemplation with a thriving riverside community along the lovely Ganga River. If you favour the seashore over the mountains, Goa is an alternative choice—yet when you need that master knowledge and head to where it all began, Rishikesh is the undisputed origin.
            </p>

            <div className="pt-3 border-l-2 border-brand-orange pl-5 my-6 space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal tracking-tight">
                THE BEST YOGA TEACHER TRAINING INDIA
              </h3>
              <p className="text-muted-slate text-sm">
                Consider yoga teacher training in Rishikesh, a striking city in the northern Indian province of Uttarakhand that has the tallest mountain range in its scenery—the Himalayas—and through which streams the sacred Ganges waterway.
              </p>
            </div>

            <p>
              Anybody with knowledge of yoga on a worldwide scale realizes that Rishikesh is notable as an unfathomable spot to practice and study yoga, as well as meditation. It is an inspiring and stunning sanctuary for your personal and professional evolution.
            </p>

            <div className="pt-2">
              <Link
                href="/courses/200-hour-yoga-teacher-training-course"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-orange hover:text-brand-orange-hover transition-colors"
              >
                <span>View 200-Hour YTTC Syllabus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Side Feature Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-xl bg-neutral-light border border-border-light shadow-2xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-white border border-border-light text-brand-orange">
                  <Waves className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Sacred River Ganga
                  </h4>
                  <span className="text-xs font-sans text-muted-slate">Laxman Jhula, Rishikesh</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-muted-slate leading-relaxed">
                Meditate beside the pristine waters where ancient rishis attained self-realization millennia ago.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-light border border-border-light shadow-2xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-white border border-border-light text-brand-orange">
                  <Mountain className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    Himalayan Foothills
                  </h4>
                  <span className="text-xs font-sans text-muted-slate">Uttarakhand, India</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-muted-slate leading-relaxed">
                Surrounded by clean mountain air and verdant hills, providing the ideal quietude for intense daily sadhana.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-neutral-light border border-border-light shadow-2xs">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="p-2.5 rounded-lg bg-white border border-border-light text-brand-orange">
                  <Compass className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-charcoal">
                    World Capital of Yoga
                  </h4>
                  <span className="text-xs font-sans text-muted-slate">Global Spiritual Center</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-sans text-muted-slate leading-relaxed">
                Immersion into an authentic spiritual ecosystem of temples, ashrams, evening Ganga Aarti, and Vedic scholars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
