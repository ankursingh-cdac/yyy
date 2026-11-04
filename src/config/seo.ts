import { siteConfig } from "./site";

export function generateYogaSchoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["YogaSchool", "EducationalOrganization", "LocalBusiness"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: "https://aadiyogaschool.com/wp-content/uploads/2020/02/cropped-aadi-yoga-logo-1.png",
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      postalCode: siteConfig.location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yoga Teacher Training Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "200-Hour Yoga Teacher Training Course in Rishikesh",
          description: "Certified 200-hour residential Hatha and Ashtanga Vinyasa Yoga Teacher Training registered with Yoga Alliance USA.",
          provider: {
            "@type": "YogaSchool",
            name: siteConfig.name,
          },
        },
        {
          "@type": "Course",
          name: "300-Hour Residential Yoga Teacher Training Course",
          description: "Advanced 300-hour yoga teacher training course in Rishikesh for dedicated teachers and practitioners.",
          provider: {
            "@type": "YogaSchool",
            name: siteConfig.name,
          },
        },
        {
          "@type": "Course",
          name: "100-Hour Yoga Teacher Training Course in Rishikesh",
          description: "Foundational two-week immersion into classical yoga traditions.",
          provider: {
            "@type": "YogaSchool",
            name: siteConfig.name,
          },
        },
      ],
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
