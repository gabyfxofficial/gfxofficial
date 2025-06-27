// src/components/ui/ProgressBar.jsx
import React, { useEffect, useRef } from "react";

export default function ProgressBar({ percent = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Animaţia se declanşează după montare
    const timer = setTimeout(() => {
      bar.style.width = `${percent}%`;
    }, 200);

    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div className="w-full h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transition-all duration-1000 ease-out"
        style={{ width: 0 }}
      />
    </div>
  );
}
