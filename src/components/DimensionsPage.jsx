import { CLASSES } from '../data/classes.js'
import { DIMENSIONS } from '../data/dimensionsData.js'

function hexLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const toLinear = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b)
}

function badgeTextColor(accentColor) {
  return hexLuminance(accentColor) > 0.35 ? '#2a2a2a' : '#fff'
}

const SORTED_CLASSES = [
  'institutional-faithful',
  'critical-believers',
  'economically-dispossessed-left',
  'community-meritocrats',
  'indifferent-skeptics',
  'faith-rooted-skeptics',
  'populist-antagonists',
].map(id => CLASSES.find(c => c.id === id))

const DISCRIMINANT_COLORS = {
  'Highest of all nine dimensions': '#1F6B4F',
  'High': '#2457A6',
  'Moderate-High': '#6E3B6E',
  'Moderate': '#8a7a6a',
  'Lower overall; item-level varies': '#999',
}

export default function DimensionsPage() {
  return (
    <div className="profile-page">

      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
        <a href="#/typology" className="profile-nav-link">About this typology →</a>
      </nav>

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <h1 className="profile-header-name">Dimensions of Trust</h1>
          <p className="profile-header-tagline">
            Nine questions that reveal how differently Americans relate to higher education
          </p>
        </div>
      </div>

      <div className="typo-body">

        <p className="profile-para" style={{ marginTop: '2rem' }}>
          Trust in higher education is not a single attitude — it is a cluster of nine distinct questions, each measuring a different aspect of the relationship between Americans and their institutions. These dimensions were identified through analysis of more than 50 items measuring trust erosion across economic, cultural, and political lines. They vary in how sharply they separate the seven trust types from one another.
        </p>

        {DIMENSIONS.map(dim => (
          <section key={dim.id} className="typo-section">
            <h2 className="typo-section-h2">{dim.title}</h2>
            <p className="dimension-discriminant" style={{ color: DISCRIMINANT_COLORS[dim.discriminantPower] || '#8a7a6a' }}>
              Discriminant power: {dim.discriminantPower}
            </p>
            <p className="profile-para">{dim.whatItMeasures}</p>
            <div className="dimension-types">
              {SORTED_CLASSES.map(cls => (
                <div key={cls.id} className="dimension-type-row">
                  <a href={`#/profiles/${cls.id}`} className="dimension-type-badge" style={{ background: cls.accentColor, color: badgeTextColor(cls.accentColor) }}>
                    {cls.name}
                  </a>
                  <p className="dimension-type-view">{dim.typeViews[cls.id]}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <footer className="profile-footer" style={{ marginTop: '3rem' }}>
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
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>.
          </p>
        </footer>

      </div>
    </div>
  )
}
