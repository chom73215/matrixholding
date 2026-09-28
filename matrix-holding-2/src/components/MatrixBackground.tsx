import React, { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  density?: 'low' | 'normal' | 'high';
  interactive?: boolean;
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({
  density = 'normal',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
    }

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = [];
      const isMobile = width < 768;
      let count = isMobile ? 32 : 70;
      if (density === 'low') count = isMobile ? 20 : 40;
      if (density === 'high') count = isMobile ? 45 : 95;

      for (let i = 0; i < count; i++) {
        const isCyan = Math.random() > 0.4;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          size: Math.random() * 1.8 + 1,
          baseAlpha: Math.random() * 0.4 + 0.2,
          color: isCyan ? '#00F0FF' : '#00FF9D',
        });
      }
    };

    initNodes();

    const render = (_time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connections between nodes
      const maxDistance = width < 768 ? 90 : 130;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Move
        a.x += a.vx;
        a.y += a.vy;

        // Bounce
        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Connect to other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse connection if nearby
        if (interactive && mouse.x > 0) {
          const mdx = a.x - mouse.x;
          const mdy = a.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < mouse.radius) {
            const mAlpha = (1 - mDist / mouse.radius) * 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 255, 157, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.size, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.globalAlpha = a.baseAlpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [density, interactive]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle perspective grid lines */}
      <div className="absolute inset-0 perspective-grid opacity-20 pointer-events-none" />
      
      {/* Top subtle cyan ambient light */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Bottom subtle green glow */}
      <div className="absolute -bottom-[20%] right-[10%] w-[600px] h-[500px] bg-[#00FF9D]/4 rounded-full blur-[150px] pointer-events-none" />

      {/* Network Node Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
      />
    </div>
  );
};
