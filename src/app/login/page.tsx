"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, Loader2 } from "lucide-react";
import { brandAssets } from "@/data/image-assets";
import { siteConfig } from "@/config/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/features/auth/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState("student@example.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // If already authenticated, redirect to dashboard
  useEffect(() => {
    if (isAuthenticated && user) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, user, router]);

  const handleSignIn = (loginEmail: string, loginPass: string) => {
    setIsLoading(true);

    // Simulate authentic ashram portal verification
    setTimeout(() => {
      dispatch(
        login({
          email: loginEmail.trim() || "student@example.com",
          password: loginPass,
        })
      );
      setIsLoading(false);
      setIsSuccess(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 700);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn(email, password);
  };

  const handleDemoLogin = () => {
    setEmail("student@example.com");
    setPassword("password123");
    handleSignIn("student@example.com", "password123");
  };

  return (
    <div className="min-h-[85vh] py-14 sm:py-20 bg-neutral-light flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white border border-border-light rounded-2xl shadow-xl p-8 sm:p-10 relative overflow-hidden">
        {/* Subtle Ashram Orange Glow Corner */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

        {/* Logo & School Header */}
        <div className="text-center mb-8 relative">
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

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-light text-brand-orange text-xs font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>Student &amp; Alumni Portal</span>
          </div>

          <h1 className="font-serif text-3xl font-bold text-charcoal">
            Welcome to Aadi Yoga
          </h1>
          <p className="font-sans text-xs sm:text-sm text-muted-slate mt-1.5 leading-relaxed">
            Sign in to access your course syllabus, schedule, active validities, and certified credentials.
          </p>
        </div>

        {/* One-Click Quick Demo Login Banner */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#FAF9F6] border border-border-light/80 text-left">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Instant Demo Access</span>
              </p>
              <p className="text-[11px] text-muted-slate mt-0.5">
                Use preset demo or enter any test email/password
              </p>
            </div>
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading || isSuccess}
              className="shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-brand-orange text-white hover:bg-brand-orange-hover transition-colors shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
            >
              Demo Sign In
            </button>
          </div>
        </div>

        {isSuccess ? (
          <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-emerald-900 animate-in fade-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2.5" />
            <p className="font-serif text-lg font-bold">Portal Access Verified</p>
            <p className="text-xs text-emerald-700 mt-1">
              Entering Sadhana Desk &amp; Student Dashboard...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light bg-neutral-light/50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Password
                </label>
                <span className="text-[11px] text-muted-slate">
                  Any password works
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-slate absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light bg-neutral-light/50 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-bold bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md transition-all cursor-pointer active:scale-98 disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Connecting with Ashram Portal...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
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
