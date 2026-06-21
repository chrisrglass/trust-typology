import { CLASSES } from '../data/classes.js'
import { PROFILE_DATA } from '../data/profileData.js'
import { DIMENSIONS } from '../data/dimensionsData.js'
import ClassCard from './ClassCard.jsx'
import ItemBar from './ItemBar.jsx'
import TypeIcon from './TypeIcon.jsx'

export default function ProfilePage({ classId, highlightedId }) {
  const cls = CLASSES.find(c => c.id === classId)
  const profile = PROFILE_DATA[classId]

  if (!cls || !profile) {
    return (
      <div className="profile-not-found">
        <p>Profile not found. <a href="#/profiles">← All profiles</a></p>
      </div>
    )
  }

  const neighbor = CLASSES.find(c => c.id === profile.nearestNeighborId)

  return (
    <div className="profile-page">

      {/* Nav */}
      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
        <a href="#/" className="profile-nav-quiz">Take the quiz →</a>
      </nav>

      {/* Header band */}
      <div className="profile-header-band" style={{ background: cls.accentColor }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">Trust Typology</p>
          {cls.icon && (
            <div className="profile-header-icon">
              <TypeIcon iconName={cls.icon} color="rgba(255,255,255,0.85)" size={48} strokeWidth={1.5} />
            </div>
          )}
          <h1 className="profile-header-name">{cls.name}</h1>
          <p className="profile-header-tagline">{cls.tagline}</p>
          <span className="profile-header-prevalence">{cls.prevalence} of adults (simulated)</span>
        </div>
      </div>

      {/* Body */}
      <div className="profile-body">

        {/* Overview */}
        <section className="profile-section">
          <h2 className="profile-section-title">Overview</h2>
          {profile.expandedDescription.map((para, i) => (
            <p key={i} className="profile-para">{para}</p>
          ))}
        </section>

        {/* Key Positions */}
        <section className="profile-section">
          <h2 className="profile-section-title">Key Positions</h2>
          <p className="profile-section-intro">
            How this group responded to survey items, compared to the average across all seven types.
            Each bar shows the majority position this type took, with the exact wording from the quiz.
          </p>
          <div className="profile-items">
            {profile.keyItems.map(item => (
              <ItemBar
                key={item.id}
                itemId={item.id}
                classProb={item.classProb}
                avgProb={item.avgProb}
                accentColor={cls.accentColor}
              />
            ))}
          </div>
          <p className="profile-data-note">
            Based on simulated pilot data (N=500). Live fielding target: N=400–600. Class sizes and names are provisional.
          </p>
        </section>

        {/* Top Trust Issues */}
        <section className="profile-section">
          <p className="profile-para">{profile.topTrustIssues.issues}</p>
          <h2 className="profile-section-title" style={{ marginTop: '1.5rem' }}>Top Three Concerns</h2>
          <div className="concern-card-grid">
            {profile.topTrustIssues.mainConcerns.map((concern, i) => {
              const dim = DIMENSIONS.find(d => d.id === concern.dimId)
              const [cat, ...rest] = (concern.text ?? concern).split(' — ')
              const desc = rest.join(' — ')
              return (
                <a key={i} href={`#/dimensions/${concern.dimId}`} className="concern-card">
                  <span className="concern-card-icon">
                    <TypeIcon iconName={dim?.icon} color="#666" size={20} strokeWidth={1.6} />
                  </span>
                  <div className="concern-card-title">{cat}</div>
                  {desc && <div className="concern-card-desc">{desc}</div>}
                </a>
              )
            })}
          </div>
          <p className="profile-para" style={{ marginTop: '0.75rem' }}>
            <a href="#/dimensions" className="profile-dimensions-link">See Nine Dimensions of Trust →</a>
          </p>
        </section>

        {/* Proof Points */}
        {profile.proofPoints && profile.proofPoints.length > 0 && (
          <section className="profile-section">
            <h2 className="profile-section-title">Proof Points</h2>
            <p className="profile-section-intro">
              The strongest empirical evidence supporting this perspective. These are shared facts, not talking points — the same data looks different depending on which questions you bring to it.
            </p>
            <ol className="proof-point-list">
              {profile.proofPoints.map((pp, i) => (
                <li key={i} className="proof-point-item">
                  <p className="proof-point-claim">{pp.claim}</p>
                  <p className="proof-point-context">{pp.context}</p>
                  <a
                    href={pp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proof-point-source"
                  >
                    {pp.source} ↗
                  </a>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Reform Stance */}
        <section className="profile-section">
          <h2 className="profile-section-title">What Begins to Rebuild Trust?</h2>
          <p className="profile-para">{profile.reformStance}</p>
        </section>

        {/* Nearest Neighbor */}
        {neighbor && (
          <section className="profile-section">
            <h2 className="profile-section-title">Nearest Neighbor</h2>
            <a
              href={`#/profiles/${neighbor.id}`}
              className="profile-neighbor-card"
              style={{ borderColor: neighbor.accentColor }}
            >
              <div className="profile-neighbor-header">
                {neighbor.icon
                  ? <TypeIcon iconName={neighbor.icon} color={neighbor.accentColor} size={18} />
                  : <div className="profile-neighbor-dot" style={{ background: neighbor.accentColor }} />
                }
                <span className="profile-neighbor-name" style={{ color: neighbor.accentColor }}>
                  {neighbor.name}
                </span>
                <span className="profile-neighbor-arrow">→</span>
              </div>
              <p className="profile-neighbor-note">{profile.nearestNeighborNote}</p>
            </a>
          </section>
        )}

        {/* Explore All Types */}
        <section className="profile-section profile-section--explore">
          <h2 className="profile-section-title">Explore All Seven Types</h2>
          <div className="profile-explore-grid">
            {CLASSES.map(c => (
              <a
                key={c.id}
                href={`#/profiles/${c.id}`}
                className={`profile-explore-link${c.id === classId ? ' profile-explore-link--current' : ''}`}
                aria-label={`View profile: ${c.name}${c.id === highlightedId ? ' (your result)' : ''}`}
              >
                <ClassCard
                  name={c.name}
                  tagline={c.tagline}
                  prevalence={c.prevalence}
                  accentColor={c.accentColor}
                  icon={c.icon}
                  isYours={c.id === highlightedId}
                  expanded={false}
                />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="profile-footer">
          <p>Thank you for your interest in this research.</p>
          <p>
            Results and analysis will be published at{' '}
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>{' '}
            when the study is complete.
          </p>
          <p>
            Questions? Contact{' '}
            <a href="mailto:crglass@bc.edu">crglass@bc.edu</a>.
          </p>
          <p className="profile-footer-attribution">
            Chris R. Glass · Boston College Lynch School of Education and Human Development
          </p>
        </footer>

      </div>
    </div>
  )
}
