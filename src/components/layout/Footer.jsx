// src/components/layout/Footer.jsx
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiChevronUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] py-8 border-t border-[var(--color-border)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-0 space-y-4 md:space-y-0">
        <div className="flex space-x-6">
          <a
            href="https://github.com/username"
            aria-label="GitHub"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/username"
            aria-label="LinkedIn"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="mailto:office@yourdomain.com"
            aria-label="Email"
            className="hover:text-[var(--color-primary)] transition"
          >
            <FiMail size={24} />
          </a>
        </div>
        <p className="text-xs text-[var(--color-text)]/70">
          &copy; {new Date().getFullYear()} Gabriel. All rights reserved.
        </p>
        <a
          href="#about"
          className="flex items-center space-x-1 hover:text-[var(--color-primary)] transition"
        >
          <FiChevronUp className="transform transition-transform hover:-translate-y-1" />
          <span className="text-sm">Top</span>
        </a>
      </div>
    </footer>
  );
}
