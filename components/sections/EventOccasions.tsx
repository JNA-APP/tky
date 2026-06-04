import Image from "next/image";
import Link from "next/link";

import { AccordionGroup, AccordionItem } from "@/components/ui/Accordion";
import { BookingButton } from "@/components/ui/ReservationModal";
import { eventOccasions } from "@/lib/site";

export function EventOccasions() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">Host your night the Tokyo way</span>
          <h2 className="section-title">Built for celebrations, group plans, and after-dark momentum.</h2>
          <p className="section-copy">
            Open the occasion that matches the night you are planning.
          </p>
          <AccordionGroup defaultValue={eventOccasions[0]?.title ?? null}>
            <div>
              {eventOccasions.map((occasion) => (
                <AccordionItem
                  key={occasion.title}
                  value={occasion.title}
                  title={occasion.title}
                >
                  <p className="text-base leading-8 text-stone-400">{occasion.description}</p>
                </AccordionItem>
              ))}
            </div>
          </AccordionGroup>
          <div className="flex flex-wrap gap-4 pt-4">
            <BookingButton className="btn-primary">
              Reserve Now
            </BookingButton>
            <Link href="/contact" className="btn-secondary">
              Plan Your Night
            </Link>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/25">
          <Image
            src="/pictures/GoldRoll Mainpage.png"
            alt="Tokyo Gold Roll with 24K gold leaf revealed under a glass dome with dramatic smoke."
            width={1365}
            height={2048}
            className="media-lift aspect-4/5 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/72 to-transparent p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-(--accent-gold)">
              Group planning made easy
            </p>
            <p className="mt-4 max-w-md text-3xl font-semibold leading-tight text-stone-100">
              Start with dinner. Let the night expand from there.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
