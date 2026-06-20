import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

export default function ProfileIndex({ highlightedId }) {
  return (
    <div className="profile-index">

      <nav className="profile-nav">
        <a href="#/" className="profile-nav-back">← Take the quiz</a>
      </nav>

      <div className="profile-index-header">
        <p className="eyebrow">Boston College · Research Instrument</p>
        <h1>Seven Ways Americans Relate to Higher Education</h1>
        <p className="profile-index-intro">
          Trust in higher education is not one thing in decline. It is a set of distinct relationships —
          each with its own diagnosis, its own fears, and its own conditions for repair.
          These seven types map that landscape.
        </p>
        {!highlightedId && (
          <a href="#/" className="btn-primary profile-index-cta">
            Find your type →
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
        {CLASSES.map(cls => (
          <a
            key={cls.id}
            href={`#/profiles/${cls.id}`}
            className="profile-index-card-link"
            aria-label={`View profile: ${cls.name}${cls.id === highlightedId ? ' (your result)' : ''}`}
          >
            <ClassCard
              name={cls.name}
              tagline={cls.tagline}
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
            <span className="explore-card-desc">Purpose, shared findings, key divides on the left and right, and AI findings</span>
          </a>
          <a href="#/demographics" className="profile-index-explore-card">
            <strong className="explore-card-title">Demographics</strong>
            <span className="explore-card-desc">Who belongs to each type — by age, education, politics, and more</span>
          </a>
        </div>
      </div>

      <footer className="profile-footer" style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <p>
          A research project by{' '}
          <a
            href="https://www.bc.edu/bc-web/schools/lynch-school/faculty-research/faculty/Chris-Glass.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris R. Glass
          </a>
          , Director, Executive Doctor of Education in Higher Education,
          Boston College Lynch School of Education and Human Development.
        </p>
        <p>
          Results and analysis will be published at{' '}
          <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
            chrisrglass.substack.com
          </a>.
        </p>
      </footer>

    </div>
  )
}
