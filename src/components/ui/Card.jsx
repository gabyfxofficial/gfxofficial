// src/components/ui/Card.jsx
import React from "react";
import classNames from "classnames";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={classNames(
        "bg-[var(--color-card-bg)]/60 backdrop-blur-md border border-[var(--color-border)]",
        "rounded-3xl shadow-lg p-8 transform-gpu transition-transform duration-300",
        "hover:scale-[1.05] hover:-translate-y-1 hover:shadow-xl",
        "animate-pulseSlow",
        className
      )}
    >
      {children}
    </div>
  );
}
