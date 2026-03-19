"use client";

/**
 * ProjectsSection – grid of ProjectCards with filter tabs.
 */
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    emoji: "🛒",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart management, Stripe payments, user authentication, and an admin dashboard for inventory management.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind"],
    gradient: "linear-gradient(135deg, #6c63ff22, #ff658422)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    emoji: "📊",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with charts, data tables, dark mode, and CSV export. Built for a SaaS product with 500+ active users.",
    tech: ["React", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #22c55e22, #6c63ff22)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    emoji: "💬",
    title: "Real-Time Chat App",
    description:
      "WebSocket-powered chat application with rooms, private messaging, file sharing, emoji reactions, and read receipts.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    gradient: "linear-gradient(135deg, #f97316 22%, #ff658422)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    emoji: "🎨",
    title: "Design System",
    description:
      "A reusable component library built with React and Storybook, featuring 40+ components with full accessibility and dark mode support.",
    tech: ["React", "TypeScript", "Storybook", "Bootstrap", "Figma"],
    gradient: "linear-gradient(135deg, #a855f722, #6c63ff22)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    emoji: "🏥",
    title: "Healthcare Portal",
    description:
      "Patient management system with appointment booking, medical records, doctor dashboards, and HIPAA-compliant data handling.",
    tech: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Bootstrap"],
    gradient: "linear-gradient(135deg, #14b8a622, #22c55e22)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    emoji: "📱",
    title: "Portfolio CMS",
    description:
      "Headless CMS-powered portfolio with a custom admin panel, image optimisation, dynamic routing, and Vercel edge deployment.",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind", "Vercel"],
    gradient: "linear-gradient(135deg, #6c63ff22, #14b8a622)",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="A selection of projects I'm proud of — from concept to deployment."
      className="projects-section"
    >
      <div className="row g-4">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className={`col-12 col-md-6 col-lg-4 fade-in-up fade-delay-${(i % 3) + 1}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* View more */}
      <div className="text-center mt-5 fade-in-up fade-delay-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-custom"
          style={{ padding: "0.75rem 2.5rem" }}
        >
          View All on GitHub →
        </a>
      </div>
    </SectionWrapper>
  );
}
