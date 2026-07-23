// Per-type profile content — Trust Typology v2 prototype.
// PROVISIONAL, PRE-FIELDING. keyItems numbers come from the synthetic design
// study (classifierParams.js is auto-generated from the same run).
// proofPoints cite real external research; verify URLs before any public deploy.

import { ITEMS } from './instrument.js'
import { NATIONAL_PROB_A } from './classifierParams.js'

// National P(choose statement A) per item, from the synthetic study.
export const NATIONAL_AVERAGES = NATIONAL_PROB_A

// Verbatim A/B wordings, derived from the instrument (single source of truth).
export const ITEM_OPTIONS = Object.fromEntries(
  ITEMS.filter(i => i.type === 'forced_choice').map(i => [
    i.id,
    { a: i.options[0].label, b: i.options[1].label },
  ])
)

export const ITEM_LABELS = {}

// Shared external-evidence pool ("shared facts, not talking points").
const EVIDENCE = {
  gallupConfidence: {
    source: 'Gallup, "Americans’ Confidence in Higher Education Down Sharply" (2023)',
    url: 'https://news.gallup.com/poll/508352/americans-confidence-higher-education-down-sharply.aspx',
  },
  pewWorthIt: {
    source: 'Pew Research Center, "Is College Worth It?" (2024)',
    url: 'https://www.pewresearch.org/social-trends/2024/05/23/is-college-worth-it-2/',
  },
  talentDisrupted: {
    source: 'Burning Glass Institute & Strada Education Foundation, "Talent Disrupted" (2024)',
    url: 'https://stradaeducation.org/report/talent-disrupted/',
  },
  varyingDegrees: {
    source: 'New America, "Varying Degrees" annual survey',
    url: 'https://www.newamerica.org/insights/varying-degrees/',
  },
  fireFaculty: {
    source: 'FIRE, Faculty Viewpoint Surveys',
    url: 'https://www.thefire.org/research-learn',
  },
  fedDebt: {
    source: 'Federal Reserve, Consumer Credit (G.19)',
    url: 'https://www.federalreserve.gov/releases/g19/current/',
  },
}

