import React from "react";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-warm-ivory text-dark-charcoal">
      <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-muted-terracotta mb-2">
        404 — Path Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl text-forest-green mb-4">
        Return to the Sacred Path
      </h1>
      <p className="font-sans text-sm sm:text-base text-muted-text max-w-md leading-relaxed mb-8">
        The page you are looking for may have moved or is resting in
        contemplation. Let us guide you back to our sanctuary home.
      </p>
      <PrimaryButton href="/">Return to Homepage</PrimaryButton>
    </div>
  );
}
