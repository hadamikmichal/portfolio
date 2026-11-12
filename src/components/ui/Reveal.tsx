"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel in px */
  y?: number;
  as?: "div" | "li" | "p" | "span";
  /** Animate on mount (hero) instead of when scrolled into view */
  onMount?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Fade-and-lift wrapper. Children stay Server Components —
 * only this thin wrapper ships to the client.
 */
export function Reveal({ children, className, delay = 0, y = 18, as = "div", onMount = false }: RevealProps) {
  const Component = m[as];
  const trigger = onMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -8% 0px" } };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </Component>
  );
}
