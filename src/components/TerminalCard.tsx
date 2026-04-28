import type { ReactNode } from "react";

interface TerminalCardProps {
  path: string;
  children: ReactNode;
}

export function TerminalCard({ path, children }: TerminalCardProps) {
  return (
    <div className="max-w-4xl mx-auto border border-matrix/20 bg-black">
      <div className="text-matrix-dark text-xs px-6 pt-4 pb-2">
        {path}
      </div>
      <div className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
