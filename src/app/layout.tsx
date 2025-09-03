import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vironex Digital - Expert Web, Mobile & AI Development",
  description: "Expert website, mobile app, cross-platform app, and AI-powered SaaS development for startups and enterprises. Build scalable, innovative digital solutions with us.",
  keywords: ["web development", "mobile app development", "AI development", "SaaS development", "custom software", "React", "Next.js", "AI integration"],
  authors: [{ name: "Vironex Digital" }],
  creator: "Vironex Digital",
  publisher: "Vironex Digital",
  metadataBase: new URL("https://www.vironexdigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.vironexdigital.com",
    title: "Vironex Digital - Expert Web, Mobile & AI Development",
    description: "Expert website, mobile app, cross-platform app, and AI-powered SaaS development for startups and enterprises. Build scalable, innovative digital solutions with us.",
    siteName: "Vironex Digital",
    images: [
      {
        url: "https://res.cloudinary.com/dyiegy7sv/image/upload/v1756840667/tab_logo_p4hgcm.png",
        width: 1200,
        height: 630,
        alt: "Vironex Digital - Expert Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vironex Digital - Expert Web, Mobile & AI Development",
    description: "Expert website, mobile app, cross-platform app, and AI-powered SaaS development for startups and enterprises. Build scalable, innovative digital solutions with us.",
    images: ["https://res.cloudinary.com/dyiegy7sv/image/upload/v1756840667/tab_logo_p4hgcm.png"],
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
  icons: {
    icon: [
      { url: "/tabLogo.png", type: "image/png", sizes: "32x32" }, // main favicon
      { url: "/tabLogo.png", type: "image/png", sizes: "192x192" }, // PWA
      { url: "/tabLogo.png", type: "image/png", sizes: "512x512" }, // PWA large
    ],
    apple: [
      { url: "/tabLogo.png", sizes: "180x180", type: "image/png" }, // Apple touch icon
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
