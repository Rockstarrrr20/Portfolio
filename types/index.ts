import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
  id: string
  label: string
  icon: string
}

export interface SocialLink {
  name: string
  url: string
  icon: LucideIcon
}

export interface Project {
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
}

export interface AboutCard {
  icon: LucideIcon
  title: string
  content: string
  detail: string
  color: string
}

export interface SkillCategory {
  items: string[]
  icon: LucideIcon
}

export interface ContactMethod {
  icon: LucideIcon
  label: string
  value: string
  href: string
}
