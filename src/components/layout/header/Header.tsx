"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, Phone } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setMobileMenuOpen, openEnquiryModal } from "@/store/features/ui/uiSlice";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMobile = () => {
    dispatch(setMobileMenuOpen(true));
  };

  const handleOpenEnquiry = () => {
    dispatch(openEnquiryModal());
  };

  return (
    <>
      {/* Top Notification Bar (Editorial notice) */}
      <div className="bg-forest-green text-warm-sand text-[11px] sm:text-xs py-2 px-4 border-b border-white/10 tracking-wider font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-green animate-pulse" />
            <span>
              Yoga Alliance USA Certified School • Admissions Open for Upcoming Rishikesh Batches
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-warm-ivory">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-1.5 hover:text-warm-sand transition-colors"
            >
              <Phone className="w-3 h-3 text-warm-sand" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="opacity-30">|</span>
            <span className="text-warm-sand font-medium">Laxman Jhula, Rishikesh</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-warm-ivory/95 backdrop-blur-md shadow-sm border-b border-light-border py-3.5"
            : "bg-warm-ivory/80 backdrop-blur-xs border-b border-light-border/60 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-warm-ivory shadow-sm transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-xl italic font-normal">आ</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-forest-green leading-none">
                Aadi Yoga
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-sage-green font-medium mt-1">
                Rishikesh • India
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainNavItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => hasChildren && setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-sm font-sans font-medium text-dark-charcoal/90 hover:text-forest-green transition-colors py-2 tracking-wide"
                  >
                    <span>{item.title}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3.5 h-3.5 text-muted-text transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-72 p-2 bg-white rounded-xl border border-light-border shadow-xl animate-in fade-in slide-in-from-top-1 duration-200 z-50">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block p-3 rounded-lg hover:bg-warm-ivory transition-colors group/child"
                        >
                          <div className="text-sm font-serif font-medium text-forest-green group-hover/child:text-forest-green">
                            {child.title}
                          </div>
                          {child.description && (
                            <div className="text-xs font-sans text-muted-text mt-0.5 line-clamp-2 leading-relaxed">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenEnquiry}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-forest-green text-warm-ivory hover:bg-[#122e26] transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
            >
              Apply Now
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={handleOpenMobile}
              className="lg:hidden p-2 rounded-lg border border-light-border text-forest-green hover:bg-warm-sand/30 transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
