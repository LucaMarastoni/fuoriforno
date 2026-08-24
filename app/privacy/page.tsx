import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/layout/LegalPage";
import { legalConfig } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Privacy policy | Fuori Forno",
  description: "Informativa sul trattamento dei dati personali del sito Fuori Forno.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Informativa ai sensi dell’art. 13 GDPR"
      title="Privacy policy"
      description="Questa informativa spiega in modo trasparente quali dati personali vengono trattati tramite il sito Fuori Forno, per quali finalità, per quanto tempo e quali diritti puoi esercitare."
    >
      <section>
        <h2>1. Titolare del trattamento</h2>
        <p><strong>Titolare:</strong> {legalConfig.controllerName}</p>
        <p><strong>Attività:</strong> Fuori Forno</p>
        {legalConfig.controllerAddress ? <p><strong>Sede o indirizzo:</strong> {legalConfig.controllerAddress}</p> : null}
        {legalConfig.vatNumber ? <p><strong>Partita IVA:</strong> {legalConfig.vatNumber}</p> : null}
        <p><strong>Contatto privacy:</strong> <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a></p>
        <p>Puoi usare questo indirizzo per qualsiasi richiesta relativa ai tuoi dati personali e all’esercizio dei diritti descritti di seguito.</p>
      </section>

      <section>
        <h2>2. Ambito dell’informativa</h2>
        <p>Questa informativa riguarda i trattamenti effettuati attraverso il sito Fuori Forno, compresa la navigazione e l’invio del modulo di contatto. Non si applica ai siti o servizi esterni eventualmente raggiunti tramite link, che operano secondo le proprie informative.</p>
      </section>

      <section>
        <h2>3. Dati trattati</h2>
        <ul>
          <li><strong>Dati tecnici e di navigazione:</strong> indirizzo IP, data e ora della richiesta, risorsa richiesta, browser, dispositivo e informazioni tecniche necessarie a distribuire e proteggere il sito. Questi dati possono essere registrati automaticamente dai fornitori dell’infrastruttura.</li>
          <li><strong>Dati del modulo di contatto:</strong> nome, email, eventuale telefono, data e località dell’evento, numero indicativo di invitati, tipologia di evento, messaggio e conferma di lettura dell’informativa.</li>
          <li><strong>Dati delle comunicazioni:</strong> informazioni contenute nelle email e nelle successive conversazioni necessarie a gestire la richiesta.</li>
        </ul>
        <p>I dati inseriti nel form vengono trasmessi tramite Google Apps Script e archiviati in un foglio Google Sheets gestito dal titolare.</p>
        <p>Non chiediamo categorie particolari di dati personali, come informazioni sanitarie, biometriche, politiche o religiose. Ti invitiamo a non inserirle nel messaggio se non sono strettamente necessarie.</p>
      </section>

      <section>
        <h2>4. Finalità e basi giuridiche</h2>
        <ul>
          <li><strong>Rispondere alla richiesta, ricontattarti e preparare una proposta o un preventivo:</strong> esecuzione di misure precontrattuali richieste dall’interessato (art. 6, par. 1, lett. b GDPR).</li>
          <li><strong>Gestire l’eventuale rapporto contrattuale e gli adempimenti amministrativi, fiscali e contabili:</strong> esecuzione del contratto e adempimento di obblighi legali (art. 6, par. 1, lett. b e c GDPR).</li>
          <li><strong>Proteggere il sito, prevenire abusi e risolvere problemi tecnici:</strong> legittimo interesse del titolare alla sicurezza e continuità del servizio (art. 6, par. 1, lett. f GDPR).</li>
          <li><strong>Accertare, esercitare o difendere un diritto:</strong> legittimo interesse del titolare alla tutela dei propri diritti (art. 6, par. 1, lett. f GDPR).</li>
        </ul>
        <p>La casella presente nel modulo conferma la lettura dell’informativa e non costituisce il consenso come base giuridica del trattamento. I dati del form non vengono utilizzati per newsletter, marketing o profilazione.</p>
      </section>

      <section>
        <h2>5. Conferimento dei dati</h2>
        <p>Il conferimento dei campi indicati come obbligatori è necessario per comprendere e gestire la richiesta. Puoi scegliere di non fornirli, ma in quel caso non sarà possibile inviare il modulo. Telefono e data indicativa dell’evento sono facoltativi.</p>
      </section>

      <section>
        <h2>6. Modalità del trattamento e sicurezza</h2>
        <p>I dati sono trattati con strumenti digitali secondo principi di liceità, correttezza, trasparenza, minimizzazione e limitazione della conservazione. Il foglio contenente le richieste non è pubblico ed è accessibile soltanto attraverso gli account autorizzati dal titolare.</p>
        <p>Sono adottate misure ragionevoli per ridurre il rischio di accessi non autorizzati, perdita, uso improprio o divulgazione. Nessuna trasmissione o archiviazione online può tuttavia essere considerata priva di rischi assoluti.</p>
      </section>

      <section>
        <h2>7. Periodi di conservazione</h2>
        <ul>
          <li><strong>Richieste che non danno luogo a un rapporto contrattuale:</strong> per il tempo necessario a gestirle e comunque non oltre 24 mesi dall’ultimo contatto significativo.</li>
          <li><strong>Dati relativi a clienti e rapporti contrattuali:</strong> per la durata del rapporto e successivamente per i periodi richiesti dalla normativa civile, fiscale e contabile applicabile.</li>
          <li><strong>Dati necessari alla tutela di un diritto:</strong> fino alla definizione della contestazione e per i termini di prescrizione applicabili.</li>
          <li><strong>Log tecnici:</strong> secondo i periodi stabiliti dai fornitori dell’infrastruttura, salvo necessità di sicurezza o obblighi di legge.</li>
        </ul>
        <p>Alla scadenza i dati vengono cancellati o resi anonimi, salvo che un obbligo di legge o una concreta esigenza di tutela ne richieda l’ulteriore conservazione.</p>
      </section>

      <section>
        <h2>8. Destinatari e fornitori</h2>
        <p>I dati possono essere trattati dal titolare, da collaboratori espressamente autorizzati e, quando necessario, da consulenti professionali, autorità pubbliche o soggetti ai quali la comunicazione sia prevista dalla legge.</p>
        <p>Per il funzionamento del sito vengono utilizzati <strong>GitHub Pages, servizio di GitHub</strong>, per l’hosting, e <strong>Google Apps Script e Google Sheets, servizi Google</strong>, per ricevere e archiviare le richieste inviate tramite il modulo.</p>
        <p>Per informazioni sui trattamenti effettuati direttamente dai fornitori consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub General Privacy Statement</a> e le <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Norme sulla privacy di Google</a>.</p>
        <p>I dati non vengono venduti, diffusi o comunicati a terzi per finalità pubblicitarie.</p>
      </section>

      <section>
        <h2>9. Trasferimenti verso Paesi esterni allo SEE</h2>
        <p>GitHub e Google operano a livello internazionale; l’uso dei loro servizi può comportare il trattamento di dati al di fuori dello Spazio Economico Europeo. Tali trattamenti avvengono secondo le condizioni applicabili ai servizi e al tipo di account utilizzato e, quando richiesto, sulla base di decisioni di adeguatezza o altre garanzie previste dagli articoli 44 e seguenti del GDPR.</p>
        <p>Puoi chiedere al titolare ulteriori informazioni sulle garanzie applicabili scrivendo al contatto privacy indicato sopra.</p>
      </section>

      <section>
        <h2>10. Cookie, profilazione e decisioni automatizzate</h2>
        <p>Il sito non utilizza strumenti di profilazione, non prende decisioni basate unicamente su trattamenti automatizzati e non utilizza i dati del modulo per attività promozionali. Per maggiori informazioni sulle tecnologie utilizzate consulta la <Link href="/cookie-policy">Cookie policy</Link>.</p>
      </section>

      <section>
        <h2>11. Diritti dell’interessato</h2>
        <p>Nei casi previsti dagli articoli 15–22 del GDPR puoi chiedere:</p>
        <ul>
          <li>la conferma che sia in corso un trattamento e l’accesso ai tuoi dati;</li>
          <li>la rettifica dei dati inesatti o l’integrazione di quelli incompleti;</li>
          <li>la cancellazione o la limitazione del trattamento;</li>
          <li>la portabilità dei dati, quando applicabile;</li>
          <li>l’opposizione al trattamento fondato sul legittimo interesse, per motivi connessi alla tua situazione particolare.</li>
        </ul>
        <p>Puoi esercitare i diritti gratuitamente scrivendo a <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a>. Potrebbero essere richieste informazioni necessarie a verificare l’identità del richiedente.</p>
        <p>Se ritieni che il trattamento violi la normativa, puoi proporre reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a> o all’autorità di controllo competente nel Paese in cui risiedi o lavori.</p>
      </section>

      <section>
        <h2>12. Dati di terzi e minori</h2>
        <p>Se comunichi dati personali di altre persone, dichiari di essere autorizzato a farlo e di averle informate in modo adeguato. Il servizio non è rivolto specificamente ai minori; non inviare dati di minori se non sono strettamente necessari alla richiesta e non disponi di un’idonea autorizzazione.</p>
      </section>

      <section>
        <h2>13. Aggiornamenti dell’informativa</h2>
        <p>Questa informativa può essere aggiornata quando cambiano i servizi, le modalità di trattamento o gli obblighi normativi. La versione pubblicata su questa pagina è quella applicabile ed è aggiornata al <strong>{legalConfig.lastUpdated}</strong>.</p>
      </section>
    </LegalPage>
  );
}
