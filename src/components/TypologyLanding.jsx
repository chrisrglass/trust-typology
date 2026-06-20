import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

function PullQuote({ stat, children }) {
  return (
    <div className="typo-pull-quote">
      {stat && <span className="typo-pull-stat">{stat}</span>}
      <p className="typo-pull-text">{children}</p>
    </div>
  )
}

export default function TypologyLanding() {
  return (
    <div className="profile-page">

      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
        <div className="profile-nav-links">
          <a href="#/dimensions" className="profile-nav-link">Dimensions of Trust</a>
          <a href="#/" className="profile-nav-link">Take the survey →</a>
        </div>
      </nav>

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <h1 className="profile-header-name">The Trust Typology</h1>
          <p className="profile-header-tagline">
            Seven distinct relationships Americans have with higher education
          </p>
        </div>
      </div>

      <div className="typo-body">

        <div className="quiz-callout">
          <p className="quiz-callout-heading">Quiz: Where do you fit in the trust typology?</p>
          <p className="quiz-callout-desc">
            Answer 33 questions to see which of seven trust profiles fits your views — and how your type relates to the others.
          </p>
          <a href="#/" className="btn-primary">Begin the Survey</a>
        </div>

        {/* Purpose */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What this typology measures</h2>
          <p className="profile-para">
            Annual surveys show a declining number. But a number doesn't tell a college president — or a state legislator — what has been lost, by whom, or why. This typology finds out.
          </p>
          <p className="profile-para">
            Drawing on the approach used by the Pew Research Center's 2026 Political Typology, it identifies seven distinct groups relating to higher education with distinct concerns, values, and conditions for repair. Trust in higher education is not one thing in decline. It is a set of relationships, each with its own history. These seven types map that landscape.
          </p>
        </section>

        {/* What all seven share — flowing prose with pull quotes */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What all seven groups share</h2>
          <p className="profile-para">
            The partisan divide over higher education is real, but it obscures something equally important: a set of concerns that cut across every group, regardless of political orientation or relationship to the institution.
          </p>

          <p className="profile-para">
            The financial reality of college has become nearly impossible to defend across the ideological spectrum. All seven types agree the cost burden has grown. They disagree sharply on who bears the downside — whether students are choosing the wrong schools, institutions are extracting too much, or governments have withdrawn too much support — but the shared premise is that the deal is harder to justify than it was a generation ago.
          </p>
          <p className="profile-para">
            Grade inflation has made academic credentials less legible. Median grades now cluster at A across departments; transcripts are losing their ability to distinguish what students actually know and can do. The concern is not partisan — all seven types register it, though they assign different causes and different remedies.
          </p>

          <PullQuote>
            Strong cross-partisan majorities want more institutional accountability. What accountability looks like divides the types as sharply as anything else in the instrument.
          </PullQuote>
        </section>

        {/* Seven types */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Seven types</h2>
          <p className="typo-section-lead">
            Each group holds a coherent internal logic. They are not positions on a single scale — they are distinct ways of relating to higher education, each with its own diagnosis and its own conditions for repair.
          </p>
          <div className="results-grid">
            {CLASSES.map(cls => (
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

        {/* Key divides — right */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Key divides on the right</h2>
          <p className="profile-para">
            <a href="#/profiles/faith-rooted-skeptics" className="typo-inline-type" style={{ color: '#B78A2A' }}>Faith-Rooted Skeptics</a>,{' '}
            <a href="#/profiles/populist-antagonists" className="typo-inline-type" style={{ color: '#C46A2D' }}>Populist Antagonists</a>, and{' '}
            <a href="#/profiles/indifferent-skeptics" className="typo-inline-type" style={{ color: '#7a7570' }}>Indifferent Skeptics</a>{' '}
            share distrust of institutional performance — but they reach opposite conclusions on every question that follows from that shared skepticism.
          </p>

          <p className="typo-divide-q">On government authority</p>
          <p className="profile-para">
            <a href="#/profiles/faith-rooted-skeptics" className="typo-inline-type" style={{ color: '#B78A2A' }}>Faith-Rooted Skeptics</a> oppose federal intervention even from sympathetic Republican administrations. The OBBBA earnings test threatens 89% of religion master's programs — the same political home, the opposite conclusion on who fixes the problem.{' '}
            <a href="#/profiles/populist-antagonists" className="typo-inline-type" style={{ color: '#C46A2D' }}>Populist Antagonists</a> reach a different verdict: government oversight is the only lever working people have, and the institution will not reform without external pressure from elected officials.
          </p>

          <p className="typo-divide-q">On whether the degree delivers</p>
          <p className="profile-para">
            <a href="#/profiles/faith-rooted-skeptics" className="typo-inline-type" style={{ color: '#B78A2A' }}>Faith-Rooted Skeptics</a> believe the degree works at the right institutions — faith-based colleges, HBCUs, and community-specific schools built around genuine formation of character.{' '}
            <a href="#/profiles/populist-antagonists" className="typo-inline-type" style={{ color: '#C46A2D' }}>Populist Antagonists</a> see a positional arms race: working people were never the intended beneficiaries, and the system absorbed their enrollment and debt while delivering returns to those already advantaged.
          </p>

          <PullQuote>
            Indifferent Skeptics have exited the debate entirely. They see the failures clearly enough — but haven't organized that observation into a reform agenda. They've simply moved on.
          </PullQuote>

        </section>

        {/* Key divides — left */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Key divides on the left</h2>
          <p className="profile-para">
            <a href="#/profiles/institutional-faithful" className="typo-inline-type" style={{ color: '#2457A6' }}>Institutional Faithful</a>,{' '}
            <a href="#/profiles/critical-believers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Believers</a>, and the{' '}
            <a href="#/profiles/economically-dispossessed-left" className="typo-inline-type" style={{ color: '#A3171C' }}>Economically Dispossessed Left</a>{' '}
            share belief in higher education's mission — but they are separated by their verdict on performance and by what repair requires.
          </p>

          <p className="typo-divide-q">On whether institutions can self-correct</p>
          <p className="profile-para">
            <a href="#/profiles/institutional-faithful" className="typo-inline-type" style={{ color: '#2457A6' }}>Institutional Faithful</a> believe reform from within is both possible and necessary. The institution has the capacity to correct itself; what it needs is internal pressure and honest self-examination, not external mandates.{' '}
            <a href="#/profiles/critical-believers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Believers</a> hold the mission steady while criticizing the performance — reform is necessary, but uncertain. For the{' '}
            <a href="#/profiles/economically-dispossessed-left" className="typo-inline-type" style={{ color: '#A3171C' }}>Economically Dispossessed Left</a>, reform hasn't arrived for the communities they know. Alternatives to the four-year degree need to be built, not just promised.
          </p>

          <p className="typo-divide-q">On who bears the risk</p>
          <p className="profile-para">
            <a href="#/profiles/institutional-faithful" className="typo-inline-type" style={{ color: '#2457A6' }}>Institutional Faithful</a> trust the degree delivers real mobility for those who commit to it.{' '}
            <a href="#/profiles/critical-believers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Believers</a> see the gap as structural: the credential reinforces class divisions for too many graduates, and the failure falls hardest on those who had the most to gain.
          </p>

          <PullQuote stat="76% → 24%">
            Pell Grant purchasing power relative to four-year public university costs — the collapse since the 1980s that anchors the Economically Dispossessed Left's core experience of the institution.
          </PullQuote>

          <p className="typo-divide-q">On the nature of the crisis</p>
          <p className="profile-para">
            <a href="#/profiles/institutional-faithful" className="typo-inline-type" style={{ color: '#2457A6' }}>Institutional Faithful</a> identify the threat as external: government overreach eroding academic freedom, research funding cuts, and political interference in curricula that undermine the conditions of knowledge production.{' '}
            <a href="#/profiles/critical-believers" className="typo-inline-type" style={{ color: '#6E3B6E' }}>Critical Believers</a> locate it internally — structural failure to deliver on the economic promise for working-class and low-income graduates. The{' '}
            <a href="#/profiles/economically-dispossessed-left" className="typo-inline-type" style={{ color: '#A3171C' }}>Economically Dispossessed Left</a> name something more personal: a broken promise to specific communities that had the most to gain and the least margin for error, communities that believed in the institution and were not repaid for that belief.
          </p>
        </section>

        <footer className="profile-footer" style={{ marginTop: '3rem' }}>
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
            <a href="https://chrisrglass.substack.com" target="_blank" rel="noopener noreferrer">
              chrisrglass.substack.com
            </a>.
          </p>
        </footer>

      </div>
    </div>
  )
}
