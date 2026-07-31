"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedHeading({ children, className = "" }: AnimatedHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.h2
      className={className}
      initial={false}
      whileInView={reduceMotion ? undefined : { opacity: [0, 1], y: [30, 0] }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.h2>
  );
}
