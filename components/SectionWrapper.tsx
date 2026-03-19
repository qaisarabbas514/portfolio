/**
 * SectionWrapper – reusable section container with consistent padding,
 * a gradient title, and a decorative divider.
 */
interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  centered = true,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-wrapper ${className}`}>
      <div className="container">
        {/* Section heading */}
        <div className={`mb-5 ${centered ? "text-center" : ""}`}>
          <h2 className="section-title">
            <span className="gradient-text">{title}</span>
          </h2>
          <div className={`section-divider ${centered ? "" : "ms-0"}`} />
          {subtitle && (
            <p
              className={`${centered ? "mx-auto" : ""}`}
              style={{
                color: "var(--text-muted)",
                maxWidth: 560,
                fontSize: "1.05rem",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
