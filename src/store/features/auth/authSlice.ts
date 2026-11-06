import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
}

export interface UserProfile {
  id: string;
  fullName: string;
  spiritualName: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  studentId: string;
  yogaAllianceId?: string;
  dietaryPreference: string;
  emergencyContact: EmergencyContact;
  city: string;
  country: string;
  sankalpa: string;
}

export interface CourseModule {
  id: string;
  title: string;
  hours: number;
  completed: boolean;
}

export interface StudyMaterial {
  name: string;
  type: string;
  size: string;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  slug: string;
  code: string;
  instructor: string;
  batchName: string;
  enrolledDate: string;
  validUntil: string;
  status: "active" | "completed" | "expired";
  progressPercent: number;
  certificateEligible: boolean;
  certificateId?: string;
  modules: CourseModule[];
  studyMaterials: StudyMaterial[];
  roomLocation: string;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  courseTitle: string;
  studentName: string;
  issueDate: string;
  hours: number;
  leadTrainer: string;
  accreditation: string;
  status: "verified";
}

export interface AvailableCourse {
  id: string;
  title: string;
  slug: string;
  code: string;
  priceUsd: number;
  duration: string;
  level: string;
  description: string;
  image: string;
  upcomingBatches: { date: string; seatsLeft: number }[];
}

export interface OrderReceipt {
  id: string;
  invoiceNumber: string;
  date: string;
  courseTitle: string;
  amountUsd: number;
  paymentMethod: string;
  status: "Paid";
  transactionId: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: UserProfile | null;
  enrolledCourses: EnrolledCourse[];
  certificates: Certificate[];
  availableCourses: AvailableCourse[];
  orders: OrderReceipt[];
}

const defaultUser: UserProfile = {
  id: "usr_aadi_8841",
  fullName: "Aarav Sharma",
  spiritualName: "Ananda Chaitanya",
  email: "student@example.com",
  phone: "+91 98765 43210",
  avatarUrl: "/images/teachers/yogi-chetan-kumar.jpg",
  studentId: "AY-2024-8841",
  yogaAllianceId: "YA-RYT200-99321",
  dietaryPreference: "Sattvic Vegetarian",
  emergencyContact: {
    name: "Meera Sharma",
    relation: "Sister",
    phone: "+91 98765 12345",
  },
  city: "Rishikesh & Mumbai",
  country: "India",
  sankalpa: "To deepen authentic Himalayan Hatha & Ashtanga sadhana and cultivate mindfulness in everyday life.",
};

const initialEnrolledCourses: EnrolledCourse[] = [
  {
    id: "enr_200_yttc",
    title: "200-Hour Yoga Teacher Training Course (Rishikesh Residential)",
    slug: "200-hour-yoga-teacher-training-course",
    code: "YTTC-200",
    instructor: "Swami Amarna Anand & Yogi Prashant Negi",
    batchName: "November 2024 Intensive Batch",
    enrolledDate: "2024-11-01",
    validUntil: "2026-12-31",
    status: "active",
    progressPercent: 78,
    certificateEligible: true,
    certificateId: "cert_200_0482",
    roomLocation: "Ganga View Yoga Shala (Floor 3)",
    modules: [
      { id: "mod_1", title: "Traditional Hatha & Ashtanga Primary Series Asana", hours: 65, completed: true },
      { id: "mod_2", title: "Pranayama, Shatkarma & Cleansing Kriyas", hours: 35, completed: true },
      { id: "mod_3", title: "Patanjali Yoga Sutras & Yogic Philosophy", hours: 30, completed: true },
      { id: "mod_4", title: "Anatomy & Biomechanics of Yogic Postures", hours: 30, completed: true },
      { id: "mod_5", title: "Teaching Methodology, Alignment & Adjustments", hours: 25, completed: false },
      { id: "mod_6", title: "Yoga Nidra, Mantra Chanting & Meditation", hours: 15, completed: false },
    ],
    studyMaterials: [
      { name: "Aadi Yoga 200H Comprehensive Asana Manual", type: "PDF", size: "14.2 MB" },
      { name: "Patanjali Yoga Sutras Sanskrit & Commentary Guide", type: "PDF", size: "6.8 MB" },
      { name: "Functional Yogic Anatomy & Alignment Handbook", type: "PDF", size: "9.5 MB" },
      { name: "Daily Mantra Chanting & Slokas Audio Recitations", type: "MP3 Audio Pack", size: "48 MB" },
    ],
  },
  {
    id: "enr_retreat_7d",
    title: "7-Day Himalayan Yoga & Ganga Meditation Retreat",
    slug: "one-week-yoga-retreat-india",
    code: "RET-7D",
    instructor: "Deepa Negi & Yogi Chetan Kumar",
    batchName: "October 2024 Autumn Ashram Retreat",
    enrolledDate: "2024-10-10",
    validUntil: "2027-10-10",
    status: "completed",
    progressPercent: 100,
    certificateEligible: true,
    certificateId: "cert_ret_0119",
    roomLocation: "Himalayan Sunrise Shala",
    modules: [
      { id: "rmod_1", title: "Morning Ganga Ghat Asana & Surya Namaskar", hours: 14, completed: true },
      { id: "rmod_2", title: "Pranayama & Himalayan Breathwork", hours: 10, completed: true },
      { id: "rmod_3", title: "Evening Ganga Aarti & Kirtan Sadhana", hours: 8, completed: true },
      { id: "rmod_4", title: "Ayurvedic Lifestyle & Sattvic Diet Principles", hours: 8, completed: true },
    ],
    studyMaterials: [
      { name: "Himalayan Sadhana & Meditation Daily Journal", type: "PDF", size: "4.1 MB" },
      { name: "Ayurvedic Nutrition & Sattvic Recipes of Rishikesh", type: "PDF", size: "8.3 MB" },
    ],
  },
];

