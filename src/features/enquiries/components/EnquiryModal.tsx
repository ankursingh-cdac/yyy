"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, CheckCircle2, Send, Sparkles } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeEnquiryModal } from "@/store/features/ui/uiSlice";
import { enquirySchema, EnquiryFormData } from "../schemas/enquirySchema";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";
import { siteConfig } from "@/config/site";

export function EnquiryModal() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isEnquiryModalOpen);
  const selectedCourse = useAppSelector(
    (state) => state.ui.selectedCourseForEnquiry
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      courseInterest: "",
      experienceLevel: "Regular Practitioner",
      preferredMonth: "Upcoming Batch",
      message: "",
    },
  });

  useEffect(() => {
    if (selectedCourse) {
      setValue("courseInterest", selectedCourse);
    }
  }, [selectedCourse, setValue]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    dispatch(closeEnquiryModal());
    reset();
    setIsSubmitted(false);
  };

  const onSubmit = async (data: EnquiryFormData) => {
    // In production this connects to email/CRM endpoint
    console.log("Enquiry submitted:", data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-xl bg-warm-ivory border border-light-border rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 bg-forest-green text-warm-ivory flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-warm-sand">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Aadi Yoga Rishikesh</span>
            </div>
            <h3 id="enquiry-modal-title" className="font-serif text-2xl font-normal mt-1">
              Course Enquiry & Syllabus Request
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-warm-ivory transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-3xl text-forest-green mb-2">
                Dhanyavad (Thank You)
              </h4>
              <p className="font-sans text-dark-charcoal/80 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-6">
                Your enquiry has been received by our Admissions team in
                Rishikesh. We will send the full syllabus, accommodation
                details, and fee structure to your email within 24 hours.
              </p>
              <div className="p-4 bg-warm-sand/30 rounded-xl border border-light-border text-xs text-muted-text max-w-sm mb-6">
                Need immediate assistance? Message us on WhatsApp:{" "}
                <a
                  href={siteConfig.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest-green underline"
                >
                  {siteConfig.contact.whatsapp}
                </a>
              </div>
              <PrimaryButton onClick={handleClose}>Close Window</PrimaryButton>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <p className="text-sm font-sans text-muted-text mb-4">
                Begin your journey to the sacred foothills of the Himalayas.
                Complete this form to receive upcoming batch dates and syllabus.
              </p>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                  Full Name <span className="text-muted-terracotta">*</span>
                </label>
                <input
                  type="text"
                  {...register("fullName")}
                  placeholder="e.g. Maria Gonzalez"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                    Email Address <span className="text-muted-terracotta">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                    WhatsApp / Phone <span className="text-muted-terracotta">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Country & Preferred Month */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                    Country of Residence <span className="text-muted-terracotta">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("country")}
                    placeholder="e.g. Germany, UK, USA"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30"
                  />
                  {errors.country && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.country.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                    Preferred Month <span className="text-muted-terracotta">*</span>
                  </label>
                  <select
                    {...register("preferredMonth")}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30 cursor-pointer"
                  >
                    <option value="Next Available Batch">Next Available Batch</option>
                    <option value="November 2026">November 2026</option>
                    <option value="December 2026">December 2026</option>
                    <option value="January 2027">January 2027</option>
                    <option value="February 2027">February 2027</option>
                    <option value="March 2027">March 2027</option>
                    <option value="April 2027">April 2027</option>
                  </select>
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                  Program of Interest <span className="text-muted-terracotta">*</span>
                </label>
                <select
                  {...register("courseInterest")}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30 cursor-pointer"
                >
                  <option value="">-- Please Select a Program --</option>
                  <option value="200-Hour Yoga Teacher Training (Rishikesh)">
                    200-Hour Yoga Teacher Training (Yoga Alliance USA)
                  </option>
                  <option value="300-Hour Advanced Yoga Teacher Training">
                    300-Hour Advanced Yoga Teacher Training
                  </option>
                  <option value="100-Hour Yoga Teacher Training Foundation">
                    100-Hour Yoga Teacher Training Foundation
                  </option>
                  <option value="7-Day Himalayan Yoga & Meditation Retreat">
                    7-Day Himalayan Yoga & Meditation Retreat
                  </option>
                  <option value="Daily Drop-In Classes">Daily Drop-In Classes</option>
                </select>
                {errors.courseInterest && (
                  <p className="text-xs text-red-600 mt-1">
                    {errors.courseInterest.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-dark-charcoal mb-1">
                  Questions or Notes (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us about your previous yoga practice or dietary requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-light-border bg-white text-dark-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-forest-green/30 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <PrimaryButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? "Submitting..." : "Send Course Enquiry"}
                </PrimaryButton>
              </div>

              <p className="text-[11px] text-center text-muted-text">
                Your personal details are held with strict yogic integrity and
                will never be shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
