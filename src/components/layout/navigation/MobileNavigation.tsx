"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenuOpen, openEnquiryModal } from "@/store/features/ui/uiSlice";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { PrimaryButton } from "@/components/common/buttons/PrimaryButton";

export function MobileNavigation() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isMobileMenuOpen);

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

  const handleEnquire = () => {
    handleClose();
    dispatch(openEnquiryModal());
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-forest-green text-warm-ivory animate-in slide-in-from-right duration-300"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <Link href="/" onClick={handleClose} className="flex items-center gap-2">
          <span className="font-serif text-2xl font-normal tracking-wide text-warm-ivory">
            Aadi Yoga
          </span>
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-warm-sand">
            Rishikesh
          </span>
        </Link>
        <button
          onClick={handleClose}
          className="p-2 rounded-full hover:bg-white/10 text-warm-ivory cursor-pointer transition-colors"
          aria-label="Close navigation"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <nav className="space-y-4">
          {mainNavItems.map((item) => (
            <div key={item.title} className="border-b border-white/5 pb-3">
              <Link
                href={item.href}
                onClick={handleClose}
                className="font-serif text-2xl font-normal text-warm-ivory hover:text-warm-sand flex items-center justify-between transition-colors py-1"
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 text-warm-sand/60" />
              </Link>
              {item.children && (
                <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                  {item.children.map((child) => (
                    <Link
                      key={child.title}
                      href={child.href}
                      onClick={handleClose}
                      className="block text-sm font-sans text-warm-sand/80 hover:text-warm-ivory py-1 transition-colors"
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
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-warm-sand flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Rishikesh Desk</span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-2.5 text-warm-ivory hover:text-warm-sand transition-colors"
              >
                <Phone className="w-4 h-4 text-warm-sand" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-warm-ivory hover:text-warm-sand transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-warm-sand" />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>
          </div>

          <PrimaryButton
            onClick={handleEnquire}
            variant="sand"
            size="lg"
            className="w-full text-forest-green"
          >
            Apply Now / Enquire
          </PrimaryButton>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-4 border-t border-white/10 text-center text-xs text-warm-sand/70">
        Laxman Jhula, Rishikesh • Yoga Alliance USA
      </div>
    </div>
  );
}
