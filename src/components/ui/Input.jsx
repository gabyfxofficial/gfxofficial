// src/components/ui/Input.jsx
import React from "react";
import classNames from "classnames";

export default function Input({
  label,
  error,
  textarea = false,
  className = "",
  ...props
}) {
  const base = `
    w-full rounded-xl bg-[var(--color-card-bg)]/50 backdrop-blur-sm
    border border-[var(--color-border)]
    text-[var(--color-text)] placeholder-[var(--color-placeholder)]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]
    transition-all duration-300 font-poppins
    px-5 py-3
  `;
  return (
    <div className={classNames("mb-4", className)}>
      {label && (
        <label className="block text-sm font-medium mb-1 font-poppins animate-pulseSlow">{label}</label>
      )}
      {textarea ? (
        <textarea className={base + " resize-none min-h-[120px]"} {...props} />
      ) : (
        <input className={base} {...props} />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
