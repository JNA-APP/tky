import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";
import { eventOccasions } from "@/lib/site";

const eventImages = [
  "/pictures/18-DSC08011.jpg",
  "/pictures/28-DSC08248.jpg",
  "/pictures/27-DSC08232.jpg",
];

export function EventOccasions({ content }: { content: HomePageContent["events"] }) {
  return (
    <section className="relative overflow-hidden bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[48rem]">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">{content.title}</h2>
            <p className="mt-4 max-w-[43rem] text-base font-light leading-[1.4] tracking-wide text-white/60">
              {content.description}
            </p>
          </div>
          <Link href="/contact" className="btn-secondary w-fit">
            Plan an Event
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {eventOccasions.map((occasion, index) => (
            <article key={occasion.title} className="figma-image-card relative min-h-[25rem]">
              <Image
                src={eventImages[index]}
                alt={occasion.title}
                width={1365}
                height={2048}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#170307] via-[#170307]/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-2xl font-medium text-white">{occasion.title}</h3>
                <p className="mt-3 text-sm font-light leading-[1.4] tracking-wide text-white/70">
                  {occasion.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-(family-name:--font-display) text-3xl leading-[1.25] text-white">
            The full ritual awaits.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <BookingButton className="btn-primary">
              {content.primaryButtonLabel}
            </BookingButton>
            <Link href={content.secondaryButton.href} className="btn-secondary">
              {content.secondaryButton.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
