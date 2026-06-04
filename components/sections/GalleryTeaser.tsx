import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import type { HomePageContent } from "@/lib/page-content";

const mosaic = [
  {
    src: "/pictures/Food2.png",
    alt: "A vivid lobster and sushi plate at Tokyo Club.",
    className: "lg:row-span-2",
  },
  {
    src: "/pictures/Drinks.png",
    alt: "Tokyo Club cocktails and sushi served under dramatic light.",
    className: "",
  },
  {
    src: "/pictures/08-citrus-cocktail-with-dried-lime-and-flowers.jpg",
    alt: "Citrus cocktail with dried lime and flowers.",
    className: "",
  },
  {
    src: "/pictures/13-matcha-cake-with-mango-and-pansy.jpg",
    alt: "Matcha cake with mango and pansy.",
    className: "",
  },
  {
    src: "/pictures/05-japanese-dishes-spread-with-cocktail.jpg",
    alt: "Japanese dishes spread with cocktail.",
    className: "lg:col-span-2",
  },
];

export function GalleryTeaser({ content }: { content: HomePageContent["galleryTeaser"] }) {
  return (
    <section className="bg-[#170307] pb-0 pt-[clamp(4rem,8vw,7.5rem)]">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">Inside the Speakeasy</h2>
          </div>
          <Link href={content.button.href} className="btn-secondary w-fit">
            {content.button.label}
          </Link>
        </div>

        <div className="mt-12 grid auto-rows-[16rem] gap-4 sm:auto-rows-[20rem] lg:grid-cols-3 lg:auto-rows-[18rem]">
          {mosaic.map((asset) => (
            <div key={asset.src} className={`figma-image-card ${asset.className}`}>
              <Image
                src={asset.src}
                alt={asset.alt}
                width={1365}
                height={2048}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden py-16 text-center">
        <Image
          src="/pictures/31.jpg"
          alt=""
          width={2048}
          height={1365}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#170307]/80" />
        <div className="container-shell relative">
          <span className="eyebrow justify-center">Secure Your Night</span>
          <h2 className="figma-section-title mt-6 text-white">Ready for the Ritual?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
            Reservations recommended · Walk-ins welcome when available
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <BookingButton className="btn-primary">Book a Table via OpenTable</BookingButton>
            <a href="tel:+17867289318" className="btn-secondary">(786) 728-9318</a>
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-sm font-light leading-[1.5] tracking-wide text-white/60">
            Open Wednesday - Monday · 5:00 PM - 12:00 AM · 1000 Collins Ave, Miami Beach
          </p>
        </div>
      </div>
    </section>
  );
}
