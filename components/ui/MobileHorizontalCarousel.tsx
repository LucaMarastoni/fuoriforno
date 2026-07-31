"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
  type PanInfo,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type MobileHorizontalCarouselProps<T> = {
  items: readonly T[];
  renderItem: (
    item: T,
    index: number,
    isActive: boolean,
    parallaxX: MotionValue<number>,
  ) => ReactNode;
  itemClassName: string;
  ariaLabel: string;
  hint?: string;
  tone?: "fire" | "tomato";
};

type MobileCarouselSlideProps<T> = {
  item: T;
  index: number;
  total: number;
  active: boolean;
  itemClassName: string;
  reduceMotion: boolean;
  renderItem: MobileHorizontalCarouselProps<T>["renderItem"];
  onSwipe: (index: number, direction: -1 | 1) => void;
};

function MobileCarouselSlide<T>({
  item,
  index,
  total,
  active,
  itemClassName,
  reduceMotion,
  renderItem,
  onSwipe,
}: MobileCarouselSlideProps<T>) {
  const dragX = useMotionValue(0);
  const parallaxX = useTransform(dragX, [-80, 80], [8, -8]);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 42 && Math.abs(info.velocity.x) < 320) return;
    onSwipe(index, info.offset.x < 0 ? 1 : -1);
  };

  return (
    <motion.article
      data-carousel-item
      className={`shrink-0 snap-center select-none ${itemClassName}`}
      style={{ x: dragX }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={reduceMotion ? 0 : 0.14}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      animate={
        reduceMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : active
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0.6, scale: 0.94, y: 10 }
      }
      transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`${index + 1} di ${total}`}
      aria-current={active ? "true" : undefined}
    >
      {renderItem(item, index, active, parallaxX)}
    </motion.article>
  );
}

export function MobileHorizontalCarousel<T>({
  items,
  renderItem,
  itemClassName,
  ariaLabel,
  hint,
  tone = "fire",
}: MobileHorizontalCarouselProps<T>) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const updateActiveIndex = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const slides = Array.from(carousel.querySelectorAll<HTMLElement>("[data-carousel-item]"));

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;
    slides.forEach((slide, index) => {
      const slideRect = slide.getBoundingClientRect();
      const distance = Math.abs(slideRect.left + slideRect.width / 2 - carouselCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const scheduleActiveIndexUpdate = useCallback(() => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      updateActiveIndex();
    });
  }, [updateActiveIndex]);

  const goTo = useCallback(
    (index: number) => {
      const carousel = carouselRef.current;
      if (!carousel) return;
      const safeIndex = Math.max(0, Math.min(items.length - 1, index));
      const slide = carousel.querySelectorAll<HTMLElement>("[data-carousel-item]").item(safeIndex);
      const left = slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2;
      carousel.scrollTo({ left, behavior: shouldReduceMotion ? "auto" : "smooth" });
      setActiveIndex(safeIndex);
    },
    [items.length, shouldReduceMotion],
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const observer = new ResizeObserver(scheduleActiveIndexUpdate);
    observer.observe(carousel);
    scheduleActiveIndexUpdate();
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, [scheduleActiveIndexUpdate]);

  const indicatorColor = tone === "tomato" ? "bg-tomato" : "bg-fire";

  return (
    <div className="md:hidden">
      <div
        ref={carouselRef}
        className="mobile-carousel-track no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fire sm:-mx-8 sm:px-8"
        role="region"
        aria-roledescription="carosello"
        aria-label={ariaLabel}
        tabIndex={0}
        onScroll={scheduleActiveIndexUpdate}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(activeIndex + 1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(activeIndex - 1);
          }
        }}
      >
        {items.map((item, index) => (
          <MobileCarouselSlide
            key={index}
            item={item}
            index={index}
            total={items.length}
            active={activeIndex === index}
            itemClassName={itemClassName}
            reduceMotion={shouldReduceMotion}
            renderItem={renderItem}
            onSwipe={(currentIndex, direction) => goTo(currentIndex + direction)}
          />
        ))}
      </div>

      <div className="mt-1 flex items-center gap-4" aria-hidden="true">
        <span className="min-w-12 font-serif text-lg italic tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <div className="relative h-px flex-1 overflow-hidden bg-current/18">
          <span
            className={`absolute inset-y-0 left-0 ${indicatorColor} transition-transform duration-300`}
            style={{
              width: `${100 / items.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
              transitionDuration: shouldReduceMotion ? "0.01ms" : undefined,
            }}
          />
        </div>
        {hint ? <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] opacity-45">{hint}</span> : null}
      </div>
    </div>
  );
}
