// Twelve dimensions of institutional trust, displayed in seven blocks across two registers.
// Framework source: "The Final Dimensional Framework of Trust in Higher Education" (2026-07).
//
// Two registers, deliberately: `title` is the EMIC display name — concrete,
// direct, the language of everyday Americans. `formalName` is the framework's
// technical name, shown as a small research line in the detail view and used
// in all analysis documents. Do not collapse the two.
//
// Type views are grounded in the synthetic design study's class signatures —
// PROVISIONAL, PRE-FIELDING.

// Display grouping ratified 2026-07-20: three trust groups organized by the
// trust-distance framework's content vectors (X economic / Y cultural / Z
// institutional), each carrying a first-person question. This supersedes the
// two-register / seven-moral-value-block display (ratified 2026-07-18) ON THE
// SITE ONLY: the empirical co-variation blocks (N=2,500 design study,
// scratch/trust-v21-robustness/dimension_covariation_robustness.md) and the
// framework's technical four-layer structure remain canonical in the research
// documents. Moral-value crosswalk retained for reference: Fidelity = burden +
// outcomes; Honesty = candor + procedure; Fairness = opportunity; Respect =
// recognizability; Openness = hospitality + overreach; Accountability =
// correctability + answerability + governance; Contribution = public purpose.
//
// Placement notes (2026-07-20): Chris's grouping assigned 11 dimensions;
// Institutional Overreach was unassigned and is placed in Institutional Trust
// (authority content) pending his review. Information Transparency sits in
// Economic Trust (its subject is the deal) and Equal Protection in Cultural
// Trust (rules bending by status/politics) per Chris's assignment, diverging
// from the analytical crosswalk in the trust-distance stress test Section 8,
// which reads both as epistemic (Z) content — display and analysis may
// legitimately differ here.
// Label note (2026-07-20): the site group "Institutional Trust" is a
// public-register label. In the research literature and the why-trust-declines
// brief, "institutional trust" names the competence/delivery construct (X);
// analysis documents must not inherit the site's grouping vocabulary.
// Display renames (2026-07-20): Financial Stakes → Burden Sharing ("Risk
// Sharing" was the alternative); Community Belonging → Moral Recognizability
// and Intellectual Freedom → Intellectual Hospitality (formal names promoted
// to display names at Chris's direction, reversing the 2026-07-18 emic-label
// decisions for these two).
export const GROUPS = [
  {
    id: 'economic-trust',
    icon: 'DollarSign',
    title: 'Economic Trust',
    question: 'Does the deal work?',
    intro: 'Economic trust is the trust of the exchange: whether what college asks in money, debt, and years is fairly shared and honestly described, and whether what comes back can be counted on by people from every background. It holds the fairness of the burden (Burden Sharing), the dependability of the results (Reliable Results), the honesty of the institution’s self-description (Information Transparency), and who actually gets through the open door and who carries the risk when things go wrong (Equal Access). Most of these judgments can be checked against a life: your own, or the lives of people you know.',
  },
  {
    id: 'cultural-trust',
    icon: 'HeartHandshake',
    title: 'Cultural Trust',
    question: 'Does my community belong?',
    intro: 'Cultural trust is the trust of membership: whether you, and the people you come from, can be part of this world as who you are. It holds whether a community and its way of life count as legitimate members rather than problems to manage (Moral Recognizability), whether ideas can be spoken and followed without penalty (Intellectual Hospitality), and whether the rules hold steady no matter whose status, politics, or connections are involved (Equal Protection), and whether the institution’s public-service language is backed by real service to communities like yours (Community Benefit). These judgments are lived directly by people close to a campus, and reach everyone else as story.',
  },
  {
    id: 'institutional-trust',
    icon: 'Landmark',
    title: 'Institutional Trust',
    question: 'Does the institution answer?',
    intro: 'Institutional trust is the trust extended to the institution itself: whether what it says about itself can be believed, and whether it can be left to govern its own affairs. Almost none of this can be checked from a person’s own life; it is judged at a distance, from what institutions do when things go wrong. It holds the capacity to notice and fix failure (Self-Correction), the obligation to answer the people it affects (Public Accountability), the question of who has standing to put it right when it cannot (Reform Authority), and whether its authority stays within what earned it (Institutional Overreach).',
  },
]

