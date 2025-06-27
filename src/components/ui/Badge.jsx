// src/components/ui/Badge.jsx
import React from "react";
import classNames from "classnames";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={classNames(
        "inline-block uppercase font-semibold text-xs tracking-wide px-3 py-1 rounded-full transition-all duration-300",
        "bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/40",
        "animate-pulseSlow font-poppins",
        className
      )}
    >
      {children}
    </span>
  );
}
