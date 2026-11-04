/**
 * Aadi Yoga – Navigation Configuration
 * 
 * Reflects verified routes matching https://aadiyogaschool.com/
 */

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
    children: [
      {
        title: "About Our School",
        href: "/about-us",
        description: "Our sacred lineage, ashram philosophy, and Rishikesh sanctuary.",
      },
      {
        title: "Our Teachers",
        href: "/our-teacher",
        description: "Learn from authentic Himalayan yogis and certified masters.",
      },
    ],
  },
  {
    title: "Teacher Training",
    href: "/courses/200-hour-yoga-teacher-training-course",
    children: [
      {
        title: "200-Hour Yoga TTC",
        href: "/courses/200-hour-yoga-teacher-training-course",
        description: "The gold standard international certification registered with Yoga Alliance USA.",
      },
      {
        title: "300-Hour Advanced TTC",
        href: "/courses/residential-300-hour-yoga-teacher-training-course",
        description: "Deepen your teaching mastery with advanced asana, philosophy, and pranayama.",
      },
      {
        title: "100-Hour Yoga TTC",
        href: "/courses/100-hour-yoga-teacher-training-course-in-rishikesh-india",
        description: "A transformative foundation course for beginners and dedicated seekers.",
      },
    ],
  },
  {
    title: "Retreats",
    href: "/courses/one-week-yoga-retreat-india",
    children: [
      {
        title: "One-Week Yoga Retreat",
        href: "/courses/one-week-yoga-retreat-india",
        description: "Rejuvenate mind, body, and spirit on the banks of the sacred River Ganga.",
      },
      {
        title: "Daily Drop-In Classes",
        href: "/courses/yoga-drop-in-classes-in-rishikesh-india",
        description: "Open morning and evening classes for travelers and Rishikesh visitors.",
      },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Schedule & Fee",
    href: "/schedule-fee-2",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footerNav = {
  programs: [
    { title: "200-Hour YTTC (Foundational)", href: "/courses/200-hour-yoga-teacher-training-course" },
    { title: "300-Hour YTTC (Advanced)", href: "/courses/residential-300-hour-yoga-teacher-training-course" },
    { title: "100-Hour YTTC (Beginner)", href: "/courses/100-hour-yoga-teacher-training-course-in-rishikesh-india" },
    { title: "One-Week Yoga Retreat", href: "/courses/one-week-yoga-retreat-india" },
    { title: "Drop-In Classes & Meditation", href: "/courses/yoga-drop-in-classes-in-rishikesh-india" },
  ],
  explore: [
    { title: "About Aadi Yoga", href: "/about-us" },
    { title: "Our Revered Teachers", href: "/our-teacher" },
    { title: "Ashram & Nature Gallery", href: "/gallery" },
    { title: "Dates, Schedule & Fee", href: "/schedule-fee-2" },
    { title: "Yogic Wisdom Blog", href: "/blog" },
    { title: "Contact & Directions", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Cancellation & Refund", href: "/cancellation-and-refund" },
    { title: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
