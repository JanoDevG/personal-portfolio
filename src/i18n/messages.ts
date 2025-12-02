// src/i18n/messages.ts

export const messages = {
  es: {
    seo: {
      title: "Alejandro Gutiérrez | Ingeniero de Software Senior Java",
      description:
        "Ingeniero de Software Senior y Java Developer Certified (OCP 17). Me especializo en integración de sistemas y arquitectura de software empresarial orientada a servicios (SOA) usando Java y Spring Boot, liderando soluciones robustas y mantenibles.",
      siteName: "Portafolio de Alejandro",
      twitterCreator: "@alejandro_dev",
    },

    themeHint: {
      text: "Puedes comenzar escogiendo un estilo de tu gusto 😉",
      button: "Entendido",
    },

    navbar: {
      menu: "menú",
      home: "Inicio",
      cv: "Obtén mi CV",
      about: "Sobre mí",
      projects: "Proyectos",
      career: "Carrera",
      education: "Estudio y certificaciones",
      contact: "Contáctame",
    },
  },

  en: {
    seo: {
      title: "Alejandro Gutiérrez | Senior Java Software Engineer",
      description:
        "Senior Software Engineer and Java Developer Certified (OCP 17). I specialize in system integration and enterprise service-oriented architecture (SOA) using Java and Spring Boot, leading robust and maintainable solutions.",
      siteName: "Alejandro's Portfolio",
      twitterCreator: "@alejandro_dev",
    },

    themeHint: {
      text: "You can start by picking a style you like 😉",
      button: "Got it",
    },

    navbar: {
      menu: "menu",
      home: "Home",
      cv: "Get my CV",
      about: "About me",
      projects: "Projects",
      career: "Career",
      education: "Education & Certifications",
      contact: "Contact me",
    },
  },
} as const;

export type Locale = keyof typeof messages; // "es" | "en"

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_STORAGE_KEY = "locale";
