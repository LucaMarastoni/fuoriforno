import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { PizzaSection } from "@/components/sections/PizzaSection";
import { ProcessSection } from "@/components/sections/ProcessSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ExperienceSection />
        <ProcessSection />
        <FoundersSection />
        <PizzaSection />
        <GamesSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
