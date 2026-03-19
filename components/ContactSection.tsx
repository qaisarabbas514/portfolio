"use client";

/**
 * ContactSection – contact info + message form.
 */
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  {
    icon: FiMail,
    label: "Email",
    value: "qaisar.abbas6331@gmail.com",
    href: "mailto:qaisar.abbas6331@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Lahore, Punjab, Pakistan 🇵🇰",
    href: "#",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 3466331311",
    href: "tel:+923466331311",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
      className="contact-section"
    >
      <div className="row g-4 justify-content-center">
        {/* Left – contact info */}
        <div className="col-12 col-lg-5 fade-in-up">
          <div className="contact-card h-100">
            <h3
              className="mb-2"
              style={{ fontSize: "1.3rem", fontWeight: 700 }}
            >
              Let&apos;s build something great together.
            </h3>
            <p
              className="mb-4"
              style={{ color: "var(--text-muted)", lineHeight: 1.8 }}
            >
              I&apos;m currently open to freelance projects, full-time roles,
              and collaborative opportunities. Whether you have a question, a
              proposal, or just want to connect — my inbox is always open.
            </p>

            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="contact-info-item text-decoration-none"
                style={{ color: "inherit", display: "flex" }}
              >
                <div className="contact-info-icon">
                  <Icon size={18} />
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
              </a>
            ))}

            {/* Availability note */}
            <div
              className="mt-4 p-3"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.25)",
                borderRadius: 12,
                fontSize: "0.875rem",
                color: "#22c55e",
              }}
            >
              <strong>✅ Available for new projects</strong> — typically respond
              within 24 hours.
            </div>
          </div>
        </div>

        {/* Right – form */}
        <div className="col-12 col-lg-7 fade-in-up fade-delay-2">
          <div className="contact-card">
            {submitted ? (
              /* Success state */
              <div className="text-center py-5" style={{ color: "#22c55e" }}>
                <FiCheckCircle size={56} className="mb-3" />
                <h3 className="mb-2">Message Sent!</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  className="btn btn-gradient mt-3"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-control form-control-custom"
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label-custom">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-control form-control-custom"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Collaboration / Hello"
                      className="form-control form-control-custom"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label-custom">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or just say hi..."
                      className="form-control form-control-custom"
                      required
                      style={{ resize: "none" }}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gradient w-100 d-flex align-items-center justify-content-center gap-2"
                      disabled={loading}
                      style={{ padding: "0.85rem" }}
                    >
                      {loading ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
