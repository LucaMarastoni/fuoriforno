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
        <p>Il titolare determina le finalità e le modalità essenziali dei trattamenti descritti in questa informativa ed è responsabile di mantenerli coerenti con il funzionamento effettivo del sito e con l’organizzazione dell’attività.</p>
      </section>

      <section>
        <h2>2. Ambito dell’informativa</h2>
        <p>Questa informativa riguarda i trattamenti effettuati attraverso il sito Fuori Forno, compresa la navigazione e l’invio del modulo di contatto. Non si applica ai siti o servizi esterni eventualmente raggiunti tramite link, che operano secondo le proprie informative.</p>
        <p>Rientrano nell’ambito anche le comunicazioni successive direttamente collegate a una richiesta inviata dal sito, per esempio le email necessarie a chiarire i dettagli dell’evento, preparare una proposta o concordare un contatto.</p>
        <p>L’informativa non riguarda eventuali trattamenti svolti in contesti diversi e disciplinati da documenti specifici, come rapporti di lavoro, rapporti con fornitori o attività promozionali future.</p>
      </section>

      <section>
        <h2>3. Dati trattati</h2>
        <ul>
          <li><strong>Dati tecnici e di navigazione:</strong> indirizzo IP, data e ora della richiesta, risorsa richiesta, browser, dispositivo e informazioni tecniche necessarie a distribuire e proteggere il sito. Questi dati possono essere registrati automaticamente dai fornitori dell’infrastruttura.</li>
          <li><strong>Dati del modulo di contatto:</strong> nome, email, eventuale telefono, data e località dell’evento, numero indicativo di invitati, tipologia di evento, messaggio, conferma di lettura dell’informativa e data e ora di ricezione.</li>
          <li><strong>Dati delle comunicazioni:</strong> informazioni contenute nelle email e nelle successive conversazioni necessarie a gestire la richiesta.</li>
        </ul>
        <p>I dati inseriti nel form vengono trasmessi tramite Google Apps Script e archiviati in un foglio Google Sheets gestito dal titolare.</p>
        <p>Il modulo contiene inoltre un campo tecnico invisibile usato per limitare gli invii automatizzati. Questo controllo non viene utilizzato per profilare i visitatori o attribuire loro un punteggio.</p>
        <p>Non chiediamo categorie particolari di dati personali, come informazioni sanitarie, biometriche, politiche o religiose. Ti invitiamo a non inserirle nel messaggio se non sono strettamente necessarie.</p>
      </section>

      <section>
        <h2>4. Origine dei dati e funzionamento del modulo</h2>
        <p>I dati del modulo e delle comunicazioni vengono raccolti direttamente dall’interessato. I dati tecnici derivano invece dal normale funzionamento dei protocolli internet, del browser e dei servizi necessari a pubblicare e proteggere il sito.</p>
        <p>Prima dell’invio il browser verifica la presenza e il formato dei campi obbligatori. Se la validazione viene superata, i dati sono inviati all’indirizzo Google Apps Script configurato per Fuori Forno e registrati come nuova riga nel foglio privato del titolare. L’utente non deve creare un account e il sito non genera un profilo personale.</p>
        <p>Il sistema restituisce soltanto l’esito tecnico dell’operazione. Non vengono effettuate valutazioni automatiche sulla richiesta, sulla persona o sulla probabilità di accettare il preventivo.</p>
      </section>

      <section>
        <h2>5. Finalità e basi giuridiche</h2>
        <ul>
          <li><strong>Rispondere alla richiesta, ricontattarti e preparare una proposta o un preventivo:</strong> esecuzione di misure precontrattuali richieste dall’interessato (art. 6, par. 1, lett. b GDPR).</li>
          <li><strong>Gestire l’eventuale rapporto contrattuale e gli adempimenti amministrativi, fiscali e contabili:</strong> esecuzione del contratto e adempimento di obblighi legali (art. 6, par. 1, lett. b e c GDPR).</li>
          <li><strong>Proteggere il sito, prevenire abusi e risolvere problemi tecnici:</strong> legittimo interesse del titolare alla sicurezza e continuità del servizio (art. 6, par. 1, lett. f GDPR).</li>
          <li><strong>Accertare, esercitare o difendere un diritto:</strong> legittimo interesse del titolare alla tutela dei propri diritti (art. 6, par. 1, lett. f GDPR).</li>
        </ul>
        <p>La casella presente nel modulo conferma la lettura dell’informativa e non costituisce il consenso come base giuridica del trattamento. I dati del form non vengono utilizzati per newsletter, marketing o profilazione.</p>
        <p>I dati non saranno riutilizzati per finalità incompatibili con quelle descritte. Se in futuro venissero introdotte comunicazioni promozionali o attività ulteriori, saranno fornite le informazioni necessarie e, quando richiesto, sarà raccolto uno specifico consenso separato.</p>
      </section>

      <section>
        <h2>6. Conferimento dei dati</h2>
        <p>Il conferimento dei campi indicati come obbligatori è necessario per comprendere e gestire la richiesta. Puoi scegliere di non fornirli, ma in quel caso non sarà possibile inviare il modulo. Telefono e data indicativa dell’evento sono facoltativi.</p>
        <p>La mancata indicazione dei campi facoltativi non impedisce l’invio; potrebbe tuttavia rendere necessario un successivo contatto per raccogliere le informazioni mancanti. L’invio del modulo non comporta la conclusione automatica di un contratto né l’accettazione dell’evento da parte di Fuori Forno.</p>
      </section>

      <section>
        <h2>7. Modalità del trattamento e sicurezza</h2>
        <p>I dati sono trattati con strumenti digitali secondo principi di liceità, correttezza, trasparenza, minimizzazione e limitazione della conservazione. Il foglio contenente le richieste non è pubblico ed è accessibile soltanto attraverso gli account autorizzati dal titolare.</p>
        <p>Sono adottate misure ragionevoli per ridurre il rischio di accessi non autorizzati, perdita, uso improprio o divulgazione. Nessuna trasmissione o archiviazione online può tuttavia essere considerata priva di rischi assoluti.</p>
        <p>Il titolare deve controllare periodicamente le autorizzazioni del foglio, evitare collegamenti pubblici, rimuovere gli accessi non più necessari e proteggere gli account utilizzati. Eventuali copie esportate devono essere custodite con un livello di protezione coerente e cancellate quando non più necessarie.</p>
        <p>Qualora si verifichi un incidente di sicurezza, il titolare ne valuta natura, conseguenze e misure correttive, adempiendo agli obblighi di documentazione e comunicazione previsti dalla normativa quando applicabili.</p>
      </section>

      <section>
        <h2>8. Periodi di conservazione</h2>
        <ul>
          <li><strong>Richieste che non danno luogo a un rapporto contrattuale:</strong> per il tempo necessario a gestirle e comunque non oltre 24 mesi dall’ultimo contatto significativo.</li>
          <li><strong>Dati relativi a clienti e rapporti contrattuali:</strong> per la durata del rapporto e successivamente per i periodi richiesti dalla normativa civile, fiscale e contabile applicabile.</li>
          <li><strong>Dati necessari alla tutela di un diritto:</strong> fino alla definizione della contestazione e per i termini di prescrizione applicabili.</li>
          <li><strong>Log tecnici:</strong> secondo i periodi stabiliti dai fornitori dell’infrastruttura, salvo necessità di sicurezza o obblighi di legge.</li>
        </ul>
        <p>Alla scadenza i dati vengono cancellati o resi anonimi, salvo che un obbligo di legge o una concreta esigenza di tutela ne richieda l’ulteriore conservazione.</p>
        <p>Il limite di 24 mesi costituisce anche una regola organizzativa: le richieste presenti nel foglio devono essere riesaminate periodicamente e quelle scadute devono essere eliminate, comprese le eventuali copie non più necessarie.</p>
      </section>

      <section>
        <h2>9. Destinatari e fornitori</h2>
        <p>I dati possono essere trattati dal titolare, da collaboratori espressamente autorizzati e, quando necessario, da consulenti professionali, autorità pubbliche o soggetti ai quali la comunicazione sia prevista dalla legge.</p>
        <p>Per il funzionamento del sito vengono utilizzati <strong>GitHub Pages, servizio di GitHub</strong>, per l’hosting, e <strong>Google Apps Script e Google Sheets, servizi Google</strong>, per ricevere e archiviare le richieste inviate tramite il modulo.</p>
        <p>Per informazioni sui trattamenti effettuati direttamente dai fornitori consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">GitHub General Privacy Statement</a> e le <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Norme sulla privacy di Google</a>.</p>
        <p>I dati non vengono venduti, diffusi o comunicati a terzi per finalità pubblicitarie.</p>
        <p>I fornitori possono trattare dati tecnici necessari a erogare i rispettivi servizi secondo il ruolo e le condizioni applicabili. Il titolare deve utilizzare soltanto gli account e le funzionalità necessari, mantenere aggiornate le relative impostazioni e verificare periodicamente la documentazione contrattuale e privacy dei servizi impiegati.</p>
      </section>

      <section>
        <h2>10. Trasferimenti verso Paesi esterni allo SEE</h2>
        <p>GitHub e Google operano a livello internazionale; l’uso dei loro servizi può comportare il trattamento di dati al di fuori dello Spazio Economico Europeo. Tali trattamenti avvengono secondo le condizioni applicabili ai servizi e al tipo di account utilizzato e, quando richiesto, sulla base di decisioni di adeguatezza o altre garanzie previste dagli articoli 44 e seguenti del GDPR.</p>
        <p>Puoi chiedere al titolare ulteriori informazioni sulle garanzie applicabili scrivendo al contatto privacy indicato sopra.</p>
        <p>Le garanzie effettivamente utilizzate possono variare nel tempo o in base alla configurazione contrattuale del servizio. Per questo la presente informativa rinvia anche alla documentazione aggiornata dei fornitori, senza limitare i diritti che l’interessato può esercitare nei confronti del titolare.</p>
      </section>

      <section>
        <h2>11. Cookie, servizi esterni e decisioni automatizzate</h2>
        <p>Il sito non utilizza strumenti di profilazione, non prende decisioni basate unicamente su trattamenti automatizzati e non utilizza i dati del modulo per attività promozionali. Per maggiori informazioni sulle tecnologie utilizzate consulta la <Link href="/cookie-policy">Cookie policy</Link>.</p>
        <p>Il collegamento a Instagram è un semplice link esterno: nessun contenuto del social network viene incorporato nella pagina. Se scegli di aprirlo, il servizio esterno potrà trattare i dati della visita secondo la propria informativa e le impostazioni del tuo account.</p>
      </section>

      <section>
        <h2>12. Diritti dell’interessato</h2>
        <p>Nei casi previsti dagli articoli 15–22 del GDPR puoi chiedere:</p>
        <ul>
          <li>la conferma che sia in corso un trattamento e l’accesso ai tuoi dati;</li>
          <li>la rettifica dei dati inesatti o l’integrazione di quelli incompleti;</li>
          <li>la cancellazione o la limitazione del trattamento;</li>
          <li>la portabilità dei dati, quando applicabile;</li>
          <li>l’opposizione al trattamento fondato sul legittimo interesse, per motivi connessi alla tua situazione particolare.</li>
        </ul>
        <p>Puoi esercitare i diritti gratuitamente scrivendo a <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a>. Potrebbero essere richieste informazioni necessarie a verificare l’identità del richiedente.</p>
        <p>Il titolare risponde senza ingiustificato ritardo e, di regola, entro un mese dal ricevimento della richiesta. In caso di particolare complessità o di numerose richieste, il termine può essere prorogato nei limiti previsti dalla normativa, informando l’interessato dei motivi.</p>
        <p>Alcuni diritti possono essere limitati quando la conservazione o il trattamento sono necessari per adempiere a un obbligo legale, tutelare i diritti di altre persone o accertare, esercitare o difendere un diritto. Ogni eventuale limitazione sarà motivata.</p>
        <p>Se ritieni che il trattamento violi la normativa, puoi proporre reclamo al <a href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Garante per la protezione dei dati personali</a> o all’autorità di controllo competente nel Paese in cui risiedi o lavori.</p>
      </section>

      <section>
        <h2>13. Correttezza dei dati e comunicazioni</h2>
        <p>Ti chiediamo di fornire informazioni esatte, pertinenti e aggiornate e di comunicare eventuali correzioni utili alla gestione della richiesta. Fuori Forno utilizza i recapiti forniti soltanto per rispondere, organizzare gli eventuali passaggi successivi e adempiere alle finalità descritte.</p>
        <p>Le comunicazioni operative possono contenere riferimenti alla data, al luogo o alla tipologia dell’evento. È quindi opportuno usare un indirizzo email al quale soltanto tu o persone da te autorizzate possano accedere.</p>
      </section>

      <section>
        <h2>14. Dati di terzi e minori</h2>
        <p>Se comunichi dati personali di altre persone, dichiari di essere autorizzato a farlo e di averle informate in modo adeguato. Il servizio non è rivolto specificamente ai minori; non inviare dati di minori se non sono strettamente necessari alla richiesta e non disponi di un’idonea autorizzazione.</p>
        <p>Nel messaggio evita di inserire elenchi di invitati, dati sanitari, esigenze individuali riconducibili a persone identificate o altre informazioni di terzi non necessarie alla prima richiesta. Eventuali esigenze particolari potranno essere gestite successivamente con modalità proporzionate.</p>
      </section>

      <section>
        <h2>15. Aggiornamenti dell’informativa</h2>
        <p>Questa informativa può essere aggiornata quando cambiano i servizi, le modalità di trattamento o gli obblighi normativi. La versione pubblicata su questa pagina è quella applicabile ed è aggiornata al <strong>{legalConfig.lastUpdated}</strong>.</p>
        <p>In caso di modifiche sostanziali, il titolare adotterà modalità adeguate per portarle all’attenzione degli interessati. Le versioni aggiornate si applicano dal momento della pubblicazione, salvo che la legge richieda una diversa decorrenza o una nuova manifestazione di volontà.</p>
      </section>
    </LegalPage>
  );
}
