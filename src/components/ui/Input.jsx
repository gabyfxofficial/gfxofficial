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
    w-full rounded-lg bg-[var(--color-card-bg)]
    border border-[var(--color-border)]
    text-[var(--color-text)] placeholder-[var(--color-placeholder)]
    focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
    transition-colors duration-200
    px-4 py-3
  `;
  return (
    <div className={classNames("mb-4", className)}>
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
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
