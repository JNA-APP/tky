import Image from "next/image";
import Link from "next/link";

import { AccordionGroup, AccordionItem } from "@/components/ui/Accordion";
import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";
import { eventOccasions } from "@/lib/site";

export function EventOccasions({ content }: { content: HomePageContent["events"] }) {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-copy">
            {content.description}
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
              {content.primaryButtonLabel}
            </BookingButton>
            <Link href={content.secondaryButton.href} className="btn-secondary">
              {content.secondaryButton.label}
            </Link>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-4xl border border-white/10 bg-black/25">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={content.image.width ?? 1365}
            height={content.image.height ?? 2048}
            className="media-lift aspect-4/5 h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/72 to-transparent p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-(--accent-gold)">
              {content.imageEyebrow}
            </p>
            <p className="mt-4 max-w-md text-3xl font-semibold leading-tight text-stone-100">
              {content.imageTitle}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
