import Image from "next/image";
import Link from "next/link";

import { BookingButton } from "@/components/ui/ReservationModal";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/45 pb-8 pt-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <Image
            src={siteConfig.logo.src}
            alt={`${siteConfig.shortName} logo`}
            width={siteConfig.logo.width}
            height={siteConfig.logo.height}
            className="h-auto w-40 sm:w-52"
          />
          <p className="max-w-xl text-base leading-8 text-stone-400">
            Tokyo Club Sushi Speakeasy blends Japanese craft with South Beach nightlife for a dining experience
            that feels moody, polished, and made to linger.
          </p>
          <div className="flex flex-wrap gap-3">
            <BookingButton className="btn-primary">
              Book a Table
            </BookingButton>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Get Directions
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-(--accent-gold)">
            Visit
          </h2>
          <div className="space-y-3 text-stone-300">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.hours}</p>
            <a href={siteConfig.phoneHref} className="block hover:text-white">
              {siteConfig.phone}
            </a>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="block hover:text-white">
              View on map
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm uppercase tracking-[0.3em] text-(--accent-gold)">
            Explore
          </h2>
          <div className="grid gap-3 text-stone-300">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell mt-12 border-t border-white/8 pt-6 text-sm text-stone-500">
        <p>Tokyo Club Sushi Speakeasy. Premium sushi, cocktails, and nightlife atmosphere in Miami Beach.</p>
      </div>
    </footer>
  );
}
