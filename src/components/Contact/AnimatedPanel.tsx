"use client";

import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

import laptop from "@/assets/animations/Laptop.json";
import coffe_orange from "@/assets/animations/coffe_orange.json";
import social from "@/assets/animations/social_media_network.json";

const animations = [laptop, coffe_orange, social];

export default function AnimatedPanel() {
  const [index, setIndex] = useState(0);

  // Pasar a la siguiente animación
  const goNext = () => {
    setIndex((prev) => (prev + 1) % animations.length);
  };

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        >
          <Lottie
            animationData={animations[index]}
            loop={false}
            onComplete={goNext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
