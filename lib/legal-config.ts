import { contactConfig } from "@/lib/contact-config";

/**
 * Completa questi dati prima di pubblicare il sito.
 * Sono lasciati vuoti intenzionalmente per non inventare informazioni legali.
 */
export const legalConfig = {
  controllerName: "",
  controllerAddress: "",
  privacyEmail: contactConfig.email,
  vatNumber: "",
  lastUpdated: "24 agosto 2026",
} as const;

export const missingLegalValue = "Da completare prima della pubblicazione";

export const isLegalConfigComplete = Boolean(
  legalConfig.controllerName &&
    legalConfig.controllerAddress &&
    legalConfig.privacyEmail,
);
