// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LATAM_COUNTRIES = new Set([
  "AR", // Argentina
  "BO", // Bolivia
  "BR", // Brasil
  "CL", // Chile
  "CO", // Colombia
  "CR", // Costa Rica
  "CU", // Cuba
  "DO", // República Dominicana
  "EC", // Ecuador
  "SV", // El Salvador
  "GT", // Guatemala
  "HN", // Honduras
  "MX", // México
  "NI", // Nicaragua
  "PA", // Panamá
  "PY", // Paraguay
  "PE", // Perú
  "PR", // Puerto Rico
  "UY", // Uruguay
  "VE", // Venezuela
]);

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Si ya hay cookie de locale, no hacemos nada
  const existing = request.cookies.get("locale")?.value;
  if (existing === "es" || existing === "en") {
    return response;
  }

  // País detectado por Vercel (en prod) o header
  const country =
    request.geo?.country ||
    request.headers.get("x-vercel-ip-country") ||
    "";

  if (country) {
    const isLatam = LATAM_COUNTRIES.has(country.toUpperCase());
    const locale: "es" | "en" = isLatam ? "es" : "en";

    // Guardamos cookie de idioma
    response.cookies.set("locale", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 año
    });
  }

  return response;
}

// Para que no corra en estáticos ni api
export const config = {
  matcher: ["/((?!_next/|api/|favicon.ico|robots.txt|sitemap.xml).*)"],
};
