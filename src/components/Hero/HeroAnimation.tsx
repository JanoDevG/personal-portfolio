"use client";

import Lottie from "lottie-react";
import businessTeamAnimation from "@/assets/animations/Business_team.json";

type HeroAnimationProps = {
  className?: string;
};

const HeroAnimation = ({ className }: HeroAnimationProps) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
    >
      <Lottie
        animationData={businessTeamAnimation}
        loop
        autoplay
        style={{
          width: "100%",
          maxWidth: 500,
          height: "auto",
        }}
      />
    </div>
  );
};

export default HeroAnimation;
