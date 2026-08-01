"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { submitContactForm, type ContactPayload } from "@/lib/contact";

type FormErrors = Partial<Record<keyof ContactPayload, string>>;

const initialForm: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  date: "",
  location: "",
  guests: "",
  eventType: "",
  message: "",
  privacy: false,
};

function validate(values: ContactPayload): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) errors.name = "Inserisci il tuo nome.";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Inserisci un indirizzo email valido.";
  if (!values.location.trim()) errors.location = "Indica la località dell’evento.";
  if (!values.guests || Number(values.guests) < 1) errors.guests = "Indica un numero di invitati valido.";
  if (!values.eventType) errors.eventType = "Seleziona una tipologia di evento.";
  if (values.message.trim().length < 10) errors.message = "Raccontaci qualcosa in più (almeno 10 caratteri).";
  if (!values.privacy) errors.privacy = "Conferma di aver letto l’informativa privacy.";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = <K extends keyof ContactPayload>(field: K, value: ContactPayload[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Controlla i campi evidenziati e riprova.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Invio in corso…");
    try {
      await submitContactForm(form);
      setStatus("success");
      setStatusMessage("Richiesta inviata. Ti ricontatteremo presto.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Invio non riuscito.");
    }
  };

  const fieldClass = "mt-2 min-h-12 w-full rounded-xl border border-white/16 bg-white/[0.045] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-fire";

  return (
    <section id="contatti" className="scroll-mt-24 bg-charcoal px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="rounded-[2rem] bg-tomato/[0.09] px-5 py-12 ring-1 ring-tomato/20 sm:px-10 lg:px-14 lg:py-16">
          <SectionLabel index="07" light>Portaci al tuo evento</SectionLabel>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <AnimatedHeading className="max-w-5xl text-[clamp(3.5rem,7.4vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Hai un evento in mente?
              <span className="block font-serif font-normal italic text-fire">Noi portiamo il forno.</span>
            </AnimatedHeading>
            <p className="max-w-md text-base leading-7 text-white/58 lg:justify-self-end">Raccontaci quando, dove e con chi vuoi festeggiare.</p>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-fire">Parliamo del tuo evento</p>
            <h3 className="mt-5 max-w-md text-4xl font-semibold leading-[1.02] tracking-[-0.045em]">Poche informazioni per iniziare a immaginare tutto il resto.</h3>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/48">
              Nessun preventivo automatico: ogni proposta nasce dal luogo, dal numero di persone e dal tipo di atmosfera che vuoi creare.
            </p>
            <div className="mt-12 border-l border-fire pl-5">
              <p className="font-serif text-2xl italic text-dough">Il form è pronto per essere collegato al provider scelto.</p>
              <p className="mt-2 text-xs leading-5 text-white/40">Finché non viene configurato un endpoint, nessuna richiesta viene simulata o persa silenziosamente.</p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate aria-label="Richiesta informazioni evento" className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Nome" error={errors.name} required>
              <input id="name" name="name" autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
            </Field>
            <Field id="email" label="Email" error={errors.email} required>
              <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
            </Field>
            <Field id="phone" label="Telefono" hint="Opzionale">
              <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} className={fieldClass} />
            </Field>
            <Field id="date" label="Data indicativa">
              <input id="date" name="date" type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} className={fieldClass} />
            </Field>
            <Field id="location" label="Località" error={errors.location} required>
              <input id="location" name="location" autoComplete="address-level2" value={form.location} onChange={(event) => updateField("location", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} />
            </Field>
            <Field id="guests" label="Numero di invitati" error={errors.guests} required>
              <input id="guests" name="guests" type="number" min="1" inputMode="numeric" value={form.guests} onChange={(event) => updateField("guests", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.guests)} aria-describedby={errors.guests ? "guests-error" : undefined} />
            </Field>
            <Field id="eventType" label="Tipologia di evento" error={errors.eventType} required className="sm:col-span-2">
              <select id="eventType" name="eventType" value={form.eventType} onChange={(event) => updateField("eventType", event.target.value)} className={fieldClass} aria-invalid={Boolean(errors.eventType)} aria-describedby={errors.eventType ? "eventType-error" : undefined}>
                <option value="" className="text-charcoal">Seleziona</option>
                {['Matrimonio', 'Festa privata', 'Compleanno', 'Evento aziendale', 'Festival', 'Inaugurazione', 'Altro'].map((eventType) => <option key={eventType} value={eventType} className="text-charcoal">{eventType}</option>)}
              </select>
            </Field>
            <Field id="message" label="Messaggio" error={errors.message} required className="sm:col-span-2">
              <textarea id="message" name="message" rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} className={fieldClass} placeholder="Raccontaci l’atmosfera che immagini…" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
            </Field>
            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-white/58" htmlFor="privacy">
                <input id="privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={(event) => updateField("privacy", event.target.checked)} className="mt-1 size-4 accent-tomato" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? "privacy-error" : undefined} />
                <span>
                  Dichiaro di aver letto la <Link href="/privacy" target="_blank" className="font-semibold text-fire underline underline-offset-2">Privacy policy</Link>.
                </span>
              </label>
              {errors.privacy ? <p id="privacy-error" className="mt-2 text-xs text-fire" role="alert">{errors.privacy}</p> : null}
            </div>
            <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" disabled={status === "loading"} className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-tomato px-7 text-sm font-bold text-white transition-colors hover:bg-fire disabled:cursor-wait disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fire">
                {status === "loading" ? "Invio…" : "Parliamo del tuo evento"}
                <span aria-hidden="true">↗</span>
              </button>
              <p className={`max-w-md text-xs leading-5 ${status === "success" ? "text-dough" : status === "error" ? "text-fire" : "text-white/38"}`} aria-live="polite" role="status">
                {statusMessage || "I campi contrassegnati sono obbligatori."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

function Field({ id, label, hint, error, required, className = "", children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.13em] text-white/65">
        <span>{label}{required ? <span className="ml-1 text-fire" aria-hidden="true">*</span> : null}</span>
        {hint ? <span className="font-normal normal-case tracking-normal text-white/28">{hint}</span> : null}
      </label>
      {children}
      {error ? <p id={`${id}-error`} className="mt-2 text-xs text-fire" role="alert">{error}</p> : null}
    </div>
  );
}
