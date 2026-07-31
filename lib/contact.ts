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
};

export async function submitContactForm(payload: ContactPayload): Promise<void> {
  if (!contactEndpoint) {
    throw new Error(
      "Il modulo è pronto, ma manca ancora un endpoint di invio. Configura NEXT_PUBLIC_CONTACT_ENDPOINT.",
    );
  }

  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Invio non riuscito. Riprova o usa uno dei contatti disponibili.");
  }
}
