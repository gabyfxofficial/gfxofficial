// src/components/sections/Skills.jsx
import React, { useEffect, useRef } from "react";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { skills } from "../../data/skills";

export default function Skills() {
  const ref = useRef();
  useEffect(() => {
    const cards = Array.from(ref.current.children);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }, i) => {
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
    <section id="skills" className="py-24 bg-[var(--color-card-bg)]">
      <div className="container mx-auto px-6 lg:px-0 text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Technical Expertise
        </h2>
        <p className="text-[var(--color-text)]/70">
          Technologies I work with daily.
        </p>
      </div>
      <div
        ref={ref}
        className="container mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0"
      >
        {skills.map(({ name, level, Icon, description }) => (
          <div key={name} className="animate-inview">
            <Card className="space-y-4">
              <div className="flex items-center space-x-4">
                <Icon
                  size={32}
                  className="text-[var(--color-primary)]"
                  title={description}
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span>{name}</span>
                    <span className="font-semibold text-[var(--color-primary)]">
                      {level}%
                    </span>
                  </div>
                  <ProgressBar percent={level} />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
