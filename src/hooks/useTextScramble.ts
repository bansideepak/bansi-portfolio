import { useState, useRef, useCallback, useEffect } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:,./<>?`~abcdefghijklmnopqrstuvwxyz0123456789";
const TICK_MS = 30;
const REVEAL_RATE = 2;

function isPreserved(char: string): boolean {
  return char === " " || char === "." || char === "," || char === "'" || char === "\n" || char === "·" || char === "&";
}

export function useTextScramble(text: string) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplay(text);
  }, [text]);

  const start = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let initial = "";
    for (let i = 0; i < text.length; i++) {
      if (isPreserved(text[i])) {
        initial += text[i];
      } else {
        initial += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    setDisplay(initial);

    let tick = 1;
    const boundary = Math.floor(tick / REVEAL_RATE);
    let first = "";
    for (let i = 0; i < text.length; i++) {
      if (isPreserved(text[i]) || i < boundary) {
        first += text[i];
      } else {
        first += CHARS[Math.floor(Math.random() * CHARS.length)];
      }
    }
    setDisplay(first);
    tick++;
    intervalRef.current = setInterval(() => {
      const boundary = Math.floor(tick / REVEAL_RATE);
      let result = "";

      for (let i = 0; i < text.length; i++) {
        if (isPreserved(text[i]) || i < boundary) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);
      tick++;

      if (tick >= text.length * REVEAL_RATE) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplay(text);
      }
    }, TICK_MS);
  }, [text]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return { display, start, stop };
}
