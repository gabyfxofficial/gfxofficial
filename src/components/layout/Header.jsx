// src/components/layout/Header.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "whatido", label: "What I Do" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (!mobileOpen) setScrolled(window.scrollY > 50);
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileOpen);
    const handleKey = (e) => e.key === "Escape" && setMobileOpen(false);
    if (mobileOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [mobileOpen]);

  const OFFSET = -70;

  return (
    <>
      <header
        className={`
          fixed w-full top-0 left-0 z-50 transition
          ${
            scrolled
              ? "backdrop-blur bg-[var(--color-card-bg)]/80 shadow-md"
              : "bg-transparent"
          }
          animate-pulseSlow
        `}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold font-poppins text-[var(--color-primary)]">
            Gabriel
          </h1>
          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                offset={OFFSET}
                duration={500}
                className="cursor-pointer text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
              >
                {label}
              </ScrollLink>
            ))}
          </nav>
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[var(--color-text)] hover:text-[var(--color-primary)] transition p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="ml-auto w-3/4 max-w-xs h-full bg-[var(--color-bg)] flex flex-col pt-24 shadow-xl">
            {NAV_LINKS.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth
                offset={OFFSET}
                duration={500}
                onClick={() => setMobileOpen(false)}
                className="w-full text-left px-6 py-4 text-lg border-b border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/20 transition"
              >
                {label}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
