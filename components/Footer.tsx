"use client";

/**
 * Footer component
 */
import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const SOCIALS = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiMail, href: "mailto:hello@qaisar.dev", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Brand */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <span className="footer-brand">&lt;Qaisar /&gt;</span>
            <p
              className="mt-2 mb-0"
              style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}
            >
              Building digital experiences that matter.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-12 col-md-4">
            <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3 mb-0">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-muted)")
                    }
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="footer-social">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr
          style={{ borderColor: "var(--dark-border)", margin: "2rem 0 1rem" }}
        />

        <p
          className="text-center mb-0"
          style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}
        >
          &copy; {year} Qaisar. Crafted with ❤️ using Next.js &amp; Bootstrap 5.
        </p>
      </div>
    </footer>
  );
}
