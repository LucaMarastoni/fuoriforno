"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { contactConfig } from "@/lib/contact-config";

const navItems = [
  { label: "Esperienza", href: "#esperienza" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "3 attività", href: "#attivita" },
  { label: "Eventi", href: "#eventi" },
  { label: "Contatti", href: "#contatti" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("esperienza");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${scrolled ? "mx-3 mt-3 rounded-full border border-white/10 bg-charcoal/80 px-4 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-md sm:mx-5 lg:mx-8" : "px-5 py-5 sm:px-8 lg:px-12"}`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${active === item.href.slice(1) ? "text-white" : "text-white/60 hover:text-white"}`}
              >
                {item.label}
                {active === item.href.slice(1) ? (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-fire" aria-hidden="true" />
                ) : null}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {contactConfig.instagram ? (
              <a
                href={contactConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden size-10 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire sm:grid"
                aria-label="Apri il profilo Instagram di Fuori Forno"
              >
                <svg viewBox="0 0 24 24" className="size-[1.05rem]" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
                  <circle cx="12" cy="12" r="4.1" />
                  <circle cx="17.65" cy="6.45" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            ) : null}
            <a
              href="#contatti"
              className="rounded-full bg-dough px-4 py-2.5 text-xs font-extrabold text-charcoal transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire sm:px-5"
            >
              Contattaci
            </a>
            <button
              type="button"
              className="grid size-10 place-items-center rounded-full border border-white/25 text-white lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            >
              <span className="sr-only">Menu</span>
              <span className="relative h-3.5 w-4">
                <span className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex bg-charcoal px-6 pb-10 pt-28 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex w-full flex-col justify-center" aria-label="Navigazione mobile">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/12 py-3 font-serif text-[clamp(2.6rem,12vw,5rem)] italic leading-none text-dough"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : index * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <p className="mt-10 max-w-xs text-sm leading-6 text-white/50">
                Pizza napoletana, forno acceso e una festa che succede tutta intorno.
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
