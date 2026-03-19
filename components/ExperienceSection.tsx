"use client";

/**
 * ExperienceSection – timeline-style work history.
 */
import SectionWrapper from "./SectionWrapper";

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tech: string[];
  current?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    period: "Jan 2024 – Present",
    role: "Senior Frontend Developer",
    company: "TechVentures Ltd.",
    location: "Remote",
    description:
      "Leading the frontend architecture of a SaaS platform serving 10k+ users. Migrated legacy Angular codebase to Next.js 14, reducing load times by 40%. Mentoring a team of 4 junior developers and establishing code review best practices.",
    tech: ["Next.js", "TypeScript", "GraphQL", "Tailwind", "Jest"],
    current: true,
  },
  {
    period: "Mar 2022 – Dec 2023",
    role: "Full-Stack Developer",
    company: "Digital Craft Agency",
    location: "Lahore, Pakistan",
    description:
      "Developed and maintained 12+ client web applications. Built a real-time notification system, integrated Stripe payments, and designed REST APIs consumed by mobile apps. Worked closely with designers to implement pixel-perfect UIs.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Bootstrap"],
  },
  {
    period: "Jun 2021 – Feb 2022",
    role: "Frontend Developer (Internship → Full-time)",
    company: "StartupHub Pakistan",
    location: "Karachi, Pakistan",
    description:
      "Joined as an intern and was converted to a full-time role within 3 months. Built reusable component libraries, implemented Angular modules, and improved app accessibility (WCAG AA compliance).",
    tech: ["Angular", "TypeScript", "SCSS", "Bootstrap", "Figma"],
  },
  {
    period: "Jan 2021 – May 2021",
    role: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    description:
      "Delivered responsive landing pages, small business websites, and custom WordPress themes for international clients via Upwork and direct referrals.",
    tech: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
];

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="My professional journey and the impact I've made."
      className="experience-section"
      centered={true}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="timeline">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={i}
                className={`timeline-item fade-delay-${(i % 4) + 1}`}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  {/* Period & current badge */}
                  <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
                    <span className="timeline-period">{exp.period}</span>
                    {exp.current && (
                      <span
                        style={{
                          background: "rgba(34,197,94,0.15)",
                          border: "1px solid rgba(34,197,94,0.4)",
                          color: "#22c55e",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "0.15rem 0.6rem",
                          borderRadius: 50,
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">
                    🏢 {exp.company} &nbsp;·&nbsp; 📍 {exp.location}
                  </p>
                  <p className="timeline-desc">{exp.description}</p>

                  {/* Tech badges */}
                  <div className="timeline-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
