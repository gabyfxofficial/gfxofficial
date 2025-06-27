// src/components/ui/Card.jsx
import React from "react";
import classNames from "classnames";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={classNames(
        "bg-[var(--color-card-bg)]/60 backdrop-blur-md border border-[var(--color-border)]",
        "rounded-3xl shadow-lg p-8 transform transition-transform duration-300",
        "hover:scale-[1.02] hover:shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
