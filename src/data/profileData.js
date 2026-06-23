// Per-item probabilities = P(choosing option A)
// National averages = weighted sum across class probabilities and prevalence

export const NATIONAL_AVERAGES = {
  'D5-D':  0.38,  // degree as reliable ladder (A) vs. reinforces class divisions (B)
  'D3-G':  0.42,  // research serves public good (A) vs. benefits elites (B)
  'D2-C':  0.50,  // genuine intellectual formation (A) vs. credential only (B)
  'D2-H':  0.58,  // AI is ideologically neutral (A) vs. excludes religious traditions (B)
  'D1-D1': 0.64,  // AI eliminating entry-level jobs (A) vs. graduates will adapt (B)
  'D2-G':  0.28,  // AI builds genuine competency (A) vs. outsources thinking (B)
  'D4-E':  0.51,  // colleges honor where students come from (A) vs. must conform (B)
  'D3-F':  0.38,  // non-completion = student not prepared (A) vs. institution failed (B)
  'D5-A':  0.69,  // admissions favors wealth over merit (A) vs. fair evaluation (B)
  'D6-A':  0.43,  // local college genuinely serves the community (A) vs. serves others (B)
  'D7-A':  0.51,  // news media covers higher education honestly (A) vs. out of touch (B)
  'R-A':   0.39,  // higher education can fix its own problems (A) vs. cannot (B)
  'R-G':   0.41,  // government oversight is legitimate accountability (A) vs. political control (B)
  'D1-H':  0.57,  // loans should support callings, not just careers (A) vs. career-aligned only (B)
  'D2-B':  0.49,  // faculty should challenge students' assumptions (A) vs. stay in lane (B)
  'D2-F':  0.50,  // general education: foundational texts (A) vs. transferable skills (B)
}

// Verbatim option texts from the quiz instrument (both poles) — kept in sync with instrument.js
export const ITEM_OPTIONS = {
  'D5-D': {
    a: 'A college degree remains the most reliable route to economic stability for people from disadvantaged backgrounds — the returns are real, even if access is unequal.',
    b: 'Higher education has become so expensive and unequal that it reinforces class divisions more than it overcomes them — the system benefits those who are already advantaged.',
  },
  'D3-G': {
    a: "Federal research funding to universities is well-spent — it produces medical breakthroughs, scientific advances, and basic knowledge that benefits the country in ways markets wouldn't generate on their own.",
    b: 'Universities receive far more federal research funding than the results justify, with too little accountability for whether the work serves national interests or primarily academic careers.',
  },
  'D2-C': {
    a: 'College gives students genuine intellectual tools — the ability to think carefully, evaluate evidence, and hold complex questions — that they carry for the rest of their lives.',
    b: "What most students actually get from college is a credential and some skills for a job. The deeper intellectual formation colleges claim to offer rarely happens in practice.",
  },
  'D2-H': {
    a: "AI tools, like any text or method, carry the assumptions of those who built them — but that is precisely what a liberal education teaches students to recognize and reason through. Critical engagement with AI's assumptions is not a reason to avoid it; it is what education looks like.",
    b: 'AI systems adopted by colleges were built primarily within secular, Western, market-driven frameworks. For students whose intellectual formation is rooted in faith traditions, non-Western philosophies, or working-class community knowledge, these systems are not neutral — they represent a default that marginalizes their ways of knowing.',
  },
  'D1-D1': {
    a: "When AI transforms the jobs graduates were prepared for, that's a sign higher education needs to fundamentally change what it teaches and how — the current degree structure is falling behind reality.",
    b: 'AI changes specific job descriptions, not the underlying value of a college education — graduates with strong problem-solving and analytical skills adapt as they always have.',
  },
  'D2-G': {
    a: "Whether students use AI or not matters less than the quality of their thinking. Employers need graduates who can work with AI tools intelligently — learning with AI develops exactly that skill for the world students are entering.",
    b: "Reasoning through hard problems without assistance — holding a complex question in mind, struggling with it, and arriving at your own understanding — is what college is supposed to build. AI doesn't develop that capacity; it substitutes for it.",
  },
  'D4-E': {
    a: "Colleges genuinely support students from working-class, rural, and faith-community backgrounds — they don't have to hide where they come from or change how they talk, think, or carry themselves to be taken seriously.",
    b: 'To be fully taken seriously at most colleges — as a person and an intellect, not just a passing student — those from working-class, rural, or faith-community backgrounds have to present themselves in ways foreign to their home communities.',
  },
  'D3-F': {
    a: "Even for first-generation and low-income students, enrolling in college means accepting responsibility for seeing it through. Institutions create the opportunity — what students do with it depends on choices no institution can make for them.",
    b: 'When a college recruits and enrolls a student — especially first-generation or low-income — and that student leaves with debt but no degree, the institution bears real responsibility. It took their enrollment and their money and did not deliver the outcome it promised.',
  },
  'D5-A': {
    a: 'Selective colleges give wealthy families so many advantages — legacy preferences, donor relationships, private school preparation, test coaching — that the admissions process is not genuinely merit-based.',
    b: 'Selective colleges make genuine judgments about intellectual capability and academic potential — the core evaluation is merit-based, whatever advantages wealth provides in preparation beforehand.',
  },
  'D6-A': {
    a: 'The college or university that serves my area is a genuine part of the community — it cares about what happens here and contributes to local life.',
    b: "The college or university that serves my area is focused on its own priorities and doesn't make much difference to the lives of ordinary people in the community.",
  },
  'D7-A': {
    a: "Journalists who cover higher education do real accountability journalism — they investigate failures, draw on diverse sources, and produce reporting you can fact-check and rely on, regardless of where they went to college.",
    b: "Journalists who cover higher education mostly come from the same selective universities and milieu as the people they cover — their reporting reflects that world, and readers whose experience doesn't match what those outlets say are right to be skeptical.",
  },
  'R-A': {
    a: 'Higher education does reform itself — faculty governance, accreditation, and shared leadership have produced real changes in response to criticism, even if the pace is slower than critics want.',
    b: 'The evidence from the past decade is that higher education cannot reform itself without significant outside pressure — from employers, students, and government demanding better outcomes and accountability for public investment.',
  },
  'R-G': {
    a: "When colleges receive federal funding, elected representatives have a legitimate role in shaping what gets studied and taught — that's what accountability to the public means.",
    b: "Using funding to control what researchers can study or instructors can teach isn't accountability — it's the government determining what counts as knowledge.",
  },
  'D1-H': {
    a: "Federal student loans should be available for any accredited program — including ministry, social work, teaching, and the arts — even when graduates earn less than average. A democracy needs people who pursue these callings, and it shouldn't make that choice financially impossible.",
    b: "Federal student loans should be restricted to programs where graduates are likely to earn enough to repay what they borrowed. Taxpayers shouldn't subsidize programs with poor financial outcomes.",
  },
  'D2-B': {
    a: 'Faculty at most colleges and universities retain meaningful freedom to pursue research questions that challenge prevailing assumptions — the independent inquiry that makes academic knowledge valuable is still protected at most institutions.',
    b: 'At most colleges and universities, research directions that challenge prevailing assumptions face real institutional pressure — hiring, funding, and publication decisions push inquiry in directions that are safe rather than generative.',
  },
  'D2-F': {
    a: 'General education should require every student to seriously engage with foundational works — from Western philosophy, world religious traditions, or other intellectual canons. There is no substitute for wrestling with the ideas that have shaped how humans live together.',
    b: 'General education should focus on transferable skills — writing clearly, reasoning quantitatively, thinking critically — rather than mandating any particular texts or traditions. Students should learn how to think; what they read to get there should not be prescribed.',
  },
}

