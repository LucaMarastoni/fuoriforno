"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { MobileHorizontalCarousel } from "@/components/ui/MobileHorizontalCarousel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { events } from "@/data/events";

export function EventsSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="eventi" className="scroll-mt-24 bg-charcoal px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel index="04" light>Ogni occasione ha il suo fuoco</SectionLabel>
        <AnimatedHeading className="mt-6 max-w-6xl text-[clamp(3.4rem,7.5vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
          Dove c’è una festa,
          <span className="block font-serif font-normal italic text-fire">possiamo esserci.</span>
        </AnimatedHeading>

        <div className="mt-12 md:hidden">
          <MobileHorizontalCarousel
            items={events}
            itemClassName="w-[86vw] max-w-[86vw]"
            ariaLabel="Tipologie di evento Fuori Forno"
            hint="Scorri"
            renderItem={(event, index, isActive) => (
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-white/5">
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: reduceMotion || !isActive ? 1 : 1.04 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={event.image}
                    alt={`Atmosfera per ${event.name}`}
                    fill
                    sizes="86vw"
                    draggable={false}
                    className="object-cover"
                  />
                </motion.div>
                <div className={`absolute inset-0 bg-gradient-to-t from-black/88 via-black/15 to-transparent transition-opacity duration-300 ${isActive ? "opacity-90" : "opacity-100"}`} />
                <motion.div
                  className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5"
                  animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: isActive ? 1 : 0.55, y: isActive ? 0 : 8 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
                >
                  <h3 className="max-w-[80%] text-3xl font-semibold leading-none tracking-[-0.045em]">{event.name}</h3>
                  <span className="font-serif text-3xl italic text-fire">0{index + 1}</span>
                </motion.div>
              </div>
            )}
          />
        </div>

        <div className="mt-16 hidden gap-10 md:grid lg:grid-cols-[1fr_.82fr] lg:items-start lg:gap-20">
          <div>
            {events.map((event, index) => (
              <button
                key={event.name}
                type="button"
                className={`group flex w-full items-center justify-between border-b border-white/14 py-4 text-left text-[clamp(2.2rem,5.3vw,5.8rem)] font-semibold leading-none tracking-[-0.055em] transition-colors ${active === index ? "text-dough" : "text-white/28 hover:text-white/70"}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
              >
                {event.name}
                <span className={`text-xl transition-transform ${active === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <div className="sticky top-28 hidden aspect-[4/5] overflow-hidden rounded-[2rem] bg-white/5 lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={events[active].image}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
              >
                <Image src={events[active].image} alt={`Atmosfera per ${events[active].name}`} fill sizes="42vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-7 pt-24">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">Un format, ogni volta diverso</p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:hidden">
            {events.map((event) => (
              <article key={event.name} className="overflow-hidden rounded-2xl bg-white/5">
                <div className="relative aspect-[4/3]">
                  <Image src={event.image} alt={`Atmosfera per ${event.name}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
                <h3 className="p-4 text-xl font-semibold">{event.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
