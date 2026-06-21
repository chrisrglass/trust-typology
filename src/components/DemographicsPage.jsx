import { useState } from 'react'
import { CLASSES } from '../data/classes.js'
import { DEMOGRAPHIC_VARIABLES, CLASS_DEMOGRAPHICS } from '../data/demographicsData.js'

const CLASS_ORDER = [
  'institutional-faithful',
  'critical-believers',
  'economically-dispossessed',
  'community-meritocrats',
  'indifferent-skeptics',
  'faith-rooted-skeptics',
  'populist-antagonists',
]

const SORTED_CLASSES = CLASS_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean)

function parsePrevalence(str) {
  return parseFloat(str.replace(/[^0-9.]/g, '')) / 100
}

// Bayesian inversion: P(type | option) ∝ P(option | type) × P(type)
function computeTypeWeights(varId, option) {
  const weights = SORTED_CLASSES.map(cls => {
    const prevalence = parsePrevalence(cls.prevalence)
    const prob = CLASS_DEMOGRAPHICS[cls.id]?.[varId]?.[option] ?? 0
    return prevalence * prob
  })
  const total = weights.reduce((a, b) => a + b, 0)
  if (total === 0) return SORTED_CLASSES.map(() => 0)
  return weights.map(w => w / total)
}

function OptionRow({ varId, option }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(null)
  const weights = computeTypeWeights(varId, option)

  const segments = SORTED_CLASSES.map((cls, i) => ({ cls, pct: weights[i] * 100 }))
    .filter(s => s.pct >= 0.5)

  const ranked = [...segments].sort((a, b) => b.pct - a.pct)
  const topIds = new Set(ranked.slice(0, 2).map(s => s.cls.id))
  const dominantId = ranked[0]?.cls.id
  const secondId = ranked[1]?.cls.id

  return (
    <div className="demo-option-row">
      <div className="demo-option-label">{option}</div>
      <div
        className="demo-seg-bar-wrap"
        onMouseLeave={() => setHovered(null)}
      >
        <button
          className={`demo-seg-bar${expanded ? ' demo-seg-bar--expanded' : ''}`}
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          aria-label={`${option}: tap to see type breakdown`}
          type="button"
        >
          {segments.map(s => {
            const isBright = topIds.has(s.cls.id)
            const isDominant = s.cls.id === dominantId
            const isSecond = s.cls.id === secondId
            return (
              <div
                key={s.cls.id}
                className={`demo-seg${isBright ? ' demo-seg--bright' : ' demo-seg--dim'}${isDominant || isSecond ? ' demo-seg--dominant' : ''}`}
                style={{ width: `${s.pct}%`, background: s.cls.accentColor }}
                onMouseEnter={() => setHovered({ name: s.cls.name, pct: s.pct })}
              >
                {(isDominant || isSecond) && (
                  <span className="demo-seg-dominant-label">{s.cls.name}</span>
                )}
              </div>
            )
          })}
        </button>
        {hovered && (
          <div className="demo-seg-tooltip">
            <span className="demo-seg-tooltip-name">{hovered.name}</span>
            {' · '}
            <span className="demo-seg-tooltip-pct">{Math.round(hovered.pct)}%</span>
          </div>
        )}
        {expanded && (
          <div className="demo-breakdown">
            {ranked.map(s => (
              <a
                key={s.cls.id}
                href={`#/profiles/${s.cls.id}`}
                className="demo-breakdown-row"
                onClick={e => e.stopPropagation()}
              >
                <span className="demo-breakdown-swatch" style={{ background: s.cls.accentColor }} />
                <span className="demo-breakdown-name">{s.cls.name}</span>
                <span className="demo-breakdown-pct">{Math.round(s.pct)}%</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function DemographicSection({ variable }) {
  return (
    <div className="demo-section">
      <p className="profile-section-title">{variable.label}</p>
      {variable.question && (
        <p className="demo-question-text">{variable.question}</p>
      )}
      <div className="demo-rows">
        {variable.options.map(opt => (
          <OptionRow key={opt} varId={variable.id} option={opt} />
        ))}
      </div>
    </div>
  )
}

export default function DemographicsPage() {
  return (
    <div className="profile-page">

      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
      </nav>

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <h1 className="profile-header-name">Who Holds Each View?</h1>
          <p className="profile-header-tagline">
            For each survey response, the trust-type composition of people who gave that answer.
          </p>
        </div>
      </div>

      <div className="profile-body">

        <div className="demo-illustrative-note">
          <strong>Illustrative data.</strong> Distributions are simulated from the N=500 pilot typology. They will be replaced with live fielded data once survey responses reach N≥400.
        </div>

        <p className="demo-reading-note">
          Each row shows a response option from the quiz. The top two trust types for each answer are shown in full color — the others are present but dimmed. Hover any segment to see the type and its share. Tap or click to see the full ranked breakdown.
        </p>

        <div className="demo-legend">
          {SORTED_CLASSES.map(cls => (
            <a key={cls.id} href={`#/profiles/${cls.id}`} className="demo-legend-item">
              <span className="demo-legend-swatch" style={{ background: cls.accentColor }} />
              {cls.name}
            </a>
          ))}
        </div>

        {DEMOGRAPHIC_VARIABLES.map(variable => (
          <DemographicSection key={variable.id} variable={variable} />
        ))}

        <footer className="profile-footer" style={{ marginTop: '2rem' }}>
          <p>
            A research project by Chris R. Glass, Director, Executive Doctor of Education in Higher Education,
            Boston College Lynch School of Education and Human Development. Results and analysis at{' '}
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>.
          </p>
        </footer>

      </div>
    </div>
  )
}
