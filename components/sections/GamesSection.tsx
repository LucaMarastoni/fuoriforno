"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

const activities = [
  {
    title: "Pizza Story",
    eyebrow: "Racconto",
    description: "Un viaggio coinvolgente nella vera Pizza Napoletana, tra storia, gesti e segreti del mestiere.",
    highlights: [
      "Storia della Pizza Napoletana",
      "Ingredienti e qualità",
      "Impasto e lievitazione",
      "Curiosità del mestiere",
    ],
  },
  {
    title: "Be a Pizzaiolo",
    eyebrow: "Partecipazione",
    description: "Uno o due ospiti diventano pizzaioli per qualche minuto, guidati dal nostro staff fino all’assaggio.",
    highlights: [
      "Stesura dell’impasto",
      "Farcitura e infornata",
      "Cottura",
      "Degustazione finale",
    ],
  },
  {
    title: "Pizza Challenge",
    eyebrow: "Sfida finale",
    description: "Giochi e degustazioni coinvolgono tutto il pubblico e chiudono l’esperienza con una sfida da ricordare.",
    highlights: [
      "Riconoscimento degli ingredienti",
      "Quiz sulla Pizza Napoletana",
      "Degustazione guidata",
      "Sfide e premi",
    ],
  },
] as const;

export function GamesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="attivita" className="relative scroll-mt-24 overflow-hidden bg-dough px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="absolute -right-48 top-12 size-[34rem] rounded-full border border-tomato/20" aria-hidden="true" />
      <div className="absolute -left-28 bottom-20 size-72 rounded-full bg-fire/10" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionLabel index="05">Le tre attività</SectionLabel>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <AnimatedHeading className="max-w-6xl text-[clamp(3.5rem,7.6vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Tre momenti.
            <span className="block font-serif font-normal italic text-tomato">Un’unica live experience.</span>
          </AnimatedHeading>
          <p className="max-w-lg text-base leading-7 text-charcoal/60">
            Dal racconto della Pizza Napoletana alla prova con le mani in pasta, fino alla sfida finale: gli ospiti non guardano soltanto, partecipano.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-24 lg:pb-10">
          {activities.map((activity, index) => (
            <motion.article
              key={activity.title}
              className={`relative flex min-h-[34rem] flex-col overflow-hidden rounded-[2rem] border border-charcoal/16 bg-white/25 p-7 sm:p-8 ${index === 1 ? "lg:mt-10" : ""}`}
              whileHover={reduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-serif text-6xl italic leading-none text-tomato/80">0{index + 1}</span>
                <span className="rounded-full border border-charcoal/16 px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-charcoal/50">
                  {activity.eyebrow}
                </span>
              </div>
              <h3 className="mt-12 text-[clamp(2.2rem,3.5vw,3.6rem)] font-semibold leading-none tracking-[-0.05em]">{activity.title}</h3>
              <p className="mt-5 text-sm leading-6 text-charcoal/60">{activity.description}</p>
              <ul className="mt-auto space-y-3 border-t border-charcoal/15 pt-7 text-sm" aria-label={`Cosa comprende ${activity.title}`}>
                {activity.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-tomato" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
