"use client";

import * as m from "motion/react-m";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Compact "MH." wordmark used in the navigation and footer. */
export function MonogramMark({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("inline-flex items-baseline font-semibold tracking-[-0.06em]", className)}>
      {profile.initials}
      <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">.</span>
    </span>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero graphic: a large typographic "MH." on a fine grid.
 * Animates once on load (letters rise, guides draw, accent dot lands) — no continuous motion.
 */
export function MonogramPanel({ className }: { className?: string }) {
  const letters = profile.initials.split("");

  return (
    <figure
      aria-hidden="true"
      className={cn("relative aspect-square w-full overflow-hidden border border-line bg-ink-2", className)}
    >
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "12.5% 12.5%",
          maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 85%)",
        }}
      />

      {/* Guides */}
      <m.span
        className="absolute top-1/2 left-0 h-px w-full origin-left bg-line-strong"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.3, ease }}
      />
      <m.span
        className="absolute top-0 left-1/2 h-full w-px origin-top bg-line-strong"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.4, ease }}
      />

      {/* Wordmark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="flex items-baseline text-[clamp(5rem,11vw,10rem)] leading-none font-semibold tracking-[-0.07em] text-fg">
          {letters.map((letter, i) => (
            <span key={letter} className="inline-block overflow-hidden pb-[0.06em]">
              <m.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 + i * 0.08, ease }}
              >
                {letter}
              </m.span>
            </span>
          ))}
          <m.span
            className="ml-[0.04em] inline-block size-[0.16em] self-end bg-accent"
            style={{ marginBottom: "0.2em" }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.75, ease }}
          />
        </p>
      </div>

      {/* Corner metadata */}
      <m.div
        className="label absolute inset-x-4 top-4 flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <span>Fig. 01</span>
        <span>{profile.title}</span>
      </m.div>
      <m.div
        className="label absolute inset-x-4 bottom-4 flex justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <span>{profile.domain}</span>
        <span>Since {profile.careerStart}</span>
      </m.div>
    </figure>
  );
}
