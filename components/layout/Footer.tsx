import { SOCIAL_LINKS } from "@/constants/navigation"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">© 2025 Arnav Sharma. Crafted with ❤️ using React & Bootstrap.</p>
          <div className="footer-links">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} href={link.url} className="footer-link">
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
