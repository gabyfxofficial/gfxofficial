// src/components/sections/WhatIDo.jsx
import React, { useEffect, useRef } from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { FiGlobe, FiServer, FiDatabase, FiCloud } from "react-icons/fi";

const SERVICES = [
  {
    Icon: FiGlobe,
    title: "Frontend Development",
    desc: "Responsive, interactive UIs with React, Next.js & Tailwind.",
    points: ["React & Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    Icon: FiServer,
    title: "Backend Development",
    desc: "REST & GraphQL APIs, microservices, serverless.",
    points: ["Node.js & Express", "Python & FastAPI", "Serverless"],
  },
  {
    Icon: FiDatabase,
    title: "Database Design",
    desc: "Schema design, performance tuning, data pipelines.",
    points: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    Icon: FiCloud,
    title: "Cloud & DevOps",
    desc: "CI/CD, container orchestration, IaC.",
    points: ["AWS & Azure", "Docker & Kubernetes", "Terraform"],
  },
];

export default function WhatIDo() {
  const ref = useRef();
  useEffect(() => {
    const items = Array.from(ref.current.children);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }, i) => {
          if (isIntersecting) {
            target.classList.add("visible");
            obs.unobserve(target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => {
      item.classList.add("animate-inview");
      obs.observe(item);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section id="whatido" className="py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-6 lg:px-0 text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          What I Do
        </h2>
        <p className="text-[var(--color-text)]/70">
          I build modern web solutions that solve real problems.
        </p>
      </div>
      <div
        ref={ref}
        className="container mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0"
      >
        {SERVICES.map(({ Icon, title, desc, points }) => (
          <Card key={title} className="space-y-4 text-left">
            <div className="p-3 bg-[var(--color-primary)]/20 rounded-full w-12 h-12 flex items-center justify-center">
              <Icon size={24} className="text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text)]">
              {title}
            </h3>
            <p className="text-[var(--color-text)]/75 text-sm">{desc}</p>
            <ul className="space-y-1">
              {points.map((pt) => (
                <li key={pt}>
                  <Badge>{pt}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
