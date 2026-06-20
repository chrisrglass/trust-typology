// Trust Typology Survey — 33-item public instrument (v26-item-catalog-LCA.md)
// Part A (LCA):   23 forced-choice binary items (items 1–23, indices 0–22)
// Part B (Demo):  5 demographic items (items 24–28, indices 23–27)
// Part C (REP):   5 representativeness items (items 29–33, indices 28–32)

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
    id: 'REP',
    title: 'A Few More Questions',
    description: 'These final questions help us understand the context behind your views.',
  },
]

export const ITEMS = [

  // ─── Part A: LCA Items (items 1–23, indices 0–22) ────────────────────────────
  // All items are forced-choice binary: 'A' = Pole A, 'B' = Pole B
  // Prompt for all: "Which comes closer to your view — even if neither is exactly right?"

  // Dimension 1 — Financial Stakes and Honest Dealing

  // Item 1 (formerly Item 2)
  {
    id: 'D5-D',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'A college degree is still the most reliable tool for helping people from disadvantaged backgrounds reach economic stability.' },
      { value: 'B', label: 'Higher education has become so expensive and unequal that it now reinforces class divisions more than it overcomes them.' },
    ],
  },

  // Item 3
  {
    id: 'D1-I',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Underemployment after graduation is temporary for most — persistence and willingness to take on lateral moves create the path to better roles within a few years.' },
      { value: 'B', label: 'Underemployment after graduation is where most graduates stay. It isn\'t a transition — it\'s the outcome, and the doors the degree was supposed to open don\'t open for most who start below their credential level.' },
    ],
  },

  // Item 4
  {
    id: 'D1-J',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Whether graduates find work that uses their degree comes down to preparation and choices — the right field, sufficient initiative, willingness to network and relocate. The labor market rewards those who approach the search well.' },
      { value: 'B', label: 'There are now more college graduates seeking college-level work than there are college-level jobs — by a significant margin. That gap is a structural imbalance the system created, not an individual preparation problem.' },
    ],
  },

  // Item 5
  {
    id: 'D1-H',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Federal student loans should be available for any accredited program — including ministry, social work, teaching, and the arts — even when graduates earn less than average. People should be able to borrow to pursue a calling, not just a career.' },
      { value: 'B', label: 'Federal student loans should be restricted to programs where graduates are likely to earn enough to repay what they borrowed. Taxpayers shouldn\'t subsidize programs with poor financial outcomes.' },
    ],
  },

  // Dimension 2 — Learning Quality and Educational Purpose

  // Item 6
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

  // Item 7
  {
    id: 'D2-F',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'General education should require every student to seriously engage with foundational works — from Western philosophy, world religious traditions, or other intellectual canons. There is no substitute for wrestling with the ideas that have shaped how humans live together.' },
      { value: 'B', label: 'General education should focus on transferable skills — writing clearly, reasoning quantitatively, thinking critically — rather than mandating any particular texts or traditions. Skill-building, not reverence for prescribed works, should drive the curriculum.' },
    ],
  },

  // Dimension 3 — AI and the Integrity of Learning

  // Item 9
  {
    id: 'D1-D1',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The rise of AI is eliminating entry-level positions — the jobs new graduates have historically used to start careers — faster than higher education can adapt its training.' },
      { value: 'B', label: 'While AI will change many jobs, college graduates have the adaptability and critical thinking skills to find new roles — higher education prepares people for exactly this kind of transition.' },
    ],
  },

  // Item 10
  {
    id: 'D2-G',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'AI tools in coursework are helping students develop the analytical skills they need — learning to work with AI is itself a genuine competency for the careers they\'re entering.' },
      { value: 'B', label: 'Students who use AI for coursework are producing outputs, not developing the capacity to produce them. The ability to reason through hard problems independently is being lost where AI has replaced that effort.' },
    ],
  },

  // Item 11
  {
    id: 'D2-H',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'AI systems being adopted by colleges are analytical and creative tools — they don\'t have a worldview and don\'t systematically favor or exclude any set of values or traditions.' },
      { value: 'B', label: 'AI systems adopted by colleges were built without meaningful input from religious traditions, non-Western philosophical frameworks, or faith-rooted ways of knowing — making them poor fits for students whose intellectual formation is rooted in those traditions.' },
    ],
  },

  // Dimension 4 — Cultural Belonging

  // Item 12
  {
    id: 'D4-E',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Colleges genuinely support students in developing new skills and perspectives while honoring where they come from — working-class, rural, and faith-community students don\'t have to become different people to be taken seriously.' },
      { value: 'B', label: 'To be fully taken seriously at most colleges — as a person and an intellect, not just a passing student — those from working-class, rural, or faith-community backgrounds have to present themselves in ways foreign to their home communities.' },
    ],
  },

  // Dimension 5 — Institutional Responsibility

  // Item 13
  {
    id: 'D3-F',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'When an adult enrolls in college, they are accepting responsibility for seeing it through. Institutions provide the curriculum, the faculty, and the credential — but whether a student completes depends on choices no institution can make for them.' },
      { value: 'B', label: 'When a college recruits and enrolls a student — especially first-generation or low-income — and that student leaves with debt but no degree, the institution bears real responsibility. It took their enrollment and their money and did not deliver the outcome it promised.' },
    ],
  },

  // Dimension 6 — Structural Fairness

  // Item 14
  {
    id: 'D5-A',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Selective colleges give wealthy families so many advantages — legacy preferences, donor relationships, private school preparation, test coaching — that the admissions process is not genuinely merit-based.' },
      { value: 'B', label: 'Whatever advantages wealth provides beforehand, selective colleges still make genuine judgments about intellectual capability and academic potential — the evaluation itself is more merit-based than critics acknowledge.' },
    ],
  },

  // Item 15
  {
    id: 'D5-F',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'HBCUs and other minority-serving institutions deserve targeted federal investment because they serve communities historically excluded from mainstream higher education — a community-specific role that other institutions cannot easily substitute.' },
      { value: 'B', label: 'Federal higher education funding should be distributed based on student outcomes and institutional performance, not on the racial identity of the student population served.' },
    ],
  },

  // Dimension 7 — Community Benefit and Public Mission

  // Item 16
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

  // Item 17
  {
    id: 'D3-G',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'University research — medical breakthroughs, scientific discovery, basic science — is a public investment that benefits all Americans. Cuts to research funding hurt the country.' },
      { value: 'B', label: 'Universities receive too much federal research funding with too little accountability for how it\'s used and whether it serves national interests.' },
    ],
  },

  // Dimension 8 — Governance, Reform, and Accountability

  // Item 18
  {
    id: 'R-A',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Higher education has the capacity to identify its failures and make meaningful changes from within — faculty governance, accreditation, and shared leadership exist precisely for this kind of institutional self-correction.' },
      { value: 'B', label: 'The evidence from the past decade is that higher education cannot reform itself without significant outside pressure — from employers, students, and government demanding better outcomes and accountability for public investment.' },
    ],
  },

  // Item 19
  {
    id: 'R-B',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Thinking about higher education in the United States today, which comes closest to your view?',
    options: [
      { value: 'A', label: 'The problems are real but fixable — higher education needs reform from within.' },
      { value: 'B', label: 'Parts of the system should be replaced by fundamentally different alternatives — not just reformed.' },
    ],
  },

  // Item 20
  {
    id: 'R-D',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The most important priority is making higher education more affordable and holding institutions accountable — the four-year degree, reformed and fairly priced, remains the most reliable path to economic security for most Americans.' },
      { value: 'B', label: 'The most important priority is building serious alternatives to the four-year degree — apprenticeships, two-year credentials, stackable community college pathways — and treating these routes as equals, not consolation options for those who couldn\'t make college work.' },
    ],
  },

  // Item 21
  {
    id: 'R-G',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Public accountability for publicly funded institutions is legitimate — when colleges receive taxpayer money, elected representatives have a role in setting standards for how those resources are used.' },
      { value: 'B', label: 'Using funding threats to determine what researchers can study or instructors can teach is not accountability — it is political control of knowledge.' },
    ],
  },

  // Dimension 9 — Epistemic Authority

  // Item 23
  {
    id: 'D7-A',
    section: 'PART1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'News organizations that cover higher education — major newspapers, public radio, education-specific publications — are doing real accountability journalism: investigating failures, holding institutions to the record, producing coverage you can rely on.' },
      { value: 'B', label: 'The journalists who cover higher education mostly attended selective universities, move in university circles, and live in places where higher education works well. Their coverage reflects that world — skepticism from people whose experience doesn\'t match what those outlets report is entirely justified.' },
    ],
  },

  // ─── Part B: Demographic Items (items 24–28, indices 23–27) ──────────────────

  // Item 24
  {
    id: 'DM-A',
    section: 'DM',
    type: 'single_select',
    prompt: 'Which of the following best describes how you think of yourself politically? Choose the one that fits best.',
    options: [
      { value: '1', label: 'Progressive / Democratic Socialist' },
      { value: '2', label: 'Liberal / Mainstream Democrat' },
      { value: '3', label: 'Moderate / Center-Left' },
      { value: '4', label: 'MAGA / America First Conservative' },
      { value: '5', label: 'Mainstream / Center-Right Republican' },
      { value: '6', label: 'Socially Conservative / Faith-First' },
      { value: '7', label: 'Libertarian / Small-Government' },
      { value: '8', label: 'Independent (leaning neither party)' },
      { value: '9', label: 'Politically homeless / Mix of views' },
      { value: '10', label: 'Apolitical / Disengaged from politics' },
    ],
  },

  // Item 25
  {
    id: 'DM-B',
    section: 'DM',
    type: 'single_select',
    prompt: 'Do you currently have student loan debt from your own college education?',
    options: [
      { value: 'A', label: 'I never attended college' },
      { value: 'B', label: 'I attended college but never had student loan debt' },
      { value: 'C', label: 'I had student loan debt but have fully paid it off' },
      { value: 'D', label: 'I currently have student loan debt and have less than $25,000 remaining' },
      { value: 'E', label: 'I currently have student loan debt and have $25,000–$74,999 remaining' },
      { value: 'F', label: 'I currently have student loan debt and have $75,000 or more remaining' },
    ],
  },

  // Item 26
  {
    id: 'DM-C',
    section: 'DM',
    type: 'forced_choice',
    prompt: 'Did either of your parents or guardians complete a four-year college degree?',
    options: [
      { value: 'A', label: 'Yes — at least one parent or guardian completed a four-year degree' },
      { value: 'B', label: 'No — I was the first in my immediate family to attend or complete college' },
    ],
  },

  // Item 27
  {
    id: 'DM-F',
    section: 'DM',
    type: 'single_select',
    prompt: 'Which of the following best describes the news and information sources you trust most? Choose the one that fits best.',
    options: [
      { value: '1', label: 'NPR, CNN, and the New York Times — I rely on professional journalism with strong editorial standards and fact-checking.' },
      { value: '2', label: 'NPR and the Times, plus outlets like The Atlantic or The Guardian — rigorous reporting, but I stay skeptical of access journalism and corporate media.' },
      { value: '3', label: 'CNN and local TV, mixed with social media and what friends and family share — I get news from several places, not one main source.' },
      { value: '4', label: 'Local TV news and my social media feed — I follow stories when they catch my attention, but I\'m not a heavy news follower.' },
      { value: '5', label: 'Fox News plus CNN or the networks — I watch more than one side before making up my mind.' },
      { value: '6', label: 'Fox News, Joe Rogan, and independent online commentators — the mainstream press doesn\'t give you the full story.' },
      { value: '7', label: 'Fox News, Newsmax, and Joe Rogan, along with news from my church or faith community.' },
      { value: '8', label: 'Fox News, Newsmax, Tucker Carlson, and conservative talk radio — mainstream outlets have lost my trust.' },
    ],
  },

  // Item 28
  {
    id: 'DM-E',
    section: 'DM',
    type: 'single_select',
    prompt: 'Beyond your own experience, think about the people in your personal network who have pursued a college degree. How would you characterize the financial outcomes you\'ve observed among them?',
    options: [
      { value: 'A', label: 'Mostly better — Nearly everyone I know who got a degree is financially better off for having done so.' },
      { value: 'B', label: 'Mixed, skewed positive — More people I know came out ahead financially, but I know a few who didn\'t.' },
      { value: 'C', label: 'Mixed, skewed negative — More people I know seem financially worse off from pursuing a degree, though some did fine.' },
      { value: 'D', label: 'Mostly worse — Most people I know who pursued a degree ended up in a worse financial position than if they hadn\'t.' },
    ],
  },

  // ─── Part C: Representativeness Items (items 29–33, indices 28–32) ───────────

  // Item 29
  {
    id: 'REP-A',
    section: 'REP',
    type: 'single_select',
    prompt: 'What is your age?',
    options: [
      { value: '18-29', label: '18–29' },
      { value: '30-44', label: '30–44' },
      { value: '45-59', label: '45–59' },
      { value: '60-74', label: '60–74' },
      { value: '75-plus', label: '75 or older' },
    ],
  },

  // Item 30
  {
    id: 'REP-B',
    section: 'REP',
    type: 'single_select',
    prompt: 'What is your gender?',
    options: [
      { value: 'man', label: 'Man' },
      { value: 'woman', label: 'Woman' },
      { value: 'nonbinary', label: 'Non-binary or another gender' },
      { value: 'prefer_not', label: 'Prefer not to say' },
    ],
  },

  // Item 31
  {
    id: 'REP-C',
    section: 'REP',
    type: 'text_input',
    prompt: 'What is your current ZIP code? (5 digits — optional)',
    placeholder: 'e.g. 02134',
    inputPattern: '[0-9]{5}',
    maxLength: 5,
  },

  // Item 32
  {
    id: 'REP-D',
    section: 'REP',
    type: 'multiselect',
    prompt: 'Which of the following best describes your race or ethnicity? Select all that apply.',
    options: [
      { value: 'white', label: 'White or European American' },
      { value: 'black', label: 'Black or African American' },
      { value: 'hispanic', label: 'Hispanic or Latino (any race)' },
      { value: 'asian', label: 'Asian or Asian American' },
      { value: 'native', label: 'American Indian or Alaska Native' },
      { value: 'multiracial', label: 'Multiracial / more than one of the above' },
      { value: 'prefer_not', label: 'Prefer not to say' },
    ],
  },

  // Item 33
  {
    id: 'REP-E',
    section: 'REP',
    type: 'single_select',
    prompt: 'What is the highest level of education you have completed?',
    options: [
      { value: 'less_hs', label: 'Less than high school diploma' },
      { value: 'hs_ged', label: 'High school diploma or GED' },
      { value: 'some_college', label: 'Some college or associate\'s degree' },
      { value: 'bachelors', label: 'Bachelor\'s degree' },
      { value: 'graduate', label: 'Graduate or professional degree (master\'s, doctoral, law, medical)' },
    ],
  },
]
