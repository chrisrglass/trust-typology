// Pilot data: simulated N=500, 7 classes
// Class Ns: LP=60, UR+NAR=87, TOM=51, PPR=60, FFC=55, LL=75, LOL+OOL=112
//
// Per-item probabilities = P(choosing option A)
// National averages = weighted sum(class_prob × class_n) / 500

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

// Verbatim option texts from the quiz instrument (both poles)
export const ITEM_OPTIONS = {
  'D5-D': {
    a: 'A college degree remains the most reliable tool we have for helping people from disadvantaged backgrounds reach economic stability.',
    b: 'Higher education has become so expensive and unequal that it now reinforces class divisions more than it overcomes them.',
  },
  'D3-G': {
    a: 'The research that universities conduct — medical breakthroughs, scientific discovery, basic science — is a public investment that benefits all Americans, and cuts to university research funding hurt the country.',
    b: "Universities receive too much federal research funding with too little accountability for how it's used and whether it serves national interests.",
  },
  'D2-C': {
    a: 'College gives students genuine intellectual tools — the ability to think carefully, evaluate evidence, and hold complex questions — that they carry for the rest of their lives.',
    b: "What most students actually get from college is a credential and some skills for a job. The deeper intellectual formation colleges claim to offer rarely happens in practice — and this was true long before AI; it is a structural failure, not a new problem that technology created.",
  },
  'D2-H': {
    a: "AI systems being adopted by colleges are analytical and creative tools — they don't have a worldview and don't systematically favor or exclude any set of values or traditions.",
    b: 'AI systems integrated into university coursework were developed without meaningful input from religious traditions, non-Western philosophical frameworks, or faith-rooted ways of knowing. Students whose intellectual formation is rooted in those traditions will find their frameworks increasingly absent from the tools their universities have made central to learning.',
  },
  'D1-D1': {
    a: 'The rise of artificial intelligence is eliminating entry-level positions — the jobs that new graduates have historically used to begin careers — faster than higher education can adapt its training.',
    b: 'While AI will change many jobs, college graduates will be well-positioned to adapt to AI-driven changes.',
  },
  'D2-G': {
    a: "AI tools in coursework, used with clear guidelines, are helping students develop the analytical skills they need — learning to work with AI is itself a genuine competency for the careers they're entering.",
    b: 'Students who use AI for coursework are producing outputs, not developing the capacity to produce them. The ability to reason through hard problems independently — without assistance — is being lost in programs where AI has replaced that effort.',
  },
  'D4-E': {
    a: "Colleges and universities genuinely support students in developing new skills and perspectives while also honoring where they come from — working-class, rural, and faith-community students do not have to become different people to be taken seriously.",
    b: 'To fully succeed at most colleges — not just to pass classes but to be taken seriously as a person and an intellect — students from working-class, rural, or faith-community backgrounds have to learn to present themselves in ways that are foreign to their home communities.',
  },
  'D3-F': {
    a: "College is genuinely hard — academically, financially, and personally — and institutions cannot be expected to guarantee that every adult who enrolls will complete their degree. The decision to enroll is a personal one, and individual choices about commitment and effort shape outcomes in ways no institution can control.",
    b: 'When a college recruits and enrolls a student — especially one from a first-generation or low-income background — and that student leaves with debt but no degree, the institution bears real responsibility. It marketed the relationship, accepted their money, and did not deliver.',
  },
  'D5-A': {
    a: 'Selective colleges give wealthy and well-connected families so many structural advantages — through legacy preferences, donor relationships, private school preparation, and test coaching money can buy — that the admissions process is not genuinely merit-based, regardless of what it claims to be.',
    b: 'Whatever advantages wealth provides before applications are submitted, once selective colleges review applications, they are making genuine judgments about intellectual capability and academic potential — the evaluation itself is more merit-based than critics acknowledge, even when access to preparation has not been equal.',
  },
  'D6-A': {
    a: 'The college or university that serves my area is a genuine part of the community — it cares about what happens here and contributes to local life.',
    b: "The college or university that serves my area is focused on its own priorities and doesn't make much difference to the lives of ordinary people in the community.",
  },
  'D7-A': {
    a: 'News organizations that cover higher education — major newspapers, public radio, and education-specific publications — are doing real accountability journalism. Reporters investigate failures, hold institutions to the record, and produce coverage you can rely on for an honest picture of what colleges and universities are actually doing.',
    b: "The journalists who cover higher education mostly attended selective universities, move in university circles, and live in places where higher education works well. Their coverage reflects that world. People whose experience — or the experience of family, friends, and neighbors they trust — doesn't match what those outlets report are not wrong to be skeptical.",
  },
  'R-A': {
    a: 'Higher education has the capacity to identify what it has done wrong and make meaningful changes from within — faculty governance, accreditation, and shared leadership models exist precisely to enable this kind of institutional self-correction.',
    b: "The evidence from the past decade is that higher education cannot reform itself without significant outside pressure — from employers demanding graduates who can actually do things, from students demanding better outcomes for the money they're spending, or from government requiring accountability for public investment.",
  },
  'R-G': {
    a: 'Public accountability for publicly funded institutions is legitimate — when colleges and universities receive taxpayer money, elected representatives have a role in setting standards for what those institutions do and how they use public resources.',
    b: 'Using government funding threats to determine what researchers can study or what instructors can teach is not accountability — it is using political power to shape the content of knowledge.',
  },
  'D1-H': {
    a: "Federal student loans should be available for any accredited college program — including ministry, social work, teaching, and the arts — even when graduates typically earn less than average. People should be able to borrow to pursue a calling, not just a career.",
    b: "Federal student loans should be restricted to programs where graduates are likely to earn enough to repay what they borrowed. Taxpayers shouldn't subsidize programs with poor financial outcomes, regardless of their other merits.",
  },
  'D2-B': {
    a: 'Faculty at most colleges and universities retain meaningful freedom to pursue research questions that challenge prevailing assumptions — the independent inquiry that makes academic knowledge valuable is still protected at most institutions.',
    b: 'At most colleges and universities, research directions that challenge prevailing assumptions face real institutional pressure — hiring, funding, and publication decisions push inquiry in directions that are safe rather than generative.',
  },
  'D2-F': {
    a: 'General education should require every student to seriously engage with foundational works, whether from Western philosophy and literature, world religious traditions, or other intellectual canons, because there is no substitute for wrestling with the ideas that have shaped how humans live together.',
    b: 'General education should focus on transferable skills, including writing clearly, reasoning quantitatively, and thinking critically across disciplines, rather than mandating any particular texts or traditions. Content should serve skill-building; prescribing specific works confuses reverence for rigorous education.',
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

  'institutional-faithful': {
    expandedDescription: [
      `The Institutional Faithful hold the most comprehensive trust in higher education of any group. They believe the degree delivers — that it reliably lifts families across generations, that research serves the people who fund it, that colleges genuinely honor the students they admit, and that the press covers these institutions with reasonable honesty. This is not naivety: it is a coherent worldview in which institutional performance matches institutional promise.`,
      `What makes them distinctive is not enthusiasm but comprehensiveness. Where Critical Believers separate mission from performance, the Institutional Faithful hold both together. Where Community Meritocrats focus on individual merit and outcomes, the Institutional Faithful also defend the research enterprise, the news coverage, and the cultural welcome colleges extend to students from different backgrounds. They are the only group that simultaneously trusts what colleges do, how they're reported on, and whether they can fix what's broken.`,
      `On reform, they are the most internally confident group in the typology. They believe the institution has the capacity to correct its own course without external compulsion — that the mechanisms of peer review, shared governance, and public accountability are sufficient to address what's wrong. This confidence is load-bearing: it connects their trust in mission to their opposition to government intervention. If the institution can self-reform, then legislative control is not just unnecessary — it's a threat to the very process by which the problems get addressed.`,
    ],
    topTrustIssues: {
      issues: `The Institutional Faithful's concerns are directed outward — at what is being done to institutions they trust, not at failures from within. Their specific worries include the Trump administration's cancellation of more than $11 billion in NIH and NSF research grants as a political lever, the use of Title VI enforcement and DEI executive orders to coerce institutional governance, the administration's intervention in Columbia University's internal operations as an announced template for broader federal control of campus policy, FIRE's 2025 finding that one in three undergraduates report fearing to express their political views on campus, the structural dependence of research universities on federal grants that makes academic freedom contingent rather than inherent, and the U.S. campus academic freedom ranking now falling below most peer democracies on the Academic Freedom Index published by Scholars at Risk.`,
      mainConcerns: [
        'Governance, Reform, and Accountability — they support reform from within and strongly oppose government content control over curriculum and research',
        'Community Benefit and Public Mission — research funding cuts threaten the civilizational public goods they believe the university uniquely produces',
        'Learning Quality and Educational Purpose — they want universities to articulate and deliver a compelling non-instrumental account of what they are for',
      ],
    },
    reformStance: 'Reform from within — the institution has the capacity to self-correct.',
    nearestNeighborId: 'community-meritocrats',
    nearestNeighborNote: `Both trust the degree's economic payoff, believe local colleges serve their communities, and support internal reform over replacement. They diverge on admissions — the Institutional Faithful largely defend the system's overall fairness, while Community Meritocrats are its strongest defenders once applications are submitted — and on media credibility, where the Institutional Faithful express the highest trust of any group.`,
    keyItems: [
      { id: 'D5-D',  classProb: 0.92, avgProb: 0.38 },
      { id: 'D2-C',  classProb: 0.89, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.91, avgProb: 0.39 },
      { id: 'D3-G',  classProb: 0.91, avgProb: 0.42 },
      { id: 'D4-E',  classProb: 0.95, avgProb: 0.51 },
      { id: 'D7-A',  classProb: 0.95, avgProb: 0.51 },
    ],
  },

  'critical-believers': {
    expandedDescription: [
      `Critical Believers are the group that holds the hardest-to-maintain position in the typology: they believe in higher education's mission while documenting its failures. The degree reinforces class divisions, they say — admissions is rigged, underemployment is not a temporary blip but a structural outcome, and local colleges rarely serve the communities around them. And yet: research is a genuine public good. Intellectual formation is real. The institution can reform itself. The mission is worth saving.`,
      `This separation of mission from performance is what makes Critical Believers analytically distinct. They're not disillusioned — they hold the ideal steady while criticizing the delivery. In this they resemble a certain kind of faculty reformer or education policy advocate: someone who cares enough about what higher education is supposed to be that they can't accept what it often is. Their critique is internal, not external.`,
      `Their reform confidence is the key to understanding them. Unlike groups who've concluded the institution is broken beyond repair, Critical Believers score among the highest in believing higher education can self-correct. Faculty freedom to challenge students' assumptions, research as a public good, genuine intellectual formation — they endorse all of it. They're not in the same group as institutional defenders because they refuse to defend the delivery; but they're unmistakably in the same mission-oriented camp.`,
    ],
    topTrustIssues: {
      issues: `Critical Believers carry a precise economic ledger of higher education's failures. Their specific worries include the structural projection that by 2034 college graduates will outnumber available college-level jobs by 7 to 11 million, Bureau of Labor Statistics data showing 38 to 48 percent of recent graduates are underemployed and three-quarters of those who begin underemployed remain so a decade later, an Indeed/Harris Poll finding that 45 percent of Gen Z graduates already question whether their degree was worth what they paid, AI systematically eliminating the entry-level positions where new graduates have historically begun careers faster than institutions can retrain for what remains, the $1.7 trillion in outstanding student debt held disproportionately by graduates from low- and middle-income families recruited with promises the labor market has not kept, and the Quinnipiac 2026 finding that 83 percent of Americans across the political spectrum worry AI will diminish students' capacity for independent thinking.`,
      mainConcerns: [
        'Institutional Self-Interest and Fiduciary Failure — the gap between marketed promise and measurable labor market delivery for the students who most needed the degree to work',
        'AI and the Integrity of Learning — AI eliminating the entry-level employment rung the credential was supposed to unlock',
        'Financial Stakes and Honest Dealing — who bears the downside risk when the degree underdelivers on its economic promise',
      ],
    },
    reformStance: 'Reform is both necessary and possible — the mission is real, even if the performance is not.',
    nearestNeighborId: 'institutional-faithful',
    nearestNeighborNote: `Both believe in research as a public good, genuine intellectual formation, and higher education's capacity to reform itself. They diverge on whether the degree delivers economically — the Institutional Faithful are optimists; Critical Believers are structural pessimists who believe the degree reinforces the class divisions it claims to dissolve.`,
    keyItems: [
      { id: 'D2-B',  classProb: 0.68, avgProb: 0.49 },
      { id: 'D3-G',  classProb: 0.92, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.93, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.78, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.06, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.30, avgProb: 0.43 },
    ],
  },

  'populist-antagonists': {
    expandedDescription: [
      `Populist Antagonists hold the most coherent critique of higher education as a system. The degree doesn't work for working people — it reinforces class divisions, the admissions process rewards wealth, research serves elite priorities, and the media that covers it is so embedded in the same world that it can't see the problem clearly. Their diagnosis isn't that the institution has failed; it's that the institution was never designed for the people it pretends to serve.`,
      `Their distrust runs deep and specific. They don't believe college provides genuine intellectual formation — the credential is the point, and even that credential doesn't reliably deliver. They don't believe research spending filters down to communities that need it. They're among the most skeptical groups about media coverage of higher education, holding that journalists who cover this beat live inside an institution they can no longer independently evaluate. This isn't cynicism; it's a structural critique rooted in accumulated observations about whose interests the system actually serves.`,
      `What distinguishes them politically from the Economically Dispossessed — the group they most resemble on economic critique — is their position on government. Populist Antagonists strongly support government accountability for higher education. They see democratically elected officials as a legitimate check on an institution that has captured its own oversight. This is accountability politics, not technocratic reform: they want the institution held to account by the people it has failed.`,
    ],
    topTrustIssues: {
      issues: `Populist Antagonists have a structural critique rooted in specific, documentable evidence. Their particular concerns include the Harvard legacy admissions data disclosed during SFFA litigation showing a 70 percent acceptance rate for legacies compared to a 5 percent rate for unconnected applicants — documenting that admissions "merit" is structurally determined by wealth before applications are reviewed, the Delta Cost Project finding that administrative and professional staff at universities grew 60 percent faster than instructional staff between 2010 and 2020, the Supreme Court's SFFA ruling eliminating race-conscious admissions without addressing legacy preference or donor advantage, the Trump administration's Title VI enforcement campaign against universities (a tactic they support in principle while doubting it will materially benefit working-class Americans), AI encoding the same secular elite assumptions they associate with the university itself, and the credentialing economy functioning as a positional arms race requiring more schooling to access positions previous generations reached with less.`,
      mainConcerns: [
        'Governance, Reform, and Accountability — democratic accountability through elected officials rather than institutional self-governance or accreditation insiders',
        'Cultural Belonging and Identity Welcome — working-class, rural, and traditionally oriented Americans made explicitly unwelcome by campus culture and DEI bureaucracies',
        'Institutional Self-Interest and Fiduciary Failure — institutions absorbing public money and political deference while systematically serving those already advantaged',
      ],
    },
    reformStance: 'Democratic accountability — elected officials should hold captured institutions to account.',
    nearestNeighborId: 'economically-dispossessed',
    nearestNeighborNote: `Both share deep structural skepticism about higher education's promise to working people and distrust of research serving elite priorities. They divide sharply on government: Populist Antagonists strongly support government accountability for higher education; the Economically Dispossessed opposes it, fearing government control of knowledge as a threat to minority and progressive intellectual traditions.`,
    keyItems: [
      { id: 'D5-D',  classProb: 0.08, avgProb: 0.38 },
      { id: 'D3-G',  classProb: 0.04, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.05, avgProb: 0.50 },
      { id: 'D7-A',  classProb: 0.09, avgProb: 0.51 },
      { id: 'R-G',   classProb: 0.90, avgProb: 0.41 },
      { id: 'D5-A',  classProb: 0.93, avgProb: 0.69 },
    ],
  },

  'indifferent-skeptics': {
    expandedDescription: [
      `Indifferent Skeptics are the most internally unusual group in the typology. They see the system's failures clearly — the degree reinforces class divisions, admissions rewards wealth, research doesn't serve their communities — but they haven't organized these observations into a political framework. They're not angry. They're not mobilized. They've noticed the problem and decided that neither side of the reform debate is addressing it.`,
      `What makes them distinctive is not what they believe but what they don't believe: they have the lowest confidence in higher education's capacity for self-reform of any group, and the lowest support for any of the reform alternatives. They're not waiting for the right politician or the right policy. They've essentially concluded that the debate happening in public — reform vs. replace, accountability vs. autonomy — isn't the debate they'd be having if they were in charge.`,
      `One position they hold with unusual force: when students don't finish college, the institution bears real responsibility. They're near-unanimous on this in the pilot data — no other group comes close. The degree was marketed as achievable; the debt was real; and the institution collected it. Their demand for accountability on non-completion is live for them even when everything else in the reform debate feels distant. It's the one place their structural critique becomes concrete.`,
    ],
    topTrustIssues: {
      issues: `Indifferent Skeptics have concluded that the debates about reform are not being conducted for people like them. Their specific concerns include the wave of college closures accelerating to roughly three per week in 2024 and 2025 (approximately 550 campuses have closed since 2015), the documented pattern of institutions recruiting students with marketing that overstates outcomes and underrepresents risk then leaving non-completers with debt and no credential, Federal Reserve and Census data showing the earnings premium for bachelor's degrees has become increasingly uneven across institutions, fields, and demographics in ways raw averages obscure, administrative spending growing faster than instruction at virtually every institutional type over the past fifteen years, the enrollment cliff projected to reduce the traditional-age college population by more than 700,000 by 2029 (threatening closures concentrated at institutions serving the most financially precarious students), and public debates about higher education's future conducted by insiders for insiders in ways that will not materially affect communities where the college world never worked well.`,
      mainConcerns: [
        'Financial Stakes and Honest Dealing — whether the investment is worth the risk for families without a safety net if things go wrong',
        'Institutional Self-Interest and Fiduciary Failure — what institutions actually owe the students who enroll and do not complete, given the debt they leave with',
        'Governance, Reform, and Accountability — public accountability mechanisms that function independent of which political faction controls them',
      ],
    },
    reformStance: 'Build alternatives — neither reform nor replacement of the current system seems viable.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both are structural skeptics who see the degree as reinforcing class divisions, research as serving elite priorities, and media coverage as captured by the institutions it covers. They differ on government accountability: Indifferent Skeptics moderately support it; Populist Antagonists are its strongest champions. They also differ on reform energy — Populist Antagonists are mobilized; Indifferent Skeptics have disengaged from the debate entirely.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.92, avgProb: 0.69 },
      { id: 'D3-G',  classProb: 0.18, avgProb: 0.42 },
      { id: 'D3-F',  classProb: 0.06, avgProb: 0.38 },
      { id: 'R-A',   classProb: 0.06, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.12, avgProb: 0.38 },
    ],
  },

  'community-meritocrats': {
    expandedDescription: [
      `Community Meritocrats hold a straightforward faith in the system: the degree works, merit is rewarded, local colleges serve their communities, and research benefits the public. This isn't idealism — it's a position grounded in observed outcomes and a coherent theory about how institutions function when they work as intended. Where others see a broken promise, Community Meritocrats see a promise that's being kept for those who commit to it.`,
      `Their most striking position — and the one that most distinguishes them from every other group — is on admissions. Community Meritocrats are the only group where a substantial majority believes college admissions evaluates applicants on merit. This isn't a claim that the system is perfect; it's a claim that the evaluation of applications, once submitted, is basically fair. They see meritocracy as operating at the institutional level even when social conditions are unequal.`,
      `When students don't complete, Community Meritocrats are more likely than most groups to place responsibility with the student rather than the institution. This is consistent with their broader framework: the degree works for those who are prepared and committed. They believe colleges genuinely honor where students come from and that faculty should be free to challenge students' assumptions — they're not defending a conflict-free institution, but a functional one in which challenge and preparation are part of what the degree provides.`,
    ],
    topTrustIssues: {
      issues: `Community Meritocrats worry specifically about threats to what makes the credential meaningful. Their particular concerns include the AI-accelerated academic integrity crisis documented by AAC&U and Elon University in 2026, whose survey found 95 percent of higher education leaders believe AI will significantly affect academic integrity, grade inflation so widespread that median grades at most four-year institutions cluster at A and transcripts can no longer distinguish levels of achievement, the Quinnipiac 2026 cross-partisan finding that 83 percent of Americans worry AI will erode students' capacity to think independently, widespread smartphone-related classroom distraction that has structurally degraded the instructional time families are paying for, rapid institutional adoption of AI tools without frameworks ensuring students are developing competency rather than outsourcing it, and Trump administration executive orders restricting what faculty can research and what programs institutions can offer.`,
      mainConcerns: [
        'Learning Quality and Educational Purpose — protecting the genuine cognitive formation that makes the credential\'s signal meaningful',
        'AI and the Integrity of Learning — ensuring AI does not substitute for the independent reasoning formation is supposed to produce',
        'Governance, Reform, and Accountability — reform should come from within, not from government dictation of curriculum and program content',
      ],
    },
    reformStance: 'Reform from within — the institution works when it functions as designed.',
    nearestNeighborId: 'institutional-faithful',
    nearestNeighborNote: `Both groups trust the degree's economic payoff, believe local colleges serve their communities, and support internal reform. They divide on admissions — Community Meritocrats are its strongest defenders, holding that once applications are submitted the evaluation is basically fair — and on media credibility, where the Institutional Faithful express the highest trust of any group while Community Meritocrats are more moderate.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.08, avgProb: 0.69 },
      { id: 'D4-E',  classProb: 0.91, avgProb: 0.51 },
      { id: 'D2-C',  classProb: 0.88, avgProb: 0.50 },
      { id: 'D5-D',  classProb: 0.85, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.92, avgProb: 0.43 },
      { id: 'D3-G',  classProb: 0.88, avgProb: 0.42 },
    ],
  },

  'faith-rooted-skeptics': {
    expandedDescription: [
      `Faith-Rooted Skeptics occupy the most analytically complex position in the typology. They can't be placed cleanly in the optimist or pessimist camp because their skepticism follows a distinct internal logic: they believe in formation, in community, and in the degree's value — but they don't believe secular research universities are the primary place where these goods are delivered. The institution they trust is the faith-based college, the HBCU, the regional community institution rooted in a particular tradition. The institution they distrust is the generic secular research university.`,
      `Their positions on several issues cross what seems like political lines. They support federal loan programs that cover ministry, teaching, and social work — not because they're liberals, but because earnings-test restrictions on loans would devastate the faith-based institutions they value. They believe HBCUs and minority-serving institutions deserve targeted federal protection — not because they're progressives, but because the same principle that protects faith-based colleges extends to any community-specific institution with a distinct educational mission. Their internal logic is consistent even when their policy positions look eclectic from the outside.`,
      `On government oversight, they are the group most opposed to federal authority over higher education. This is institutional self-interest, not libertarianism: the federal government's leverage over curriculum is the most direct threat to the distinctive character of the institutions they care about. They will accept accountability for outcomes; they won't accept bureaucratic authority over what those institutions teach and how they teach it.`,
    ],
    topTrustIssues: {
      issues: `Faith-Rooted Skeptics are alarmed by a specific and compounding cluster of threats. Their particular concerns include the BYU multi-institution research finding that every major AI model being integrated into university coursework systematically ignores or marginalizes religious and faith-rooted frameworks, the Vatican's January 2025 instruction Antiqua et nova identifying AI as a risk to moral formation and human dignity, the OBBBA earnings-accountability metric that would effectively defund ministry, social work, and theological degree programs (53 percent of religion bachelor's programs and 89 percent of religion master's programs would fail the proposed income test), the pattern of federal funding leverage being applied to override institutional curricula, FIRE's 2025 ranking placing American campuses below most peer democracies on academic freedom indices, and documented campus climates in which students from faith communities report having to suppress or privatize their religious identity to be taken seriously as scholars.`,
      mainConcerns: [
        'Cultural Belonging and Identity Welcome — whether faith identity is genuinely welcome at secular institutions or merely tolerated conditionally',
        'Governance, Reform, and Accountability — opposing federal content control over curriculum and institutional mission, including from administrations that claim sympathy with religious communities',
        'Learning Quality and Educational Purpose — genuine character and virtue formation versus secular credentialing that evacuates moral content from education',
      ],
    },
    reformStance: 'Protect the mission — defend faith-based and community-specific institutions from federal leverage.',
    nearestNeighborId: 'community-meritocrats',
    nearestNeighborNote: `Both groups are optimistic about the degree's economic payoff and believe local colleges genuinely serve their communities. They separate on five critical items: Faith-Rooted Skeptics support loans for callings (ministry, social work, the arts), believe in formation through a virtue lens, support targeted HBCU and MSI protection, and strongly oppose government oversight. They are their own class — not a variant of Community Meritocrats — driven by institutional self-interest in protecting faith-based higher education.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.08, avgProb: 0.51 },
      { id: 'D6-A',  classProb: 0.72, avgProb: 0.43 },
      { id: 'D5-D',  classProb: 0.85, avgProb: 0.38 },
      { id: 'D3-G',  classProb: 0.06, avgProb: 0.42 },
      { id: 'R-G',   classProb: 0.05, avgProb: 0.41 },
      { id: 'R-A',   classProb: 0.17, avgProb: 0.39 },
    ],
  },

  'economically-dispossessed': {
    expandedDescription: [
      `At 22%, the Economically Dispossessed is the largest group in the typology, and the one whose story is told least often in mainstream coverage of higher education. Their diagnosis is economic and community-specific: the degree was marketed as a pathway to stability, they or people they know accepted that bargain and took on the debt, and the outcome was underemployment, community disinvestment, and a credential that didn't deliver what it promised. This is not a conservative critique of higher education. It is a betrayal narrative from the communities that most believed in it.`,
      `The specifics of their position matter. They don't believe local colleges serve the people around them. They don't believe research benefits their communities. They don't believe the media that covers higher education lives anywhere near the world they recognize. And they believe that students from working-class and minority backgrounds who attend college must, at some level, become different people — that the cultural bargain of the degree includes leaving something behind. These are not abstract concerns; they're observations about a specific transaction that didn't pay out.`,
      `They support federal loan programs that cover callings — ministry, social work, community health, teaching — because these are the fields where people from their communities have tried to build careers, often at significant financial risk. This position connects to a broader sense that the credential economy has served aspirations it hasn't validated. They want the risk to be shared differently. They are not anti-education; they are anti-broken-promise.`,
    ],
    topTrustIssues: {
      issues: `The Economically Dispossessed are living the structural failure of the credential economy's promise to working-class and low-income communities. Their specific concerns include the collapse of Pell Grant purchasing power from 76 percent of four-year public university costs in the 1980s to 24 percent today, cuts to TRIO, GEAR UP, and Title IV programs that provide first-generation and low-income students their primary institutional support infrastructure, AI specifically eliminating entry-level employment in the sectors where community college graduates have historically started their careers (removing the first rung of the professional ladder at the moment when new graduates are most vulnerable), the documented stickiness of underemployment (38 to 48 percent of recent graduates underemployed, with three-quarters remaining underemployed a decade later), the cultural bargain embedded in most four-year institutions requiring working-class and minority students to assimilate to elite professional norms rather than develop from the identities and communities they bring, and a structural pattern of institutional recruitment into programs where completion is underfunded and dropout with debt is predictable.`,
      mainConcerns: [
        'Institutional Self-Interest and Fiduciary Failure — predatory enrollment patterns and inadequate completion support for the students institutions most aggressively recruit',
        'Financial Stakes and Honest Dealing — personal debt burden set against a mobility promise the labor market has not delivered',
        'Cultural Belonging and Identity Welcome — the class-cultural assimilation that most institutions require as a condition of being taken seriously',
      ],
    },
    reformStance: 'Build alternatives — the current system has not been reformable for the communities that most needed it.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both share structural skepticism about the degree's economic promise and distrust of research serving elite priorities. The sharpest divide is on government: the Economically Dispossessed strongly opposes government authority over higher education, fearing federal control of curriculum as a threat to minority and progressive intellectual traditions. Populist Antagonists see government oversight as a legitimate democratic check. They read the same institutional failure through different political lenses.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.09, avgProb: 0.51 },
      { id: 'D7-A',  classProb: 0.12, avgProb: 0.51 },
      { id: 'D5-D',  classProb: 0.05, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.07, avgProb: 0.43 },
      { id: 'D1-H',  classProb: 0.86, avgProb: 0.57 },
      { id: 'D3-F',  classProb: 0.08, avgProb: 0.38 },
    ],
  },

}
