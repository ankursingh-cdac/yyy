"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Phone, MessageCircle, ArrowRight, Sparkles, LogIn } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/features/ui/uiSlice";
import { logout } from "@/store/features/auth/authSlice";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { brandAssets } from "@/data/image-assets";

export function MobileNavigation() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

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
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#24110A] text-white animate-in slide-in-from-right duration-300"
    >
      {/* Top Bar with Emblem and Close Button */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#3D1D13] bg-[#1A0C07]">
        <Link href="/" onClick={handleClose} className="flex items-center gap-3">
          <div className="relative w-10 h-10 shrink-0">
            <Image
              src={brandAssets.emblemRound}
              alt="Aadi Yoga"
              fill
              className="object-contain"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-wide text-white leading-tight">
              Aadi Yoga
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-orange font-semibold">
              Rishikesh • India
            </span>
          </div>
        </Link>
        <button
          onClick={handleClose}
          className="p-2 rounded-full hover:bg-white/10 text-white cursor-pointer transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <nav className="space-y-4">
          {mainNavItems.map((item) => (
            <div key={item.title} className="border-b border-[#3D1D13]/60 pb-3">
              <Link
                href={item.href}
                onClick={handleClose}
                className="font-serif text-2xl font-normal text-white hover:text-brand-orange flex items-center justify-between transition-colors py-1"
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-brand-orange/60" />
              </Link>
              {item.children && (
                <div className="pl-4 mt-2 space-y-2 border-l border-[#3D1D13]">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      onClick={handleClose}
                      className="block text-sm font-sans text-[#F3EBE6]/80 hover:text-brand-orange py-1 transition-colors"
                    >
                      {child.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Contact & Action Buttons */}
        <div className="pt-4 space-y-4">
          {/* User Account / Student Portal Button */}
          {isAuthenticated && user ? (
            <div className="p-4 rounded-xl bg-[#1A0C07] border border-[#3D1D13] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm overflow-hidden relative shrink-0">
                  {user.avatarUrl ? (
                    <Image
                      src={user.avatarUrl}
                      alt={user.fullName}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  ) : (
                    user.fullName.substring(0, 2).toUpperCase()
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-tight">{user.fullName}</p>
                  <p className="text-xs text-brand-orange font-semibold">ID: {user.studentId}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 text-xs font-semibold">
                <Link
                  href="/dashboard"
                  onClick={handleClose}
                  className="py-2 px-3 rounded-lg bg-brand-orange text-white text-center hover:bg-brand-orange-hover transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/dashboard?tab=courses"
                  onClick={handleClose}
                  className="py-2 px-3 rounded-lg bg-[#2A130C] border border-[#3D1D13] text-[#F3EBE6] text-center hover:bg-[#3D1D13] transition-colors"
                >
                  My Courses
                </Link>
              </div>
              <button
                type="button"
                onClick={() => {
                  dispatch(logout());
                  handleClose();
                }}
                className="w-full text-center text-xs font-semibold text-rose-400 hover:text-rose-300 pt-1"
              >
                Sign Out of Portal
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              onClick={handleClose}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm shadow-md transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Login to Student Portal</span>
            </Link>
          )}

          {/* Contact Box */}
          <div className="p-4 rounded-xl bg-[#1A0C07] border border-[#3D1D13] space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Rishikesh Ashram Desk</span>
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2.5 text-[#F3EBE6]/90 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F3EBE6]/90 hover:text-brand-orange transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-4 border-t border-[#3D1D13] text-center text-xs text-[#F3EBE6]/60 bg-[#1A0C07]">
        Laxman Jhula, Rishikesh • Yoga Alliance USA RYS
      </div>
    </div>
  );
}
