export type CourseCategory = "ttc" | "retreat" | "drop-in";

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  duration: string;
  hours?: number;
  level: "All Levels" | "Beginner to Intermediate" | "Intermediate to Advanced";
  certification?: string;
  tagline: string;
  overview: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  priceUsd: number;
  priceInr: number;
  upcomingBatch: string;
  curriculumSummary: string[];
  isFeatured?: boolean;
}
