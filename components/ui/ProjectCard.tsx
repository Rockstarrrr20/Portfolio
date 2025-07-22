import { Github, ExternalLink, Calendar } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  highlights: string[]
  links: {
    code?: string
    video?: string
    live?: string
  }
  color: string
  duration?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  highlights,
  links,
  color,
  duration,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className={`project-header bg-${color}`}>
        <h5 className="project-title">{title}</h5>
        {duration && (
          <div className="project-duration">
            <Calendar size={14} className="me-1" />
            <small>{duration}</small>
          </div>
        )}
      </div>
      <div className="project-body">
        <p className="project-description">{description}</p>

        <div className="project-highlights mb-3">
          {highlights.map((highlight, idx) => (
            <span key={idx} className="highlight-badge">
              {highlight}
            </span>
          ))}
        </div>

        <div className="project-tech mb-3">
          {tech.map((techItem, idx) => (
            <span key={idx} className="tech-badge">
              {techItem}
            </span>
          ))}
        </div>

        <div className="project-links">
          {links.code && (
            <a href={links.code} target="_blank" className="project-link">
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          {links.live && (
            <a href={links.live} target="_blank" className="project-link">
              <ExternalLink size={16} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
