// Trust Typology Quiz — 26-item public instrument (v28-quiz-ux-specification.md)
// Part I:   16 clustering items (items 1–16)
// Part II:  6 demographic items (items 17–22, section DM)
// Part III: 4 experience covariates (items 23–26, section EX)

export const SECTIONS = [
  {
    id: 'PART1',
    title: 'Your Views on Higher Education',
    description: 'These questions help us understand how you think about higher education in America. There are no right or wrong answers.',
  },
  {
    id: 'DM',
    title: 'About You',
    description: 'These questions help us understand who holds each view. They are not used to determine your typology class.',
  },
  {
    id: 'EX',
    title: 'A Few More Questions',
    description: 'These final questions help us understand the context behind your views.',
  },
]

export const ITEMS = [
  // ─── Part I: Clustering Battery (items 1–16) ──────────────────────────────

  // Item 1
  {
    id: 'D2-F',
    section: 'PART1',
    type: 'options_3',
    instruction: 'For this question, choose the option that comes closest to your view.',
    prompt: 'Thinking about what higher education should be primarily for — what do you think its most important purpose is?',
    options: [
      { value: 'A', label: "Developing students' capacity for reasoning, civic participation, and meaningful contribution to their communities." },
      { value: 'B', label: 'Transmitting knowledge and forming students within a moral or spiritual tradition that gives that knowledge its deeper meaning.' },
      { value: 'C', label: 'Preparing students with the skills and credentials they need for productive careers and economic participation.' },
    ],
  },

  // Item 2
  {
    id: 'D5-B',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Higher education today is a reliable path to upward mobility for people from low-income families who work hard and make smart choices.' },
      { value: 'B', label: 'For people from low-income families, the risks of higher education — debt, non-completion, uncertain job prospects — often outweigh the potential benefits.' },
    ],
  },

  // Item 3
  {
    id: 'D1-E',
    section: 'PART1',
    type: 'options_4',
    prompt: 'If a young person you care about asked whether to pursue a four-year college degree, what would you tell them?',
    options: [
      { value: 'A', label: 'Go — the degree is worth the investment.' },
      { value: 'B', label: 'Go, but only if you can do it without taking on significant debt, or only for certain fields.' },
      { value: 'C', label: 'Consider vocational training, an apprenticeship, or a two-year credential — that path may be a better fit and deserves the same respect.' },
      { value: 'D', label: 'Skip college — the risk and cost are not worth it for most people.' },
    ],
  },

  // Item 4
  {
    id: 'D6-A',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The college or university that serves my area is a genuine part of the community — it cares about what happens here and contributes to local life.' },
      { value: 'B', label: "The college or university that serves my area is focused on its own priorities and doesn't make much difference to the lives of ordinary people in the community." },
    ],
  },

  // Item 5
  {
    id: 'D6-B',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The research and graduates that colleges and universities produce make a concrete difference to people in communities like mine.' },
      { value: 'B', label: 'The benefits of what colleges do — research breakthroughs, highly trained graduates — mostly go to already-advantaged people and places, not to communities like mine.' },
    ],
  },

  // Item 6
  {
    id: 'D6-C',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'When I think about higher education, I mostly trust community colleges and regional universities that serve local students.' },
      { value: 'B', label: 'I have roughly the same level of confidence in community colleges, regional universities, and large research universities.' },
    ],
  },

  // Item 7
  {
    id: 'D2-C',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'College gives students genuine intellectual tools — the ability to think carefully, evaluate evidence, and hold complex questions — that they carry for the rest of their lives.' },
      { value: 'B', label: 'What most students actually get from college is a credential and some skills for a job. The deeper intellectual formation colleges claim to offer rarely happens in practice.' },
    ],
  },

  // Item 8
  {
    id: 'D4-A',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Students with strong religious faith are genuinely welcomed and respected at most colleges and universities.' },
      { value: 'B', label: 'Students with strong religious faith often find that their beliefs are treated as unwelcome or incompatible with serious academic and intellectual life at most colleges and universities.' },
    ],
  },

  // Item 9
  {
    id: 'G1',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'American universities are stronger because they attract the best students, scholars, and ideas from around the world — that openness makes them better institutions and strengthens American research, the economy, and global standing.' },
      { value: 'B', label: 'American universities should focus first on the students and communities that built and fund them — their job is developing American talent and serving American society, not chasing international prestige.' },
    ],
  },

  // Item 10
  {
    id: 'G2',
    section: 'PART1',
    type: 'options_4',
    prompt: 'Thinking about international students at American colleges and universities, which comes closest to your view?',
    options: [
      { value: 'A', label: 'American universities are stronger because they recruit globally — the best students, researchers, and collaborators come from everywhere, and restricting that would make us weaker, not stronger.' },
      { value: 'B', label: 'Universities have expanded international enrollment primarily to increase tuition revenue and improve their global rankings — at the cost of genuine access for domestic students, especially those from low-income and working-class families, and at the expense of their academic integrity.' },
      { value: 'C', label: 'American universities should put qualified domestic applicants first — students from abroad are taking seats that should go to Americans, and institutions that receive public support and tax exemptions owe their first obligation to the people who fund them.' },
      { value: 'D', label: 'Universities should freeze or reduce international enrollment until they can demonstrate with evidence that domestic low-income and first-generation students are gaining seats and financial aid — not losing them.' },
    ],
  },

  // Item 11
  {
    id: 'G3',
    section: 'PART1',
    type: 'options_4',
    prompt: 'Thinking about foreign government involvement in American higher education, which comes closest to your view?',
    options: [
      { value: 'A', label: 'The benefits of international research collaboration and global scholarly exchange outweigh the risks — universities should manage security concerns through proper vetting without broadly restricting foreign participation.' },
      { value: 'B', label: 'Foreign government funding, particularly from authoritarian states, has compromised the independence and safety of American campuses — universities have been too slow to address threats to academic freedom, to Jewish and Christian students, and to sensitive research areas.' },
      { value: 'C', label: 'American universities should significantly restrict research partnerships and enrollment from countries whose governments pose active security or ideological threats to the United States — national security comes before international prestige.' },
      { value: 'D', label: 'The federal government, not universities themselves, should set binding rules on foreign funding, research partnerships, and the enrollment of students from adversary nations — universities cannot be trusted to self-regulate on national security.' },
    ],
  },

  // Item 12
  {
    id: 'R-A1',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Higher education institutions are capable of identifying their own problems and making meaningful changes when they need to.' },
      { value: 'B', label: 'Higher education institutions are not capable of meaningful self-reform — the people and structures that would need to change are the same ones doing the diagnosing.' },
    ],
  },

  // Item 13
  {
    id: 'R-B',
    section: 'PART1',
    type: 'options_3',
    instruction: 'For this question, choose the option that comes closest to your view.',
    prompt: 'Thinking about the problems facing higher education in the United States today, which comes closest to your view?',
    options: [
      { value: 'A', label: 'The problems are serious but fixable — higher education needs significant reform from within.' },
      { value: 'B', label: 'Parts of the system should be replaced by fundamentally different alternatives — not just reformed.' },
      { value: 'C', label: 'The challenges vary widely — some institutions are in serious trouble, others are doing reasonably well; there is no single problem requiring a single solution.' },
    ],
  },

  // Item 14
  {
    id: 'R-A2',
    section: 'PART1',
    type: 'options_4',
    prompt: 'Thinking about what is most likely to push higher education to improve, which comes closest to your view?',
    options: [
      { value: 'A', label: 'Change will most likely come from strong internal leadership — presidents, provosts, and faculty who push their own institutions to do better.' },
      { value: 'B', label: 'Change will most likely come from outside — through government accountability, public pressure, and organized political demand for better outcomes.' },
      { value: 'C', label: 'Meaningful change will require both strong internal leadership and outside pressure working at the same time.' },
      { value: 'D', label: 'The reform question may be beside the point — new models of credentialing, training, and education will ultimately displace institutions that cannot change.' },
    ],
  },

  // Item 15 — split from FA-A matrix, row: faculty
  {
    id: 'FA-A-faculty',
    section: 'PART1',
    type: 'scale_4',
    prompt: 'How much confidence do you have that college and university faculty are acting in the genuine interests of students?',
    options: [
      { value: '1', label: 'A lot' },
      { value: '2', label: 'Some' },
      { value: '3', label: 'Not much' },
      { value: '4', label: 'None at all' },
    ],
  },

  // Item 16 — split from FA-A matrix, row: administrators
  {
    id: 'FA-A-administrators',
    section: 'PART1',
    type: 'scale_4',
    prompt: 'How much confidence do you have that college and university administrators and senior leadership are acting in the genuine interests of students?',
    options: [
      { value: '1', label: 'A lot' },
      { value: '2', label: 'Some' },
      { value: '3', label: 'Not much' },
      { value: '4', label: 'None at all' },
    ],
  },

  // ─── Part II: Demographic Items (items 17–22, section DM) ─────────────────

  // Item 17
  {
    id: 'DM-A',
    section: 'DM',
    type: 'single_select',
    prompt: 'Which best describes your current employment sector?',
    options: [
      { value: 'education', label: 'Education' },
      { value: 'healthcare', label: 'Healthcare or social services' },
      { value: 'government', label: 'Government or public sector' },
      { value: 'private', label: 'Private sector' },
      { value: 'nonprofit', label: 'Nonprofit or civic organization' },
      { value: 'self_employed', label: 'Self-employed' },
      { value: 'not_employed', label: 'Not currently employed' },
    ],
  },

  // Item 18
  {
    id: 'DM-B',
    section: 'DM',
    type: 'single_select',
    prompt: 'Which best describes the area where you live?',
    options: [
      { value: 'urban', label: 'Major city or urban area' },
      { value: 'suburban', label: 'Suburb of a major city' },
      { value: 'small_city', label: 'Small city or town' },
      { value: 'rural', label: 'Rural area or small town' },
    ],
  },

  // Item 19
  {
    id: 'DM-C',
    section: 'DM',
    type: 'single_select',
    prompt: 'What is your approximate annual household income?',
    options: [
      { value: 'under_40k', label: 'Under $40,000' },
      { value: '40k_79k', label: '$40,000–$79,999' },
      { value: '80k_124k', label: '$80,000–$124,999' },
      { value: '125k_plus', label: '$125,000 or more' },
      { value: 'prefer_not', label: 'Prefer not to say' },
    ],
  },

  // Item 20
  {
    id: 'DM-D',
    section: 'DM',
    type: 'single_select',
    prompt: 'How important is religion or faith in your life?',
    options: [
      { value: 'center', label: 'Religion is at the center of my life' },
      { value: 'important', label: 'Religion is important to me' },
      { value: 'one_factor', label: 'Religion is one factor among many' },
      { value: 'little_none', label: 'Religion plays little or no role in my life' },
    ],
  },

  // Item 21
  {
    id: 'DM-E',
    section: 'DM',
    type: 'single_select',
    prompt: 'What is your age?',
    options: [
      { value: '18_29', label: '18–29' },
      { value: '30_44', label: '30–44' },
      { value: '45_59', label: '45–59' },
      { value: '60_plus', label: '60 or older' },
    ],
  },

  // Item 22
  {
    id: 'DM-F',
    section: 'DM',
    type: 'multiselect',
    prompt: 'Which of the following best describes your race or ethnicity? Select all that apply.',
    options: [
      { value: 'white', label: 'White or European American' },
      { value: 'black', label: 'Black or African American' },
      { value: 'hispanic', label: 'Hispanic or Latino (any race)' },
      { value: 'asian', label: 'Asian or Asian American' },
      { value: 'native', label: 'American Indian or Alaska Native' },
      { value: 'other', label: 'Another background' },
      { value: 'prefer_not', label: 'Prefer not to say' },
    ],
  },

  // ─── Part III: Experience Covariates (items 23–26, section EX) ────────────

  // Item 23
  {
    id: 'EX-C',
    section: 'EX',
    type: 'scale_4',
    prompt: 'How closely do you follow news and debates about higher education?',
    options: [
      { value: '1', label: 'Very closely' },
      { value: '2', label: 'Somewhat closely' },
      { value: '3', label: 'Only occasionally' },
      { value: '4', label: 'Not at all' },
    ],
  },

  // Item 24
  {
    id: 'EX-E',
    section: 'EX',
    type: 'options_4',
    prompt: 'How much has your own direct experience with colleges and universities shaped your current views?',
    options: [
      { value: '1', label: 'A great deal' },
      { value: '2', label: 'Somewhat' },
      { value: '3', label: 'Not much' },
      { value: '4', label: "My views are based mostly on what I've read or heard rather than direct experience" },
    ],
  },

  // Item 25
  {
    id: 'EX-F',
    section: 'EX',
    type: 'multiselect',
    prompt: 'Which types of colleges, universities, or educational programs have you or your children had direct experience with — through enrollment, attendance, or completion? Select all that apply.',
    options: [
      { value: 'selective', label: 'Highly selective four-year colleges and universities (such as Ivy League schools or other schools that accept fewer than a third of applicants)' },
      { value: 'flagship', label: 'Large public flagship universities (the main state university in your state)' },
      { value: 'regional', label: 'Regional or mid-size public universities' },
      { value: 'liberal_arts', label: 'Private liberal arts colleges (small, secular or non-denominational four-year colleges focused on broad general education)' },
      { value: 'community', label: 'Community colleges or two-year colleges' },
      { value: 'technical', label: 'Technical or vocational schools' },
      { value: 'faith', label: 'Faith-based colleges or universities' },
      { value: 'msi', label: 'Historically Black Colleges and Universities (HBCUs), Hispanic-Serving Institutions (HSIs), Tribal Colleges and Universities (TCUs), or other minority-serving institutions' },
      { value: 'for_profit', label: 'For-profit colleges or universities (such as University of Phoenix, DeVry, ITT Tech, or Strayer)' },
      { value: 'military', label: 'Military service academies, military training programs, or veteran education programs (including GI Bill enrollment)' },
      { value: 'online', label: 'Online-only colleges or degree programs' },
      { value: 'nondegree', label: 'Non-degree training programs — such as apprenticeships, trade certificates, professional certificates, or coding boot camps' },
      { value: 'none', label: 'None of the above — I do not have direct experience with any of these' },
    ],
  },

  // Item 26
  {
    id: 'EX-G',
    section: 'EX',
    type: 'single_select',
    prompt: 'Thinking about your own education: which best describes your situation?',
    options: [
      { value: 'bachelors_plus', label: "I completed a four-year college degree or higher (bachelor's, master's, professional, or doctoral degree)" },
      { value: 'associates', label: 'I completed a two-year or associate degree' },
      { value: 'vocational', label: 'I completed a vocational or technical certificate program' },
      { value: 'some_college', label: 'I attended some college but did not complete a degree (including if you are currently enrolled)' },
      { value: 'no_college', label: 'I have not attended college' },
    ],
  },
]
