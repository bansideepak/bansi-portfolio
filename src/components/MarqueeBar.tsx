import { useState } from "react";

export function MarqueeBar() {
  const [paused, setPaused] = useState(false);

  const items: { text: string; href?: string }[] = [
    {
      text: "Hi, I am Bansi Deepak Bollapally, a Junior AI Engineer based in India.",
    },
    { text: "building scalable AI systems & platforms" },
    { text: "deving @ Neurom", href: "https://www.neurominnovations.com/" },
    { text: "i am a creator" },
    { text: "i ♡ art " },
  ];

  const content = [...items, ...items, ...items, ...items];

  const pausedStyle = paused ? { animationPlayState: "paused" as const } : undefined;

  return (
    <header className="absolute inset-x-0 top-0 pt-6 md:pt-8 overflow-hidden z-20">
      <div
        className="flex w-max marquee-scroll"
        style={pausedStyle}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
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
