"use client";

import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/profile";
import { AvailabilityStatus } from "@/components/ui/AvailabilityStatus";
import { Container } from "@/components/ui/Container";
import { MonogramMark } from "@/components/ui/Monogram";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // Above the first section nothing is "current" (covers instant jumps back to the top)
      const first = document.getElementById(navigation[0].href.slice(1));
      if (first && first.getBoundingClientRect().top > window.innerHeight / 2) setActive(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the navigation item whose section crosses the middle of the viewport
  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
          else if (entry.target === sections[0] && entry.boundingClientRect.top > 0) setActive(null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        // No backdrop-filter while the menu is open: it would become the containing block of the fixed menu
        open
          ? "border-line bg-ink"
          : scrolled
            ? "border-line bg-ink/80 backdrop-blur-md"
            : "border-transparent",
      )}
    >
      <Container className="grid h-16 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="group relative z-10 w-fit text-xl"
          aria-label={`${profile.name} — back to top`}
          onClick={() => open && close(false)}
        >
          <span className="flex items-baseline gap-3">
            <MonogramMark />
            <span aria-hidden="true" className="text-sm font-medium text-fg">
              {profile.name}
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative flex h-10 items-center px-4 text-sm transition-colors hover:text-fg",
                      isActive ? "text-fg" : "text-fg-muted",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-4 bottom-1.5 h-px origin-left bg-accent transition-transform duration-300 ease-out-quint",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-5">
          <AvailabilityStatus className="hidden lg:inline-flex" />
          <a
            href="#contact"
            className="hidden h-10 items-center border border-line-strong px-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Contact
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative z-10 -mr-2.5 grid size-11 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? close(false) : setOpen(true))}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={close} toggleRef={toggleRef} active={active} />
    </header>
  );
}
