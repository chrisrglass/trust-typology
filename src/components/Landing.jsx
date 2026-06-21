import { CLASSES } from '../data/classes.js'
import TypeIcon from './TypeIcon.jsx'

const TYPE_PREVIEW_ORDER = [
  'economically-dispossessed',
  'populist-antagonists',
  'institutional-faithful',
  'critical-believers',
  'community-meritocrats',
  'faith-rooted-skeptics',
  'indifferent-skeptics',
]

export default function Landing({ onStart }) {
  const previewTypes = TYPE_PREVIEW_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean)

  return (
    <div className="landing">
      <header className="landing-header">
        <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '0.75rem' }} aria-hidden="true">
          <circle cx="17" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.85" />
          <circle cx="31" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.85" />
        </svg>
        <h1>The Trust Typology</h1>
        <p className="subtitle">Seven Ways Americans Relate to Higher Education</p>
      </header>

      <div className="landing-body">
        <div className="landing-description">
          <p className="landing-hook">
            Trust in higher education isn't just high or low — it takes seven distinct shapes. The debate usually ends at "trust is declining." This project goes further.
          </p>
          <p>
            Instead of placing people on a single scale, this typology identifies the distinct groups who relate to higher education with distinct concerns, distinct values, and distinct conditions for repair. A number doesn't tell a college president or a state legislator what has been lost, by whom, or why. This survey maps those relationships.
          </p>
        </div>

        <div className="landing-type-strip" aria-hidden="true">
          {previewTypes.map(cls => (
            <div key={cls.id} className="landing-type-pip">
              <TypeIcon iconName={cls.icon} color={cls.accentColor} size={20} strokeWidth={1.6} />
              <span className="landing-type-pip-label">{cls.name}</span>
            </div>
          ))}
        </div>

        <div className="landing-cta-block">
          <button className="btn-primary landing-cta-primary" onClick={onStart}>
            Find Your Type →
          </button>
          <a href="#/profiles" className="landing-cta-secondary">
            Explore Type Profiles →
          </a>
        </div>

        <div className="landing-consent">
          <p>
            The survey takes about 5 minutes. Your responses are collected anonymously for research on public attitudes toward higher education. No personally identifying information is collected. By clicking "Find Your Type" you consent to participate.
          </p>
        </div>
      </div>

      <footer className="landing-footer">
        <p>
          A research project by Chris R. Glass, Director, Executive Doctor of Education in Higher Education,
          Boston College Lynch School of Education and Human Development.
        </p>
      </footer>
    </div>
  )
}
