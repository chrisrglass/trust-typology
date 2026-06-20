export const CLASSES = [
  {
    id: 'credential-pragmatist',
    name: 'Credential Pragmatist',
    accentColor: '#c17f24',
    tagline: 'Higher education works when it delivers on its economic promise.',
    prevalence: '~42%',
    description:
      'You see college as a high-stakes investment in a competitive economy. You believe institutions should be held accountable for whether graduates find work that justifies the cost — and you are skeptical that most do. You watch the disruption closely and think the future belongs to pathways that deliver without the overhead of a four-year degree.',
    characteristics: [
      'Prioritizes career outcomes over civic mission',
      'Favors market-driven reform and alternative pathways',
      'Skeptical of current return on investment',
    ],
  },
  {
    id: 'institutional-trustee',
    name: 'Institutional Trustee',
    accentColor: '#2d7d46',
    tagline: 'The university still has a job to do — and the capacity to do it.',
    prevalence: '~20%',
    description:
      "You believe higher education's civic and intellectual mission is worth protecting. You trust that universities can identify what they have gotten wrong and correct course from within, given the right conditions. You are not naive about institutional failure, but you think the alternative to reform is worse — and that global engagement is part of what makes the university valuable.",
    characteristics: [
      'Civic purpose, globally engaged',
      "Believes in the institution's capacity for self-correction",
      'Moderately confident in faculty; less so in administrators',
    ],
  },
  {
    id: 'mission-aligned-abolitionist',
    name: 'Mission-Aligned Abolitionist',
    accentColor: '#8b2fc9',
    tagline: 'The mission is right. The institutions are the problem.',
    prevalence: '~14%',
    description:
      'You hold the civic and intellectual mission of higher education seriously — perhaps more seriously than many institutions do. But you have concluded that the current institutions cannot be fixed from within. The structures need to change more fundamentally than reform allows. You are not cynical about what the university could be; you are clear-eyed about what it currently is.',
    characteristics: [
      'Strongest civic purpose commitment of any group',
      'Favors replacement over reform',
      'Domestically focused; skeptical of current priorities',
    ],
  },
  {
    id: 'critical-reformer',
    name: 'Critical Reformer',
    accentColor: '#c93838',
    tagline: 'External pressure is the only thing that moves institutions.',
    prevalence: '~10%',
    description:
      "You believe in higher education's civic mission but have lost confidence in the sector's ability to hold itself accountable. Self-reform promises have not delivered. Real change requires pressure from outside: from government, accreditors, employers, or organized communities. You are not opposed to the university — you are opposed to its current immunity from consequences.",
    characteristics: [
      'Civic purpose with low confidence in self-reform',
      'Supports external accountability mechanisms',
      'Low confidence in administrators; moderate in faculty',
    ],
  },
  {
    id: 'outcomes-focused',
    name: 'Outcomes-Focused',
    accentColor: '#1a7fa8',
    tagline: 'Prepare students for the world, wherever in it that work happens.',
    prevalence: '~8%',
    description:
      'You are pragmatic about what higher education is for: preparing people with skills and credentials for careers in a global economy. You are more globally oriented than most career-focused respondents, and you see international engagement as consistent with strong student outcomes rather than in tension with them. You want institutions to be accountable to students, not to preserve themselves.',
    characteristics: [
      'Career-credential purpose, globally oriented',
      'Pragmatic about reform; open to alternatives',
      'Values outcomes data and employer accountability',
    ],
  },
  {
    id: 'faith-formation',
    name: 'Faith Formation',
    accentColor: '#a0522d',
    tagline: 'Formation of character and faith is what education is actually for.',
    prevalence: '~6%',
    description:
      'You hold a moral and spiritual account of what education is for that most secular institutions do not share. You are skeptical that universities oriented primarily around research, credentials, or civic participation can deliver what genuine formation actually requires. You see the gap between what institutions claim and what they practice as a structural failure, not a communications problem.',
    characteristics: [
      'Moral-spiritual purpose as primary orientation',
      'Domestically focused; skeptical of global engagement framing',
      'Favors alternatives or fundamental restructuring',
    ],
  },
]

export function getClass(id) {
  return CLASSES.find(c => c.id === id)
}
