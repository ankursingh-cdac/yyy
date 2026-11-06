import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { MapPin, Phone, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { CtaSection } from "@/components/sections/contact/CtaSection";

export const metadata: Metadata = {
  title: "Contact Us | Aadi Yoga School Rishikesh",
  description:
    "Get in touch with Aadi Yoga School in Rishikesh, India. Enquire about upcoming batches, accommodations, fee structures, and airport transfers.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div>
      <div className="bg-[#24110A] text-white py-16 sm:py-24 text-center border-b border-[#3D1D13] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/15 via-transparent to-transparent pointer-events-none" />
        <SectionContainer className="relative z-10">
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
            Contact Aadi Yoga School
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#F3EBE6]/85 max-w-2xl mx-auto mt-4 font-normal leading-relaxed">
            We are here to assist with your journey to Rishikesh. Reach out with questions about dates, visa guidance, or admissions.
          </p>
        </SectionContainer>
      </div>

      <section className="py-16 sm:py-24 bg-neutral-light text-charcoal">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white border border-border-light shadow-2xs hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Our Ashram Location</h3>
              <p className="font-sans text-sm text-muted-slate leading-relaxed mb-4">
                {siteConfig.location.address},
                <br />
                {siteConfig.location.city}, {siteConfig.location.state} – {siteConfig.location.postalCode}, {siteConfig.location.country}
              </p>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange hover:underline"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-8 rounded-xl bg-white border border-border-light shadow-2xs hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Direct Phone &amp; WhatsApp</h3>
              <p className="font-sans text-sm text-muted-slate leading-relaxed mb-4">
                Call or message our admissions counselors directly for batch confirmation and syllabus details.
              </p>
              <div className="space-y-2 text-sm font-sans">
                <div>
                  <span className="text-xs uppercase font-bold text-muted-slate block">Phone:</span>
                  <a href={siteConfig.contact.phoneHref} className="text-charcoal font-semibold hover:text-brand-orange">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-slate block">WhatsApp:</span>
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-orange font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Instant Chat</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-white border border-border-light shadow-2xs hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-brand-orange mb-4" />
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Email Desk</h3>
              <p className="font-sans text-sm text-muted-slate leading-relaxed mb-4">
                Send official inquiries, partnership requests, or reservation notices directly to our office.
              </p>
              <div className="space-y-2 text-sm font-sans">
                <div>
                  <span className="text-xs uppercase font-bold text-muted-slate block">General:</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-charcoal font-semibold hover:text-brand-orange">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-slate block">Bookings:</span>
                  <a href={`mailto:${siteConfig.contact.bookingEmail}`} className="text-charcoal font-semibold hover:text-brand-orange">
                    {siteConfig.contact.bookingEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <CtaSection />
    </div>
  );
}
