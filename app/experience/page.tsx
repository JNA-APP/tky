import Image from "next/image";

import { StructuredData } from "@/components/seo/StructuredData";
import { BookingButton } from "@/components/ui/ReservationModal";
import { createPageMetadata } from "@/lib/metadata";
import type { CmsImage } from "@/lib/page-content";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages, siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

const pageContent = getPageContent("experience");
const sections = pageContent.sections ?? {};
const sectionText = (key: string) => sections[key] as string;
const sectionImage = (key: string) => sections[key] as CmsImage;

export const metadata = createPageMetadata({
  path: "/experience",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
  image: pageOgImages.experience,
});

export default function ExperiencePage() {
  return (
    <div className="mt-(--header-offset)">
      <StructuredData
        name="Tokyo Club Sushi Speakeasy Experience"
        path="/experience"
        image={pageOgImages.experience}
        description="Step inside Tokyo Club Sushi Speakeasy — an intimate hidden speakeasy in South Beach with moody lighting, Japanese craftsmanship, and unforgettable nightlife energy."
      />
      {/* ── Full-bleed hero ── */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pageContent.hero.image.src}
            alt={pageContent.hero.image.alt}
            width={pageContent.hero.image.width ?? 1365}
            height={pageContent.hero.image.height ?? 2048}
            priority
            className="h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.35)_0%,rgba(14,14,16,0.65)_45%,rgba(14,14,16,0.97)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(200,164,106,0.1),transparent_55%)]" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100dvh-var(--header-offset))] flex-col items-center justify-center px-6 py-20 text-center">
          <span className="eyebrow mb-6">{pageContent.hero.eyebrow}</span>
          <h1 className="font-(family-name:--font-display) text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em]">
            {pageContent.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
            {pageContent.hero.description}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
            <BookingButton className="btn-primary">
              {pageContent.hero.primaryButtonLabel ?? "Reserve Your Night"}
            </BookingButton>
            <a href={pageContent.hero.secondaryButton?.href ?? "/menu"} className="btn-secondary">
              {pageContent.hero.secondaryButton?.label ?? "Explore the Menu"}
            </a>
          </div>
        </div>
      </section>

      {/* ── Brand story — speakeasy narrative ── */}
      <Reveal>
        <section className="section-space">
          <div className="container-shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div className="space-y-6">
                <span className="eyebrow">{sectionText("storyEyebrow")}</span>
                <h2 className="font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                  {sectionText("storyTitle")}
                </h2>
                <p className="text-base leading-[1.85] text-stone-400 sm:text-[1.05rem]">
                  {sectionText("storyBodyOne")}
                </p>
                <p className="text-base leading-[1.85] text-stone-400 sm:text-[1.05rem]">
                  {sectionText("storyBodyTwo")}
                </p>
              </div>

              <div className="gold-frame overflow-hidden rounded-3xl border border-white/12 bg-black/25 p-3">
                <div className="overflow-hidden rounded-[1.15rem] border border-white/8">
                  <Image
                    src={sectionImage("storyImage").src}
                    alt={sectionImage("storyImage").alt}
                    width={sectionImage("storyImage").width ?? 1365}
                    height={sectionImage("storyImage").height ?? 2048}
                    className="aspect-4/5 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Decorative rule ── */}
      <div className="container-shell">
        <div className="editorial-rule" />
      </div>

      {/* ── Full-width atmospheric image with proverb ── */}
      <Reveal delay={60}>
        <section className="section-space">
          <div className="container-shell">
            <div className="relative isolate overflow-hidden rounded-4xl border border-white/8">
              <Image
                src={sectionImage("proverbImage").src}
                alt={sectionImage("proverbImage").alt}
                width={sectionImage("proverbImage").width ?? 1365}
                height={sectionImage("proverbImage").height ?? 2048}
                className="h-full w-full object-cover object-top opacity-50"
                style={{ aspectRatio: "16 / 7" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,16,0.3)_0%,rgba(14,14,16,0.6)_50%,rgba(14,14,16,0.85)_100%)]" />
              <div className="absolute inset-0 z-1 flex flex-col items-center justify-center px-8 text-center">
                <p className="font-(family-name:--font-display) text-[clamp(1.5rem,4vw,3rem)] italic leading-[1.15] tracking-[-0.02em] text-stone-200">
                  &ldquo;{sectionText("proverb")}&rdquo;
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-400 sm:text-base">
                  {sectionText("proverbTranslation")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Decorative rule ── */}
      <div className="container-shell">
        <div className="editorial-rule" />
      </div>

      {/* ── Two editorial feature columns ── */}
      <Reveal delay={90}>
        <section className="section-space">
          <div className="container-shell">
            <div className="mb-14 text-center">
              <span className="eyebrow justify-center">{sectionText("featuresEyebrow")}</span>
              <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                {sectionText("featuresTitle")}
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Authenticity & Craft */}
              <article className="group relative isolate overflow-hidden rounded-3xl border border-white/10">
                <div className="aspect-3/4 overflow-hidden sm:aspect-4/5">
                  <Image
                    src="/pictures/21-DSC08073.jpg"
                    alt="A gold leaf sushi roll revealed from under a glass dome with a burst of theatrical smoke."
                    width={1365}
                    height={2048}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-2 p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-gold)">
                    Authenticity & Craft
                  </p>
                  <h3 className="mt-2 font-(family-name:--font-display) text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.02em] text-stone-100">
                    Every detail reflects precision.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-300">
                    From traditional sushi preparation techniques to our curated sake selection, every choice is intentional — an immersive journey to the artistry of Japan.
                  </p>
                </div>
              </article>

              {/* Intimacy & Atmosphere */}
              <article className="group relative isolate overflow-hidden rounded-3xl border border-white/10">
                <div className="aspect-3/4 overflow-hidden sm:aspect-4/5">
                  <Image
                    src="/pictures/16-DSC07892.jpg"
                    alt="A smoky old fashioned cocktail under a glass cloche on a wooden board at Tokyo Club Sushi Speakeasy."
                    width={1365}
                    height={2048}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 z-1 bg-[linear-gradient(180deg,transparent_30%,rgba(0,0,0,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 z-2 p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-(--accent-gold)">
                    Intimacy & Atmosphere
                  </p>
                  <h3 className="mt-2 font-(family-name:--font-display) text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-[-0.02em] text-stone-100">
                    A room that moves with you.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone-300">
                    Our small, hidden gem of a space offers an intimate atmosphere — perfect for date nights, celebrations, and private gatherings where everyone feels at home.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Decorative rule ── */}
      <div className="container-shell">
        <div className="editorial-rule" />
      </div>

      {/* ── Creativity & Fun — editorial side-by-side ── */}
      <Reveal delay={120}>
        <section className="section-space">
          <div className="container-shell">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <div className="order-2 lg:order-1">
                <div className="gold-frame overflow-hidden rounded-3xl border border-white/12 bg-black/25 p-3">
                  <div className="overflow-hidden rounded-[1.15rem] border border-white/8">
                    <Image
                      src="/pictures/28-DSC08248.jpg"
                      alt="An ornate damask-wallpapered staircase with a gold handrail leading into Tokyo Club Sushi Speakeasy."
                      width={1365}
                      height={2048}
                      className="aspect-4/5 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 space-y-6 lg:order-2">
                <span className="eyebrow">{sectionText("creativityEyebrow")}</span>
                <h2 className="font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
                  {sectionText("creativityTitle")}
                </h2>
                <p className="text-base leading-[1.85] text-stone-400 sm:text-[1.05rem]">
                  {sectionText("creativityBodyOne")}
                </p>
                <p className="text-base leading-[1.85] text-stone-400 sm:text-[1.05rem]">
                  {sectionText("creativityBodyTwo")}
                </p>
                <BookingButton className="btn-secondary mt-2 inline-flex">
                  Plan Your Night
                </BookingButton>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Full-width sushi drama ── */}
      <Reveal delay={60}>
        <div className="container-shell">
          <div className="overflow-hidden rounded-4xl border border-white/8">
            <Image
              src="/pictures/24-DSC08132.jpg"
              alt="Overhead view of gold leaf sushi with ikura caviar and a violet pansy at the center."
              width={1365}
              height={2048}
              className="w-full object-cover"
              style={{ aspectRatio: "16 / 9" }}
            />
          </div>
        </div>
      </Reveal>

      {/* ── Final CTA ── */}
      <section className="section-space">
        <div className="container-shell">
          <div className="editorial-rule mb-14" />
          <div className="flex flex-col items-center text-center">
            <span className="eyebrow justify-center">{sectionText("finalEyebrow")}</span>
            <h2 className="mt-4 font-(family-name:--font-display) text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[-0.03em]">
              {sectionText("finalTitle")}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-400">
              {sectionText("finalDescription")}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center">
              <BookingButton className="btn-primary">
                Book a Table
              </BookingButton>
              <a href="/contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
