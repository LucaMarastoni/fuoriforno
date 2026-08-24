import { contactConfig } from "@/lib/contact-config";

export const legalConfig = {
  controllerName: "Riccardo Agostini",
  controllerAddress: "",
  privacyEmail: contactConfig.email,
  vatNumber: "",
  lastUpdated: "24 agosto 2026",
} as const;

export const missingLegalValue = "Da completare prima della pubblicazione";

export const isLegalConfigComplete = Boolean(
  legalConfig.controllerName &&
    legalConfig.privacyEmail,
);
