// src/i18n/successStories.ts
import { type Locale } from "./messages";

export const successStoriesTexts = {
  es: {
    // Labels usados en SuccessStoryCard
    labels: {
      challenge: "Desafío",
      solution: "Enfoque",
      impact: "Impacto",
      metrics: "Métricas e impacto logrado",
      technical: "Detalle técnico",
    },

    // Textos de la sección de Casos de éxito
    section: {
      title: "Casos de éxito",
      description:
        "La siguiente sección presenta una selección de proyectos en los que he contribuido como parte de mi experiencia en distintas organizaciones. Las descripciones se expresan de manera general para respetar los compromisos éticos y contractuales de confidencialidad propios del trabajo en entornos empresariales y bancarios.",
    },

    // Las 4 historias de casos de éxito del componente
    successStories: [
      {
        title: "Gestión automatizada de oficios bancarios por Ley Parental",
        context: "Banco · Arquitectura & backend senior · Java WebFlux",
        tags: ["WEBFLUX", "JAVA", "REACTIVE", "OFICIOS JUDICIALES", "LEY PARENTAL"],
        challenge:
          "Los oficios judiciales por Ley Parental se tramitaban con procesos manuales lentos, alto volumen de casos y múltiples integraciones con sistemas internos y servicios externos poco confiables.",
        solution:
          "Lideré la arquitectura e implementación de una plataforma reactiva basada en WebFlux, orquestando servicios bancarios internos y servicios judiciales externos, con validaciones de negocio estrictas, manejo resiliente de errores y trazabilidad de cada transacción.",
        impact:
          "Reducción del tiempo de tramitación, menor riesgo operacional y un sistema estable incluso en escenarios de alta concurrencia y picos de carga.",
        metrics: [
          "Disminución del tiempo promedio de tramitación de oficios de varios minutos a decenas de segundos.",
          "Capacidad de procesar cientos de oficios concurrentes sin degradación significativa del rendimiento.",
          "Reducción de incidencias operacionales asociadas al proceso manual de oficios.",
        ],
        technicalSummary:
          "Plataforma backend basada en Java y Spring WebFlux, integrando microservicios bancarios y servicios judiciales externos con enfoque reactivo end-to-end.",
        technicalHighlights: [
          "Orquestación de flujos de oficio mediante WebFlux y WebClient.",
          "Manejo de backpressure, timeouts, reintentos y circuit breakers para servicios externos.",
          "Validaciones de negocio centralizadas y trazabilidad completa de cada cambio de estado.",
          "Diseño pensado para monitoreo y observabilidad en entornos productivos de banca.",
        ],
      },
      {
        title: "Backends bancarios para producto de ahorro con inversión",
        context: "Banco · Backend senior · Java / Spring Boot",
        tags: ["SPRING BOOT", "APIS", "MIGRACIÓN", "AHORRO E INVERSIÓN"],
        challenge:
          "Se necesitaba habilitar un nuevo producto de ahorro con componente de inversión, coexistiendo con sistemas legados, reglas de negocio complejas y múltiples canales (web, móvil, sucursales).",
        solution:
          "Diseñé y desarrollé backends en Java/Spring Boot con APIs contract-first, refactorizando lógica de negocio crítica y habilitando una migración progresiva desde sistemas legados con pruebas de regresión apoyadas en automatización.",
        impact:
          "Lanzamiento controlado del producto, reducción del riesgo de migración y base tecnológica más mantenible para futuras extensiones.",
        metrics: [
          "Mejora perceptible en tiempos de respuesta de consultas y operaciones frente al sistema legado.",
          "Ejecución de la migración por etapas sin interrupciones relevantes en los canales de atención.",
          "Reducción de incidencias relacionadas a reglas de negocio inconsistentes entre sistemas.",
        ],
        technicalSummary:
          "Backends Java/Spring Boot expuestos vía APIs REST, alineados a un modelo de dominio de ahorro con inversión y preparados para evolución futura.",
        technicalHighlights: [
          "Diseño de APIs contract-first documentadas con OpenAPI.",
          "Separación clara entre capas de dominio, aplicación e infraestructura.",
          "Adaptadores para integrar con sistemas legados sin romper contratos existentes.",
          "Pruebas de regresión automatizadas para validar escenarios críticos del producto.",
        ],
      },
      {
        title: "Backends para operaciones logísticas de alta concurrencia",
        context: "Logística nacional · Backend senior · Integraciones",
        tags: ["LOGÍSTICA", "INTEGRACIONES", "ALTA CONCURRENCIA"],
        challenge:
          "Las operaciones logísticas a nivel nacional requerían coordinar múltiples sistemas de gestión, bodegas y canales de venta, con riesgo de inconsistencias de stock y cuellos de botella en el procesamiento de órdenes.",
        solution:
          "Desarrollé servicios backend que centralizan reglas de negocio e integran diversas fuentes de datos, apoyados en mensajería y patrones de integración para desacoplar procesos y optimizar el acceso a información operacional.",
        impact:
          "Mejoras en tiempos de procesamiento de órdenes, reducción de errores de stock y mayor visibilidad del estado logístico casi en tiempo real.",
        metrics: [
          "Reducción de errores de stock registrados en sistemas centrales.",
          "Aceleración del procesamiento de órdenes en horarios de alta demanda.",
          "Mayor capacidad para absorber picos de carga sin afectar la experiencia de los equipos de operación.",
        ],
        technicalSummary:
          "Servicios backend para integrar sistemas de gestión de inventario, canales de venta y procesos de distribución en una capa unificada.",
        technicalHighlights: [
          "Modelado de entidades operacionales clave (órdenes, stock, bodegas, movimientos).",
          "Uso de colas o mensajería para desacoplar procesos intensivos en E/S.",
          "Optimización de consultas sobre datos transaccionales de alto volumen.",
          "Diseño de endpoints enfocado en operaciones concurrentes de alta frecuencia.",
        ],
      },
      {
        title: "Integración de fondos mutuos entre banca y filial de inversiones",
        context: "Banco & filial de inversiones · Arquitectura & backend",
        tags: ["FONDOS MUTUOS", "INTEGRACIÓN", "INVERSIONES", "BANCA"],
        challenge:
          "La contratación y gestión de fondos mutuos estaba repartida entre la banca y su filial de inversiones, con sistemas heterogéneos, modelos de datos distintos y requisitos regulatorios propios por entidad.",
        solution:
          "Lideré la arquitectura y el desarrollo backend para integrar ambos mundos mediante contratos de integración claros, mapeos de datos consistentes y orquestación de flujos transaccionales de alta criticidad.",
        impact:
          "Experiencia unificada para el cliente, menos reprocesos manuales y mejor trazabilidad de las operaciones de inversión entre banca e inversora.",
        metrics: [
          "Disminución de reprocesos manuales entre banca e inversora para operaciones de fondos mutuos.",
          "Reducción del tiempo de resolución ante discrepancias operacionales.",
          "Mejor trazabilidad de punta a punta para auditorías y revisiones regulatorias.",
        ],
        technicalSummary:
          "Solución de integración centrada en contratos claros entre el core bancario y la plataforma de inversiones para fondos mutuos.",
        technicalHighlights: [
          "Modelos de mapeo entre cuentas bancarias, órdenes de inversión y posiciones de fondos.",
          "Flujos transaccionales idempotentes y consistentes para operaciones de alta criticidad.",
          "Validaciones cruzadas de reglas contables y regulatorias entre ambas entidades.",
          "Exposición de APIs internas para canales comerciales y sistemas de backoffice.",
        ],
      },
    ],

    // Historias reutilizables que ya tenías
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

    section: {
      title: "Success stories",
      description:
        "The following section showcases a selection of projects I've contributed to as part of my experience in different organisations. Descriptions are intentionally kept high-level to respect the ethical and contractual confidentiality commitments typical of enterprise and banking environments.",
    },

    successStories: [
      {
        title: "Automated processing of court orders under Parental Law",
        context: "Bank · Senior architecture & backend · Java WebFlux",
        tags: ["WEBFLUX", "JAVA", "REACTIVE", "COURT ORDERS", "PARENTAL LAW"],
        challenge:
          "Court orders under Chile's Parental Law were handled using slow manual processes, high case volumes and multiple integrations with internal systems and unreliable external services.",
        solution:
          "I led the architecture and implementation of a reactive platform based on WebFlux, orchestrating internal banking services and external judicial services, with strict business validations, resilient error handling and full transaction traceability.",
        impact:
          "Shorter processing times, reduced operational risk and a stable system even under high concurrency and traffic spikes.",
        metrics: [
          "Average processing time per court order reduced from several minutes to tens of seconds.",
          "Capability to process hundreds of concurrent court orders without significant performance degradation.",
          "Reduction in operational incidents associated with the manual processing of court orders.",
        ],
        technicalSummary:
          "Backend platform built on Java and Spring WebFlux, integrating banking microservices and external judicial services in an end-to-end reactive design.",
        technicalHighlights: [
          "Orchestration of court-order flows using WebFlux and WebClient.",
          "Handling of backpressure, timeouts, retries and circuit breakers for external services.",
          "Centralised business validations and complete traceability for every state change.",
          "Observability-oriented design for production banking environments.",
        ],
      },
      {
        title: "Banking backends for a savings & investment product",
        context: "Bank · Senior backend · Java / Spring Boot",
        tags: ["SPRING BOOT", "APIS", "MIGRATION", "SAVINGS & INVESTMENT"],
        challenge:
          "The bank needed to enable a new savings product with an investment component, coexisting with legacy systems, complex business rules and multiple channels (web, mobile, branches).",
        solution:
          "I designed and developed Java/Spring Boot backends with contract-first APIs, refactored critical business logic and enabled a progressive migration from legacy systems, supported by automated regression tests.",
        impact:
          "Controlled product launch, reduced migration risk and a more maintainable technology baseline for future extensions.",
        metrics: [
          "Perceptible improvement in response times for queries and operations compared to the legacy system.",
          "Stage-by-stage migration without significant interruptions for customer channels.",
          "Reduction in incidents caused by inconsistent business rules between systems.",
        ],
        technicalSummary:
          "Java/Spring Boot backends exposed via REST APIs, aligned to a domain model for savings with investment and prepared for future evolution.",
        technicalHighlights: [
          "Contract-first API design documented with OpenAPI.",
          "Clear separation between domain, application and infrastructure layers.",
          "Adapters to integrate with legacy systems without breaking existing contracts.",
          "Automated regression testing for critical product scenarios.",
        ],
      },
      {
        title: "Backends for high-concurrency logistics operations",
        context: "National logistics · Senior backend · Integrations",
        tags: ["LOGISTICS", "INTEGRATIONS", "HIGH CONCURRENCY"],
        challenge:
          "Nationwide logistics operations required coordinating multiple management systems, warehouses and sales channels, with a high risk of stock inconsistencies and order-processing bottlenecks.",
        solution:
          "I developed backend services that centralise business rules and integrate multiple data sources, supported by messaging and integration patterns to decouple processes and optimise access to operational information.",
        impact:
          "Improved order-processing times, fewer stock errors and better near-real-time visibility of the logistics state.",
        metrics: [
          "Reduction in stock errors recorded in central systems.",
          "Faster order processing during peak-demand periods.",
          "Higher capacity to absorb load spikes without affecting operations teams.",
        ],
        technicalSummary:
          "Backend services that integrate inventory-management systems, sales channels and distribution processes into a unified layer.",
        technicalHighlights: [
          "Modelling of key operational entities (orders, stock, warehouses, movements).",
          "Use of queues/messaging to decouple I/O-intensive processes.",
          "Optimisation of queries over high-volume transactional data.",
          "Endpoint design focused on high-frequency concurrent operations.",
        ],
      },
      {
        title: "Mutual-fund integration between bank and investment subsidiary",
        context: "Bank & investment subsidiary · Architecture & backend",
        tags: ["MUTUAL FUNDS", "INTEGRATION", "INVESTMENTS", "BANKING"],
        challenge:
          "Mutual-fund contracting and management were split between the bank and its investment subsidiary, with heterogeneous systems, different data models and distinct regulatory requirements per entity.",
        solution:
          "I led the architecture and backend development to integrate both worlds through clear integration contracts, consistent data mappings and orchestration of high-criticality transactional flows.",
        impact:
          "Unified customer experience, fewer manual reprocesses and better end-to-end traceability of investment operations between bank and investment arm.",
        metrics: [
          "Decrease in manual reprocessing between bank and investment arm for mutual-fund operations.",
          "Reduced time to resolve operational discrepancies.",
          "Improved end-to-end traceability for audits and regulatory reviews.",
        ],
        technicalSummary:
          "Integration solution centred on clear contracts between the banking core and the investments platform for mutual funds.",
        technicalHighlights: [
          "Mapping models between bank accounts, investment orders and fund positions.",
          "Idempotent, consistent transactional flows for high-criticality operations.",
          "Cross-validation of accounting and regulatory rules between both entities.",
          "Internal APIs exposed for commercial channels and back-office systems.",
        ],
      },
    ],

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

export const resolveSuccessStoriesLocale = (locale?: Locale): SuccessStoriesLocale => {
  const value = (locale as string | undefined) ?? "es";
  if (value === "en" || value.startsWith("en")) return "en";
  return "es";
};

// Función usada por SuccessStoryCard para labels
export const getSuccessStoryTexts = (locale?: Locale) => {
  const key = resolveSuccessStoriesLocale(locale);
  return successStoriesTexts[key];
};
