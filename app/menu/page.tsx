import Image from "next/image";

import {
  featuredItems,
  featuredDrinks,
  menuSections,
  drinkMenuSections,
} from "@/lib/menu-data";
import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages, siteConfig } from "@/lib/site";
import { MenuTabs } from "@/components/ui/MenuTabs";
import { getPageContent } from "@/lib/page-content";

const pageContent = getPageContent("menu");

export const metadata = createPageMetadata({
  path: "/menu",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.menu,
});

export default function MenuPage() {
  return (
    <div className="mt-(--header-offset)">
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Menu"
        path="/menu"
        image={pageOgImages.menu}
        description="Explore the Tokyo Club Sushi Speakeasy menu — nigiri, sashimi, signature rolls, craft cocktails, sake, and chef specials."
      />
      {/* ── Hero banner ── */}
      <section className="relative isolate h-[calc(100dvh-var(--header-offset))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pageContent.hero.image.src}
            alt={pageContent.hero.image.alt}
            width={pageContent.hero.image.width ?? 1365}
            height={pageContent.hero.image.height ?? 2048}
            priority
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.4)_0%,rgba(14,14,16,0.7)_50%,rgba(14,14,16,0.97)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(200,164,106,0.08),transparent_60%)]" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="eyebrow mb-6">{pageContent.hero.eyebrow}</span>
          <h1 className="font-(family-name:--font-display) text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
            {pageContent.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
            {pageContent.hero.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={pageContent.menuLinks.food.href}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {pageContent.menuLinks.food.label}
            </a>
            <a
              href={pageContent.menuLinks.drink.href}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              {pageContent.menuLinks.drink.label}
            </a>
            <BookingButton className="btn-secondary">
              {pageContent.hero.primaryButtonLabel ?? "Book a Table"}
            </BookingButton>
          </div>
        </div>
      </section>

      {/* ── Tabbed menu content ── */}
      <MenuTabs
        foodFeatured={featuredItems}
        drinkFeatured={featuredDrinks}
        foodSections={menuSections}
        drinkSections={drinkMenuSections}
      />

      {/* ── Footnote ── */}
      <div className="container-shell pb-12">
        <div className="editorial-rule mb-8" />
        <div className="text-center">
          {pageContent.footnotes.map((footnote, index) => (
            <p
              key={footnote}
              className={`text-xs leading-relaxed tracking-wide ${
                index === 0 ? "text-stone-500" : "mt-1 text-stone-600"
              }`}
            >
              {footnote}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
