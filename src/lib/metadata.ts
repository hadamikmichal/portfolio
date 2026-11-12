import type { Metadata } from "next";
import { profile, socialLinks } from "@/data/profile";

export const seo = {
  title: "Michał Hadamik | Software Engineer",
  description:
    "Software Engineer working across Angular, TypeScript, Node.js, WordPress and fullstack web development. Explore selected projects and professional experience.",
  keywords: [
    "Michał Hadamik",
    "Software Engineer",
    "Frontend Engineer",
    "Fullstack Engineer",
    "Angular",
    "TypeScript",
    "RxJS",
    "Node.js",
    "NestJS",
    "WordPress",
    "WooCommerce",
    "Poland",
  ],
};

export const baseMetadata: Metadata = {
  // Canonical production domain — also used when served from the *.vercel.app URL
  metadataBase: new URL(profile.url),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name, url: profile.url }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: profile.url,
    siteName: profile.name,
    title: seo.title,
    description: seo.description,
    firstName: "Michał",
    lastName: "Hadamik",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
};

/** Only real, non-empty profile URLs end up in structured data. */
const sameAs = Object.values(socialLinks).filter((url) => url.trim() !== "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
      name: profile.name,
      jobTitle: profile.title,
      url: profile.url,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressCountry: "PL" },
      knowsAbout: ["Angular", "TypeScript", "RxJS", "Node.js", "NestJS", "PHP", "WordPress", "WooCommerce"],
      ...(sameAs.length > 0 && { sameAs }),
    },
    {
      "@type": "WebSite",
      "@id": `${profile.url}/#website`,
      url: profile.url,
      name: profile.name,
      description: seo.description,
      inLanguage: "en",
      publisher: { "@id": `${profile.url}/#person` },
    },
  ],
};
