import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-warm-ivory text-dark-charcoal">
      <div className="w-12 h-12 rounded-full border-2 border-forest-green border-t-transparent animate-spin mb-4" />
      <div className="font-serif text-xl text-forest-green tracking-wide">
        Aadi Yoga Rishikesh
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-text mt-1 font-sans">
        Preparing your serene space...
      </div>
    </div>
  );
}
