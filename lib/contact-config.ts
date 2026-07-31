export const contactConfig = {
  email: "",
  phone: "",
  whatsapp: "",
  instagram: "",
} as const;

export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
