import type { LucideIcon } from "lucide-react"

interface AboutCardProps {
  icon: LucideIcon
  title: string
  content: string
  detail: string
  color: string
}

export default function AboutCard({ icon: Icon, title, content, detail, color }: AboutCardProps) {
  return (
    <div className="about-card">
      <div className={`about-icon bg-${color}`}>
        <Icon size={24} />
      </div>
      <h5 className="about-title">{title}</h5>
      <p className="about-content">{content}</p>
      <small className="about-detail">{detail}</small>
    </div>
  )
}
