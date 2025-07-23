import { Mail, Linkedin, Phone, MapPin, Clock } from "lucide-react"
import { CONTACT_METHODS } from "@/constants/content"
import ContactMethod from "@/components/ui/ContactMethod"
import ContactForm from "@/components/ui/ContactForm"

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="contact-header">
              <h2 className="contact-title">Let's Build Something Great Together</h2>
              <p className="contact-subtitle">
                Ready to collaborate on your next project? I'm always excited to work on innovative solutions and bring
                ideas to life with modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-5">
          {/* Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-section">
              <h3 className="contact-info-title">Get In Touch</h3>
              <p className="contact-info-subtitle">
                I'm currently available for freelance work and full-time opportunities. Let's discuss how we can work
                together!
              </p>

              {/* Contact Methods */}
              <div className="contact-methods-list">
                {CONTACT_METHODS.map((method, index) => (
                  <div key={index} className="contact-method-item">
                    <ContactMethod {...method} />
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="contact-additional-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">Alwar, Rajasthan, India</div>
                  </div>
                </div>
                <div className="info-item">
                  <Clock size={20} />
                  <div>
                    <div className="info-label">Response Time</div>
                    <div className="info-value">Within 24 hours</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links-contact">
                  <a href="https://github.com/Rockstarrrr20" className="social-link-contact github">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/arnav--sharma20/" className="social-link-contact linkedin">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-section">
              <h3 className="form-title">Send Me a Message</h3>
              <p className="form-subtitle">
                Have a project in mind? Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
