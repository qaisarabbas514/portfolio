/**
 * ProjectCard – reusable card for the Projects section.
 */
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export interface Project {
  image?: string;        // path inside /public, e.g. "/images/projects/ecommerce.jpg"
  emoji: string;         // shown as fallback when no image
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {/* Thumbnail – real image or gradient+emoji fallback */}
      <div
        className="project-card-thumb"
        style={project.image ? {} : { background: project.gradient }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <span role="img" aria-label={project.title}>
            {project.emoji}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {/* Tech stack */}
        <div className="project-tech-stack">
          {project.tech.map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-card-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-project btn-project-primary"
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-project btn-project-outline"
            >
              <FiGithub size={14} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
