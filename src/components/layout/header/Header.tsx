"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Phone, LogIn } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { setMobileMenuOpen } from "@/store/features/ui/uiSlice";
import { mainNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { brandAssets } from "@/data/image-assets";
import { cn } from "@/lib/utils";

export function Header() {
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenMobile = () => {
    dispatch(setMobileMenuOpen(true));
  };

  return (
    <>
      {/* Top Editorial Notification Strip (Warm Ashram Earth - Zero Blue) */}
      <div className="bg-[#2A130C] text-[#F3EBE6] text-[11px] sm:text-xs py-2 px-4 border-b border-[#3D1D13] tracking-wide font-sans">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shrink-0" />
            <span className="truncate">
              Yoga Alliance USA RYS Certified School • Rishikesh, India
            </span>
          </div>
          <div className="hidden md:flex items-center gap-5 text-[#F3EBE6]/90 shrink-0">
            <a
              href={siteConfig.contact.phoneHref}
              className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-[#F3EBE6]/80">Laxman Jhula, Rishikesh</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-border-light py-2"
            : "bg-white/90 backdrop-blur-xs border-b border-border-light/70 py-2.5 sm:py-3"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap">
          {/* Brand Logo (Left) */}
          <Link href="/" className="flex items-center shrink-0 mr-4 xl:mr-8 group">
            <div
              className={cn(
                "relative transition-all duration-300 group-hover:scale-105 drop-shadow-xs",
                isScrolled
                  ? "h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
                  : "h-14 w-14 sm:h-16 sm:w-16 lg:h-[76px] lg:w-[76px] xl:h-[82px] xl:w-[82px]"
              )}
            >
              <Image
                src={brandAssets.logoHorizontal}
                alt={siteConfig.fullName}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 82px"
              />
            </div>
          </Link>

          {/* Desktop Navigation Row (Center - Never Wraps) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 shrink min-w-0 flex-nowrap">
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
                    className="flex items-center gap-1 text-[13px] xl:text-[14px] font-medium tracking-wide whitespace-nowrap px-2.5 py-1.5 rounded-md text-charcoal hover:text-brand-orange hover:bg-neutral-light transition-colors"
                  >
                    <span>{item.title}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3.5 h-3.5 text-muted-slate transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasChildren && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 w-72 p-2 bg-white rounded-xl border border-border-light shadow-xl animate-in fade-in slide-in-from-top-1 duration-200 z-50">
                      {item.children?.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="block p-3 rounded-lg hover:bg-neutral-light transition-colors group/child"
                        >
                          <div className="text-sm font-semibold text-charcoal group-hover/child:text-brand-orange">
                            {child.title}
                          </div>
                          {child.description && (
                            <div className="text-xs text-muted-slate mt-0.5 line-clamp-2 leading-relaxed font-sans">
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

          {/* User Account / Login CTA (Right) */}
          <div className="flex items-center gap-3 shrink-0 ml-auto">
            {/* Direct WhatsApp Quick Chat (Desktop wide) */}
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal hover:text-brand-orange transition-colors px-2.5 py-1.5 rounded-md hover:bg-neutral-light"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>WhatsApp</span>
            </a>

            {/* Login Button (Brand Orange, Never Wraps) */}
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2 rounded-md text-xs xl:text-sm font-semibold bg-brand-orange hover:bg-brand-orange-hover text-white shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 transform hover:-translate-y-0.5"
            >
              <LogIn className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
              <span>Login</span>
            </Link>

            {/* Mobile Hamburger Trigger (< 1024px) */}
            <button
              onClick={handleOpenMobile}
              className="lg:hidden p-2 rounded-md border border-border-light text-charcoal hover:text-brand-orange hover:bg-neutral-light transition-colors cursor-pointer"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
