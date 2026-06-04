import Link from "next/link";

import { AccordionGroup, AccordionItem } from "@/components/ui/Accordion";
import { menuSections } from "@/lib/menu-data";
import { signatureCategories } from "@/lib/site";

export function MenuPreview() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <span className="eyebrow">Signature menu</span>
          <h2 className="section-title">Sushi precision, cocktail drama, and late-night share plates.</h2>
          <p className="section-copy">
            Browse categories below, then jump into the full menu when something catches your eye.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {signatureCategories.map((item) => (
              <div key={item.name} className="border-b border-white/8 pb-4">
                <h3 className="text-lg font-semibold text-stone-100">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-400">{item.description}</p>
              </div>
            ))}
          </div>
          <Link href="/menu" className="btn-secondary">
            View Full Menu
          </Link>
        </div>

        <div className="rounded-4xl border border-white/10 bg-[rgba(15,15,18,0.55)] p-7 sm:p-9">
          <AccordionGroup defaultValue={menuSections[0]?.title ?? null}>
            {menuSections.map((section) => (
              <AccordionItem
                key={section.title}
                value={section.title}
                title={section.title}
                kicker={section.accent}
              >
                <div className="grid gap-4">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="grid gap-2 border-b border-dashed border-white/8 pb-4 last:border-none last:pb-0 md:grid-cols-[1fr_auto]"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="text-lg font-medium text-stone-100">{item.name}</p>
                          {item.badge && (
                            <span className="text-[0.68rem] uppercase tracking-[0.22em] text-(--accent-gold)">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm leading-7 text-stone-400">{item.description}</p>
                      </div>
                      <p className="text-base font-semibold text-stone-100">{item.price}</p>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </AccordionGroup>
        </div>
      </div>
    </section>
  );
}
