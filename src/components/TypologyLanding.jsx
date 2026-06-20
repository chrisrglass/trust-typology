import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'

const SHARED_CONCERNS = [
  {
    stat: '83%',
    headline: 'Worry AI will diminish students\' capacity for independent thinking',
    detail: 'Quinnipiac 2026 — the highest cross-partisan consensus in the instrument',
  },
  {
    stat: 'Cost',
    headline: 'Near-universal agreement that the financial deal has become harder to defend',
    detail: 'All seven types agree the cost burden has grown; they disagree on who bears the downside',
  },
  {
    stat: 'Standards',
    headline: 'Broad concern that grade inflation has made credentials less meaningful',
    detail: 'Median grades cluster at A across departments; transcripts are losing their signal function',
  },
  {
    stat: 'Accountability',
    headline: 'Strong cross-partisan majorities want more institutional accountability',
    detail: 'The mandate for transparency is cross-partisan; what accountability looks like divides the types sharply',
  },
]

const RIGHT_DIVIDES = [
  {
    question: 'On government authority',
    items: [
      {
        typeId: 'faith-rooted-skeptics',
        label: 'Faith-Rooted Skeptics',
        color: '#B78A2A',
        position: 'Oppose federal intervention even from sympathetic Republican administrations. The OBBBA earnings test threatens 89% of religion master\'s programs — same political home, opposite conclusion on who fixes the problem.',
      },
      {
        typeId: 'populist-antagonists',
        label: 'Populist Antagonists',
        color: '#C46A2D',
        position: 'Support democratic accountability through elected officials. The institution won\'t reform without external pressure; government oversight is the only lever working people have.',
      },
    ],
  },
  {
    question: 'On whether the degree delivers',
    items: [
      {
        typeId: 'faith-rooted-skeptics',
        label: 'Faith-Rooted Skeptics',
        color: '#B78A2A',
        position: 'The degree works at the right institutions — faith-based colleges, HBCUs, and community-specific schools built around genuine formation of character.',
      },
      {
        typeId: 'populist-antagonists',
        label: 'Populist Antagonists',
        color: '#C46A2D',
        position: 'The credential economy is a positional arms race. Working people were never the intended beneficiaries; the system absorbed their enrollment and debt and delivered returns to those already advantaged.',
      },
      {
        typeId: 'indifferent-skeptics',
        label: 'Indifferent Skeptics',
        color: '#DDD7CE',
        position: 'Have exited the debate about whether it works. They see the failures clearly enough but haven\'t organized that observation into a reform agenda — they\'ve simply moved on.',
      },
    ],
  },
  {
    question: 'On AI risk',
    items: [
      {
        typeId: 'faith-rooted-skeptics',
        label: 'Faith-Rooted Skeptics',
        color: '#B78A2A',
        position: 'Most alarmed of any group. AI models trained without engagement from faith communities systematically exclude religious frameworks (BYU multi-institution research). The Vatican\'s January 2025 instruction names AI as a threat to moral formation.',
      },
      {
        typeId: 'populist-antagonists',
        label: 'Populist Antagonists',
        color: '#C46A2D',
        position: 'AI encodes elite secular values and destroys cognitive independence — a technological extension of the same institutional capture they already distrust.',
      },
      {
        typeId: 'indifferent-skeptics',
        label: 'Indifferent Skeptics',
        color: '#DDD7CE',
        position: 'Least alarmed of any group. 39% are unsure whether AI poses risks at all — the highest "unsure" rate in the instrument.',
      },
    ],
  },
]

const LEFT_DIVIDES = [
  {
    question: 'On whether institutions can self-correct',
    items: [
      {
        typeId: 'institutional-faithful',
        label: 'Institutional Faithful',
        color: '#2457A6',
        position: 'Reform from within is both possible and necessary. The institution has the capacity to correct itself; what it needs is internal pressure and honest self-examination, not external mandates.',
      },
      {
        typeId: 'critical-believers',
        label: 'Critical Believers',
        color: '#6E3B6E',
        position: 'The mission is real but delivery has failed structurally for the students who most needed it to work. They hold the mission steady while criticizing the performance — reform is necessary but uncertain.',
      },
      {
        typeId: 'economically-dispossessed-left',
        label: 'Economically Dispossessed Left',
        color: '#A3171C',
        position: 'Reform hasn\'t arrived for the communities they know. Alternatives to the four-year degree need to be built, not just promised — institutions can\'t fix a system that was never designed for people like them.',
      },
    ],
  },
  {
    question: 'On who bears the risk',
    items: [
      {
        typeId: 'institutional-faithful',
        label: 'Institutional Faithful',
        color: '#2457A6',
        position: 'Trust the degree delivers real mobility for those who commit to it. The credential has real value; the concern is external threats to the institution that produces it.',
      },
      {
        typeId: 'critical-believers',
        label: 'Critical Believers',
        color: '#6E3B6E',
        position: 'The credential reinforces class divisions for too many graduates. The gap between mission and performance isn\'t incidental — it\'s structural, and it falls hardest on those who had the most to gain.',
      },
      {
        typeId: 'economically-dispossessed-left',
        label: 'Economically Dispossessed Left',
        color: '#A3171C',
        position: 'Pell Grant purchasing power has collapsed from 76% to 24% of four-year public university costs since the 1980s. The institution collected the debt and didn\'t deliver the mobility it promised.',
      },
    ],
  },
  {
    question: 'On the nature of the crisis',
    items: [
      {
        typeId: 'institutional-faithful',
        label: 'Institutional Faithful',
        color: '#2457A6',
        position: 'The threat is external — government overreach eroding academic freedom, research funding cuts, and political interference in curricula that undermine the very conditions of knowledge production.',
      },
      {
        typeId: 'critical-believers',
        label: 'Critical Believers',
        color: '#6E3B6E',
        position: 'The threat is internal — structural failure to deliver on the economic promise for working-class and low-income graduates. The institution claims to be the solution while contributing to the problem.',
      },
      {
        typeId: 'economically-dispossessed-left',
        label: 'Economically Dispossessed Left',
        color: '#A3171C',
        position: 'The crisis is personal. It is a broken promise to specific communities that had the most to gain and the least margin for error — communities that believed in the institution and were not repaid for that belief.',
      },
    ],
  },
]

