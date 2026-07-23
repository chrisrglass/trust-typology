// The v22 fielding form, verbatim — 30 respondent items.
// Source: twelve-dimension-lca-questionnaire-v22-30-item-exploratory-fielding-form-2026-07.md
//
// Items Q01–Q35 (24 paired items): the LCA indicator core. Classification uses
// these 24 ONLY (v22 coding rule 2).
// G01: authorized governance of reform — asked, reflected back as "your theory
// of reform," never used for classification (external validator by design).
// C07, C01–C03, C05, DEM05: contextual covariates — asked, not used for anything
// in this prototype (no backend). C07 (evidence source) added 2026-07-18 per the
// design simulation (scratch/trust-v21-robustness/evidence_source_item_sim.py).

const PAIRED_PROMPT = 'Which statement comes closer to your view — even if neither is exactly right?'

export const SECTIONS = [
  { id: 'PART1', label: 'Your judgments of colleges and universities' },
  { id: 'G', label: 'Reform' },
  { id: 'DM', label: 'About you' },
]

export const ITEMS = [
  // ── 24 paired judgment items (indices 0–23) ────────────────────────────────
  {
    id: 'Q01', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'For many students today, college asks for more money and debt than the education is worth.' },
      { value: 'B', label: 'For most students today, what college provides is worth the money and debt it requires.' },
    ],
  },
  {
    id: 'Q02', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges now offer enough shorter, part-time, and flexible paths that working adults can earn a useful credential without giving up too much income or family time.' },
      { value: 'B', label: 'Even with part-time and online choices, college still asks working adults to give up more income and family time than many can reasonably manage.' },
    ],
  },
  {
    id: 'Q04', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Most students who begin a college program can reasonably count on finishing if they do the work and use the help available.' },
      { value: 'B', label: 'Whether a student finishes college depends on so many uncertain factors that starting a program is a bigger gamble than colleges admit.' },
    ],
  },
  {
    id: 'Q06', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Students in a college program can generally count on learning the knowledge and skills the program says it teaches.' },
      { value: 'B', label: 'What students actually learn varies so much that completing the same program does not reliably mean they gained the promised knowledge and skills.' },
    ],
  },
  {
    id: 'Q08', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Before students enroll, colleges generally make it clear what the full program will cost, including expenses students are likely to pay beyond tuition.' },
      { value: 'B', label: 'Colleges often highlight a lower first-year price while making it hard to tell what students will pay to finish the full program.' },
    ],
  },
  {
    id: 'Q09', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges often talk about careers and a better future with more certainty than the evidence supports.' },
      { value: 'B', label: 'Colleges are generally honest about how much career results vary and about the limits of what a program can promise.' },
    ],
  },
  {
    id: 'Q10', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges that promise to open doors generally make their strongest opportunities available to qualified students from low-, middle-, and high-income families.' },
      { value: 'B', label: 'Colleges talk about opening doors, but their strongest opportunities still go mostly to students who began with the greatest advantages.' },
    ],
  },
  {
    id: 'Q11', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Students with the least financial room for error are still the ones most likely to carry debt away without receiving the full benefit of a degree.' },
      { value: 'B', label: 'Colleges generally direct enough aid and completion support toward students with the least financial room for error to keep the risk from falling mostly on them.' },
    ],
  },
  {
    id: 'Q13', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: "Colleges often change how they apply a rule depending on a student's status, politics, or connections." },
      { value: 'B', label: 'Colleges generally apply the same stated rule to similar cases, even when one student or group has more influence.' },
    ],
  },
  {
    id: 'Q15', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'College leaders often change their standards when donors, politicians, activists, or other powerful groups apply enough pressure.' },
      { value: 'B', label: 'College leaders generally keep the same standards even when a powerful group dislikes the result.' },
    ],
  },
  {
    id: 'Q16', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Students can usually express an unpopular view in class without fearing a lower grade, public shaming, or being treated as a bad person.' },
      { value: 'B', label: 'Many students keep certain views to themselves because speaking honestly can bring academic or social trouble.' },
    ],
  },
  {
    id: 'Q17', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Faculty and researchers often avoid questions that could challenge campus opinion or powerful leaders because the professional cost may be too high.' },
      { value: 'B', label: 'Faculty and researchers can generally follow sound evidence wherever it leads, even when the findings upset campus opinion or powerful leaders.' },
    ],
  },
  {
    id: 'Q18', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges generally judge controversial speakers and ideas by the same intellectual and safety standards, regardless of which side they represent.' },
      { value: 'B', label: 'Colleges are more willing to restrict a speaker or idea when campus leaders dislike the viewpoint, even when the same rules would allow the other side.' },
    ],
  },
  {
    id: 'Q19', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges may allow religious or traditional groups on campus, but too often treat their beliefs as problems to manage rather than as a legitimate part of the community.' },
      { value: 'B', label: 'Religious and traditional groups are generally treated as legitimate members of campus life, even when other people strongly disagree with them.' },
    ],
  },
  {
    id: 'Q20', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Students from racial, ethnic, and cultural minorities can generally see their histories and concerns treated as a real part of the institution, not just as symbols.' },
      { value: 'B', label: 'Colleges often celebrate diversity in public while leaving some racial, ethnic, and cultural groups feeling that they remain outsiders.' },
    ],
  },
  {
    id: 'Q21', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'College success is still too often presented as leaving a working-class, rural, or non-college community and its way of life behind.' },
      { value: 'B', label: 'Students can generally succeed in college without being taught that the family or community they came from matters less.' },
    ],
  },
  {
    id: 'Q23', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges often talk about serving their communities but protect prestige, budgets, and internal interests when community needs become costly.' },
      { value: 'B', label: 'Colleges generally back up their public-service language with programs, research, and decisions that respond to real community needs.' },
    ],
  },
  {
    id: 'Q24', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Public funding, tax benefits, and freedom from political control generally produce benefits for society that go well beyond the benefits received by colleges and graduates themselves.' },
      { value: 'B', label: "Higher education's public privileges now do more to protect institutions, professionals, and elite advantage than to benefit the wider public." },
    ],
  },
  {
    id: 'Q25', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: "A college degree still relies too much on the institution's name and too little on clear proof of what graduates know and can do." },
      { value: 'B', label: 'A college degree generally rests on standards strong enough to be trusted as evidence of what graduates know and can do.' },
    ],
  },
  {
    id: 'Q27', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'University leaders too often speak for the whole institution on public disputes where the university has no special authority.' },
      { value: 'B', label: 'University leaders generally speak for the institution only when they can explain why the university has a sound reason to take an official position.' },
    ],
  },
  {
    id: 'Q30', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Colleges can usually identify a failing program and make hard changes even when jobs, budgets, or prestige are at stake.' },
      { value: 'B', label: 'Colleges usually protect a failing program until outside pressure makes keeping it more costly than changing it.' },
    ],
  },
  {
    id: 'Q32', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Even when reform begins under outside pressure, colleges can learn from it and keep the change working after the pressure ends.' },
      { value: 'B', label: 'Colleges often comply while pressure is high and return to old habits once attention and threats fade.' },
    ],
  },
  {
    id: 'Q33', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'People harmed by a college may receive a meeting or explanation, but too often cannot obtain an independent review with power to change the result.' },
      { value: 'B', label: 'People harmed by a college generally can obtain reasons and a review with enough independence and power to correct a wrong result.' },
    ],
  },
  {
    id: 'Q35', section: 'PART1', type: 'forced_choice', prompt: PAIRED_PROMPT,
    options: [
      { value: 'A', label: 'Students and members of the public can submit complaints, but those complaints too rarely trigger an investigation, remedy, or meaningful consequence.' },
      { value: 'B', label: 'Complaint processes generally give students and the public a real way to trigger investigation and action when a college fails.' },
    ],
  },

  // ── G01: authorized governance of reform (index 24) ────────────────────────
  {
    id: 'G01', section: 'G', type: 'single_select',
    prompt: 'Think about a college that repeatedly breaks its promises to students and the public. If it needs major reform, which approach comes closest to your view?',
    options: [
      { value: 'A', label: 'College-led reform, independently reviewed. The board, leaders, and faculty make the plan; independent reviewers check the results.' },
      { value: 'B', label: 'Public rules, but academic control stays local. Government sets rules on cost, student safety, and results; the college keeps control of teaching and research.' },
      { value: 'C', label: 'Government — federal and state — should take charge when a college fails. Federal and state governments can require changes, replace leaders, and cut public money or approval.' },
      { value: 'D', label: 'Fund better paths and let this college shrink or close. Put resources into alternatives, such as community college or apprenticeships, instead of trying to save it.' },
      { value: 'E', label: 'The people affected should share formal decision power. Students, faculty, staff, and community members should help decide major reforms — not just give advice — with more control held locally and less intervention from Washington.' },
    ],
  },

  // ── Contextual covariates (indices 25–29; never used for classification) ───
  {
    id: 'C07', section: 'DM', type: 'single_select',
    prompt: 'Thinking back to the questions about colleges: what did you draw on most when answering?',
    options: [
      { value: 'A', label: 'My own experience at a college' },
      { value: 'B', label: 'The experiences of family and friends' },
      { value: 'C', label: 'Colleges I know in my community' },
      { value: 'D', label: 'What I have read, seen, or heard' },
      { value: 'E', label: 'I have not had much contact with colleges' },
    ],
  },
  {
    id: 'C01', section: 'DM', type: 'single_select',
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
  {
    id: 'C02', section: 'DM', type: 'single_select',
    prompt: 'Which best describes your own student-loan situation?',
    options: [
      { value: 'A', label: 'No debt — never attended college' },
      { value: 'B', label: 'No debt — attended college but never borrowed' },
      { value: 'C', label: 'No debt — borrowed in the past but have paid it off' },
      { value: 'D', label: 'Less than $25K remaining' },
      { value: 'E', label: '$25K–$74,999 remaining' },
      { value: 'F', label: '$75K or more remaining' },
    ],
  },
  {
    id: 'C03', section: 'DM', type: 'single_select',
    prompt: 'Did either of your parents or guardians complete a four-year college degree?',
    options: [
      { value: 'A', label: 'Yes — at least one parent or guardian completed a four-year degree' },
      { value: 'B', label: 'No — neither parent nor guardian completed a four-year degree' },
      { value: 'C', label: 'Not sure' },
      { value: 'D', label: 'Prefer not to answer' },
    ],
  },
  {
    id: 'C05', section: 'DM', type: 'single_select',
    prompt: 'Beyond your own experience, think about the people in your personal network who have pursued a college degree. How would you characterize the financial outcomes you have observed among them?',
    options: [
      { value: 'A', label: 'Mostly better — Nearly everyone I know who got a degree is financially better off for having done so' },
      { value: 'B', label: 'Mixed, skewed positive — More people I know came out ahead financially, but I know a few who did not' },
      { value: 'C', label: 'Mixed, skewed negative — More people I know seem financially worse off from pursuing a degree, though some did fine' },
      { value: 'D', label: 'Mostly worse — Most people I know who pursued a degree ended up in a worse financial position than if they had not' },
    ],
  },
  {
    id: 'DEM05', section: 'DM', type: 'single_select',
    prompt: 'What is the highest level of education you have completed?',
    options: [
      { value: '1', label: 'Less than high school diploma' },
      { value: '2', label: 'High school diploma or GED' },
      { value: '3', label: 'Some college, but no degree' },
      { value: '4', label: 'Associate degree, technical certificate, or trade credential' },
      { value: '5', label: 'Bachelor’s degree' },
      { value: '6', label: 'Graduate or professional degree (master’s, doctoral, law, medical)' },
      { value: '7', label: 'Prefer not to answer' },
    ],
  },
]

// The 24 LCA indicator ids, in fielding order.
export const LCA_ITEM_IDS = ITEMS.filter(i => i.section === 'PART1').map(i => i.id)
