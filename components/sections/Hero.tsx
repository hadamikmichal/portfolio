"use client";

import { m } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import { site } from "@/data/site";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { Container } from "@/components/ui/Container";

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const words = site.headline.split(" ");
  const lastIndex = words.length - 1;

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col pt-16">
      <Container className="flex flex-1 flex-col justify-between gap-16 pt-12 pb-10 sm:pt-20 lg:pt-24">
        {/* Meta row */}
        <m.dl
          {...fadeUp(0.1)}
          className="grid grid-cols-2 gap-x-5 gap-y-6 border-t border-line pt-5 sm:gap-x-8 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <dt className="label">Name</dt>
            <dd className="mt-1.5 text-sm">{site.name}</dd>
          </div>
          <div className="md:col-span-3">
            <dt className="label">Role</dt>
            <dd className="mt-1.5 text-sm">{site.role}</dd>
          </div>
          <div className="md:col-span-3">
            <dt className="label">Based in</dt>
            <dd className="mt-1.5 text-sm">{site.location}</dd>
          </div>
          <div className="md:col-span-3">
            <dt className="label">Status</dt>
            <dd className="mt-1.5">
              <AvailabilityBadge />
            </dd>
          </div>
        </m.dl>

        {/* Headline */}
        <h1 id="hero-title" className="display text-[clamp(3rem,10.2vw,10rem)] text-fg">
          <span className="sr-only">
            {site.name}, {site.role}.{" "}
          </span>
          {words.map((word, i) => (
            <Fragment key={i}>
              <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                <m.span
                  className={`inline-block ${i === lastIndex ? "text-accent" : ""}`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.07, ease }}
                >
                  {word}
                </m.span>
              </span>
              {/* Space must sit between the inline-blocks, or it collapses */}
              {i < lastIndex && " "}
            </Fragment>
          ))}
        </h1>

        {/* Intro + CTAs */}
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 sm:gap-x-8">
          <m.p
            {...fadeUp(0.6)}
            className="col-span-12 max-w-xl text-lg leading-relaxed text-fg-muted md:col-span-6 md:col-start-4 lg:text-xl"
          >
            {site.intro}
          </m.p>

          <m.div
            {...fadeUp(0.75)}
            className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-3 md:flex-col md:items-end md:justify-end"
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-3 bg-fg px-5 text-sm font-medium text-ink transition-colors hover:bg-accent"
            >
              View selected work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="group inline-flex h-12 items-center gap-3 border border-line-strong px-5 text-sm font-medium text-fg transition-colors hover:border-fg"
            >
              Contact me
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
