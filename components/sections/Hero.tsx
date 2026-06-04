import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";

export function Hero({ content }: { content: HomePageContent["hero"] }) {
  return (
    <section className="relative isolate min-h-[880px] overflow-hidden bg-black/30">
      <div className="absolute inset-0">
        <Image
          src={content.poster.src}
          alt=""
          width={content.poster.width ?? 1365}
          height={content.poster.height ?? 2048}
          priority
          className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-(--background)" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[880px] w-[min(100%-clamp(2.5rem,5vw,5rem),85rem)] grid-rows-[1fr_auto] pt-(--header-offset)">
        <div className="flex items-center">
          <div className="hero-stack max-w-[41rem] space-y-6 pb-16 pt-28 lg:pb-0 lg:pt-14">
            <span className="eyebrow text-white">{content.eyebrow}</span>

            <h1 className="max-w-[41rem] font-(family-name:--font-display) text-[clamp(3.2rem,7vw,6.25rem)] leading-[0.98] text-white">
              {content.title}
            </h1>

            <p className="max-w-[41rem] text-base font-light leading-[1.4] tracking-wide text-white/75 sm:text-lg">
              {content.description}
            </p>

            <div className="flex flex-col items-stretch gap-4 pt-4 sm:flex-row sm:items-center">
              <BookingButton className="btn-primary">
                Reserve a Table
              </BookingButton>
              <Link href={content.secondaryButton.href} className="btn-secondary">
                {content.secondaryButton.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-marquee mb-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 bg-[#5a2609]/80 px-6 py-7 text-sm uppercase text-white backdrop-blur-md lg:mx-10">
          <span className="font-(family-name:--font-display) text-4xl leading-none">4.8</span>
          <span className="h-4 w-px bg-white/30" />
          <span className="tracking-wide">Google Ratings</span>
          <span className="hidden size-2 rounded-full bg-(--accent-gold) sm:block" />
          <span className="font-(family-name:--font-display) text-4xl leading-none">200+</span>
          <span className="h-4 w-px bg-white/30" />
          <span className="tracking-wide">Verified Reviews</span>
          <span className="hidden size-2 rounded-full bg-(--accent-gold) sm:block" />
          <span className="font-(family-name:--font-display) text-4xl leading-none">#1</span>
          <span className="h-4 w-px bg-white/30" />
          <span className="tracking-wide">Sushi Speakeasy SoBe</span>
        </div>
      </div>
    </section>
  );
}
