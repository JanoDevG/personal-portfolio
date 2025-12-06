"use client";

import { BentoGrid, BentoGridItem } from "../UI/bento-grid";

import {
  IconTopologyStar3,
  IconBuildingBank,
  IconShare3,
  IconActivityHeartbeat,
  IconUsersGroup,
  IconShieldCheck,
  IconDatabase,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div
    className="
      w-full h-full min-h-[7rem]
      rounded-xl 
      bg-gradient-to-r 
      from-accent/20 via-accent/10 to-accent/5
      animate-pulse
    "
  />
);

const items = [
  // Fila 1
  {
    title: "Arquitecturas backend reactivas",
    description:
      "Pipelines no bloqueantes con Java y Spring WebFlux para cargas altamente concurrentes.",
    header: <Skeleton />,
    icon: <IconTopologyStar3 className="h-5 w-5 text-accent" stroke={1.5} />,
    className: "md:col-span-2",
  },
  {
    title: "Sistemas bancarios y misión crítica",
    description:
      "Diseño de plataformas enterprise con foco en resiliencia, SLOs y escalabilidad.",
    icon: <IconBuildingBank className="h-5 w-5 text-accent" stroke={1.5} />,
  },

  // Fila 2
  {
    title: "Integración y mensajería empresarial",
    description:
      "Kafka, APIs REST, colas de mensajes y patrones de integración para conectar sistemas complejos.",
    icon: <IconShare3 className="h-5 w-5 text-accent" stroke={1.5} />,
  },
  {
    title: "Observabilidad & rendimiento",
    description:
      "Trazas distribuidas, métricas, logs y tuning avanzado para mantener SLOs en producción.",
    header: <Skeleton />,
    icon: <IconActivityHeartbeat className="h-5 w-5 text-accent" stroke={1.5} />,
    className: "md:col-span-2",
  },

  // Fila 3 completa
  {
    title: "Modelado & persistencia de datos",
    description:
      "Optimización de consultas, índices y modelos para escenarios OLTP y cargas reactivas.",
    icon: <IconDatabase className="h-5 w-5 text-accent" stroke={1.5} />,
  },
  {
    title: "Arquitectura evolutiva & liderazgo técnico",
    description:
      "Decisiones estratégicas, gobierno de arquitectura y acompañamiento técnico a equipos.",
    icon: <IconUsersGroup className="h-5 w-5 text-accent" stroke={1.5} />,
  },
  {
    title: "Calidad, testing & automatización",
    description:
      "Estrategias de aseguramiento de calidad y pruebas automatizadas que protegen cada despliegue.",
    icon: <IconShieldCheck className="h-5 w-5 text-accent" stroke={1.5} />,
  },
];


export const ExecutiveBentoGrid = () => {
  return (
    <div className="mt-10 w-full">
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem
  key={i}
  index={i}
  {...item}
/>

        ))}
      </BentoGrid>
    </div>
  );
};
