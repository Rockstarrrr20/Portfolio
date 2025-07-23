import { Code, Database, Server, Smartphone, Mail, Phone, Linkedin, Cloud, Users, Trophy } from "lucide-react"

export const HERO_ROLES = ["Full Stack Developer", "MERN Stack Expert", "Java Developer", "Cloud Computing Enthusiast"]

export const ABOUT_CARDS = [
  {
    icon: Code,
    title: "Development",
    content: "MERN Stack Expert",
    detail: "Full Stack Applications",
    color: "primary",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    content: "Modern Deployment",
    detail: "Vercel & Cloud Platforms",
    color: "success",
  },
  {
    icon: Trophy,
    title: "Problem Solving",
    content: "DSA Enthusiast",
    detail: "Algorithmic Thinking",
    color: "warning",
  },
]

export const EDUCATION_DATA = [
  {
    institution: "Modern Institute of Technology and Research Centre",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2021 – 2025",
    location: "Alwar, Rajasthan",
    grade: "8.1 CGPA",
  },
  {
    institution: "CBSE",
    degree: "Class 12th ( PCM)",
    duration: "2020 – 2021",
    location: "Alwar, Rajasthan",
    grade: "73%",
  },
  {
    institution: "CBSE",
    degree: "Class 10th",
    duration: "2018 – 2019",
    location: "Alwar, Rajasthan",
    grade: "77%",
  },
]

export const PROJECTS = [
    {
      title: "E-Com Website (Admin Panel)",
      description: "Full-featured e-commerce platform with authentication, admin panel, and order tracking system.",
      tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "JWT"],
      highlights: ["User Dashboard", "Admin Panel", "Payment Gateway", "Order Tracking"],
      links: { code: "https://github.com/Rockstarrrr20/ECOM", 
        live: "https://forever-admin-beige.vercel.app/" },
      color: "primary",
      duration: "Feb 2025 – Mar 2025",
    },
    {
      title: "E-Com Website (Client Side)",
      description: "Full-featured e-commerce platform with authentication, user, and order tracking system.",
      tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "JWT"],
      highlights: ["User Dashboard", "Admin Panel", "Payment Gateway", "Order Tracking"],
      links: { code: "https://github.com/Rockstarrrr20/ECOM", 
        live: "https://forever-user-beige.vercel.app/" },
      color: "accent",
      duration: "Feb 2025 – Mar 2025",
    },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: ["Personal Branding", "Smooth Animations", "Responsive Design", "Vercel Deployment"],
    links: { code: "https://github.com/Rockstarrrr20/Portfolio", 
      live: "/" },
    color: "danger",
    duration: "Jul 2025 – Aug 2025",
  },
  {
    title: "Blog Website",
    description: "Responsive full-stack blog platform with CRUD functionality, user roles, and content moderation.",
    tech: ["MERN Stack", "MySQL", "JWT", "Bootstrap"],
    highlights: ["CRUD Operations", "User Roles", "Content Moderation", "Admin Dashboard"],
    links: { code: "https://github.com/Rockstarrrr20/BLOG_APP" },
    color: "success",
    duration: "Jul 2024 – Aug 2024",
  },
  {
    title: "Banking System Web App",
    description:
      "Secure platform for banking operations including account management, transactions, and authentication.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    highlights: ["Account Management", "Secure Transactions", "Session Security", "Authentication"],
    links: { code: "https://github.com/Rockstarrrr20/Bank" },
    color: "info",
    duration: "Aug 2023 – Sep 2023",
  },
  {
    title: "Email (JAVA)",
    description: "Email client application using Java, JSP, and Servlet. With little use of HTML, CSS, and fully backend centric.",
    tech: ["HTML", "CSS", "JAVA", "MySQL", "Servlet"],
    highlights: ["User Dashboard", "send messages ", "receive messages", "delete messages"],
    links: { code: "https://github.com/Rockstarrrr20/myemail" },
    color: "dream",
    duration: "Feb 2022 – Mar 2022",
  },
]

export const SKILLS = {
  Programming: {
    items: ["Java", "C++", "C", "JavaScript", "DSA"],
    icon: Code,
  },
  "Web Development": {
    items: ["MERN Stack", "React.js", "Node.js", "Express.js", "HTML/CSS"],
    icon: Smartphone,
  },
  Databases: {
    items: ["MongoDB Atlas", "MySQL"],
    icon: Database,
  },
  "Tools & Platforms": {
    items: ["Git", "GitHub", "Postman", "Vercel", "VS Code"],
    icon: Server,
  },
  "Soft Skills": {
    items: ["Teamwork", "Communication", "Problem Solving", "Leadership"],
    icon: Users,
  },
}

export const CERTIFICATIONS = [
  {
    title: "Shankara Global Hackathon Finalist",
    organization: "Shankara Global",
    date: "Mar 2024",
    link: "https://drive.google.com/file/d/1lhCwp_dOnSg6HQov1yJDgRyKkWOKuQuZ/view",
    type: "hackathon" as const,
  },
  {
    title: "Web Development Internship",
    organization: "Internship Studio",
    date: "Jun 2024",
    link: "https://drive.google.com/file/d/18LZFbmfk4krz57AS1MiUeLW0AjKdYumV/view",
    type: "internship" as const,
  },
]

export const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "arnavrj2001@gmail.com",
    href: "mailto:arnavrj2001@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9352890191",
    href: "tel:+919352890191",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect",
    href: "https://www.linkedin.com/in/arnav--sharma20/",
  },
]
