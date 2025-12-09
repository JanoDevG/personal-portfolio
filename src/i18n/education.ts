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
        "Por privacidad, solo comparto mi certificado de título firmado digitalmente dentro de un proceso real de selección.",
      contact: "Si necesitas validarlo, contáctame por LinkedIn:",
      understood: "Entendido",
    },

    stories: {
      formalDegree: {
        title: "Ingeniería en Informática",
        context: "Título profesional · Universidad Tecnológica de Chile INACAP",
        period: "Carrera finalizada",
        summary:
          "Formación en ingeniería de software, bases de datos, arquitectura de sistemas y desarrollo de aplicaciones empresariales.",
        details:
          "Este ciclo formal me dio la base sólida en programación, estructuras de datos, diseño de bases de datos, redes y fundamentos de arquitectura de software.",
        highlights: [
          "Enfoque en ingeniería de software.",
          "Modelado de datos y desarrollo empresarial.",
          "Fundamentos aplicables a proyectos reales.",
        ],
      },

      ocp17: {
        title: "Oracle Certified Professional: Java SE 17 Developer",
        context: "Certificación oficial · Oracle",
        period: "Issued Jun 2025",
        summary:
          "Certificación que valida dominio avanzado del lenguaje Java SE 17.",
        highlights: [
          "APIs modernas de Java.",
          "Concurrencia, Streams, Lambdas.",
          "Buenas prácticas de diseño.",
        ],
      },

      apigeeSpecialization: {
        title:
          "Programa Especializado – Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        summary: "Especialización en diseño y operación de APIs APIGEE.",
      },

      javaMaster: {
        title: "Máster Completo en Java (+180 hrs)",
        context: "Udemy",
        summary: "Intensivo para dominar Java moderno.",
      },

      gitflow: {
        title: "Curso GitFlow en GitLab / GitHub",
        context: "Udemy",
        summary: "Práctica profesional de GitFlow para equipos.",
      },

      cloudDiploma: {
        title: "Diplomado en Arquitectura y Seguridad Cloud",
        context: "USACH",
        period: "En formación",
        summary: "Diseño de arquitecturas cloud seguras y escalables.",
      },

      bian: {
        title: "BIAN Foundation Certification",
        context: "BIAN",
        summary:
          "Estándar global para arquitecturas bancarias basadas en servicios.",
      },

      springPro: {
        title: "Spring Professional Certification",
        context: "VMware",
        summary: "Certificación oficial sobre el ecosistema Spring.",
      },

      azureFundamentals: {
        title: "Microsoft Azure Fundamentals",
        context: "Microsoft",
        summary: "Fundamentos esenciales de Azure Cloud.",
      },
    },
  },

  en: {
    title: "Education, certifications and continuous learning",
    subtitle: "A quick overview of my academic and technical formation",

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
        "For privacy reasons, I only share my official digital certificate during a real selection process.",
      contact: "If you need to validate it, contact me via LinkedIn:",
      understood: "Understood",
    },

    stories: {
      formalDegree: {
        title: "Computer Engineering",
        context:
          "Professional degree · Universidad Tecnológica de Chile INACAP",
        period: "Degree completed",
        summary:
          "Training in software engineering, databases, system architecture and enterprise application development.",
        details:
          "This formal education cycle gave me a solid foundation in programming, data structures, database design, networking and software architecture fundamentals.",
        highlights: [
          "Focus on software engineering.",
          "Data modeling and enterprise development.",
          "Foundations applicable to real-world projects.",
        ],
      },

      ocp17: {
        title: "Oracle Certified Professional: Java SE 17 Developer",
        context: "Official certification · Oracle",
        period: "Issued Jun 2025",
        summary:
          "Certification that validates advanced proficiency in Java SE 17.",
        highlights: ["Modern Java APIs.", "Concurrency, Streams, Lambdas.", "Design best practices."],
      },

      apigeeSpecialization: {
        title:
          "Specialization – Developing APIs with Google Cloud's Apigee API Platform",
        context: "Coursera · Google Cloud",
        summary:
          "Specialization focused on the design and operation of APIs on Apigee.",
      },

      javaMaster: {
        title: "Complete Java Masterclass (+180 hrs)",
        context: "Udemy",
        summary: "Intensive training to master modern Java.",
      },

      gitflow: {
        title: "GitFlow Course on GitLab / GitHub",
        context: "Udemy",
        summary: "Professional GitFlow practice for engineering teams.",
      },

      cloudDiploma: {
        title: "Diploma in Cloud Architecture and Security",
        context: "USACH",
        period: "In progress",
        summary: "Design of secure and scalable cloud architectures.",
      },

      bian: {
        title: "BIAN Foundation Certification",
        context: "BIAN",
        summary: "Global standard for service-based banking architectures.",
      },

      springPro: {
        title: "Spring Professional Certification",
        context: "VMware",
        summary: "Official certification focused on the Spring ecosystem.",
      },

      azureFundamentals: {
        title: "Microsoft Azure Fundamentals",
        context: "Microsoft",
        summary: "Essential foundations of Azure Cloud.",
      },
    },
  },
} as const;

export type EducationLocale = keyof typeof educationTexts;

export const getEducationTexts = (locale: Locale) =>
  educationTexts[locale] ?? educationTexts.es;
