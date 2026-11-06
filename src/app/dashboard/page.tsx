"use client";

import React, { useState, useEffect, useTransition, Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Award,
  ShoppingBag,
  Receipt,
  User,
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Download,
  ShieldCheck,
  ChevronRight,
  X,
  CreditCard,
  Save,
  Check,
  Flame,
  GraduationCap,
  BellRing,
  Camera,
  Upload,
  Trash2,
  Utensils,
  HeartHandshake,
  Sparkles,
  RotateCcw,
  Copy,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  updateProfile,
  purchaseCourse,
  toggleModuleCompletion,
  AvailableCourse,
} from "@/store/features/auth/authSlice";
import { brandAssets } from "@/data/image-assets";
import { cn } from "@/lib/utils";

function DashboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const [, startTransition] = useTransition();

  const {
    isAuthenticated,
    user,
    enrolledCourses,
    certificates,
    availableCourses,
    orders,
  } = useAppSelector((state) => state.auth);

  // Directly derive activeTab from URL search params (clean & reactive)
  const activeTab = searchParams.get("tab") || "overview";

  // Modal states
  const [selectedCourseForPurchase, setSelectedCourseForPurchase] = useState<AvailableCourse | null>(null);
  const [purchaseBatch, setPurchaseBatch] = useState<string>("");
  const [purchaseRoom, setPurchaseRoom] = useState<string>("Shared Twin Mountain View");
  const [isPurchaseSuccess, setIsPurchaseSuccess] = useState(false);

  // Certificate Modal state
  const [viewingCertificate, setViewingCertificate] = useState<(typeof certificates)[0] | null>(null);

  // File input ref for profile photo
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Profile Edit State (lazily initialized from user)
  const [profileForm, setProfileForm] = useState(() => ({
    fullName: user?.fullName || "Aarav Sharma",
    spiritualName: user?.spiritualName || "",
    avatarUrl: user?.avatarUrl || "/images/teachers/yogi-chetan-kumar.jpg",
    phone: user?.phone || "+91 98765 43210",
    dietaryPreference: user?.dietaryPreference || "Sattvic Vegetarian",
    emergencyName: user?.emergencyContact?.name || "Meera Sharma",
    emergencyRelation: user?.emergencyContact?.relation || "Sister",
    emergencyPhone: user?.emergencyContact?.phone || "+91 98765 12345",
    city: user?.city || "Rishikesh",
    country: user?.country || "India",
    sankalpa: user?.sankalpa || "To deepen authentic Himalayan Hatha & Ashtanga sadhana.",
  }));
  const [profileSaved, setProfileSaved] = useState(false);

  // Auth Guard: redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleTabChange = (newTab: string) => {
    startTransition(() => {
      router.replace(`/dashboard?tab=${newTab}`, { scroll: false });
    });
  };

  const handleOpenPurchase = (course: AvailableCourse) => {
    setSelectedCourseForPurchase(course);
    setPurchaseBatch(course.upcomingBatches[0]?.date || "1st Dec 2026");
    setIsPurchaseSuccess(false);
  };

  const handleConfirmPurchase = () => {
    if (!selectedCourseForPurchase) return;
    dispatch(
      purchaseCourse({
        courseId: selectedCourseForPurchase.id,
        batchDate: purchaseBatch,
        roomType: purchaseRoom,
      })
    );
    setIsPurchaseSuccess(true);
    setTimeout(() => {
      setSelectedCourseForPurchase(null);
      setIsPurchaseSuccess(false);
      handleTabChange("courses");
    }, 1200);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image file size should be less than 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileForm((prev) => ({ ...prev, avatarUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPresetAvatar = (url: string) => {
    setProfileForm((prev) => ({ ...prev, avatarUrl: url }));
  };

  const handleRemovePhoto = () => {
    setProfileForm((prev) => ({ ...prev, avatarUrl: "" }));
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        fullName: profileForm.fullName,
        spiritualName: profileForm.spiritualName,
        avatarUrl: profileForm.avatarUrl,
        phone: profileForm.phone,
        dietaryPreference: profileForm.dietaryPreference,
        city: profileForm.city,
        country: profileForm.country,
        sankalpa: profileForm.sankalpa,
        emergencyContact: {
          name: profileForm.emergencyName,
          relation: profileForm.emergencyRelation,
          phone: profileForm.emergencyPhone,
        },
      })
    );
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-neutral-light">
        <div className="text-center p-8">
          <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg font-bold text-charcoal">Checking Ashram Credentials...</p>
        </div>
      </div>
    );
  }

  const userInitials = user.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  const totalCourseHours = enrolledCourses.reduce(
    (sum, c) => sum + c.modules.reduce((mSum, m) => mSum + (m.completed ? m.hours : 0), 0),
    0
  );

  return (
    <div className="min-h-screen bg-neutral-light pb-24 font-sans">
      {/* Editorial Ashram Header Banner */}
      <section className="bg-[#24110A] text-white pt-10 pb-12 border-b border-[#3D1D13] relative overflow-hidden">
        {/* Warm Ambient Spiritual Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/4 w-80 h-80 bg-brand-terracotta/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Student Identity */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-orange to-[#C3512F] p-0.5 shadow-lg shrink-0 overflow-hidden">
                <div className="w-full h-full bg-[#1A0C07] rounded-[14px] flex items-center justify-center text-xl sm:text-2xl font-bold text-white tracking-wider overflow-hidden relative">
                  {user.avatarUrl ? (
                    <Image
                      src={user.avatarUrl}
                      alt={user.fullName}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  ) : (
                    userInitials
                  )}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-[11px] font-bold tracking-wider uppercase">
                    Student ID: {user.studentId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Yoga Alliance USA Registry</span>
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-wide">
                  Namaste, {user.fullName}
                  {user.spiritualName && (
                    <span className="text-brand-orange font-normal text-xl sm:text-2xl ml-2 italic">
                      ({user.spiritualName})
                    </span>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-[#F3EBE6]/80 mt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>Aadi Yoga Ashram • Laxman Jhula, Rishikesh</span>
                  <span className="text-white/20">•</span>
                  <span>{user.email}</span>
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <button
                type="button"
                onClick={() => handleTabChange("explore")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Enroll in Course</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange("certificates")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1A0C07] border border-[#3D1D13] hover:border-brand-orange/50 text-[#F3EBE6] text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>My Certificates</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabbed Navigation Bar */}
      <div className="sticky top-[64px] sm:top-[72px] lg:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-border-light shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
            {[
              { id: "overview", label: "Sadhana Desk", icon: LayoutDashboard },
              {
                id: "courses",
                label: "My Courses & Validities",
                icon: BookOpen,
                badge: enrolledCourses.length,
              },
              {
                id: "certificates",
                label: "Certificates",
                icon: Award,
                badge: certificates.length,
              },
              { id: "explore", label: "Enroll & Courses", icon: ShoppingBag },
              { id: "orders", label: "Invoices & Receipts", icon: Receipt },
              { id: "profile", label: "Profile & Settings", icon: User },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer",
                    isActive
                      ? "bg-brand-orange text-white shadow-xs font-bold"
                      : "text-charcoal hover:text-brand-orange hover:bg-neutral-light"
                  )}
                >
                  <Icon className={cn("w-4 h-4", isActive ? "text-white" : "text-muted-slate")} />
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span
                      className={cn(
                        "ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold",
                        isActive ? "bg-white/25 text-white" : "bg-neutral-light text-muted-slate"
                      )}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ======================================================== */}
        {/* TAB 1: OVERVIEW / SADHANA DESK                           */}
        {/* ======================================================== */}
        {activeTab === "overview" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* 4 Stat Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-5 rounded-2xl border border-border-light shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">
                    Active Courses
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-brand-orange-light flex items-center justify-center text-brand-orange">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-charcoal">
                    {enrolledCourses.filter((c) => c.status === "active").length}
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">Active Validities</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-border-light shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">
                    Hours Completed
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-charcoal">
                    {totalCourseHours}h
                  </span>
                  <span className="text-xs text-muted-slate font-medium">Logged Sadhana</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-border-light shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">
                    Certificates Earned
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-charcoal">
                    {certificates.length}
                  </span>
                  <span className="text-xs text-emerald-600 font-semibold">Yoga Alliance USA</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-border-light shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">
                    Sadhana Streak
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Flame className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-charcoal">
                    24 Days
                  </span>
                  <span className="text-xs text-orange-600 font-semibold">Continuous Practice</span>
                </div>
              </div>
            </div>

            {/* Split Grid: Today's Schedule + Active Course Spotlight */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Today's Schedule Card (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-border-light shadow-xs p-6 sm:p-7">
                <div className="flex items-center justify-between pb-4 border-b border-border-light">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-charcoal">
                        Today&apos;s Ashram Schedule
                      </h2>
                      <p className="text-xs text-muted-slate">
                        Live Shala Routine • Laxman Jhula Time (IST)
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>In Session</span>
                  </span>
                </div>

                {/* Schedule Items */}
                <div className="mt-5 space-y-3.5">
                  {[
                    {
                      time: "06:00 AM - 07:30 AM",
                      title: "Traditional Hatha Asana & Surya Sadhana",
                      trainer: "Yogi Prashant Negi",
                      location: "Ganga View Yoga Shala (Floor 3)",
                      status: "done",
                    },
                    {
                      time: "08:00 AM - 09:00 AM",
                      title: "Pranayama, Shatkarma & Himalayan Breathwork",
                      trainer: "Deepa Negi",
                      location: "Maa Ganga Shala",
                      status: "active",
                    },
                    {
                      time: "09:15 AM - 10:00 AM",
                      title: "Sattvic Ayurvedic Breakfast & Herbal Tea",
                      trainer: "Ashram Kitchen",
                      location: "Dining Hall",
                      status: "upcoming",
                    },
                    {
                      time: "11:00 AM - 12:30 PM",
                      title: "Patanjali Yoga Sutras & Yogic Philosophy",
                      trainer: "Swami Amarna Anand",
                      location: "Philosophy Hall",
                      status: "upcoming",
                    },
                    {
                      time: "04:00 PM - 05:45 PM",
                      title: "Ashtanga Vinyasa Primary Series Alignment",
                      trainer: "Yogi Chetan Kumar",
                      location: "Ganga View Yoga Shala",
                      status: "upcoming",
                    },
                    {
                      time: "06:30 PM - 07:30 PM",
                      title: "Sunset Ganga Aarti & Meditation by the River",
                      trainer: "All Ashram Faculty",
                      location: "Shatrughna Ghat Beach",
                      status: "upcoming",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                        item.status === "active"
                          ? "bg-brand-orange-light/50 border-brand-orange/40 shadow-xs"
                          : item.status === "done"
                          ? "bg-neutral-light/50 border-border-light/70 opacity-70"
                          : "bg-white border-border-light/80 hover:border-brand-orange/30"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",
                            item.status === "active"
                              ? "bg-brand-orange text-white"
                              : item.status === "done"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-neutral-200 text-muted-slate"
                          )}
                        >
                          {item.status === "done" ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-charcoal">{item.title}</p>
                          <p className="text-[11px] text-muted-slate flex items-center gap-2 mt-0.5">
                            <span>{item.trainer}</span>
                            <span>•</span>
                            <span className="text-brand-orange font-semibold">{item.location}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <span className="text-xs font-semibold text-charcoal flex items-center gap-1">
                          <Clock className="w-3 h-3 text-muted-slate" />
                          <span>{item.time}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Course Spotlight & Announcements (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Active Course Card */}
                {enrolledCourses[0] && (
                  <div className="bg-white rounded-2xl border border-border-light shadow-xs p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        Current Primary Course
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                        Active Validity
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-charcoal leading-snug">
                      {enrolledCourses[0].title}
                    </h3>

                    <p className="text-xs text-muted-slate mt-1.5 flex items-center gap-2">
                      <span>Batch: {enrolledCourses[0].batchName}</span>
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-bold text-charcoal">Course Progress</span>
                        <span className="font-bold text-brand-orange">
                          {enrolledCourses[0].progressPercent}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-neutral-200 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-orange to-[#C3512F] rounded-full transition-all duration-500"
                          style={{ width: `${enrolledCourses[0].progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Validity Notice */}
                    <div className="mt-4 p-3 rounded-xl bg-neutral-light border border-border-light text-xs flex items-center justify-between">
                      <div className="flex items-center gap-2 text-charcoal">
                        <Clock className="w-4 h-4 text-brand-orange" />
                        <span>Valid Until:</span>
                      </div>
                      <span className="font-bold text-charcoal">
                        {enrolledCourses[0].validUntil}
                      </span>
                    </div>

                    <div className="mt-5 pt-4 border-t border-border-light flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleTabChange("courses")}
                        className="text-xs font-bold text-brand-orange hover:text-brand-orange-hover flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Syllabus &amp; Modules</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleTabChange("certificates")}
                        className="text-xs font-bold text-charcoal hover:text-brand-orange flex items-center gap-1 cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5 text-amber-500" />
                        <span>Credentials</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Faculty Ashram Noticeboard */}
                <div className="bg-[#FAF9F6] rounded-2xl border border-border-light shadow-xs p-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                    <BellRing className="w-4 h-4 text-brand-orange" />
                    <span>Ashram Announcements</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white border border-border-light/80">
                      <p className="text-xs font-bold text-charcoal">
                        Sunset Ganga Beach Meditation Gathering
                      </p>
                      <p className="text-[11px] text-muted-slate mt-1 leading-relaxed">
                        Gather at the ashram reception this Friday at 05:30 PM with your meditation shawl.
                      </p>
                      <span className="text-[10px] text-brand-orange font-semibold mt-1 inline-block">
                        Lead: Swami Amarna Anand
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-border-light/80">
                      <p className="text-xs font-bold text-charcoal">
                        Ayurvedic Herbal Concoction Workshop
                      </p>
                      <p className="text-[11px] text-muted-slate mt-1 leading-relaxed">
                        Learn to formulate traditional Kadha and herbal teas for dosha balancing.
                      </p>
                      <span className="text-[10px] text-brand-orange font-semibold mt-1 inline-block">
                        Lead: Deepa Negi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: MY COURSES & VALIDITIES                           */}
        {/* ======================================================== */}
        {activeTab === "courses" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                  My Enrolled Courses &amp; Validities
                </h2>
                <p className="text-xs sm:text-sm text-muted-slate mt-1">
                  Track your active study permits, module completion, and downloadable manuals.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleTabChange("explore")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-orange text-white text-xs sm:text-sm font-bold shadow-xs hover:bg-brand-orange-hover transition-colors self-start cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Enroll in Another Program</span>
              </button>
            </div>

            <div className="space-y-6">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-border-light shadow-sm p-6 sm:p-8"
                >
                  {/* Top Bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border-light">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-brand-orange-light text-brand-orange text-xs font-bold uppercase tracking-wider">
                          Code: {course.code}
                        </span>
                        <span
                          className={cn(
                            "px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border",
                            course.status === "active"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "bg-blue-50 text-blue-700 border-blue-200"
                          )}
                        >
                          Status: {course.status}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-charcoal text-xs font-bold border border-border-light">
                          Valid Until: {course.validUntil}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-charcoal">
                        {course.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-slate mt-1">
                        Instructors: <span className="text-charcoal font-semibold">{course.instructor}</span> • Batch:{" "}
                        <span className="text-charcoal font-semibold">{course.batchName}</span>
                      </p>
                    </div>

                    {/* Progress Badge */}
                    <div className="flex items-center gap-4 bg-neutral-light p-4 rounded-xl border border-border-light shrink-0">
                      <div>
                        <div className="text-xs text-muted-slate">Completion</div>
                        <div className="text-2xl font-bold text-brand-orange">
                          {course.progressPercent}%
                        </div>
                      </div>
                      <div className="w-16 h-16 relative flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-neutral-200"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-brand-orange"
                            strokeDasharray={`${course.progressPercent}, 100`}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Modules Checklist */}
                  <div className="py-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-brand-orange" />
                      <span>Syllabus Modules (Click to Toggle Completion)</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.modules.map((mod) => (
                        <button
                          key={mod.id}
                          type="button"
                          onClick={() =>
                            dispatch(
                              toggleModuleCompletion({
                                courseId: course.id,
                                moduleId: mod.id,
                              })
                            )
                          }
                          className={cn(
                            "flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all cursor-pointer group",
                            mod.completed
                              ? "bg-emerald-50/50 border-emerald-200 text-emerald-950"
                              : "bg-[#FAF9F6] border-border-light hover:border-brand-orange/40 text-charcoal"
                          )}
                        >
                          <div
                            className={cn(
                              "w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border",
                              mod.completed
                                ? "bg-emerald-600 border-emerald-600 text-white"
                                : "border-muted-slate/40 group-hover:border-brand-orange"
                            )}
                          >
                            {mod.completed && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold leading-snug">{mod.title}</p>
                            <span className="text-[10px] text-muted-slate mt-1 inline-block">
                              {mod.hours} Practicum Hours
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Study Materials Downloads */}
                  <div className="pt-6 border-t border-border-light">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-brand-terracotta" />
                      <span>Course Study Materials &amp; Audio Recitations</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {course.studyMaterials.map((mat, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-neutral-light border border-border-light flex flex-col justify-between gap-3"
                        >
                          <div>
                            <p className="text-xs font-bold text-charcoal line-clamp-2">
                              {mat.name}
                            </p>
                            <p className="text-[10px] text-muted-slate mt-1">
                              {mat.type} • {mat.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              alert(`Downloading "${mat.name}" (${mat.size}). Demo download simulated successfully.`)
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Resource</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: CERTIFICATES & ACCREDITATIONS                     */}
        {/* ======================================================== */}
        {activeTab === "certificates" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                Official Ashram Certificates &amp; Credentials
              </h2>
              <p className="text-xs sm:text-sm text-muted-slate mt-1">
                Yoga Alliance USA RYS certified credentials issued by Aadi Yoga School Rishikesh.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-3xl border-2 border-brand-orange/30 shadow-xl p-8 relative overflow-hidden"
                >
                  {/* Subtle Ornamental Border */}
                  <div className="absolute inset-3 border border-dashed border-brand-orange/30 rounded-2xl pointer-events-none" />

                  {/* Header with Emblem */}
                  <div className="flex items-center justify-between pb-6 border-b border-border-light relative">
                    <div className="flex items-center gap-3">
                      <div className="relative w-14 h-14 shrink-0">
                        <Image
                          src={brandAssets.logoHorizontal}
                          alt="Aadi Yoga"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-charcoal">
                          Aadi Yoga School
                        </h3>
                        <p className="text-[10px] tracking-widest uppercase font-semibold text-brand-orange">
                          Rishikesh • India
                        </p>
                      </div>
                    </div>

                    <div className="relative w-20 h-10 shrink-0">
                      <Image
                        src={brandAssets.yogaAlliance}
                        alt="Yoga Alliance USA"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Certificate Body */}
                  <div className="py-8 text-center relative">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-terracotta">
                      Certificate of Completion
                    </span>

                    <p className="text-xs text-muted-slate mt-2 italic">
                      This is to certify that
                    </p>

                    <h4 className="text-3xl font-bold mt-2 tracking-wide text-brand-orange">
                      {cert.studentName}
                    </h4>

                    <p className="text-xs text-muted-slate mt-3 max-w-md mx-auto leading-relaxed">
                      has successfully completed the intensive residential training in
                    </p>

                    <p className="text-lg font-bold text-charcoal mt-1 px-4">
                      {cert.courseTitle} ({cert.hours} Hours)
                    </p>

                    <p className="text-[11px] text-muted-slate mt-2">
                      Conducted in Rishikesh, Uttarakhand, India in accordance with Yoga Alliance USA standards.
                    </p>
                  </div>

                  {/* Footer Meta */}
                  <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative text-xs">
                    <div>
                      <p className="font-bold text-charcoal">Certificate ID: {cert.certificateNumber}</p>
                      <p className="text-[11px] text-muted-slate mt-0.5">Date of Issue: {cert.issueDate}</p>
                      <p className="text-[11px] text-brand-orange font-semibold mt-0.5">
                        Lead Trainer: {cert.leadTrainer}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setViewingCertificate(cert)}
                        className="px-3.5 py-2 rounded-xl bg-neutral-light hover:bg-neutral-200 border border-border-light text-charcoal font-bold text-xs transition-colors cursor-pointer"
                      >
                        Preview
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          alert(
                            `Downloading Official Accredited Certificate: ${cert.certificateNumber}. Verified by Yoga Alliance USA.`
                          )
                        }
                        className="px-3.5 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 4: EXPLORE & PURCHASE COURSES                        */}
        {/* ======================================================== */}
        {activeTab === "explore" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                Explore &amp; Enroll in Ashram Courses
              </h2>
              <p className="text-xs sm:text-sm text-muted-slate mt-1">
                Select from our Yoga Alliance USA certified teacher training programs and Himalayan retreats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {availableCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl border border-border-light shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full bg-neutral-200">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-charcoal text-xs font-bold shadow-sm">
                        {course.level}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-semibold text-brand-orange tracking-widest uppercase">
                          {course.duration}
                        </span>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {course.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-white/80">Tuition</span>
                        <p className="text-2xl font-bold text-white">
                          ${course.priceUsd}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-muted-slate leading-relaxed">
                        {course.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-border-light">
                        <p className="text-xs font-bold text-charcoal uppercase tracking-wider mb-2">
                          Upcoming Batches:
                        </p>
                        <div className="space-y-1.5">
                          {course.upcomingBatches.map((batch, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-neutral-light"
                            >
                              <span className="text-charcoal font-medium">{batch.date}</span>
                              <span className="text-brand-orange font-bold text-[11px]">
                                {batch.seatsLeft} seats remaining
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border-light flex items-center justify-between">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-xs font-bold text-charcoal hover:text-brand-orange transition-colors"
                      >
                        View Full Curriculum →
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleOpenPurchase(course)}
                        className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 5: INVOICES & RECEIPTS                               */}
        {/* ======================================================== */}
        {activeTab === "orders" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                Order History &amp; Payment Receipts
              </h2>
              <p className="text-xs sm:text-sm text-muted-slate mt-1">
                Download your official ashram tuition invoices and transaction records.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-border-light shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#FAF9F6] border-b border-border-light text-[11px] uppercase tracking-wider font-bold text-muted-slate">
                    <tr>
                      <th className="py-4 px-6">Invoice #</th>
                      <th className="py-4 px-6">Program / Course</th>
                      <th className="py-4 px-6">Date</th>
                      <th className="py-4 px-6">Amount (USD)</th>
                      <th className="py-4 px-6">Status</th>
                      <th className="py-4 px-6 text-right">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light">
                    {orders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-neutral-light/50 transition-colors">
                        <td className="py-4 px-6 font-bold text-charcoal font-mono">
                          {ord.invoiceNumber}
                        </td>
                        <td className="py-4 px-6 font-semibold text-charcoal">
                          {ord.courseTitle}
                          <div className="text-[10px] text-muted-slate font-normal font-mono mt-0.5">
                            Txn: {ord.transactionId}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-muted-slate">{ord.date}</td>
                        <td className="py-4 px-6 font-bold text-charcoal">${ord.amountUsd}</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                            <Check className="w-3 h-3" />
                            <span>{ord.status}</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-right">
                          <button
                            type="button"
                            onClick={() =>
                              alert(
                                `Generating official PDF invoice for ${ord.invoiceNumber} ($${ord.amountUsd}). Download completed.`
                              )
                            }
                            className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:underline cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>PDF</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 6: PROFILE & SADHANA SETTINGS                        */}
        {/* ======================================================== */}
        {activeTab === "profile" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
                  Student Profile &amp; Sadhana Preferences
                </h2>
                <p className="text-xs sm:text-sm text-muted-slate mt-1">
                  Manage your personal photo, residential ashram preferences, emergency contact, and spiritual intentions.
                </p>
              </div>

              {profileSaved && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Profile updated &amp; saved!</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT COLUMN: Student Photo & Credential Card (4 cols) */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                {/* Photo & Avatar Card */}
                <div className="bg-white rounded-2xl border border-border-light shadow-xs p-6 text-center">
                  <div className="relative inline-block mx-auto mb-4 group">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden relative mx-auto border-4 border-white shadow-xl bg-gradient-to-br from-brand-orange to-brand-terracotta ring-2 ring-brand-orange/30">
                      {profileForm.avatarUrl ? (
                        <Image
                          src={profileForm.avatarUrl}
                          alt={profileForm.fullName}
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white uppercase">
                          {userInitials}
                        </div>
                      )}
                    </div>

                    {/* Camera Change Icon Overlay */}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-1 right-1 p-2 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md transition-transform hover:scale-110 cursor-pointer"
                      title="Upload New Photo"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageFileChange}
                      className="hidden"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-charcoal">
                    {profileForm.fullName || "Student"}
                  </h3>
                  {profileForm.spiritualName && (
                    <p className="text-xs font-semibold text-brand-orange italic mt-0.5">
                      {profileForm.spiritualName}
                    </p>
                  )}

                  {/* Photo Actions */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Photo</span>
                    </button>

                    {profileForm.avatarUrl && (
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border-light text-muted-slate hover:text-rose-600 hover:border-rose-200 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    )}
                  </div>

                  {/* Preset Ashram Avatars */}
                  <div className="mt-6 pt-5 border-t border-border-light text-left">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-slate mb-2.5">
                      Or Choose Ashram Avatar:
                    </p>
                    <div className="flex items-center justify-center gap-2.5">
                      {[
                        { label: "Yogi Chetan", src: "/images/teachers/yogi-chetan-kumar.jpg" },
                        { label: "Yogi Prashant", src: "/images/teachers/yogi-prashant-negi.jpg" },
                        { label: "Swami Amarna", src: "/images/teachers/swami-amarna-anand.jpg" },
                        { label: "Deepa Negi", src: "/images/teachers/deepa-negi.jpg" },
                      ].map((avatar, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectPresetAvatar(avatar.src)}
                          className={cn(
                            "w-10 h-10 rounded-full overflow-hidden relative border-2 transition-all cursor-pointer hover:scale-105",
                            profileForm.avatarUrl === avatar.src
                              ? "border-brand-orange ring-2 ring-brand-orange/40 scale-105"
                              : "border-border-light opacity-80 hover:opacity-100"
                          )}
                          title={avatar.label}
                        >
                          <Image src={avatar.src} alt={avatar.label} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Student Credentials List */}
                  <div className="mt-6 pt-5 border-t border-border-light text-left space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-slate font-medium">Student ID:</span>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard?.writeText(user.studentId);
                          setCopiedId(true);
                          setTimeout(() => setCopiedId(false), 2000);
                        }}
                        className="inline-flex items-center gap-1 font-mono font-bold text-charcoal bg-neutral-light px-2 py-0.5 rounded border border-border-light hover:border-brand-orange/40 cursor-pointer"
                        title="Click to copy"
                      >
                        <span>{user.studentId}</span>
                        {copiedId ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-slate" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-slate font-medium">Accreditation:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Yoga Alliance USA</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-slate font-medium">Ashram Campus:</span>
                      <span className="font-semibold text-charcoal">Laxman Jhula, Rishikesh</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-slate font-medium">Member Since:</span>
                      <span className="font-semibold text-charcoal">November 2024</span>
                    </div>
                  </div>
                </div>

                {/* Profile Completion Meter */}
                <div className="bg-[#FAF9F6] rounded-2xl border border-border-light p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-charcoal">
                    <span>Sadhana Profile Strength</span>
                    <span className="text-brand-orange">100% Complete</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-orange to-brand-terracotta rounded-full w-full" />
                  </div>
                  <ul className="text-[11px] text-muted-slate space-y-1.5 pt-1">
                    <li className="flex items-center gap-2 text-emerald-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Verified email &amp; student registry</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Profile image configured</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sattvic dietary preference recorded</span>
                    </li>
                    <li className="flex items-center gap-2 text-emerald-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Emergency retreat contact set</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT COLUMN: Edit Form (8 cols) */}
              <div className="lg:col-span-8">
                <form
                  onSubmit={handleSaveProfile}
                  className="bg-white rounded-2xl border border-border-light shadow-xs p-6 sm:p-8 space-y-8"
                >
                  {/* Section 1: Personal & Spiritual Identity */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border-light text-sm font-bold text-charcoal mb-4">
                      <User className="w-4 h-4 text-brand-orange" />
                      <span>1. Personal &amp; Spiritual Identity</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Full Legal Name
                        </label>
                        <input
                          type="text"
                          required
                          value={profileForm.fullName}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, fullName: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Spiritual / Diksha Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={profileForm.spiritualName}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, spiritualName: e.target.value })
                          }
                          placeholder="e.g. Ananda Chaitanya"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Registered Email (Locked to Registry)
                        </label>
                        <input
                          type="email"
                          disabled
                          value={user.email}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light bg-neutral-100 text-sm text-muted-slate cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Phone Number (WhatsApp Ready)
                        </label>
                        <input
                          type="tel"
                          value={profileForm.phone}
                          onChange={(e) =>
                            setProfileForm({ ...profileForm, phone: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Residential & Dietary Sadhana */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border-light text-sm font-bold text-charcoal mb-4">
                      <Utensils className="w-4 h-4 text-brand-orange" />
                      <span>2. Residential Ashram Sadhana &amp; Diet</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-2">
                          Ashram Dietary Preference
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            {
                              id: "Sattvic Vegetarian",
                              title: "Sattvic Vegetarian",
                              desc: "Ashram Standard: Organic sabzi, lentils, basmati rice & herbal teas",
                            },
                            {
                              id: "Sattvic Vegan",
                              title: "Sattvic Vegan",
                              desc: "100% Plant-based: Dairy-free, pure vegan nutrition",
                            },
                            {
                              id: "Gluten-Free Ayurvedic",
                              title: "Gluten-Free Ayurvedic",
                              desc: "Dosha-balancing: Grain-conscious, light therapeutic herbs",
                            },
                            {
                              id: "Raw Fruits & Salads",
                              title: "Raw Fruits & Salads",
                              desc: "Pranic detox: Fresh local seasonal fruit & cold-pressed salads",
                            },
                          ].map((diet) => {
                            const isSelected = profileForm.dietaryPreference === diet.id;
                            return (
                              <button
                                key={diet.id}
                                type="button"
                                onClick={() =>
                                  setProfileForm({
                                    ...profileForm,
                                    dietaryPreference: diet.id,
                                  })
                                }
                                className={cn(
                                  "p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3",
                                  isSelected
                                    ? "bg-brand-orange-light/50 border-brand-orange shadow-xs"
                                    : "bg-white border-border-light hover:border-brand-orange/40"
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0",
                                    isSelected
                                      ? "border-brand-orange bg-brand-orange text-white"
                                      : "border-muted-slate/40"
                                  )}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-charcoal">{diet.title}</p>
                                  <p className="text-[11px] text-muted-slate mt-0.5 leading-snug">
                                    {diet.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-bold text-charcoal mb-1.5">
                            Current City
                          </label>
                          <input
                            type="text"
                            value={profileForm.city}
                            onChange={(e) =>
                              setProfileForm({ ...profileForm, city: e.target.value })
                            }
                            placeholder="e.g. London or Rishikesh"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-charcoal mb-1.5">
                            Country of Residence
                          </label>
                          <input
                            type="text"
                            value={profileForm.country}
                            onChange={(e) =>
                              setProfileForm({ ...profileForm, country: e.target.value })
                            }
                            placeholder="e.g. United Kingdom or India"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Emergency Contact */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border-light text-sm font-bold text-charcoal mb-4">
                      <HeartHandshake className="w-4 h-4 text-brand-orange" />
                      <span>3. Emergency Contact (Mandatory for Himalayan Retreats)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Contact Name
                        </label>
                        <input
                          type="text"
                          value={profileForm.emergencyName}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              emergencyName: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Relationship
                        </label>
                        <input
                          type="text"
                          value={profileForm.emergencyRelation}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              emergencyRelation: e.target.value,
                            })
                          }
                          placeholder="e.g. Sister, Spouse, Friend"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-charcoal mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={profileForm.emergencyPhone}
                          onChange={(e) =>
                            setProfileForm({
                              ...profileForm,
                              emergencyPhone: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 4: Personal Yogic Sankalpa */}
                  <div>
                    <div className="flex items-center gap-2 pb-3 border-b border-border-light text-sm font-bold text-charcoal mb-4">
                      <Sparkles className="w-4 h-4 text-brand-orange" />
                      <span>4. Personal Yogic Sankalpa (Spiritual Intention)</span>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-charcoal mb-1.5">
                        Your Spiritual Intention &amp; Health Goal for this Course
                      </label>
                      <textarea
                        rows={3}
                        value={profileForm.sankalpa}
                        onChange={(e) =>
                          setProfileForm({ ...profileForm, sankalpa: e.target.value })
                        }
                        placeholder="e.g. To deepen my traditional Himalayan Hatha & Ashtanga practice, master pranayama, and integrate yogic mindfulness into daily life."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setProfileForm({
                          fullName: user?.fullName || "Aarav Sharma",
                          spiritualName: user?.spiritualName || "",
                          avatarUrl: user?.avatarUrl || "/images/teachers/yogi-chetan-kumar.jpg",
                          phone: user?.phone || "+91 98765 43210",
                          dietaryPreference: user?.dietaryPreference || "Sattvic Vegetarian",
                          emergencyName: user?.emergencyContact?.name || "Meera Sharma",
                          emergencyRelation: user?.emergencyContact?.relation || "Sister",
                          emergencyPhone: user?.emergencyContact?.phone || "+91 98765 12345",
                          city: user?.city || "Rishikesh",
                          country: user?.country || "India",
                          sankalpa: user?.sankalpa || "",
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-slate hover:text-charcoal transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset to Saved Profile</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Profile Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ======================================================== */}
      {/* MODAL: ENROLL / PURCHASE COURSE                          */}
      {/* ======================================================== */}
      {selectedCourseForPurchase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border border-border-light shadow-2xl max-w-lg w-full p-6 sm:p-8 relative">
            <button
              type="button"
              onClick={() => setSelectedCourseForPurchase(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-light text-muted-slate hover:text-charcoal cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isPurchaseSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-charcoal">
                  Enrollment Successful!
                </h3>
                <p className="text-xs text-muted-slate mt-2 max-w-sm mx-auto">
                  Your seat for <strong>{selectedCourseForPurchase.title}</strong> has been secured. Your course permit and 2-year validity are now active.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold">
                  Redirecting to My Courses...
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Ashram Course Enrollment
                </span>
                <h3 className="text-2xl font-bold text-charcoal mt-1">
                  {selectedCourseForPurchase.title}
                </h3>
                <p className="text-xs text-muted-slate mt-1">
                  Tuition Fee: <strong className="text-brand-orange text-base">${selectedCourseForPurchase.priceUsd} USD</strong> (Includes accommodation, Sattvic meals &amp; Yoga Alliance certification)
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Select Upcoming Batch
                    </label>
                    <select
                      value={purchaseBatch}
                      onChange={(e) => setPurchaseBatch(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-light bg-neutral-light/50 text-sm font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    >
                      {selectedCourseForPurchase.upcomingBatches.map((b, idx) => (
                        <option key={idx} value={b.date}>
                          {b.date} ({b.seatsLeft} seats left)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5">
                      Room &amp; Accommodation Preference
                    </label>
                    <select
                      value={purchaseRoom}
                      onChange={(e) => setPurchaseRoom(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-border-light bg-neutral-light/50 text-sm font-semibold text-charcoal focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                    >
                      <option value="Shared Twin Mountain View">Shared Twin Room with Mountain View</option>
                      <option value="Private Single Ganga View">Private Single Room with Ganga Balcony (+$250)</option>
                      <option value="Shared Triple Budget Room">Shared Triple Ashram Dorm</option>
                    </select>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-neutral-light border border-border-light text-xs space-y-2">
                    <div className="flex justify-between text-muted-slate">
                      <span>Tuition &amp; Shala Access:</span>
                      <span className="font-bold text-charcoal">${selectedCourseForPurchase.priceUsd}</span>
                    </div>
                    <div className="flex justify-between text-muted-slate">
                      <span>Registration Deposit:</span>
                      <span className="font-bold text-emerald-600">$200 (Included)</span>
                    </div>
                    <div className="flex justify-between text-muted-slate">
                      <span>Validity Period:</span>
                      <span className="font-bold text-charcoal">2 Years Full Access</span>
                    </div>
                    <div className="pt-2 border-t border-border-light flex justify-between font-bold text-charcoal text-sm">
                      <span>Total Amount:</span>
                      <span className="text-brand-orange text-lg">
                        ${selectedCourseForPurchase.priceUsd} USD
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCourseForPurchase(null)}
                    className="flex-1 py-3 px-4 rounded-xl border border-border-light text-charcoal font-bold text-xs hover:bg-neutral-light transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmPurchase}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Complete Enrollment</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODAL: FULL VIEW CERTIFICATE                             */}
      {/* ======================================================== */}
      {viewingCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl border-2 border-brand-orange max-w-2xl w-full p-8 relative shadow-2xl">
            <button
              type="button"
              onClick={() => setViewingCertificate(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-light text-muted-slate hover:text-charcoal cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border border-brand-orange/40 rounded-2xl p-6 sm:p-8 text-center bg-[#FFFDFB]">
              <div className="flex items-center justify-between pb-4 border-b border-border-light mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src={brandAssets.logoHorizontal}
                    alt="Aadi Yoga"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal">Aadi Yoga School</h3>
                  <p className="text-xs text-brand-orange font-semibold">Rishikesh, Himalayas, India</p>
                </div>
                <div className="relative w-24 h-12">
                  <Image
                    src={brandAssets.yogaAlliance}
                    alt="Yoga Alliance"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-terracotta">
                Certificate of Yogic Accomplishment
              </span>

              <h2 className="text-3xl font-bold text-brand-orange mt-4">
                {viewingCertificate.studentName}
              </h2>

              <p className="text-xs text-muted-slate mt-2">has met all requirements for</p>

              <h4 className="text-xl font-bold text-charcoal mt-1">
                {viewingCertificate.courseTitle}
              </h4>

              <p className="text-xs text-muted-slate mt-2">
                Total Practicum: <strong>{viewingCertificate.hours} Hours</strong> • Registered with Yoga Alliance USA
              </p>

              <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between text-xs text-muted-slate">
                <div className="text-left">
                  <p className="font-bold text-charcoal">{viewingCertificate.certificateNumber}</p>
                  <p className="text-[10px]">Issued: {viewingCertificate.issueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-charcoal italic">{viewingCertificate.leadTrainer}</p>
                  <p className="text-[10px]">Lead Master Trainer</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setViewingCertificate(null)}
                className="px-4 py-2 rounded-xl border border-border-light text-xs font-bold text-charcoal hover:bg-neutral-light cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() =>
                  alert(
                    `Downloading high-resolution certificate ${viewingCertificate.certificateNumber}`
                  )
                }
                className="px-5 py-2 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download High-Res PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StudentDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-neutral-light">
          <div className="text-center p-8">
            <div className="w-12 h-12 border-4 border-brand-orange border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-lg font-bold text-charcoal">Loading Sadhana Desk...</p>
          </div>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}
