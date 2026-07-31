"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

const games = ["Gioco o attività 01", "Gioco o attività 02", "Gioco o attività 03"] as const;

export function GamesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-dough px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="absolute -right-48 top-12 size-[34rem] rounded-full border border-tomato/20" aria-hidden="true" />
      <div className="absolute -left-28 bottom-20 size-72 rounded-full bg-fire/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionLabel index="05">Intrattenimento</SectionLabel>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <AnimatedHeading className="max-w-6xl text-[clamp(3.5rem,7.6vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Mentre la pizza cuoce,
            <span className="block font-serif font-normal italic text-tomato">la festa continua.</span>
          </AnimatedHeading>
          <p className="max-w-lg text-base leading-7 text-charcoal/60">
            Piccoli giochi e momenti di partecipazione rendono l’attesa parte dell’esperienza.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-24">
          {games.map((game, index) => (
            <motion.article
              key={game}
              className={`relative flex min-h-80 flex-col justify-between overflow-hidden rounded-full border border-charcoal/18 px-8 py-12 text-center ${index === 1 ? "md:translate-y-10" : ""}`}
              whileHover={reduceMotion ? undefined : { y: -8, rotate: index === 0 ? -1 : index === 2 ? 1 : 0 }}
              transition={{ duration: 0.35 }}
            >
              <span className="font-serif text-6xl italic text-tomato/80">0{index + 1}</span>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em]">{game}</h3>
                <p className="mx-auto mt-3 max-w-48 text-xs uppercase leading-5 tracking-[0.14em] text-charcoal/45">Contenuto da sostituire</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
