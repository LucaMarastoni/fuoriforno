import { founders } from "@/data/founders";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FoundersSection() {
  return (
    <section className="overflow-hidden bg-basil px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <SectionLabel index="03" light>Chi c’è dietro</SectionLabel>
            <AnimatedHeading className="mt-6 text-[clamp(3.4rem,7vw,7.6rem)] font-semibold leading-[0.87] tracking-[-0.065em]">
              Due pizzaioli.
              <span className="block font-serif font-normal italic text-dough">Un forno.</span>
              <span className="block">Nessuna festa ordinaria.</span>
            </AnimatedHeading>
          </div>
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] bg-charcoal p-6 sm:p-9 lg:mt-32">
            <div className="absolute -right-14 -top-14 size-52 rounded-full border border-fire/40" />
            <div className="absolute -right-5 -top-5 size-32 rounded-full bg-fire/15" />
            <p className="relative max-w-sm font-serif text-3xl italic leading-tight text-dough">
              “Il forno è il punto in cui smetti di essere invitato e diventi parte della scena.”
            </p>
            <p className="absolute bottom-7 left-7 right-7 border-t border-white/15 pt-4 text-xs uppercase tracking-[0.16em] text-white/45">
              Testo editoriale temporaneo — da validare con i fondatori
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-px bg-white/18 md:grid-cols-2 lg:mt-24">
          {founders.map((founder, index) => (
            <article key={`${founder.name}-${index}`} className="bg-basil py-9 md:px-9 md:first:pl-0 md:last:pr-0">
              <div className="mb-12 flex items-center justify-between">
                <span className="font-serif text-5xl italic text-fire">0{index + 1}</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/55">Profilo da completare</span>
              </div>
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">{founder.name}</h3>
              <p className="mt-2 text-sm font-bold text-dough">{founder.role}</p>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/55">{founder.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
