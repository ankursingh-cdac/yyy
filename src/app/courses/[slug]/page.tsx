import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { coursesData } from "@/data/courses";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
import { formatPrice } from "@/lib/utils";
import { Award, Calendar, Check, Clock, MapPin, Send } from "lucide-react";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const canonicalUrl = `${siteConfig.url}/courses/${course.slug}`;

  return {
    title: course.title,
    description: course.overview,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${course.title} | Aadi Yoga School Rishikesh`,
      description: course.overview,
      url: canonicalUrl,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 800,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-24 bg-neutral-light text-charcoal">
      <SectionContainer>
        {/* Breadcrumb & Eyebrow */}
        <div className="mb-6">
          <EyebrowLabel
            text={course.category === "ttc" ? "Yoga Teacher Training" : "Wellness Retreat"}
            variant="orange"
          />
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-charcoal leading-[1.14] tracking-tight max-w-4xl mt-2">
            {course.title}
          </h1>
          <p className="font-sans text-base sm:text-xl text-muted-slate max-w-3xl mt-4 leading-relaxed font-normal">
            {course.tagline}
          </p>
        </div>

        {/* Hero Image & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-border-light bg-neutral-light">
            <Image
              src={course.image}
              alt={course.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-xl bg-white border border-border-light shadow-2xs flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-muted-slate font-sans">
                  Course Investment
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl font-bold text-charcoal">
                    {formatPrice(course.priceUsd, "USD")}
                  </span>
                  <span className="text-sm text-muted-slate font-sans">
                    / {formatPrice(course.priceInr, "INR")}
                  </span>
                </div>
                <div className="text-xs text-brand-orange font-bold font-sans mt-0.5">
                  Includes private/twin room &amp; 3 sattvic meals
                </div>
              </div>

              <div className="border-t border-border-light pt-4 space-y-3 text-sm font-sans">
                <div className="flex items-center gap-2.5 text-charcoal/85">
                  <Clock className="w-4 h-4 text-brand-orange" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>

                {course.certification && (
                  <div className="flex items-center gap-2.5 text-charcoal/85">
                    <Award className="w-4 h-4 text-brand-orange" />
                    <span>Certification: <strong>{course.certification}</strong></span>
                  </div>
                )}

                <div className="flex items-center gap-2.5 text-charcoal/85">
                  <Calendar className="w-4 h-4 text-brand-orange" />
                  <span>Next Batch: <strong>{course.upcomingBatch}</strong></span>
                </div>

                <div className="flex items-center gap-2.5 text-charcoal/85">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>Location: <strong>Laxman Jhula, Rishikesh</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-light">
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md font-sans font-bold text-xs uppercase tracking-wider bg-brand-orange text-white hover:bg-brand-orange-hover transition-all shadow-sm active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Reserve Spot on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mb-4">
                Program Overview
              </h2>
              <p className="font-sans text-base sm:text-lg text-charcoal/90 leading-relaxed font-normal">
                {course.overview}
              </p>
            </div>

            {/* Curriculum Highlights */}
            <div className="p-8 rounded-xl bg-white border border-border-light shadow-2xs">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                What is Included &amp; Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {course.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-charcoal/85">
                    <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Modules */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Curriculum Subjects
              </h3>
              <div className="space-y-3">
                {course.curriculumSummary.map((subject, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-border-light flex items-center justify-between"
                  >
                    <span className="font-serif text-lg font-bold text-charcoal">
                      {subject}
                    </span>
                    <span className="text-xs uppercase font-bold tracking-wider text-brand-orange font-sans">
                      Core Module {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* School Heritage Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl bg-white border border-border-light shadow-2xs">
              <h4 className="font-serif text-xl font-bold text-charcoal mb-2">
                Why Study at Aadi Yoga?
              </h4>
              <p className="text-xs sm:text-sm text-muted-slate leading-relaxed font-sans mb-4">
                Aadi Yoga is situated in the spiritual heart of Rishikesh near Laxman Jhula. Our campus provides a genuine ashram atmosphere where academic discipline aligns with sacred inner silence.
              </p>
              <div className="text-xs font-sans text-charcoal font-semibold space-y-1">
                <div>• Yoga Alliance USA Registered School (RYS 200/300)</div>
                <div>• Small batch sizes for individual hands-on attention</div>
                <div>• Authentic native Himalayan masters &amp; scholars</div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </article>
  );
}
