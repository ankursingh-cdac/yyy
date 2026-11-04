import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-forest-green text-warm-ivory border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-warm-sand flex items-center justify-center text-forest-green shadow-sm">
                <span className="font-serif text-2xl font-normal">आ</span>
              </div>
              <div>
                <span className="font-serif text-3xl font-normal text-warm-ivory tracking-wide block">
                  Aadi Yoga
                </span>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-warm-sand block">
                  Rishikesh • India
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-warm-sand/80 leading-relaxed max-w-md">
              A premier traditional yoga school nestled in the Himalayan
              foothills on the holy banks of River Ganga. Offering internationally
              accredited 100-Hour, 200-Hour, and 300-Hour Yoga Teacher Training
              Courses (YTTC) and meditative retreats registered with Yoga
              Alliance, USA.
            </p>

            {/* Accreditation Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md flex items-center gap-3.5">
              <Award className="w-8 h-8 text-warm-sand shrink-0" />
              <div>
                <div className="font-serif text-base text-warm-ivory">
                  Yoga Alliance USA (RYS)
                </div>
                <div className="text-xs font-sans text-warm-sand/80">
                  Internationally recognized certification valid worldwide
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-warm-sand hover:text-forest-green flex items-center justify-center transition-colors text-warm-ivory"
                aria-label="Aadi Yoga Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-warm-sand hover:text-forest-green flex items-center justify-center transition-colors text-warm-ivory"
                aria-label="Aadi Yoga Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-warm-sand hover:text-forest-green flex items-center justify-center transition-colors text-warm-ivory"
                aria-label="Aadi Yoga YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-warm-sand hover:text-forest-green flex items-center justify-center transition-colors text-warm-ivory"
                aria-label="Aadi Yoga LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-warm-sand hover:text-forest-green flex items-center justify-center transition-colors text-warm-ivory"
                aria-label="Aadi Yoga Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-warm-sand tracking-wide uppercase">
              Programs
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {footerNav.programs.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-warm-ivory/80 hover:text-warm-sand transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-warm-sand tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {footerNav.explore.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-warm-ivory/80 hover:text-warm-sand transition-colors block py-0.5"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us / Ashram Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-warm-sand tracking-wide uppercase">
              Ashram Contact
            </h4>
            <div className="space-y-3.5 text-sm font-sans text-warm-ivory/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-warm-sand shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  {siteConfig.location.address},
                  <br />
                  {siteConfig.location.city}, {siteConfig.location.state} –{" "}
                  {siteConfig.location.postalCode}, {siteConfig.location.country}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-warm-sand shrink-0" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-warm-sand transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-warm-sand shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-warm-sand transition-colors text-xs"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={siteConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-warm-sand hover:text-warm-ivory underline underline-offset-4"
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-warm-sand/70">
          <div>
            © {new Date().getFullYear()} Aadi Yoga School. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-warm-ivory transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
