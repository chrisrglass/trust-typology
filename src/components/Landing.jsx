import { CLASSES } from '../data/classes.js'
import TypeIcon from './TypeIcon.jsx'

const TYPE_PREVIEW_ORDER = [
  'institutional-reformers',
  'results-oriented-pragmatists',
  'populist-insurgents',
  'fair-deal-skeptics',
  'grassroots-communitarians',
]

const QUESTION_CARDS = [
  {
    id: 'economic',
    icon: 'DollarSign',
    title: 'Economic Trust',
    question: 'Does the deal work?',
    gloss: 'Cost, debt, results, and who gets through the open door.',
  },
  {
    id: 'cultural',
    icon: 'HeartHandshake',
    title: 'Cultural Trust',
    question: 'Does my community belong?',
    gloss: 'Membership, free expression, steady rules, and service to communities like yours.',
  },
  {
    id: 'institutional',
    icon: 'Landmark',
    title: 'Institutional Trust',
    question: 'Does the institution answer?',
    gloss: 'Candor, self-correction, real answers, and who has standing to fix it.',
  },
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
        <p className="subtitle">Five Ways Americans Relate to Higher Education</p>

        <p className="landing-hook">
          Who you agree with might surprise you. Americans relate to higher education in five
          distinct patterns, and the lines fall in unexpected places.
        </p>

        <div className="landing-cta-block">
          <button className="btn-primary landing-cta-primary" onClick={onStart}>
            See Where You Stand →
          </button>
          <a href="#/profiles" className="landing-cta-secondary">
            Meet the Five Types →
          </a>
        </div>
        <p className="landing-hero-meta">About 5 minutes · Anonymous · Your answers never leave your browser</p>
      </header>

      <div className="landing-body">

        <section aria-label="The three questions">
          <p className="landing-kicker">The survey asks three questions</p>
          <div className="landing-qcards">
            {QUESTION_CARDS.map(card => (
              <div key={card.id} className="landing-qcard">
                <span className="landing-qcard-icon">
                  <TypeIcon iconName={card.icon} color="var(--accent)" size={22} strokeWidth={1.7} />
                </span>
                <p className="landing-qcard-title">{card.title}</p>
                <p className="landing-qcard-question">{card.question}</p>
                <p className="landing-qcard-gloss">{card.gloss}</p>
              </div>
            ))}
          </div>
          <p className="landing-thesis">
            Twelve dimensions sit beneath these questions. These are moral judgments, which is why
            trust behaves like a relationship, not a rating.
          </p>
        </section>

        <section className="landing-surprise" aria-label="What your results show">
          <p className="landing-surprise-lead">Your results show more than which type you match:</p>
          <div className="landing-surprise-grid">
            <div className="landing-surprise-item">
              <p className="landing-surprise-heading">Unexpected company</p>
              <p className="landing-surprise-body">
                Where you agree with people you usually disagree with.
              </p>
            </div>
            <div className="landing-surprise-item">
              <p className="landing-surprise-heading">Your own mind</p>
              <p className="landing-surprise-body">
                Where you break from the people who usually agree with you.
              </p>
            </div>
          </div>
          <p className="landing-surprise-close">
            A better conversation about trust starts from the agreements already on the map.
          </p>
        </section>

        <section aria-label="The five types">
          <p className="landing-kicker">Five types. Which one are you closest to?</p>
          <div className="landing-type-strip">
            {previewTypes.map(cls => (
              <a key={cls.id} href={`#/profiles/${cls.id}`} className="landing-type-pip">
                <TypeIcon iconName={cls.icon} color={cls.accentColor} size={20} strokeWidth={1.6} />
                <span className="landing-type-pip-label">{cls.name}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="landing-consent">
          <p>
            This is a research prototype: your answers are processed entirely in your browser and
            are not collected, stored, or transmitted anywhere. Your result is provisional. The
            typology has not yet been fielded with survey respondents.
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
