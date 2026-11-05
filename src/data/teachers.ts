import { Teacher } from "@/types/common";
import { teacherAssets } from "./image-assets";

/**
 * Verified Faculty of Aadi Yoga School Rishikesh
 * Sourced directly from https://aadiyogaschool.com/our-teacher
 */
export const teachersData: Teacher[] = [
  {
    id: "swami-amarna-anand",
    name: "Swami Amarna Anand",
    role: "Senior Meditation Teacher",
    specialization: ["Osho Meditation", "Mindfulness", "Vipassana", "Chakra Awakening"],
    bio: "Swami Amarna Anand completed intensive meditation training at the Osho International Meditation Resort in Pune. With decades of sadhana, he brings profound experiential guidance in dynamic, silent, and traditional meditation practices to students from across the globe.",
    image: teacherAssets.swamiAmarnaAnand,
    imageAlt: "Swami Amarna Anand - Senior Meditation Teacher at Aadi Yoga School",
    experienceYears: 18,
  },
  {
    id: "deepa-negi",
    name: "Deepa Negi",
    role: "Senior Yoga Philosophy Teacher",
    specialization: ["Yoga Philosophy", "Yoga Nidra", "Mantra Chanting", "Laughter Yoga"],
    bio: "Deepa Ji focuses largely on Indian Philosophy, Yoga Nidra, sacred Mantra Chanting, and emotional release through Laughter Yoga. She has been lovingly teaching 200-hour and 300-hour Yoga Teacher Training Courses at renowned Rishikesh institutions, making ancient Vedic texts deeply accessible.",
    image: teacherAssets.deepaNegi,
    imageAlt: "Deepa Negi - Senior Yoga Philosophy Teacher at Aadi Yoga School",
    experienceYears: 12,
  },
  {
    id: "yogi-prashant-negi",
    name: "Yogi Prashant Negi",
    role: "Hatha & Aerial Yoga Teacher",
    specialization: ["Traditional Hatha", "Ashtanga Vinyasa", "Aerial Yoga", "Pranayama"],
    bio: "Born and raised in the holy city of Rishikesh on the banks of Ganga, Prashant embodies the authentic spirit of yogic tradition. A dedicated master in Hatha, Ashtanga Vinyasa, and Aerial Yoga, he inspires practitioners to build lasting strength and inner alignment.",
    image: teacherAssets.prashantNegi,
    imageAlt: "Yogi Prashant Negi - Hatha and Aerial Yoga Master",
    experienceYears: 8,
  },
  {
    id: "yogi-chetan-kumar",
    name: "Yogi Chetan Kumar",
    role: "Hatha & Asana Master",
    specialization: ["Classical Hatha", "Ashtanga Primary Series", "Ayurvedic Lifestyle"],
    bio: "Yogi Chetan hails from Rishikesh and has dedicated his life to yoga. He earned his Master's Degree (M.A.) in Yogic Science and Ayurveda from the Himalaya Ayurveda Medical College & Hospital, bringing scholarly precision and authentic tradition to every class.",
    image: teacherAssets.chetanKumar,
    imageAlt: "Yogi Chetan Kumar - Hatha Yoga & Yogic Science Expert",
    experienceYears: 10,
  },
  {
    id: "amit-lingwal",
    name: "Amit Lingwal",
    role: "Adjustment & Alignment Teacher",
    specialization: ["Hands-on Adjustments", "Posture Alignment", "Asana Biomechanics"],
    bio: "Amit began his yogic path in 2014 and has established a reputation across Rishikesh for his exceptional eye for structural balance, biomechanical safety, and intelligent adjustments that help students deepen their postures safely.",
    image: teacherAssets.amitLingwal,
    imageAlt: "Amit Lingwal - Adjustment and Alignment Specialist",
    experienceYears: 11,
  },
  {
    id: "anant-jethuri",
    name: "Mr. Anant Jethuri",
    role: "Anatomy & Physiology Teacher",
    specialization: ["Applied Anatomy", "Kinesiology", "Injury Prevention", "Respiratory Science"],
    bio: "Born on the banks of the holy river Ganga in Rishikesh, Anant translates complex medical anatomy and musculoskeletal mechanics into practical, indispensable knowledge for future yoga teachers.",
    image: teacherAssets.anantJethuri,
    imageAlt: "Mr. Anant Jethuri - Yoga Anatomy and Physiology Instructor",
    experienceYears: 9,
  },
];
