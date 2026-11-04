/**
 * Aadi Yoga – Verified Site Configuration
 * 
 * Verified against live official presence at https://aadiyogaschool.com/
 */

export const siteConfig = {
  name: "Aadi Yoga",
  fullName: "Aadi Yoga School Rishikesh",
  tagline: "Yoga Teacher Training & Retreats in Rishikesh, India",
  description:
    "Join Aadi Yoga School for certified 100-hour, 200-hour, and 300-hour Yoga Teacher Training in Rishikesh, India. Authentic Hatha and Ashtanga Vinyasa courses registered with Yoga Alliance, USA.",
  url: "https://aadiyogaschool.com",
  ogImage: "https://aadiyogaschool.com/wp-content/uploads/2019/04/aadi-yoga-school-rishikesh-india-4-1.jpg",
  
  contact: {
    phone: "+91 80056 56529",
    phoneHref: "tel:+918005656529",
    whatsapp: "+91 80056 56529",
    whatsappHref: "https://wa.me/918005656529?text=Hello%20Aadi%20Yoga%20School,%20I%20am%20interested%20in%20your%20courses",
    email: "aadiyogaschool@gmail.com",
    bookingEmail: "booking@aadiyogaschool.com",
  },

  location: {
    address: "Near 13 Stories Temple, Laxman Jhula",
    city: "Rishikesh",
    state: "Uttarakhand",
    district: "Pauri Garhwal",
    postalCode: "249302",
    country: "India",
    googleMapsUrl: "https://g.page/AadiYoga?share",
    coordinates: {
      latitude: 30.1257,
      longitude: 78.3275,
    },
  },

  credentials: {
    accreditation: "Yoga Alliance USA Registered Yoga School (RYS 200, RYS 300)",
    tradition: "Classical Hatha, Ashtanga Vinyasa, Pranayama, Meditation & Yogic Philosophy",
    established: "2017",
  },

  social: {
    facebook: "https://www.facebook.com/AadiYogaSchool/",
    instagram: "https://www.instagram.com/aadiyogarishikesh/",
    youtube: "https://www.youtube.com/channel/UCwplmI34zuPA7yxoJNYNKnw",
    linkedin: "https://www.linkedin.com/company/aadiyogaschool",
    twitter: "https://twitter.com/aadiyogaschool",
  },
} as const;

export type SiteConfig = typeof siteConfig;
