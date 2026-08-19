# Fuori Forno

Homepage editoriale per il servizio itinerante Fuori Forno, costruita con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion e Paper Shaders.

## Avvio locale

```bash
npm install
npm run dev
```

Controlli disponibili:

```bash
npm run typecheck
npm run lint
npm run build
```

## Asset da fornire

Le immagini WebP presenti sono visual temporanei originali e possono essere sostituite mantenendo gli stessi nomi. I video non sono inclusi: il poster statico evita rotture mentre vengono preparati.

- `public/videos/hero.mp4` — video Hero attualmente utilizzato
- `public/videos/fuori-forno-hero-mobile.mp4` — eventuale versione mobile più leggera futura
- `public/videos/gallery/gallery-01.mp4` — clip breve per la galleria
- `public/images/fuori-forno-poster.webp` — poster e fallback Hero
- `public/images/logo-fuori-forno-*.png` — varianti ottimizzate del logo usate dal sito
- `public/images/experience/` — forno, impasto, pizza, evento
- `public/images/gallery/` — galleria editoriale
- `public/images/events/` — tipologie di evento

Per il video Hero usare MP4/H.264 senza audio, durata breve, loop pulito e una versione mobile compressa. Evitare file molto grandi perché il video non deve rallentare il primo rendering.

## Contenuti e integrazioni

- Configurare email, telefono, WhatsApp e Instagram in `lib/contact-config.ts`; i link vuoti non vengono mostrati.
- Configurare `NEXT_PUBLIC_CONTACT_ENDPOINT` per abilitare l’invio reale del form. Senza endpoint il form mostra esplicitamente che l’integrazione manca e non simula un successo.
- Impostare `NEXT_PUBLIC_SITE_URL` con il dominio reale per i metadata social.
- Completare nome, indirizzo, email privacy ed eventuale Partita IVA in `lib/legal-config.ts`, quindi far validare Privacy policy e Cookie policy sul caso concreto.

Il file `.env.example` elenca le variabili previste.

## Pubblicazione su GitHub Pages

Il progetto usa l’export statico di Next.js e genera il sito nella cartella `out/`. Il workflow `.github/workflows/deploy-pages.yml` esegue automaticamente build e deploy a ogni push su `main` e legge URL pubblico e `basePath` direttamente dalla configurazione GitHub Pages. In questo modo funziona sia su un URL come `https://utente.github.io/fuoriforno/` sia su un dominio personalizzato alla radice.

1. Crea un repository GitHub e collega questa cartella:

   ```bash
   git init -b main
   git add .
   git commit -m "Prepare Fuori Forno for GitHub Pages"
   git remote add origin git@github.com:UTENTE/NOME-REPOSITORY.git
   git push -u origin main
   ```

2. Nel repository apri **Settings → Pages → Build and deployment → Source** e seleziona **GitHub Actions**.
3. Apri la tab **Actions** e verifica il workflow “Deploy Fuori Forno to GitHub Pages”.

Per un dominio personalizzato, configurarlo in **Settings → Pages → Custom domain**. Il workflow rileva automaticamente URL e percorso corretti tramite `actions/configure-pages`. Le variabili Actions `SITE_URL` e `PAGES_BASE_PATH` restano disponibili soltanto come override espliciti.

Prima del primo deploy pubblico:

- completa `lib/legal-config.ts` e `lib/contact-config.ts`;
- se attivi il form, aggiorna la Privacy policy indicando il provider scelto;
- verifica sul dominio pubblicato che non vengano aggiunti strumenti di tracciamento non descritti nella Cookie policy;
- verifica in GitHub Pages che il dominio personalizzato risulti attivo e abilita HTTPS appena disponibile.
