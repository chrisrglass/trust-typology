// Trust Project Survey Instrument — 47 items (08-instrument-fielding-ready.md)
// Clustering battery: D1–D6, G, R, FA (40 items)
// Covariates: EX-A through EX-G (7 items, not used in clustering)

export const SECTIONS = [
  {
    id: 'D1',
    title: 'Economic Promise',
    description: 'Does higher education deliver on its core financial promise?',
  },
  {
    id: 'D2',
    title: 'Intellectual Mission',
    description: 'Does higher education deliver genuine intellectual formation?',
  },
  {
    id: 'D3',
    title: 'Institutional Integrity',
    description: 'Do higher education institutions operate honestly and in the interests of students?',
  },
  {
    id: 'D4',
    title: 'Cultural and Values Alignment',
    description: 'Does higher education welcome people with diverse values and backgrounds?',
  },
  {
    id: 'D5',
    title: 'Access and Fairness',
    description: 'Is higher education an honest meritocracy, or does it reproduce existing advantages?',
  },
  {
    id: 'D6',
    title: 'Community Embeddedness',
    description: 'Is higher education a genuine partner in local community life?',
  },
  {
    id: 'G',
    title: 'Who Should Universities Serve?',
    description: 'Does higher education have a global mission, a national one, or something more conditional?',
  },
  {
    id: 'R',
    title: 'Reformability',
    description: 'Can higher education reform itself, or does meaningful change require outside pressure?',
  },
  {
    id: 'FA',
    title: 'Faculty and Leadership',
    description: 'How much confidence do you have in different parts of higher education?',
  },
  {
    id: 'EX',
    title: 'About You',
    description: 'A few questions about your own experience with higher education.',
  },
]

