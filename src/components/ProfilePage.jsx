import { useState } from 'react'
import { CLASSES } from '../data/classes.js'
import { PROFILE_DATA } from '../data/profileData.js'
import { DIMENSIONS } from '../data/dimensionsData.js'
import ClassCard from './ClassCard.jsx'
import ItemBar from './ItemBar.jsx'
import TypeIcon from './TypeIcon.jsx'

const PROOF_PREVIEW_COUNT = 2

const TYPE_SWITCHER_ORDER = [
  'institutional-reformers',
  'results-oriented-pragmatists',
  'populist-insurgents',
  'fair-deal-skeptics',
  'grassroots-communitarians',
]

export default function ProfilePage({ classId, highlightedId }) {
  const [showAllProof, setShowAllProof] = useState(false)
  const cls = CLASSES.find(c => c.id === classId)
  const profile = PROFILE_DATA[classId]

  if (!cls || !profile) {
    return (
      <div className="profile-not-found">
        <p>Profile not found. <a href="#/profiles">← All profiles</a></p>
      </div>
    )
  }


  return (
    <div className="profile-page">

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
        </div>
      </div>

      {/* Type switcher strip */}
      <div className="profile-type-switcher" role="navigation" aria-label="Switch between trust types">
        {TYPE_SWITCHER_ORDER.map(id => {
          const t = CLASSES.find(c => c.id === id)
          if (!t) return null
          const isCurrent = id === classId
          return (
            <a
              key={id}
              href={`#/profiles/${id}`}
              className={`profile-type-pip${isCurrent ? ' profile-type-pip--active' : ''}`}
              aria-current={isCurrent ? 'page' : undefined}
              style={isCurrent ? { borderBottomColor: t.accentColor, color: t.accentColor } : {}}
            >
              <span className="profile-type-pip-dot" style={{ background: t.accentColor }} />
              <span className="profile-type-pip-name">{t.name}</span>
            </a>
          )
        })}
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

        {/* What They Believe */}
        <section className="profile-section">
          <h2 className="profile-section-title">What They Believe</h2>
          <p className="profile-section-intro">
            How this type responds to survey items, compared to the average across all five types.
            Each bar shows the majority position this type takes, with the exact wording from the quiz.
            Values are provisional, from the synthetic design study.
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
        </section>

        {/* What Worries Them Most */}
        <section className="profile-section">
          <p className="profile-para">{profile.topTrustIssues.issues}</p>
          <h2 className="profile-section-title" style={{ marginTop: '1.5rem' }}>What Worries Them Most</h2>
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
            <a href="#/dimensions" className="profile-dimensions-link">See Twelve Dimensions of Trust →</a>
          </p>
        </section>

        {/* What the Research Shows */}
        {profile.proofPoints && profile.proofPoints.length > 0 && (
          <section className="profile-section">
            <h2 className="profile-section-title">What the Research Shows</h2>
            <p className="profile-section-intro">
              The strongest empirical evidence supporting this perspective. These are shared facts, not talking points — the same data looks different depending on which questions you bring to it.
            </p>
            <ol className="proof-point-list">
              {profile.proofPoints
                .slice(0, showAllProof ? undefined : PROOF_PREVIEW_COUNT)
                .map((pp, i) => (
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
            {profile.proofPoints.length > PROOF_PREVIEW_COUNT && (
              <button
                className="proof-toggle-btn"
                onClick={() => setShowAllProof(v => !v)}
                type="button"
              >
                {showAllProof
                  ? 'Show less ↑'
                  : `Show all ${profile.proofPoints.length} findings ↓`}
              </button>
            )}
          </section>
        )}

        {/* How They Meet the Other Four */}
        {profile.meetingNarrative && (
          <section className="profile-section">
            <h2 className="profile-section-title">How They Meet the Other Four</h2>
            <p className="profile-para">
              {profile.meetingNarrative.split(/(\{\{[a-z-]+\}\})/g).map((part, i) => {
                const m = part.match(/^\{\{([a-z-]+)\}\}$/)
                if (!m) return part
                const t = CLASSES.find(c => c.id === m[1])
                if (!t) return null
                return (
                  <a key={i} href={`#/profiles/${t.id}`} style={{ color: t.accentColor, fontWeight: 600, textDecoration: 'none' }}>
                    {t.name}
                  </a>
                )
              })}
            </p>
          </section>
        )}

        {/* Explore All Types */}
        <section className="profile-section profile-section--explore">
          <h2 className="profile-section-title">All Five Types</h2>
          <div className="profile-explore-grid">
            {TYPE_SWITCHER_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean).map(c => (
              <a
                key={c.id}
                href={`#/profiles/${c.id}`}
                className={`profile-explore-link${c.id === classId ? ' profile-explore-link--current' : ''}`}
                aria-label={`View profile: ${c.name}${c.id === highlightedId ? ' (your result)' : ''}`}
              >
                <ClassCard
                  name={c.name}
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
          <p>
            Research prototype — provisional typology from a synthetic design study, pre-fielding.
          </p>
          <p>
            Results and analysis will be published at{' '}
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>{' '}
            as the study develops.
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
