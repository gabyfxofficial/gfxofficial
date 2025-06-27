// src/components/ui/Tag.jsx
import React from "react";
import classNames from "classnames";

export default function Tag({ children, className = "" }) {
  return (
    <span
      className={classNames(
        "inline-block text-xs font-medium rounded-full",
        "px-2 py-0.5", // slimmer padding
        "border border-[var(--color-primary)]",
        "text-[var(--color-primary)]",
        "transition-colors duration-200",
        "hover:bg-[var(--color-primary)]/10",
        "font-poppins animate-pulseSlow",
        className
      )}
    >
      {children}
    </span>
  );
}
