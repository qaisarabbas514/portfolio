"use client";

/**
 * SkillsSection – categorised skill pills with icons.
 */
import SectionWrapper from "./SectionWrapper";
import {
  FiMonitor,
  FiServer,
  FiTool,
  FiPenTool,
  FiDatabase,
  FiGlobe,
} from "react-icons/fi";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
  gradient: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    icon: FiMonitor,
    title: "Frontend Development",
    gradient: "rgba(108,99,255,0.12)",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: FiPenTool,
    title: "UI Frameworks & Design",
    gradient: "rgba(255,101,132,0.12)",
    skills: [
      "Bootstrap 5",
      "Tailwind CSS",
      "Material UI",
      "Figma",
      "Responsive Design",
      "UI/UX Principles",
    ],
  },
  {
    icon: FiServer,
    title: "Backend & APIs",
    gradient: "rgba(34,197,94,0.12)",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "API Integration",
      "JWT Auth",
    ],
  },
  {
    icon: FiDatabase,
    title: "Database & Cloud",
    gradient: "rgba(249,115,22,0.12)",
    skills: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Firebase",
      "Supabase",
      "Prisma ORM",
    ],
  },
  {
    icon: FiTool,
    title: "Tools & DevOps",
    gradient: "rgba(168,85,247,0.12)",
    skills: [
      "Git & GitHub",
      "Docker",
      "Vercel",
      "Netlify",
      "CI/CD",
      "Linux CLI",
    ],
  },
  {
    icon: FiGlobe,
    title: "Other Skills",
    gradient: "rgba(20,184,166,0.12)",
    skills: [
      "Agile / Scrum",
      "Code Review",
      "Testing (Jest)",
      "SEO Basics",
      "Performance Optimisation",
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="A snapshot of the tools and technologies I work with every day."
      className="skills-section"
    >
      <div className="row g-4">
        {SKILL_CATEGORIES.map(({ icon: Icon, title, skills, gradient }, i) => (
          <div
            key={title}
            className={`col-12 col-md-6 col-lg-4 fade-in-up fade-delay-${(i % 5) + 1}`}
          >
            <div className="skill-category-card">
              <div
                className="skill-category-icon"
                style={{ background: gradient }}
              >
                <Icon size={20} />
              </div>
              <h3 className="skill-category-title">{title}</h3>
              <div>
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
