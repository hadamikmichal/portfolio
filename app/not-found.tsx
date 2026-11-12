import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-dvh flex-col">
      <Container className="flex flex-1 flex-col justify-between gap-16 py-8">
        <Link href="/" className="flex w-fit items-center gap-3" aria-label={`${site.name} — home`}>
          <span aria-hidden="true" className="grid size-8 place-items-center bg-fg font-mono text-[0.7rem] font-semibold text-ink">
            MH
          </span>
          <span className="text-sm font-medium">{site.name}</span>
        </Link>

        <div className="grid grid-cols-12 gap-x-5 border-t border-line pt-6 sm:gap-x-8">
          <p className="label col-span-12 mb-8 md:col-span-3 md:mb-0">
            <span className="text-accent">Error</span> / 404
          </p>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display text-[clamp(4rem,16vw,14rem)]">
              Lost<span className="text-accent">.</span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-fg-muted">
              The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              className="group mt-10 inline-flex h-12 items-center gap-3 bg-fg px-5 text-sm font-medium text-ink transition-colors hover:bg-accent"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
              Back to homepage
            </Link>
          </div>
        </div>

        <p className="label">{site.email}</p>
      </Container>
    </main>
  );
}
