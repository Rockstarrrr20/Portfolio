"use client"
import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import SkillsSection from "@/components/sections/SkillsSection"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/layout/Footer"
import { useScrollTracking } from "@/hooks/useScrollTracking"

export default function Portfolio() {
  const { activeSection, scrolled } = useScrollTracking()

  return (
    <div className="min-h-screen bg-white">
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
