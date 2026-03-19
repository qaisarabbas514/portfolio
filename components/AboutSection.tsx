"use client";

/**
 * AboutSection – professional summary, stats, and profile image.
 */
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { FiMapPin, FiMail, FiCalendar, FiBriefcase } from "react-icons/fi";

const STATS = [
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Projects Completed" },
  { number: "10+", label: "Happy Clients" },
  { number: "5+", label: "Tech Stacks" },
];

const INFO = [
  { icon: FiMapPin, label: "Location", value: "Lahore, Punjab, Pakistan 🇵🇰" },
  { icon: FiMail, label: "Email", value: "qaisar.abbas6331@gmail.com" },
  { icon: FiCalendar, label: "Experience", value: "4+ Years" },
  { icon: FiBriefcase, label: "Availability", value: "Open to Work ✅" },
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="A little bit about who I am and what I do."
      className="about-section"
    >
      <div className="row g-5 align-items-center">
        {/* Profile image */}
        <div className="col-12 col-lg-4 text-center">
          <div className="profile-image-box fade-in-up">
            <Image
              src="/images/about-image.JPG"
              alt="Qaisar – Full-Stack Developer"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
              priority
            />
          </div>
        </div>

        {/* Text & info */}
        <div className="col-12 col-lg-8">
          <div className="fade-in-up">
            <h3
              className="mb-3"
              style={{ fontSize: "1.6rem", fontWeight: 800 }}
            >
              Full-Stack Developer &amp;{" "}
              <span className="text-gradient">UI/UX Enthusiast</span>
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                marginBottom: "1.25rem",
              }}
            >
              I&apos;m a passionate Full-Stack Developer with 3+ years of
              hands-on experience building modern, scalable web applications. I
              specialise in React, Next.js, Angular, and Node.js, with a strong
              focus on clean architecture, performance, and exceptional user
              experiences.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              I love turning complex problems into simple, beautiful, and
              intuitive solutions. When I&apos;m not coding, you&apos;ll find me
              exploring new technologies, contributing to open source, or
              mentoring junior developers.
            </p>
          </div>

          {/* Quick info grid */}
          <div className="row g-3 mb-4 fade-in-up fade-delay-1">
            {INFO.map(({ icon: Icon, label, value }) => (
              <div key={label} className="col-12 col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(108,99,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--primary)",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                      {value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="d-flex gap-3 flex-wrap fade-in-up fade-delay-2">
            <a href="#contact" className="btn btn-gradient">
              Let&apos;s Work Together
            </a>
            <a href="/cv.pdf" download className="btn btn-outline-custom">
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="row g-4 mt-4">
        {STATS.map(({ number, label }, i) => (
          <div
            key={label}
            className={`col-6 col-md-3 fade-in-up fade-delay-${i + 1}`}
          >
            <div className="about-stat">
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
