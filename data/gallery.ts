export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  shape: "wide" | "tall" | "square";
};

export const gallery: GalleryItem[] = [
  {
    src: withBasePath("/images/gallery/gallery-01.webp"),
    alt: "Forno mobile acceso durante un evento serale",
    caption: "Il calore arriva prima della pizza.",
    shape: "wide",
  },
  {
    src: withBasePath("/images/gallery/gallery-02.webp"),
    alt: "Impasto steso a mano davanti agli invitati",
    caption: "Farina, mani, ritmo.",
    shape: "tall",
  },
  {
    src: withBasePath("/images/gallery/gallery-03.webp"),
    alt: "Pizza napoletana appena sfornata",
    caption: "Pochi minuti. Tutto il momento.",
    shape: "square",
  },
  {
    src: withBasePath("/images/gallery/gallery-04.webp"),
    alt: "Invitati raccolti attorno alla preparazione",
    caption: "Intorno al forno succede il resto.",
    shape: "wide",
  },
];
import { withBasePath } from "@/lib/site-path";
