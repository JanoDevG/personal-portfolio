"use client";

import React, { useEffect, useRef } from "react";

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

import Lottie, { LottieRefCurrentProps } from "lottie-react";

import { messages, DEFAULT_LOCALE, type Locale } from "@/i18n/messages";

// Animaciones 1–3 (bloque Sistemas / Arquitecturas reactivas)
import profile1 from "@/assets/animations/profile/1.json";
import profile2 from "@/assets/animations/profile/2.json";
import profile3 from "@/assets/animations/profile/3.json";

// Animaciones 4–7 (bloque Arquitectura evolutiva / Observabilidad)
import profile4 from "@/assets/animations/profile/4.json";
import profile5 from "@/assets/animations/profile/5.json";
import profile6 from "@/assets/animations/profile/6.json";
import profile7 from "@/assets/animations/profile/7.json";

/* Lottie con pausa al final de cada reproducción */
const LoopWithPauseLottie = ({
  animationData,
  pauseMs = 3000,
}: {
  animationData: object;
  pauseMs?: number;
}) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleComplete = () => {
    const instance = lottieRef.current;
    if (!instance) return;

    instance.pause();

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      if (!lottieRef.current) return;
      lottieRef.current.goToAndPlay(0, true);
    }, pauseMs);
  };

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={false}
      autoplay
      onComplete={handleComplete}
      className="h-10 w-10 md:h-12 md:w-12"
    />
  );
};

/* Header 1: sistemas bancarios / reactivas (animaciones 1–3) */
const ReactiveProfileHeader = () => {
  const animations = [profile1, profile2, profile3];

  return (
    <div
      className="
        relative w-full min-h-[7rem]
        rounded-xl overflow-hidden
        bg-gradient-to-r 
        from-[--gradient-start]
        via-[--gradient-mid]
        to-[--gradient-end]
        opacity-90
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,_rgba(0,242,179,0.35),_transparent_60%)]
          mix-blend-screen
        "
      />

      <div
        className="
          relative z-10 flex h-full w-full items-center justify-center
          gap-8 px-6 py-2
        "
      >
        {animations.map((anim, idx) => (
          <div
            key={idx}
            className="
              flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-lg border border-accent/40
              bg-secondary/60 backdrop-blur-sm
              shadow-sm shadow-black/40
            "
          >
            <LoopWithPauseLottie animationData={anim} pauseMs={3000} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* Header 2: arquitectura evolutiva / observabilidad (animaciones 4–7) */
const ObservabilityProfileHeader = () => {
  const animations = [profile4, profile5, profile6, profile7];

  return (
    <div
      className="
        relative w-full min-h-[7rem]
        rounded-xl overflow-hidden
        bg-gradient-to-r 
        from-[--gradient-mid]
        via-[--gradient-end]
        to-[--gradient-start]
        opacity-90
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,_rgba(30,169,255,0.25),_transparent_60%)]
          mix-blend-screen
        "
      />

      <div
        className="
          relative z-10 flex h-full w-full items-center justify-center
          gap-6 px-4 py-2
        "
      >
        {animations.map((anim, idx) => (
          <div
            key={idx}
            className="
              flex items-center justify-center
              h-14 w-14 md:h-16 md:w-16
              rounded-lg border border-accent/40
              bg-secondary/60 backdrop-blur-sm
              shadow-sm shadow-black/40
            "
          >
            <LoopWithPauseLottie animationData={anim} pauseMs={3000} />
          </div>
        ))}
      </div>
    </div>
  );
};

type ExecutiveBentoGridProps = {
  locale?: Locale;
};

export const ExecutiveBentoGrid: React.FC<ExecutiveBentoGridProps> = ({
  locale,
}) => {
  const safeLocale: Locale = locale ?? DEFAULT_LOCALE;
  const t = messages[safeLocale].executiveGrid;

  const items = [
    // Fila 1
    {
      title: t.banking.title,
      description: t.banking.description,
      icon: <IconBuildingBank className="h-5 w-5 text-accent" stroke={1.5} />,
      header: <ReactiveProfileHeader />,
      className: "md:col-span-2",
    },
    {
      title: t.reactive.title,
      description: t.reactive.description,
      icon: <IconTopologyStar3 className="h-5 w-5 text-accent" stroke={1.5} />,
      align: "right",
    },

    // Fila 2
    {
      title: t.integration.title,
      description: t.integration.description,
      icon: <IconShare3 className="h-5 w-5 text-accent" stroke={1.5} />,
      align: "left",
    },
    {
      title: t.evolution.title,
      description: t.evolution.description,
      icon: <IconUsersGroup className="h-5 w-5 text-accent" stroke={1.5} />,
      header: <ObservabilityProfileHeader />,
      className: "md:col-span-2",
    },

    // Fila 3
    {
      title: t.observability.title,
      description: t.observability.description,
      icon: (
        <IconActivityHeartbeat className="h-5 w-5 text-accent" stroke={1.5} />
      ),
      align: "left",
    },
    {
      title: t.data.title,
      description: t.data.description,
      icon: <IconDatabase className="h-5 w-5 text-accent" stroke={1.5} />,
      align: "center",
    },
    {
      title: t.devops.title,
      description: t.devops.description,
      icon: <IconShieldCheck className="h-5 w-5 text-accent" stroke={1.5} />,
      align: "right",
    },
  ];

  return (
    <div className="mt-10 w-full">
      <BentoGrid>
        {items.map((item, i) => (
          <BentoGridItem key={i} index={i} {...item} />
        ))}
      </BentoGrid>
    </div>
  );
};
