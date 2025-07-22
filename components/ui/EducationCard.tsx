import { GraduationCap, Calendar, MapPin } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  duration: string
  location: string
  grade?: string
}

export default function EducationCard({ institution, degree, duration, location, grade }: EducationCardProps) {
  return (
    <div className="education-card">
      <div className="education-icon">
        <GraduationCap size={24} />
      </div>
      <div className="education-content">
        <h5 className="education-institution">{institution}</h5>
        <p className="education-degree">{degree}</p>
        <div className="education-details">
          <div className="education-detail">
            <Calendar size={14} className="me-1" />
            <span>{duration}</span>
          </div>
          <div className="education-detail">
            <MapPin size={14} className="me-1" />
            <span>{location}</span>
          </div>
          {grade && (
            <div className="education-grade">
              <span className="grade-badge">{grade}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
