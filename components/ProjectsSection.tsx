"use client";

/**
 * ProjectsSection – grid of ProjectCards with filter tabs.
 */
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    image: "/images/projects/child-care-projectCover.png",
    emoji: "👶",
    title: "CCF – Child Care Forward",
    description:
      "Childcare management platform built from scratch. Led front-end development using React (TypeScript/TSX) and Tailwind CSS, integrated RESTful APIs for dynamic data and real-time functionality, and maintained a consistent design system across the platform.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    gradient: "linear-gradient(135deg, #6c63ff22, #ff658422)",
    liveUrl: "https://childcareforward.com/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/loadGate-projectCover.png",
    emoji: "🏗️",
    title: "LoadGate",
    description:
      "Construction logistics management platform with real-time tracking, planning, and coordination of deliveries and assets. Contributed Angular UI development — building responsive components and ensuring smooth cross-device experience.",
    tech: ["Angular", "Tailwind CSS", "TypeScript", "REST APIs"],
    gradient: "linear-gradient(135deg, #22c55e22, #6c63ff22)",
    liveUrl: "https://www.loadgate.com/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/jino-projectCover.png",
    emoji: "🚗",
    title: "Jino – Car Wash Platform",
    description:
      "On-demand car wash and oil change service platform for the UAE market. Built interactive UI and application functionality using React.js and Bootstrap 5, optimised for mobile-first on-demand service workflows.",
    tech: ["React.js", "Bootstrap 5", "JavaScript", "REST APIs"],
    gradient: "linear-gradient(135deg, #f97316 22%, #ff658422)",
    liveUrl: "https://jino.ae/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/xnspy-projectCover.png",
    emoji: "📱",
    title: "Xnspy – Phone Monitoring App",
    description:
      "Phone monitoring application for families and parents. Designed and developed responsive user interfaces using Bootstrap (v4/v5), ensured cross-browser compatibility, and optimised UI performance for monitoring dashboards.",
    tech: ["Bootstrap 4/5", "JavaScript", "Responsive Design", "CSS3"],
    gradient: "linear-gradient(135deg, #a855f722, #6c63ff22)",
    liveUrl: "https://xnspy.com/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/book-Exchange-FYP-projectCover.png",
    emoji: "📚",
    title: "Book Exchange Platform",
    description:
      "Front-End community book exchange platform (Final Year Project). Features user auth, book listings, search & filters, exchange requests, real-time messaging, wish lists, notifications, and a book review system.",
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
    ],
    gradient: "linear-gradient(135deg, #14b8a622, #22c55e22)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image: "/images/projects/healthcare.jpg",
    emoji: "🏥",
    title: "Healthcare Management System",
    description:
      "Hospital management platform with a responsive, scalable front-end architecture tailored for healthcare workflows. Built using React.js and Tailwind CSS for reliable and fast healthcare data management.",
    tech: ["React.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    gradient: "linear-gradient(135deg, #6c63ff22, #14b8a622)",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    image: "/images/projects/rizq-projectCover.png",
    emoji: "💸",
    title: "Rizq – Financial Wellness Platform",
    description:
      "Financial wellness platform focused on financial education, user engagement, and in-app content delivery. Implemented application functionality using jQuery and developed interactive UI components with React.js and Bootstrap 5.",
    tech: ["React.js", "jQuery", "Bootstrap 5", "JavaScript"],
    gradient: "linear-gradient(135deg, #22c55e22, #14b8a622)",
    liveUrl: "https://www.rizq.com/",
    githubUrl: "#",
  },
  {
    image: "/images/projects/familyTime-projectCover.png",
    emoji: "👨‍👩‍👧",
    title: "Family Time – Parental Control App",
    description:
      "Parental control and digital wellbeing application. Developed responsive and maintainable UI components using Sass (SCSS), with a focus on clean UI structure, styling architecture, and cross-device compatibility.",
    tech: ["Sass / SCSS", "JavaScript", "Responsive Design", "CSS3"],
    gradient: "linear-gradient(135deg, #f97316 22%, #a855f722)",
    liveUrl: "https://familytime.io/",
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
          href="https://github.com/qaisar-abbas"
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