const initialCertificates: Certificate[] = [
  {
    id: "cert_200_0482",
    certificateNumber: "AYS-2024-YTTC-0482",
    courseTitle: "200-Hour Hatha & Ashtanga Yoga Teacher Training Course",
    studentName: "Aarav Sharma",
    issueDate: "November 28, 2024",
    hours: 200,
    leadTrainer: "Swami Amarna Anand (E-RYT 500)",
    accreditation: "Yoga Alliance USA Registered Yoga School (RYS 200)",
    status: "verified",
  },
  {
    id: "cert_ret_0119",
    certificateNumber: "AYS-2024-RET-0119",
    courseTitle: "7-Day Himalayan Yoga & Ganga Meditation Immersion",
    studentName: "Aarav Sharma",
    issueDate: "October 16, 2024",
    hours: 40,
    leadTrainer: "Deepa Negi (M.Sc. Yogic Sciences)",
    accreditation: "Aadi Yoga School Rishikesh Certified Immersion",
    status: "verified",
  },
];

const initialAvailableCourses: AvailableCourse[] = [
  {
    id: "avail_300_yttc",
    title: "300-Hour Advanced Yoga Teacher Training Course",
    slug: "residential-300-hour-yoga-teacher-training-course",
    code: "YTTC-300",
    priceUsd: 1400,
    duration: "28 Days Residential",
    level: "Advanced (For RYT-200 Holders)",
    description: "Deepen your teaching mastery with advanced sequencing, therapeutic alignment, Kundalini awakening principles, and intensive Patanjali philosophy.",
    image: "/images/courses/300-hour-yttc.jpg",
    upcomingBatches: [
      { date: "1st Dec - 28th Dec 2026", seatsLeft: 4 },
      { date: "5th Jan - 1st Feb 2027", seatsLeft: 7 },
      { date: "3rd Feb - 2nd Mar 2027", seatsLeft: 9 },
    ],
  },
  {
    id: "avail_100_yttc",
    title: "100-Hour Foundation Yoga Teacher Training Course",
    slug: "100-hour-yoga-teacher-training-course-in-rishikesh-india",
    code: "YTTC-100",
    priceUsd: 800,
    duration: "14 Days Residential",
    level: "Beginner & Intermediate",
    description: "The perfect foundational immersion to establish personal discipline, correct posture alignment, and essential yogic anatomy in Rishikesh.",
    image: "/images/courses/100-hour-yttc.jpg",
    upcomingBatches: [
      { date: "1st Dec - 14th Dec 2026", seatsLeft: 6 },
      { date: "15th Dec - 28th Dec 2026", seatsLeft: 5 },
      { date: "5th Jan - 18th Jan 2027", seatsLeft: 8 },
    ],
  },
  {
    id: "avail_aerial_yttc",
    title: "50-Hour Aerial Yoga Teacher Training Course",
    slug: "aerial-yoga-teacher-training-course-in-rishikesh-india",
    code: "YTTC-AERIAL-50",
    priceUsd: 550,
    duration: "7 Days Residential",
    level: "All Levels & Teachers",
    description: "Master anti-gravity hammock suspensions, spinal decompressions, inverted balance sequencing, and safe aerial rigging mechanics.",
    image: "/images/courses/aerial-yoga-ttc.jpg",
    upcomingBatches: [
      { date: "10th Dec - 16th Dec 2026", seatsLeft: 3 },
      { date: "12th Jan - 18th Jan 2027", seatsLeft: 6 },
    ],
  },
  {
    id: "avail_retreat_2w",
    title: "14-Day Holistic Himalayan Detox & Wellness Retreat",
    slug: "one-week-yoga-retreat-india",
    code: "RET-14D",
    priceUsd: 850,
    duration: "14 Days Residential",
    level: "All Levels",
    description: "A restorative rejuvenation journey combining daily Panchakarma therapies, Ganga beach yoga, Ayurvedic meals, and silent meditation walks.",
    image: "/images/courses/yoga-retreat.jpg",
    upcomingBatches: [
      { date: "1st Dec - 14th Dec 2026", seatsLeft: 5 },
      { date: "5th Jan - 18th Jan 2027", seatsLeft: 7 },
    ],
  },
];

