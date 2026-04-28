import { useState, useEffect } from "react";

export function useMouseParallax(intensity = 8, maxOffset = 80) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const rawX = (e.clientX - centerX) / intensity;
      const rawY = (e.clientY - centerY) / intensity;
      const x = Math.max(-maxOffset, Math.min(maxOffset, rawX));
      const y = Math.max(-maxOffset, Math.min(maxOffset, rawY));
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [intensity, maxOffset]);

  return offset;
}
