import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'
import TypeIcon from './TypeIcon.jsx'

export default function Results({ classResult }) {
  if (!classResult) return null

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
        <p className="results-disclaimer">
          <em>These profiles are based on simulation pilots pending live latent class analysis on N=400–600 fielded responses. Class sizes and names are provisional.</em>
        </p>
      </div>

      {/* Block 3: Divider */}
      <div className="results-divider" aria-hidden="true">
        <hr />
        <span>Explore all seven types</span>
        <hr />
      </div>

      {/* Block 4: All seven class cards, each linking to its profile */}
      <div className="results-grid" role="list" aria-label="All seven trust typology profiles">
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

      {/* Block 5: Research footer */}
      <div className="results-footer">
        <p>Thank you for participating in this research.</p>
        <p>
          Results and analysis will be published at{' '}
          <a href="https://chrisglass.substack.com" target="_blank" rel="noopener noreferrer">
            chrisglass.substack.com
          </a>{' '}
          when the study is complete.
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
