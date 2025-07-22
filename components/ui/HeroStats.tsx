export default function HeroStats() {
  const stats = [
    { number: "3+", label: "Projects" },
    { number: "2025", label: "Graduate" },
    { number: "MERN", label: "Stack" },
  ]

  return (
    <div className="hero-stats row g-3">
      {stats.map((stat, index) => (
        <div key={index} className="col-4">
          <div className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
