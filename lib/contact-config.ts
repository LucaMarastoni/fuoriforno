export const contactConfig = {
  email: "",
  phone: "",
  whatsapp: "",
  instagram: "https://www.instagram.com/fuoriforno/",
} as const;

export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
