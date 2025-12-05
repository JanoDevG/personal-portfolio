"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"

interface LayoutTextFlipProps {
  text: string
  words: string[]
  duration?: number
  className?: string
}

export const LayoutTextFlip: React.FC<LayoutTextFlipProps> = ({
  text = "El valor que aporto en",
  words = [],
  duration = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (words.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, words.length])

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 text-center ${className}`}
    >
      {/* Texto fijo */}
      <motion.span
        layoutId="subtext"
        className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl text-primary-content"
      >
        {text}
      </motion.span>

      {/* Palabras dinámicas */}
      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md border border-transparent
                   bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm
                   ring shadow-black/10 ring-black/10
                   md:text-3xl lg:text-4xl
                   dark:bg-primary dark:text-accent dark:ring-1 dark:ring-accent/20 dark:shadow-accent/10"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block whitespace-nowrap"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  )
}
