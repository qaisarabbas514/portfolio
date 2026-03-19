"use client";

/**
 * Home page – assembles all portfolio sections and initialises
 * the scroll-based fade-in animation via the useFadeIn hook.
 */
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import useFadeIn from "@/hooks/useFadeIn";

export default function Home() {
  // Initialise intersection-observer fade-in animations
  useFadeIn();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
