"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

import laptop from "@/assets/animations/Laptop.json";
import coffe_orange from "@/assets/animations/coffe_orange.json";
import social from "@/assets/animations/social_media_network.json";

const animations = [laptop, coffe_orange, social];

export default function AnimatedPanel() {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % animations.length);
  };

  return (
    <div
      className="
        flex items-center justify-center w-full 
        p-4
        /* Altura consistente en todos los tamaños */
        h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px]
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <Lottie
            animationData={animations[index]}
            loop={false}
            onComplete={goNext}
            className="w-full h-full object-contain pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
