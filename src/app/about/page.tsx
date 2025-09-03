import type { Metadata } from "next";
import About from './AboutClient';

export const metadata: Metadata = {
  title: "About Us - Vironex Digital | AI-Powered Development Company",
  description: "Learn about Vironex Digital's mission to democratize AI-powered development. We transform businesses with custom web applications, SaaS platforms, and intelligent solutions.",
  keywords: ["about vironex digital", "AI development company", "custom software development", "SaaS development", "company story"],
  openGraph: {
    title: "About Us - Vironex Digital | AI-Powered Development Company",
    description: "Learn about Vironex Digital's mission to democratize AI-powered development. We transform businesses with custom web applications, SaaS platforms, and intelligent solutions.",
    url: "https://www.vironexdigital.com/about",
  },
  twitter: {
    title: "About Us - Vironex Digital | AI-Powered Development Company",
    description: "Learn about Vironex Digital's mission to democratize AI-powered development. We transform businesses with custom web applications, SaaS platforms, and intelligent solutions.",
  },
};

export default function AboutPage() {
  return <About />;
}