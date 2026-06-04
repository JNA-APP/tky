import { testimonials } from "@/lib/site";
import type { HomePageContent } from "@/lib/page-content";

export function SocialProof({ content }: { content: HomePageContent["socialProof"] }) {
  return (
    <section className="relative overflow-hidden bg-[#170307] py-[clamp(4rem,8vw,7.5rem)]">
      <div className="pointer-events-none absolute -left-24 top-8 size-40 rounded-full border border-(--accent-red)/20" />
      <div className="pointer-events-none absolute -right-12 top-0 size-40 rounded-full border border-(--accent-red)/20" />

      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[46rem]">
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="figma-section-title mt-8 text-white">{content.title}</h2>
          </div>
          <div className="flex gap-3">
            <button type="button" aria-label="Previous review" className="size-12 border border-(--accent-gold) text-(--accent-gold)">
              ‹
            </button>
            <button type="button" aria-label="Next review" className="size-12 bg-(--accent-gold) text-[#170307]">
              ›
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="figma-card p-6">
              <div className="flex gap-1 text-(--accent-gold)" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <p className="mt-5 min-h-24 text-base font-light leading-[1.4] tracking-wide text-white/75">
                “{testimonial.quote}”
              </p>
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-base text-white">{testimonial.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">Verified Google Review</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