export const PROFILE_DATA = {

  // ── Institutional Reformers ──────────────────────────────────────────
  'institutional-reformers': {
    expandedDescription: [
      'Institutional Reformers extend the typology’s most confident trust — but it is a specific confidence, not a general glow. What Reformers believe, concretely, is that colleges tell the truth about costs and outcomes, apply their rules the same way to similar cases, hold their standards when powerful people push, and answer to the people they affect. Where other types see institutional self-protection, Reformers see institutional character. Theirs, though, is trust with open eyes, in the spirit of the sector\u2019s own self-examinations: the problems are real, and reform is necessary.',
      'Their deepest conviction sits in the repair layer: institutions can notice their own failures and fix them. A college can identify a failing program, make hard changes even when jobs and prestige are at stake, and keep the change working after outside pressure fades. That belief — rare everywhere else in the typology — is what makes the rest of their trust coherent rather than credulous.',
      'The name means reform of a particular kind: led from within. Institutional Reformers are the establishment-oriented public — institutionalists and traditionalists who see real problems \u2014 confusing pricing, opaque admissions, eroded rigor \u2014 believe reform is necessary, and trust the university, more than any other actor, to deliver it. Most hold no seat on a board, no faculty line, no office. Theirs is a considered confidence that renewal from within — continuous, internally led, independently verified — remains possible. They are the public that believes the university can keep becoming what it claims to be.',
      'Even this most confident type is unlikely to be one thing. It plausibly contains currents that ground the same trust differently — in governance done right, in scholarly standards independently verified, in public value visibly delivered — and a further current that affirms the institution while insisting that internal review alone is no longer a sufficient safeguard. These are hypotheses for future data to test; what the currents share is the conviction that renewal from within can still work.',
    ],
    keyItems: [
      { id: 'Q13', classProb: 0.17, avgProb: 0.48 },
      { id: 'Q15', classProb: 0.17, avgProb: 0.49 },
      { id: 'Q30', classProb: 0.80, avgProb: 0.53 },
      { id: 'Q33', classProb: 0.18, avgProb: 0.48 },
      { id: 'Q08', classProb: 0.75, avgProb: 0.50 },
      { id: 'Q09', classProb: 0.25, avgProb: 0.49 },
    ],
    topTrustIssues: {
      issues: 'Trusting the institution does not mean finding it finished. The Reformers’ worries begin where their deepest conviction meets the evidence: whether colleges actually fix what their own reviews keep finding, whether inquiry on their campuses is as open as the mission requires — and, behind both, the knowledge that if renewal from within cannot prove itself, the authority to reform will move outside the institution.',
      mainConcerns: [
        { text: 'Self-Correction — whether institutions actually fix what their own reviews keep finding, and keep the fix after attention fades', dimId: 'institutional-correctability' },
        { text: 'Intellectual Hospitality — whether inquiry on their own campuses is as open and independent as the mission requires', dimId: 'intellectual-hospitality' },
        { text: 'Reform Authority — whether renewal from within can prove itself before the standing to lead reform is taken away', dimId: 'governance-of-repair' },
      ],
    },
    proofPoints: [
      {
        claim: 'Public confidence in higher education fell from 57% in 2015 to 36% by 2023 — a decline spanning every partisan group.',
        context: 'For Reformers this is the stakes, not the verdict: the mission they trust is losing the public that sustains it, which is precisely why credible, verified renewal matters now.',
        ...EVIDENCE.gallupConfidence,
      },
      {
        claim: 'Americans continue to say a college education is valuable even while telling pollsters higher education is headed in the wrong direction.',
        context: 'Their reading: the public has not abandoned the mission — it is waiting for institutions to visibly re-earn it.',
        ...EVIDENCE.varyingDegrees,
      },
      {
        claim: 'A majority of Americans now question whether a degree is worth the cost when loans are involved.',
        context: 'Reformers accept the data and draw the internal conclusion: candor about price and outcome is not a communications strategy, it is the mission’s survival condition.',
        ...EVIDENCE.pewWorthIt,
      },
    ],
    reformStance: 'The Reformers’ theory of reform is renewal from within, verified from without. When a college fails, its own board, leadership, and faculty should make the reform plan — they hold the mission and know the terrain — and independent reviewers should verify that the repair actually happened. Not government command, which mistakes control for correction; not replacement, which abandons what can still be renewed. That is the reform they stand for: the institution keeping itself true to its purposes — and proving it.',
    meetingNarrative: 'Reformers keep surprising company. Their nearest kin are the {{results-oriented-pragmatists}}, the only other type that trusts both the deal and the public mission, though from the opposite foundation: Reformers believe in institutional character while Pragmatists trust delivered results, and it is the Pragmatists, unexpectedly, who demand the plainer disclosure of price and odds. With the {{fair-deal-skeptics}} they share something few would guess: the belief that institutions can learn, the conviction at the heart of the Reformer position, surviving inside the typology’s most economically wounded type. With the {{grassroots-communitarians}} they share the warmth itself, a campus worth belonging to, though Reformer trust travels to the whole sector while Communitarian trust stops at the community line. Even the {{populist-insurgents}}, their mirror opposite on whether colleges can fix themselves, agree with Reformers on the deepest premise: that conduct, not cost, is the real question. The same evidence, opposite verdicts.',
  },

  // ── Results-Oriented Pragmatists ───────────────────────────────────────────
  'results-oriented-pragmatists': {
    expandedDescription: [
      'Results-Oriented Pragmatists judge higher education the way they judge any consequential purchase: by whether it delivers. And their verdict, unusual in this typology, is that it mostly does. The degree is worth its price for students who choose well. Programs teach what they promise. Flexible paths exist for working adults. The public gets real value back for the privileges it grants.',
      'What makes Pragmatists distinct is where their confidence stops. The same people who judge the exchange sound are notably cool toward the campus’s intellectual and moral climate — whether unpopular views travel safely, whether every kind of community is treated as a legitimate member of the institution’s world. They are satisfied customers of an institution whose culture they trust less than its product.',
      'Their politics of repair follows their temperament: practical, bounded, and suspicious of overreach in both directions. The public may set rules about cost, safety, and results — the things a buyer has a right to know and a funder has a right to require. But teaching and research belong to the people qualified to do them.',
      'This type, too, likely holds more than one current. For many, the cultural reservations stay secondary — the deal works, and that settles it. For others with the very same judgments, the doubts about open debate and belonging are the grievance that matters most, held alongside a deal they concede is working. The survey measures the judgments, not which one carries the greatest weight, so this seam waits for future research to draw.',
    ],
    keyItems: [
      { id: 'Q01', classProb: 0.28, avgProb: 0.49 },
      { id: 'Q06', classProb: 0.67, avgProb: 0.48 },
      { id: 'Q02', classProb: 0.69, avgProb: 0.50 },
      { id: 'Q24', classProb: 0.70, avgProb: 0.51 },
      { id: 'Q10', classProb: 0.70, avgProb: 0.52 },
      { id: 'Q19', classProb: 0.67, avgProb: 0.48 },
    ],
    topTrustIssues: {
      issues: 'The Pragmatists’ concerns live entirely in the exchange: what college costs, what it returns, and whether anyone can see clearly enough to choose well. Their trust is conditional by design — it holds exactly as long as the deal does — so the dimensions they watch are the ones that would show the deal slipping first.',
      mainConcerns: [
        { text: 'Information Transparency — whether price, odds, and results are disclosed plainly enough for informed choice to do its work', dimId: 'institutional-candor' },
        { text: 'Burden Sharing — whether the price stays in proportion to the value for the students actually paying it', dimId: 'burden-proportionality' },
        { text: 'Reliable Results — whether programs keep delivering the completion, learning, and earnings they advertise', dimId: 'outcome-dependability' },
      ],
    },
    proofPoints: [
      {
        claim: 'The college earnings premium remains large and durable: bachelor’s degree holders substantially out-earn high-school graduates over a lifetime.',
        context: 'The Pragmatist’s core fact. Whatever else is wrong, the product works — which is why their reform instinct is conditions and transparency, not demolition.',
        ...EVIDENCE.pewWorthIt,
      },
      {
        claim: 'Roughly half of recent graduates start out underemployed, and many remain so a decade later.',
        context: 'Pragmatists read this as a market-information failure: results vary enormously by program, and buyers deserve to see the variation before they enroll.',
        ...EVIDENCE.talentDisrupted,
      },
      {
        claim: 'Substantial shares of faculty report self-censoring on contested topics.',
        context: 'The place the Pragmatists’ confidence stops: a campus culture that filters inquiry is the part of the institution no outcome dashboard can vouch for.',
        ...EVIDENCE.fireFaculty,
      },
    ],
    reformStance: 'The Pragmatists’ theory of reform is public conditions without political control. Government has a legitimate interest in cost, student safety, and results — set the rules there, publish the outcomes, and let consequences follow performance. But the line matters as much as the rule: the same public that may condition the deal has no business directing the teaching or the research. Accountability and autonomy are not opposites; they are the two halves of a sound bargain.',
    meetingNarrative: 'Pragmatists share more with their opposites than the labels suggest. With the {{institutional-reformers}}, the only other broadly trusting type, they split on foundations: character versus results, believing versus verifying, and it is the Pragmatists who press harder for plain disclosure of price and odds. With the {{fair-deal-skeptics}} they share the frame itself: no two types judge college more completely as a deal, in money, time, and results; they simply read the ledger to opposite conclusions, and both would choose better information and better paths over political control. The {{populist-insurgents}} share their deepest instinct, proof over promises, results shown and claims checked; the divide is only what the evidence says. And with the {{grassroots-communitarians}} they share a practical eye on cost and results while standing on opposite sides of the typology’s widest belonging gap: Communitarians feel counted in as full members, and Pragmatists find the campus’s moral world narrower than its brochure.',
  },

  // ── Populist Insurgents ───────────────────────────────────────────────
  'populist-insurgents': {
    expandedDescription: [
      'Populist Insurgents are defined not by what they think college costs or delivers, but by a verdict on how institutions behave when something goes wrong. Rules bend for the connected. Standards move when donors or politicians push. Failing programs are protected until protecting them costs more than changing them. Reform lasts exactly as long as the pressure does. And the people a college harms can get a meeting — but rarely a review with the power to change anything.',
      'This is not generalized cynicism. Insurgents divide on questions of belonging and even on the value of the degree; what unites them is the conduct-after-failure pattern: obscure, deflect, comply, revert. Each escape from consequence reads to them as confirmation that consequence is the only language institutions reliably hear.',
      'The name locates them precisely. Populist, because their claim is about who institutions must finally answer to: the public that charters, subsidizes, and depends on them — not the professionals who run them. Insurgent, because they no longer expect that answer to come voluntarily. What they refuse is the blank check — trust, funding, and deference extended in advance, against promises of self-correction that never quite arrive. What they authorize instead is enforcement with enough authority behind it that compliance cannot simply wait out the news cycle.',
      'The shared verdict likely conceals a live argument about the remedy. One current within this type would put federal and state government in charge: require the changes, replace the leaders, condition the money. Another has little more faith in state repair than in self-repair — it would take the public’s money and trust elsewhere, disciplining institutions through exit and alternatives. Both are insurgencies against unaccountable conduct; they part ways over who should hold the power that follows. Future data may draw that line precisely.',
    ],
    keyItems: [
      { id: 'Q30', classProb: 0.14, avgProb: 0.53 },
      { id: 'Q32', classProb: 0.12, avgProb: 0.50 },
      { id: 'Q13', classProb: 0.79, avgProb: 0.48 },
      { id: 'Q15', classProb: 0.79, avgProb: 0.49 },
      { id: 'Q33', classProb: 0.77, avgProb: 0.48 },
      { id: 'Q35', classProb: 0.75, avgProb: 0.49 },
    ],
    topTrustIssues: {
      issues: 'The Insurgents’ three sharpest concerns are one concern seen from three angles: institutions that cannot correct themselves, procedures that bend to power, and accountability channels that produce explanations instead of consequences.',
      mainConcerns: [
        { text: 'Self-Correction — whether colleges ever truly learn, or merely comply until attention fades', dimId: 'institutional-correctability' },
        { text: 'Equal Protection — whether rules hold when status, politics, or money pushes back', dimId: 'procedural-evenhandedness' },
        { text: 'Public Answerability — whether harmed people can trigger review with real power', dimId: 'institutional-answerability' },
      ],
    },
    proofPoints: [
      {
        claim: 'Confidence in higher education has fallen across every partisan and demographic group — not just among its critics.',
        context: 'Insurgents read the breadth of the decline as evidence the problem is conduct, not messaging: you cannot lose everyone at once by being misunderstood.',
        ...EVIDENCE.gallupConfidence,
      },
      {
        claim: 'Americans consistently support stronger accountability for colleges — on outcomes, costs, and how institutions respond to failure.',
        context: 'The Insurgent’s point is not that accountability is popular; it is that decades of popular demand have produced so little of it.',
        ...EVIDENCE.varyingDegrees,
      },
      {
        claim: 'Outstanding student loan balances remain near historic highs.',
        context: 'For Insurgents the debt is a standing exhibit: consequences of institutional decisions, borne almost entirely by the people with the least power to demand answers.',
        ...EVIDENCE.fedDebt,
      },
    ],
    reformStance: 'The Insurgents’ theory of reform is compelled accountability with consequences. When a college repeatedly fails, federal and state government should be able to take charge: require specific changes, replace leadership that presided over the failure, and cut public money or approval when the failure continues. This is not a preference for state control of education — it is a conclusion about incentives: institutions that have shown they will not correct themselves must face an authority that can correct them — and a public with real power to ensure they deliver what they owe the communities that charter, subsidize, and depend on them. A reckoning, in the old sense: the accounts finally called in.',
    meetingNarrative: 'Insurgents are less alone in the typology than their verdict suggests. The {{fair-deal-skeptics}} stand nearest: both watched the exchange break, and neither believes the sector’s account of itself, though Skeptics indict the deal and would fund better paths where Insurgents indict the conduct and want consequences. With the {{grassroots-communitarians}} some share the politics without the prescription; both distrust distant institutions and doubt that anyone has to answer, but Communitarians draw a line Insurgents rarely do, between the local campus and the sector, where for Insurgents the system is one thing at every distance. The unexpected kinship is with the {{results-oriented-pragmatists}}: both demand proof over promises and refuse to take institutions at their word; they part only on what the evidence shows. And even the {{institutional-reformers}}, their mirror opposite on whether colleges can correct themselves, share the Insurgents’ deepest premise: that institutional conduct, not cost, is the question that matters.',
  },

  // ── Fair-Deal Skeptics ──────────────────────────────────────────────
  'fair-deal-skeptics': {
    expandedDescription: [
      'Fair-Deal Skeptics carry the typology’s hardest verdict on the deal itself. College asks working families for more money, debt, time, and sacrifice than the education returns. Finishing is a gamble whose odds the institutions won’t state plainly. And too often, success is presented as leaving a working-class, rural, or non-college way of life behind — as if the price of the credential included the community that raised you.',
      'What separates Skeptics from simple disillusionment is what survived the breakage: the belief itself. Education’s promise — that learning should open a better life — still strikes them as real and worth keeping. Alone among the typology’s distrusting types, they have not given up on repair — but what they demand is significant reform, not incremental adjustment: bold ideas, not statements. The promise was broken; the promise was not wrong.',
      'So their politics of repair is constructive in the most literal sense. Not rescue for institutions that repeatedly fail, and not government siege — but building: fund the community colleges, apprenticeships, and shorter paths that deliver the promise at a price working people can carry, and let institutions that cannot deliver shrink or close. Keep the promise. Change the path if the path is what broke it.',
      'This is likely the most internally varied type of the five. It plausibly gathers the personally betrayed — those who carried the debt and did not receive the promise — alongside critics whose complaint is patterned rather than personal (who gets the opportunity, who carries the risk), and a current already committed to building past failing institutions altogether. What binds them is the demand the type is named for: a deal made fair enough to trust again — and the refusal to give up on the promise itself. Which currents are real, and how large, is a question for the data.',
    ],
    keyItems: [
      { id: 'Q01', classProb: 0.83, avgProb: 0.49 },
      { id: 'Q02', classProb: 0.17, avgProb: 0.50 },
      { id: 'Q04', classProb: 0.21, avgProb: 0.47 },
      { id: 'Q06', classProb: 0.26, avgProb: 0.48 },
      { id: 'Q21', classProb: 0.70, avgProb: 0.48 },
      { id: 'Q19', classProb: 0.72, avgProb: 0.48 },
    ],
    topTrustIssues: {
      issues: 'The Skeptics’ concerns map the broken promise end to end: a burden out of proportion to the benefit, outcomes too uncertain to count on, and an institution whose idea of success asks people to leave their communities behind.',
      mainConcerns: [
        { text: 'Burden Sharing — whether the sacrifice college demands can be justified by what it returns', dimId: 'burden-proportionality' },
        { text: 'Reliable Results — whether completion, learning, and mobility can actually be counted on', dimId: 'outcome-dependability' },
        { text: 'Moral Recognizability — whether working-class, rural, and non-college communities count as ways of life or as starting points to escape', dimId: 'moral-recognizability' },
      ],
    },
    proofPoints: [
      {
        claim: 'Roughly half of recent bachelor’s graduates work in jobs that don’t require their degree a year after finishing — and many are still underemployed ten years later.',
        context: 'The Skeptics’ core exhibit: the promise’s odds, finally written down. Not that the degree never works — that no one told them how often it doesn’t.',
        ...EVIDENCE.talentDisrupted,
      },
      {
        claim: 'Only about one-in-four U.S. adults say it’s extremely or very important to have a four-year degree to get a well-paying job — and most doubt the cost is worth it with loans.',
        context: 'For Skeptics this is not anti-college sentiment; it is the public re-pricing a promise institutions refused to re-price themselves.',
        ...EVIDENCE.pewWorthIt,
      },
      {
        claim: 'Outstanding student loan balances remain near historic highs.',
        context: 'The broken promise’s ledger: risk transferred to the families with the least room for error, years before the outcome is known.',
        ...EVIDENCE.fedDebt,
      },
    ],
    reformStance: 'The Skeptics’ theory of reform is keeping the promise through better paths — significant reform, not marginal adjustment. When a college repeatedly fails its students, stop pouring trust and money into the failure: fund the alternatives that deliver — community colleges, apprenticeships, employer pathways, shorter and cheaper routes to real skills — and let institutions that cannot keep the promise shrink or close. This is not abandonment of education; it is loyalty to it. The promise matters more than any particular institution that made it.',
    meetingNarrative: 'Skeptics touch every type somewhere, usually where least expected. The {{populist-insurgents}} share their verdict: both watched the exchange break, and neither believes the sector’s self-account, but where Insurgents indict conduct and demand compelled accountability, Skeptics indict the deal, still believe in the education itself, and would keep the promise through better paths. The {{results-oriented-pragmatists}} share their yardstick exactly, college as a deal in money, time, and results, and simply read it to the opposite conclusion. With the {{grassroots-communitarians}} they are kin by origin and opposites in belonging: both measure higher education against working-class and rural realities, yet the same communities Skeptics feel asked to leave behind are the ones Communitarians find fully counted in. And the most unexpected kinship of all runs to the {{institutional-reformers}}: alone among the doubting types, Skeptics share the Reformers’ belief that institutions can learn. What separates them is only the deal Reformers judge roughly fair, and Skeptics watched break.',
  },

  // ── Grassroots Communitarians ───────────────────────────────────────
  'grassroots-communitarians': {
    expandedDescription: [
      'Grassroots Communitarians trust the higher education they can see and feel. The community college downtown. The faith- or mission-based campus that shares their commitments. The regional public that trains the area’s nurses, teachers, and technicians. Where a felt relationship exists — through family, work, worship, or neighborhood — these institutions register as genuinely theirs, and that is what their distinctive judgments record: the typology’s most favorable verdicts on whether people can speak their minds and whether communities and traditions belong.',
      'Their skepticism points up and out, toward the sector’s official voice. They doubt the marketing more than the classroom, the administration building more than the campus, the national claims more than the local conduct. Distant institutions asking for trust on the strength of self-description find little of it here; proximate institutions embedded in a shared life find a great deal. The trust is real — and it travels through relationship, not reputation.',
      'That split explains their distinctive remedy. Government command would trample the community they value; market exit would abandon it. What follows from their experience is membership made real: the students, faculty, staff, and communities who constitute the institution sharing formal power over its biggest decisions — because the people who make a college worth trusting are the ones it least consults.',
      'Within this type, several currents plausibly meet: faith- and tradition-rooted publics whose mission-aligned institutions treat their worldview as home; communities bound to a local or regional college by service, employment, and family; and reform-minded members whose first demand is standing — a formal share in decisions that shape a community they already belong to. Whether these are one public or several is a question future data can answer.',
    ],
    keyItems: [
      { id: 'Q18', classProb: 0.83, avgProb: 0.51 },
      { id: 'Q20', classProb: 0.81, avgProb: 0.54 },
      { id: 'Q19', classProb: 0.16, avgProb: 0.48 },
      { id: 'Q21', classProb: 0.19, avgProb: 0.48 },
      { id: 'Q17', classProb: 0.23, avgProb: 0.49 },
      { id: 'Q33', classProb: 0.62, avgProb: 0.48 },
    ],
    topTrustIssues: {
      issues: 'The Communitarians’ concerns cluster around the official institution — “higher education” at a distance, not the campuses they know: whether its claims match the evidence, whether its public-service language matches its conduct, and above all whether the people it affects have any standing when it fails them.',
      mainConcerns: [
        { text: 'Public Answerability — whether affected people have real standing, or only listening sessions', dimId: 'institutional-answerability' },
        { text: 'Information Transparency — whether official self-presentation matches the full evidence', dimId: 'institutional-candor' },
        { text: 'Community Benefit — whether service language survives contact with costly decisions', dimId: 'public-purpose-fidelity' },
      ],
    },
    proofPoints: [
      {
        claim: 'Americans’ confidence in higher education declined across religious, cultural, and political communities alike.',
        context: 'The Communitarian reading: institutions lost trust even among publics whose campus experience remains positive — evidence the breach is between institutions and their members, not within campus life.',
        ...EVIDENCE.gallupConfidence,
      },
      {
        claim: 'Americans consistently report far more trust in the colleges they know — local, community, and regional institutions — than in "higher education" as a national sector.',
        context: 'The Grassroots pattern, visible in the survey data: trust travels through felt relationships, not sector reputation. The local college is a neighbor; "higher education" is a headline.',
        source: 'Citizens & Scholars, "Trust Starts Local"',
        url: 'https://citizensandscholars.org/',
      },
      {
        claim: 'Majorities of Americans across parties want a greater public voice in how colleges are held accountable.',
        context: 'For Communitarians the operative word is voice with standing — consultation exists everywhere; power to affect the decision almost nowhere.',
        ...EVIDENCE.varyingDegrees,
      },
    ],
    reformStance: 'The Communitarians’ theory of reform is shared formal power with the affected. When a college needs major reform, the students, faculty, staff, and community members who constitute it should help decide — formally, with votes and vetoes, not advisory panels and listening tours. This is neither government control nor market abandonment; it is the institution’s own membership taken seriously as a source of authority. A college is a community before it is a corporation. Let it be governed like one.',
    meetingNarrative: 'Communitarians touch every boundary in the typology without belonging to any of them. With the {{fair-deal-skeptics}} they are kin by origin: both measure higher education against working-class, rural, and non-college ways of life, and both doubt the distant sector; yet the same communities Skeptics feel asked to leave behind are the ones Communitarians find fully counted in at the campuses they know. Some share the politics of the {{populist-insurgents}} without the harshness of the prescription, and both doubt that anyone has to answer; but Communitarians draw the line Insurgents do not, between the locally rooted campus and the sector, and would move power closer rather than compel from above. With the {{results-oriented-pragmatists}} they share a practical eye on cost, debt, and results while standing on opposite sides of the widest belonging gap in the typology. And the {{institutional-reformers}} are the other trusting type, at a different address: the same warmth, extended by Reformers to the sector’s leadership and procedures, and by Communitarians only as far as the community they can feel.',
  },
}
