import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

const PREVALENCE_ORDER = [
  'institutional-reformers',
  'populist-insurgents',
  'results-oriented-pragmatists',
  'grassroots-communitarians',
  'fair-deal-skeptics',
]

const SORTED_CLASSES = PREVALENCE_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean)

export default function ProfileIndex({ highlightedId }) {
  return (
    <div className="profile-index">

      <nav className="profile-nav">
        <a href="#/" className="profile-nav-back">← Take the quiz</a>
      </nav>

      <div className="profile-index-header">
        <h1>Five Ways Americans Relate to Higher Education</h1>
        <p className="profile-index-intro">
          Trust in higher education is not one thing in decline. It is a set of distinct relationships —
          each with its own diagnosis, its own worries, and its own theory of reform.
          These five types map that landscape.
        </p>
        {!highlightedId && (
          <a href="#/" className="btn-primary profile-index-cta">
            See where you stand →
          </a>
        )}
        {highlightedId && (
          <p className="profile-index-your-result">
            Your result is highlighted below.{' '}
            <a href={`#/profiles/${highlightedId}`}>View your full profile →</a>
          </p>
        )}
      </div>

      <div className="results-grid profile-index-grid">
        {SORTED_CLASSES.map(cls => (
          <a
            key={cls.id}
            href={`#/profiles/${cls.id}`}
            className="profile-index-card-link"
            aria-label={`View profile: ${cls.name}${cls.id === highlightedId ? ' (your result)' : ''}`}
          >
            <ClassCard
              name={cls.name}
              concerns={cls.salientConcerns}
              prevalence={cls.prevalence}
              accentColor={cls.accentColor}
              icon={cls.icon}
              isYours={cls.id === highlightedId}
              expanded={false}
            />
          </a>
        ))}
      </div>

      <div className="profile-index-explore">
        <p className="profile-section-title" style={{ maxWidth: '720px', margin: '0 auto 1rem' }}>Explore further</p>
        <div className="profile-index-explore-links">
          <a href="#/typology" className="profile-index-explore-card">
            <strong className="explore-card-title">About this typology</strong>
            <span className="explore-card-desc">Five types, twelve dimensions in two registers, and a theory of reform for each</span>
          </a>
          <a href="#/dimensions" className="profile-index-explore-card">
            <strong className="explore-card-title">Dimensions of Trust</strong>
            <span className="explore-card-desc">Twelve questions in three registers (economic, cultural, and institutional trust) and how each type responds to every one</span>
          </a>
        </div>
      </div>

      <footer className="profile-footer" style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
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
  )
}
