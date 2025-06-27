// src/data/skills.js
import { FaReact, FaNodeJs, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  {
    name: "React",
    level: 95,
    Icon: FaReact,
    category: "Frontend",
    description:
      "Component-based UI library for building interactive interfaces.",
  },
  {
    name: "Next.js",
    level: 90,
    Icon: SiNextdotjs,
    category: "Frontend",
    description: "React framework with SSR, SSG, and built-in optimizations.",
  },
  {
    name: "TypeScript",
    level: 90,
    Icon: SiTypescript,
    category: "Language",
    description: "Typed superset of JavaScript for safer, scalable code.",
  },
  {
    name: "Node.js",
    level: 92,
    Icon: FaNodeJs,
    category: "Backend",
    description:
      "Event-driven JavaScript runtime for building backend services.",
  },
  {
    name: "Python",
    level: 91,
    Icon: FaPython,
    category: "Backend",
    description:
      "Versatile language used for scripting, APIs, and data pipelines.",
  },
  {
    name: "PostgreSQL",
    level: 87,
    Icon: SiPostgresql,
    category: "Database",
    description: "Reliable relational database with advanced features.",
  },
  {
    name: "MongoDB",
    level: 90,
    Icon: SiMongodb,
    category: "Database",
    description: "NoSQL document store for flexible data models.",
  },
  {
    name: "GraphQL",
    level: 80,
    Icon: SiGraphql,
    category: "API",
    description: "Query language for APIs with strong type safety.",
  },
  {
    name: "AWS",
    level: 80,
    Icon: FaAws,
    category: "Cloud",
    description:
      "Cloud provider for infrastructure, serverless, and DevOps tools.",
  },
  {
    name: "Docker",
    level: 78,
    Icon: SiDocker,
    category: "DevOps",
    description: "Containerization platform for consistent environments.",
  },
  {
    name: "Kubernetes",
    level: 72,
    Icon: SiKubernetes,
    category: "DevOps",
    description: "Container orchestration for scalable workloads.",
  },
  {
    name: "Tailwind CSS",
    level: 92,
    Icon: SiTailwindcss,
    category: "CSS",
    description: "Utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Git",
    level: 90,
    Icon: FaGitAlt,
    category: "Tooling",
    description: "Distributed version control system for code management.",
  },
  {
    name: "Figma",
    level: 85,
    Icon: FaReact, // placeholder icon
    category: "Design",
    description: "UI/UX design collaboration tool used for prototypes.",
  },
];
