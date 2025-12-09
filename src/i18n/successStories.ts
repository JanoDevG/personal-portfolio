// src/i18n/successStories.ts
import { type Locale } from "./messages";

export const successStoriesTexts = {
  es: {
    labels: {
      challenge: "Desafío",
      solution: "Enfoque",
      impact: "Impacto",
      metrics: "Métricas e impacto logrado",
      technical: "Detalle técnico",
    },

    // Historias reutilizables (las que antes estaban duro en tu componente)
    stories: {
      apigeePlatform: {
        title:
          "Programa Especializado – Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        tags: ["API DESIGN", "APIGEE", "CLOUD"],
        challenge:
          "Diseñar, asegurar y exponer APIs empresariales en una plataforma gestionada.",
        solution:
          "Implementación de proxies, políticas de seguridad, monetización y monitoreo en Apigee.",
        impact:
          "Mejor comprensión de arquitecturas API y gestión completa del ciclo de vida.",
        metrics: [
          "Implementación correcta de flujos con políticas estándar.",
          "Optimización del manejo de tráfico y cacheo.",
        ],
        technicalSummary:
          "Trabajo intensivo con prácticas modernas de API Management en entornos empresariales.",
        technicalHighlights: [
          "Seguridad: OAuth2, API Keys, JWT policies.",
          "Manejo de tráfico: Spike Arrest y Quotas.",
          "Transformaciones: JSON/XML, rutas y variables.",
          "Depuración con Apigee Trace.",
        ],
      },

      java180: {
        title: "Máster Completo en Java (+180 hrs)",
        context: "Udemy",
        tags: ["JAVA", "SPRING", "BACKEND"],
        challenge: "Dominar Java moderno con fundamentos sólidos.",
        solution:
          "Aprendizaje intensivo de Java, OOP, colecciones, concurrencia, streams y creación de APIs.",
        impact: "Base más robusta para proyectos backend de alta complejidad.",
      },
    },
  },

  en: {
    labels: {
      challenge: "Challenge",
      solution: "Approach",
      impact: "Impact",
      metrics: "Metrics & achieved impact",
      technical: "Technical details",
    },

    stories: {
      apigeePlatform: {
        title:
          "Specialization – Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        tags: ["API DESIGN", "APIGEE", "CLOUD"],
        challenge: "Design and secure enterprise APIs on a managed platform.",
        solution:
          "Implementation of proxies, security policies, monetization and monitoring in Apigee.",
        impact:
          "Improved understanding of API architecture and full lifecycle management.",
        metrics: [
          "Correct implementation of flows with standard policies.",
          "Traffic handling and caching optimization.",
        ],
        technicalSummary:
          "Intensive hands-on practice with API Management in enterprise-grade environments.",
        technicalHighlights: [
          "Security: OAuth2, API Keys, JWT policies.",
          "Traffic management: Spike Arrest & Quotas.",
          "Message transformations: JSON/XML, routing.",
          "Debugging with Apigee Trace.",
        ],
      },

      java180: {
        title: "Complete Java Masterclass (+180 hrs)",
        context: "Udemy",
        tags: ["JAVA", "SPRING", "BACKEND"],
        challenge: "Master modern Java with strong fundamentals.",
        solution:
          "Intensive training in Java, OOP, collections, concurrency, streams and API building.",
        impact: "Stronger foundation for complex backend engineering.",
      },
    },
  },
} as const;

export type SuccessStoriesLocale = keyof typeof successStoriesTexts;

export const getSuccessStoryTexts = (locale: Locale) =>
  successStoriesTexts[locale] ?? successStoriesTexts.es;
