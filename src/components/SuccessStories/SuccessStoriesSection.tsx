"use client";

import { SuccessStoryCard } from "./SuccessStoryCard";
import {
  IconTopologyStar3,
  IconBuildingBank,
  IconShare3,
  IconInfoCircle,
  IconTruck,
  IconArrowsExchange,
} from "@tabler/icons-react";

export const SuccessStoriesSection = () => {
  const stories = [
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
      icon: <IconTopologyStar3 className="h-5 w-5 text-accent" />,
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
      icon: <IconBuildingBank className="h-5 w-5 text-accent" />,
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
      icon: <IconTruck className="h-5 w-5 text-accent" />,
    },
    {
      title:
        "Integración de fondos mutuos entre banca y filial de inversiones",
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
      icon: <IconArrowsExchange className="h-5 w-5 text-accent" />,
    },
  ];

  return (
    <section id="success-stories" className="my-20">
      {/* CONTENEDOR AJUSTADO A 1100px */}
      <div className="mx-auto max-w-[1100px] px-4">
        {/* Título centrado */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary-content mb-6">
          Casos de éxito
        </h2>

        {/* Caja informativa */}
        <div
          className="
            mb-10 flex items-start gap-3 rounded-xl 
            border border-accent/30 bg-secondary/70 
            p-4 text-primary-content/80
          "
        >
          <IconInfoCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />

          <p className="text-sm leading-relaxed">
            La siguiente sección presenta una selección de proyectos en los que
            he contribuido como parte de mi experiencia en distintas
            organizaciones. Las descripciones se expresan de manera general para
            respetar los compromisos éticos y contractuales de confidencialidad
            propios del trabajo en entornos empresariales y bancarios.
          </p>
        </div>

        {/* LISTA DE TARJETAS */}
        <div className="flex flex-col gap-5 w-full">
          {stories.map((story, i) => (
            <SuccessStoryCard key={i} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};
