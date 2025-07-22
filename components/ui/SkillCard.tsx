import type { LucideIcon } from "lucide-react"

interface SkillCardProps {
  category: string
  data: {
    items: string[]
    icon: LucideIcon
  }
}

export default function SkillCard({ category, data }: SkillCardProps) {
  const { items, icon: Icon } = data

  return (
    <div className="skill-card">
      <div className="skill-header">
        <Icon className="skill-icon" size={20} />
        <h6 className="skill-title">{category}</h6>
      </div>
      <div className="skill-items">
        {items.map((skill, idx) => (
          <span key={idx} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
