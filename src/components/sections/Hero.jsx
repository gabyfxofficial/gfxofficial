// src/components/sections/Hero.jsx
import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("visible", entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="
        relative
        flex flex-col-reverse lg:flex-row
        items-center justify-center
        py-32 px-6
        bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card-bg)]
        overflow-hidden
        animate-inview
      "
    >
      {/* TEXT – mutat de 3 ori mai mult spre dreapta pe desktop */}
      <div className="w-full lg:w-1/2 lg:pl-72">
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">
          <p className="uppercase text-[var(--color-primary)] font-semibold tracking-wide">
            Available for new projects
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-text)] leading-tight">
            Hi, I’m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]">
              Gabriel
            </span>
          </h1>
          <p className="text-lg text-[var(--color-text)]">
            Full-Stack Developer crafting modern web applications with clean
            code and seamless performance.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button onClick={() => (window.location.hash = "#contact")}>
              Get in Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("/CV.pdf", "_blank")}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[var(--color-card-bg)] rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://imgur.com/MDtgVlu.png"
            alt="Hero Illustration"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
