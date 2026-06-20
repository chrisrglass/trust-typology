export default function ClassCard({ name, tagline, prevalence, accentColor, isYours, expanded, description, characteristics }) {
  return (
    <article
      className={`class-card${isYours ? ' is-yours' : ''}`}
      aria-label={`${name}${isYours ? ' — your result' : ''}`}
    >
      <div className="class-card-accent-band" style={{ background: accentColor }} />
      <div className="class-card-body">
        {isYours && (
          <span className="class-card-badge" style={{ background: accentColor }}>
            Your result
          </span>
        )}
        <h3 className="class-card-name" style={{ color: accentColor }}>{name}</h3>
        <p className="class-card-tagline">{tagline}</p>
        <span className="class-card-prevalence">{prevalence} of respondents</span>

        {expanded && description && (
          <div className="class-card-expanded">
            <p className="class-card-description">{description}</p>
            {characteristics && characteristics.length > 0 && (
              <ul className="class-card-characteristics">
                {characteristics.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
