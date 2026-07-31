import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { isLegalConfigComplete } from "@/lib/legal-config";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, description, children }: LegalPageProps) {
  return (
    <main id="top" className="min-h-screen bg-dough text-charcoal">
      <header className="border-b border-charcoal/10 px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Logo light={false} href="/" />
          <Link
            href="/"
            className="rounded-full border border-charcoal/18 px-4 py-2 text-xs font-bold transition-colors hover:border-tomato hover:text-tomato"
          >
            Torna al sito
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-tomato">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(3.4rem,9vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-charcoal/62">{description}</p>

        {!isLegalConfigComplete ? (
          <aside className="mt-10 rounded-2xl border border-tomato/30 bg-tomato/[0.07] p-5 text-sm leading-6" role="note">
            <strong className="block text-tomato">Bozza da completare prima della pubblicazione</strong>
            Mancano i dati identificativi e il contatto del titolare. Inseriscili in <code className="rounded bg-charcoal/8 px-1.5 py-0.5">lib/legal-config.ts</code> e fai validare il testo sul caso concreto.
          </aside>
        ) : null}

        <article className="mt-16 max-w-3xl space-y-10 text-[0.95rem] leading-7 text-charcoal/72 [&_a]:font-semibold [&_a]:text-tomato [&_a]:underline [&_a]:decoration-tomato/30 [&_a]:underline-offset-4 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-[-0.03em] [&_li]:pl-1 [&_ol]:ml-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_p+p]:mt-3 [&_strong]:text-charcoal [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2">
          {children}
        </article>
      </div>

      <footer className="border-t border-charcoal/10 bg-charcoal px-5 py-8 text-xs text-white/55 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fuori Forno</p>
          <nav className="flex gap-5" aria-label="Documenti legali">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie policy</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

