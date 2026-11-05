import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { MobileNavigation } from "@/components/layout/navigation/MobileNavigation";
import { EnquiryModal } from "@/features/enquiries/components/EnquiryModal";
import { siteConfig } from "@/config/site";
import { generateYogaSchoolJsonLd } from "@/config/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Best Yoga Teacher Training in Rishikesh, India | Aadi Yoga School",
    template: "%s | Aadi Yoga School Rishikesh",
  },
  description: siteConfig.description,
  keywords: [
    "Yoga Teacher Training Rishikesh",
    "200 Hour Yoga Teacher Training Rishikesh",
    "300 Hour Yoga Teacher Training Rishikesh",
    "100 Hour Yoga Teacher Training Rishikesh",
    "Yoga School in Rishikesh India",
    "Yoga Alliance USA Certified",
    "Yoga Retreat Rishikesh",
    "Hatha Yoga India",
    "Ashtanga Vinyasa Rishikesh",
    "Aerial Yoga Rishikesh",
  ],
  authors: [{ name: "Aadi Yoga School" }],
  creator: "Aadi Yoga School",
  publisher: "Aadi Yoga School",
  icons: {
    icon: "/images/brand/favicon-192.png",
    apple: "/images/brand/favicon-192.png",
  },
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Best Yoga Teacher Training in Rishikesh, India | Aadi Yoga School",
    description: siteConfig.description,
    siteName: siteConfig.fullName,
    images: [
      {
        url: "/images/hero/himalayas-ganga-hero.jpg",
        width: 1200,
        height: 800,
        alt: "Aadi Yoga School Rishikesh India - Yoga Teacher Training on the banks of River Ganga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Yoga Teacher Training in Rishikesh, India | Aadi Yoga School",
    description: siteConfig.description,
    images: ["/images/hero/himalayas-ganga-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateYogaSchoolJsonLd();

  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-light text-charcoal font-sans antialiased selection:bg-brand-orange selection:text-white">
        <Providers>
          <Header />
          <MobileNavigation />
          <EnquiryModal />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
