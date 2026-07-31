import Link from "next/link";

type LogoProps = {
  light?: boolean;
  href?: string;
};

export function Logo({ light = true, href = "#top" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${light ? "text-white" : "text-charcoal"}`}
      aria-label="Fuori Forno, torna all’inizio"
    >
      <span className="relative grid size-9 place-items-center rounded-full border border-current/40">
        <span className="h-2.5 w-4 rounded-t-full border-x border-t border-current transition-transform duration-300 group-hover:-translate-y-0.5" />
        <span className="absolute bottom-2 h-px w-4 bg-current" />
      </span>
      <span className="text-[0.78rem] font-extrabold uppercase leading-[0.82] tracking-[-0.045em]">
        Fuori
        <br />
        Forno
      </span>
    </Link>
  );
}
