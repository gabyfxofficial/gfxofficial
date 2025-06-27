// src/components/sections/Certifications.jsx
import React, { useEffect, useRef } from "react";
import Card from "../ui/Card";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  const ref = useRef();
  useEffect(() => {
    const cards = Array.from(ref.current.children);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.add("visible");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.3 }
    );
    cards.forEach((c) => {
      c.classList.add("animate-inview");
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-24 bg-[var(--color-card-bg)]">
      <div className="container mx-auto px-6 lg:px-0 text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4 font-poppins">
          Certifications
        </h2>
        <p className="text-[var(--color-text)]/70">
          A selection of my professional certifications.
        </p>
      </div>
      <div
        ref={ref}
        className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0"
      >
        {certifications.length > 0 ? (
          certifications.map((cert) => (
            <Card
              key={cert.title}
              className="flex flex-col items-center space-y-4 text-center animate-pulseSlow"
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-24 h-24 object-contain"
                />
              )}
              <h3 className="font-semibold text-[var(--color-text)]">
                {cert.title}
              </h3>
              <p className="text-sm text-[var(--color-text)]/75">
                {cert.issuer} —{" "}
                {new Date(cert.date).toLocaleDateString("en-US")}
              </p>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-[var(--color-text)]/70 text-center">
            Certifications coming soon...
          </p>
        )}
      </div>
    </section>
  );
}
