import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { MonogramMark } from "@/components/ui/Monogram";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col">
      <Container className="flex flex-1 flex-col justify-between gap-16 py-6">
        <Link href="/" className="group w-fit text-xl" aria-label={`${profile.name} — home`}>
          <MonogramMark />
        </Link>

        <div className="grid grid-cols-12 gap-x-5 border-t border-line pt-5 sm:gap-x-8">
          <p className="label col-span-12 mb-10 flex items-center gap-2.5 md:col-span-3 md:mb-0">
            <span className="text-accent">404</span>
            <span aria-hidden="true" className="h-px w-5 bg-line-strong" />
            <span>Not found</span>
          </p>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display text-[clamp(3.5rem,12vw,10rem)]">
              Page not found<span className="text-accent">.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-fg-muted">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              className="group mt-10 inline-flex h-12 items-center gap-3 bg-accent px-5 text-sm font-medium text-ink transition-colors hover:bg-fg"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              Back to homepage
            </Link>
          </div>
        </div>

        <p className="label">{profile.domain}</p>
      </Container>
    </main>
  );
}
