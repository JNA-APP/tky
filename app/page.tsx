import { EventOccasions } from "@/components/sections/EventOccasions";
import { ExperienceStory } from "@/components/sections/ExperienceStory";
import { GalleryTeaser } from "@/components/sections/GalleryTeaser";
import { Hero } from "@/components/sections/Hero";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { StructuredData } from "@/components/seo/StructuredData";
import { Reveal } from "@/components/ui/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { getPageContent } from "@/lib/page-content";
import { pageOgImages } from "@/lib/site";

const pageContent = getPageContent("home");

export const metadata = createPageMetadata({
  path: "/",
  title: pageContent.seo.title,
  description: pageContent.seo.description,
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
      <Hero content={pageContent.hero} />
      <Reveal delay={50}>
        <ExperienceStory content={pageContent.experience} />
      </Reveal>
      <Reveal delay={90}>
        <MenuPreview content={pageContent.menuPreview} />
      </Reveal>
      <Reveal delay={130}>
        <EventOccasions content={pageContent.events} />
      </Reveal>
      <Reveal delay={170}>
        <SocialProof content={pageContent.socialProof} />
      </Reveal>
      <Reveal delay={210}>
        <GalleryTeaser content={pageContent.galleryTeaser} />
      </Reveal>
    </>
  );
}
