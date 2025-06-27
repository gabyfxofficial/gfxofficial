// src/components/ui/Card.jsx
import React from "react";
import classNames from "classnames";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={classNames(
        "bg-[var(--color-card-bg)] border border-[var(--color-border)]",
        "rounded-2xl shadow-sm p-6 transform transition-transform duration-300",
        "hover:scale-[1.02] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
