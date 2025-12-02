// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Fira_Code } from "next/font/google";

import { cookies } from "next/headers";
import { messages, DEFAULT_LOCALE, type Locale } from "@/i18n/messages";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Obtener locale desde cookie (server-side)
function getServerLocale(): Locale {
  const cookieStore = cookies();
  const cookieLocale = cookieStore.get("locale")?.value;

  if (cookieLocale === "es" || cookieLocale === "en") {
    return cookieLocale;
  }

  return DEFAULT_LOCALE; // español por defecto
}

// SEO dinámico según idioma
export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const t = messages[locale].seo;

  const url = process.env.NEXT_PUBLIC_SITE_URL!;

  return {
    title: t.title,
    description: t.description,
    category: "technology",
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getServerLocale();

  return (
    <html lang={locale} data-theme="dark">
      <body className={firaCode.className}>
        <header>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
