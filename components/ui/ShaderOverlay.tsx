"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";

export function ShaderOverlay() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="absolute inset-0 bg-fire/8" aria-hidden="true" />;
  }

  return (
    <div className="pointer-events-none absolute inset-0 hidden opacity-[0.2] mix-blend-soft-light sm:block" aria-hidden="true">
      <MeshGradient
        className="size-full"
        colors={["#000000", "#E9422E", "#FF6B2C", "#F2E8D5", "#52683F"]}
        speed={0.18}
        distortion={0.72}
        swirl={0.22}
        maxPixelCount={420000}
      />
    </div>
  );
}
