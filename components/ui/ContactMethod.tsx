import type { LucideIcon } from "lucide-react"

interface ContactMethodProps {
  icon: LucideIcon
  label: string
  value: string
  href: string
}

export default function ContactMethod({ icon: Icon, label, value, href }: ContactMethodProps) {
  return (
    <a href={href} className="contact-method-link">
      <div className="contact-method-icon">
        <Icon size={20} />
      </div>
      <div className="contact-method-content">
        <div className="method-label">{label}</div>
        <div className="method-value">{value}</div>
      </div>
    </a>
  )
}
