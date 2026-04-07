"use client";

import { useEffect, useRef } from "react";
import styles from "./P3Background.module.css";

interface Shard {
  x: number;
  y: number;
  vx: number;
  vy: number;
  points: [number, number][];
  opacity: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

export default function P3Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const shards: Shard[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createShard = (x?: number, y?: number): Shard => {
      const size = Math.random() * 60 + 20;
      const angle = Math.random() * Math.PI * 2;
      const sides = Math.floor(Math.random() * 3) + 3; // 3-5 sides
      const points: [number, number][] = [];
      for (let i = 0; i < sides; i++) {
        const a = (i / sides) * Math.PI * 2 + angle;
        const r = size * (0.6 + Math.random() * 0.4);
        points.push([Math.cos(a) * r, Math.sin(a) * r]);
      }
      return {
        x: x ?? Math.random() * window.innerWidth,
        y: y ?? Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        points,
        opacity: Math.random() * 0.12 + 0.02,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
      };
    };

    const initShards = () => {
      shards.length = 0;
      const count = Math.floor(
        (window.innerWidth * window.innerHeight) / 18000
      );
      for (let i = 0; i < count; i++) shards.push(createShard());
    };

    const drawShard = (shard: Shard) => {
      ctx.save();
      ctx.translate(shard.x, shard.y);
      ctx.rotate(shard.rotation);
      ctx.beginPath();
      ctx.moveTo(shard.points[0][0], shard.points[0][1]);
      for (let i = 1; i < shard.points.length; i++) {
        ctx.lineTo(shard.points[i][0], shard.points[i][1]);
      }
      ctx.closePath();

      // Glass-like gradient fill
      const grad = ctx.createLinearGradient(
        -shard.size,
        -shard.size,
        shard.size,
        shard.size
      );
      grad.addColorStop(0, `rgba(0, 161, 241, ${shard.opacity * 1.5})`);
      grad.addColorStop(0.5, `rgba(0, 60, 120, ${shard.opacity})`);
      grad.addColorStop(1, `rgba(0, 222, 255, ${shard.opacity * 0.5})`);
      ctx.fillStyle = grad;
      ctx.fill();

      // Edge highlight
      ctx.strokeStyle = `rgba(0, 222, 255, ${shard.opacity * 2})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep blue gradient background
      const bg = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      bg.addColorStop(0, "#030d1a");
      bg.addColorStop(0.4, "#050f22");
      bg.addColorStop(0.7, "#040e1d");
      bg.addColorStop(1, "#020810");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radial glow (center-left)
      const glow1 = ctx.createRadialGradient(
        canvas.width * 0.2,
        canvas.height * 0.5,
        0,
        canvas.width * 0.2,
        canvas.height * 0.5,
        canvas.width * 0.5
      );
      glow1.addColorStop(0, "rgba(0, 100, 180, 0.12)");
      glow1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Radial glow (top-right)
      const glow2 = ctx.createRadialGradient(
        canvas.width * 0.85,
        canvas.height * 0.15,
        0,
        canvas.width * 0.85,
        canvas.height * 0.15,
        canvas.width * 0.35
      );
      glow2.addColorStop(0, "rgba(0, 161, 241, 0.08)");
      glow2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Horizontal scan-line pulse
      const time = Date.now() / 4000;
      const lineY = ((time % 1) * canvas.height * 1.2) - canvas.height * 0.1;
      const lineGrad = ctx.createLinearGradient(0, lineY - 60, 0, lineY + 60);
      lineGrad.addColorStop(0, "rgba(0, 161, 241, 0)");
      lineGrad.addColorStop(0.5, "rgba(0, 161, 241, 0.03)");
      lineGrad.addColorStop(1, "rgba(0, 161, 241, 0)");
      ctx.fillStyle = lineGrad;
      ctx.fillRect(0, lineY - 60, canvas.width, 120);

      // Draw and update shards
      for (const shard of shards) {
        drawShard(shard);
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.rotation += shard.rotationSpeed;

        // Wrap around edges
        if (shard.x < -shard.size * 2) shard.x = canvas.width + shard.size;
        if (shard.x > canvas.width + shard.size * 2) shard.x = -shard.size;
        if (shard.y < -shard.size * 2) shard.y = canvas.height + shard.size;
        if (shard.y > canvas.height + shard.size * 2) shard.y = -shard.size;
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    initShards();
    draw();

    const handleResize = () => {
      resize();
      initShards();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
