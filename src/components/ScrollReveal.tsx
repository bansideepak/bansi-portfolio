import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function ScrollReveal({ children, className = "", stagger }: ScrollRevealProps) {
  const staggerClass = stagger ? `stagger-${stagger}` : "";
  return (
    <div className={`reveal ${staggerClass} ${className}`}>
      {children}
    </div>
  );
}
