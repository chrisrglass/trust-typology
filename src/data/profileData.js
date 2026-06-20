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

// Item label for the A pole (what the bar represents)
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
      `On AI, they are notably calm. Nine in ten believe that college graduates will adapt to AI-driven labor markets — the lowest level of alarm among all seven groups. They are skeptical that AI tools in coursework build genuine competency, but they don't read this as crisis. These are people who trust the capacity of institutions to respond, and who believe — more than anyone else — that higher education can correct its own course.`,
    ],
    whatTheyFear: `The Institutional Faithful's primary fear is government overreach into what universities teach and research. They strongly oppose federal authority over curriculum content — not because they're indifferent to accountability, but because they believe the right mechanism for accountability is public trust and internal reform, not legislative control. They have seen what happens when political authorities dictate the direction of knowledge, and they consider institutional autonomy load-bearing for democracy, not a perk for elites.`,
    reformStance: 'Reform from within — the institution has the capacity to self-correct.',
    nearestNeighborId: 'community-meritocrats',
    nearestNeighborNote: `Both trust the degree's economic payoff and believe local colleges serve their communities. They diverge on admissions fairness — the Institutional Faithful largely defend it, while Community Meritocrats are the strongest defenders of merit-based evaluation — and on media credibility, where the Institutional Faithful express the highest trust of any group.`,
    keyItems: [
      { id: 'D5-D',  classProb: 0.92, avgProb: 0.38 },
      { id: 'D1-D1', classProb: 0.05, avgProb: 0.64 },
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
      `Their AI position is the most paradoxical in the entire typology. They express the highest alarm of any group about AI eliminating entry-level jobs, while simultaneously expressing the highest confidence that AI tools build genuine competency in learners. This isn't contradiction — it's a labor-market diagnosis paired with a pedagogical confidence: AI is a crisis for employment pathways, but a genuine tool for learning when used well. They hold both because both are true.`,
    ],
    whatTheyFear: `Critical Believers fear the labor market more than any other threat. AI eliminating entry-level jobs is their sharpest concern — not because they distrust AI as a tool (they don't), but because the credential was supposed to be an employment guarantee, and AI is dismantling that guarantee faster than institutions can respond. They also fear the cultural and class dynamics of admissions: the sense that the formal meritocracy is cover for wealth consolidation.`,
    reformStance: 'Reform is both necessary and possible — the mission is real, even if the performance is not.',
    nearestNeighborId: 'institutional-faithful',
    nearestNeighborNote: `Both believe in research as a public good, genuine intellectual formation, and higher education's capacity to reform itself. They diverge on whether the degree delivers economically — the Institutional Faithful are optimists; Critical Believers are structural pessimists. They also diverge on AI alarm: Critical Believers are the most alarmed about AI and the labor market; the Institutional Faithful are the least.`,
    keyItems: [
      { id: 'D2-G',  classProb: 0.95, avgProb: 0.28 },
      { id: 'D3-G',  classProb: 0.92, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.93, avgProb: 0.50 },
      { id: 'R-A',   classProb: 0.88, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.06, avgProb: 0.38 },
      { id: 'D1-D1', classProb: 0.90, avgProb: 0.64 },
    ],
  },

  'populist-antagonists': {
    expandedDescription: [
      `Populist Antagonists hold the most coherent critique of higher education as a system. The degree doesn't work for working people — it reinforces class divisions, the admissions process rewards wealth, research serves elite priorities, and the media that covers it is so embedded in the same world that it can't see the problem clearly. Their diagnosis isn't that the institution has failed; it's that the institution was never designed for the people it pretends to serve.`,
      `This structural critique extends to AI in a distinctive way. Where most groups worry about AI in one register — labor market or pedagogy or values — Populist Antagonists see AI as threatening on all three fronts simultaneously. AI eliminates the entry-level jobs the credential was supposed to unlock. AI tools in coursework outsource the cognitive work that education is supposed to develop. And AI systems — they believe more strongly than any other group — encode secular ideological assumptions that systematically exclude religious and traditional frameworks for understanding the world.`,
      `What distinguishes them politically from the Economically Dispossessed Left — the group they most resemble on economic critique — is their position on government. Populist Antagonists strongly support government accountability for higher education. They see democratically elected officials as a legitimate check on an institution that has captured its own oversight. This is accountability politics, not technocratic reform: they want the institution held to account by the people it has failed.`,
    ],
    whatTheyFear: `Populist Antagonists fear elite capture more than any specific institutional failure. The AI threat is real to them precisely because it extends an existing pattern: technology developed by and for people with cultural and economic power, then deployed in ways that disadvantage those without it. The idea that AI systems might encode the assumptions of secular academic culture — and that this would be invisible to the people who built and deploy them — strikes them as not just plausible but obvious. They are the group most alarmed by AI's relationship to values and tradition.`,
    reformStance: 'Democratic accountability — elected officials should hold captured institutions to account.',
    nearestNeighborId: 'economically-dispossessed-left',
    nearestNeighborNote: `Both share deep structural skepticism about higher education's promise to working people, distrust of research serving elite priorities, and alarm about AI eliminating entry-level jobs. They divide sharply on government: Populist Antagonists strongly support government accountability for higher education; the Economically Dispossessed Left opposes it, fearing government control of knowledge as a threat to minority and progressive intellectual traditions.`,
    keyItems: [
      { id: 'D2-H',  classProb: 0.03, avgProb: 0.58 },
      { id: 'D3-G',  classProb: 0.04, avgProb: 0.42 },
      { id: 'D2-C',  classProb: 0.05, avgProb: 0.50 },
      { id: 'D7-A',  classProb: 0.09, avgProb: 0.51 },
      { id: 'R-G',   classProb: 0.90, avgProb: 0.41 },
      { id: 'D2-G',  classProb: 0.07, avgProb: 0.28 },
    ],
  },

  'indifferent-skeptics': {
    expandedDescription: [
      `Indifferent Skeptics are the most internally unusual group in the typology. They see the system's failures clearly — the degree reinforces class divisions, admissions rewards wealth, research doesn't serve their communities — but they haven't organized these observations into a political framework. They're not angry. They're not mobilized. They've noticed the problem and decided that neither side of the reform debate is addressing it.`,
      `What makes them distinctive is not what they believe but what they don't believe: they have the lowest confidence in higher education's capacity for self-reform of any group, and the lowest support for any of the reform alternatives. They're not waiting for the right politician or the right policy. They've essentially concluded that the debate happening in public — reform vs. replace, accountability vs. autonomy — isn't the debate they'd be having if they were in charge.`,
      `Their AI position is the most striking in the typology. Every single member of this group in the pilot simulation agreed that AI systems are ideologically neutral — they don't encode any particular worldview. This is the opposite of what Populist Antagonists and Faith-Rooted Skeptics believe, and it's not a carefully reasoned position; it's a disengaged one. They're skeptical of the institution but not skeptical of the tools it's adopting. Whether this reflects a coherent pragmatism or simply a lack of investment in the debate is, itself, a question worth asking.`,
    ],
    whatTheyFear: `Indifferent Skeptics don't express a specific fear in the way other groups do. What they hold unanimously — and what may be their functional equivalent of fear — is the belief that when students don't finish college, the institution bears real responsibility. They're not interested in blaming students for dropping out. The degree was marketed as achievable, the debt was real, and the institution collected it. That accountability is live for them even when everything else feels distant.`,
    reformStance: 'Build alternatives — neither reform nor replacement of the current system seems viable.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both are structural skeptics who see the degree as reinforcing class divisions and research as serving elite priorities. They differ sharply on government: Indifferent Skeptics moderately support government accountability; Populist Antagonists are its strongest champions. They also differ on AI: Indifferent Skeptics are unanimously neutral about AI's ideological content; Populist Antagonists are the most alarmed.`,
    keyItems: [
      { id: 'D2-H',  classProb: 1.00, avgProb: 0.58 },
      { id: 'D2-G',  classProb: 0.90, avgProb: 0.28 },
      { id: 'D3-F',  classProb: 0.00, avgProb: 0.38 },
      { id: 'R-A',   classProb: 0.06, avgProb: 0.39 },
      { id: 'D5-D',  classProb: 0.12, avgProb: 0.38 },
    ],
  },

  'community-meritocrats': {
    expandedDescription: [
      `Community Meritocrats hold a straightforward faith in the system: the degree works, merit is rewarded, local colleges serve their communities, and research benefits the public. This isn't idealism — it's a position grounded in observed outcomes and a coherent theory about how institutions function when they work as intended. Where others see a broken promise, Community Meritocrats see a promise that's being kept for those who commit to it.`,
      `Their most striking position — and the one that most distinguishes them from every other group — is on admissions. Community Meritocrats are the only group where a substantial majority believes college admissions evaluates applicants on merit. This isn't a claim that the system is perfect; it's a claim that the evaluation of applications, once submitted, is basically fair. They see meritocracy as operating at the institutional level even when social conditions are unequal.`,
      `On AI, they divide in an unusual way: they're optimistic about the labor market (graduates adapt) but the most alarmed of any group about what AI does to learning. For Community Meritocrats, the degree's value depends on what actually happens in the classroom. AI tools that outsource thinking don't enhance formation — they hollow it out. They're not afraid of AI as an economic competitor; they're afraid of it as a pedagogical substitute for the hard cognitive work that produces genuine competency.`,
    ],
    whatTheyFear: `Community Meritocrats' most acute concern is the substitution of AI for genuine learning. If the degree is valuable because of what it develops — reasoning, discipline, communication — then AI tools that let students complete coursework without doing the underlying cognitive work threaten the entire basis of what makes the credential meaningful. They're not technophobes; they support AI research and see AI as ideologically neutral. They just don't want it replacing the thing they most value about education.`,
    reformStance: 'Reform from within — the institution works when it functions as designed.',
    nearestNeighborId: 'institutional-faithful',
    nearestNeighborNote: `Both groups trust the degree's economic payoff and believe local colleges serve their communities. They divide on admissions (Community Meritocrats strongly defend its merit basis; Institutional Faithful are more ambivalent) and media credibility (Institutional Faithful express the highest trust; Community Meritocrats are moderate). Community Meritocrats are also the more alarmed group on AI's pedagogical effects.`,
    keyItems: [
      { id: 'D5-A',  classProb: 0.08, avgProb: 0.69 },
      { id: 'D1-D1', classProb: 0.12, avgProb: 0.64 },
      { id: 'D2-G',  classProb: 0.05, avgProb: 0.28 },
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
    whatTheyFear: `Faith-Rooted Skeptics are more alarmed than any other group about AI's relationship to religious and traditional frameworks. Their near-unanimous position is that AI systems were designed without meaningful input from religious traditions, faith-rooted ways of knowing, or communities that understand the world through theological frameworks. AI encodes the assumptions of secular academic culture — and the people who built it didn't notice, because those assumptions are invisible to them. For Faith-Rooted Skeptics, this isn't a technical complaint; it's a civilizational one.`,
    reformStance: 'Protect the mission — defend faith-based and community-specific institutions from federal leverage.',
    nearestNeighborId: 'community-meritocrats',
    nearestNeighborNote: `Both groups are optimistic about the degree's economic payoff, believe local colleges serve their communities, and think AI tools are bad for learning. They separate on five critical items: Faith-Rooted Skeptics support loans for callings (Community Meritocrats are split), believe in genuine intellectual formation through a virtue-formation lens (Community Meritocrats through a skills lens), support targeted HBCU protection, and strongly oppose government oversight. They are their own class, not a variant of Community Meritocrats.`,
    keyItems: [
      { id: 'D2-H',  classProb: 0.11, avgProb: 0.58 },
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
    whatTheyFear: `The Economically Dispossessed Left's sharpest fear is AI eliminating entry-level jobs — the jobs that the credential was supposed to open. If the degree was the key to the middle-class door, and AI is removing the door, the groups who sacrificed most to get that key lose twice: once in the debt, once in the foreclosed opportunity. They are the second-most alarmed group on AI and the labor market, after Critical Believers, and their alarm is grounded in a structural analysis: they were already in a precarious position, and AI narrows the pathway further.`,
    reformStance: 'Build alternatives — the current system has not been reformable for the communities that most needed it.',
    nearestNeighborId: 'populist-antagonists',
    nearestNeighborNote: `Both share structural skepticism about the degree's economic promise, distrust of research serving elite priorities, and alarm about AI eliminating entry-level jobs. The sharpest divide is on government: the Economically Dispossessed Left strongly opposes government authority over higher education, fearing that federal control of curriculum is a threat to progressive, minority, and community-specific intellectual traditions. Populist Antagonists see government oversight as a legitimate democratic check. They read the same institutional failure through different political lenses.`,
    keyItems: [
      { id: 'D4-E',  classProb: 0.09, avgProb: 0.51 },
      { id: 'D7-A',  classProb: 0.12, avgProb: 0.51 },
      { id: 'D5-D',  classProb: 0.05, avgProb: 0.38 },
      { id: 'D6-A',  classProb: 0.07, avgProb: 0.43 },
      { id: 'D1-H',  classProb: 0.86, avgProb: 0.57 },
      { id: 'D1-D1', classProb: 0.83, avgProb: 0.64 },
    ],
  },

}
