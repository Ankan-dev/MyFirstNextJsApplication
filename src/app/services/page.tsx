import type { Metadata } from "next";
import ServicesPage from './ServicesClient';

export const metadata: Metadata = {
  title: "Our Services - Web, Mobile & AI Development | Vironex Digital",
  description: "Comprehensive development services including custom web apps, mobile applications, AI integration, SaaS platforms, e-commerce solutions, and technical consulting.",
  keywords: ["web development services", "mobile app development", "AI development", "SaaS development", "e-commerce development", "technical consulting"],
  openGraph: {
    title: "Our Services - Web, Mobile & AI Development | Vironex Digital",
    description: "Comprehensive development services including custom web apps, mobile applications, AI integration, SaaS platforms, e-commerce solutions, and technical consulting.",
    url: "https://www.vironexdigital.com/services",
  },
  twitter: {
    title: "Our Services - Web, Mobile & AI Development | Vironex Digital",
    description: "Comprehensive development services including custom web apps, mobile applications, AI integration, SaaS platforms, e-commerce solutions, and technical consulting.",
  },
};

export default function Services() {
  return <ServicesPage />;
}