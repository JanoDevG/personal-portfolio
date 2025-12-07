"use client";

import { SuccessStoryCard } from "./SuccessStoryCard";
import {
  IconTopologyStar3,
  IconBuildingBank,
  IconShare3,
  IconInfoCircle,
} from "@tabler/icons-react";

export const SuccessStoriesSection = () => {
  const stories = [
    {
      title: "Plataforma de gestión judicial automatizada",
      context: "Banco · Backend Senior · Java WebFlux",
      tags: ["WEBFLUX", "JAVA", "REACTIVE", "SISTEMAS BANCARIOS"],
      challenge:
        "Procesos manuales lentos, alto volumen de trámites y múltiples integraciones con servicios externos poco confiables.",
      solution:
        "Implementé pipelines reactivas con WebFlux, manejo resiliente de errores, backpressure y optimización de tiempos de respuesta.",
      impact:
        "Reducción del procesamiento de minutos a segundos. Sistema estable incluso en escenarios de alta concurrencia.",
      icon: <IconTopologyStar3 className="h-5 w-5 text-accent" />,
    },
    {
      title: "Integración bancaria de alto rendimiento",
      context: "Finanzas · Integraciones · Microservicios",
      tags: ["KAFKA", "MICROSERVICIOS", "BANCA"],
      challenge:
        "Sistemas legados con comunicación lenta y poca consistencia en la transmisión de datos entre servicios críticos.",
      solution:
        "Diseñé un modelo de integración basado en eventos, desacoplamiento, colas y mecanismos de tolerancia a fallos.",
      impact:
        "Mayor disponibilidad, reducción de errores y mejoras sustanciales en tiempos de respuesta.",
      icon: <IconBuildingBank className="h-5 w-5 text-accent" />,
    },
    {
      title: "Orquestación de APIs críticas",
      context: "TI Corporativa · Arquitectura backend",
      tags: ["APIS", "REST", "SPRING BOOT", "DEVOPS"],
      challenge:
        "APIs inestables con tiempos de respuesta elevados debido a la dependencia de múltiples servicios externos.",
      solution:
        "Paralelización controlada, políticas de reintento inteligentes, timeouts, circuit breakers y optimización de consultas.",
      impact:
        "APIs más robustas, menos caídas en producción y mejor experiencia para equipos internos.",
      icon: <IconShare3 className="h-5 w-5 text-accent" />,
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

        {/* LISTA DE TARJETAS — AHORA A FULL WIDTH */}
        <div className="flex flex-col gap-5 w-full">
          {stories.map((story, i) => (
            <SuccessStoryCard key={i} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};
