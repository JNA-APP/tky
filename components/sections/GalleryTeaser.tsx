import Image from "next/image";
import Link from "next/link";

import { galleryAssets } from "@/lib/site";

const teaserSlots = [
  {
    src: galleryAssets[3].src,
    alt: galleryAssets[3].alt,
    width: galleryAssets[3].width,
    height: galleryAssets[3].height,
    category: "food",
  },
  {
    src: "/pictures/Food2.png",
    alt: "A torched wagyu sushi roll finished with flame at Tokyo Club Sushi Speakeasy.",
    width: 1365,
    height: 2048,
    category: "food",
  },
  {
    src: "/pictures/Drinks.png",
    alt: "Signature Tokyo Club cocktails served side by side under dramatic low light.",
    width: 1365,
    height: 2048,
    category: "cocktails",
  },
];

export function GalleryTeaser() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5">
          <span className="eyebrow">Gallery Teaser</span>
          <h2 className="section-title">
            Visual stories, thoughtfully framed.
          </h2>
          <p className="section-copy">
            Explore our handpicked selection of images, offering a vivid glimpse into the Tokyo Club experience. Every photo captures the essence of our food, drinks, and atmosphere—inviting you to discover more.
          </p>
          <Link href="/gallery" className="btn-secondary">
            View Full Gallery
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {teaserSlots.map((asset, index) => (
            <div
              key={asset.src}
              className={`relative overflow-hidden rounded-[1.8rem] border border-white/10 ${
                index === 0 ? "sm:translate-y-10" : ""
              }`}
            >
              <Image
                src={asset.src}
                alt={asset.alt}
                width={asset.width}
                height={asset.height}
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
