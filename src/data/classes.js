export const CLASSES = [
  {
    id: 'critical-believers',
    name: 'Critical Reformers',
    icon: 'Eye',
    accentColor: '#6E3B6E',
    tagline: "The university's mission matters and institutions should be held accountable for their performance.",
    prevalence: '~12%',
    description:
      "You believe in what higher education is supposed to do — intellectual formation, civic purpose, free inquiry. But you don't believe the current system is delivering it for the people who need it most. You hold two things at once: the mission is real and worth defending, and the institution is failing those it claims to serve. That combination — belief without naivety — is distinctive.",
    characteristics: [
      'Believes in genuine intellectual formation and civic purpose',
      'Sees HE as failing economically while worth saving institutionally',
      'Alarmed by AI as a labor market threat; trusts AI as a governed tool',
    ],
  },
  {
    id: 'populist-antagonists',
    name: 'Populist Insurgents',
    icon: 'Megaphone',
    accentColor: '#C46A2D',
    tagline: "The system has been captured by out-of-touch elites, and working people need structural reform and real alternatives to the four-year degree.",
    prevalence: '~17%',
    description:
      'You see higher education as a system that sold a promise to working people it never intended to keep. The degree does not lead to real mobility. The institutions absorbed public money and delivered returns to those who already had advantages. You want democratic accountability — elected officials holding institutions answerable — and you are not interested in more institutional reform promises.',
    characteristics: [
      'Sees HE as having failed working people structurally',
      'Supports democratic accountability through elected government',
      'Believes AI encodes elite secular values and destroys cognitive independence',
    ],
  },
  {
    id: 'indifferent-skeptics',
    name: 'Institutional Skeptics',
    icon: 'CircleDashed',
    accentColor: '#7A7068',
    tagline: 'Every major institution has failed, and trust won\'t be restored by the same systems that lost it.',
    prevalence: '~10%',
    description:
      "You see higher education's failures clearly enough: the debt risk is not worth it for most people, admissions favors the wealthy, institutions do not serve ordinary communities. But you have not built an ideological framework around those observations. You want government accountability and are open to alternatives. You are not invested in the political argument about what replaces what's broken.",
    characteristics: [
      'Sees systemic failures without ideological scaffolding',
      'Wants public accountability; open to non-degree alternatives',
      'Not alarmed by AI — sees it as a neutral tool, neither threat nor salvation',
    ],
  },
  {
    id: 'community-meritocrats',
    name: 'Self-Made Meritocrats',
    icon: 'Users',
    accentColor: '#1F6B4F',
    tagline: 'The degree pays off, if you choose wisely, commit fully, and take responsibility for the outcome.',
    prevalence: '~12%',
    description:
      'You believe the four-year degree still delivers for people who work hard and make good choices. You trust that local institutions genuinely serve their communities, that research universities produce public goods, and that admissions is a genuine evaluation of ability. You are alarmed by what AI is doing to the formation of students — and optimistic about graduates\' ability to adapt to AI in the labor market.',
    characteristics: [
      'Trusts institutional performance, merit-based evaluation, and local community role',
      'Alarmed by AI as a pedagogical threat; optimistic about AI and employment',
      'Favors reform from within; opposes government content control',
    ],
  },
  {
    id: 'faith-rooted-skeptics',
    name: 'Countercultural Classicists',
    icon: 'Star',
    accentColor: '#B78A2A',
    tagline: 'Universities have abandoned intellectual formation for competing priorities and need to recover a clear sense of what higher education is actually for.',
    prevalence: '~11%',
    description:
      'You hold a thick account of what education is for — formation of character, virtue, and faith — that most secular research universities neither understand nor provide. You believe in real intellectual formation; you simply mean something different by it than most. You support protecting institutions built around specific communities, including HBCUs and faith-based colleges. And you see AI as systematically excluding the frameworks that matter most to you.',
    characteristics: [
      'Believes in genuine formation rooted in faith and virtue',
      'Supports community-specific institutions including HBCUs and faith-based colleges',
      'Most alarmed of any group by AI\'s exclusion of religious and faith-rooted frameworks',
    ],
  },
  {
    id: 'institutional-faithful',
    name: 'University Defenders',
    icon: 'Shield',
    accentColor: '#2457A6',
    tagline: 'The university as it exists must evolve and defend itself against government intrusion and market capture.',
    prevalence: '~15%',
    description:
      'You trust the institution. The degree leads to real mobility. College produces genuine intellectual formation. Research universities are public goods. Local institutions serve their communities. Faculty governance works. The news media covers higher education honestly. You are not naive about institutional failure, but you believe the alternatives on offer — government accountability, replacement, market pressure — are worse than reform from within.',
    characteristics: [
      'Comprehensively trusts institutional mission and performance',
      'Believes the degree delivers real mobility and genuine intellectual formation',
      'Supports reform from within; opposes government content control',
    ],
  },
  {
    id: 'economically-dispossessed',
    name: 'Economically Betrayed',
    icon: 'TrendingDown',
    accentColor: '#A3171C',
    tagline: "The system broke its promise, and the cost was borne by the people who believed in it, not the institutions that recruited them.",
    prevalence: '~22%',
    description:
      'You hold a structural economic diagnosis of higher education\'s failure: the institution recruited from working-class and low-income communities, accepted their enrollment and debt, and delivered neither stable employment nor local economic benefit. You are not disengaged — you know exactly what was promised and what was not delivered. You support protecting academic freedom, are alarmed by AI\'s effect on entry-level employment, and want alternatives to the four-year degree that actually serve the communities the system left behind.',
    characteristics: [
      'Structural diagnosis: degree fails low-income communities systematically',
      'Alarmed by AI eliminating the entry-level pathways the credential was supposed to open',
      'Supports academic freedom; opposes both government content control and the status quo',
    ],
  },
]

export function getClass(id) {
  return CLASSES.find(c => c.id === id)
}
