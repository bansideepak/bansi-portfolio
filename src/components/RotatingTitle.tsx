import { useState, useEffect } from "react";

const titles = [
  "full stack developer",
  "web + ai engineer",
  "creator",
  "artist",
];

export function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block overflow-hidden align-bottom">
      {/* key forces a remount each change, restarting the CSS enter animation */}
      <span key={index} className="rotating-title">
        {titles[index]}
      </span>
    </div>
  );
}
