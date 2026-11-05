export interface Teacher {
  id: string;
  name: string;
  role: string;
  specialization: string[];
  bio: string;
  image: string;
  imageAlt: string;
  experienceYears?: number;
}

export interface Testimonial {
  id: string;
  studentName: string;
  country: string;
  courseCompleted: string;
  year: string;
  quote: string;
  review: string;
  rating: number;
  avatarUrl?: string;
  verifiedGraduate: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | "training-class"
    | "yoga-shala"
    | "accommodation"
    | "food"
    | "location"
    | "ashram"
    | "nature"
    | "ceremony"
    | "community";
  image: string;
  alt: string;
  caption?: string;
}
