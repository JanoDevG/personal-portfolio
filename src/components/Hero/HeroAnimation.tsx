// src/components/Hero/HeroAnimation.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import businessTeamAnimation from "@/assets/animations/Business_team.json";
import itDealAnimation from "@/assets/animations/IT_Deal.json";
import assemblingPuzzle from "@/assets/animations/Assembling_puzzle.json";
import buildingWebsite from "@/assets/animations/Building_Website.json";
import contractProcess from "@/assets/animations/contract_process.json";

type HeroAnimationProps = {
  className?: string;
};

const DISPLAY_TIME = 5000;   // 5 segundos visible “normal”
const TRANSITION_TIME = 400; // ms para el scale in/out

const animations = [
  businessTeamAnimation,
  itDealAnimation,
  assemblingPuzzle,
  buildingWebsite,
  contractProcess,
];

const HeroAnimation = ({ className }: HeroAnimationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [entering, setEntering] = useState(true); // true = grande/opaco, false = chico/transparente

  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Limpieza de todos los timeouts
  const clearAllTimeouts = () => {
    timeouts.current.forEach((id) => clearTimeout(id));
    timeouts.current = [];
  };

  useEffect(() => {
    clearAllTimeouts();

    // 1) Mantener la animación actual 5 segundos “normal”
    const displayTimeout = setTimeout(() => {
      // 2) Empezar transición de salida (se achica y se apaga)
      setEntering(false);

      // 3) Luego de la transición, cambiar al siguiente JSON y hacer entrar de nuevo
      const switchTimeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % animations.length);
        setEntering(true); // el nuevo entra agrandándose y apareciendo
      }, TRANSITION_TIME);

      timeouts.current.push(switchTimeout);
    }, DISPLAY_TIME);

    timeouts.current.push(displayTimeout);

    // Limpieza al desmontar o al cambiar de índice
    return () => {
      clearAllTimeouts();
    };
  }, [currentIndex]);

  const currentAnimation = animations[currentIndex];

  return (
    <div
      className={`relative flex items-center justify-center ${
        className ?? ""
      }`}
    >
      <div
        className={`
          relative w-full max-w-[500px]
          transition-all duration-300 ease-in-out
          ${entering ? "scale-100 opacity-100" : "scale-75 opacity-0"}
        `}
      >
        <Lottie
  key={currentIndex}
  animationData={currentAnimation}
  loop
  autoplay
  style={{
    width: "100%",
    height: "auto",
    filter: currentAnimation === contractProcess ? "invert(1)" : "none",
  }}
/>

      </div>
    </div>
  );
};

export default HeroAnimation;
