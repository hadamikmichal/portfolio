import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { baseMetadata, jsonLd } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#0b0d0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>

        {/* Subtle background detail: Swiss column guides (desktop only) */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden lg:block">
          <div className="mx-auto grid h-full max-w-[1440px] grid-cols-4 px-12">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="border-l border-line/35 last:border-r" />
            ))}
          </div>
        </div>

        <MotionProvider>{children}</MotionProvider>

        {/* Reveal animations render at opacity 0 until hydration — show all content without JS */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
