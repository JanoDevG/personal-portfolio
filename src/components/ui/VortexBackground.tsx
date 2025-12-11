"use client";

/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

type VortexBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
};

const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

/* -------------------------------------------------------------
   Convertidor HEX → Hue dinámico
------------------------------------------------------------- */
const cssVarToHue = (name: string): number => {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

  if (!raw || !raw.startsWith("#")) return 200;

  const hex = raw.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  if (max !== min) {
    if (max === r) h = (60 * ((g - b) / (max - min)) + 360) % 360;
    else if (max === g) h = 60 * ((b - r) / (max - min)) + 120;
    else h = 60 * ((r - g) / (max - min)) + 240;
  }

  return Math.round(h);
};

const VortexBackground: React.FC<VortexBackgroundProps> = ({
  children,
  className,
  containerClassName,
  particleCount = 650,
  rangeY = 240,
  baseSpeed = 0.15,
  rangeSpeed = 1.0,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* ---------------------------------------------------------
     PALETA DINÁMICA
  --------------------------------------------------------- */
  const [palette, setPalette] = useState<number[]>([]);

  useEffect(() => {
    const computePalette = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const isDark = theme === "dark";

      if (isDark) {
        return [
          cssVarToHue("--a"),
          cssVarToHue("--pc"),
          cssVarToHue("--sc"),
          cssVarToHue("--tc"),
        ];
      }

      // Paleta especial para modo claro
      return [215, 195, 175, 255];
    };

    setPalette(computePalette());

    const observer = new MutationObserver(() => {
      setPalette(computePalette());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const randomHue = () =>
    palette[Math.floor(Math.random() * palette.length)] ?? 200;

  /* ---------------------------------------------------------
     SISTEMA DE PARTÍCULAS
  --------------------------------------------------------- */

  const particlePropCount = 8;
  const particlePropsLength = particleCount * particlePropCount;

  const baseTTL = 60;
  const rangeTTL = 140;
  const noiseSteps = 3;

  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.00045;

  let tick = 0;
  const noise3D = createNoise3D();

  const center = { x: 0, y: 0 };

  let props = new Float32Array(particlePropsLength);

  const TAU = Math.PI * 2;

  const rand = (n: number) => Math.random() * n;
  const randRange = (n: number) => n - Math.random() * (n * 2);

  const fadeInOut = (t: number, m: number) => {
    const h = 0.5 * m;
    return Math.abs(((t + h) % m) - h) / h;
  };

  const lerp = (n1: number, n2: number, speed: number) =>
    (1 - speed) * n1 + speed * n2;

  /* ---------------------------------------------------------
     Inicializar partículas
  --------------------------------------------------------- */
  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas || palette.length === 0) return;

    const x = rand(canvas.width);
    const y = center.y + randRange(rangeY);

    const ttl = baseTTL + rand(rangeTTL);

    props.set(
      [x, y, 0, 0, 0, ttl, baseRadius + rand(rangeRadius), randomHue()],
      i
    );
  };

  const initParticles = () => {
    props = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  /* ---------------------------------------------------------
     Renderizar partícula
  --------------------------------------------------------- */
  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";

    const alphaBoost = isLight ? 1.35 : 1.15;
    const rawAlpha = fadeInOut(life, ttl) * alphaBoost;

    const alpha = Math.min(rawAlpha, 0.85);

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;

    ctx.strokeStyle = `hsla(${hue}, 95%, 55%, ${alpha})`;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };

  /* ---------------------------------------------------------
     Actualizar partícula
  --------------------------------------------------------- */
  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = props[i];
    const y = props[i + 1];

    let vx = props[i + 2];
    let vy = props[i + 3];
    let life = props[i + 4];

    const ttl = props[i + 5];
    const radius = props[i + 6];
    const hue = props[i + 7];

    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;

    vx = lerp(vx, Math.cos(n), 0.5);
    vy = lerp(vy, Math.sin(n), 0.5);

    const speed = baseSpeed + rand(rangeSpeed);

    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    props[i] = x2;
    props[i + 1] = y2;
    props[i + 2] = vx;
    props[i + 3] = vy;
    props[i + 4] = life;

    if (x2 < 0 || x2 > canvas.width || life > ttl) {
      initParticle(i);
    }
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  /* ---------------------------------------------------------
     Efecto Glow
  --------------------------------------------------------- */
  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.filter = "blur(12px) brightness(260%) saturate(120%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  /* ---------------------------------------------------------
     Resize
  --------------------------------------------------------- */
  const resize = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 1.2;

    center.x = canvas.width * 0.5;
    center.y = canvas.height * 0.25;
  };

  /* ---------------------------------------------------------
     Draw Loop
  --------------------------------------------------------- */
  const draw = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundColor && backgroundColor !== "transparent") {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    requestAnimationFrame(() => draw(canvas, ctx));
  };

  /* ---------------------------------------------------------
     Setup
  --------------------------------------------------------- */
  const setup = () => {
    const canvas = canvasRef.current;
    if (!canvas || palette.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize(canvas);
    initParticles();
    draw(canvas, ctx);
  };

  useEffect(() => {
    if (palette.length === 0) return;

    setup();

    const onResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) resize(canvas);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [palette]);

  /* ---------------------------------------------------------
     Render
  --------------------------------------------------------- */
  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", containerClassName)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <canvas ref={canvasRef} />
      </motion.div>

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export default VortexBackground;
