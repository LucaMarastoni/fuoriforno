"use client";

import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { withBasePath } from "@/lib/site-path";

const experienceItems = [
  {
    index: "01",
    title: "Il forno, lì con voi",
    text: "Arriva sul posto e trasforma uno spazio in un punto d’incontro.",
    image: withBasePath("/images/experience/forno.webp"),
    alt: "Forno mobile acceso durante un evento",
    className: "experience-card experience-card--wide",
  },
  {
    index: "02",
    title: "Preparazione dal vivo",
    text: "Ogni gesto diventa parte della scena, dall’impasto alla pala.",
    image: withBasePath("/images/experience/impasto.webp"),
    alt: "Pizzaiolo che lavora l’impasto a mano",
    className: "experience-card experience-card--tall",
  },
  {
    index: "03",
    title: "Napoletana, davvero",
    text: "Calore forte, cottura rapida, cornicione che racconta il forno.",
    image: withBasePath("/images/experience/pizza.webp"),
    alt: "Pizza napoletana davanti alla fiamma del forno",
    className: "experience-card experience-card--small",
  },
  {
    index: "04",
    title: "Tutti più vicini",
    text: "Gli invitati guardano, parlano, partecipano. L’attesa diventa festa.",
    image: withBasePath("/images/experience/evento.webp"),
    alt: "Invitati raccolti intorno alla preparazione della pizza",
    className: "experience-card experience-card--event",
  },
] as const;

export function ExperienceSection() {
  return (
    <section id="esperienza" className="scroll-mt-24 overflow-hidden bg-charcoal px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel index="01" light>L’esperienza</SectionLabel>
            <AnimatedHeading className="mt-6 max-w-4xl text-[clamp(3.4rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Tutto succede
              <span className="block font-serif font-normal italic text-fire">intorno al forno.</span>
            </AnimatedHeading>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/58 lg:justify-self-end">
            Non è una cucina nascosta. È un piccolo palcoscenico fatto di materia, gesti e persone che si ritrovano senza bisogno di un invito.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:hidden">
          {experienceItems.map((item) => (
            <article key={item.index}>
              <ImageReveal
                src={item.image}
                alt={item.alt}
                sizes="calc(100vw - 2.5rem)"
                className="aspect-[4/3] rounded-[1.5rem] bg-white/5"
              />
              <div className="mt-4 grid grid-cols-[2.5rem_1fr] gap-2">
                <span className="font-serif text-lg italic text-fire">{item.index}</span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-6 text-white/52">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="experience-grid mt-16 lg:mt-24">
            {experienceItems.map((item) => (
              <article key={item.index} className={item.className}>
                <ImageReveal src={item.image} alt={item.alt} sizes="(max-width: 768px) 100vw, 50vw" className="experience-image" />
                <div className="mt-4 grid grid-cols-[2.5rem_1fr] gap-2">
                  <span className="font-serif text-lg italic text-fire">{item.index}</span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">{item.title}</h3>
                    <p className="mt-1 max-w-sm text-sm leading-6 text-white/52">{item.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
