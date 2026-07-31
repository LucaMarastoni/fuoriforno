"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pizzaCategories, pizzas } from "@/data/pizzas";

export function PizzaSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const safeIndex = (index + pizzas.length) % pizzas.length;
    const card = trackRef.current?.children.item(safeIndex) as HTMLElement | null;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActive(safeIndex);
  };

  return (
    <section id="pizze" className="scroll-mt-24 overflow-hidden bg-charcoal py-24 text-white sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <SectionLabel index="04" light>Le pizze</SectionLabel>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <AnimatedHeading className="max-w-5xl text-[clamp(3.6rem,7.6vw,8.2rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Una proposta,
            <span className="block font-serif font-normal italic text-fire">mai un menu fotocopia.</span>
          </AnimatedHeading>
          <p className="max-w-xl text-base leading-7 text-white/55 lg:justify-self-end">
            Il menu viene costruito insieme in base all’evento, alla stagione e al numero di invitati.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2" aria-label="Categorie disponibili">
          {pizzaCategories.map((category) => (
            <span key={category} className="rounded-full border border-white/16 px-3 py-2 text-xs text-white/65">{category}</span>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:gap-6 sm:px-8 lg:px-[max(3rem,calc((100vw-1600px)/2+3rem))]"
        role="region"
        aria-label="Proposte pizza indicative"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") goTo(active + 1);
          if (event.key === "ArrowLeft") goTo(active - 1);
        }}
        onScroll={(event) => {
          const element = event.currentTarget;
          const firstCard = element.firstElementChild as HTMLElement | null;
          if (!firstCard) return;
          const index = Math.round(element.scrollLeft / (firstCard.offsetWidth + 24));
          setActive(Math.min(pizzas.length - 1, Math.max(0, index)));
        }}
      >
        {pizzas.map((pizza, index) => (
          <article key={pizza.name} className="group w-[85vw] max-w-[38rem] shrink-0 snap-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white/5">
              <Image src={pizza.image} alt={`Esempio visivo: ${pizza.name}`} fill sizes="(max-width: 768px) 85vw, 610px" className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
              <span className="absolute left-4 top-4 rounded-full bg-charcoal/75 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-dough backdrop-blur-sm">
                {pizza.category}
              </span>
              <span className="absolute bottom-4 right-4 font-serif text-5xl italic text-white/75">0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">{pizza.name}</h3>
            <p className="mt-2 text-sm leading-6 text-white/55">{pizza.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.13em] text-fire">{pizza.ingredients}</p>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-4 flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex gap-2" role="tablist" aria-label="Seleziona una proposta">
          {pizzas.map((pizza, index) => (
            <button
              key={pizza.name}
              type="button"
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${active === index ? "w-10 bg-fire" : "w-5 bg-white/20 hover:bg-white/45"}`}
              aria-label={`Mostra ${pizza.name}`}
              aria-selected={active === index}
              role="tab"
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={() => goTo(active - 1)} className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-charcoal" aria-label="Pizza precedente">←</button>
          <button type="button" onClick={() => goTo(active + 1)} className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-charcoal" aria-label="Pizza successiva">→</button>
        </div>
      </div>
    </section>
  );
}
