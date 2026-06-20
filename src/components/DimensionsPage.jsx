import { useState } from 'react'
import { CLASSES } from '../data/classes.js'
import { DIMENSIONS } from '../data/dimensionsData.js'
import TypeIcon from './TypeIcon.jsx'

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
  'economically-dispossessed',
  'community-meritocrats',
  'indifferent-skeptics',
  'faith-rooted-skeptics',
  'populist-antagonists',
].map(id => CLASSES.find(c => c.id === id))

export default function DimensionsPage() {
  const [activeId, setActiveId] = useState(null)
  const activeDim = DIMENSIONS.find(d => d.id === activeId)

  function toggle(id) {
    setActiveId(prev => prev === id ? null : id)
  }

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
          Trust in higher education is not a single attitude — it is a cluster of nine distinct questions, each measuring a different aspect of the relationship between Americans and their institutions. Select any dimension to see how each type responds.
        </p>

        <div className="dim-grid">
          {DIMENSIONS.map(dim => {
            const isActive = activeId === dim.id
            return (
              <button
                key={dim.id}
                className={`dim-card${isActive ? ' dim-card--active' : ''}`}
                onClick={() => toggle(dim.id)}
                aria-expanded={isActive}
              >
                <span className="dim-card-icon">
                  <TypeIcon iconName={dim.icon} color={isActive ? '#2a2a2a' : '#666'} size={20} strokeWidth={1.6} />
                </span>
                <span className="dim-card-title">{dim.title}</span>
                <span className="dim-card-chevron">{isActive ? '▲' : '▼'}</span>
              </button>
            )
          })}
        </div>

        {activeDim && (
          <div className="dim-detail" key={activeDim.id}>
            <h2 className="dim-detail-title">
              <TypeIcon iconName={activeDim.icon} color="#2a2a2a" size={22} strokeWidth={1.6} />
              {activeDim.title}
            </h2>
            <p className="profile-para">{activeDim.whatItMeasures}</p>
            <div className="dim-type-grid">
              {SORTED_CLASSES.map(cls => (
                <a key={cls.id} href={`#/profiles/${cls.id}`} className="dim-type-card">
                  <span
                    className="dim-type-badge"
                    style={{ background: cls.accentColor, color: badgeTextColor(cls.accentColor) }}
                  >
                    {cls.name}
                  </span>
                  <p className="dim-type-text">{activeDim.typeViews[cls.id]}</p>
                </a>
              ))}
            </div>
          </div>
        )}

        <footer className="profile-footer" style={{ marginTop: '3rem' }}>
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
