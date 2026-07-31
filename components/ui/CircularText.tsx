"use client";

import { PulsingBorder } from "@paper-design/shaders-react";
import { motion, useReducedMotion } from "framer-motion";

export function CircularText() {
  const reduceMotion = useReducedMotion();

  return (
    <a
      href="#manifesto"
      aria-label="Vai alla sezione manifesto"
      className="group relative hidden size-28 place-items-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-fire md:grid"
    >
      <PulsingBorder
        colors={["#E9422E", "#FF6B2C", "#F2E8D5"]}
        colorBack="#00000000"
        speed={reduceMotion ? 0 : 0.8}
        roundness={1}
        thickness={0.1}
        softness={0.3}
        intensity={2}
        spots={3}
        spotSize={0.14}
        pulse={0.08}
        smoke={0.18}
        smokeSize={2}
        scale={0.7}
        rotation={0}
        className="absolute inset-7 rounded-full"
      />
      <motion.svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path id="fuori-forno-circle" d="M 50,50 m -39,0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0" />
        </defs>
        <text className="fill-white text-[8px] font-bold tracking-[0.12em]">
          <textPath href="#fuori-forno-circle">PIZZA • FORNO • GIOCHI • EVENTI • </textPath>
        </text>
      </motion.svg>
      <span aria-hidden="true" className="text-xl transition-transform duration-300 group-hover:translate-y-1">
        ↓
      </span>
    </a>
  );
}