function DivideBlock({ question, items }) {
  return (
    <div className="divide-block">
      <p className="divide-question">{question}</p>
      <div className="divide-items">
        {items.map(item => (
          <div key={item.typeId} className="divide-item">
            <span className="divide-type-dot" style={{ background: item.color }} />
            <div className="divide-item-body">
              <a href={`#/profiles/${item.typeId}`} className="divide-type-label" style={{ color: item.color }}>
                {item.label}
              </a>
              {' '}<span className="divide-type-position">{item.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TypologyLanding() {
  return (
    <div className="profile-page">

      <nav className="profile-nav">
        <a href="#/profiles" className="profile-nav-back">← All Profiles</a>
        <a href="#/" className="profile-nav-link">Take the survey →</a>
      </nav>

      {/* Header */}
      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">Boston College · Research Instrument</p>
          <h1 className="profile-header-name">The Trust Typology</h1>
          <p className="profile-header-tagline">
            Seven distinct relationships Americans have with higher education
          </p>
        </div>
      </div>

      <div className="typo-body">

        {/* Quiz callout */}
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

        {/* Shared concerns */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What all seven groups share</h2>
          <p className="typo-section-lead">
            Certain concerns cut across every type regardless of political orientation or relationship to the institution.
          </p>
          <div className="shared-concerns-grid">
            {SHARED_CONCERNS.map((c, i) => (
              <div key={i} className="shared-concern-card">
                <span className="shared-concern-stat">{c.stat}</span>
                <strong className="shared-concern-headline">{c.headline}</strong>
                <p className="shared-concern-detail">{c.detail}</p>
              </div>
            ))}
          </div>
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
          <p className="typo-section-lead">
            Faith-Rooted Skeptics, Populist Antagonists, and Indifferent Skeptics share distrust of institutional performance — but they reach opposite conclusions on every question that follows from that shared skepticism.
          </p>
          {RIGHT_DIVIDES.map((d, i) => (
            <DivideBlock key={i} question={d.question} items={d.items} />
          ))}
        </section>

        {/* Key divides — left */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Key divides on the left</h2>
          <p className="typo-section-lead">
            Institutional Faithful, Critical Believers, and the Economically Dispossessed Left share belief in higher education's mission — but they are separated by their verdict on performance and by what repair requires.
          </p>
          {LEFT_DIVIDES.map((d, i) => (
            <DivideBlock key={i} question={d.question} items={d.items} />
          ))}
        </section>

        {/* AI findings */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Intriguing findings on AI</h2>
          <div className="ai-findings">
            <ol>
              <li>
                <strong>Cross-partisan consensus is real but misleading.</strong> 83% of Americans across the political spectrum worry that AI will diminish students' capacity for independent thinking (Quinnipiac 2026) — but the reason differs sharply by type. The number suggests agreement; the reasoning reveals seven different diagnoses.
              </li>
              <li>
                <strong>The Indifferent Skeptics paradox.</strong> The only group with majority agreement that "something is broken" is also the least alarmed about AI: 39% of Indifferent Skeptics are unsure whether AI poses risks at all — the highest "unsure" rate of any group. They have disengaged from the reform debate and from the AI debate in the same move.
              </li>
              <li>
                <strong>Faith-Rooted Skeptics are the most alarmed — and their concern is specific.</strong> AI models trained without meaningful engagement from faith communities systematically ignore religious and moral frameworks (BYU multi-institution research). The Vatican's January 2025 instruction <em>Antiqua et nova</em> named AI as a risk to moral formation and human dignity. For this group, the AI concern is not about cognitive shortcuts — it is about whose formation model AI embeds.
              </li>
              <li>
                <strong>AI is eliminating the entry-level rung the credential was supposed to unlock.</strong> This finding intersects with the Economically Dispossessed Left's core diagnosis — AI removes the first step of the career ladder precisely when new graduates are most vulnerable — but extends to every type's labor-market calculus. The credential's value depends on the jobs that exist when it matures. AI is restructuring those jobs faster than institutions can respond.
              </li>
            </ol>
          </div>
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
