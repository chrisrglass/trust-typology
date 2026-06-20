import { CLASSES } from '../data/classes.js'
import { DEMOGRAPHIC_VARIABLES, NATIONAL_DEMOGRAPHIC_AVERAGES, CLASS_DEMOGRAPHICS } from '../data/demographicsData.js'

// WPDS-aligned segment palette — 8 distinct neutral-to-accent colors
const SEGMENT_COLORS = [
  '#2457A6', // civic blue
  '#B78A2A', // gold
  '#1F6B4F', // success green
  '#C51F24', // urgent red
  '#6b7280', // gray
  '#7c3aed', // purple
  '#b45309', // amber
  '#4B4B4B', // dark neutral
]

function SegmentedBar({ distribution, options }) {
  return (
    <div className="demo-seg-bar" role="img" aria-label="Demographic distribution">
      {options.map((opt, i) => {
        const pct = (distribution[opt] ?? 0) * 100
        if (pct < 0.5) return null
        return (
          <div
            key={opt}
            className="demo-seg"
            style={{ width: `${pct}%`, background: SEGMENT_COLORS[i % SEGMENT_COLORS.length] }}
            title={`${opt}: ${Math.round(pct)}%`}
          />
        )
      })}
    </div>
  )
}

function DemographicSection({ variable, classes }) {
  const nationalAvg = NATIONAL_DEMOGRAPHIC_AVERAGES[variable.id]

  return (
    <div className="demo-section">
      <p className="profile-section-title">{variable.label}</p>

      <div className="demo-rows">
        {classes.map(cls => {
          const dist = CLASS_DEMOGRAPHICS[cls.id]?.[variable.id]
          if (!dist) return null
          return (
            <div key={cls.id} className="demo-class-row">
              <div className="demo-class-name">
                <span className="demo-class-dot" style={{ background: cls.accentColor }} />
                <span className="demo-class-label">{cls.name}</span>
              </div>
              <SegmentedBar distribution={dist} options={variable.options} />
            </div>
          )
        })}

        {nationalAvg && (
          <div className="demo-class-row demo-national-row">
            <div className="demo-class-name">
              <span className="demo-class-dot demo-class-dot--national" />
              <span className="demo-class-label demo-class-label--national">All types (avg)</span>
            </div>
            <SegmentedBar distribution={nationalAvg} options={variable.options} />
          </div>
        )}
      </div>

      <div className="demo-legend">
        {variable.options.map((opt, i) => (
          <span key={opt} className="demo-legend-item">
            <span className="demo-legend-swatch" style={{ background: SEGMENT_COLORS[i % SEGMENT_COLORS.length] }} />
            {opt}
          </span>
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
        <a href="#/map" className="profile-nav-link">View Map →</a>
      </nav>

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">Boston College · Research Instrument</p>
          <h1 className="profile-header-name">Demographics of Each Type</h1>
          <p className="profile-header-tagline">
            Who belongs to each trust typology — by politics, age, education, and more.
          </p>
        </div>
      </div>

      <div className="profile-body">

        <div className="demo-illustrative-note">
          <strong>Illustrative data.</strong> Distributions are simulated from the N=500 pilot typology and plausible covariate patterns. They will be replaced with live fielded data once survey responses reach N≥400.
        </div>

        <p className="demo-reading-note">
          Each row shows the demographic composition of members within that type. Bars are proportional — longer segments indicate a larger share of that type falling in that category. Hover a segment to see the exact percentage.
        </p>

        {DEMOGRAPHIC_VARIABLES.map(variable => (
          <DemographicSection
            key={variable.id}
            variable={variable}
            classes={CLASSES}
          />
        ))}

        <footer className="profile-footer">
          <p>
            A research project by{' '}
            <a href="https://www.bc.edu/bc-web/schools/lynch-school/faculty-research/faculty/Chris-Glass.html" target="_blank" rel="noopener noreferrer">
              Chris R. Glass
            </a>
            , Director, Executive Doctor of Education in Higher Education,
            Boston College Lynch School of Education and Human Development.
          </p>
          <p>
            Results and analysis at{' '}
            <a href="https://chrisglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisglass.substack.com
            </a>.
          </p>
        </footer>

      </div>
    </div>
  )
}
