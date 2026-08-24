export const contactConfig = {
  email: "",
  phone: "",
  whatsapp: "",
  instagram: "https://www.instagram.com/fuoriforno/",
} as const;

const defaultContactEndpoint =
  "https://script.google.com/macros/s/AKfycbwo5EkbX2U5DNylyGTsCMRB0a0crGXqbGTs-F1SjlQ6po25IY5GUy-p8Jiyq12RqG7psw/exec";

export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || defaultContactEndpoint;
