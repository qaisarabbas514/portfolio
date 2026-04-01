import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

/* ── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Qaisar | Front-End Developer Portfolio",
  description:
    "Professional portfolio of Qaisar – a passionate Full-Stack Developer specialising in React, Next.js, Angular, and modern UI/UX design.",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "nextjs",
    "frontend",
    "fullstack",
  ],
  authors: [{ name: "Qaisar" }],
  openGraph: {
    title: "Qaisar | Full-Stack Developer Portfolio",
    description:
      "Explore projects, skills and experience of Qaisar – Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Bootstrap JS (client-only) */}
        <BootstrapClient />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
