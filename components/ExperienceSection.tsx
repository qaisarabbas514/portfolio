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
    period: "Feb 2023 – Present",
    role: "Front-End Developer",
    company: "Aquila 360 Pvt Ltd",
    location: "Lahore, Pakistan",
    description:
      "Developed and delivered multiple client products using React.js (TSX) as the primary framework for complete front-end development: CCF (Childcare), Jino (UAE Car Wash), Employee App, Dividely (Finance), and Healthcare System. Also contributed Angular UI development for the LoadGate (Construction Logistics) platform. All projects involved RESTful API integration, Tailwind CSS, and cross-functional team collaboration.",
    tech: [
      "React.js",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap 5",
      "REST APIs",
    ],
    current: true,
  },
  {
    period: "Jan 2022 – Jan 2023",
    role: "Front-End Developer",
    company: "WD Logics Pvt Ltd",
    location: "Lahore, Pakistan",
    description:
      "Built responsive, scalable front-end solutions for multiple products: WD Logics IT Services Platform, Rizq (Financial Wellness Platform), Xnspy (Phone Monitoring App for Families), and Family Time (Parental Control & Digital Wellbeing App). Developed interactive UIs with React.js, jQuery, Bootstrap, and Sass/SCSS.",
    tech: ["React.js", "jQuery", "Bootstrap 4/5", "Sass/SCSS", "JavaScript"],
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
