import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ProcessSection />
        <GamesSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
