import { CLASSES } from '../data/classes.js'
import ClassCard from './ClassCard.jsx'
import TypeIcon from './TypeIcon.jsx'

const PREVALENCE_ORDER = [
  'institutional-reformers',
  'populist-insurgents',
  'results-oriented-pragmatists',
  'grassroots-communitarians',
  'fair-deal-skeptics',
]

const SORTED_CLASSES = PREVALENCE_ORDER.map(id => CLASSES.find(c => c.id === id)).filter(Boolean)

const byId = id => CLASSES.find(c => c.id === id)

const SHARED_FINDINGS = [
  {
    heading: 'Nobody defends the status quo',
    body: 'All five types want higher education made more trustworthy. Not one type — including the most confident — believes institutions should simply be left alone. The demand for repair is universal; the argument is over who leads it.',
  },
  {
    heading: 'Trust has layers, and they move independently',
    body: 'A person can find the price indefensible while trusting the mission, or feel fully welcomed on campus while doubting anyone answers when things go wrong. Single trust numbers average these judgments away; the twelve dimensions keep them apart.',
  },
  {
    heading: 'The deepest divide is repair, not diagnosis',
    body: 'Types that agree something has failed still separate — sharply — on whether institutions actually fix what they find, and on who has the standing to put things right when they do not. The same broken promise leads one type to compel the incumbents and another to build past them.',
  },
]

