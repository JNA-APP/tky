import Image from "next/image";

import { StructuredData } from "@/components/seo/StructuredData";
import { ContactForm } from "@/components/ui/ContactForm";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages, siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const pageContent = getPageContent("contact");

export const metadata = createPageMetadata({
  path: "/contact",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.contact,
});

export default function ContactPage() {
  return (
    <div className="mt-(--header-offset)">
      <StructuredData
        name="Contact Tokyo Club Sushi Speakeasy"
        path="/contact"
        image={pageOgImages.contact}
        description="Get in touch with Tokyo Club Sushi Speakeasy. Reserve a table, plan a private event, or reach our team at 1000 Collins Ave, South Beach."
      />
      {/* ── Events banner ── */}
      <section className="relative overflow-hidden">
        <Image
          src={pageContent.hero.image.src}
          alt={pageContent.hero.image.alt}
          width={pageContent.hero.image.width ?? 1365}
          height={pageContent.hero.image.height ?? 2048}
          className="absolute inset-0 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-(--background)" />

        <div className="relative pb-24 pt-[clamp(5rem,12vw,10rem)]">
          <div className="container-shell">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow justify-center">{pageContent.hero.eyebrow}</span>
                <h1 className="section-title mt-6">
                  {pageContent.hero.title}
                </h1>
                <p className="section-copy mx-auto mt-6 text-center">
                  {pageContent.hero.description}
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
                {pageContent.occasions.map((occasion, i) => (
                  <div
                    key={occasion.title}
                    className={`text-center ${i > 0 ? "md:border-l md:border-white/12 md:pl-8" : ""}`}
                  >
                    <h2 className="font-(family-name:--font-display) text-2xl font-medium tracking-tight text-stone-100">
                      {occasion.title}
                    </h2>
                    <p className="mx-auto mt-2 max-w-56 text-sm leading-relaxed text-stone-400">
                      {occasion.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mx-auto mt-14 flex max-w-md flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
                <BookingButton className="btn-primary">
                  {pageContent.hero.primaryButtonLabel ?? "Reserve a Table"}
                </BookingButton>
                <a
                  href={pageContent.hero.secondaryButton?.href ?? siteConfig.phoneHref}
                  className="btn-secondary backdrop-blur-sm"
                >
                  {pageContent.hero.secondaryButton?.label ?? "Call to Plan"}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact form + info ── */}
      <section className="py-[clamp(5rem,10vw,8rem)]">
        <div className="container-shell">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow justify-center">{pageContent.formIntro.eyebrow}</span>
              <h2 className="section-title mt-6 text-[clamp(2rem,5vw,3.5rem)]">
                {pageContent.formIntro.title}
              </h2>
              <p className="section-copy mx-auto mt-5 text-center">
                {pageContent.formIntro.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mx-auto mt-14 grid max-w-5xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <ContactForm />

              <aside className="space-y-12 lg:pt-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                    {pageContent.sidebar.visitEyebrow}
                  </p>
                  <div className="mt-4 space-y-2 text-stone-300">
                    <p>{siteConfig.address}</p>
                    <p>{siteConfig.hours}</p>
                    <a href={siteConfig.phoneHref} className="block hover:text-white">
                      {siteConfig.phone}
                    </a>
                  </div>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-stone-400 underline decoration-stone-600 underline-offset-4 hover:text-white hover:decoration-white/40"
                  >
                    Open in Maps
                  </a>
                </div>

                <div className="h-px w-full bg-white/8" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                    {pageContent.sidebar.callEyebrow}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {pageContent.sidebar.callDescription}
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="mt-3 inline-block text-lg font-semibold text-stone-100 hover:text-white"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="h-px w-full bg-white/8" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                    {pageContent.sidebar.eventsEyebrow}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {pageContent.sidebar.eventsDescription}
                  </p>
                  <a
                    href={`mailto:${pageContent.sidebar.eventsEmail}`}
                    className="mt-3 inline-block text-sm font-medium text-stone-400 underline decoration-stone-600 underline-offset-4 hover:text-white hover:decoration-white/40"
                  >
                    {pageContent.sidebar.eventsEmail}
                  </a>
                </div>

                <div className="h-px w-full bg-white/8" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent-gold)">
                    {pageContent.sidebar.followEyebrow}
                  </p>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-stone-400 underline decoration-stone-600 underline-offset-4 hover:text-white hover:decoration-white/40"
                  >
                    @tokyosushispeakeasy
                  </a>
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
