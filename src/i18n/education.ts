// src/i18n/education.ts
import { type Locale } from "./messages";

export const educationTexts = {
  es: {
    title: "Educación, certificaciones y formación continua",
    subtitle: "Una vista rápida de mi formación profesional y técnica",

    kinds: {
      formal: "Educación formal",
      cert: "Certificación",
      learning: "Formación continua",
    },

    status: {
      inProgress: "EN FORMACIÓN",
      upcoming: "PRÓXIMAMENTE",
    },

    modal: {
      title: "Verificación de título profesional",
      privacy:
        "Por razones de privacidad: una copia de mi certificado de título solo puede ser otorgada dentro de un proceso de selección real de mutuo acuerdo e interés. Gracias por la comprensión.",
      contact:
        "Puedes contactarme por LinkedIn en caso de estar interesado en mi perfil:",
      understood: "Entendido",
    },

    stories: {
      formalDegree: {
        title: "Ingeniería en Informática",
        context:
          "Título profesional · Universidad Tecnológica de Chile INACAP",
        period: "Carrera finalizada",
        summary:
          "Título profesional como Ingeniero en Informática con grado académico de Licenciado en Informática.",
        details:
          "Este ciclo formal me dio una base sólida en programación, estructuras de datos, diseño de bases de datos, redes y fundamentos de arquitectura de software.",
        highlights: [
          "Habilidad técnica y analítica para el diseño de datos y el modelado de negocio / dominio.",
          "Modelamiento de datos normalizados para bases de datos relacionales y documentales.",
          "Fundamentos y aplicación para el desarrollo de software.",
          "Dominio de herramientas de apoyo, gestión y desarrollo de software.",
          "Gestión crítica de necesidades del cliente y desarrollo evolutivo.",
        ],
      },

      ocp17: {
        title: "Oracle Certified Professional: Java SE 17 Developer",
        context: "Certificación oficial · Oracle",
        period: "Oracle Corporation",
        summary:
          "Certificación oficial impartida por Oracle, que valida dominio avanzado del lenguaje Java SE 17.",
        highlights: [
          "Dominio avanzado del lenguaje Java SE 17 (records, sealed classes, text blocks, pattern matching).",
          "Uso efectivo de Streams, programación funcional y concurrencia moderna (Executors, CompletableFuture).",
          "Diseño de código robusto con manejo de errores, testing y principios de seguridad aplicados a APIs Java.",
        ],
      },

      apigeeSpecialization: {
        title:
          "Programa Especializado: Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        summary:
          "Formación orientada al diseño, publicación y gobierno de APIs sobre la plataforma Google Apigee.",
        highlights: [
          "Diseño de APIs seguras como punto central de integración entre clientes y servicios (API Gateway).",
          "Aplicación de OAuth 2.0 en sus principales flujos de autorización para asegurar el acceso a las APIs.",
          "Diseño de APIs bajo metodología API First.",
          "Uso y práctica de políticas de seguridad en Apigee para mitigar riesgos de inyección y otros ataques comunes.",
        ],
      },

      javaMaster: {
        title: "Máster Completo en Java (+180 hrs)",
        context: "Udemy",
        summary:
          "Curso intensivo de Java para profundizar en patrones de diseño, paradigmas de programación e integraciones con el ecosistema Spring.",
      },

      gitflow: {
        title: "Curso GitFlow en GitLab / GitHub",
        context: "Udemy",
        summary:
          "Curso complementario para aplicar buenas prácticas y uso de GitFlow dentro de equipos de desarrollo.",
      },

      cloudDiploma: {
        title: "Diplomado en Arquitectura y Seguridad Cloud",
        context: "Universidad de Santiago de Chile - USACH",
        period: "En formación",
        summary:
          "Diplomado para profundizar en Arquitectura de Software y su aplicación en entornos Cloud, con foco en capas y herramientas para la seguridad en la nube.",
      },

      bian: {
        title: "BIAN Foundation Certification",
        context: "Banking Industry Architecture Network",
        summary:
          "Estándar global para arquitecturas bancarias basadas en servicios, orientado a descomponer sistemas legacy en dominios de negocio modulares y APIs estandarizadas, acelerando la integración y la modernización de plataformas bancarias.",
      },

      springPro: {
        title: "Spring Professional Certification v2 2025",
        context: "Broadcom",
        summary:
          "Certificación oficial sobre el ecosistema Spring, validando dominio sobre el framework predominante para sistemas y ecosistemas construidos sobre Java.",
      },

      azureFundamentals: {
        title: "Microsoft Azure Fundamentals",
        context: "Microsoft",
        summary:
          "Fundamentos esenciales de Azure Cloud. Primera certificación como punto de partida para el desarrollo de software en la nube.",
      },
    },
  },

  en: {
    title: "Education, certifications and continuous learning",
    subtitle: "A quick overview of my academic and technical background",

    kinds: {
      formal: "Formal education",
      cert: "Certification",
      learning: "Continuous learning",
    },

    status: {
      inProgress: "IN PROGRESS",
      upcoming: "COMING SOON",
    },

    modal: {
      title: "Degree verification",
      privacy:
        "For privacy reasons: a copy of my degree certificate can only be shared within a real selection process where there is mutual interest. Thank you for your understanding.",
      contact:
        "You can contact me via LinkedIn if you are interested in my profile:",
      understood: "Understood",
    },

    stories: {
      formalDegree: {
        title: "Computer Engineering",
        context:
          "Professional degree · Universidad Tecnológica de Chile INACAP",
        period: "Degree completed",
        summary:
          "Professional degree in Computer Engineering with an academic Bachelor's degree in Computer Science.",
        details:
          "This formal education provided a solid foundation in programming, data structures, database design, networking and software architecture fundamentals.",
        highlights: [
          "Strong technical and analytical skills for data design and business/domain modeling.",
          "Normalized data modeling for relational and document-oriented databases.",
          "Foundations and practical application for software development.",
          "Proficiency with tools for software management, collaboration and development.",
          "Critical assessment of customer needs and evolutionary product development.",
        ],
      },

      ocp17: {
        title: "Oracle Certified Professional: Java SE 17 Developer",
        context: "Official certification · Oracle",
        period: "Oracle Corporation",
        summary:
          "Official certification issued by Oracle that validates advanced mastery of the Java SE 17 language.",
        highlights: [
          "Advanced command of Java SE 17 language features (records, sealed classes, text blocks, pattern matching).",
          "Effective use of Streams, functional programming and modern concurrency (Executors, CompletableFuture).",
          "Design of robust code with proper error handling, testing and security principles applied to Java APIs.",
        ],
      },

      apigeeSpecialization: {
        title:
          "Specialization: Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        summary:
          "Training focused on the design, publishing and governance of APIs on the Google Apigee platform.",
        highlights: [
          "Design of secure APIs as the central integration layer between clients and backend services (API Gateway).",
          "Application of OAuth 2.0 main authorization flows to secure API access.",
          "API design following an API-First methodology.",
          "Use and practice of Apigee security policies to mitigate injection risks and other common attacks.",
        ],
      },

      javaMaster: {
        title: "Complete Java Masterclass (+180 hrs)",
        context: "Udemy",
        summary:
          "Intensive Java course to deepen design patterns, programming paradigms and integrations with the Spring ecosystem.",
      },

      gitflow: {
        title: "GitFlow Course on GitLab / GitHub",
        context: "Udemy",
        summary:
          "Complementary course to apply GitFlow and good branching practices within development teams.",
      },

      cloudDiploma: {
        title: "Diploma in Cloud Architecture and Security",
        context: "Universidad de Santiago de Chile (USACH)",
        period: "In progress",
        summary:
          "Postgraduate diploma to deepen Software Architecture and apply it in Cloud environments, with a focus on security layers and tooling.",
      },

      bian: {
        title: "BIAN Foundation Certification",
        context: "Banking Industry Architecture Network",
        summary:
          "Global standard for service-based banking architectures, focused on decomposing legacy systems into modular business domains and standardized APIs to accelerate integration and modernization of banking platforms.",
      },

      springPro: {
        title: "Spring Professional Certification v2 2025",
        context: "Broadcom",
        summary:
          "Official certification on the Spring ecosystem, validating strong command of the leading framework for Java-based systems and platforms.",
      },

      azureFundamentals: {
        title: "Microsoft Azure Fundamentals",
        context: "Microsoft",
        summary:
          "Essential Azure Cloud fundamentals and first certification as a starting point for cloud-native software development.",
      },
    },
  },
} as const;

export type EducationLocale = keyof typeof educationTexts;

export const getEducationTexts = (locale: Locale) =>
  educationTexts[locale] ?? educationTexts.es;
