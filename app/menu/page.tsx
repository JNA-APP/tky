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

export const metadata = createPageMetadata({
  path: "/menu",
  title: "Sushi Menu | Tokyo Club Sushi Speakeasy",
  description:
    "Explore the Tokyo Club Sushi Speakeasy menu — nigiri, sashimi, signature rolls, craft cocktails, sake, and chef specials. South Beach's finest Japanese dining.",
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
            src="/pictures/05-japanese-dishes-spread-with-cocktail.jpg"
            alt="A dramatic spread of Japanese dishes and cocktails at Tokyo Club Sushi Speakeasy."
            width={1365}
            height={2048}
            priority
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.4)_0%,rgba(14,14,16,0.7)_50%,rgba(14,14,16,0.97)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(200,164,106,0.08),transparent_60%)]" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="eyebrow mb-6">Tokyo Club Sushi Speakeasy</span>
          <h1 className="font-(family-name:--font-display) text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
            The Menu
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
            Sushi precision, speakeasy cocktails, and late-night share plates — crafted for the full South Beach night.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="/menu/Tokyo-Sushi-Speakeasy-Menu-Food.png"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Food Menu
            </a>
            <a
              href="/menu/Tokyo-Sushi-Speakeasy-Menu-Drink.png"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Drink Menu
            </a>
            <BookingButton className="btn-secondary">
              Book a Table
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
          <p className="text-xs leading-relaxed tracking-wide text-stone-500">
            A 20% service charge and sales tax are added to your check.
          </p>
          <p className="mt-1 text-xs leading-relaxed tracking-wide text-stone-600">
            *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
