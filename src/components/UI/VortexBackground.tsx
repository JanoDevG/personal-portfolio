"use client";

import React, { useEffect, useRef } from "react";
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

/** Utilidad mínima para unir clases */
const cn = (...classes: Array<string | undefined | null | false>) =>
  classes.filter(Boolean).join(" ");

const PREMIUM_PALETTE = [
  110, // 💚 verde fluorescente premium
  150, // verde claro spring
  165, // turquesa verdoso
  45,  // dorado elegante
  35,  // dorado oscuro cálido
  215, // azul profundo brillante
];

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
  let center: [number, number] = [0, 0];
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

  const randomHue = () =>
    PREMIUM_PALETTE[Math.floor(Math.random() * PREMIUM_PALETTE.length)];

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = randomHue();

    props.set([x, y, 0, 0, life, ttl, radius, hue], i);
  };

  const initParticles = () => {
    props = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

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
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let x = props[i];
    let y = props[i + 1];
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

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(180%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const resize = (canvas: HTMLCanvasElement) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.45 * canvas.height
  };

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

  const setup = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize(canvas);
    initParticles();
    draw(canvas, ctx);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setup();

    const onResize = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) resize(canvas);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full", containerClassName)}
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
