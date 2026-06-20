import { CLASSES } from '../data/classes.js'
import { DEMOGRAPHIC_VARIABLES, CLASS_DEMOGRAPHICS } from '../data/demographicsData.js'

const CLASS_ORDER = [
  'institutional-faithful',
  'critical-believers',
  'economically-dispossessed-left',
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
  const weights = computeTypeWeights(varId, option)
  return (
    <div className="demo-option-row">
      <div className="demo-option-label">{option}</div>
      <div className="demo-seg-bar" role="img" aria-label={`Type breakdown for: ${option}`}>
        {SORTED_CLASSES.map((cls, i) => {
          const pct = weights[i] * 100
          if (pct < 0.5) return null
          return (
            <div
              key={cls.id}
              className="demo-seg"
              style={{ width: `${pct}%`, background: cls.accentColor }}
              title={`${cls.name}: ${Math.round(pct)}%`}
            />
          )
        })}
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
          Each row shows a response option from the quiz. The segmented bar reveals the trust-type
          composition of people who chose that answer — hover a segment to see the type and its share.
        </p>

        {DEMOGRAPHIC_VARIABLES.map(variable => (
          <DemographicSection key={variable.id} variable={variable} />
        ))}

        <div className="demo-legend">
          {SORTED_CLASSES.map(cls => (
            <a key={cls.id} href={`#/profiles/${cls.id}`} className="demo-legend-item">
              <span className="demo-legend-swatch" style={{ background: cls.accentColor }} />
              {cls.name}
            </a>
          ))}
        </div>

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
