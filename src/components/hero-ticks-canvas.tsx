"use client";

import { useEffect, useRef } from "react";

type Tick = {
  x: number;
  y: number;
  speed: number;
  length: number;
  alpha: number;
  buy: boolean;
};

function withAlpha(color: string, alpha: number) {
  const value = color.trim();
  if (value.startsWith("oklch(") && !value.includes("/")) {
    return value.replace(/\)$/, ` / ${alpha})`);
  }
  if (value.startsWith("lab(") && !value.includes("/")) {
    return value.replace(/\)$/, ` / ${alpha})`);
  }
  return value;
}

export function HeroTicksCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let ticks: Tick[] = [];
    let raf = 0;
    let buyColor = "oklch(0.75 0.17 155)";
    let sellColor = "oklch(0.72 0.18 25)";
    let reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      buyColor = styles.getPropertyValue("--buy").trim() || buyColor;
      sellColor = styles.getPropertyValue("--sell").trim() || sellColor;
    };

    const createTick = (w: number, h: number, randomY = false): Tick => ({
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -20 - Math.random() * 80,
      speed: 0.35 + Math.random() * 0.9,
      length: 6 + Math.random() * 14,
      alpha: 0.12 + Math.random() * 0.35,
      buy: Math.random() > 0.42,
    });

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.floor((width * height) / 18000));
      ticks = Array.from({ length: count }, () => createTick(width, height, true));
    };

    const draw = () => {
      const { width, height } = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const list = reducedMotion ? ticks.slice(0, 18) : ticks;

      for (const tick of list) {
        if (!reducedMotion) {
          tick.y += tick.speed;
          if (tick.y - tick.length > height) {
            Object.assign(tick, createTick(width, height));
          }
        }

        ctx.strokeStyle = withAlpha(
          tick.buy ? buyColor : sellColor,
          tick.alpha
        );
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(tick.x, tick.y);
        ctx.lineTo(tick.x, tick.y - tick.length);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(tick.x - 2.5, tick.y - tick.length * 0.55);
        ctx.lineTo(tick.x + 2.5, tick.y - tick.length * 0.55);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    readColors();
    resize();
    draw();

    const onResize = () => resize();
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotion = () => {
      reducedMotion = motionQuery.matches;
    };

    window.addEventListener("resize", onResize);
    motionQuery.addEventListener("change", onMotion);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      motionQuery.removeEventListener("change", onMotion);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none h-full w-full" />;
}
