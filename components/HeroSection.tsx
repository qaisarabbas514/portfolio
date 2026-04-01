"use client";

/**
 * HeroSection – landing hero with name, animated role titles,
 * CTA buttons, social links, and a floating avatar.
 */
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowDown,
  FiCode,
  FiZap,
} from "react-icons/fi";

const ROLES = [
  "Front-End Developer",
  "React.js / TSX Specialist",
  "Angular & Next.js UI Developer",
  "API Integration Expert",
  "TypeScript Developer",
];

export default function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5 py-5">
          {/* Left – text content */}
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            {/* Available badge */}
            <div className="hero-badge">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  display: "inline-block",
                }}
              />
              Available for opportunities
            </div>

            <h1 className="hero-name">
              Hi, I&apos;m <span className="text-gradient">Qaisar</span> 👋
            </h1>

            <p className="hero-title">
              {displayed}
              <span
                style={{
                  borderRight: "2px solid var(--primary)",
                  marginLeft: 2,
                  animation: "none",
                }}
              >
                &nbsp;
              </span>
            </p>

            <p className="hero-intro">
              I build scalable, high-performance web applications with React.js,
              Angular, and Next.js. Passionate about REST API integration,
              pixel-perfect UIs, and delivering exceptional user experiences.
            </p>

            {/* CTA buttons */}
            <div className="hero-cta d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary-custom">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-custom">
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn btn-outline-custom d-flex align-items-center gap-2"
              >
                <FiDownload size={16} />
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="hero-socials">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/qaisar-abbas",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/qaisar-abbas-038446249/",
                  label: "LinkedIn",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-btn"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right – avatar */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex justify-content-center">
            <div className="hero-image-wrapper">
              <div className="hero-avatar">
                <Image
                  src="/images/profile.jpg"
                  alt="Qaisar – Front-End Developer"
                  fill
                  sizes="(max-width: 768px) 240px, 340px"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                  priority
                />
              </div>

              {/* Floating info cards */}
              <div className="floating-card card-1">
                <FiCode size={16} style={{ color: "var(--primary)" }} />
                4+ Years Experience
              </div>
              <div className="floating-card card-2">
                <FiZap size={16} style={{ color: "var(--accent)" }} />
                10+ Projects Shipped
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll down</span>
        <FiArrowDown size={16} />
      </div>
    </section>
  );
}
