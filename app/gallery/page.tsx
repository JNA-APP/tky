import Image from "next/image";

import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { galleryAssets, pageOgImages } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const categoryLabels: Record<string, string> = {
  food: "Food",
  cocktails: "Cocktails",
  vibe: "Atmosphere",
};

const pageContent = getPageContent("gallery");

export const metadata = createPageMetadata({
  path: "/gallery",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.gallery,
});

export default function GalleryPage() {
  return (
    <div className="mt-(--header-offset)">
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Gallery"
        path="/gallery"
        image={pageOgImages.gallery}
        description="Browse the gallery of Tokyo Club Sushi Speakeasy — premium sushi, craft cocktails, and moody interior shots from our South Beach hidden bar."
      />
      {/* Editorial header */}
      <Reveal>
        <header className="section-space container-shell">
          <p className="eyebrow mb-6">{pageContent.hero.eyebrow}</p>
          <h1 className="section-title max-w-3xl">
            {pageContent.hero.title}
          </h1>
          <div className="editorial-rule mt-8 max-w-xs" />
        </header>
      </Reveal>

      {/* Featured hero image — first gallery asset large */}
      <Reveal>
        <section className="container-shell">
          <figure className="group relative overflow-hidden rounded-4xl">
            <Image
              src={pageContent.hero.image.src}
              alt={pageContent.hero.image.alt}
              width={pageContent.hero.image.width ?? 1365}
              height={pageContent.hero.image.height ?? 2048}
              priority
              className="h-auto max-h-[70vh] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />
            <figcaption className="absolute bottom-0 left-0 p-8 sm:p-10">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                {categoryLabels[galleryAssets[0].category]}
              </span>
            </figcaption>
          </figure>
        </section>
      </Reveal>

      {/* Masonry grid — remaining images */}
      <section className="container-shell mt-5">
        <div className="columns-1 gap-5 space-y-5 sm:columns-2 xl:columns-3">
          {galleryAssets.slice(1).map((asset, i) => (
            <Reveal key={asset.alt} delay={i * 60}>
              <figure className="gallery-card group relative break-inside-avoid overflow-hidden rounded-[1.6rem]">
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  width={asset.width}
                  height={asset.height}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                    {categoryLabels[asset.category]}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Elegant CTA — no box */}
      <Reveal>
        <section className="container-shell section-space text-center">
          <div className="editorial-rule mx-auto mb-10 max-w-24" />
          <p className="mx-auto max-w-md text-sm leading-relaxed tracking-wide text-(--text-muted)">
            {pageContent.cta.eyebrow}
          </p>
          <h2 className="mt-3 font-(family-name:--font-display) text-3xl font-medium tracking-tight text-stone-100 sm:text-4xl">
            {pageContent.cta.title}
          </h2>
          <div className="mt-8">
            <BookingButton className="btn-primary">
              {pageContent.cta.buttonLabel}
            </BookingButton>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
