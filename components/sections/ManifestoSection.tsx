import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="scroll-mt-24 bg-dough px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel>Fuori Forno è un’esperienza, non soltanto un catering.</SectionLabel>
        <AnimatedHeading className="mt-10 max-w-[1450px] text-[clamp(3rem,7.8vw,8.4rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
          Non portiamo soltanto la pizza.
          <span className="block font-serif font-normal italic text-tomato">Portiamo il forno, il profumo</span>
          <span className="block">e il momento in cui tutti si avvicinano.</span>
        </AnimatedHeading>
        <div className="mt-16 grid gap-8 border-t border-charcoal/20 pt-6 text-sm leading-6 sm:grid-cols-3 lg:ml-auto lg:max-w-3xl">
          <p className="font-bold uppercase tracking-[0.16em] text-charcoal/45">Un format che si muove</p>
          <p>La postazione prende forma nel luogo che hai scelto e diventa subito il centro vivo dell’evento.</p>
          <p>La preparazione non resta dietro le quinte: si vede, si sente e si condivide.</p>
        </div>
      </div>
    </section>
  );
}
