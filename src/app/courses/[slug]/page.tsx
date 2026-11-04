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
    <article className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal">
      <SectionContainer>
        {/* Breadcrumb & Eyebrow */}
        <div className="mb-6">
          <EyebrowLabel
            text={course.category === "ttc" ? "Yoga Teacher Training" : "Wellness Retreat"}
            variant="terracotta"
          />
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-forest-green leading-[1.14] tracking-tight max-w-4xl mt-2">
            {course.title}
          </h1>
          <p className="font-sans text-base sm:text-xl text-muted-text max-w-3xl mt-4 leading-relaxed font-light">
            {course.tagline}
          </p>
        </div>

        {/* Hero Image & Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10">
          <div className="lg:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-light-border bg-warm-sand/30">
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
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white border border-light-border shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div>
                <span className="text-xs uppercase font-sans tracking-widest text-muted-text">
                  Course Fee
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-serif text-3xl font-semibold text-forest-green">
                    {formatPrice(course.priceUsd, "USD")}
                  </span>
                  <span className="text-sm text-muted-text font-sans">
                    / {formatPrice(course.priceInr, "INR")}
                  </span>
                </div>
                <div className="text-xs text-sage-green font-sans mt-0.5">
                  Includes private/shared room & 3 meals
                </div>
              </div>

              <div className="border-t border-light-border pt-4 space-y-3 text-sm font-sans">
                <div className="flex items-center gap-2.5 text-dark-charcoal/80">
                  <Clock className="w-4 h-4 text-forest-green" />
                  <span>Duration: <strong>{course.duration}</strong></span>
                </div>

                {course.certification && (
                  <div className="flex items-center gap-2.5 text-dark-charcoal/80">
                    <Award className="w-4 h-4 text-forest-green" />
                    <span>Certification: <strong>{course.certification}</strong></span>
                  </div>
                )}

                <div className="flex items-center gap-2.5 text-dark-charcoal/80">
                  <Calendar className="w-4 h-4 text-forest-green" />
                  <span>Next Batch: <strong>{course.upcomingBatch}</strong></span>
                </div>

                <div className="flex items-center gap-2.5 text-dark-charcoal/80">
                  <MapPin className="w-4 h-4 text-forest-green" />
                  <span>Location: <strong>Laxman Jhula, Rishikesh</strong></span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-light-border">
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-sans font-semibold text-xs uppercase tracking-widest bg-forest-green text-warm-ivory hover:bg-[#122e26] transition-all shadow-sm"
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
              <h2 className="font-serif text-2xl sm:text-3xl text-forest-green mb-4">
                Program Overview
              </h2>
              <p className="font-sans text-base sm:text-lg text-dark-charcoal/85 leading-relaxed">
                {course.overview}
              </p>
            </div>

            {/* Curriculum Highlights */}
            <div className="p-8 rounded-2xl bg-warm-sand/20 border border-light-border">
              <h3 className="font-serif text-2xl text-forest-green mb-4">
                What is Included & Highlights
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {course.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-sans text-dark-charcoal/85">
                    <Check className="w-4 h-4 text-sage-green shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum Modules */}
            <div>
              <h3 className="font-serif text-2xl text-forest-green mb-4">
                Curriculum Subjects
              </h3>
              <div className="space-y-3">
                {course.curriculumSummary.map((subject, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-light-border flex items-center justify-between"
                  >
                    <span className="font-serif text-lg text-forest-green">
                      {subject}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-muted-text font-sans">
                      Core Module {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location & School Heritage Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-light-border">
              <h4 className="font-serif text-xl text-forest-green mb-2">
                Why Study at Aadi Yoga?
              </h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-sans mb-4">
                Aadi Yoga is situated in the spiritual heart of Rishikesh. Our campus provides a genuine ashram atmosphere where academic discipline aligns with sacred inner silence.
              </p>
              <div className="text-xs font-sans text-forest-green font-medium">
                • Yoga Alliance USA Registered School
                <br />
                • Small class sizes for personalized guidance
                <br />
                • Authentic native Himalayan teachers
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </article>
  );
}
