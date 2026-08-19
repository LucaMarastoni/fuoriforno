import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { contactConfig } from "@/lib/contact-config";

const links = [
  ["Esperienza", "#esperienza"],
  ["Come funziona", "#come-funziona"],
  ["3 attività", "#attivita"],
  ["Eventi", "#eventi"],
  ["Contatti", "#contatti"],
] as const;

export function Footer() {
  const contacts = [
    contactConfig.email ? ["Email", `mailto:${contactConfig.email}`] : null,
    contactConfig.phone ? [contactConfig.phone, `tel:${contactConfig.phone}`] : null,
    contactConfig.whatsapp ? ["WhatsApp", contactConfig.whatsapp] : null,
    contactConfig.instagram ? ["Instagram", contactConfig.instagram] : null,
  ].filter((item): item is [string, string] => item !== null);

  return (
    <footer className="border-t border-white/10 bg-charcoal px-5 pb-8 pt-14 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 pb-16 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/46">Un forno itinerante, pizza napoletana preparata sul posto e una festa costruita intorno.</p>
          </div>
          <nav aria-label="Link nel footer">
            <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35">Esplora</p>
            <ul className="space-y-2">
              {links.map(([label, href]) => <li key={href}><a href={href} className="text-sm text-white/65 transition-colors hover:text-fire">{label}</a></li>)}
            </ul>
          </nav>
          <div>
            <p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/35">Contatti</p>
            {contacts.length > 0 ? (
              <ul className="space-y-2">
                {contacts.map(([label, href]) => <li key={href}><a href={href} className="text-sm text-white/65 transition-colors hover:text-fire">{label}</a></li>)}
              </ul>
            ) : (
              <p className="max-w-xs text-xs leading-5 text-white/32">Contatti da configurare in <code>lib/contact-config.ts</code>.</p>
            )}
          </div>
        </div>
        <p className="border-y border-white/10 py-8 font-serif text-[clamp(2.6rem,7vw,7.5rem)] italic leading-none tracking-[-0.045em] text-dough">Pizza napoletana, fuori dal solito.</p>
        <div className="flex flex-col gap-4 pt-7 text-[0.62rem] uppercase tracking-[0.13em] text-white/32 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Fuori Forno</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/cookie-policy" className="hover:text-white">Cookie policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
