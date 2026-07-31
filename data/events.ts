export type EventItem = {
  name: string;
  image: string;
};

export const events: EventItem[] = [
  { name: "Matrimoni", image: withBasePath("/images/events/matrimoni.webp") },
  { name: "Feste private", image: withBasePath("/images/events/feste-private.webp") },
  { name: "Compleanni", image: withBasePath("/images/events/aziendali.webp") },
  { name: "Eventi aziendali", image: withBasePath("/images/events/matrimoni.webp") },
  { name: "Festival", image: withBasePath("/images/events/feste-private.webp") },
  { name: "Inaugurazioni", image: withBasePath("/images/events/aziendali.webp") },
];
import { withBasePath } from "@/lib/site-path";
