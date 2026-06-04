"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import { experiencePillars } from "@/lib/site";

const AUTOPLAY_MS = 5000;

export function ExperienceStory() {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = experiencePillars.length;

  const go = useCallback(
    (next: number) => {
      if (next === active || isTransitioning) return;
      setIsTransitioning(true);
      setActive(next);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [active, isTransitioning],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % count);
    }, AUTOPLAY_MS);
  }, [count]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, resetTimer]);

  const getPosition = (index: number) => {
    if (index === active) return "center";
    const diff = (index - active + count) % count;
    return diff === 1 ? "right" : "left";
  };

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid gap-12 border-t border-white/8 pt-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
          {/* Text panel — title & body crossfade based on active slide */}
          <div className="space-y-5">
            <span className="eyebrow">The ultimate sushi speakeasy in South Beach</span>

            <div className="relative min-h-28">
              {experiencePillars.map((pillar, i) => (
                <h2
                  key={pillar.title}
                  className={`section-title transition-all duration-500 ${
                    i === active
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0 translate-y-3"
                  }`}
                >
                  {pillar.title}
                </h2>
              ))}
            </div>

            <div className="relative min-h-36">
              {experiencePillars.map((pillar, i) => (
                <p
                  key={pillar.title}
                  className={`section-copy transition-all duration-500 ${
                    i === active
                      ? "relative opacity-100"
                      : "pointer-events-none absolute inset-0 opacity-0 translate-y-2"
                  }`}
                >
                  {pillar.body}
                </p>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-3 pt-2">
              {experiencePillars.map((pillar, i) => (
                <button
                  key={pillar.title}
                  type="button"
                  aria-label={`Show: ${pillar.title}`}
                  onClick={() => go(i)}
                  className={`carousel-dot ${i === active ? "carousel-dot-active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* 3D stacked carousel */}
          <div className="carousel-stage">
            {experiencePillars.map((pillar, i) => {
              const position = getPosition(i);
              return (
                <button
                  key={pillar.title}
                  type="button"
                  aria-label={`Select: ${pillar.title}`}
                  onClick={() => go(i)}
                  className={`carousel-card carousel-card-${position}`}
                >
                  <Image
                    src={pillar.image.src}
                    alt={pillar.image.alt}
                    width={pillar.image.width}
                    height={pillar.image.height}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/30 to-transparent p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-gold)">
                      {pillar.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