// Item label for the A pole (fallback if ITEM_OPTIONS not found)
export const ITEM_LABELS = {
  'D5-D':  '"The degree is a reliable path to a better life, even for students from low-income families."',
  'D3-G':  '"University research genuinely serves the public interest."',
  'D2-C':  '"College provides real intellectual formation — it changed how I think, not just what I know."',
  'D2-H':  '"AI systems are ideologically neutral. They don\'t favor any particular worldview."',
  'D1-D1': '"AI is eliminating the entry-level jobs that college graduates have traditionally relied on."',
  'D2-G':  '"Using AI tools in coursework develops genuine competency — students learn more, not less."',
  'D4-E':  '"Colleges genuinely honor where students come from — their backgrounds, communities, and values."',
  'D3-F':  '"When students don\'t finish college, it\'s usually because they weren\'t ready for college-level work."',
  'D5-A':  '"Selective college admissions rewards wealth and connections more than it rewards merit."',
  'D6-A':  '"The college or university nearest most people genuinely serves the people and communities around it."',
  'D7-A':  '"Journalists who cover higher education do so honestly, without significant bias."',
  'R-A':   '"Higher education has the internal capacity to fix its own problems without outside pressure."',
  'R-G':   '"Government oversight of higher education is legitimate democratic accountability."',
  'D1-H':  '"Federal loan programs should support studies aligned with callings — ministry, social work, the arts — not just career pathways."',
  'D2-B':  '"College faculty should be free to challenge students\' assumptions — including their political and religious ones."',
  'D2-F':  '"General education requirements should center on foundational texts from the Western tradition."',
}

