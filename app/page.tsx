import { EventOccasions } from "@/components/sections/EventOccasions";
import { ExperienceStory } from "@/components/sections/ExperienceStory";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { StructuredData } from "@/components/seo/StructuredData";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/",
  title: "Tokyo Club Sushi Speakeasy | Modern Japanese Speakeasy in South Beach",
  description:
    "A hidden Japanese speakeasy in South Beach serving premium sushi, craft cocktails, and late-night energy at 1000 Collins Ave. Book your table.",
  image: pageOgImages.home,
});

export default function HomePage() {
  return (
    <>
      <StructuredData
        name="Tokyo Club Sushi Speakeasy"
        path="/"
        image={pageOgImages.home}
      />
      <Hero />
      <Reveal delay={50}>
        <ExperienceStory />
      </Reveal>
      <Reveal delay={90}>
        <MenuPreview />
      </Reveal>
      <Reveal delay={130}>
        <EventOccasions />
      </Reveal>
      <Reveal delay={170}>
        <SocialProof />
      </Reveal>
      <Reveal delay={210}>
        <GalleryTeaser />
      </Reveal>
    </>
  );
}
