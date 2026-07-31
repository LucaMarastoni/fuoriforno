"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { CircularText } from "@/components/ui/CircularText";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ShaderOverlay } from "@/components/ui/ShaderOverlay";
import { VideoBackground } from "@/components/ui/VideoBackground";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const controls = useAnimationControls();

  useEffect(() => {
    if (reduceMotion) return;
    controls.set("hidden");
    void controls.start("visible");
  }, [controls, reduceMotion]);

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-charcoal text-white">
      <VideoBackground />
      <ShaderOverlay />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(11,11,9,.84)_0%,rgba(11,11,9,.38)_55%,rgba(11,11,9,.15)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(11,11,9,.92)_0%,transparent_58%,rgba(11,11,9,.4)_100%)]" />
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1600px] items-end justify-between gap-10 px-5 pb-8 pt-36 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12"
        variants={reduceMotion ? undefined : staggerContainer}
        initial="visible"
        animate={reduceMotion ? "visible" : controls}
      >
        <div className="max-w-5xl">
          <motion.h1 variants={reduceMotion ? undefined : fadeUp} className="max-w-5xl text-[clamp(3.25rem,9.2vw,9.2rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-white">
            Portiamo il forno.
            <span className="mt-2 block font-serif font-normal italic tracking-[-0.045em] text-dough">Accendiamo la festa.</span>
          </motion.h1>
          <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-7 flex max-w-3xl flex-wrap gap-3">
              <PrimaryButton href="#contatti">Portaci al tuo evento</PrimaryButton>
              <PrimaryButton href="#esperienza" variant="outline">Scopri l’esperienza</PrimaryButton>
          </motion.div>
        </div>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="shrink-0">
          <CircularText />
        </motion.div>
      </motion.div>
      <span className="absolute bottom-4 right-5 z-10 text-[0.62rem] uppercase tracking-[0.2em] text-white/35 md:hidden">Scorri ↓</span>
    </section>
  );
}
