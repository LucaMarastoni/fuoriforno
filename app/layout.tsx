import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { withBasePath } from "@/lib/site-path";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteOrigin = new URL(siteUrl).origin;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Fuori Forno | Pizza napoletana per eventi",
  description: "Fuori Forno porta forno, pizza napoletana e intrattenimento direttamente al tuo evento.",
  openGraph: {
    title: "Fuori Forno | Pizza napoletana per eventi",
    description: "Forno, pizza napoletana e intrattenimento direttamente al tuo evento.",
    type: "website",
    locale: "it_IT",
    images: [{ url: withBasePath("/images/fuori-forno-poster.webp"), width: 1920, height: 1080, alt: "Fuori Forno durante un evento" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuori Forno | Pizza napoletana per eventi",
    description: "Forno, pizza napoletana e intrattenimento direttamente al tuo evento.",
    images: [withBasePath("/images/fuori-forno-poster.webp")],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0B09",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
