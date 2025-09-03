import type { Metadata } from "next";
import ContactPage from './ContactClient';

export const metadata: Metadata = {
  title: "Contact Us - Start Your Project | Vironex Digital",
  description: "Ready to transform your ideas into reality? Contact Vironex Digital for custom web development, mobile apps, AI integration, and SaaS solutions. Free consultation available.",
  keywords: ["contact vironex digital", "web development consultation", "project inquiry", "custom software development", "AI development consultation"],
  openGraph: {
    title: "Contact Us - Start Your Project | Vironex Digital",
    description: "Ready to transform your ideas into reality? Contact Vironex Digital for custom web development, mobile apps, AI integration, and SaaS solutions. Free consultation available.",
    url: "https://www.vironexdigital.com/contact",
  },
  twitter: {
    title: "Contact Us - Start Your Project | Vironex Digital",
    description: "Ready to transform your ideas into reality? Contact Vironex Digital for custom web development, mobile apps, AI integration, and SaaS solutions. Free consultation available.",
  },
};

export default function Contact() {
  return <ContactPage />;
}