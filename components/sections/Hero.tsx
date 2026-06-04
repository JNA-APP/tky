import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import { heroGallery, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate h-dvh overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/videos/Tokyo%20Video.MOV"
          poster={heroGallery[0].src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(166,30,45,0.22),transparent_32%),linear-gradient(180deg,rgba(8,8,9,0.12),rgba(8,8,10,0.68)_48%,rgba(8,8,10,0.96))]" />
      </div>

      <div className="relative z-10 mx-auto grid h-full w-[min(100%-clamp(2.75rem,6vw,7rem),80rem)] grid-rows-[1fr_auto] pt-(--header-offset) lg:grid-cols-[1fr_0.85fr] lg:gap-10">
        <div className="flex items-center">
          <div className="hero-stack max-w-2xl space-y-7 py-10 lg:py-0">
            <span className="eyebrow">Japanese speakeasy meets Miami nightlife</span>

            <h1 className="section-title max-w-xl">
              South Beach&apos;s late-night sushi ritual.
            </h1>

            <p className="section-copy text-stone-200">
              Premium sushi, sculpted cocktails, moody lighting, and a room
              built for date nights, celebrations, and unforgettable after-dark plans.
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-1 sm:flex-row sm:items-center lg:items-start">
              <BookingButton className="btn-primary">
                Book a Table
              </BookingButton>
              <Link href="/menu" className="btn-secondary">
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden min-h-0 items-center py-4 lg:flex">
          <div className="gold-frame floating-media max-h-full w-full overflow-hidden rounded-4xl border border-white/12 bg-black/25 p-3.5">
            <div className="h-full overflow-hidden rounded-[1.4rem] border border-white/10">
              <Image
                src={heroGallery[1].src}
                alt={heroGallery[1].alt}
                width={heroGallery[1].width}
                height={heroGallery[1].height}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="hero-marquee col-span-full flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 py-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-stone-300">
          <span className="text-(--accent-gold)">4.8 Google Rating</span>
          <span>200+ Reviews</span>
          <span>1000 Collins Ave</span>
          <span>{siteConfig.hours}</span>
        </div>
      </div>
    </section>
  );
}
