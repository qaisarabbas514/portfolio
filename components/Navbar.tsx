"use client";

/**
 * Navbar – sticky, glassmorphism, smooth-scroll links, mobile hamburger
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Track scroll to highlight active section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        {/* Brand */}
        <Link
          href="#home"
          className="navbar-brand"
          onClick={() => handleNavClick("#home")}
        >
          <span className="brand-logo">&lt;Qaisar /&gt;</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav links */}
        <div className={`navbar-collapse ${menuOpen ? "show" : "collapse"}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="nav-item">
                <a
                  href={href}
                  className={`nav-link ${active === href ? "active" : ""}`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* CV Download button */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                href="/cv.pdf"
                download
                className="btn btn-sm btn-gradient d-flex align-items-center gap-2"
              >
                <FiDownload size={15} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
