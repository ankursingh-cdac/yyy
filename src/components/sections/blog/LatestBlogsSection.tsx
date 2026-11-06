import React from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";

export function LatestBlogsSection() {
  const blogs = [
    {
      title: "What Makes Yoga Teacher Training in Rishikesh Unique",
      date: "April 2, 2026",
      category: "Yoga Teacher Training",
      excerpt:
        "Rishikesh, a spiritual haven in the foothills of the Himalayas, is renowned as the Yoga Capital of the World. Every year, it attracts thousands of yoga enthusiasts and aspiring teachers seeking authentic and transformative learning.",
      href: "/blog",
    },
    {
      title: "Yoga for Thyroid Health: 10 Powerful Poses to Improve Thyroid Function Naturally",
      date: "October 16, 2024",
      category: "Ayurveda & Health",
      excerpt:
        "The thyroid is a small gland in the neck that plays a crucial role in regulating metabolism, energy levels, and overall health. An imbalance in thyroid function can lead to various health issues that mindful asana practice can relieve.",
      href: "/blog",
    },
    {
      title: "200-Hour Yoga Teacher Training FAQs",
      date: "April 16, 2022",
      category: "Curriculum Guide",
      excerpt:
        "Take up 200-hour Yoga Teacher Training and embrace the yoga learning journey. These are the most soothing hours of your life. They will not only deepen your yoga knowledge but develop your personality holistically.",
      href: "/blog",
    },
    {
      title: "How To Choose A Yoga Teacher Training Program?",
      date: "March 15, 2022",
      category: "Admissions Advice",
      excerpt:
        "Are you an aspiring yoga teacher? Or are you keen on learning Yoga for personal benefit? In both cases, this guide helps you evaluate authentic lineage, school credentials, and ashram accommodation in Rishikesh.",
      href: "/blog",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white text-charcoal border-b border-border-light">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-[1.18] tracking-tight">
            Latest Blogs
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg text-muted-slate leading-relaxed">
            Guidance, philosophy, anatomical alignment tips, and student reflections from our ashram faculty in Rishikesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {blogs.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col justify-between bg-neutral-light rounded-xl p-6 border border-border-light hover:border-brand-orange/40 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-muted-slate mb-3">
                  <span className="font-bold text-brand-orange uppercase tracking-wider text-[11px]">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 font-sans">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal group-hover:text-brand-orange transition-colors leading-snug mb-3">
                  <Link href={post.href}>{post.title}</Link>
                </h3>

                <p className="font-sans text-xs sm:text-sm text-muted-slate leading-relaxed line-clamp-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border-light/60">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-brand-orange group-hover:text-brand-orange-hover transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-sans font-bold text-sm uppercase tracking-wider bg-white text-charcoal hover:text-brand-orange border border-border-light hover:border-brand-orange/40 shadow-xs hover:shadow-sm transition-all"
          >
            <span>More Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
