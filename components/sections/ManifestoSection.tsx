import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="scroll-mt-24 bg-charcoal px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <SectionLabel light>Fuori Forno è un’esperienza, non soltanto un catering.</SectionLabel>
        <AnimatedHeading className="mt-10 max-w-[1450px] text-[clamp(3rem,7.8vw,8.4rem)] font-semibold leading-[0.91] tracking-[-0.065em]">
          Non portiamo soltanto la pizza.
          <span className="block font-serif font-normal italic text-fire">Portiamo il forno, il profumo</span>
          <span className="block">e il momento in cui tutti si avvicinano.</span>
        </AnimatedHeading>
      </div>
    </section>
  );
}
