import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

const PREVALENCE_ORDER = [
  'market-oriented-pragmatists',
  'economically-betrayed',
  'institutional-skeptics',
  'faith-and-freedom-families',
  'university-defenders',
  'populist-insurgents',
  'critical-reformers',
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
    heading: 'Reform is overdue',
    body: 'Strong cross-partisan majorities want institutions held to account. What reform looks like divides the types as sharply as anything else — but the demand itself is universal.',
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
            Drawing on the approach used by the Pew Research Center's Political Typology, it identifies seven distinct groups — each responding to a different failure. Some see moral and cultural drift. Some see a broken value proposition. Some see class exclusion. Some see institutional hypocrisy. Some believe the organizations that produced these failures cannot be trusted to repair them. What looks like a single declining number is, underneath, a layered argument about who higher education is for and who has earned the right to define its future.
          </p>
          <div className="typo-quiz-callout">
            <p className="typo-quiz-callout-text">
              Answer a short survey to see which type fits your view of higher education.
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
          <p className="profile-para">
            This typology cuts across traditional political lines. The sharpest divisions run not between parties but between two distinct crises: a broken-promise crisis about cost, debt, and what the degree actually delivers — and a cultural-political conflict about institutional mission, legitimacy, and control. Every type feels both to some degree. But they feel them at different intensities, and that shapes their diagnosis, their evidence, and what repair would have to look like.
          </p>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--right">On the right</p>
            <p className="profile-para">
              <a href="#/profiles/faith-and-freedom-families" className="typo-inline-type" style={{ color: '#B78A2A' }}>Faith & Freedom Families</a> and{' '}
              <a href="#/profiles/populist-insurgents" className="typo-inline-type" style={{ color: '#C46A2D' }}>Populist Insurgents</a>{' '}
              share distrust of institutional performance — but they reach opposite conclusions on every question that follows.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On what went wrong</p>
                <p className="profile-para">
                  Faith & Freedom Families want a seat at the existing table — real viewpoint diversity, religious frameworks treated as legitimate, ideological monoculture reduced. Populist Insurgents don't want a better seat at the same table. They want different institutions, rooted in different places: community colleges, technical education, schools that stay tied to the workforce and communities that paid for them.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On whether the degree delivers</p>
                <p className="profile-para">
                  Faith & Freedom Families believe the degree works at the right institutions — faith-based colleges, HBCUs, and community-specific schools. Populist Insurgents see a positional arms race: working people were never the intended beneficiaries, and the system absorbed their enrollment and debt while delivering returns to those already advantaged.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--middle">In the middle</p>
            <p className="profile-para">
              <a href="#/profiles/market-oriented-pragmatists" className="typo-inline-type" style={{ color: '#1F6B4F' }}>Market-Oriented Pragmatists</a>,{' '}
              the <a href="#/profiles/economically-betrayed" className="typo-inline-type" style={{ color: '#A3171C' }}>Economically Betrayed</a>, and{' '}
              <a href="#/profiles/institutional-skeptics" className="typo-inline-type" style={{ color: '#7a7570' }}>Institutional Skeptics</a>{' '}
              share the center — none reliably partisan, none instinctively anti-college. They agree the system has failed to deliver on its promises. They divide on whether that failure is correctable, who is responsible for correcting it, and whether the institutions that produced the failure can be trusted to repair it.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On whether the credential delivers</p>
                <p className="profile-para">
                  Market-Oriented Pragmatists say yes — the degree pays off for people who choose wisely, commit fully, and take responsibility for the outcome. The Economically Betrayed say the promise was broken before they arrived: the system recruited from working-class communities, accepted their enrollment and debt, and did not deliver the mobility it advertised. Institutional Skeptics don't dispute what the data shows — they dispute whether institutions will ever surface it honestly, and whether any reform will change that.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On who bears responsibility</p>
                <p className="profile-para">
                  For Market-Oriented Pragmatists, outcomes are largely a function of individual choices — the institution's role is to deliver what it offers, and most do. For the Economically Betrayed, the institution bears structural responsibility: it designed the terms of enrollment, set the price, and made the pitch to communities with the least margin for error. Institutional Skeptics agree the institution is responsible — but conclude that the mechanisms for holding it accountable are controlled by the same people who benefit from the current arrangement.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--left">On the left</p>
            <p className="profile-para">
              <a href="#/profiles/university-defenders" className="typo-inline-type" style={{ color: '#2457A6' }}>University Defenders</a> and{' '}
              <a href="#/profiles/critical-reformers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Reformers</a>{' '}
              share belief in higher education's mission — but are separated by their verdict on institutional performance and what repair requires.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On whether institutions can self-correct</p>
                <p className="profile-para">
                  University Defenders believe reform from within is both possible and necessary — the institution is worth defending precisely because it works. Critical Reformers hold the mission steady while indicting the performance: the university's purpose is real, but too many students are bearing costs the institution was never designed to make visible.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On who bears the risk</p>
                <p className="profile-para">
                  University Defenders trust the degree delivers real mobility for those who commit to it. Critical Reformers see the gap as structural: the credential reinforces class divisions for too many graduates, and reform requires naming that plainly.
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
