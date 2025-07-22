import { ABOUT_CARDS, EDUCATION_DATA } from "@/constants/content"
import AboutCard from "@/components/ui/AboutCard"
import EducationCard from "@/components/ui/EducationCard"

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Full Stack Developer with expertise in modern web technologies</p>
        </div>

        {/* Professional Summary */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto">
            <div className="summary-card">
              <h4 className="summary-title">Professional Summary</h4>
              <p className="summary-text">
                Computer Science student with hands-on experience in MERN stack, Java, and Cloud Computing. Skilled in
                building full-stack applications, optimizing RESTful APIs, and deploying modern web solutions using
                tools like Vercel, Git, and Postman. Strong foundation in DSA and object-oriented programming, with a
                passion for problem-solving and delivering scalable tech solutions.
              </p>
            </div>
          </div>
        </div>

        {/* About Cards */}
        <div className="row g-4 mb-5">
          {ABOUT_CARDS.map((card, index) => (
            <div key={index} className="col-md-4">
              <AboutCard {...card} />
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3 className="text-center mb-4">Education</h3>
          <div className="row g-4">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="col-lg-4">
                <EducationCard {...edu} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
