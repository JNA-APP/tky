import Image from "next/image";
import Link from "next/link";

import {
  drinkMenuSections,
  featuredDrinks,
  featuredItems,
  menuSections,
  type MenuSection,
} from "@/lib/menu-data";
import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("menu");

const foodGroups = [
  menuSections.slice(0, 2),
  menuSections.slice(2, 4),
  menuSections.slice(4, 6),
  menuSections.slice(6),
];

const drinkGroups = [
  drinkMenuSections.slice(0, 2),
  drinkMenuSections.slice(2, 5),
  drinkMenuSections.slice(5),
];

export const metadata = createPageMetadata({
  path: "/menu",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.menu,
});

function MenuPanel({ section }: { section: MenuSection }) {
  return (
    <article className="figma-card p-5 lg:p-6">
      <div className="border-b border-(--accent-red)/35 pb-4">
        <p className="text-xs font-light uppercase tracking-[0.16em] text-(--accent-gold)">
          {section.accent}
        </p>
        <h3 className="mt-2 font-(family-name:--font-display) text-3xl leading-[1.15] text-white">
          {section.title}
        </h3>
      </div>

      <div className="pt-3">
        {section.items.map((item) => (
          <div
            key={item.name}
            className="grid gap-3 border-b border-white/8 py-4 last:border-b-0 md:grid-cols-[1fr_auto]"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base font-medium text-white">{item.name}</p>
                {item.badge && (
                  <span className="border border-(--accent-gold)/50 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.16em] text-(--accent-gold)">
                    {item.badge}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="mt-1.5 text-sm font-light leading-[1.45] tracking-wide text-white/55">
                  {item.description}
                </p>
              )}
            </div>
            <p className="text-base font-medium tabular-nums text-(--accent-gold)">{item.price}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function FeaturedStrip({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: typeof featuredItems;
}) {
  return (
    <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">{title}</h2>
          </div>
          <Link href="/gallery" className="btn-secondary w-fit">See the Room</Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 3).map((item) => (
            <article key={item.name} className="figma-image-card group relative min-h-[24rem]">
              <Image
                src={item.image}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#170307] via-[#170307]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-(--accent-gold)">{item.price}</p>
                <h3 className="mt-2 text-2xl font-medium text-white">{item.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSectionGroup({
  eyebrow,
  title,
  description,
  groups,
}: {
  eyebrow: string;
  title: string;
  description: string;
  groups: MenuSection[][];
}) {
  return (
    <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]">
          <aside className="lg:sticky lg:top-36 lg:h-fit">
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">{title}</h2>
            <p className="mt-5 text-base font-light leading-[1.5] tracking-wide text-white/60">
              {description}
            </p>
          </aside>

          <div className="grid gap-8">
            {groups.map((group, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2">
                {group.map((section) => (
                  <MenuPanel key={section.title} section={section} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Menu"
        path="/menu"
        image={pageOgImages.menu}
        description="Explore the Tokyo Club Sushi Speakeasy menu — nigiri, sashimi, signature rolls, craft cocktails, sake, and chef specials."
      />

      <section className="relative isolate min-h-[600px] overflow-hidden pt-(--header-offset)">
        <Image
          src={pageContent.hero.image.src}
          alt={pageContent.hero.image.alt}
          width={pageContent.hero.image.width ?? 1365}
          height={pageContent.hero.image.height ?? 2048}
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 -z-10 bg-black/72" />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-[#170307]/30 to-[#170307]" />

        <div className="container-shell flex min-h-[calc(600px-var(--header-offset))] items-center">
          <div className="max-w-[39rem] pb-14 pt-20">
            <span className="eyebrow text-white">{pageContent.hero.eyebrow}</span>
            <h1 className="mt-7 font-(family-name:--font-display) text-[clamp(3.2rem,6vw,5rem)] leading-[1.02] text-white">
              Tokyo <span className="italic text-(--accent-gold)">Club</span> Sushi Menu
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
              {pageContent.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={pageContent.menuLinks.food.href} target="_blank" rel="noreferrer" className="btn-primary">
                View Food Menu
              </a>
              <a href={pageContent.menuLinks.drink.href} target="_blank" rel="noreferrer" className="btn-secondary">
                View Drink Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="eyebrow">Small Plates & Starters</span>
                <h2 className="figma-section-title mt-8 text-white">
                  Sushi precision, speakeasy cocktails, and late-night share plates.
                </h2>
                <p className="mt-5 text-base font-light leading-[1.55] tracking-wide text-white/65">
                  The menu moves from clean starters and fish-forward pieces into signature rolls, hand rolls, cocktails, sake, and bottle-service moments built for the full table.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <BookingButton className="btn-primary">Reserve a Table</BookingButton>
                  <Link href="/contact" className="btn-secondary">Private Events</Link>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {featuredItems.slice(0, 2).map((item) => (
                  <article key={item.name} className="figma-card grid gap-4 p-4 sm:grid-cols-[120px_1fr]">
                    <div className="figma-image-card aspect-square">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-(--accent-gold)">Signature</p>
                      <h3 className="mt-2 text-xl font-medium text-white">{item.name}</h3>
                      <p className="mt-2 text-base text-(--accent-gold)">{item.price}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
      </section>

      <MenuSectionGroup
        eyebrow="Food Menu"
        title="From starters to the final roll."
        description="Browse the full food menu with concise descriptions and pricing for every dish."
        groups={foodGroups}
      />

      <FeaturedStrip
        eyebrow="Signature Rolls"
        title="The rolls people come back for."
        items={featuredItems}
      />

      <MenuSectionGroup
        eyebrow="Cocktails, Sake & Bar"
        title="Pours designed for the room."
        description="Floral, smoky, citrus-led cocktails plus sake, wine, beer, bottle service, and non-alcoholic drinks."
        groups={drinkGroups}
      />

      <FeaturedStrip
        eyebrow="Cocktail Highlights"
        title="Built to match the mood."
        items={featuredDrinks}
      />

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
          <span className="eyebrow justify-center">Ready for the Ritual?</span>
          <h2 className="figma-section-title mt-6 text-white">Book the table before the night fills.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-light leading-[1.4] tracking-wide text-white/70">
            {pageContent.footnotes[0]}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <BookingButton className="btn-primary">Book a Table via OpenTable</BookingButton>
            <a href="tel:+17867289318" className="btn-secondary">(786) 728-9318</a>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs font-light leading-[1.5] tracking-wide text-white/45">
            {pageContent.footnotes[1]}
          </p>
        </div>
      </section>
    </>
  );
}
