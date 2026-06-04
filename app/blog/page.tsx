import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { formatPostDate, getAllBlogPosts } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { pageOgImages } from "@/lib/site";

export const metadata = createPageMetadata({
  path: "/blog",
  title: "Tokyo Club Blog | Sushi, Cocktails, and South Beach Nights",
  description:
    "Read the latest Tokyo Club stories, guides, and updates from the South Beach sushi speakeasy.",
  image: pageOgImages.home,
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="pt-(--header-offset)">
      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <div className="max-w-4xl">
              <span className="eyebrow">Tokyo Journal</span>
              <h1 className="section-title mt-5">Sushi, cocktails, and South Beach after dark.</h1>
              <p className="section-copy mt-6">
                Notes from the room, menu stories, and guides for making the most of a night at
                Tokyo Club Sushi Speakeasy.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={80 + index * 50}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-[0.5rem] border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="grid gap-4 p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-(--accent-gold)">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      {post.categories.slice(0, 2).map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                    <h2 className="font-display text-3xl leading-none text-stone-50">
                      {post.title}
                    </h2>
                    <p className="line-clamp-3 text-sm leading-7 text-stone-400">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="panel mt-14 rounded-[0.5rem] p-8 text-stone-300">
              Blog posts will appear here after they are published from Decap CMS.
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
