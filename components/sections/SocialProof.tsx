import { testimonials } from "@/lib/site";

export function SocialProof() {
  return (
    <section className="section-space">
      <div className="container-shell border-y border-white/8 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">Memorable moments, lasting impressions</span>
            <h2 className="section-title max-w-3xl">
              The ambiance is unforgettable—and so is every bite.
            </h2>
            <p className="section-copy">
              Our guests don’t just dine—they experience. See why people keep talking about every detail, from the atmosphere to the service and beyond.
            </p>
          </div>

          <div className="grid gap-6">
            <blockquote className="border-l border-[var(--accent-gold)] pl-6 text-2xl leading-10 text-stone-100 sm:text-3xl sm:leading-[1.5]">
              &ldquo;{testimonials[0].quote}&rdquo;
            </blockquote>
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)]">
              {testimonials[0].author}
            </p>
            <div className="grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-2">
              {testimonials.slice(1).map((testimonial) => (
                <article key={testimonial.author}>
                  <p className="text-base leading-8 text-stone-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[var(--accent-gold)]">
                    {testimonial.author}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
