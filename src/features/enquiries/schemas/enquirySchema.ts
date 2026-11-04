import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name (minimum 2 characters)" })
    .max(80),
  email: z
    .string()
    .email({ message: "Please provide a valid email address" }),
  phone: z
    .string()
    .min(6, { message: "Please provide your phone or WhatsApp number with country code" }),
  country: z
    .string()
    .min(2, { message: "Please enter your country of residence" }),
  courseInterest: z
    .string()
    .min(1, { message: "Please select a course or retreat of interest" }),
  experienceLevel: z.enum([
    "Complete Beginner",
    "Regular Practitioner",
    "Yoga Teacher",
  ]),
  preferredMonth: z
    .string()
    .min(1, { message: "Please select your preferred training month" }),
  message: z.string().optional(),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