const initialOrders: OrderReceipt[] = [
  {
    id: "ord_001",
    invoiceNumber: "INV-2024-0891",
    date: "2024-11-01",
    courseTitle: "200-Hour Yoga Teacher Training Course (Rishikesh Residential)",
    amountUsd: 1150,
    paymentMethod: "Online Bank Wire / Stripe",
    status: "Paid",
    transactionId: "TXN-AADI-8841-01",
  },
  {
    id: "ord_002",
    invoiceNumber: "INV-2024-0742",
    date: "2024-10-08",
    courseTitle: "7-Day Himalayan Yoga & Ganga Meditation Retreat",
    amountUsd: 450,
    paymentMethod: "Credit Card (Visa)",
    status: "Paid",
    transactionId: "TXN-AADI-8841-02",
  },
];

// Helper to check localStorage in browser safely
const loadSavedAuth = (): { isAuthenticated: boolean; user: UserProfile | null } => {
  if (typeof window === "undefined") {
    return { isAuthenticated: false, user: null };
  }
  try {
    const raw = localStorage.getItem("aadi_yoga_auth");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.isAuthenticated && parsed.user) {
        return parsed;
      }
    }
  } catch {
    // Ignore storage errors
  }
  return { isAuthenticated: false, user: null };
};

const savedSession = loadSavedAuth();

