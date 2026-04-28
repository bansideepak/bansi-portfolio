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
      className="h-screen relative overflow-hidden"
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
          className="absolute inset-0 animate-kenburns"
          style={{
            backgroundImage: "url(/Hero-final.png)",
            backgroundSize: "60%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.2,
          }}
        />
        <MatrixRain />
      </div>

      <MarqueeBar />
      <SocialSidebar />

      <div className="absolute inset-x-0 bottom-0 flex flex-row items-end justify-between px-4 md:px-16 pb-8 md:pb-12 gap-4 z-20">
        <div className="font-mono text-2xl md:text-3xl font-normal text-matrix tracking-tight text-left cursor-default glow-text neon-hover md:w-[30%]">
          <RotatingTitle />
        </div>
        <p className="font-mono text-base md:text-xl text-matrix/80 md:max-w-md text-right cursor-default neon-hover">
          $ whoami <span className="text-matrix-light">→</span> ai engineer
        </p>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <span className="text-matrix/40 text-[10px] font-mono">
          $ scroll_down<span className="typing-cursor"></span>
        </span>
      </div>
    </section>
  );
}
