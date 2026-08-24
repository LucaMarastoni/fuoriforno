import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { legalConfig, missingLegalValue } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Privacy policy | Fuori Forno",
  description: "Informativa sul trattamento dei dati personali del sito Fuori Forno.",
};

const show = (value: string) => value || missingLegalValue;

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Informativa legale"
      title="Privacy policy"
      description="Questa informativa descrive quali dati vengono trattati durante la navigazione e quando invii una richiesta dal sito Fuori Forno."
    >
      <section>
        <h2>1. Titolare del trattamento</h2>
        <p><strong>Nome o ragione sociale:</strong> {show(legalConfig.controllerName)}</p>
        <p><strong>Sede o indirizzo:</strong> {show(legalConfig.controllerAddress)}</p>
        {legalConfig.vatNumber ? <p><strong>Partita IVA:</strong> {legalConfig.vatNumber}</p> : null}
        <p><strong>Contatto privacy:</strong> {legalConfig.privacyEmail ? <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a> : missingLegalValue}</p>
      </section>

      <section>
        <h2>2. Quali dati trattiamo</h2>
        <ul>
          <li><strong>Dati di navigazione:</strong> indirizzo IP, data e ora della richiesta, dispositivo, browser, pagine richieste e informazioni tecniche necessarie a distribuire e proteggere il sito. Questi dati possono essere registrati dall’infrastruttura di hosting.</li>
          <li><strong>Dati inviati nel form:</strong> nome, email, eventuale telefono, data e località dell’evento, numero indicativo di invitati, tipologia di evento, messaggio e conferma di lettura dell’informativa.</li>
          <li><strong>Dati forniti spontaneamente:</strong> le ulteriori informazioni che scegli di comunicare durante i successivi contatti.</li>
        </ul>
        <p>I dati inseriti nel form vengono trasmessi tramite Google Apps Script e archiviati in un foglio Google Sheets gestito dal titolare.</p>
      </section>

      <section>
        <h2>3. Finalità e basi giuridiche</h2>
        <ul>
          <li>Rispondere alla richiesta e preparare un eventuale preventivo: esecuzione di misure precontrattuali richieste dall’interessato (art. 6, par. 1, lett. b GDPR).</li>
          <li>Adempiere a obblighi amministrativi, contabili o legali: obbligo di legge (art. 6, par. 1, lett. c GDPR).</li>
          <li>Garantire sicurezza, disponibilità e prevenzione degli abusi del sito: legittimo interesse del titolare e del provider di hosting (art. 6, par. 1, lett. f GDPR).</li>
        </ul>
        <p>Il sito non utilizza i dati del form per newsletter o marketing. Se queste attività verranno introdotte, sarà richiesto uno specifico consenso quando necessario.</p>
      </section>

      <section>
        <h2>4. Conferimento dei dati</h2>
        <p>I campi indicati come obbligatori sono necessari per comprendere e gestire la richiesta. Puoi non fornire i dati, ma in quel caso non sarà possibile inviare il form o ricevere una risposta completa.</p>
      </section>

      <section>
        <h2>5. Modalità e tempi di conservazione</h2>
        <p>I dati sono trattati con strumenti digitali e misure adeguate al rischio. Le richieste vengono conservate per il tempo necessario a rispondere, gestire l’eventuale rapporto precontrattuale o contrattuale e rispettare i successivi obblighi di legge. I log tecnici seguono i tempi stabiliti dal provider di hosting.</p>
      </section>

      <section>
        <h2>6. Destinatari e fornitori</h2>
        <p>I dati possono essere trattati da personale autorizzato e da fornitori tecnici nominati, quando richiesto, responsabili del trattamento. Il sito utilizza <strong>GitHub Pages, servizio di GitHub, Inc.</strong> per l’hosting e <strong>Google Apps Script e Google Sheets, servizi Google</strong> per ricevere e archiviare le richieste inviate tramite il form.</p>
        <p>Per i trattamenti svolti dalle piattaforme consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub General Privacy Statement</a> e la <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy di Google</a>.</p>
      </section>

      <section>
        <h2>7. Trasferimenti fuori dallo Spazio Economico Europeo</h2>
        <p>L’uso di GitHub e Google può comportare il trattamento di dati in Paesi esterni allo SEE. Il titolare deve verificare e documentare le garanzie applicabili in base ai servizi e al tipo di account utilizzati.</p>
      </section>

      <section>
        <h2>8. Diritti dell’interessato</h2>
        <p>Nei casi previsti puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione al trattamento, oltre a revocare un consenso senza pregiudicare i trattamenti già svolti. Puoi esercitare i diritti scrivendo al contatto privacy indicato sopra.</p>
        <p>Puoi inoltre proporre reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a> o all’autorità competente del tuo Paese.</p>
      </section>

      <section>
        <h2>9. Processi automatizzati e minori</h2>
        <p>Il sito non effettua profilazione né decisioni automatizzate con effetti giuridici. Il servizio non è rivolto specificamente ai minori; non inviare dati personali di minori non necessari alla richiesta.</p>
      </section>

      <section>
        <h2>10. Aggiornamenti</h2>
        <p>L’informativa può cambiare quando vengono aggiunti servizi o modificati i trattamenti. La versione corrente è aggiornata al <strong>{legalConfig.lastUpdated}</strong>.</p>
      </section>
    </LegalPage>
  );
}
