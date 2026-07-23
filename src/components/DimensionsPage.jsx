import { useState, useEffect, useRef } from 'react'
import { CLASSES } from '../data/classes.js'
import { DIMENSIONS, LAYERS, GROUPS } from '../data/dimensionsData.js'
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
  'institutional-reformers',
  'results-oriented-pragmatists',
  'populist-insurgents',
  'fair-deal-skeptics',
  'grassroots-communitarians',
].map(id => CLASSES.find(c => c.id === id))

export default function DimensionsPage({ initialDimId = null }) {
  const [activeId, setActiveId] = useState(initialDimId)
  const activeDim = DIMENSIONS.find(d => d.id === activeId)
  const detailRef = useRef(null)

  useEffect(() => {
    if (initialDimId && detailRef.current) {
      setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <h1 className="profile-header-name">12 Dimensions of Trust</h1>
        </div>
      </div>

      <div className="typo-body">

        <p className="profile-para" style={{ marginTop: '2rem' }}>
          Trust in higher education is not a single attitude. It is a profile of judgments that a
          single confidence number cannot separate: economic trust, the trust of the exchange;
          cultural trust, the trust of membership; and institutional trust, the trust extended to
          the institution itself. Each is a judgment about a moral relationship, and each mends
          differently: economic trust recovers when delivery improves; cultural and institutional
          trust return only through visibly fair conduct, and far more slowly. And how a person
          answers all three depends on where they stand: these questions are answered one way from
          a life lived close to a campus, and another way from a distance, through what we read
          and hear. Select any dimension to see how each type responds.
        </p>

        {GROUPS.map(group => {
          const groupLayerIds = LAYERS.filter(l => l.group === group.id).map(l => l.id)
          const groupDims = groupLayerIds.flatMap(layerId => DIMENSIONS.filter(d => d.layer === layerId))
          return (
            <div key={group.id} className="dim-group">
              <div className="dim-group-heading dim-group-heading--iconed">
                {group.icon && (
                  <span className="trust-group-icon">
                    <TypeIcon iconName={group.icon} color="var(--accent)" size={19} strokeWidth={1.7} />
                  </span>
                )}
                <h2 className="dim-group-title">{group.title}</h2>
              </div>
              {group.question && (
                <p className="profile-para" style={{ fontStyle: 'italic', color: '#555', marginTop: '0.25rem', marginBottom: '0.75rem' }}>
                  {group.question}
                </p>
              )}
              <p className="profile-para dim-group-intro">{group.intro}</p>
              <div className="dim-grid">
                {groupDims.map(dim => {
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
              {activeDim && groupLayerIds.includes(activeDim.layer) && (
                <div className="dim-detail" key={activeDim.id} ref={detailRef}>
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
            </div>
          )
        })}

        <footer className="profile-footer" style={{ marginTop: '3rem' }}>
          <p>
            A research project by Chris R. Glass, Director, Executive Doctor of Education in Higher Education,
            Boston College Lynch School of Education and Human Development. Research prototype —
            provisional typology, pre-fielding. Results and analysis at{' '}
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>.
          </p>
        </footer>

      </div>
    </div>
  )
}
