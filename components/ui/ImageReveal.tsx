"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type ImageRevealProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function ImageReveal({ src, alt, sizes, className = "", priority = false }: ImageRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0, 1], scale: [1.025, 1] }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </motion.div>
  );
}
