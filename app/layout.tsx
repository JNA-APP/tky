import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import { pageOgImages, siteConfig, siteUrl } from "@/lib/site";
import "./globals.css";

const displayFont = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Tokyoclub Sushi's Speakeasy" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.social.website,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: pageOgImages.home.src,
        width: pageOgImages.home.width,
        height: pageOgImages.home.height,
        alt: pageOgImages.home.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [pageOgImages.home.src],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
