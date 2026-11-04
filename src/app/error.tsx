"use client";

import React, { useEffect } from "react";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center bg-warm-ivory text-dark-charcoal">
      <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-muted-terracotta mb-2">
        A Gentle Pause
      </span>
      <h2 className="font-serif text-3xl sm:text-4xl text-forest-green mb-3">
        Something Interrupted the Flow
      </h2>
      <p className="font-sans text-sm text-muted-text max-w-md leading-relaxed mb-6">
        An unexpected disturbance occurred while rendering this page. You can
        try refreshing the view or return to our homepage.
      </p>
      <div className="flex items-center gap-3">
        <PrimaryButton onClick={() => reset()}>Try Again</PrimaryButton>
        <PrimaryButton href="/" variant="sand" className="text-forest-green">
          Homepage
        </PrimaryButton>
      </div>
    </div>
  );
}
