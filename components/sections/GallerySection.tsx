"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { MobileHorizontalCarousel } from "@/components/ui/MobileHorizontalCarousel";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { gallery } from "@/data/gallery";
import { withBasePath } from "@/lib/site-path";

const mobileGalleryItems = [
  ...gallery.map((item) => ({ kind: "image" as const, item })),
  { kind: "video" as const },
];

export function GallerySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="overflow-hidden bg-dough px-5 py-24 text-charcoal sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="07">Dal vivo</SectionLabel>
            <AnimatedHeading className="mt-6 text-[clamp(3.8rem,8vw,8.8rem)] font-semibold leading-[0.86] tracking-[-0.07em]">
              Farina. Brace.
              <span className="block font-serif font-normal italic text-tomato">Persone.</span>
            </AnimatedHeading>
          </div>
          <p className="max-w-sm text-sm leading-6 text-charcoal/55">Dettagli piccoli, tavolate lunghe e quel momento in cui la prima pizza esce dal forno.</p>
        </div>

        <div className="mt-12 md:hidden">
          <MobileHorizontalCarousel
            items={mobileGalleryItems}
            itemClassName="w-[78vw] max-w-[78vw]"
            ariaLabel="Galleria dal vivo Fuori Forno"
            tone="tomato"
            renderItem={(galleryItem, index, isActive, parallaxX) => {
              if (galleryItem.kind === "video") {
                return (
                  <figure>
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-charcoal">
                      <video
                        className="size-full object-cover"
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={withBasePath("/images/gallery/gallery-04.webp")}
                        aria-label="Clip dell’esperienza Fuori Forno, da sostituire con il video definitivo"
                      >
                        <source src={withBasePath("/videos/gallery/gallery-01.mp4")} type="video/mp4" />
                      </video>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/15" />
                      <span className="absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">Clip da fornire</span>
                      <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-xs text-white/78">
                        <span>Il movimento vero entrerà qui.</span>
                        <span className="font-serif text-2xl italic text-fire">0{index + 1}</span>
                      </figcaption>
                    </div>
                  </figure>
                );
              }

              const { item } = galleryItem;
              return (
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-charcoal/5">
                    <motion.div
                      className="absolute -inset-x-3 inset-y-0"
                      style={{ x: reduceMotion ? 0 : parallaxX }}
                      animate={{ scale: reduceMotion || !isActive ? 1 : 1.025 }}
                      transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image src={item.src} alt={item.alt} fill sizes="78vw" draggable={false} className="object-cover" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-transparent to-black/10" />
                    <motion.figcaption
                      className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-xs text-white/82"
                      animate={reduceMotion ? { opacity: 1, y: 0 } : { opacity: isActive ? 1 : 0.58, y: isActive ? 0 : 8 }}
                      transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
                    >
                      <span>{item.caption}</span>
                      <span className="font-serif text-2xl italic text-fire">0{index + 1}</span>
                    </motion.figcaption>
                  </div>
                </figure>
              );
            }}
          />
        </div>

        <div className="hidden md:block">
          <div className="gallery-grid mt-16 lg:mt-24">
            {gallery.map((item, index) => (
              <figure key={item.src} className={`gallery-item gallery-item--${item.shape}`}>
                <div className="relative h-full min-h-72 overflow-hidden rounded-[1.5rem] bg-charcoal/5">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 55vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-charcoal/55">
                  <span>{item.caption}</span>
                  <span className="font-serif text-lg italic text-tomato">0{index + 1}</span>
                </figcaption>
              </figure>
            ))}
            <figure className="gallery-item gallery-item--video">
              <div className="relative h-full min-h-80 overflow-hidden rounded-[1.5rem] bg-charcoal">
                <video
                  className="size-full min-h-80 object-cover"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={withBasePath("/images/gallery/gallery-04.webp")}
                  aria-label="Clip dell’esperienza Fuori Forno, da sostituire con il video definitivo"
                >
                  <source src={withBasePath("/videos/gallery/gallery-01.mp4")} type="video/mp4" />
                </video>
                <span className="absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">Clip da fornire</span>
              </div>
              <figcaption className="mt-3 text-xs text-charcoal/55">Il movimento vero entrerà qui.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
