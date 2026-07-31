"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { withBasePath } from "@/lib/site-path";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      videoRef.current?.pause();
    }
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 bg-charcoal" aria-hidden="true">
      <Image
        src={withBasePath("/images/fuori-forno-poster.webp")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      {!reduceMotion && !videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 size-full object-cover object-[62%_center]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={withBasePath("/images/fuori-forno-poster.webp")}
          onError={() => setVideoFailed(true)}
        >
          <source src={withBasePath("/videos/hero.mp4")} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