export const PROFILE_DATA = {

  'university-defenders': {
    expandedDescription: [
      `The University Defenders hold the most comprehensive trust in higher education of any group. They believe the degree delivers — that it reliably lifts families across generations, that research serves the people who fund it, that colleges genuinely honor the students they admit, and that the press covers these institutions with reasonable honesty. This is not naivety: it is a coherent worldview in which institutional performance matches institutional promise.`,
      `Their views are shaped by direct experience — as faculty members, administrators, alumni, and research professionals who have seen the institution at its best. They read mainstream newspapers, Inside Higher Ed, and policy reporting from professional associations tracking threats to research funding and academic freedom; they weigh institutional experience heavily and tend to distrust viral social media narratives about campus life. For them, trust in higher education is inseparable from trust in science and independent civic institutions more broadly. This is why their support is comprehensive — they defend not just the credential, but the research enterprise, the cultural welcome colleges extend to students from different backgrounds, and the institution's capacity for honest self-correction.`,
      `On reform, they are the most internally confident group in the typology. They believe the institution has the capacity to correct its own course without external compulsion — that the mechanisms of peer review, shared governance, and public accountability are sufficient to address what's wrong. This confidence is load-bearing: it connects their trust in mission to their opposition to government intervention. If the institution can self-reform, then legislative control is not just unnecessary — it's a threat to the very process by which the problems get addressed.`,
    ],
    topTrustIssues: {
      issues: `The University Defenders's concerns are directed outward — at what is being done to institutions they trust, not at failures from within. Their specific worries include the Trump administration's cancellation of more than $11 billion in NIH and NSF research grants as a political lever, the use of Title VI enforcement and DEI executive orders to coerce institutional governance, the administration's intervention in Columbia University's internal operations as an announced template for broader federal control of campus policy, FIRE's 2025 finding that one in three undergraduates report fearing to express their political views on campus, the structural dependence of research universities on federal grants that makes academic freedom contingent rather than inherent, and the U.S. campus academic freedom ranking now falling below most peer democracies on the Academic Freedom Index published by Scholars at Risk.`,
      mainConcerns: [
        { text: 'Governance, Reform, and Accountability — they support reform from within and strongly oppose government content control over curriculum and research', dimId: 'governance-accountability' },
        { text: 'Community Benefit and Public Mission — research funding cuts threaten the civilizational public goods they believe the university uniquely produces', dimId: 'community-benefit' },
        { text: 'Learning Quality and Educational Purpose — they want universities to articulate and deliver a compelling non-instrumental account of what they are for', dimId: 'learning-quality' },
      ],
    },
    reformStance: 'Restore federal research funding immediately and reject the use of grant cancellations, Title VI enforcement, and accreditation threats as tools to coerce campus governance. Publish clear, enforceable academic freedom principles — modeled on the Woodward Report — and enforce them institutionally before external pressure makes them moot. Strengthen faculty governance so that presidents and boards have meaningful accountability to the scholarly community, not just to donors and legislatures. Articulate publicly, in specific terms, what research universities produce and what disappears when they are weakened: the vaccines, the engineers, the civic knowledge that no market generates on its own.',
    nearestNeighborId: 'market-oriented-pragmatists',
    nearestNeighborNote: `Both trust the degree's economic payoff, believe local colleges serve their communities, and support internal reform over replacement. They diverge on admissions — the University Defenders largely defend the system's overall fairness, while Market-Oriented Pragmatists focus on whether institutions provide honest outcome data — and on media credibility, where the University Defenders express the highest trust of any group.`,
    keyItems: [
      { id: 'D5-D',  classProb: 0.92, avgProb: 0.38 },
      { id: 'D2-C',  classProb: 0.89, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.91, avgProb: 0.39 },
      { id: 'D3-G',  classProb: 0.91, avgProb: 0.42 },
      { id: 'D4-E',  classProb: 0.95, avgProb: 0.51 },
      { id: 'D7-A',  classProb: 0.95, avgProb: 0.51 },
    ],
    proofPoints: [
      {
        claim: 'More than half of Americans recognize universities as producers of life-saving research.',
        context: '56% of Americans are confident that colleges and universities conduct life-saving research — a net confidence score of +46 points, the highest of any institutional function surveyed, even among respondents skeptical of the credential itself.',
        source: 'Vanderbilt Unity Poll (N=1,030, September 2025)',
        url: 'https://news.vanderbilt.edu/2025/09/24/vanderbilt-unity-poll-confidence-in-higher-education-rebounds-though-affordability-and-political-bias-are-still-concerns/',
      },
      {
        claim: 'Nearly all top-ranked universities now have formally strong campus speech policies.',
        context: "FIRE's 2025 College Free Speech Rankings found that 24 of the top 25 institutions received 'Green Light' speech policy ratings, meaning their official policies do not restrict protected expression. Where speech climate fails, the problem is enforcement and culture — which points toward institutional reform, not replacement.",
        source: 'FIRE — 2025 College Free Speech Rankings',
        url: 'https://www.fire.org/research-learn/2025-college-free-speech-rankings',
      },
      {
        claim: 'Only 27% of faculty believe academic freedom is currently secure — the strongest argument for institutional defense.',
        context: "FIRE's 2024 faculty survey found fewer than one in three faculty feel their academic freedom is secure. For University Defenders, this is not a case for ceding control to external authorities; it is the argument for institutions to more actively defend the conditions under which genuine inquiry is possible.",
        source: 'FIRE 2024 Faculty Survey (N=6,900)',
        url: 'https://www.fire.org/facultyreport',
      },
      {
        claim: 'Yale convened an independent committee in 2026 specifically to rebuild the institutional foundations of trust.',
        context: "Yale's president accepted all recommendations of the Committee on Trust in Higher Education (April 2026), committing to new academic freedom principles built on the 50-year-old Woodward Report and a new faculty committee to establish forward-looking protections. Institutions are diagnosing and responding — not waiting to be regulated.",
        source: 'Yale Committee on Trust in Higher Education (April 2026)',
        url: 'https://president.yale.edu/posts/2026-04-15-report-of-the-committee-on-trust-in-higher-education',
      },
    ],
  },

  'critical-reformers': {
    expandedDescription: [
      `Critical Reformers are the group that holds the hardest-to-maintain position in the typology: they believe in higher education's mission while documenting its failures. The degree reinforces class divisions, they say — admissions is rigged, underemployment is not a temporary blip but a structural outcome, and local colleges rarely serve the communities around them. And yet: research is a genuine public good. Intellectual formation is real. The institution can reform itself. The mission is worth saving.`,
      `Their views are formed through close comparison of what institutions claim against what they actually do. Critical Reformers follow academic scholarship, campus newspapers, labor organizing channels, and left-of-center magazines. They measure official speeches, strategic plans, and diversity messaging against hiring practices, campus labor conditions, and who actually gets heard in governance. For this group, institutional rhetoric is itself an important data source — precisely because it can be tested against on-the-ground reality and the testimony of contingent faculty and affected students. They're unusually attentive to who speaks the language of reform while quietly leaving the distribution of power intact.`,
      `Their reform confidence is the key to understanding them. Unlike groups who've concluded the institution is broken beyond repair, Critical Reformers score among the highest in believing higher education can self-correct. Faculty freedom to challenge students' assumptions, research as a public good, genuine intellectual formation — they endorse all of it. They're not in the same group as institutional defenders because they refuse to defend the delivery; but they're unmistakably in the same mission-oriented camp.`,
    ],
    topTrustIssues: {
      issues: `Critical Reformers carry a precise economic ledger of higher education's failures. Their specific worries include the structural projection that by 2034 college graduates will outnumber available college-level jobs by 7 to 11 million, Bureau of Labor Statistics data showing 38 to 48 percent of recent graduates are underemployed and three-quarters of those who begin underemployed remain so a decade later, an Indeed/Harris Poll finding that 45 percent of Gen Z graduates already question whether their degree was worth what they paid, AI systematically eliminating the entry-level positions where new graduates have historically begun careers faster than institutions can retrain for what remains, the $1.7 trillion in outstanding student debt held disproportionately by graduates from low- and middle-income families recruited with promises the labor market has not kept, and the Quinnipiac 2026 finding that 83 percent of Americans across the political spectrum worry AI will diminish students' capacity for independent thinking.`,
      mainConcerns: [
        { text: 'Institutional Self-Interest and Fiduciary Failure — the gap between marketed promise and measurable labor market delivery for the students who most needed the degree to work', dimId: 'institutional-self-interest' },
        { text: 'AI and the Integrity of Learning — AI eliminating the entry-level employment rung the credential was supposed to unlock', dimId: 'ai-integrity' },
        { text: 'Financial Stakes and Honest Dealing — who bears the downside risk when the degree underdelivers on its economic promise', dimId: 'financial-stakes' },
      ],
    },
    reformStance: 'Require institutions to share financial risk when graduates cannot repay federal loans — ending the arrangement where colleges profit from enrollment regardless of outcomes. Mandate transparent, program-level earnings and debt data so students can evaluate the actual return before they sign. Eliminate legacy admissions preferences at every institution receiving federal research funding. Fund aggressive completion support for first-generation and low-income students, not just enrollment incentives. Enforce honest grading so the credential can once again signal what graduates actually know and can do. Expand access to apprenticeship and trade pathways as genuine alternatives — a four-year degree that delivers will survive that competition; one that doesn\'t should.',
    nearestNeighborId: 'university-defenders',
    nearestNeighborNote: `Both believe in research as a public good, genuine intellectual formation, and higher education's capacity to reform itself. They diverge on whether the degree delivers economically — the University Defenders are optimists; Critical Reformers are structural pessimists who believe the degree reinforces the class divisions it claims to dissolve.`,
    keyItems: [
      { id: 'D2-B',  classProb: 0.68, avgProb: 0.49 },
      { id: 'D3-G',  classProb: 0.92, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.93, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.78, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.06, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.30, avgProb: 0.43 },
    ],
    proofPoints: [
      {
        claim: 'Top-1% families gain a twofold admissions advantage at elite colleges that does not trace to merit.',
        context: "Children from top-1% income families are twice as likely to attend Ivy-Plus colleges as comparably qualified middle-class applicants. Opportunity Insights researchers found two-thirds of this advantage stems from differential acceptance rates for legacy students, recruited athletes, and applicants receiving higher non-academic ratings — not from preparation.",
        source: "Chetty, Deming, Friedman — Diversifying Society's Leaders? (Opportunity Insights, 2023)",
        url: 'https://opportunityinsights.org/paper/collegeadmissions/',
      },
      {
        claim: 'Less than two-thirds of students who start a four-year degree finish within six years.',
        context: 'The national six-year graduation rate at four-year institutions is approximately 63% (NCES). At for-profit four-year colleges it falls below 30%. Institutions collect tuition and incur student debt on enrollment — and for a substantial fraction, deliver neither the credential nor a path out of that debt.',
        source: 'NCES Digest of Education Statistics 2023, Table 326.10',
        url: 'https://nces.ed.gov/programs/digest/d23/tables/dt23_326.10.asp',
      },
      {
        claim: 'Public confidence in college affordability has nearly collapsed.',
        context: 'Only 14% of Americans are confident that colleges charge what students can actually afford — a net score of -48 points. By contrast, confidence in colleges conducting life-saving research is +46 net. The mission has not failed; the delivery mechanism has.',
        source: 'Vanderbilt Unity Poll (N=1,030, September 2025)',
        url: 'https://news.vanderbilt.edu/2025/09/24/vanderbilt-unity-poll-confidence-in-higher-education-rebounds-though-affordability-and-political-bias-are-still-concerns/',
      },
      {
        claim: "Yale's own Trust Committee named grade inflation as a specific institutional credibility threat.",
        context: "Yale's Committee on Trust in Higher Education (April 2026) — formed precisely because trust has eroded — identified grade inflation as an integrity issue requiring institutional attention. When the institution's own leadership diagnoses this, the accountability argument is no longer external criticism: it is internal.",
        source: 'Yale Committee on Trust in Higher Education (April 2026)',
        url: 'https://president.yale.edu/posts/2026-04-15-report-of-the-committee-on-trust-in-higher-education',
      },
    ],
  },

  'populist-insurgents': {
    expandedDescription: [
      `Populist Insurgents hold the most coherent critique of higher education as a system. The degree doesn't work for working people — it reinforces class divisions, the admissions process rewards wealth, research serves elite priorities, and the media that covers it is so embedded in the same world that it can't see the problem clearly. Their diagnosis isn't that the institution has failed; it's that the institution was never designed for the people it pretends to serve.`,
      `Their knowledge doesn't come from official reports — it comes from lived experience, local conversation, and media that doesn't live inside the world it covers. Populist Insurgents rely on what they see in their towns, what neighbors and relatives say about college, and sources that treat working-class experience as the starting point. They know the pattern intimately: the best students are told to leave, professional success requires adopting another class culture, and people who return with credentials often seem embarrassed by where they came from. When community decline matches how outsiders talk about them on television and online, the structural diagnosis becomes more deeply fixed. Condescension is not an abstraction for them. It is a repeated social experience.`,
      `What distinguishes them politically from the Economically Betrayed — the group they most resemble on economic critique — is their position on government. Populist Insurgents strongly support government accountability for higher education. They see democratically elected officials as a legitimate check on an institution that has captured its own oversight. This is accountability politics, not technocratic reform: they want the institution held to account by the people it has failed.`,
    ],
    topTrustIssues: {
      issues: `Populist Insurgents have a structural critique rooted in specific, documentable evidence. Their particular concerns include the Harvard legacy admissions data disclosed during SFFA litigation showing a 70 percent acceptance rate for legacies compared to a 5 percent rate for unconnected applicants — documenting that admissions "merit" is structurally determined by wealth before applications are reviewed, the Delta Cost Project finding that administrative and professional staff at universities grew 60 percent faster than instructional staff between 2010 and 2020, the Supreme Court's SFFA ruling eliminating race-conscious admissions without addressing legacy preference or donor advantage, the Trump administration's Title VI enforcement campaign against universities (a tactic they support in principle while doubting it will materially benefit working-class Americans), AI encoding the same secular elite assumptions they associate with the university itself, and the credentialing economy functioning as a positional arms race requiring more schooling to access positions previous generations reached with less.`,
      mainConcerns: [
        { text: 'Governance, Reform, and Accountability — democratic accountability through elected officials rather than institutional self-governance or accreditation insiders', dimId: 'governance-accountability' },
        { text: 'Cultural Belonging and Identity Welcome — working-class, rural, and traditionally oriented Americans made explicitly unwelcome by campus culture and DEI bureaucracies', dimId: 'cultural-belonging' },
        { text: 'Institutional Self-Interest and Fiduciary Failure — institutions absorbing public money and political deference while systematically serving those already advantaged', dimId: 'institutional-self-interest' },
      ],
    },
    reformStance: 'Remove bachelor\'s degree requirements from federal civil service positions where the work does not require them, and pressure major employers to follow. Fund trade schools, apprenticeship programs, and certification pathways at genuine parity with four-year colleges — not as consolation alternatives but as equally legitimate routes to a stable career and a middle-class life. Expand Pell Grant eligibility to cover high-quality short-term credentials. Require universities receiving public money to publish transparent ratios of administrative to instructional spending — and tie federal funding increases to demonstrable outcomes for first-generation and working-class students, not to research prestige rankings.',
    nearestNeighborId: 'economically-betrayed',
    nearestNeighborNote: `Both share deep structural skepticism about higher education's promise to working people and distrust of research serving elite priorities. They divide sharply on government: Populist Insurgents strongly support government accountability for higher education; the Economically Betrayed opposes it, fearing government control of knowledge as a threat to minority and progressive intellectual traditions.`,
    keyItems: [
      { id: 'D5-D',  classProb: 0.08, avgProb: 0.38 },
      { id: 'D3-G',  classProb: 0.04, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.05, avgProb: 0.50 },
      { id: 'D7-A',  classProb: 0.09, avgProb: 0.51 },
      { id: 'R-G',   classProb: 0.90, avgProb: 0.41 },
      { id: 'D5-A',  classProb: 0.93, avgProb: 0.69 },
    ],
    proofPoints: [
      {
        claim: 'Millions of job postings require degrees for roles where most workers in those jobs do not hold one.',
        context: "A Harvard Business School study identified approximately 6 million job openings requiring a bachelor's degree where the majority of current workers in those roles held no degree. This degree inflation uses credentials as a low-cost screening filter that systematically excludes qualified working-class applicants — not on merit, but on access.",
        source: "Sigelman, Fuller, Raman — Dismissed by Degrees (Harvard Business School, 2017)",
        url: 'https://www.hbs.edu/managing-the-future-of-work/research/pages/dismissed-by-degrees.aspx',
      },
      {
        claim: 'MAGA-identifying Americans have net negative confidence in higher education.',
        context: 'The Vanderbilt Unity Poll (2025) found that among MAGA supporters, more respondents lacked confidence in higher education than had it (net: -7 points), compared to a net +48 among Democrats. The partisan confidence gap reflects a lived experience of political and cultural exclusion, not just economic disappointment.',
        source: 'Vanderbilt Unity Poll (N=1,030, September 2025)',
        url: 'https://news.vanderbilt.edu/2025/09/24/vanderbilt-unity-poll-confidence-in-higher-education-rebounds-though-affordability-and-political-bias-are-still-concerns/',
      },
      {
        claim: 'Seven in ten Americans believe universities should not take official positions on political controversies.',
        context: '71% of Americans — including 59% of Democrats — say universities should not issue official positions on contentious political issues. The perception that institutions have overstepped their role is not a partisan fringe: it is a broad consensus.',
        source: 'Vanderbilt Unity Poll (N=1,030, September 2025)',
        url: 'https://news.vanderbilt.edu/2025/09/24/vanderbilt-unity-poll-confidence-in-higher-education-rebounds-though-affordability-and-political-bias-are-still-concerns/',
      },
      {
        claim: 'More than half of conservative faculty hide their political views to keep their jobs.',
        context: "FIRE's 2024 survey of 6,900 faculty found 55% of conservative faculty conceal political beliefs to protect their employment, compared to 17% of liberal faculty. Only 20% of faculty believe a conservative colleague would fit well in their department (vs. 74% for liberal colleagues). This is the faculty's own account, not an outside accusation.",
        source: 'FIRE 2024 Faculty Survey (N=6,900)',
        url: 'https://www.fire.org/facultyreport',
      },
    ],
  },

  'institutional-skeptics': {
    expandedDescription: [
      `Institutional Skeptics are the most internally unusual group in the typology. They see the system's failures clearly — the degree reinforces class divisions, admissions rewards wealth, research doesn't serve their communities — but they haven't organized these observations into a political framework. They're not angry. They're not mobilized. They've noticed the problem and decided that neither side of the reform debate is addressing it.`,
      `Their skepticism is built less from one dramatic event than from accumulated observation. Institutional Skeptics gather information from investigative reporting, higher education newsletters, public hearings, watchdog commentary, and their own long memory of promised reforms that diagnose real failures in polished language while leaving core arrangements intact. They're familiar with the cycle: a report is commissioned, serious problems are acknowledged, leadership changes are announced, and the same incentives reassert themselves. They're less combative than other skeptical groups because their distrust is procedural, not emotional — they don't need to be angry to have concluded that insider-led repair is no longer credible. They've watched too many reform cycles to believe this one will be different.`,
      `One position they hold with unusual force: when students don't finish college, the institution bears real responsibility. They're near-unanimous on this — no other group comes close. The degree was marketed as achievable; the debt was real; and the institution collected it. Their demand for accountability on non-completion is live for them even when everything else in the reform debate feels distant. It's the one place their structural critique becomes concrete.`,
    ],
    topTrustIssues: {
      issues: `Institutional Skeptics have concluded that the debates about reform are not being conducted for people like them. Their specific concerns include the wave of college closures accelerating to roughly three per week in 2024 and 2025 (approximately 550 campuses have closed since 2015), the documented pattern of institutions recruiting students with marketing that overstates outcomes and underrepresents risk then leaving non-completers with debt and no credential, Federal Reserve and Census data showing the earnings premium for bachelor's degrees has become increasingly uneven across institutions, fields, and demographics in ways raw averages obscure, administrative spending growing faster than instruction at virtually every institutional type over the past fifteen years, the enrollment cliff projected to reduce the traditional-age college population by more than 700,000 by 2029 (threatening closures concentrated at institutions serving the most financially precarious students), and public debates about higher education's future conducted by insiders for insiders in ways that will not materially affect communities where the college world never worked well.`,
      mainConcerns: [
        { text: 'Financial Stakes and Honest Dealing — whether the investment is worth the risk for families without a safety net if things go wrong', dimId: 'financial-stakes' },
        { text: 'Institutional Self-Interest and Fiduciary Failure — what institutions actually owe the students who enroll and do not complete, given the debt they leave with', dimId: 'institutional-self-interest' },
        { text: 'Governance, Reform, and Accountability — public accountability mechanisms that function independent of which political faction controls them', dimId: 'governance-accountability' },
      ],
    },
    reformStance: 'Trust will not return because universities say the right things more persuasively. It will return only if the rules around them change. Require colleges to reimburse the federal loan program for a portion of debt held by students who enrolled but did not graduate — ending the practice of aggressive recruitment without accountability for completion. Mandate completion-rate disclosure in all enrollment marketing so students see the actual odds before they sign. Fund short-term, industry-recognized credentials, registered apprenticeships, and trade school infrastructure as proven pathways that deliver real skills and wages without the debt load of a four-year degree — and push major employers to recognize them for hiring decisions on the same terms as a bachelor\'s degree. Cancel federal student debt held by non-completers who attended institutions with graduation rates below 40%.',
    nearestNeighborId: 'populist-insurgents',
    nearestNeighborNote: `Both are structural skeptics who see the degree as reinforcing class divisions, research as serving elite priorities, and media coverage as captured by the institutions it covers. They differ on government accountability: Institutional Skeptics moderately support it; Populist Insurgents are its strongest champions. They also differ on reform energy — Populist Insurgents are mobilized; Institutional Skeptics have disengaged from the debate entirely.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.92, avgProb: 0.69 },
      { id: 'D3-G',  classProb: 0.18, avgProb: 0.42 },
      { id: 'D3-F',  classProb: 0.06, avgProb: 0.38 },
      { id: 'R-A',   classProb: 0.06, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.12, avgProb: 0.38 },
    ],
    proofPoints: [
      {
        claim: 'Confidence in higher education mirrors a broad collapse of trust across all major U.S. institutions.',
        context: "Gallup's 2023 annual survey found confidence in higher education had fallen to 36%, down from 57% in 2015. Congress (8%), TV news (14%), newspapers (21%), big business, and the criminal justice system have followed a similar arc. Higher education is not an exceptional failure; it is one institution in a systemic pattern.",
        source: 'Gallup — Confidence in Institutions (annual survey, 2023)',
        url: 'https://news.gallup.com/poll/508352/americans-confidence-institutions-stays-low.aspx',
      },
      {
        claim: 'Outstanding student debt exceeds $1.7 trillion — carried by a system with limited accountability.',
        context: "Federal Student Aid's 2024 data shows more than 43 million borrowers carrying over $1.77 trillion in federal student loans. The debt instrument transfers risk to individuals while institutions face limited consequences when graduates underperform economically.",
        source: 'Federal Student Aid — Direct Loan Portfolio Summary (2024)',
        url: 'https://studentaid.gov/data-center/student/portfolio',
      },
      {
        claim: "Returns on a college degree vary by more than $3 million across programs — making 'go to college' a bet, not a plan.",
        context: 'Georgetown Center on Education and the Workforce found lifetime earnings differences exceeding $3 million between the highest- and lowest-return degree programs. For students without information to navigate this variation, the generic recommendation to attend college is a gamble with enormous downside and no clear guidance on how to win it.',
        source: "Georgetown CEW — The College Payoff (2021, updated)",
        url: 'https://cew.georgetown.edu/cew-reports/collegepayoff2021/',
      },
      {
        claim: 'Nearly 40 million Americans have some college credit but no credential to show for it.',
        context: 'The National Student Clearinghouse Research Center tracks approximately 40 million adults with some college experience but no degree — many carrying debt from enrollment without the credential that would have generated returns to justify that debt. The system is better at starting enrollment than completing it.',
        source: 'National Student Clearinghouse Research Center — Some College, No Credential (annual)',
        url: 'https://nscresearchcenter.org/some-college-no-credential/',
      },
    ],
  },

  'market-oriented-pragmatists': {
    expandedDescription: [
      `Market-Oriented Pragmatists hold a straightforward faith in the system: the degree works, merit is rewarded, local colleges serve their communities, and research benefits the public. This isn't idealism — it's a position grounded in observed outcomes and a coherent theory about how institutions function when they work as intended. Where others see a broken promise, Market-Oriented Pragmatists see a promise that's being kept for those who commit to it.`,
      `Their views form through channels that give them the most concrete signal about whether the degree delivers: employer feedback, family budgeting conversations, rankings, LinkedIn career outcome data, and testimony from peers and alumni about whether the credential paid off. When institutional claims are vague but personal accounts from friends, coworkers, and recent graduates about debt, underemployment, or skill gaps are concrete, those personal accounts carry more weight. A manager who sees weak writing and poor judgment in recent graduates, or a parent comparing aid letters, becomes a more trusted witness than an admissions office. This is not cynicism — it's a pragmatic epistemic stance that updates on evidence rather than reputation.`,
      `When students don't complete, Market-Oriented Pragmatists are more likely than most groups to place responsibility with the student rather than the institution. This is consistent with their broader framework: the degree works for those who are prepared and committed. They believe colleges genuinely honor where students come from and that faculty should be free to challenge students' assumptions — they're not defending a conflict-free institution, but a functional one in which challenge and preparation are part of what the degree provides.`,
    ],
    topTrustIssues: {
      issues: `Market-Oriented Pragmatists believe the degree works — and that belief makes them more alarmed than most when they see the conditions that make it work being eroded. Their concerns are not about systemic failure; they are about specific threats to the credential's integrity and to the formation it is supposed to produce. The AI-accelerated academic integrity crisis is the most acute: a 2026 AAC&U and Elon University survey found 95 percent of higher education leaders believe AI will significantly affect academic integrity — and when students can outsource the work of thinking, the degree no longer signals what it is supposed to signal. Grade inflation compounds the problem: median grades now cluster at A across most four-year institutions, making transcripts unable to distinguish levels of achievement and undermining the merit signal Market-Oriented Pragmatists count on. A 2026 Quinnipiac survey found 83 percent of Americans — across party lines — worry that AI will erode students' capacity to think independently, a concern this group shares acutely. Smartphone-related classroom distraction has structurally degraded the instructional time families are paying for. And rapid institutional adoption of AI tools without competency frameworks risks ensuring students develop a facility for delegation rather than genuine capability. The one external threat they register: Trump administration executive orders restricting what faculty can research and what programs institutions can offer — a rare case where they want government out of the institution's way.`,
      mainConcerns: [
        { text: 'Learning Quality and Educational Purpose — protecting the genuine cognitive formation that makes the credential\'s signal meaningful', dimId: 'learning-quality' },
        { text: 'AI and the Integrity of Learning — ensuring AI does not substitute for the independent reasoning formation is supposed to produce', dimId: 'ai-integrity' },
        { text: 'Governance, Reform, and Accountability — reform should come from within, not from government dictation of curriculum and program content', dimId: 'governance-accountability' },
      ],
    },
    reformStance: 'Adopt and enforce clear, institution-specific policies on AI use in coursework — distinguishing tools that build competency from those that replace the effort of thinking. Audit grade distributions publicly and address inflation that has made transcripts unable to distinguish levels of achievement. Protect faculty freedom to challenge students\' assumptions without administrative or government interference. Reform accreditation to assess whether graduates actually developed analytical and practical capabilities — not just whether institutional processes were followed. Keep curriculum decisions in the hands of faculty, not legislatures.',
    nearestNeighborId: 'university-defenders',
    nearestNeighborNote: `Both groups trust the degree's economic payoff, believe local colleges serve their communities, and support internal reform. They divide on admissions — Market-Oriented Pragmatists are its strongest defenders, holding that once applications are submitted the evaluation is basically fair — and on media credibility, where the University Defenders express the highest trust of any group while Market-Oriented Pragmatists are more moderate.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.08, avgProb: 0.69 },
      { id: 'D4-E',  classProb: 0.91, avgProb: 0.51 },
      { id: 'D2-C',  classProb: 0.88, avgProb: 0.50 },
      { id: 'D5-D',  classProb: 0.85, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.92, avgProb: 0.43 },
      { id: 'D3-G',  classProb: 0.88, avgProb: 0.42 },
    ],
    proofPoints: [
      {
        claim: "Bachelor's degree holders earn roughly 65% more annually than workers with only a high school diploma.",
        context: 'Federal Reserve Bank of New York data shows median annual earnings for BA holders at approximately $65,000 versus $40,000 for high school graduates — a sustained earnings premium that compounds across a career and remains positive across most fields and institution types.',
        source: 'Federal Reserve Bank of New York — The Labor Market for Recent College Graduates (2024)',
        url: 'https://www.newyorkfed.org/research/college-labor-market',
      },
      {
        claim: 'College graduates have roughly half the unemployment rate of workers without degrees.',
        context: "Bureau of Labor Statistics data consistently shows bachelor's degree holders experiencing unemployment rates approximately half those of high school-only workers — around 2% versus 4% in recent years. The credential provides labor market insurance, not just an earnings premium.",
        source: 'Bureau of Labor Statistics — Education Pays (2024 edition)',
        url: 'https://www.bls.gov/emp/chart-unemployment-earnings-education.htm',
      },
      {
        claim: "The lifetime earnings premium for a bachelor's degree exceeds $800,000 after subtracting costs.",
        context: "Georgetown CEW estimates lifetime earnings for bachelor's degree holders at approximately $2.8 million compared to $1.6 million for high school graduates. Even after subtracting tuition, fees, and foregone earnings during enrollment, the net return remains substantially positive for most programs.",
        source: "Georgetown CEW — The College Payoff (2021, updated)",
        url: 'https://cew.georgetown.edu/cew-reports/collegepayoff2021/',
      },
      {
        claim: 'More than 85% of four-year college graduates say their degree was worth the cost.',
        context: 'Federal Reserve Bank research on recent college graduates consistently finds more than 85% reporting their degree was worth the cost — a figure that has remained stable even as tuition has increased. Among graduates who chose their field with attention to outcomes, satisfaction rates are even higher.',
        source: 'Federal Reserve Bank of New York — The Labor Market for Recent College Graduates (2024)',
        url: 'https://www.newyorkfed.org/research/college-labor-market',
      },
    ],
  },

  'faith-and-freedom-families': {
    expandedDescription: [
      `Faith & Freedom Families occupy the most analytically complex position in the typology. They can't be placed cleanly in the optimist or pessimist camp because their skepticism follows a distinct internal logic: they believe in formation, in community, and in the degree's value — but they don't believe secular research universities are the primary place where these goods are delivered. The institution they trust is the faith-based college, the HBCU, the regional community institution rooted in a particular tradition. The institution they distrust is the generic secular research university.`,
      `Their outlook is shaped by a mix of sources that doesn't include elite higher education media: conversations with children and grandchildren who attended college, pastors and fellow congregants, parent networks, church schools, homeschooling circles, conservative podcasts and Substacks, and organizations focused on campus free expression. They rely heavily on firsthand family testimony about classroom climate — whether students can speak openly about religious or conservative views, what administrators do when conflicts arise, whether campus social life felt hostile to faith. Stories about a student who came back different, learned to keep quiet in class, or felt pressure to affirm views they didn't hold carry enormous weight and consolidate the sense that secular institutions have drifted beyond adjustment.`,
      `On government oversight, they are the group most opposed to federal authority over higher education. This is institutional self-interest, not libertarianism: the federal government's leverage over curriculum is the most direct threat to the distinctive character of the institutions they care about. They will accept accountability for outcomes; they won't accept bureaucratic authority over what those institutions teach and how they teach it.`,
    ],
    topTrustIssues: {
      issues: `Faith & Freedom Families carry a specific and compounding body of evidence that universities have turned away from both of the things that made them worth trusting: forming character, and serving the communities that believed in them. On character formation, the evidence is structural — the decades-long decline of humanities degrees from 17% of bachelor's degrees awarded in 1967 to roughly 5% today shows that the curriculum where formation in language, virtue, and moral reasoning actually happens has been systematically defunded; the FIRE faculty survey finding that 35% of faculty have toned down their academic writing due to controversy concerns (surpassing McCarthy-era rates) shows that the intellectual conditions for genuine formation have eroded; and the BYU multi-institution research finding that every major AI model integrated into university coursework systematically marginalizes religious and faith-rooted frameworks — confirmed by the Vatican's January 2025 instruction Antiqua et nova — shows that the newest instructional tools encode the same secular drift. On community, the failure runs just as deep: the OBBBA earnings-accountability metric would effectively defund ministry, social work, and theological degree programs (53 percent of religion bachelor's programs and 89 percent of religion master's programs would fail the proposed income test), penalizing exactly the callings through which graduates serve their communities rather than their own advancement; and documented campus climates in which students from faith communities report having to suppress or privatize their religious identity to be taken seriously as scholars show that the communities these institutions claim to serve are not actually welcome inside them.`,
      mainConcerns: [
        { text: 'Cultural Belonging and Identity Welcome — whether faith identity is genuinely welcome at secular institutions or merely tolerated conditionally', dimId: 'cultural-belonging' },
        { text: 'Governance, Reform, and Accountability — opposing federal content control over curriculum and institutional mission, including from administrations that claim sympathy with religious communities', dimId: 'governance-accountability' },
        { text: 'Learning Quality and Educational Purpose — genuine character and virtue formation versus secular credentialing that evacuates moral content from education', dimId: 'learning-quality' },
      ],
    },
    reformStance: 'Trust rebuilds when universities show visible signs that they can make room for disagreement without pathologizing it — and that extends to structural changes, not just rhetoric. Exempt faith-based colleges and HBCUs from earnings-accountability metrics that would defund ministry, social work, and theological programs — measuring these institutions by market returns misreads their purpose entirely. Protect religious liberty exemptions that allow faith-rooted colleges to hire, govern, and teach according to their founding mission. Extend Pell Grant eligibility to cover seminary and theological degrees. Recognize alternative assessments — such as the Classic Learning Test (CLT), which tests rhetoric, poetry, and philosophical reasoning drawn from the Western and Christian canon — as valid admissions credentials alongside the SAT and ACT. Resist accreditation standards and compliance requirements that treat institutional distinctiveness as a defect to be standardized away. Fund community-specific institutions rather than consolidating them into generic regional universities that serve nobody\'s formation well.',
    nearestNeighborId: 'market-oriented-pragmatists',
    nearestNeighborNote: `Both groups are optimistic about the degree's economic payoff and believe local colleges genuinely serve their communities. They separate on five critical items: Faith & Freedom Families support loans for callings (ministry, social work, the arts), believe in formation through a virtue lens, support targeted HBCU and MSI protection, and strongly oppose government oversight. They are their own class — not a variant of Market-Oriented Pragmatists — driven by institutional self-interest in protecting faith-based higher education.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.08, avgProb: 0.51 },
      { id: 'D6-A',  classProb: 0.72, avgProb: 0.43 },
      { id: 'D5-D',  classProb: 0.85, avgProb: 0.38 },
      { id: 'D3-G',  classProb: 0.06, avgProb: 0.42 },
      { id: 'R-G',   classProb: 0.05, avgProb: 0.41 },
      { id: 'R-A',   classProb: 0.17, avgProb: 0.39 },
    ],
    proofPoints: [
      {
        claim: 'Faculty self-censorship has reached levels exceeding those documented during the McCarthy era.',
        context: "FIRE's 2024 survey of 6,900 faculty found 35% had toned down their academic writing due to controversy concerns — compared to just 9% during the McCarthy era. When intellectual risk-taking is this constrained, the conditions for genuine character formation cannot be reliably sustained.",
        source: 'FIRE 2024 Faculty Survey (N=6,900)',
        url: 'https://www.fire.org/facultyreport',
      },
      {
        claim: "The share of bachelor's degrees awarded in the humanities has fallen from 17% to roughly 5% since 1967.",
        context: "American Academy of Arts and Sciences Humanities Indicators data tracks this sustained reallocation away from the curriculum where formation in language, virtue, and moral reasoning actually happens. It is not a fluctuation — it is a structural decision about what universities are for.",
        source: 'American Academy of Arts and Sciences — Humanities Indicators (2023)',
        url: 'https://www.amacad.org/humanities-indicators',
      },
      {
        claim: 'A proposed federal earnings test would effectively defund ministry, social work, and theological degree programs.',
        context: "The OBBBA earnings-accountability metric would cause 53% of religion bachelor's programs and 89% of religion master's programs to fail — penalizing exactly the callings through which graduates serve their communities rather than their own economic advancement. The metric measures market return; it cannot see community formation.",
        source: 'National Association of Independent Colleges and Universities — OBBBA Program Analysis',
        url: 'https://www.naicu.edu',
      },
      {
        claim: 'Every major AI model integrated into university coursework systematically marginalizes religious and faith-rooted frameworks.',
        context: "BYU multi-institution research found that AI tools now embedded in course design and feedback consistently exclude or underweight religious, theological, and faith-rooted ways of knowing — a finding confirmed by the Vatican's January 2025 instruction Antiqua et nova, which identified AI as a specific risk to moral formation and human dignity. The communities these institutions claim to serve are not legible to the tools they are adopting.",
        source: 'BYU AI in Higher Education Research; Vatican Dicastery for Culture — Antiqua et nova (January 2025)',
        url: 'https://www.vatican.va/roman_curia/pontifical_councils/cultr/documents/antiqua-et-nova.html',
      },
    ],
  },

  'economically-betrayed': {
    expandedDescription: [
      `At 22%, the Economically Betrayed is the largest group in the typology, and the one whose story is told least often in mainstream coverage of higher education. Their diagnosis is economic and community-specific: the degree was marketed as a pathway to stability, they or people they know accepted that bargain and took on the debt, and the outcome was underemployment, community disinvestment, and a credential that didn't deliver what it promised. This is not a conservative critique of higher education. It is a betrayal narrative from the communities that most believed in it.`,
      `Their views are shaped not by policy reports or institutional messaging but by the economic conditions of their own lives and the lives of people they know. Student loan balances, aid package letters, job searches, group chats, TikTok, Reddit, and college-planning platforms are where judgments form. Peer-to-peer trust is high: family members, current students, and recent graduates who describe debt, delayed stability, weak wages, and uncertain housing matter far more than what institutions say about themselves. Their judgment is also shaped by a wider generational atmosphere of insecurity — if adulthood itself feels less attainable, higher education is judged within that broader climate of disappointment, not against what it promised a generation ago.`,
      `They support federal loan programs that cover callings — ministry, social work, community health, teaching — because these are the fields where people from their communities have tried to build careers, often at significant financial risk. This position connects to a broader sense that the credential economy has served aspirations it hasn't validated. They want the risk to be shared differently. They are not anti-education; they are anti-broken-promise.`,
    ],
    topTrustIssues: {
      issues: `The Economically Betrayed are living the structural failure of the credential economy's promise to working-class and low-income communities. Their specific concerns include the collapse of Pell Grant purchasing power from 76 percent of four-year public university costs in the 1980s to 24 percent today, cuts to TRIO, GEAR UP, and Title IV programs that provide first-generation and low-income students their primary institutional support infrastructure, AI specifically eliminating entry-level employment in the sectors where community college graduates have historically started their careers (removing the first rung of the professional ladder at the moment when new graduates are most vulnerable), the documented stickiness of underemployment (38 to 48 percent of recent graduates underemployed, with three-quarters remaining underemployed a decade later), the cultural bargain embedded in most four-year institutions requiring working-class and minority students to assimilate to elite professional norms rather than develop from the identities and communities they bring, and a structural pattern of institutional recruitment into programs where completion is underfunded and dropout with debt is predictable.`,
      mainConcerns: [
        { text: 'Institutional Self-Interest and Fiduciary Failure — predatory enrollment patterns and inadequate completion support for the students institutions most aggressively recruit', dimId: 'institutional-self-interest' },
        { text: 'Financial Stakes and Honest Dealing — personal debt burden set against a mobility promise the labor market has not delivered', dimId: 'financial-stakes' },
        { text: 'Cultural Belonging and Identity Welcome — the class-cultural assimilation that most institutions require as a condition of being taken seriously', dimId: 'cultural-belonging' },
      ],
    },
    reformStance: 'Rebuild trust by lowering risk, not by explaining more persuasively why the risk is still worth taking. Restore Pell Grant purchasing power to cover at least half the cost of a four-year public college degree — it covered 76% in the 1980s and covers 24% today. Require institutions to enter income-sharing arrangements that tie their financial health to whether graduates can actually repay, not just whether they enrolled. Cancel federal student debt held by students of closed for-profit colleges and those whose institutions were found to have engaged in predatory recruitment. Protect and expand TRIO and GEAR UP as the primary support infrastructure for first-generation students. Invest in community-controlled trade schools, apprenticeship programs, and workforce pathways in the regions where the college credential has been demonstrably broken — treating these as first-choice routes for the communities who need them, not fallback options for those who couldn\'t afford four years.',
    nearestNeighborId: 'populist-insurgents',
    nearestNeighborNote: `Both share structural skepticism about the degree's economic promise and distrust of research serving elite priorities. The sharpest divide is on government: the Economically Betrayed strongly opposes government authority over higher education, fearing federal control of curriculum as a threat to minority and progressive intellectual traditions. Populist Insurgents see government oversight as a legitimate democratic check. They read the same institutional failure through different political lenses.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.09, avgProb: 0.51 },
      { id: 'D7-A',  classProb: 0.12, avgProb: 0.51 },
      { id: 'D5-D',  classProb: 0.05, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.07, avgProb: 0.43 },
      { id: 'D1-H',  classProb: 0.86, avgProb: 0.57 },
      { id: 'D3-F',  classProb: 0.08, avgProb: 0.38 },
    ],
    proofPoints: [
      {
        claim: 'Federal student debt exceeds $1.77 trillion, concentrated among borrowers least able to repay.',
        context: "Federal Student Aid's 2024 data shows more than 43 million borrowers carrying over $1.77 trillion in outstanding federal loans. The burden falls disproportionately on students from low-income families, first-generation students, and those who attended lower-return institutions — precisely the communities the enrollment pitch targeted.",
        source: 'Federal Student Aid — Direct Loan Portfolio Summary (2024)',
        url: 'https://studentaid.gov/data-center/student/portfolio',
      },
      {
        claim: 'For-profit colleges have federal loan default rates roughly twice those of public institutions.',
        context: 'Department of Education cohort default rate data shows students at for-profit colleges defaulting on federal loans at approximately twice the rate of those at public and nonprofit institutions. These schools specifically recruited working-class and low-income students, collected their enrollment and debt, and delivered the highest failure rates in the system.',
        source: 'Department of Education — Official Cohort Default Rate Data (2023)',
        url: 'https://studentaid.gov/data-center/student/default',
      },
      {
        claim: 'Four in ten recent college graduates work in jobs that do not require a degree.',
        context: "Federal Reserve Bank of New York data shows approximately 40% of recent college graduates are underemployed — working in positions that don't require a bachelor's degree. For graduates who took on debt to access a credential that promised upward mobility, chronic underemployment is not an acceptable systemic outcome.",
        source: 'Federal Reserve Bank of New York — The Labor Market for Recent College Graduates (2024)',
        url: 'https://www.newyorkfed.org/research/college-labor-market',
      },
      {
        claim: 'AI is eliminating the entry-level professional pathways the college credential was supposed to open.',
        context: 'Goldman Sachs (2023) estimated that generative AI could expose approximately 300 million jobs to partial automation, with entry-level white-collar work — administrative, analytical, and clerical — among the most affected. For students who borrowed to access those entry-level positions, the ladder the credential was supposed to reach has moved.',
        source: "Goldman Sachs — The Potentially Large Effects of Artificial Intelligence on Economic Growth (2023)",
        url: 'https://www.goldmansachs.com/intelligence/pages/generative-ai-could-raise-global-gdp-by-7-percent.html',
      },
    ],
  },

}
