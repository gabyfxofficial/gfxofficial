// src/components/sections/Projects.jsx
import React, { useState, useMemo, useEffect, useRef } from "react";
import Card from "../ui/Card";
import Tag from "../ui/Tag";
import Button from "../ui/Button";
import { projects } from "../../data/projects";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

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
      { threshold: 0.2 }
    );
    cards.forEach((c) => {
      c.classList.add("animate-inview");
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg)]">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-0 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4">
          Featured Projects
        </h2>
        <p className="text-[var(--color-text)]/70 mb-8 max-w-xl mx-auto">
          A selection of recent works I’m proud of.
        </p>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  filter === cat
                    ? "bg-[var(--color-primary)] text-[var(--color-bg)]"
                    : "bg-[var(--color-card-bg)] text-[var(--color-text)] hover:bg-[var(--color-primary)]/20"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div
        ref={ref}
        className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-0"
      >
        {filtered.map((p) => (
          <Card key={p.title} className="flex flex-col h-full overflow-hidden">
            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-[var(--color-text)] mb-3">
                {p.title}
              </h3>
              <p className="text-[var(--color-text)]/75 text-sm mb-4 line-clamp-3">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>

            {/* Actions & Date */}
            <div className="px-6 py-4 flex items-center justify-between border-t border-[var(--color-border)]">
              <div className="flex space-x-2">
                {p.liveLink && (
                  <Button
                    onClick={() => window.open(p.liveLink, "_blank")}
                    className="!px-2 !py-1 text-xs flex items-center gap-1"
                  >
                    <FiExternalLink className="text-[var(--color-bg)]" />
                    <span>Live</span>
                  </Button>
                )}
                {p.repoLink && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(p.repoLink, "_blank")}
                    className="!px-2 !py-1 text-xs flex items-center gap-1"
                  >
                    <FiGithub className="text-[var(--color-primary)]" />
                    <span>Source</span>
                  </Button>
                )}
              </div>
              <time
                className="text-xs text-[var(--color-text)]/50"
                dateTime={p.date}
              >
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
