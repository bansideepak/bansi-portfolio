import { RotatingTitle } from "./RotatingTitle";
import { MarqueeBar } from "./MarqueeBar";
import { SocialSidebar } from "./SocialSidebar";
import { MatrixRain } from "./MatrixRain";
import { useMouseParallax } from "../hooks/useMouseParallax";

export function Hero() {
  const parallax = useMouseParallax(20, 20);

  return (
    <section
      id="hero"
      className="h-[100dvh] relative overflow-hidden"
      aria-label="Hero"
    >
      <h1 className="sr-only">Bansi Deepak Bollapally — AI Engineer</h1>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.x}px, ${parallax.y}px)`,
          transition: "transform 0.8s ease-out",
          zIndex: -10,
        }}
      >
        <div
          className="absolute inset-0 animate-kenburns hero-bg-image"
          style={{
            backgroundImage: "url(/Hero-Potrait.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
          }}
        />
        <MatrixRain />
      </div>

      <MarqueeBar />
      <SocialSidebar />

      <div className="absolute inset-x-0 bottom-0 flex flex-col md:flex-row items-end justify-between px-4 md:px-16 pb-10 md:pb-12 gap-2 md:gap-4 z-20">
        <div className="font-mono text-xl md:text-3xl font-normal text-matrix tracking-tight text-left cursor-default glow-text neon-hover md:w-[30%]">
          <RotatingTitle />
        </div>
          <p className="font-mono text-sm md:text-xl text-matrix/80 md:max-w-md text-right cursor-default glow-text neon-hover">
          $ whoami <span className="text-matrix-light">→</span> ai engineer
        </p>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20">
        <span className="text-matrix/30 text-[9px] font-mono">
          $ scroll_down<span className="typing-cursor"></span>
        </span>
      </div>
    </section>
  );
}
