// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import { cookies } from "next/headers";
import { messages, DEFAULT_LOCALE, type Locale } from "@/i18n/messages";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies(); // ← necesario en Next 16
  const cookieLocale = cookieStore.get("locale")?.value;

  return cookieLocale === "es" || cookieLocale === "en"
    ? cookieLocale
    : DEFAULT_LOCALE;
}


// SEO dinámico según idioma
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const t = messages[locale].seo;

  // Evita error fatal cuando no existe la variable en Vercel
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://janodevg.vercel.app";
    
  return {
    title: t.title,
    description: t.description,
    category: "technology",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: siteUrl,
      siteName: t.siteName,
      type: "website",
    },
    twitter: {
      title: t.title,
      description: t.description,
      card: "summary_large_image",
      creator: t.twitterCreator,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getServerLocale();

  return (
    <html lang={locale} data-theme="dark">
      <body className={firaCode.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