// One layer per ordering slot; the component flatMaps group layers in order,
// so these ids control display order without reordering the DIMENSIONS array.
export const LAYERS = [
  { id: 'value', group: 'economic-trust' },
  { id: 'econ-candor', group: 'economic-trust' },
  { id: 'opportunity', group: 'economic-trust' },
  { id: 'membership', group: 'cultural-trust' },
  { id: 'cult-inquiry', group: 'cultural-trust' },
  { id: 'cult-protection', group: 'cultural-trust' },
  { id: 'public-purpose', group: 'cultural-trust' },
  { id: 'accountability', group: 'institutional-trust' },
  { id: 'inst-overreach', group: 'institutional-trust' },
]

export const DIMENSIONS = [
  // ── Layer I: The Exchange ──────────────────────────────────────────────────
  {
    id: 'burden-proportionality',
    layer: 'value',
    icon: 'DollarSign',
    title: 'Burden Sharing',
    formalName: 'Burden Proportionality',
    whatItMeasures: 'Add up everything college asks a family to give — tuition, debt, years, lost income, time away from work and each other. Is that a fair trade for what comes back? The question is the size of the sacrifice against the size of the benefit, not whether the benefit reliably shows up: a program can deliver exactly what it promised and still cost too much. And the judgment is the felt trade, which can drift from the documented one — the conviction that college keeps getting more expensive has outlived a decade in which average net prices fell.',
    sharpestSplits: 'The sharpest divide in the exchange layer: Skeptics judge the price flatly out of proportion; Pragmatists judge the deal sound.',
    typeViews: {
      'institutional-reformers': 'Accepting, with reservations: for most students, what college asks is roughly matched by what it gives back, even if prices deserve scrutiny.',
      'results-oriented-pragmatists': 'The deal is working, by their lights: Pragmatists judge the degree worth its cost for students who choose programs well.',
      'grassroots-communitarians': 'Genuinely mixed. Communitarians neither defend the price of college nor treat cost as its defining failure; their concerns live elsewhere, in honesty and answerability.',
      'fair-deal-skeptics': 'The defining grievance. Skeptics judge that college asks for more money, debt, time, and family sacrifice than the education is worth — the promise was priced beyond the reach of the people it was made to.',
      'populist-insurgents': 'Skeptical. Insurgents lean toward judging the cost excessive, though for them the deeper problem is not the price — it is how institutions behave when the deal goes wrong.',
    },
  },
  {
    id: 'outcome-dependability',
    layer: 'value',
    icon: 'Target',
    title: 'Reliable Results',
    formalName: 'Outcome Dependability',
    whatItMeasures: 'If you start a program, can you count on finishing it, learning what it promised, and ending up somewhere real? Not the average across all graduates — whether a particular person, choosing a particular program, can form a reasonable expectation about what will happen. A dependable outcome can still be overpriced; an undependable one can still be honestly described. This question is about reliability alone. It now carries a newer worry: when most grades are already A\u2019s and AI can do much of the work a degree once certified, does finishing still mean what colleges say it means?',
    sharpestSplits: 'Skeptics call the results a gamble colleges refuse to admit; Pragmatists and Reformers count on them.',
    typeViews: {
      'institutional-reformers': 'Counting on it: Reformers expect programs to deliver what they promise, and generally believe students who do the work can count on finishing.',
      'results-oriented-pragmatists': 'The core of their trust: programs deliver the learning and completion they advertise for students who commit to them.',
      'grassroots-communitarians': 'Split down the middle. Communitarians extend no strong confidence that results can be counted on, without making unreliability their central complaint.',
      'fair-deal-skeptics': 'A gamble, in their eyes: whether a student finishes, learns, and lands somewhere feels like a gamble whose odds colleges obscure — the second half of the broken promise.',
      'populist-insurgents': 'Skeptical. Insurgents doubt that completing a program reliably means what institutions say it means — one instance of a wider pattern of claims nobody checks.',
    },
  },
  {
    id: 'institutional-candor',
    layer: 'econ-candor',
    icon: 'FileSearch',
    title: 'Information Transparency',
    formalName: 'Institutional Candor',
    whatItMeasures: 'When colleges describe themselves — the real price of finishing, the odds of a good job, the risks — do they tell it straight, or do they market certainty the evidence can’t support? This is about what institutions say, not how they perform. A college with weak results that levels with people is being candid; a college with strong results described selectively is not. Complexity counts too: a pricing system where few families pay the sticker price, but most Americans assume everyone does, leaves the public misinformed even when nobody lies.',
    sharpestSplits: 'Reformers are the only type that finds colleges straight with people; Insurgents judge the self-presentation systematically misleading.',
    typeViews: {
      'institutional-reformers': 'Taken at their word: colleges generally disclose full costs and describe career outcomes with honest calibration.',
      'results-oriented-pragmatists': 'Watchful: Pragmatists tolerate marketing as long as results arrive, while preferring plain disclosure of price and odds.',
      'grassroots-communitarians': 'Skeptical. Communitarians doubt that the sector’s official self-presentation matches the full evidence — a distrust of the distant institutional voice that coexists with their warmth toward the campuses they actually know.',
      'fair-deal-skeptics': 'Skeptical, with a personal edge: the certainty colleges projected about careers and a better future is precisely what the broken promise was made of.',
      'populist-insurgents': 'The sharpest verdict of any type. Colleges highlight favorable numbers, obscure full costs, and market certainty the evidence cannot support.',
    },
  },

  // ── Layer II: The Terms of Membership ─────────────────────────────────────
  {
    id: 'opportunity-fairness',
    layer: 'opportunity',
    icon: 'DoorOpen',
    title: 'Equal Access',
    formalName: 'Opportunity Fairness',
    whatItMeasures: 'Colleges promise to open doors. Who actually gets through them — and who carries the risk when things don’t work out? This question covers admission, aid, support to finish, access to the best programs, and whether debt and failure land hardest on the families with the least room for error. A process can follow its rules perfectly and still deal opportunity unevenly; that unevenness is what this measures. For some Americans the question now includes international enrollment: whether international students expand what colleges can offer, or crowd out qualified domestic applicants.',
    sharpestSplits: 'Pragmatists alone lean favorable; every skeptical type sees advantage flowing to the already-advantaged, for different reasons.',
    typeViews: {
      'institutional-reformers': 'Divided. Reformers trust institutional intentions here more than institutional results — one of the places their confidence thins.',
      'results-oriented-pragmatists': 'Open, by their reckoning: strong opportunities are broadly available to qualified students who seek them, whatever their starting point.',
      'grassroots-communitarians': 'Leaning skeptical. Opportunity feels less fairly shared than the campus’s welcome — a gap between belonging and benefiting.',
      'fair-deal-skeptics': 'Skeptical: the students with the least financial room for error carry the most risk away — debt without the full benefit of the degree.',
      'populist-insurgents': 'Skeptical: the strongest opportunities still flow toward those who began with the greatest advantages, and the risk flows the other way.',
    },
  },
  {
    id: 'procedural-evenhandedness',
    layer: 'cult-protection',
    icon: 'Scale',
    title: 'Equal Protection',
    formalName: 'Procedural Evenhandedness',
    whatItMeasures: 'Does a college apply the same stated rule to similar cases — or do the rules bend depending on a student’s status, politics, connections, or how much pressure a donor or activist group applies? This is about the steadiness of the rules themselves: whether standards hold when powerful people push, whether decisions come with reasons, and whether there is a real way to appeal.',
    sharpestSplits: 'One of the typology’s widest gulfs: Reformers judge the rules steady and fair; Insurgents judge them bent by whoever pushes hardest.',
    typeViews: {
      'institutional-reformers': 'A defining trust. Colleges apply the same stated rules to similar cases, and leaders hold their standards even when powerful groups push back.',
      'results-oriented-pragmatists': 'Split. Pragmatists neither rely on institutional procedure nor indict it; process matters to them mainly when it affects results.',
      'grassroots-communitarians': 'Mixed, tilting doubtful — the procedures feel less dependable than the community they govern.',
      'fair-deal-skeptics': 'Split. Skeptics spread across this question; their grievance is the deal itself more than the evenhandedness of campus rules.',
      'populist-insurgents': 'A defining distrust. Rules change with a student’s status, politics, or connections, and standards move when donors, politicians, or activists apply pressure.',
    },
  },
  {
    id: 'intellectual-hospitality',
    layer: 'cult-inquiry',
    icon: 'MessageCircle',
    title: 'Intellectual Hospitality',
    formalName: 'Intellectual Hospitality',
    whatItMeasures: 'Can a student voice an unpopular opinion in class without paying for it? Can a professor follow the evidence somewhere inconvenient? Are controversial speakers judged by one standard, whichever side they come from? The question extends to the knowledge the institution produces: whether research follows the evidence independently, or bends toward conclusions decided in advance — the concern at the center of the sector\u2019s own 2026 self-examinations. What this measures is the openness and independence of inquiry itself, separate from whether the people holding ideas feel they belong.',
    sharpestSplits: 'Half of the pair that defines the Communitarians (with Moral Recognizability): they judge campus genuinely open; Pragmatists and Skeptics doubt it.',
    typeViews: {
      'institutional-reformers': 'Workable, in their experience — inquiry functions, with room at the edges for the pressures every institution faces.',
      'results-oriented-pragmatists': 'A defining reservation. For a type otherwise satisfied with the deal, the intellectual climate is where their confidence stops.',
      'grassroots-communitarians': 'The typology’s warmest verdict: students can speak, professors can follow evidence, and controversial ideas are judged by consistent standards — a verdict carried by the campuses they know best, where the relationship is felt.',
      'fair-deal-skeptics': 'Doubtful, at a distance — campus speech is not their fight, but they extend little confidence that unpopular views travel safely.',
      'populist-insurgents': 'Doubtful: what gets said, studied, and platformed bends to the same pressures that bend the rules.',
    },
  },
  {
    id: 'moral-recognizability',
    layer: 'membership',
    icon: 'HeartHandshake',
    title: 'Moral Recognizability',
    formalName: 'Moral Recognizability',
    whatItMeasures: 'Can you go to college as who you are — religious, working-class, rural, from a minority community — and have your people treated as a real part of the place rather than a problem to manage or a symbol to display? This is different from being allowed to speak: it is about whether your community and its way of life count as legitimate members of the institution’s world, and whether success there requires leaving them behind.',
    sharpestSplits: 'The other half of the Communitarian pair (with Intellectual Hospitality) — and the widest belonging gap: Communitarians feel counted in; Skeptics and Pragmatists do not.',
    typeViews: {
      'institutional-reformers': 'Largely at home: the institution’s welcome is broad and mostly genuine, even if imperfect.',
      'results-oriented-pragmatists': 'A defining reservation, paired with their doubts about open debate: the campus’s moral world feels narrower than its admissions brochure. For part of this type that narrowness is a manageable reservation; for another part it is the wound that outweighs a working deal.',
      'grassroots-communitarians': 'An unambiguous yes: religious and traditional groups, minority communities, and non-college families register as real members, not managed constituencies — belonging as it is lived at mission- and faith-based campuses, community colleges, and regional publics.',
      'fair-deal-skeptics': 'Skeptical — college success too often seems to require leaving a working-class, rural, or non-college way of life behind.',
      'populist-insurgents': 'Mixed. Insurgents divide here; belonging is not their core grievance — conduct after failure is.',
    },
  },

  // ── Layer III: The Institutional Claim ────────────────────────────────────
  {
    id: 'public-purpose-fidelity',
    layer: 'public-purpose',
    icon: 'Globe',
    title: 'Community Benefit',
    formalName: 'Public-Purpose Fidelity',
    whatItMeasures: 'Colleges receive a lot from the public — funding, tax breaks, the power to grant degrees, freedom from political control — all justified by the claim that they serve society. Does their conduct back up the claim? Or does the public-service language mostly protect the institution’s own budgets, prestige, and people? This is about whether the mission talk matches what the institution actually does when service gets expensive.',
    sharpestSplits: 'Reformers and Pragmatists see the public genuinely served; Skeptics and Insurgents see public language protecting private advantage.',
    typeViews: {
      'institutional-reformers': 'Privileges earned, in their reading: benefits flow well beyond campus, and service language is backed by conduct.',
      'results-oriented-pragmatists': 'Value returned: whatever their cultural reservations, Pragmatists judge that society gets real value back for what it grants higher education.',
      'grassroots-communitarians': 'Leaning skeptical — the community-serving language rings truer at the local campus than in the sector’s decisions when service becomes costly.',
      'fair-deal-skeptics': 'Skeptical: public privileges now protect institutions and the already-advantaged more than the wider public that pays for them.',
      'populist-insurgents': 'Skeptical, and consistently so: the public-service claim is exactly the kind of institutional self-description they no longer take on faith.',
    },
  },
  {
    id: 'authority-warrant',
    layer: 'inst-overreach',
    icon: 'Landmark',
    title: 'Institutional Overreach',
    formalName: 'Authority Warrant and Boundedness',
    whatItMeasures: 'Two linked questions about authority. Does a degree actually prove what a graduate knows and can do — or does it mostly trade on the institution’s name? And when university leaders speak for the whole institution on public disputes, have they earned that standing, or are they reaching past it? Expertise earns authority; this asks whether the authority is backed up, and whether it stays inside what earned it — including whether an institution that promises to be all things to all people has stayed inside any warrant at all.',
    sharpestSplits: 'No type is fully comfortable here; the divide runs between the Reformers’ qualified confidence and everyone else’s qualified doubt.',
    typeViews: {
      'institutional-reformers': 'Within bounds, mostly: degrees rest on defensible standards and institutional voice generally stays within its warrant — the softest of the Reformers’ trusts.',
      'results-oriented-pragmatists': 'Split: the credential mostly works as evidence, but institutional pronouncements beyond that competence get little deference.',
      'grassroots-communitarians': 'Mixed — a community they recognize, wielding an authority they are not sure it has earned.',
      'fair-deal-skeptics': 'Doubtful: a degree that relies on the institution’s name rather than proof of learning is part of how the promise broke.',
      'populist-insurgents': 'Doubtful: authority that cannot demonstrate its standards, and speaks beyond them, is authority extended on credit they will no longer advance.',
    },
  },

  // ── Layer IV: The Conditions of Repair ────────────────────────────────────
  {
    id: 'institutional-correctability',
    layer: 'accountability',
    icon: 'RefreshCw',
    title: 'Self-Correction',
    formalName: 'Institutional Correctability',
    whatItMeasures: 'When something at a college is failing — a program, a policy, a promise — can the institution see it and fix it on its own? Or does it protect the failure until outside pressure makes protecting it too expensive, comply while the spotlight is on, and drift back when attention fades? This is about the capacity to learn: noticing, changing, and keeping the change.',
    sharpestSplits: 'The single widest gap in the typology: Reformers believe institutions learn; Insurgents believe they comply and revert.',
    typeViews: {
      'institutional-reformers': 'The heart of their theory of reform: colleges can identify failure, make hard changes, and sustain them — renewal from within is a real capacity, not a hope.',
      'results-oriented-pragmatists': 'Conditionally convinced: institutions can correct course, especially when results and public rules make failure visible.',
      'grassroots-communitarians': 'Split — communities renew themselves; whether administrations do is another question.',
      'fair-deal-skeptics': 'Guardedly open. Alone among the skeptical types, Skeptics retain real belief that institutions can learn — which is why their remedy is better paths, not punishment.',
      'populist-insurgents': 'The typology’s bleakest judgment: colleges protect failing programs until pressure makes protection costly, then revert when attention fades. This is why nothing short of compulsion persuades them.',
    },
  },
  {
    id: 'institutional-answerability',
    layer: 'accountability',
    icon: 'Megaphone',
    title: 'Public Accountability',
    formalName: 'Institutional Answerability',
    whatItMeasures: 'When a college harms someone — a student, a family, a community — do they get more than a meeting? Can they get real reasons, a review independent enough to overturn a bad decision, a complaint process that actually triggers investigation and consequences? This is about whether the institution must answer to the people it affects, not whether it is capable of improving on its own.',
    sharpestSplits: 'Reformers trust the channels of account; Insurgents and Communitarians — for different reasons — judge that harmed people cannot get a review with teeth.',
    typeViews: {
      'institutional-reformers': 'Answerable, in their experience: people harmed by a college can get reasons, review, and remedy — real answerability is what makes internal renewal trustworthy. Even here, though, a current within the type holds its trust more conditionally, wanting answerability with more teeth than internal channels provide.',
      'results-oriented-pragmatists': 'Split: recourse works unevenly — a gap public rules on results could close without touching the classroom.',
      'grassroots-communitarians': 'A defining doubt, and the root of their remedy: affected people lack real standing — which is exactly what shared formal decision power would repair.',
      'fair-deal-skeptics': 'Comparatively hopeful for a distrusting type: accountability can work, if demand and resources flow to institutions that answer for their results.',
      'populist-insurgents': 'A defining distrust: complaints rarely trigger investigation, remedy, or consequence — the reason their trust now requires enforcement.',
    },
  },
  {
    id: 'governance-of-repair',
    layer: 'accountability',
    icon: 'Compass',
    title: 'Reform Authority',
    formalName: 'Authorized Governance of Repair',
    whatItMeasures: 'Picture a college that keeps breaking its promises. Who should have the power to put it right — its own board and faculty, checked by independent reviewers? Government, setting rules or taking charge? Students and employers, taking their money and trust elsewhere? The people it affects, with real votes? There is no “trusting” answer here: this question locates each person’s theory of reform, and it is where people who agree on the diagnosis part ways.',
    sharpestSplits: 'This is the question that separates people who share a diagnosis: every type authorizes a different repair.',
    typeViews: {
      'institutional-reformers': 'College-led reform, independently reviewed (their most common choice, by a wide margin): boards, leaders, and faculty make the plan; independent reviewers verify the results. Renewal from within, verified from without. A smaller current leans toward formal power for affected people — stewards for whom internal review, even verified, no longer feels like enough.',
      'results-oriented-pragmatists': 'Public rules with local academic control (their most common choice): government may set conditions on cost, safety, and results — but teaching and research stay in academic hands.',
      'grassroots-communitarians': 'Shared formal decision power (their most common choice): students, faculty, staff, and community members help decide major reforms. Membership with authority, not consultation.',
      'fair-deal-skeptics': 'Fund better paths (their most common choice): put resources into alternatives — community colleges, apprenticeships — and let institutions that cannot deliver shrink or close. Keep the promise, wherever it can be kept. No type spreads more widely on this question: verified internal reform and public rules also draw real shares here — a plurality worth watching when real data arrives.',
      'populist-insurgents': 'Government takes charge (their most common choice): require changes, replace leaders, attach consequences to public money. When institutions cannot correct themselves, someone with authority must. A substantial wing, though, would sooner fund the alternatives and let failing incumbents shrink — the argument between commanding repair and exiting to it runs inside this type.',
    },
  },
]