const initialState: AuthState = {
  isAuthenticated: savedSession.isAuthenticated,
  user: savedSession.user,
  enrolledCourses: initialEnrolledCourses,
  certificates: initialCertificates,
  availableCourses: initialAvailableCourses,
  orders: initialOrders,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; name?: string; password?: string }>
    ) => {
      state.isAuthenticated = true;
      const email = action.payload.email.trim();
      const derivedName = action.payload.name?.trim() || (email.split("@")[0].replace(/[._]/g, " ") || "Aarav Sharma");
      
      const formattedName = derivedName
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");

      state.user = {
        ...defaultUser,
        email: email || defaultUser.email,
        fullName: formattedName.length > 2 ? formattedName : defaultUser.fullName,
      };

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(
            "aadi_yoga_auth",
            JSON.stringify({
              isAuthenticated: true,
              user: state.user,
            })
          );
        } catch {
          // Ignore storage quota errors
        }
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      if (typeof window !== "undefined") {
        try {
          localStorage.removeItem("aadi_yoga_auth");
        } catch {
          // Ignore
        }
      }
    },

    updateProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (state.user) {
        state.user = {
          ...state.user,
          ...action.payload,
        };
        if (typeof window !== "undefined") {
          try {
            localStorage.setItem(
              "aadi_yoga_auth",
              JSON.stringify({
                isAuthenticated: true,
                user: state.user,
              })
            );
          } catch {
            // Ignore
          }
        }
      }
    },

    purchaseCourse: (
      state,
      action: PayloadAction<{
        courseId: string;
        batchDate: string;
        roomType: string;
      }>
    ) => {
      const course = state.availableCourses.find((c) => c.id === action.payload.courseId);
      if (!course) return;

      const newEnrolledId = `enr_${Date.now()}`;
      const newInvoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const newTxnId = `TXN-AADI-${Math.floor(100000 + Math.random() * 900000)}`;

      // Calculate 2-year validity from today
      const today = new Date();
      const validUntilDate = new Date(today);
      validUntilDate.setFullYear(today.getFullYear() + 2);
      const validUntil = validUntilDate.toISOString().split("T")[0];

      const newEnrolledCourse: EnrolledCourse = {
        id: newEnrolledId,
        title: course.title,
        slug: course.slug,
        code: course.code,
        instructor: "Swami Amarna Anand & Ashram Senior Faculty",
        batchName: `${action.payload.batchDate} (${action.payload.roomType})`,
        enrolledDate: today.toISOString().split("T")[0],
        validUntil: validUntil,
        status: "active",
        progressPercent: 0,
        certificateEligible: false,
        roomLocation: "Maa Ganga Shala & Ashram Hall 1",
        modules: [
          { id: `mod_${newEnrolledId}_1`, title: "Orientation, Ashram Rules & Philosophy", hours: 10, completed: false },
          { id: `mod_${newEnrolledId}_2`, title: "Asana Alignment, Adjustments & Practice", hours: 40, completed: false },
          { id: `mod_${newEnrolledId}_3`, title: "Pranayama, Meditation & Chanting", hours: 25, completed: false },
          { id: `mod_${newEnrolledId}_4`, title: "Yogic Anatomy & Teaching Practice", hours: 25, completed: false },
        ],
        studyMaterials: [
          { name: `${course.title} Comprehensive Ashram Handbook`, type: "PDF", size: "12.8 MB" },
          { name: "Sanskrit Mantras & Slokas Audio Recitations", type: "MP3 Audio", size: "32 MB" },
        ],
      };

      state.enrolledCourses.unshift(newEnrolledCourse);

      // Add receipt
      state.orders.unshift({
        id: `ord_${Date.now()}`,
        invoiceNumber: newInvoiceNumber,
        date: today.toISOString().split("T")[0],
        courseTitle: course.title,
        amountUsd: course.priceUsd,
        paymentMethod: "Credit Card / Online Banking (Demo)",
        status: "Paid",
        transactionId: newTxnId,
      });
    },

    toggleModuleCompletion: (
      state,
      action: PayloadAction<{ courseId: string; moduleId: string }>
    ) => {
      const course = state.enrolledCourses.find((c) => c.id === action.payload.courseId);
      if (course) {
        const mod = course.modules.find((m) => m.id === action.payload.moduleId);
        if (mod) {
          mod.completed = !mod.completed;
          const completedCount = course.modules.filter((m) => m.completed).length;
          course.progressPercent = Math.round((completedCount / course.modules.length) * 100);

          if (course.progressPercent === 100 && !course.certificateEligible) {
            course.certificateEligible = true;
            course.status = "completed";

            // Automatically issue certificate
            const certId = `cert_${Date.now()}`;
            course.certificateId = certId;
            state.certificates.unshift({
              id: certId,
              certificateNumber: `AYS-${new Date().getFullYear()}-${course.code}-${Math.floor(100 + Math.random() * 900)}`,
              courseTitle: course.title,
              studentName: state.user?.fullName || "Aarav Sharma",
              issueDate: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
              hours: course.modules.reduce((sum, m) => sum + m.hours, 0),
              leadTrainer: "Swami Amarna Anand (E-RYT 500)",
              accreditation: "Yoga Alliance USA Registered Yoga School (RYS)",
              status: "verified",
            });
          }
        }
      }
    },
  },
});

export const {
  login,
  logout,
  updateProfile,
  purchaseCourse,
  toggleModuleCompletion,
} = authSlice.actions;

export default authSlice.reducer;
