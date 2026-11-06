"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { brandAssets } from "@/data/image-assets";
import { siteConfig } from "@/config/site";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] py-16 sm:py-24 bg-neutral-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white border border-border-light rounded-xl shadow-lg p-8 sm:p-10">
        {/* Logo & School Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4 group">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-md">
              <Image
                src={brandAssets.logoHorizontal}
                alt={siteConfig.fullName}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 96px, 112px"
              />
            </div>
          </Link>
          <h1 className="font-serif text-3xl font-bold text-charcoal">
            Welcome to Aadi Yoga
          </h1>
          <p className="font-sans text-xs sm:text-sm text-muted-slate mt-1.5">
            Sign in to access your course syllabus, schedule, and study materials.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-center text-emerald-800 text-sm">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <p className="font-semibold">Portal Access Initializing</p>
            <p className="text-xs text-emerald-700 mt-1">
              Connecting with Aadi Yoga student registry for {email}...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                Registered Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-muted-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border-light bg-neutral-light/50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Please contact the admissions desk at aadiyogaschool@gmail.com for password resets.");
                  }}
                  className="text-xs text-brand-orange hover:underline font-semibold"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-border-light bg-neutral-light/50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-md text-sm font-bold bg-brand-orange hover:bg-brand-orange-hover text-white shadow-sm transition-all cursor-pointer active:scale-98"
            >
              <span>Sign In to Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-border-light text-center">
          <p className="text-xs text-muted-slate font-sans">
            New to Aadi Yoga?{" "}
            <Link
              href="/schedule-fee-2"
              className="text-brand-orange font-bold hover:underline"
            >
              Apply for an upcoming batch
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
