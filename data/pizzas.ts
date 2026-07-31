export type Pizza = {
  name: string;
  category: string;
  description: string;
  ingredients: string;
  image: string;
};

export const pizzaCategories = [
  "Le intramontabili",
  "Le stagionali",
  "Le speciali Fuori Forno",
  "Proposte vegetariane",
  "Esigenze alimentari",
] as const;

// TODO: esempi visivi da sostituire con la proposta gastronomica reale.
export const pizzas: Pizza[] = [
  {
    name: "La classica",
    category: "Proposta indicativa 01",
    description: "Equilibrio, semplicità e cornicione vivo.",
    ingredients: "Ingredienti da definire con il cliente",
    image: withBasePath("/images/pizzas/margherita.webp"),
  },
  {
    name: "La stagione",
    category: "Proposta indicativa 02",
    description: "Una pizza che segue il momento e il territorio.",
    ingredients: "Ingredienti da definire con il cliente",
    image: withBasePath("/images/pizzas/stagionale.webp"),
  },
  {
    name: "La Fuori Forno",
    category: "Proposta indicativa 03",
    description: "La firma dell’evento, costruita insieme.",
    ingredients: "Ingredienti da definire con il cliente",
    image: withBasePath("/images/pizzas/speciale.webp"),
  },
];
import { withBasePath } from "@/lib/site-path";
