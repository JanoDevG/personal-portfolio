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

    hero: {
      greeting: "Hola, soy",
      name: "Alejandro Gutiérrez",
      chileAria: "Sitio oficial del Gobierno de Chile",
      subtitle:
        "Diseño e implemento soluciones backend robustas en Java y Spring Boot, integrando sistemas empresariales y liderando equipos técnicos para llevar productos de calidad a producción.",
      imageAlt:
        "Alejandro Gutiérrez - Ingeniero de Software Senior Java",

      // Frases que rotan cada 4 segundos
      roles: [
        "Senior Software Engineer",
        "Desarrollador backend senior",
        "Certificado en Java - Oracle Certified Professional 17 (OCP 17)",
        "Java y Spring Boot enterprise solutions",
        "Microservicios y monolitos modulares orientados a servicios (SOA)",
        "BIAN y desarrollo empresarial/bancario",
        "Arquitectura de software empresarial",
        "Programación reactiva con Spring WebFlux",
        "Líder de proyectos TI",
        "Líder de integración en tecnologías empresariales para TI",
        "Ingeniero en informática - Licenciado en Ingeniería en Informática",
      ],

      buttons: {
        cv: "Obtener CV",
        cvAria: "Descargar currículum de Alejandro",
        linkedin: "LinkedIn",
        linkedinAria: "Ver perfil de LinkedIn de Alejandro",
        projects: "Proyectos en trayectoria",
        projectsAria: "Ver proyectos en los que he trabajado",
        contact: "Contáctame",
        contactAria: "Ir a la sección de contacto",
      },
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

    hero: {
      greeting: "Hi, I'm",
      name: "Alejandro Gutiérrez",
      chileAria: "Official website of the Government of Chile",
      subtitle:
        "I design and build robust backend solutions in Java and Spring Boot, integrating enterprise systems and leading engineering teams to ship reliable, production-ready products.",
      imageAlt:
        "Alejandro Gutiérrez - Senior Java Software Engineer",

      roles: [
        "Senior Software Engineer",
        "Senior backend developer",
        "Certified in Java - Oracle Certified Professional 17 (OCP 17)",
        "Java and Spring Boot enterprise solutions",
        "Microservices and modular monoliths with service-oriented (SOA) design",
        "BIAN and enterprise / banking development",
        "Enterprise software architecture",
        "Reactive programming with Spring WebFlux",
        "IT project lead",
        "Integration lead for enterprise IT platforms",
        "Computer engineer – Bachelor in Computer Engineering",
      ],

      buttons: {
        cv: "Download CV",
        cvAria: "Download Alejandro's resume",
        linkedin: "LinkedIn",
        linkedinAria: "Open Alejandro's LinkedIn profile",
        projects: "Career projects",
        projectsAria: "See projects I have worked on",
        contact: "Contact me",
        contactAria: "Go to contact section",
      },
    },
  },
} as const;

export type Locale = keyof typeof messages; // "es" | "en"

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_STORAGE_KEY = "locale";
