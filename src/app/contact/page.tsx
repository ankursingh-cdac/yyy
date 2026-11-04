import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SectionContainer } from "@/components/common/containers/SectionContainer";
import { EyebrowLabel } from "@/components/common/typography/EyebrowLabel";
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
      <div className="bg-forest-green text-warm-ivory py-16 sm:py-24 text-center">
        <SectionContainer>
          <EyebrowLabel text="Connect With Us" variant="ivory" className="justify-center" />
          <h1 className="font-serif text-4xl sm:text-6xl text-warm-ivory mt-2">
            Contact Aadi Yoga School
          </h1>
          <p className="font-sans text-base sm:text-lg text-warm-sand/90 max-w-2xl mx-auto mt-4 font-light leading-relaxed">
            We are here to assist with your journey to Rishikesh. Reach out with questions about dates, visa guidance, or admissions.
          </p>
        </SectionContainer>
      </div>

      <section className="py-16 sm:py-24 bg-warm-ivory text-dark-charcoal">
        <SectionContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm">
              <MapPin className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="font-serif text-2xl text-forest-green mb-2">Our Ashram Location</h3>
              <p className="font-sans text-sm text-muted-text leading-relaxed mb-4">
                {siteConfig.location.address},
                <br />
                {siteConfig.location.city}, {siteConfig.location.state} – {siteConfig.location.postalCode}, {siteConfig.location.country}
              </p>
              <a
                href={siteConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest-green underline underline-offset-4"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm">
              <Phone className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="font-serif text-2xl text-forest-green mb-2">Direct Phone & WhatsApp</h3>
              <p className="font-sans text-sm text-muted-text leading-relaxed mb-4">
                Call or message our admissions counselors directly for batch confirmation and syllabus details.
              </p>
              <div className="space-y-2 text-sm font-sans">
                <div>
                  <span className="text-xs uppercase text-muted-text block">Phone:</span>
                  <a href={siteConfig.contact.phoneHref} className="text-forest-green font-medium">
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase text-muted-text block">WhatsApp:</span>
                  <a
                    href={siteConfig.contact.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-green font-medium inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-sage-green" />
                    <span>Instant Chat</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-light-border shadow-sm">
              <Mail className="w-8 h-8 text-forest-green mb-4" />
              <h3 className="font-serif text-2xl text-forest-green mb-2">Email Desk</h3>
              <p className="font-sans text-sm text-muted-text leading-relaxed mb-4">
                Send official inquiries, partnership requests, or reservation notices directly to our office.
              </p>
              <div className="space-y-2 text-sm font-sans">
                <div>
                  <span className="text-xs uppercase text-muted-text block">General:</span>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-forest-green font-medium">
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <span className="text-xs uppercase text-muted-text block">Bookings:</span>
                  <a href={`mailto:${siteConfig.contact.bookingEmail}`} className="text-forest-green font-medium">
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
