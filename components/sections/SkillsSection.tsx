import { SKILLS, CERTIFICATIONS } from "@/constants/content"
import SkillCard from "@/components/ui/SkillCard"
import CertificationCard from "@/components/ui/CertificationCard"

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I use to build amazing applications</p>
        </div>

        {/* Skills Grid */}
        <div className="row g-4 mb-5">
          {Object.entries(SKILLS).map(([category, data], index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <SkillCard category={category} data={data} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <h3 className="text-center mb-4">Certifications & Achievements</h3>
          <div className="row g-4">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="col-md-6">
                <CertificationCard {...cert} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
