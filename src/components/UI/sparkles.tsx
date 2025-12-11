'use client'

import React, { useEffect, useId, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { motion, useAnimation } from 'motion/react'

type SparklesCoreProps = {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

/**
 * Utilidad simple para concatenar clases (evita depender de clsx/twMerge aquí).
 */
function cn(...classes: Array<string | null | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id,
  className,
  background = '#0d47a1',
  minSize = 1,
  maxSize = 3,
  speed = 4,
  particleColor = '#ffffff',
  particleDensity = 120,
}) => {
  const [ready, setReady] = useState(false)
  const controls = useAnimation()
  const generatedId = useId()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const handleLoaded = async (container?: Container) => {
    if (!container) return

    await controls.start({
      opacity: 1,
      transition: { duration: 1 },
    })
  }

  return (
    <motion.div
      animate={controls}
      className={cn('pointer-events-none opacity-0', className)}
    >
      {ready && (
        <Particles
          id={id ?? generatedId}
          className="h-full w-full"
          particlesLoaded={handleLoaded}
          options={{
            background: { color: { value: background } },
            fullScreen: { enable: false, zIndex: 0 },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: 'push' },
                resize: { enable: true },
                },
              modes: {
                push: { quantity: 4 },
              },
            },
            particles: {
              number: {
                value: particleDensity,
                density: { enable: true, width: 400, height: 400 },
              },
              color: { value: particleColor },
              shape: { type: 'circle' },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed,
                  startValue: 'random',
                  sync: false,
                },
              },
              size: {
                value: { min: minSize, max: maxSize },
              },
              move: {
                enable: true,
                direction: 'none',
                random: false,
                speed: { min: 0.1, max: 1 },
                outModes: { default: 'out' },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  )
}
