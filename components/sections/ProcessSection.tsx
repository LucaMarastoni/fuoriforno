"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { withBasePath } from "@/lib/site-path";

const steps = [
  {
    number: "01",
    title: "Raccontaci l’evento",
    text: "Data, luogo, numero di persone e tipo di occasione.",
    image: withBasePath("/images/experience/evento.webp"),
  },
  {
    number: "02",
    title: "Arriviamo con il forno",
    text: "Prepariamo la postazione e portiamo tutto ciò che serve.",
    image: withBasePath("/images/experience/forno.webp"),
  },
  {
    number: "03",
    title: "Impastiamo la festa",
    text: "Sforniamo le pizze e coinvolgiamo i tuoi invitati.",
    image: withBasePath("/images/experience/impasto.webp"),
  },
] as const;

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(index);
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.1 },
      );
      observer.observe(item);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <section id="come-funziona" className="scroll-mt-24 bg-dough px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="02">Come funziona</SectionLabel>
        <AnimatedHeading className="mt-6 max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
          Tre passaggi.
          <span className="block font-serif font-normal italic text-tomato">Poi si accende.</span>
        </AnimatedHeading>
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.8fr)] lg:items-start lg:gap-20">
          <div className="relative">
            <div className="absolute bottom-0 left-[1.1rem] top-0 w-px bg-charcoal/15" aria-hidden="true">
              <motion.span
                className="block w-full origin-top bg-tomato"
                animate={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
              />
            </div>
            {steps.map((step, index) => (
              <article
                key={step.number}
                ref={(node) => { itemRefs.current[index] = node; }}
                className="relative grid min-h-[15rem] grid-cols-[2.3rem_1fr] gap-5 pb-12 last:pb-0"
              >
                <span className={`relative z-10 grid size-9 place-items-center rounded-full border text-xs font-bold transition-colors duration-300 ${activeStep === index ? "border-tomato bg-tomato text-white" : "border-charcoal/20 bg-dough text-charcoal/40"}`}>
                  {step.number}
                </span>
                <div className={`transition-opacity duration-300 ${activeStep === index ? "opacity-100" : "opacity-42"}`}>
                  <h3 className="text-[clamp(2rem,4vw,4.5rem)] font-semibold leading-none tracking-[-0.05em]">{step.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-charcoal/60">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sticky top-28 hidden aspect-[4/5] overflow-hidden rounded-[2rem] bg-charcoal lg:block">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="absolute inset-0"
                animate={{ opacity: activeStep === index ? 1 : 0, scale: activeStep === index ? 1 : 1.04 }}
                transition={{ duration: reduceMotion ? 0 : 0.55 }}
              >
                <Image src={step.image} alt="" fill sizes="42vw" className="object-cover" />
              </motion.div>
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-8 pt-24 text-white">
              <p className="font-serif text-6xl italic text-fire">{steps[activeStep].number}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">Il ritmo dell’esperienza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
