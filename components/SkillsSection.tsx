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
    title: "Frontend Frameworks",
    gradient: "rgba(108,99,255,0.12)",
    skills: [
      "React.js / TSX (Full)",
      "Angular (UI)",
      "Next.js (UI)",
      "TypeScript",
      "JavaScript (ES6+)",
    ],
  },
  {
    icon: FiPenTool,
    title: "Styling & UI",
    gradient: "rgba(255,101,132,0.12)",
    skills: [
      "HTML5 & CSS3",
      "Bootstrap 4/5",
      "Tailwind CSS",
      "Sass / SCSS",
      "Web Flow",
      "Responsive Design",
    ],
  },
  {
    icon: FiServer,
    title: "APIs & Integration",
    gradient: "rgba(34,197,94,0.12)",
    skills: [
      "REST API Integration",
      "Reusable Components",
      "State Management",
      "Radix UI",
      "Moon Design System",
      "Cross-browser Compatibility",
    ],
  },
  {
    icon: FiDatabase,
    title: "Backend & Database",
    gradient: "rgba(249,115,22,0.12)",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    icon: FiTool,
    title: "Development Tools",
    gradient: "rgba(168,85,247,0.12)",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Chrome DevTools",
      "Cursor AI",
      "Azure Boards",
      "Trello",
    ],
  },
  {
    icon: FiGlobe,
    title: "Design & Collaboration",
    gradient: "rgba(20,184,166,0.12)",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "UI/UX Design",
      "Agile / Scrum",
      "Mobile-first Design",
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
