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
    whatTheyFear: `The Institutional Faithful's primary fear is government overreach into what universities teach and research. They strongly oppose federal authority over curriculum content — not because they're indifferent to accountability, but because they believe the right mechanism for accountability is public trust and internal reform, not legislative control. They have seen what happens when political authorities dictate the direction of knowledge, and they consider institutional autonomy load-bearing for democracy, not a perk for elites.`,
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
    whatTheyFear: `Critical Believers fear the class dynamics of admissions and the labor market consequences of the degree's broken promise. The credential was supposed to guarantee a path out of economic precarity — and for too many graduates it has not. What sharpens this is the gap between what the institution claims to do (provide genuine formation, support public research, open economic doors) and what it measurably delivers for students who most needed it to work. They're not skeptical of the ideal; they're alarmed that the gap between ideal and performance is structural, not incidental.`,
    reformStance: 'Reform is both necessary and possible — the mission is real, even if the performance is not.',
    nearestNeighborId: 'institutional-faithful',
    nearestNeighborNote: `Both believe in research as a public good, genuine intellectual formation, and higher education's capacity to reform itself. They diverge on whether the degree delivers economically — the Institutional Faithful are optimists; Critical Believers are structural pessimists who believe the degree reinforces the class divisions it claims to dissolve.`,
    keyItems: [
      { id: 'D2-B',  classProb: 0.90, avgProb: 0.49 },
      { id: 'D3-G',  classProb: 0.92, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.93, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.88, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.06, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.12, avgProb: 0.43 },
    ],
  },

  'populist-antagonists': {
    expandedDescription: [
      `Populist Antagonists hold the most coherent critique of higher education as a system. The degree doesn't work for working people — it reinforces class divisions, the admissions process rewards wealth, research serves elite priorities, and the media that covers it is so embedded in the same world that it can't see the problem clearly. Their diagnosis isn't that the institution has failed; it's that the institution was never designed for the people it pretends to serve.`,
      `Their distrust runs deep and specific. They don't believe college provides genuine intellectual formation — the credential is the point, and even that credential doesn't reliably deliver. They don't believe research spending filters down to communities that need it. They're among the most skeptical groups about media coverage of higher education, holding that journalists who cover this beat live inside an institution they can no longer independently evaluate. This isn't cynicism; it's a structural critique rooted in accumulated observations about whose interests the system actually serves.`,
      `What distinguishes them politically from the Economically Dispossessed Left — the group they most resemble on economic critique — is their position on government. Populist Antagonists strongly support government accountability for higher education. They see democratically elected officials as a legitimate check on an institution that has captured its own oversight. This is accountability politics, not technocratic reform: they want the institution held to account by the people it has failed.`,
    ],
    whatTheyFear: `Populist Antagonists fear elite capture above all: the pattern by which institutions absorb the language of public service while systematically directing their benefits toward people who are already advantaged. They believe college admissions rewards wealth more than merit, that research funding flows to priorities set by elites rather than communities, and that the credential economy has become a mechanism for sorting people into class positions that were largely determined before anyone applied. Their anger is not at the idea of higher education, but at the distance between what it claims to be and what it demonstrably does.`,
    reformStance: 'Democratic accountability — elected officials should hold captured institutions to account.',
    nearestNeighborId: 'economically-dispossessed-left',
    nearestNeighborNote: `Both share deep structural skepticism about higher education's promise to working people and distrust of research serving elite priorities. They divide sharply on government: Populist Antagonists strongly support government accountability for higher education; the Economically Dispossessed Left opposes it, fearing government control of knowledge as a threat to minority and progressive intellectual traditions.`,
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
      `One position they hold with unusual force: when students don't finish college, the institution bears real responsibility. They're unanimous on this in the pilot data — no other group comes close. The degree was marketed as achievable; the debt was real; and the institution collected it. Their demand for accountability on non-completion is live for them even when everything else in the reform debate feels distant. It's the one place their structural critique becomes concrete.`,
    ],
    whatTheyFear: `Indifferent Skeptics' deepest concern is the mismatch between the credential's marketing and its actual delivery — especially for students who don't complete. They don't organize this fear into a political program, but they hold the institution categorically responsible when students drop out. The marketed promise, the debt incurred, and the missing credential constitute a transaction they find clearly unjust, even when they've given up on the reform debates that might address it.`,
    reformStance: 'Build alternatives — neither reform nor replacement of the current system seems viable.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both are structural skeptics who see the degree as reinforcing class divisions, research as serving elite priorities, and media coverage as captured by the institutions it covers. They differ on government accountability: Indifferent Skeptics moderately support it; Populist Antagonists are its strongest champions. They also differ on reform energy — Populist Antagonists are mobilized; Indifferent Skeptics have disengaged from the debate entirely.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.92, avgProb: 0.69 },
      { id: 'D3-G',  classProb: 0.18, avgProb: 0.42 },
      { id: 'D3-F',  classProb: 0.00, avgProb: 0.38 },
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
    whatTheyFear: `Community Meritocrats' most acute concern is the erosion of what they believe makes the credential valuable: the actual cognitive work that happens in the classroom. If degrees can be obtained without the underlying formation — through shortcuts, credential inflation, or outsourced work — then the meritocracy they believe in stops functioning. Their trust in the system is calibrated to the difficulty of what it demands; anything that reduces that difficulty threatens the integrity of the credential itself.`,
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
    whatTheyFear: `Faith-Rooted Skeptics' primary fear is the federal government's capacity to leverage funding in ways that threaten the distinctive character of faith-based institutions. They strongly oppose government authority over curriculum and research content — not on libertarian grounds, but out of institutional self-interest: federal oversight of what is taught and how it is taught is a direct threat to the theological and formational commitments that make their colleges worth attending. They'll accept accountability for outcomes; they won't accept bureaucratic authority over pedagogy and mission.`,
    reformStance: 'Protect the mission — defend faith-based and community-specific institutions from federal leverage.',
    nearestNeighborId: 'community-meritocrats',
    nearestNeighborNote: `Both groups are optimistic about the degree's economic payoff and believe local colleges genuinely serve their communities. They separate on five critical items: Faith-Rooted Skeptics support loans for callings (ministry, social work, the arts), believe in formation through a virtue lens, support targeted HBCU and MSI protection, and strongly oppose government oversight. They are their own class — not a variant of Community Meritocrats — driven by institutional self-interest in protecting faith-based higher education.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.89, avgProb: 0.51 },
      { id: 'D6-A',  classProb: 0.96, avgProb: 0.43 },
      { id: 'D5-D',  classProb: 0.85, avgProb: 0.38 },
      { id: 'D3-G',  classProb: 0.06, avgProb: 0.42 },
      { id: 'R-G',   classProb: 0.05, avgProb: 0.41 },
      { id: 'R-A',   classProb: 0.04, avgProb: 0.39 },
    ],
  },

  'economically-dispossessed-left': {
    expandedDescription: [
      `At 22%, the Economically Dispossessed Left is the largest group in the typology, and the one whose story is told least often in mainstream coverage of higher education. Their diagnosis is economic and community-specific: the degree was marketed as a pathway to stability, they or people they know accepted that bargain and took on the debt, and the outcome was underemployment, community disinvestment, and a credential that didn't deliver what it promised. This is not a conservative critique of higher education. It is a betrayal narrative from the communities that most believed in it.`,
      `The specifics of their position matter. They don't believe local colleges serve the people around them. They don't believe research benefits their communities. They don't believe the media that covers higher education lives anywhere near the world they recognize. And they believe that students from working-class and minority backgrounds who attend college must, at some level, become different people — that the cultural bargain of the degree includes leaving something behind. These are not abstract concerns; they're observations about a specific transaction that didn't pay out.`,
      `They support federal loan programs that cover callings — ministry, social work, community health, teaching — because these are the fields where people from their communities have tried to build careers, often at significant financial risk. This position connects to a broader sense that the credential economy has served aspirations it hasn't validated. They want the risk to be shared differently. They are not anti-education; they are anti-broken-promise.`,
    ],
    whatTheyFear: `The Economically Dispossessed Left's deepest fear is cultural: the sense that access to higher education requires abandoning the communities, values, and ways of knowing that students bring with them. They believe, more than any other group, that students from working-class and minority backgrounds must become different people to succeed in college — that the cultural bargain of the degree includes leaving something behind. This isn't a complaint about individual professors or campus culture; it's a structural observation about who the institution was designed for and who has to adapt to enter it.`,
    reformStance: 'Build alternatives — the current system has not been reformable for the communities that most needed it.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both share structural skepticism about the degree's economic promise and distrust of research serving elite priorities. The sharpest divide is on government: the Economically Dispossessed Left strongly opposes government authority over higher education, fearing federal control of curriculum as a threat to minority and progressive intellectual traditions. Populist Antagonists see government oversight as a legitimate democratic check. They read the same institutional failure through different political lenses.`,
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
