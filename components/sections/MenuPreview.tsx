import Image from "next/image";
import Link from "next/link";

import { featuredItems } from "@/lib/menu-data";
import type { HomePageContent } from "@/lib/page-content";
import { signatureCategories } from "@/lib/site";

const categoryPrices = ["From $10", "From $22", "From $16", "From $9", "Seasonal", "From $15"];

export function MenuPreview({ content }: { content: HomePageContent["menuPreview"] }) {
  return (
    <section className="relative overflow-hidden bg-[#160206] py-14 lg:py-[clamp(4rem,8vw,7.5rem)]">
      <div className="pointer-events-none absolute inset-x-0 top-[30%] h-[50rem] bg-[url('/pictures/31.jpg')] bg-cover bg-center opacity-10" />
      <div className="container-shell relative">
        <div className="mx-auto max-w-[85rem] text-center">
          <span className="eyebrow justify-center">{content.eyebrow}</span>
          <h2 className="figma-section-title mx-auto mt-6 max-w-[58rem] text-white lg:mt-8">
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[51rem] text-base font-light leading-[1.4] tracking-wide text-white/60">
            Edomae technique meets South Beach decadence. From clean-cut nigiri to 24K gold-topped signature rolls, every dish is built for the table after dark.
          </p>
        </div>

        <div className="mt-10 grid border border-(--accent-red)/35 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {signatureCategories.map((item, index) => (
            <article
              key={item.name}
              className="min-h-[13rem] border-b border-r border-(--accent-red)/35 p-5 last:border-b-0 md:[&:nth-child(5)]:border-b-0 lg:min-h-[19.5rem] lg:p-6 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+4)]:border-b-0"
            >
              <p className="font-(family-name:--font-display) text-4xl text-white/80 lg:text-5xl">
                {String((index % 3) + 1).padStart(2, "0")}
              </p>
              <div className="mt-8 lg:mt-14">
                <h3 className="text-2xl font-medium text-white">{item.name}</h3>
                <p className="mt-4 max-w-sm text-base font-light leading-[1.4] tracking-wide text-white/60">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex border border-(--accent-gold)/70 px-3.5 py-2 text-sm text-white lg:mt-8">
                  {categoryPrices[index]}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {featuredItems.slice(0, 4).map((item, index) => (
            <article key={item.name} className="figma-card grid gap-4 p-4 sm:grid-cols-[160px_1fr] sm:items-center lg:gap-6 lg:p-6 lg:sm:grid-cols-[207px_1fr]">
              <div className="figma-image-card aspect-[4/3] sm:aspect-[207/240]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="inline-flex bg-(--accent-gold) px-2 py-1 text-xs uppercase text-[#170307]">
                  {index < 2 ? "Signature" : "Favorite"}
                </span>
                <h3 className="mt-4 text-xl font-medium text-white lg:mt-5 lg:text-2xl">{item.name}</h3>
                <p className="mt-3 text-base font-light leading-[1.4] tracking-wide text-white/60">
                  {item.alt.replace(/\.$/, "")}.
                </p>
                <p className="mt-4 text-lg text-(--accent-gold) lg:mt-5 lg:text-xl">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={content.button.href} className="btn-primary">
            See All Menu Items
          </Link>
        </div>
      </div>
    </section>
  );
}
