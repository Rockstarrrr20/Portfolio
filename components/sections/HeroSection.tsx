"use client"
import { Mail, ChevronDown, Star, Phone } from "lucide-react"
import { scrollToSection } from "@/utils/navigation"
import { HERO_ROLES } from "@/constants/content"
import HeroVisual from "@/components/ui/HeroVisual"
import HeroStats from "@/components/ui/HeroStats"
import TypingAnimation from "@/components/ui/TypingAnimation"

export default function HeroSection() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content animate-fade-in">
              <h1 className="hero-title mb-3">
                Hi, I'm <span className="text-gradient">Arnav Sharma</span>
              </h1>
              <div className="hero-subtitle mb-4">
                <TypingAnimation roles={HERO_ROLES} />
              </div>
              <p className="hero-description mb-4">
                Computer Science student with hands-on experience in MERN stack, Java, and Cloud Computing. Passionate
                about building scalable web applications and solving complex problems with modern technologies.
              </p>
              <div className="hero-buttons d-flex gap-3 mb-4">
                <button className="btn btn bg-gradient-primary btn-lg" onClick={() => scrollToSection("contact")}>
                  <Mail className="me-2" size={18} />
                  Let's Connect
                </button>
                <button className="btn btn-outline-primary btn-lg" onClick={() => scrollToSection("projects")} style={{color: "black"}}>
                  View Projects
                  <ChevronDown className="ms-2" size={18} />
                </button>
              </div>
              <div className="hero-contact-info d-flex gap-4 mb-4">
                <a href="tel:+919352890191" className="contact-quick-link">
                  <Phone size={16} className="me-2" />
                  +91-9352890191
                </a>
                <a href="mailto:arnavrj2001@gmail.com" className="contact-quick-link">
                  <Mail size={16} className="me-2" />
                  arnavrj2001@gmail.com
                </a>
              </div>
              <HeroStats />
            </div>
          </div>
          <div className="col-lg-6">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}
