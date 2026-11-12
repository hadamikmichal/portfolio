"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { type RefObject, useEffect, useRef } from "react";
import { navigation, profile } from "@/data/profile";
import { AvailabilityStatus } from "@/components/ui/AvailabilityStatus";
import { Container } from "@/components/ui/Container";
import { cn, pad } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: (restoreFocus: boolean) => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
  active: string | null;
}

/**
 * Full-screen mobile navigation.
 * Locks page scroll, moves focus inside, traps Tab, closes on Escape
 * and when the viewport grows to the desktop breakpoint.
 */
export function MobileMenu({ open, onClose, toggleRef, active }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose(true);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusables = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a")].filter(
        (el): el is HTMLElement => el !== null,
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && onClose(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, onClose, toggleRef]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          ref={menuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav aria-label="Mobile">
            <Container>
              <ul className="border-t border-line">
                {navigation.map((item, i) => (
                  <m.li
                    key={item.href}
                    className="border-b border-line"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={item.href}
                      onClick={() => onClose(false)}
                      aria-current={active === item.href ? "location" : undefined}
                      className="flex items-baseline justify-between py-5"
                    >
                      <span
                        className={cn(
                          "heading text-[2.5rem]",
                          active === item.href ? "text-accent" : "text-fg",
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="label">{pad(i + 1)}</span>
                    </a>
                  </m.li>
                ))}
              </ul>
            </Container>
          </nav>

          <Container className="flex flex-col gap-5 pt-10 pb-8">
            <AvailabilityStatus />
            <a
              href={`mailto:${profile.email}`}
              className="flex h-14 items-center justify-between bg-accent px-5 font-medium text-ink"
            >
              Email me
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </a>
            <p className="font-mono text-xs text-fg-muted">{profile.email}</p>
          </Container>
        </m.div>
      )}
    </AnimatePresence>
  );
}