export const ITEMS = [
  // ─── D1 Economic Promise ───────────────────────────────────────────────────
  {
    id: 'D1-A',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'For most people, the cost of a college education today is simply too high relative to what graduates actually get in return.' },
      { value: 'B', label: 'For most people, a college education is still worth the cost, even at today\'s prices.' },
    ],
  },
  {
    id: 'D1-B',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Colleges are generally honest about what graduates can expect financially — graduation rates, typical debt, and how graduates actually fare in the job market.' },
      { value: 'B', label: 'Colleges actively market the best-case outcome while hiding or downplaying information about dropout rates, typical debt, and how graduates actually fare.' },
    ],
  },
  {
    id: 'D1-C',
    section: 'D1',
    type: 'scale_4',
    prompt: 'How confident are you that earning a college degree improves most graduates\' long-term financial situation?',
    options: [
      { value: '1', label: 'Very confident' },
      { value: '2', label: 'Somewhat confident' },
      { value: '3', label: 'Not too confident' },
      { value: '4', label: 'Not at all confident' },
    ],
  },
  {
    id: 'D1-D1',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The rise of artificial intelligence makes it harder than ever to predict which careers will still exist by the time a student graduates.' },
      { value: 'B', label: 'While AI will change many jobs, college graduates will remain well-positioned to adapt because their training develops skills technology cannot easily replace.' },
    ],
  },
  {
    id: 'D1-D2',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Most colleges and universities are adapting their programs thoughtfully to remain relevant in an economy increasingly shaped by AI.' },
      { value: 'B', label: 'Most colleges and universities are still preparing students for a world that no longer exists — their programs lag behind what the job market actually requires.' },
    ],
  },
  {
    id: 'D1-E',
    section: 'D1',
    type: 'options_4',
    prompt: 'If a young person you care about asked whether to pursue a four-year college degree, what would you tell them?',
    options: [
      { value: 'A', label: 'Go — the degree is worth the investment.' },
      { value: 'B', label: 'Go, but only if you can do it without taking on significant debt, or only for certain fields.' },
      { value: 'C', label: 'Consider vocational training, an apprenticeship, or a two-year credential — that path may be a better fit and deserves the same respect.' },
      { value: 'D', label: 'Skip college — the risk and cost are not worth it for most people.' },
    ],
  },
  {
    id: 'D1-F',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Student debt is a serious constraint that shapes major life decisions for many graduates — where they live, whether they can buy a home, start a family, or change careers — for years or even decades after they leave school.' },
      { value: 'B', label: 'Student debt is a real burden, but most graduates are able to manage it over time, and it does not fundamentally limit their life options.' },
    ],
  },
  {
    id: 'D1-G',
    section: 'D1',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Most employers require a college degree for jobs that genuinely need college-level skills and knowledge.' },
      { value: 'B', label: 'Many employers require a college degree as a screening tool, even for jobs that could be done equally well by someone without a degree — driving up the cost of entry into the job market unnecessarily.' },
    ],
  },

  // ─── D2 Intellectual Mission ───────────────────────────────────────────────
  {
    id: 'D2-A',
    section: 'D2',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Academic standards at most colleges and universities remain high — a degree still represents serious learning and intellectual achievement.' },
      { value: 'B', label: 'Academic standards at most colleges and universities have declined to the point where a degree no longer means what it once did.' },
    ],
  },
  {
    id: 'D2-B',
    section: 'D2',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Campus culture at most colleges and universities allows for a wide range of viewpoints and genuine intellectual debate, including on controversial questions.' },
      { value: 'B', label: 'There is a dominant intellectual climate at most colleges and universities that discourages certain perspectives and makes honest debate on some topics difficult.' },
    ],
  },
  {
    id: 'D2-C',
    section: 'D2',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'College gives students genuine intellectual tools — the ability to think carefully, evaluate evidence, and hold complex questions — that they carry for the rest of their lives.' },
      { value: 'B', label: 'What most students actually get from college is a credential and some skills for a job. The deeper intellectual formation colleges claim to offer rarely happens in practice.' },
    ],
  },
  {
    id: 'D2-D',
    section: 'D2',
    type: 'scale_4',
    prompt: 'How much of a problem do you think the following is at colleges and universities today: students submitting AI-generated work as their own?',
    options: [
      { value: '1', label: 'A major problem' },
      { value: '2', label: 'A moderate problem' },
      { value: '3', label: 'A minor problem' },
      { value: '4', label: 'Not a problem' },
    ],
  },
  {
    id: 'D2-E',
    section: 'D2',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Artificial intelligence will mostly help students learn more effectively and prepare them better for the world they will actually live in.' },
      { value: 'B', label: 'Artificial intelligence is making it harder for students to develop the independent thinking and judgment that a real education is supposed to build.' },
    ],
  },
  {
    id: 'D2-F',
    section: 'D2',
    type: 'options_3',
    instruction: 'For this question, choose the option that comes closest to your view.',
    prompt: 'Thinking about what higher education should be primarily for — what do you think its most important purpose is?',
    options: [
      { value: 'A', label: 'Developing students\' capacity for reasoning, civic participation, and meaningful contribution to their communities.' },
      { value: 'B', label: 'Transmitting knowledge and forming students within a moral or spiritual tradition that gives that knowledge its deeper meaning.' },
      { value: 'C', label: 'Preparing students with the skills and credentials they need for productive careers and economic participation.' },
    ],
  },

  // ─── D3 Institutional Integrity ────────────────────────────────────────────
  {
    id: 'D3-A',
    section: 'D3',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'College and university leaders generally make decisions based on what is best for students and for learning.' },
      { value: 'B', label: 'College and university leaders primarily protect the institution\'s own reputation and financial interests, even when that conflicts with what is best for students.' },
    ],
  },
  {
    id: 'D3-B',
    section: 'D3',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The growth in college administrative staff and support services has genuinely improved the experience for students.' },
      { value: 'B', label: 'Colleges have grown their administrative bureaucracies in ways that drive up costs without improving education.' },
    ],
  },
  {
    id: 'D3-C',
    section: 'D3',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The values that colleges publicly profess — about student welfare, honest inquiry, and equal opportunity — are genuinely reflected in the way they operate.' },
      { value: 'B', label: 'There is a large gap between what colleges say they stand for and how they actually behave.' },
    ],
  },
  {
    id: 'D3-D',
    section: 'D3',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'When colleges face a controversy or crisis — a protest, a scandal, a public conflict — they handle it with honesty and transparency.' },
      { value: 'B', label: 'When colleges face a controversy or crisis, they close ranks, protect the institution, and avoid saying anything that might create legal or reputational risk.' },
    ],
  },
  {
    id: 'D3-E',
    section: 'D3',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Colleges and universities are adopting AI tools thoughtfully, with appropriate attention to fairness and the interests of students.' },
      { value: 'B', label: 'Colleges and universities are deploying AI tools primarily for cost savings and operational efficiency, without adequate attention to how these tools affect students — especially students from less-advantaged backgrounds.' },
    ],
  },

  // ─── D4 Cultural and Values Alignment ──────────────────────────────────────
  {
    id: 'D4-A',
    section: 'D4',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Students with strong religious faith are genuinely welcomed and respected at most colleges and universities.' },
      { value: 'B', label: 'Students with strong religious faith often find that their beliefs are treated as unwelcome or incompatible with serious academic and intellectual life at most colleges and universities.' },
    ],
  },
  {
    id: 'D4-B',
    section: 'D4',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'College is a place where students from working-class and rural backgrounds can thrive without having to abandon who they are or where they came from.' },
      { value: 'B', label: 'Succeeding at college often requires working-class and rural students to adopt attitudes and ways of thinking that put them at odds with their home communities.' },
    ],
  },
  {
    id: 'D4-C',
    section: 'D4',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Most students at most colleges feel free to share their genuine opinions in class or on campus, even on politically controversial topics.' },
      { value: 'B', label: 'Many students at most colleges feel they have to keep certain opinions to themselves to avoid social or academic consequences.' },
    ],
  },
  {
    id: 'D4-D2',
    section: 'D4',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'AI tools being adopted by higher education are developed to serve students with diverse beliefs, value systems, and cultural backgrounds.' },
      { value: 'B', label: 'AI tools being adopted by higher education encode assumptions of a secular, Western worldview and do not adequately account for students with religious or culturally traditional backgrounds.' },
    ],
  },

  // ─── D5 Access and Fairness ─────────────────────────────────────────────────
  {
    id: 'D5-A',
    section: 'D5',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Highly selective colleges give talented students a fair shot regardless of their family\'s wealth or connections.' },
      { value: 'B', label: 'Highly selective colleges are still tilted heavily toward students from wealthy and well-connected families, even when less-privileged students have equal qualifications.' },
    ],
  },
  {
    id: 'D5-B',
    section: 'D5',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Higher education today is a reliable path to upward mobility for people from low-income families who work hard and make smart choices.' },
      { value: 'B', label: 'For people from low-income families, the risks of higher education — debt, non-completion, uncertain job prospects — often outweigh the potential benefits.' },
    ],
  },
  {
    id: 'D5-C1',
    section: 'D5',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Colleges and universities make a genuine effort to recruit and admit first-generation and low-income students.' },
      { value: 'B', label: 'Colleges and universities say they are committed to access, but their actual admissions and recruitment practices still heavily favor students from more advantaged families.' },
    ],
  },
  {
    id: 'D5-C2',
    section: 'D5',
    type: 'forced_choice',
    preface: 'Now thinking about what happens after students enroll:',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'When colleges admit first-generation and low-income students, they invest seriously in the advising, financial aid from year to year, and completion support those students need to graduate.' },
      { value: 'B', label: 'Colleges admit first-generation and low-income students but leave them without the support they actually need to finish — setting them up to take on debt without earning the degree.' },
    ],
  },
  {
    id: 'D5-D',
    section: 'D5',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'A college degree remains the most reliable tool we have for helping people from disadvantaged backgrounds reach economic stability.' },
      { value: 'B', label: 'Higher education has become so expensive and unequal that it now reinforces class divisions more than it overcomes them.' },
    ],
  },

  // ─── D6 Community Embeddedness ──────────────────────────────────────────────
  {
    id: 'D6-A',
    section: 'D6',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The college or university that serves my area is a genuine part of the community — it cares about what happens here and contributes to local life.' },
      { value: 'B', label: 'The college or university that serves my area is focused on its own priorities and doesn\'t make much difference to the lives of ordinary people in the community.' },
    ],
  },
  {
    id: 'D6-B',
    section: 'D6',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'The research and graduates that colleges and universities produce make a concrete difference to people in communities like mine.' },
      { value: 'B', label: 'The benefits of what colleges do — research breakthroughs, highly trained graduates — mostly go to already-advantaged people and places, not to communities like mine.' },
    ],
  },
  {
    id: 'D6-C',
    section: 'D6',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'When I think about higher education, I mostly trust community colleges and regional universities that serve local students.' },
      { value: 'B', label: 'I have roughly the same level of confidence in community colleges, regional universities, and large research universities.' },
    ],
  },
  {
    id: 'D6-D',
    section: 'D6',
    type: 'scale_4_plus',
    prompt: 'How much do you think the college or university you know best genuinely looks out for the welfare of the students it enrolls — making sure they have what they need to succeed, not just to enroll?',
    options: [
      { value: '1', label: 'A great deal' },
      { value: '2', label: 'Some' },
      { value: '3', label: 'Not much' },
      { value: '4', label: 'Not at all' },
      { value: '5', label: "I don't know any college or university well enough to say" },
    ],
  },

  // ─── G Who Should Universities Serve? ──────────────────────────────────────
  {
    id: 'G1',
    section: 'G',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'American universities are stronger because they attract the best students, scholars, and ideas from around the world — that openness makes them better institutions and strengthens American research, the economy, and global standing.' },
      { value: 'B', label: 'American universities should focus first on the students and communities that built and fund them — their job is developing American talent and serving American society, not chasing international prestige.' },
    ],
  },
  {
    id: 'G2',
    section: 'G',
    type: 'options_4',
    prompt: 'Thinking about international students at American colleges and universities, which comes closest to your view?',
    options: [
      { value: 'A', label: 'International students and scholars make American universities more competitive, enrich campus life, and contribute to research and innovation that benefits the broader economy.' },
      { value: 'B', label: 'Universities have expanded international enrollment primarily to increase tuition revenue and improve their global rankings — at the cost of genuine access for domestic students, especially those from low-income and working-class families, and at the expense of their academic integrity.' },
      { value: 'C', label: 'American universities should put qualified domestic applicants first — students from abroad are taking seats that should go to Americans, and institutions that receive public support and tax exemptions owe their first obligation to the people who fund them.' },
      { value: 'D', label: 'International enrollment can strengthen universities, but growth should be contingent on demonstrating that domestic low-income and first-generation students are not losing access to seats or financial aid as a result.' },
    ],
  },
  {
    id: 'G3',
    section: 'G',
    type: 'options_4',
    prompt: 'Thinking about foreign government involvement in American higher education, which comes closest to your view?',
    options: [
      { value: 'A', label: 'The benefits of international research collaboration and global scholarly exchange outweigh the risks — universities should manage security concerns through proper vetting without broadly restricting foreign participation.' },
      { value: 'B', label: 'Foreign government funding, particularly from authoritarian states, has compromised the independence and safety of American campuses — universities have been too slow to address threats to academic freedom, to Jewish and Christian students, and to sensitive research areas.' },
      { value: 'C', label: 'American universities should significantly restrict research partnerships and enrollment from countries whose governments pose active security or ideological threats to the United States — national security comes before international prestige.' },
      { value: 'D', label: 'The federal government, not universities themselves, should set binding rules on foreign funding, research partnerships, and the enrollment of students from adversary nations — universities cannot be trusted to self-regulate on national security.' },
    ],
  },

  // ─── Reformability ─────────────────────────────────────────────────────────
  {
    id: 'R-A1',
    section: 'R',
    type: 'forced_choice',
    prompt: 'Which comes closer to your view — even if neither is exactly right?',
    options: [
      { value: 'A', label: 'Higher education institutions are capable of identifying their own problems and making meaningful changes when they need to.' },
      { value: 'B', label: 'Higher education institutions are not capable of meaningful self-reform — the people and structures that would need to change are the same ones doing the diagnosing.' },
    ],
  },
  {
    id: 'R-A2',
    section: 'R',
    type: 'options_4',
    prompt: 'Thinking about what is most likely to push higher education to improve, which comes closest to your view?',
    options: [
      { value: 'A', label: 'Change will most likely come from strong internal leadership — presidents, provosts, and faculty who push their own institutions to do better.' },
      { value: 'B', label: 'Change will most likely come from outside — through government accountability, public pressure, and organized political demand for better outcomes.' },
      { value: 'C', label: 'Meaningful change will require both strong internal leadership and outside pressure working at the same time.' },
      { value: 'D', label: 'The reform question may be beside the point — new models of credentialing, training, and education will ultimately displace institutions that cannot change.' },
    ],
  },
  {
    id: 'R-B',
    section: 'R',
    type: 'options_3',
    instruction: 'For this question, choose the option that comes closest to your view.',
    prompt: 'Thinking about the problems facing higher education in the United States today, which comes closest to your view?',
    options: [
      { value: 'A', label: 'The problems are serious but fixable — higher education needs significant reform from within.' },
      { value: 'B', label: 'Parts of the system should be replaced by fundamentally different alternatives — not just reformed.' },
      { value: 'C', label: 'The challenges vary widely — some institutions are in serious trouble, others are doing reasonably well; there is no single problem requiring a single solution.' },
    ],
  },
  {
    id: 'R-C',
    section: 'R',
    type: 'scale_4',
    prompt: 'How confident are you that higher education in the United States will significantly improve over the next ten years?',
    options: [
      { value: '1', label: 'Very confident' },
      { value: '2', label: 'Somewhat confident' },
      { value: '3', label: 'Not too confident' },
      { value: '4', label: 'Not at all confident' },
    ],
  },

  // ─── FA Faculty vs. Administrator ──────────────────────────────────────────
  {
    id: 'FA-A',
    section: 'FA',
    type: 'matrix',
    prompt: 'How much confidence do you have that each of the following is acting in the genuine interests of students?',
    rows: [
      { id: 'faculty', label: 'College and university faculty' },
      { id: 'administrators', label: 'College and university administrators and senior leadership' },
      { id: 'trustees', label: 'College and university boards of trustees' },
    ],
    options: [
      { value: '1', label: 'A lot' },
      { value: '2', label: 'Some' },
      { value: '3', label: 'Not much' },
      { value: '4', label: 'None at all' },
    ],
  },

  // ─── EX Covariates ─────────────────────────────────────────────────────────
  {
    id: 'EX-A',
    section: 'EX',
    type: 'yes_no',
    prompt: 'Do you personally know someone whose life was significantly improved by the education they received at college?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'EX-B',
    section: 'EX',
    type: 'yes_no',
    prompt: 'Do you personally know someone whose financial situation was made worse — not better — by pursuing a college degree?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
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
  {
    id: 'EX-D',
    section: 'EX',
    type: 'yes_no_depends',
    prompt: 'Would you support increased public funding for colleges and universities in your state, even if it might mean higher taxes?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'depends', label: 'It depends' },
    ],
  },
  {
    id: 'EX-E',
    section: 'EX',
    type: 'options_4',
    prompt: 'How much has your own direct experience with colleges and universities shaped your current views?',
    options: [
      { value: '1', label: 'A great deal' },
      { value: '2', label: 'Somewhat' },
      { value: '3', label: 'Not much' },
      { value: '4', label: 'My views are based mostly on what I\'ve read or heard rather than direct experience' },
    ],
  },
  {
    id: 'EX-F',
    section: 'EX',
    type: 'multiselect',
    prompt: 'Which types of colleges, universities, or educational programs have you or your children had direct experience with — through enrollment, attendance, or completion? (Select all that apply)',
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
  {
    id: 'EX-G',
    section: 'EX',
    type: 'single_select',
    prompt: 'Thinking about your own education: which best describes your situation?',
    options: [
      { value: 'bachelors_plus', label: 'I completed a four-year college degree or higher (bachelor\'s, master\'s, professional, or doctoral degree)' },
      { value: 'associates', label: 'I completed a two-year or associate degree' },
      { value: 'vocational', label: 'I completed a vocational or technical certificate program' },
      { value: 'some_college', label: 'I attended some college but did not complete a degree (including if you are currently enrolled)' },
      { value: 'no_college', label: 'I have not attended college' },
    ],
  },
]

// Items used in clustering (not covariates)
export const CLUSTERING_ITEMS = ITEMS.filter(item => item.section !== 'EX')

// Covariates (not used in clustering)
export const COVARIATE_ITEMS = ITEMS.filter(item => item.section === 'EX')
