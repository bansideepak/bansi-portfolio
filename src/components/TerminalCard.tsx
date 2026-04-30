import type { ReactNode } from "react";

interface TerminalCardProps {
  path: string;
  children: ReactNode;
}

export function TerminalCard({ path, children }: TerminalCardProps) {
  return (
    <div className="max-w-4xl mx-auto border border-matrix/20 bg-black">
      <div className="text-matrix-dark text-xs px-4 pt-4 pb-2 md:px-6">
        {path}
      </div>
      <div className="px-4 pb-4 md:px-8 md:pb-8 md:px-6 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
