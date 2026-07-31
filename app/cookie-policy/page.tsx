import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Cookie policy | Fuori Forno",
  description: "Informazioni su cookie e tecnologie analoghe nel sito Fuori Forno.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      eyebrow="Informativa legale"
      title="Cookie policy"
      description="Qui trovi lo stato attuale di cookie, tracciamenti e servizi tecnici utilizzati dal sito Fuori Forno."
    >
      <section>
        <h2>1. Cosa sono i cookie</h2>
        <p>I cookie sono piccoli file di testo che un sito può salvare sul dispositivo. Possono essere tecnici, quando servono al funzionamento del servizio, oppure non tecnici, per esempio quando analizzano il comportamento o costruiscono profili pubblicitari.</p>
      </section>

      <section>
        <h2>2. Situazione attuale del sito</h2>
        <p><strong>Fuori Forno non installa intenzionalmente cookie proprietari, cookie analitici o cookie di profilazione.</strong> Non sono presenti strumenti di analytics, pixel pubblicitari, mappe incorporate, video di piattaforme esterne o pulsanti social che eseguono codice di terze parti.</p>
        <p>Font, immagini e video vengono distribuiti come risorse locali del sito. Il semplice accesso può comunque generare log tecnici presso il provider di hosting per consegnare le pagine, prevenire abusi e mantenere il servizio sicuro.</p>
      </section>

      <section>
        <h2>3. Servizio tecnico di hosting</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal/20">
                <th className="py-3 pr-4">Fornitore</th>
                <th className="py-3 pr-4">Finalità</th>
                <th className="py-3 pr-4">Categoria</th>
                <th className="py-3">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-charcoal/10 align-top">
                <td className="py-4 pr-4">GitHub Pages / GitHub, Inc.</td>
                <td className="py-4 pr-4">Hosting, distribuzione, sicurezza e log tecnici</td>
                <td className="py-4 pr-4">Tecnica</td>
                <td className="py-4">Secondo le regole del fornitore</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">Consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">privacy statement di GitHub</a> per le informazioni sui trattamenti svolti dalla piattaforma.</p>
      </section>

      <section>
        <h2>4. Perché non compare un banner</h2>
        <p>Nella configurazione attuale non vengono usati cookie o strumenti non tecnici che richiedano un consenso preventivo. Per questo non viene mostrato un banner di consenso. L’informativa resta disponibile nel footer, come previsto per i soli strumenti tecnici.</p>
        <p>Questa impostazione dovrà essere verificata sul dominio effettivo dopo il deploy. Se verranno aggiunti analytics, contenuti incorporati, marketing o altri strumenti non tecnici, questi dovranno restare bloccati fino alla scelta dell’utente e sarà necessario introdurre un meccanismo di consenso adeguato.</p>
      </section>

      <section>
        <h2>5. Come controllare i cookie dal browser</h2>
        <p>Puoi ispezionare, bloccare o cancellare i cookie dalle impostazioni del browser. Il blocco di elementi strettamente tecnici potrebbe compromettere alcune funzioni offerte dal provider di hosting.</p>
      </section>

      <section>
        <h2>6. Titolare e aggiornamenti</h2>
        <p>I dati completi del titolare e il contatto privacy sono riportati nella <Link href="/privacy">Privacy policy</Link>. Questa policy è aggiornata al <strong>{legalConfig.lastUpdated}</strong> e va rivista a ogni modifica dei servizi utilizzati dal sito.</p>
        <p>Riferimento normativo: <a href="https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9677876" target="_blank" rel="noreferrer">Linee guida cookie e altri strumenti di tracciamento del Garante</a>.</p>
      </section>
    </LegalPage>
  );
}
