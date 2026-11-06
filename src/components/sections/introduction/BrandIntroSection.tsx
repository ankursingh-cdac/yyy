import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Award } from "lucide-react";
import { courseAssets } from "@/data/image-assets";
import { siteConfig } from "@/config/site";

function LotusIcon({ className = "w-8 h-8 text-brand-orange" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 6C24 6 20 18 20 28C20 33.5228 21.7909 38 24 38C26.2091 38 28 33.5228 28 28C28 18 24 6 24 6Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path
        d="M20 14C20 14 12 21 10 30C9.15574 33.7992 11.2386 37 14 37C17.5 37 21 31 22 26C22.6148 22.926 21.5 17 20 14Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <path
        d="M28 14C28 14 36 21 38 30C38.8443 33.7992 36.7614 37 34 37C30.5 37 27 31 26 26C25.3852 22.926 26.5 17 28 14Z"
        fill="currentColor"
        fillOpacity="0.7"
      />
      <path
        d="M14 24C14 24 6 29 4 35C3.06411 37.8077 5.27584 40 8 40C12 40 17 35 19 30C19.7909 28.0228 17 25 14 24Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M34 24C34 24 42 29 44 35C44.9359 37.8077 42.7242 40 40 40C36 40 31 35 29 30C28.2091 28.0228 31 25 34 24Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <path
        d="M10 40C16 42 32 42 38 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandIntroSection() {
  return (
    <section id="welcome" className="py-20 sm:py-28 bg-neutral-light text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Card Container */}
        <div className="bg-white rounded-2xl border border-border-light shadow-[0_8px_30px_rgba(36,17,10,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Authentic Brand Message (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                {/* Traditional Lotus Motif */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-orange-light flex items-center justify-center">
                    <LotusIcon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand-orange">
                    Aadi Yoga School Rishikesh
                  </span>
                </div>

                {/* Exact Live Site Title */}
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-[1.18] tracking-tight mb-6">
                  Welcome at Aadi Yoga Teacher Training India
                </h2>

                {/* Exact Live Site Copywriting */}
                <div className="space-y-4 font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed font-normal">
                  <p>
                    Aadi Yoga Teacher Training India offers Residential{" "}
                    <Link
                      href="/courses/100-hour-yoga-teacher-training-course-in-rishikesh-india"
                      className="font-bold text-brand-orange underline underline-offset-4 decoration-brand-orange/40 hover:decoration-brand-orange transition-colors"
                    >
                      100 Hour
                    </Link>
                    ,{" "}
                    <Link
                      href="/courses/200-hour-yoga-teacher-training-course"
                      className="font-bold text-brand-orange underline underline-offset-4 decoration-brand-orange/40 hover:decoration-brand-orange transition-colors"
                    >
                      200 Hour
                    </Link>{" "}
                    Hatha, Ashtanga Yoga Teacher Training Courses in Rishikesh, India Registered with the{" "}
                    <strong className="text-charcoal font-semibold">Yoga Alliance, USA</strong>.
                  </p>
                  <p className="text-muted-slate text-sm sm:text-base">
                    Aadi Yoga School is founded with a confidence to share the traditional experience of yoga and the intention to lead students along the path of holistic healthy living.
                  </p>
                </div>

                {/* Key Ashram Credentials Strip */}
                <div className="mt-8 pt-6 border-t border-border-light grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-brand-orange shrink-0" />
                    <span className="text-xs font-semibold text-charcoal">
                      Yoga Alliance USA (RYS)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                    <span className="text-xs font-semibold text-charcoal">
                      Hatha &amp; Ashtanga Primary
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                    <span className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                    <span className="text-xs font-semibold text-charcoal">
                      Laxman Jhula Ashram
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Live Site CTA Button: More About Us */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/about-us"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-sans font-bold text-sm uppercase tracking-wider bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
                >
                  <span>More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-sans font-semibold text-sm text-charcoal hover:text-brand-orange border border-border-light hover:border-brand-orange/40 bg-neutral-light transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call: {siteConfig.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Genuine Student Graduation Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full bg-neutral-light">
              <Image
                src={courseAssets.graduationBatch}
                alt="Aadi Yoga Teacher Training India graduation ceremony with certificates and traditional flower garlands"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-black/20" />

              {/* Floating Contact Call Badge (as shown in original site) */}
              <a
                href={siteConfig.contact.phoneHref}
                className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-orange text-white font-sans font-bold text-xs uppercase tracking-wider shadow-xl hover:bg-brand-orange-hover transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>80056 56529</span>
              </a>

              {/* Yoga Alliance Badge Top Left */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-md bg-white/95 backdrop-blur-sm border border-border-light shadow-md flex items-center gap-2 text-xs font-bold text-charcoal">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>Certified Graduates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
