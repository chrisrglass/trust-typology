import { CLASSES } from '../data/classes.js'
import { ITEMS } from '../data/instrument.js'
import { G01_CLASS_DISTRIBUTIONS } from '../data/classifierParams.js'
import ClassCard from './ClassCard.jsx'
import TypeIcon from './TypeIcon.jsx'
import ShareBar from './ShareBar.jsx'
import TrustProfile from './TrustProfile.jsx'

// Short names for the five G01 reform approaches (first sentence of each option).
const G01_ITEM = ITEMS.find(i => i.id === 'G01')
const REFORM_SHORT = Object.fromEntries(
  G01_ITEM.options.map(o => [o.value, o.label.split('. ')[0]])
)

export default function Results({ classResult, g01Choice, answers }) {
  if (!classResult) return null

  const dist = G01_CLASS_DISTRIBUTIONS[classResult.id]
  const modalOption = dist
    ? Object.entries(dist).sort((a, b) => b[1] - a[1])[0][0]
    : null
  const chosePlurality = g01Choice && modalOption && g01Choice === modalOption

  return (
    <div className="results">
      {/* Block 1: Your result */}
      <div className="results-your-result">
        <p className="results-eyebrow">Your Trust Typology</p>
        {classResult.icon && (
          <div className="results-type-icon">
            <TypeIcon iconName={classResult.icon} color={classResult.accentColor} size={48} strokeWidth={1.5} />
          </div>
        )}
        <h1 className="results-class-name" style={{ color: classResult.accentColor }}>
          {classResult.name}
        </h1>
        <p className="results-tagline">{classResult.tagline}</p>
      </div>

      {/* Block 2: Expanded class description card */}
      <div className="results-expanded-card">
        <ClassCard
          name={classResult.name}
          tagline={classResult.tagline}
          prevalence={classResult.prevalence}
          accentColor={classResult.accentColor}
          icon={classResult.icon}
          isYours={true}
          expanded={true}
          description={classResult.description}
          characteristics={classResult.characteristics}
        />
      </div>

      {/* Your theory of reform (from G01 — never used to determine the type) */}
      {g01Choice && REFORM_SHORT[g01Choice] && (
        <div className="results-reform" style={{ borderColor: classResult.accentColor }}>
          <span className="results-reform-label">Your theory of reform</span>
          <p className="results-reform-choice">{REFORM_SHORT[g01Choice]}</p>
          <p className="results-reform-note">
            {chosePlurality
              ? `That is also the most common choice among ${classResult.name} — your diagnosis and your remedy point the same way.`
              : `The most common choice among ${classResult.name} is “${REFORM_SHORT[modalOption]}.” Your type was determined only by your judgments of how institutions conduct themselves — people who share a diagnosis often differ on the repair.`}
          </p>
        </div>
      )}

      {/* The Living Letter: your profile across the eleven measured dimensions */}
      {answers && <TrustProfile responses={answers} classId={classResult?.id} />}

      {/* Shared concern callout */}
      {classResult.sharedConcern && (
        <div className="results-shared-concern">
          <span className="results-shared-concern-label">You share this with all 5 types</span>
          <p className="results-shared-concern-text">{classResult.sharedConcern}</p>
        </div>
      )}

      {/* Block 3: Full profile CTA + share */}
      <div className="results-profile-cta">
        <a
          href={`#/profiles/${classResult.id}`}
          className="btn-primary results-profile-cta-btn"
          style={{ background: classResult.accentColor }}
        >
          Read your full profile →
        </a>
        <ShareBar shareText={classResult.shareText} />
      </div>

      {/* Block 4: Explore further */}
      <div className="results-explore">
        <p className="results-explore-heading">Explore the typology</p>
        <div className="results-explore-links">
          <a href="#/typology" className="results-explore-card">
            <strong className="explore-card-title">About this typology</strong>
            <span className="explore-card-desc">Five types, twelve dimensions in two registers, and a theory of reform for each — what all five share, and where they divide</span>
          </a>
          <a href="#/dimensions" className="results-explore-card">
            <strong className="explore-card-title">Twelve Dimensions of Trust</strong>
            <span className="explore-card-desc">The twelve questions, across economic, cultural, and institutional trust, that reveal how differently Americans relate to higher education</span>
          </a>
        </div>
      </div>

      {/* Block 5: Divider */}
      <div className="results-divider" aria-hidden="true">
        <hr />
        <span>See all five types</span>
        <hr />
      </div>

      {/* Block 6: All five class cards */}
      <div className="results-grid" role="list" aria-label="All five trust typology profiles">
        {CLASSES.map(cls => (
          <a
            key={cls.id}
            role="listitem"
            href={`#/profiles/${cls.id}`}
            className="results-profile-link"
            aria-label={`View full profile: ${cls.name}${cls.id === classResult.id ? ' (your result)' : ''}`}
          >
            <ClassCard
              name={cls.name}
              tagline={cls.tagline}
              prevalence={cls.prevalence}
              accentColor={cls.accentColor}
              icon={cls.icon}
              isYours={cls.id === classResult.id}
              expanded={false}
            />
          </a>
        ))}
      </div>

      {/* Block 7: Research footer */}
      <div className="results-footer">
        <p>Thank you for exploring this research prototype.</p>
        <p>
          Your result is provisional: this typology comes from a synthetic design study and has not yet
          been fielded with survey respondents. Analysis and writing will be published at{' '}
          <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
            chrisrglass.substack.com
          </a>.
        </p>
        <p>
          Questions? Contact{' '}
          <a href="mailto:crglass@bc.edu">crglass@bc.edu</a>.
        </p>
        <p className="results-attribution">
          Chris R. Glass · Boston College Lynch School of Education and Human Development
        </p>
      </div>
    </div>
  )
}
