import { contactEndpoint } from "@/lib/contact-config";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  date: string;
  location: string;
  guests: string;
  eventType: string;
  message: string;
  privacy: boolean;
  website: string;
};

type ContactResponse = {
  ok?: boolean;
  message?: string;
};

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (!contactEndpoint) {
    throw new Error(
      "Il modulo è pronto, ma manca ancora un endpoint di invio. Configura NEXT_PUBLIC_CONTACT_ENDPOINT.",
    );
  }

  const body = new URLSearchParams();
  Object.entries(payload).forEach(([key, value]) => {
    body.set(key, String(value));
  });

  const response = await fetch(contactEndpoint, {
    method: "POST",
    body,
  });

  if (!response.ok) {
    throw new Error("Invio non riuscito. Riprova o usa uno dei contatti disponibili.");
  }

  const result = (await response.json()) as ContactResponse;
  if (!result.ok) {
    throw new Error(result.message || "Invio non riuscito. Controlla i dati e riprova.");
  }
}
