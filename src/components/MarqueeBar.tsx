import { useRef, useEffect } from "react";

export function MarqueeBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(1);
  const targetSpeedRef = useRef(1);
  const rafRef = useRef<number>(0);

  const items: { text: string; href?: string }[] = [
    {
      text: "Hi, I am Bansi Deepak Bollapally, an AI Engineer based in India.",
    },
    { text: "building scalable AI systems & platforms" },
    {
      text: "engineering @ Neurom",
      href: "https://www.neurominnovations.com/",
    },
    { text: "i am a creator" },
    {
      text: "commission painter & artist",
      href: "https://www.instagram.com/the.aseth____",
    },
    {
      text: "Building @ the.aseth",
      href: "https://www.instagram.com/the.aseth____",
    },
  ];

  const content = [...items, ...items, ...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let lastTime = performance.now();

    function tick(now: number) {
      const delta = now - lastTime;
      lastTime = now;

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.02;

      offsetRef.current -= speedRef.current * (delta / 16);

      const halfWidth =
        track.scrollWidth / (content.length / items.length) / 2 ||
        track.scrollWidth / 2;
      if (Math.abs(offsetRef.current) >= halfWidth) {
        offsetRef.current += halfWidth;
      }

      track.style.transform = `translateX(${offsetRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 pt-6 md:pt-8 overflow-hidden z-20">
      <div
        ref={trackRef}
        className="flex w-max"
        onMouseEnter={() => {
          targetSpeedRef.current = 0.3;
        }}
        onMouseLeave={() => {
          targetSpeedRef.current = 1;
        }}
      >
        {content.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs md:text-base text-matrix neon-hover whitespace-nowrap cursor-pointer"
              >
                {item.text}
              </a>
            ) : (
              <span className="font-mono text-xs md:text-base text-matrix whitespace-nowrap cursor-default">
                {item.text}
              </span>
            )}
            <span className="text-matrix-dark/40 font-mono mx-8">·</span>
          </span>
        ))}
      </div>
    </header>
  );
}
