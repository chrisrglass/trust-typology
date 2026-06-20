import { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { CLASSES } from '../data/classes.js'
import { STATES } from '../data/stateData.js'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

// FIPS code → state abbreviation
const FIPS_TO_ABBR = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA',
  '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL',
  '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN',
  '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME',
  '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH',
  '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI',
  '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT',
  '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI',
  '56': 'WY',
}

function getClassById(typeId) {
  return CLASSES.find(c => c.id === typeId)
}

export default function MapPage() {
  const [tooltip, setTooltip] = useState(null)

  function handleStateEnter(geo) {
    const fips = geo.id?.toString().padStart(2, '0')
    const abbr = FIPS_TO_ABBR[fips]
    const stateData = abbr ? STATES[abbr] : null
    if (!stateData) return
    const cls = getClassById(stateData.typeId)
    setTooltip({
      stateName: stateData.stateName,
      typeName: cls?.name ?? stateData.typeId,
      typeTagline: cls?.tagline,
      accentColor: cls?.accentColor ?? '#6b7280',
      pct: stateData.pct,
      typeId: stateData.typeId,
    })
  }

  function handleStateLeave() {
    setTooltip(null)
  }

  function handleStateClick(geo) {
    const fips = geo.id?.toString().padStart(2, '0')
    const abbr = FIPS_TO_ABBR[fips]
    const stateData = abbr ? STATES[abbr] : null
    if (stateData) {
      window.location.hash = `#/profiles/${stateData.typeId}`
    }
  }

  return (
    <div className="profile-page">

      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
        <a href="#/demographics" className="profile-nav-link">View Demographics →</a>
      </nav>

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">Boston College · Research Instrument</p>
          <h1 className="profile-header-name">Trust Typology by State</h1>
          <p className="profile-header-tagline">
            The dominant trust type among survey respondents in each state.
          </p>
        </div>
      </div>

      <div className="map-page-body">

        <div className="demo-illustrative-note">
          <strong>Illustrative data.</strong> State assignments are plausible estimates based on political geography and regional higher-ed culture — not measured from actual survey responses. They will be replaced with live fielded data once responses are collected by state.
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div className="map-tooltip">
            <p className="map-tooltip-state">{tooltip.stateName}</p>
            <p className="map-tooltip-type" style={{ color: tooltip.accentColor }}>
              {tooltip.typeName}
            </p>
            <p className="map-tooltip-pct">{tooltip.pct}% dominant type</p>
            {tooltip.typeTagline && (
              <p className="map-tooltip-tagline">{tooltip.typeTagline}</p>
            )}
            <p className="map-tooltip-cta">Click to view full profile →</p>
          </div>
        )}

        {/* Map */}
        <div className="map-container">
          <ComposableMap
            projection="geoAlbersUsa"
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map(geo => {
                  const fips = geo.id?.toString().padStart(2, '0')
                  const abbr = FIPS_TO_ABBR[fips]
                  const stateData = abbr ? STATES[abbr] : null
                  const cls = stateData ? getClassById(stateData.typeId) : null
                  const fill = cls?.accentColor ?? '#DDD7CE'

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fill}
                      stroke="#F4F1EB"
                      strokeWidth={0.8}
                      style={{
                        default: { outline: 'none', opacity: 0.9 },
                        hover: { outline: 'none', opacity: 1, filter: 'brightness(1.15)' },
                        pressed: { outline: 'none' },
                      }}
                      onMouseEnter={() => handleStateEnter(geo)}
                      onMouseLeave={handleStateLeave}
                      onClick={() => handleStateClick(geo)}
                    />
                  )
                })
              }
            </Geographies>
          </ComposableMap>
        </div>

        {/* Legend */}
        <div className="map-legend">
          {CLASSES.map(cls => (
            <a
              key={cls.id}
              href={`#/profiles/${cls.id}`}
              className="map-legend-item"
              aria-label={`View profile: ${cls.name}`}
            >
              <span className="map-legend-swatch" style={{ background: cls.accentColor }} />
              <span className="map-legend-name">{cls.name}</span>
              <span className="map-legend-pct">{cls.prevalence}</span>
            </a>
          ))}
        </div>

        <footer className="profile-footer" style={{ marginTop: '2rem' }}>
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
