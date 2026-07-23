// The five provisional trust classes — Trust Typology v2 prototype.
//
// PROVISIONAL, PRE-FIELDING. These classes and prevalences come from a
// synthetic design study (N=2,500 simulation), not from fielded respondents.
// Labels are working names under a naming embargo until an unlabeled latent
// class analysis is estimated from real data. Each class's tagline states its
// THEORY OF REFORM — its position on how a failing institution should be made
// trustworthy again.
//
// Accent colors are inherited from the original site's design system palette.

export const CLASSES = [
  {
    id: 'institutional-reformers',
    name: 'Institutional Reformers',
    icon: 'Landmark',
    accentColor: '#2457A6',
    tagline: 'Renewal from within, verified from without',
    salientConcerns: 'Establishment trust with open eyes: higher education is fundamentally sound and worth defending, yet the problems are real — confusing pricing, opaque admissions, eroded rigor — and reform is necessary. They believe the institution\u2019s own leaders and faculty can deliver that reform, with independent verification that promised changes actually happen.',
    prevalence: '~23%',
    shareText: "I'm an Institutional Reformer — I believe higher education can renew itself, with independent verification. What's your trust type?",
    sharedConcern: 'No type defends the status quo. All five want higher education made more trustworthy — they differ on who should lead the repair and what it would take to believe in it.',
    description: 'Reformers extend a trust rooted in institutional character: colleges are broadly candid, apply their rules evenhandedly, serve real public purposes, and — crucially — can notice their own failures and correct them. Theirs is trust with open eyes — the problems are real, and reform is necessary — not nostalgia. It rests on a specific belief the other four types have lost: that the institution’s own leadership, faculty, and governing boards remain the right stewards of its mission, provided independent reviewers verify that promised reforms actually happen.',
    characteristics: [
      'Judge colleges candid about costs and honest about career outcomes',
      'Believe institutions can make hard changes and answer to people they affect',
      'Favor college-led reform with independent review over government command or replacement',
    ],
  },
  {
    id: 'results-oriented-pragmatists',
    name: 'Results-Oriented Pragmatists',
    icon: 'TrendingUp',
    accentColor: '#1F6B4F',
    tagline: 'Public conditions without political control',
    salientConcerns: 'Trust follows results: degrees that pay, programs that deliver what they advertise. Their doubts concentrate on the campus itself — an intellectual climate they do not fully trust, and a culture where their own views may not be welcome.',
    prevalence: '~21%',
    shareText: "I'm a Results-Oriented Pragmatist — college is worth it when it delivers, and the public can set conditions without controlling the classroom. What's your trust type?",
    sharedConcern: 'No type defends the status quo. All five want higher education made more trustworthy — they differ on who should lead the repair and what it would take to believe in it.',
    description: 'Pragmatists extend trust where the exchange works. They judge college worth its price for most students, count on programs to deliver the learning and completion they promise, and see real public benefit flowing from higher education’s privileges. Their reservations sit elsewhere: in the intellectual climate and in whose traditions feel at home on campus. Their theory of reform matches their temperament — government may set rules on cost, safety, and results, but teaching and research should stay in academic hands.',
    characteristics: [
      'Judge the degree worth its cost and outcomes dependable for most students',
      'See public purposes genuinely served, but harbor doubts about campus intellectual climate',
      'Favor public rules on cost and results while keeping academic control local',
    ],
  },
  {
    id: 'populist-insurgents',
    name: 'Populist Insurgents',
    icon: 'Gavel',
    accentColor: '#C46A2D',
    tagline: 'Compelled accountability with consequences',
    salientConcerns: 'The sharpest verdict on conduct: colleges obscure failure, bend rules for the connected, and cannot be trusted to reform themselves. Government and the public need real power to ensure institutions deliver what they owe the public that charters them, subsidizes them, and depends on them.',
    prevalence: '~22%',
    shareText: "I'm a Populist Insurgent — institutions that obscure failure must face real consequences. What's your trust type?",
    sharedConcern: 'No type defends the status quo. All five want higher education made more trustworthy — they differ on who should lead the repair and what it would take to believe in it.',
    description: 'Insurgents have reached a verdict about institutional conduct after failure: colleges obscure problems, bend rules for the powerful, comply under pressure and revert when attention fades, and rarely give harmed people a review with the power to change anything. Their demand is not hostility to education — it is a refusal to extend further trust without enforcement. When a college repeatedly breaks its promises, they authorize federal and state government to require changes, replace leaders, and attach real consequences to public money.',
    characteristics: [
      'Judge institutions unwilling to surface failure or sustain reform once pressure fades',
      'See rules applied selectively and complaints that rarely trigger real consequences',
      'Favor government taking charge when a college repeatedly fails',
    ],
  },
  {
    id: 'fair-deal-skeptics',
    name: 'Fair-Deal Skeptics',
    icon: 'Hammer',
    accentColor: '#A3171C',
    tagline: 'Keep the promise through better paths',
    salientConcerns: 'The exchange is the wound: too much money, debt, and family sacrifice for results too uncertain to count on, with the risk landing on those least able to carry it. They still believe in education; they doubt the deal, and believe real reform is necessary.',
    prevalence: '~17%',
    shareText: "I'm a Fair-Deal Skeptic — the promise of education is real, but it needs better paths to keep it. What's your trust type?",
    sharedConcern: 'No type defends the status quo. All five want higher education made more trustworthy — they differ on who should lead the repair and what it would take to believe in it.',
    description: 'Skeptics are defined by a broken exchange and a surviving belief. College asks too much — money, debt, time, family sacrifice — for results too uncertain to count on. Yet unlike the Insurgents, they retain the highest repair-layer confidence of any distrusting type: institutions can learn, and accountability can work. What they want is not the incumbent institution punished but the promise kept — by funding better paths, from community colleges to apprenticeships, and letting institutions that cannot deliver shrink or close.',
    characteristics: [
      'Judge the cost of college disproportionate to results students can actually count on',
      'Retain belief that education’s promise is real and repair is possible',
      'Favor funding better paths over rescuing institutions that repeatedly fail',
    ],
  },
  {
    id: 'grassroots-communitarians',
    name: 'Grassroots Communitarians',
    icon: 'Users',
    accentColor: '#B78A2A',
    tagline: 'Shared formal power with the affected',
    salientConcerns: 'Trust lives close to home: the community college downtown, the mission-driven campus, the regional public they can see. Their distrust aims at the distant sector — its marketing, its candor, its answerability — and at decisions made far from the people they touch.',
    prevalence: '~18%',
    shareText: "I'm a Grassroots Communitarian — I trust the colleges I can see and the people they serve, and those people should share real decision power. What's your trust type?",
    sharedConcern: 'No type defends the status quo. All five want higher education made more trustworthy — they differ on who should lead the repair and what it would take to believe in it.',
    description: 'Communitarians trust higher education where they can feel it: the community college downtown, the faith- and mission-based campus that shares their commitments, the regional public that trains the county’s nurses and teachers. Where a felt relationship exists, they judge colleges genuinely open to questioning and genuinely welcoming to communities and traditions — the very dimensions other skeptical types score lowest. Their doubt points elsewhere: at the distant official sector, its marketing, its candor, its answerability to the people it affects. Their theory of reform follows from what they trust: not government command, not market exit, but formal shared decision power for the students, faculty, staff, and communities who constitute the institutions they know.',
    characteristics: [
      'Trust anchored in felt relationships — community colleges, mission- and faith-based campuses, regional publics',
      'Judge the campuses they know open to inquiry and welcoming to traditions, while doubting the sector’s official candor and answerability',
      'Favor affected people sharing formal decision power, not just being consulted',
    ],
  },
]

export function getClass(id) {
  return CLASSES.find(c => c.id === id)
}
