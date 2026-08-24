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
      eyebrow="Cookie e strumenti di tracciamento"
      title="Cookie policy"
      description="Questa informativa descrive in modo esteso i cookie, le tecnologie assimilabili e i servizi tecnici utilizzati dal sito Fuori Forno, chiarendo perché nella configurazione attuale non viene richiesto un consenso tramite banner."
    >
      <section>
        <h2>1. Cosa sono i cookie e gli strumenti assimilabili</h2>
        <p>I cookie sono piccoli file di testo che un sito o un servizio terzo può salvare nel browser dell’utente e leggere durante la visita o in accessi successivi. Possono permettere, per esempio, di mantenere una sessione, ricordare una preferenza, misurare l’utilizzo di un servizio oppure riconoscere un dispositivo.</p>
        <p>Esistono anche tecnologie che possono svolgere funzioni analoghe senza utilizzare cookie tradizionali, come identificatori inseriti nella memoria locale del browser, pixel, tag, SDK e tecniche di fingerprinting. In questa informativa l’espressione “strumenti di tracciamento” comprende, quando pertinente, anche queste tecnologie.</p>
      </section>

      <section>
        <h2>2. Categorie e regole applicabili</h2>
        <ul>
          <li><strong>Strumenti tecnici:</strong> sono necessari a fornire un servizio richiesto dall’utente, garantire sicurezza, distribuire correttamente le pagine o mantenere una funzione essenziale. Non richiedono consenso preventivo, ma devono essere descritti nell’informativa.</li>
          <li><strong>Strumenti analitici:</strong> misurano visite e utilizzo del sito. La necessità del consenso dipende dalle caratteristiche concrete, dal fornitore, dalla possibilità di identificare gli utenti e dalle misure adottate per ridurre il potere identificativo.</li>
          <li><strong>Strumenti di profilazione o marketing:</strong> osservano comportamenti, preferenze o interessi per personalizzare contenuti o pubblicità. In generale richiedono un consenso preventivo, libero, specifico e revocabile.</li>
        </ul>
        <p>La classificazione dipende dalla funzione effettiva dello strumento, non soltanto dal nome attribuito dal fornitore. Per questo la configurazione deve essere rivalutata ogni volta che vengono aggiunti nuovi servizi o modificati quelli esistenti.</p>
      </section>

      <section>
        <h2>3. Configurazione attuale del sito</h2>
        <p><strong>Fuori Forno non installa intenzionalmente cookie proprietari, cookie analitici o cookie di profilazione.</strong> Il codice del sito non utilizza sistemi di analytics, pixel pubblicitari, mappe incorporate, video provenienti da piattaforme esterne, chat di terze parti, sistemi di remarketing, fingerprinting, archiviazione locale con finalità di tracciamento o pulsanti social che eseguono codice esterno.</p>
        <p>Font, immagini, fogli di stile e video vengono distribuiti come risorse locali del sito. Il caricamento delle pagine non determina quindi una richiesta del browser a Google Fonts, YouTube, Vimeo o servizi analoghi.</p>
        <p>Il semplice accesso può comunque produrre dati tecnici di rete e log presso il fornitore di hosting, come indirizzo IP, data e ora, risorsa richiesta, esito della risposta e informazioni sul browser. Questi trattamenti servono a distribuire il sito, diagnosticare errori e prevenire abusi; non vengono usati da Fuori Forno per costruire profili commerciali dei visitatori.</p>
      </section>

      <section>
        <h2>4. Servizi tecnici e momenti di attivazione</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[48rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-charcoal/20">
                <th className="py-3 pr-4">Servizio</th>
                <th className="py-3 pr-4">Quando si attiva</th>
                <th className="py-3 pr-4">Funzione</th>
                <th className="py-3">Consenso</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-charcoal/10 align-top">
                <td className="py-4 pr-4"><strong>GitHub Pages</strong></td>
                <td className="py-4 pr-4">Durante la normale apertura delle pagine</td>
                <td className="py-4 pr-4">Hosting, distribuzione dei file, sicurezza e log tecnici</td>
                <td className="py-4">Non richiesto per le funzioni strettamente tecniche</td>
              </tr>
              <tr className="border-b border-charcoal/10 align-top">
                <td className="py-4 pr-4"><strong>Google Apps Script e Google Sheets</strong></td>
                <td className="py-4 pr-4">Soltanto quando l’utente invia il modulo di contatto</td>
                <td className="py-4 pr-4">Ricezione della richiesta e archiviazione dei dati nel foglio privato del titolare</td>
                <td className="py-4">Non basato sul consenso cookie; il trattamento è richiesto dall’utente per essere ricontattato</td>
              </tr>
              <tr className="border-b border-charcoal/10 align-top">
                <td className="py-4 pr-4"><strong>Risorse locali</strong></td>
                <td className="py-4 pr-4">Durante il caricamento delle pagine</td>
                <td className="py-4 pr-4">Visualizzazione di font, immagini, video e interfaccia</td>
                <td className="py-4">Non richiesto</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">Consulta la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer">privacy statement di GitHub</a> e le <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">Norme sulla privacy di Google</a> per le informazioni sui trattamenti effettuati direttamente dai fornitori.</p>
      </section>

      <section>
        <h2>5. Modulo di contatto e servizi Google</h2>
        <p>Google Apps Script non viene contattato durante la semplice navigazione. La richiesta al servizio parte soltanto dopo che l’utente compila il modulo, dichiara di aver letto la Privacy policy e seleziona il pulsante di invio.</p>
        <p>Questa operazione non ha finalità pubblicitarie o di analisi della navigazione: serve esclusivamente a consegnare a Fuori Forno i dati necessari per rispondere alla richiesta. Il foglio Google che riceve i dati non è reso pubblico e deve rimanere accessibile esclusivamente agli account autorizzati dal titolare.</p>
        <p>Il trattamento dei dati del modulo è descritto più dettagliatamente nella <Link href="/privacy">Privacy policy</Link>, comprese basi giuridiche, destinatari, conservazione e diritti dell’interessato.</p>
      </section>

      <section>
        <h2>6. Collegamenti a Instagram e altri siti</h2>
        <p>Il sito contiene un collegamento al profilo Instagram di Fuori Forno. Si tratta di un normale link: la pagina di Instagram non viene incorporata e nessun codice del social network viene eseguito mentre l’utente rimane sul sito.</p>
        <p>Se scegli di aprire il collegamento, lasci il sito Fuori Forno e accedi a un servizio esterno che può utilizzare cookie o altri identificatori secondo le proprie impostazioni e informative. Fuori Forno non controlla i cookie installati direttamente dai siti visitati dopo il click.</p>
      </section>

      <section>
        <h2>7. Perché non compare un banner di consenso</h2>
        <p>Nella configurazione attuale non vengono usati cookie o strumenti non tecnici che richiedano una scelta preventiva. Per questo il sito non mostra un banner “Accetta/Rifiuta”: non esiste un trattamento facoltativo da accettare o rifiutare e la comparsa del banner non aggiungerebbe una tutela concreta.</p>
        <p>Le indicazioni del Garante prevedono che, quando vengono utilizzati soltanto strumenti tecnici, l’informazione possa essere resa nella home page o nell’informativa generale senza ricorrere a un banner di consenso. Questa Cookie policy è raggiungibile dal footer di ogni pagina.</p>
        <p>L’assenza del banner non elimina gli obblighi di trasparenza: configurazione, servizi e informative devono restare aggiornati e coerenti con il comportamento effettivo del sito.</p>
      </section>

      <section>
        <h2>8. Quando il banner diventerà necessario</h2>
        <p>La configurazione dovrà essere rivalutata prima di introdurre, a titolo di esempio:</p>
        <ul>
          <li>Google Analytics o altri sistemi di misurazione non configurati in modo strettamente tecnico;</li>
          <li>Meta Pixel, Google Ads, remarketing o strumenti di advertising;</li>
          <li>video YouTube o Vimeo incorporati, mappe, feed social, chat o widget esterni che attivano tracciamenti;</li>
          <li>test comportamentali, personalizzazione basata sulla navigazione o identificatori persistenti;</li>
          <li>qualsiasi nuovo strumento che legga o scriva informazioni nel dispositivo per finalità non necessarie.</li>
        </ul>
        <p>In tali casi gli strumenti non tecnici dovranno rimanere bloccati prima della scelta dell’utente. Il banner dovrà consentire di proseguire senza accettare, accettare o selezionare analiticamente le categorie, e la preferenza dovrà essere registrata e modificabile.</p>
      </section>

      <section>
        <h2>9. Controlli disponibili nel browser</h2>
        <p>Puoi verificare la presenza di cookie e dati dei siti attraverso gli strumenti e le impostazioni del browser. In genere è possibile visualizzare i dati salvati per ciascun dominio, cancellarli alla chiusura, bloccare i cookie di terze parti o impedire completamente l’archiviazione.</p>
        <p>Il blocco generalizzato degli strumenti tecnici può compromettere il funzionamento di alcuni servizi online. Nella configurazione attuale di Fuori Forno, tuttavia, la navigazione delle pagine non dipende da preferenze pubblicitarie o cookie di profilazione.</p>
      </section>

      <section>
        <h2>10. Segnali di controllo della privacy</h2>
        <p>Il sito non effettua vendita o condivisione pubblicitaria dei dati, né utilizza profilazione comportamentale. Di conseguenza segnali come “Do Not Track” o “Global Privacy Control” non modificano la configurazione attuale, perché non esistono strumenti promozionali o analitici facoltativi da disattivare.</p>
      </section>

      <section>
        <h2>11. Titolare, verifiche e aggiornamenti</h2>
        <p>Il titolare e il contatto per richieste relative alla privacy sono indicati nella <Link href="/privacy">Privacy policy</Link>. Puoi scrivere a <a href={`mailto:${legalConfig.privacyEmail}`}>{legalConfig.privacyEmail}</a> per segnalare un comportamento inatteso o chiedere chiarimenti sulle tecnologie utilizzate.</p>
        <p>Questa policy è aggiornata al <strong>{legalConfig.lastUpdated}</strong>. Deve essere verificata sul dominio pubblico dopo ogni deploy e prima dell’attivazione di nuovi servizi, integrazioni o contenuti esterni.</p>
        <p>Riferimenti: <a href="https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876" target="_blank" rel="noreferrer">Linee guida cookie e altri strumenti di tracciamento</a> e <a href="https://www.garanteprivacy.it/faq/cookie" target="_blank" rel="noreferrer">FAQ cookie del Garante per la protezione dei dati personali</a>.</p>
      </section>
    </LegalPage>
  );
}
