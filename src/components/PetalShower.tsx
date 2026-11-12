import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'petal' | 'sparkle';
}

export const PetalShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petalColors = [
      'rgba(190, 18, 60, 0.75)',   // Rose Red
      'rgba(225, 29, 72, 0.65)',   // Crimson
      'rgba(244, 63, 94, 0.6)',    // Bright Rose
      'rgba(212, 175, 55, 0.8)',   // Gold dust
      'rgba(245, 158, 11, 0.7)',   // Marigold amber
    ];

    const particleCount = window.innerWidth < 768 ? 24 : 45;
    const particles: Petal[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 0.8 - 0.4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.4,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        type: Math.random() > 0.35 ? 'petal' : 'sparkle',
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.type === 'petal') {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, p.size / 4, 0, p.size);
        ctx.bezierCurveTo(-p.size, p.size / 4, -p.size / 2, -p.size / 2, 0, 0);
        ctx.fill();
      } else {
        // Golden sparkle / star
        ctx.beginPath();
        const r = p.size * 0.4;
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#d4af37';
        ctx.fill();
      }

      ctx.restore();
    };

    let tick = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.015;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += Math.sin(tick + i) * 0.8 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      style={{ opacity: 0.85 }}
    />
  );
};
