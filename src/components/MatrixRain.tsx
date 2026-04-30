import { useRef, useEffect } from "react";

interface MatrixRainProps {
  parallaxOffset?: { x: number; y: number };
}

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*";

export function MatrixRain(_props: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let fontSize = window.innerWidth < 768 ? 14 : 22;

    function resize() {
      if (!canvas) return;
      fontSize = window.innerWidth < 768 ? 14 : 22;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();

    let columns = Math.floor(canvas.width / fontSize);
    let drops: { pos: number; speed: number; brightness: number }[] = [];

    function initDrops() {
      drops = Array.from({ length: columns }, () => ({
        pos: Math.random() * -100,
        speed: 0.05 + Math.random() * 0.2,
        brightness:
          Math.random() < 0.3
            ? 0.03 + Math.random() * 0.05
            : 0.06 + Math.random() * 0.15,
      }));
    }

    initDrops();

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Martian Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drop.pos * fontSize;

        ctx.fillStyle = `rgba(74, 222, 128, ${drop.brightness})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = {
            pos: 0,
            speed: 0.05 + Math.random() * 0.2,
            brightness:
              Math.random() < 0.3
                ? 0.03 + Math.random() * 0.05
                : 0.05 + Math.random() * 0.15,
          };
        } else {
          drops[i].pos += drop.speed;
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    function handleResize() {
      resize();
      if (!canvas) return;
      ctx!.font = `${fontSize}px "Martian Mono", monospace`;
      columns = Math.floor(canvas.width / fontSize);
      initDrops();
    }

    window.addEventListener("resize", handleResize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.3,
        maskImage:
          "radial-gradient(ellipse 30% 80% at 50% 50%, transparent 40%, black 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 40% 80% at 50% 50%, transparent 40%, black 100%)",
      }}
    />
  );
}
