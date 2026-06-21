import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

const PREVALENCE_ORDER = [
  'economically-betrayed',
  'populist-insurgents',
  'university-defenders',
  'self-made-meritocrats',
  'critical-reformers',
  'countercultural-communitarians',
  'institutional-skeptics',
]

const SORTED_CLASSES = PREVALENCE_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean)

const SHARED_FINDINGS = [
  {
    heading: 'The cost burden is indefensible',
    body: 'Across every type, the financial reality of college has become hard to justify. They disagree on who bears the blame — but the shared premise is that the deal is harder than a generation ago.',
  },
  {
    heading: 'Credentials are losing their meaning',
    body: 'Grade inflation has made transcripts less legible. Median grades now cluster at A across departments. All seven types register this failure, though they assign different causes and different remedies.',
  },
  {
    heading: 'Accountability is overdue',
    body: 'Strong cross-partisan majorities want institutions held to account. What accountability looks like divides the types as sharply as anything else — but the demand itself is universal.',
  },
]

export default function TypologyLanding() {
  return (
    <div className="profile-page">

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">About This Research</p>
          <h1 className="profile-header-name">The Trust Typology</h1>
          <p className="profile-header-tagline">
            Seven distinct relationships Americans have with higher education
          </p>
        </div>
      </div>

      <div className="typo-body">

        {/* Section 1: What this research is */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What this research is</h2>
          <p className="profile-para">
            Annual surveys show a declining number. But a number doesn't tell a college president — or a state legislator — what has been lost, by whom, or why. This typology finds out.
          </p>
          <p className="profile-para">
            Drawing on the approach used by the Pew Research Center's Political Typology, it identifies seven distinct groups relating to higher education with distinct concerns, values, and conditions for repair. Trust in higher education is not one thing in decline. It is a set of relationships, each with its own history. These seven types map that landscape.
          </p>
          <div className="typo-quiz-callout">
            <p className="typo-quiz-callout-text">
              Answer 33 questions to see which of seven trust profiles fits your views.
            </p>
            <a href="#/" className="btn-primary">Find Your Type →</a>
          </div>
        </section>

        {/* Section 2: What all 7 types share */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What all 7 types share</h2>
          <p className="profile-para">
            The partisan divide over higher education is real, but it obscures something equally important: concerns that cut across every group, regardless of political orientation or relationship to the institution.
          </p>
          <div className="typo-shared-grid">
            {SHARED_FINDINGS.map((f, i) => (
              <div key={i} className="typo-shared-card">
                <p className="typo-shared-heading">{f.heading}</p>
                <p className="typo-shared-body">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Where they divide */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Where they divide</h2>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--right">On the right</p>
            <p className="profile-para">
              <a href="#/profiles/countercultural-communitarians" className="typo-inline-type" style={{ color: '#B78A2A' }}>Countercultural Communitarians</a>,{' '}
              <a href="#/profiles/populist-insurgents" className="typo-inline-type" style={{ color: '#C46A2D' }}>Populist Insurgents</a>, and{' '}
              <a href="#/profiles/institutional-skeptics" className="typo-inline-type" style={{ color: '#7a7570' }}>Institutional Skeptics</a>{' '}
              share distrust of institutional performance — but they reach opposite conclusions on every question that follows.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On government authority</p>
                <p className="profile-para">
                  Countercultural Communitarians oppose federal intervention even from sympathetic Republican administrations. Populist Insurgents reach the opposite verdict: government oversight is the only lever working people have. Institutional Skeptics have simply moved on — they see the failures but haven't organized them into a reform agenda.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On whether the degree delivers</p>
                <p className="profile-para">
                  Countercultural Communitarians believe the degree works at the right institutions — faith-based colleges, HBCUs, and community-specific schools. Populist Insurgents see a positional arms race: working people were never the intended beneficiaries, and the system absorbed their enrollment and debt while delivering returns to those already advantaged.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--left">On the left</p>
            <p className="profile-para">
              <a href="#/profiles/university-defenders" className="typo-inline-type" style={{ color: '#2457A6' }}>University Defenders</a>,{' '}
              <a href="#/profiles/critical-reformers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Reformers</a>, and the{' '}
              <a href="#/profiles/economically-betrayed" className="typo-inline-type" style={{ color: '#A3171C' }}>Economically Betrayed</a>{' '}
              share belief in higher education's mission — but are separated by their verdict on performance and by what repair requires.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">Whether institutions can self-correct</p>
                <p className="profile-para">
                  University Defenders believe reform from within is both possible and necessary. Critical Reformers hold the mission steady while criticizing performance. For the Economically Betrayed, reform hasn't arrived for the communities they know — alternatives to the four-year degree need to be built, not just promised.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On who bears the risk</p>
                <p className="profile-para">
                  University Defenders trust the degree delivers real mobility for those who commit to it. Critical Reformers see the gap as structural: the credential reinforces class divisions for too many graduates. The Economically Betrayed name something more personal — a broken promise to specific communities that had the most to gain and the least margin for error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Explore the seven types */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Explore the seven types</h2>
          <p className="typo-section-lead">
            Each group holds a coherent internal logic — not positions on a single scale, but distinct ways of relating to higher education, each with its own diagnosis and conditions for repair.
          </p>
          <div className="results-grid">
            {SORTED_CLASSES.map(cls => (
              <a
                key={cls.id}
                href={`#/profiles/${cls.id}`}
                className="profile-index-card-link"
                aria-label={`View profile: ${cls.name}`}
              >
                <ClassCard
                  name={cls.name}
                  tagline={cls.tagline}
                  prevalence={cls.prevalence}
                  accentColor={cls.accentColor}
                  icon={cls.icon}
                  isYours={false}
                  expanded={false}
                />
              </a>
            ))}
          </div>
        </section>

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
