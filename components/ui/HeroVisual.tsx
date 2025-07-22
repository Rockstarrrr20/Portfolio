import { Code, Server, Database, Cloud } from "lucide-react"

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="floating-card card-1">
        <Code size={24} className="text-primary" />
        <span>MERN Stack</span>
      </div>
      <div className="floating-card card-2">
        <Server size={24} className="text-success" />
        <span>Java</span>
      </div>
      <div className="floating-card card-3">
        <Database size={24} className="text-warning" />
        <span>MongoDB</span>
      </div>
      <div className="floating-card card-4">
        <Cloud size={24} className="text-info" />
        <span>Cloud</span>
      </div>
      <div className="hero-circle">
        <div className="hero-avatar">
          <Code size={60} className="text-white" />
        </div>
      </div>
    </div>
  )
}
