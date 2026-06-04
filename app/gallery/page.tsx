import Image from "next/image";
import Link from "next/link";

import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("gallery");

const galleryMosaic = [
  {
    src: "/pictures/04-lychee-orchid-and-citrus-cocktails.jpg",
    alt: "Lychee orchid cocktails in Tokyo Club's moody room.",
    className: "lg:col-span-2",
  },
  {
    src: "/pictures/Food2.png",
    alt: "A vivid lobster and sushi plate at Tokyo Club.",
    className: "lg:row-span-2",
  },
  {
    src: "/pictures/Drinks.png",
    alt: "Tokyo Club cocktails and sushi served under dramatic light.",
    className: "lg:row-span-2",
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
  {
    src: "/pictures/10-salmon-bao-bun-with-edible-flowers.jpg",
    alt: "Salmon bao bun with edible flowers.",
    className: "",
  },
  {
    src: "/pictures/12-wagyu-beef-sushi-roll-closeup.jpg",
    alt: "Wagyu beef sushi roll closeup.",
    className: "",
  },
  {
    src: "/pictures/17-DSC07903.jpg",
    alt: "Tokyo Club cocktail detail in the dining room.",
    className: "lg:col-span-2",
  },
  {
    src: "/pictures/28-DSC08248.jpg",
    alt: "Damask-wallpapered staircase with a gold handrail inside Tokyo Club.",
    className: "",
  },
  {
    src: "/pictures/27-DSC08232.jpg",
    alt: "Moody Tokyo Club table setting with Japanese wall art.",
    className: "",
  },
  {
    src: "/pictures/16-DSC07892.jpg",
    alt: "Smoked cocktail under a glass cloche.",
    className: "lg:col-span-2",
  },
];

export const metadata = createPageMetadata({
  path: "/gallery",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.gallery,
});

export default function GalleryPage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Gallery"
        path="/gallery"
        image={pageOgImages.gallery}
        description="Browse the gallery of Tokyo Club Sushi Speakeasy — premium sushi, craft cocktails, and moody interior shots from our South Beach hidden bar."
      />

      <section className="relative isolate overflow-hidden bg-[#170307] pb-12 pt-[calc(var(--header-offset)+4rem)] lg:pb-16 lg:pt-[calc(var(--header-offset)+5rem)]">
        <div className="pointer-events-none absolute left-1/2 top-24 size-[24rem] -translate-x-1/2 rounded-full border border-(--accent-red)/20 lg:size-[38rem]" />
        <div className="container-shell relative text-center">
          <span className="eyebrow justify-center">{pageContent.hero.eyebrow}</span>
          <h1 className="mx-auto mt-7 max-w-[48rem] font-(family-name:--font-display) text-[clamp(3rem,7vw,5rem)] leading-[1.05] text-white">
            {pageContent.hero.title}
          </h1>
          <div className="mx-auto mt-8 h-px w-28 bg-(--accent-gold)" />
        </div>
      </section>

      <section className="bg-[#170307] pb-[clamp(4rem,8vw,7.5rem)]">
        <div className="container-shell">
          <div className="grid auto-rows-[16rem] gap-4 sm:auto-rows-[22rem] lg:grid-cols-4 lg:auto-rows-[20rem]">
            {galleryMosaic.map((asset, index) => (
              <figure
                key={`${asset.src}-${index}`}
                className={`figma-image-card group relative ${asset.className}`}
              >
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={1365}
                  height={2048}
                  priority={index < 2}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#170307]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#170307] py-16 text-center">
        <Image
          src="/pictures/31.jpg"
          alt=""
          width={2048}
          height={1365}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#170307]/82" />
        <div className="container-shell relative">
          <span className="eyebrow justify-center">Secure Your Night</span>
          <h2 className="figma-section-title mt-6 text-white">{pageContent.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
            {pageContent.cta.eyebrow}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <BookingButton className="btn-primary">{pageContent.cta.buttonLabel}</BookingButton>
            <Link href="/contact" className="btn-secondary">Contact & Directions</Link>
          </div>
        </div>
      </section>
    </>
  );
}
