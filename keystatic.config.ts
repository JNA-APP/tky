import { config, fields, collection, singleton } from "@keystatic/core";

const isDev = process.env.NODE_ENV !== "production";

export default config({
  storage: isDev
    ? { kind: "local" }
    : {
        kind: "github",
        repo: {
          owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME!,
        },
      },

  ui: {
    brand: { name: "Tokyo Club CMS" },
    navigation: {
      Content: ["blog"],
      Pages: ["home", "contact", "experience", "gallery", "menu"],
    },
  },

  collections: {
    blog: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Publish Date",
          defaultValue: { kind: "today" },
        }),
        categories: fields.array(fields.text({ label: "Category" }), {
          label: "Categories",
          itemLabel: (props) => props.value || "Category",
        }),
        featuredImage: fields.text({
          label: "Featured Image",
          description: "Path to the image, e.g. /pictures/my-image.jpg",
        }),
        slug: fields.ignored(),
        content: fields.mdx({ label: "Content", extension: "md" }),
      },
    }),
  },

  singletons: {
    home: singleton({
      label: "Home Page",
      path: "content/pages/home",
      format: { data: "json" },
      schema: {
        seo: fields.object(
          {
            title: fields.text({ label: "SEO Title" }),
            description: fields.text({
              label: "SEO Description",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        hero: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Headline" }),
            description: fields.text({ label: "Description", multiline: true }),
            video: fields.text({ label: "Video Path" }),
            poster: fields.ignored(),
            sideImage: fields.ignored(),
            primaryButtonLabel: fields.text({ label: "Primary Button Label" }),
            secondaryButton: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Secondary Button" }
            ),
            marquee: fields.array(fields.text({ label: "Item" }), {
              label: "Marquee Items",
              itemLabel: (props) => props.value || "Item",
            }),
          },
          { label: "Hero Section" }
        ),
        experience: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            pillars: fields.array(
              fields.object(
                {
                  title: fields.text({ label: "Title" }),
                  body: fields.text({ label: "Body", multiline: true }),
                  image: fields.object(
                    {
                      src: fields.text({ label: "Image Path" }),
                      alt: fields.text({ label: "Alt Text" }),
                      width: fields.ignored(),
                      height: fields.ignored(),
                    },
                    { label: "Image" }
                  ),
                },
                { label: "Pillar" }
              ),
              {
                label: "Experience Pillars",
                itemLabel: (props) => props.fields.title.value || "Pillar",
              }
            ),
          },
          { label: "Experience Section" }
        ),
        menuPreview: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            button: fields.object(
              {
                label: fields.text({ label: "Button Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Button" }
            ),
          },
          { label: "Menu Preview Section" }
        ),
        events: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.ignored(),
            imageEyebrow: fields.text({ label: "Image Eyebrow" }),
            imageTitle: fields.text({ label: "Image Title" }),
            primaryButtonLabel: fields.text({ label: "Primary Button Label" }),
            secondaryButton: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Secondary Button" }
            ),
          },
          { label: "Events Section" }
        ),
        socialProof: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          },
          { label: "Social Proof Section" }
        ),
        galleryTeaser: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            button: fields.object(
              {
                label: fields.text({ label: "Button Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Button" }
            ),
            images: fields.ignored(),
          },
          { label: "Gallery Teaser Section" }
        ),
      },
    }),

    contact: singleton({
      label: "Contact Page",
      path: "content/pages/contact",
      format: { data: "json" },
      schema: {
        seo: fields.object(
          {
            title: fields.text({ label: "SEO Title" }),
            description: fields.text({
              label: "SEO Description",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        hero: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.ignored(),
            primaryButtonLabel: fields.text({ label: "Primary Button Label" }),
            secondaryButton: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Secondary Button" }
            ),
          },
          { label: "Hero Section" }
        ),
        occasions: fields.array(
          fields.object(
            {
              title: fields.text({ label: "Title" }),
              description: fields.text({ label: "Description", multiline: true }),
            },
            { label: "Occasion" }
          ),
          {
            label: "Occasions",
            itemLabel: (props) => props.fields.title.value || "Occasion",
          }
        ),
        formIntro: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          },
          { label: "Form Introduction" }
        ),
        sidebar: fields.object(
          {
            visitEyebrow: fields.text({ label: "Visit Eyebrow" }),
            callEyebrow: fields.text({ label: "Call Eyebrow" }),
            callDescription: fields.text({
              label: "Call Description",
              multiline: true,
            }),
            eventsEyebrow: fields.text({ label: "Events Eyebrow" }),
            eventsDescription: fields.text({
              label: "Events Description",
              multiline: true,
            }),
            eventsEmail: fields.text({ label: "Events Email" }),
            followEyebrow: fields.text({ label: "Follow Eyebrow" }),
          },
          { label: "Sidebar" }
        ),
      },
    }),

    experience: singleton({
      label: "Experience Page",
      path: "content/pages/experience",
      format: { data: "json" },
      schema: {
        seo: fields.object(
          {
            title: fields.text({ label: "SEO Title" }),
            description: fields.text({
              label: "SEO Description",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        hero: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.ignored(),
            primaryButtonLabel: fields.text({ label: "Primary Button Label" }),
            secondaryButton: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Secondary Button" }
            ),
          },
          { label: "Hero Section" }
        ),
        sections: fields.object(
          {
            storyEyebrow: fields.text({ label: "Story Eyebrow" }),
            storyTitle: fields.text({ label: "Story Title" }),
            storyBodyOne: fields.text({ label: "Story Body (Part 1)", multiline: true }),
            storyBodyTwo: fields.text({ label: "Story Body (Part 2)", multiline: true }),
            storyImage: fields.ignored(),
            proverb: fields.text({ label: "Japanese Proverb" }),
            proverbTranslation: fields.text({ label: "Proverb Translation", multiline: true }),
            proverbImage: fields.ignored(),
            featuresEyebrow: fields.text({ label: "Features Eyebrow" }),
            featuresTitle: fields.text({ label: "Features Title" }),
            creativityEyebrow: fields.text({ label: "Creativity Eyebrow" }),
            creativityTitle: fields.text({ label: "Creativity Title" }),
            creativityBodyOne: fields.text({ label: "Creativity Body (Part 1)", multiline: true }),
            creativityBodyTwo: fields.text({ label: "Creativity Body (Part 2)", multiline: true }),
            finalEyebrow: fields.text({ label: "Final CTA Eyebrow" }),
            finalTitle: fields.text({ label: "Final CTA Title" }),
            finalDescription: fields.text({ label: "Final CTA Description", multiline: true }),
          },
          { label: "Page Sections" }
        ),
      },
    }),

    gallery: singleton({
      label: "Gallery Page",
      path: "content/pages/gallery",
      format: { data: "json" },
      schema: {
        seo: fields.object(
          {
            title: fields.text({ label: "SEO Title" }),
            description: fields.text({
              label: "SEO Description",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        hero: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.ignored(),
          },
          { label: "Hero Section" }
        ),
        cta: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            buttonLabel: fields.text({ label: "Button Label" }),
          },
          { label: "CTA Section" }
        ),
      },
    }),

    menu: singleton({
      label: "Menu Page",
      path: "content/pages/menu",
      format: { data: "json" },
      schema: {
        seo: fields.object(
          {
            title: fields.text({ label: "SEO Title" }),
            description: fields.text({
              label: "SEO Description",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        hero: fields.object(
          {
            eyebrow: fields.text({ label: "Eyebrow" }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            image: fields.ignored(),
            primaryButtonLabel: fields.text({ label: "Primary Button Label" }),
          },
          { label: "Hero Section" }
        ),
        menuLinks: fields.object(
          {
            food: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Food Menu Link" }
            ),
            drink: fields.object(
              {
                label: fields.text({ label: "Label" }),
                href: fields.text({ label: "URL" }),
              },
              { label: "Drink Menu Link" }
            ),
          },
          { label: "Menu PDF Links" }
        ),
        footnotes: fields.array(
          fields.text({ label: "Footnote", multiline: true }),
          {
            label: "Footnotes",
            itemLabel: (props) =>
              props.value ? props.value.slice(0, 60) + "…" : "Footnote",
          }
        ),
      },
    }),
  },
});