export default function TypologyLanding() {
  const stewards = byId('institutional-reformers')
  const pragmatists = byId('results-oriented-pragmatists')
  const reckoners = byId('populist-insurgents')
  const rebuilders = byId('fair-deal-skeptics')
  const communitarians = byId('grassroots-communitarians')

  return (
    <div className="profile-page">

      <div className="profile-header-band" style={{ background: '#3a3a3a' }}>
        <div className="profile-header-inner">
          <p className="profile-header-eyebrow">About This Research</p>
          <h1 className="profile-header-name">The Trust Typology</h1>
          <p className="profile-header-tagline">
            Five Ways Americans Relate to Higher Education
          </p>
        </div>
      </div>

      <div className="typo-body">

        {/* Section 1: What this research is */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What this research is</h2>
          <p className="profile-para">
            Annual surveys show a declining number. But a number doesn't tell a college president — or a
            state legislator — what has been lost, by whom, or why. This typology maps the relationships
            behind the number.
          </p>
          <p className="profile-para">
            The instrument treats trust in higher education not as an approval rating to be tracked
            but as a moral relationship to be understood: a profile of judgments organized around
            three plain questions.
          </p>
          <div className="typo-trust-para">
            <span className="trust-group-icon">
              <TypeIcon iconName="DollarSign" color="var(--accent)" size={19} strokeWidth={1.7} />
            </span>
          <p className="profile-para">
            <strong>Economic trust</strong> asks: <em>does the deal work?</em>{' '}
            Whether the burden of cost, debt, and years is fairly shared, whether the results can be
            counted on, whether the institution describes itself honestly, and who actually gets
            through the open door.
          </p>
          </div>
          <div className="typo-trust-para">
            <span className="trust-group-icon">
              <TypeIcon iconName="HeartHandshake" color="var(--accent)" size={19} strokeWidth={1.7} />
            </span>
          <p className="profile-para">
            <strong>Cultural trust</strong> asks: <em>does my community belong?</em>{' '}
            Whether your community and its way of life count as full members, whether ideas can be
            spoken and followed without penalty, whether the rules hold steady regardless of status
            or politics, and whether the public-service language is backed by real service to
            communities like yours.
          </p>
          </div>
          <div className="typo-trust-para">
            <span className="trust-group-icon">
              <TypeIcon iconName="Landmark" color="var(--accent)" size={19} strokeWidth={1.7} />
            </span>
          <p className="profile-para">
            <strong>Institutional trust</strong> asks: <em>does the institution answer?</em> Whether what it says about itself can be believed, whether it can notice
            and fix its own failures, whether harmed people can get a real answer, and who has
            standing to put it right when it cannot.
          </p>
          </div>
          <p className="profile-para">
            Twelve dimensions sit beneath the three questions. Five types emerge, and the surprise
            is where they divide.
          </p>
          <div className="typo-quiz-callout">
            <p className="typo-quiz-callout-text">
              Answer a short survey to see which type fits your view of higher education.
            </p>
            <a href="#/" className="btn-primary">See Where You Stand →</a>
          </div>
        </section>

        {/* Section 2: What all five types share */}
        <section className="typo-section">
          <h2 className="typo-section-h2">What all 5 types share</h2>
          <p className="profile-para">
            The partisan divide over higher education is real, but it obscures the structure underneath.
            Three findings hold across every type.
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
          <h2 className="typo-section-h2">Where they divide and unexpectedly meet</h2>
          <p className="profile-para">
            This typology cuts across partisan lines. The sharpest divisions run not between parties
            but between the three questions: an economic-trust crisis about the exchange (cost,
            debt, and what the degree delivers), a cultural-trust crisis about membership (whose
            ways of life count as full members), and an institutional-trust crisis about the compact
            (whether institutions can be believed and made to answer). Every type feels all three,
            at different intensities. And the boundaries between types fall in unexpected places: types that share
            a verdict split on the remedy, and types that share nothing else meet on a single question.
          </p>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--left">Where trust survives</p>
            <p className="profile-para">
              <a href={`#/profiles/${stewards.id}`} className="typo-inline-type" style={{ color: stewards.accentColor }}>{stewards.name}</a> and{' '}
              <a href={`#/profiles/${pragmatists.id}`} className="typo-inline-type" style={{ color: pragmatists.accentColor }}>{pragmatists.name}</a>{' '}
              both share concerns about cost while recognizing the value; both carry reservations
              about the intellectual climate; and neither wants outside intervention in the
              classroom. What separates them is what the trust
              rests on — and what each is willing to hand over to the market.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On what the trust rests on</p>
                <p className="profile-para">
                  Reformers trust the institution's character: its candor, its evenhanded rules, its
                  capacity to correct itself. They see real problems — confusing pricing, opaque
                  admissions, eroded rigor — and engage the internal debates, including the ones about
                  the humanities, as their own. Pragmatists trust the delivery: the economic value of
                  the degree is the case that matters, and they want more transparency — plain
                  disclosure of price, odds, and results — than Reformers may be willing to consider.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On what reform looks like</p>
                <p className="profile-para">
                  Renewal from within, verified from without — versus public conditions without
                  political control. Beneath both sits the deeper divide: Pragmatists are
                  individualists at ease with buyer-beware market logic, where informed choice is the
                  protection. Reformers want institutions answerable but not beholden to the market —
                  for them, a university run on market logic has already lost what made it worth
                  trusting.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-divide-block">
            <p className="typo-divide-side typo-divide-side--right">Where the deal broke</p>
            <p className="profile-para">
              <a href={`#/profiles/${rebuilders.id}`} className="typo-inline-type" style={{ color: rebuilders.accentColor }}>{rebuilders.name}</a> and{' '}
              <a href={`#/profiles/${reckoners.id}`} className="typo-inline-type" style={{ color: reckoners.accentColor }}>{reckoners.name}</a>{' '}
              reach the same verdict on the exchange: college asks more money, debt, and family
              sacrifice than results this uncertain can justify, and neither believes the sector's
              account of itself. They divide on what failed — and on whether institutions can learn.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On what, exactly, failed</p>
                <p className="profile-para">
                  Skeptics indict the deal: the promise was priced beyond the reach of the people it
                  was made to, and the risk landed on the families with the least room for error. The
                  education itself they still believe in. Insurgents indict the conduct: failure
                  obscured, rules bent for the connected, and no real answer when people are harmed.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On whether institutions can learn</p>
                <p className="profile-para">
                  The unexpected boundary: Skeptics have not given up on repair — but what they
                  demand is significant reform, not incremental adjustment. Bold ideas, not
                  statements: fund the paths that keep the promise, and let institutions that cannot
                  deliver shrink or close. Insurgents have concluded self-reform is not credible at
                  all: federal and state government, and the public itself, need real power to compel
                  what institutions will not volunteer.
                </p>
              </div>
            </div>
          </div>

          <div className="typo-divide-block">
            <p className="typo-divide-side" style={{ color: communitarians.accentColor }}>Where trust lives close to home</p>
            <p className="profile-para">
              <a href={`#/profiles/${communitarians.id}`} className="typo-inline-type" style={{ color: communitarians.accentColor }}>{communitarians.name}</a>{' '}
              touch every boundary above without belonging to any of them. With the Skeptics they
              share a distrust of elite institutions; with the Pragmatists, a practical eye on cost,
              debt, and results. Some share the politics of the Insurgents — without the harshness of
              the prescription. What defines them is a distinction the others rarely draw: "higher
              education" in general is one thing; the locally rooted institutions serving people they
              know are another.
            </p>
            <div className="typo-divide-qs">
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On where trust lives</p>
                <p className="profile-para">
                  Their sharpest grievance is respect: campuses where the moral and faith traditions
                  rooted in their communities are treated as something students must overcome rather
                  than something that enriches the place. But that judgment does not travel to less
                  politicized institutions under local control with demonstrated benefit to their
                  communities. Their concerns are practical — cost, results, belonging — not the
                  debates of the humanities at elite universities.
                </p>
              </div>
              <div className="typo-divide-q-block">
                <p className="typo-divide-q">On who should decide</p>
                <p className="profile-para">
                  Where Insurgents would compel institutions from above, Communitarians would move
                  power closer: the students, faculty, staff, and communities who constitute a college
                  should share formal decision power over its reform — membership with authority, with
                  more control held locally.
                </p>
              </div>
            </div>
          </div>

          <p className="profile-para" style={{ marginTop: '1.5rem' }}>
            Each type's full theory of reform — who should be authorized to make a failing
            institution trustworthy again — is developed on its profile page.
          </p>
        </section>

        {/* Section 4: The working premise */}
        <section className="typo-section">
          <h2 className="typo-section-h2">The working premise</h2>
          <p className="profile-para">
            The sharpest split is not over whether higher education has problems. It is over each
            type's <strong>theory of reform</strong>: who should be authorized to make a failing
            institution trustworthy again. Beneath all twelve dimensions runs the project's working
            premise: distrust grows when people experience themselves as objects of institutional
            action rather than participants in it. One question is deliberately not measured as a
            dimension: what education is <em>for</em>. The typology holds it at the level of the
            three questions instead: education as a fair exchange, education as a community people
            belong to, and education as a public compact are three rival answers, and each type's
            moral economy weighs them differently.
          </p>
        </section>

        {/* Section 5: Method & status */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Method and status</h2>
          <p className="profile-para">
            The typology is built from a 24-item paired-statement instrument spanning the twelve
            dimensions, developed through iterative design studies and robustness testing. The
            reform question is deliberately kept outside the classification: your type is determined
            only by your judgments of institutional conduct, so the alignment between types and theories
            of reform can be tested rather than assumed.
          </p>
          <p className="profile-para">
            <strong>This site is a research prototype.</strong> The five types, their prevalences, and
            all numbers shown here come from a synthetic design study — a simulation used to validate
            the instrument — not from fielded survey respondents. Type names are provisional working
            labels, and each type likely contains internal currents — registered in the research
            notes as hypotheses — that future rounds of data may distinguish. The instrument is
            scheduled for cognitive interviews and fielding; the typology becomes findings only when
            real respondents produce it.
          </p>
        </section>

        {/* Section 6: Explore the five types */}
        <section className="typo-section">
          <h2 className="typo-section-h2">Explore the five types</h2>
          <p className="typo-section-lead">
            Each type holds a coherent internal logic — not positions on a single scale, but distinct
            ways of relating to higher education, each with its own diagnosis, its own worries, and its
            own theory of reform.
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
                  concerns={cls.salientConcerns}
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
