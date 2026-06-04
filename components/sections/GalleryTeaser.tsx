import Image from "next/image";
import Link from "next/link";

import type { HomePageContent } from "@/lib/page-content";

export function GalleryTeaser({ content }: { content: HomePageContent["galleryTeaser"] }) {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title">
            {content.title}
          </h2>
          <p className="section-copy">
            {content.description}
          </p>
          <Link href={content.button.href} className="btn-secondary">
            {content.button.label}
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {content.images.map((asset, index) => (
            <div
              key={asset.src}
              className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 ${
                index === 0 ? "sm:translate-y-10" : ""
              }`}
            >
              <Image
                src={asset.src}
                alt={asset.alt}
                width={asset.width ?? 1365}
                height={asset.height ?? 2048}
                className="media-lift aspect-4/5 h-full w-full object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-5 py-4">
                <p className="text-xs uppercase tracking-[0.24em] text-(--accent-gold)">
                  {asset.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
