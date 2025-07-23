"use client"

import type React from "react"
import emailjs from "@emailjs/browser"  

import { useRef, useEffect, useState } from "react"
import { Send, User, Mail, MessageSquare, Briefcase, Loader2 } from "lucide-react"
export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


 
    // Simulate form submission
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormStatus('loading');
  
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
  
  
        .then(() => {
          setFormStatus('success');
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          setFormStatus('error');
        });
    };
  

  return (
    <div className="contact-form-container">
      <form  onSubmit={handleSubmit} className="contact-form">
        <div className="row g-3">
          {/* Name Field */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <User size={16} className="me-2" />
                Full Name 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <Mail size={16} className="me-2" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <MessageSquare size={16} className="me-2" />
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Brief subject of your message"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <MessageSquare size={16} className="me-2" />
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary btn-lg submit-btn" >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="me-2 spinner" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={20} className="me-2" />
                  Send Message
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="col-12">
              <div className="alert alert-success" role="alert">
                <strong>Message sent successfully!</strong> I'll get back to you within 24 hours.
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="col-12">
              <div className="alert alert-danger" role="alert">
                <strong>Oops!</strong> Something went wrong. Please try again or contact me directly.
              </div>
            </div>
          )}
        </div>
      </form>

      {/* Form Features */}
      <div className="form-features">
        <div className="feature-item">
          <div className="feature-icon">🔒</div>
          <div className="feature-text">Your information is secure and will never be shared</div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">⚡</div>
          <div className="feature-text">Quick response within 24 hours</div>
        </div>
       
      </div>
    </div>
  )
}
