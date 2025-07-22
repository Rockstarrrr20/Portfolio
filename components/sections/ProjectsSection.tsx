import { PROJECTS } from "@/constants/content"
import ProjectCard from "@/components/ui/ProjectCard"

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Full-stack applications built with modern technologies</p>
        </div>
        <div className="row g-4">
          {PROJECTS.map((project, index) => (
            <div key={index} className="col-lg-4">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
