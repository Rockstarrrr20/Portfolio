import { Award, ExternalLink, Calendar } from "lucide-react"

interface CertificationCardProps {
  title: string
  organization: string
  date: string
  link?: string
  type: "hackathon" | "internship" | "course"
}

export default function CertificationCard({ title, organization, date, link, type }: CertificationCardProps) {
  const getTypeColor = () => {
    switch (type) {
      case "hackathon":
        return "warning"
      case "internship":
        return "success"
      case "course":
        return "primary"
      default:
        return "primary"
    }
  }

  return (
    <div className="certification-card">
      <div className={`certification-header bg-${getTypeColor()}`}>
        <Award size={24} className="text-white" />
      </div>
      <div className="certification-body">
        <h5 className="certification-title">{title}</h5>
        <p className="certification-org">{organization}</p>
        <div className="certification-date">
          <Calendar size={14} className="me-1" />
          <span>{date}</span>
        </div>
        {link && (
          <a href={link} className="certification-link" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} className="me-1" />
            View Certificate
          </a>
        )}
      </div>
    </div>
  )
}
