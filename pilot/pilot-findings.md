# Trust Project: Pilot Study Findings

> **Historical document (pre-canonical).** This pilot predates the final seven-community typology and uses earlier group names and a 47-item draft instrument. The canonical seven types and the fielded 35-item instrument live in `src/data/classes.js` and `src/data/instrument.js`. Kept unedited as a record of instrument development.

**Pilot N:** 100 simulated respondents across 9 Pew Political Typology groups  
**Method:** Agent-based simulation; each agent assigned a detailed demographic and attitudinal persona drawn from the 2026 Pew typology, completed all 47 items independently  
**Purpose:** Discriminant validity — identify items that separate groups, items that fail, and the likely structure of trust classes before fielding

---

## Executive Summary

The pilot reveals that trust in American higher education is not a single dimension running from high to low. Most Americans are skeptical of higher education in some way — the differences between them are structural: *what they distrust, why, and what they think should be done about it*. The instrument captures this multi-dimensional structure well, with one important exception: a cluster of items about obvious failures (administrative bloat, cost opacity, unfair selective admissions) produced universal skepticism and will need revision before fielding.

The data point toward a **four-to-five class structure** that cuts across conventional left-right lines. The most important cross-cutting dimension in the instrument is not academic freedom or campus culture — it is the *purpose* of higher education and the *pathway* through which reform should come.

---

## I. Instrument Health: What Worked and What Didn't

### Items That Produced Zero Between-Group Variation

Six items generated **identical responses across all nine typology groups** — every group chose the same answer. These items have no discriminant value and should be revised or dropped from the clustering battery before fielding.

| Item | Response | What It Means |
|---|---|---|
| D1-F | 100% A: debt constrains life choices | Everyone agrees student debt is seriously constraining |
| D1-G | 100% B: degree inflation is real | Everyone agrees employers over-require credentials |
| D3-B | 100% B: administrative bloat drove up costs | Universal agreement |
| D3-D | 100% B: colleges close ranks in crisis | Universal agreement |
| D5-A | 100% B: selective admissions favor the wealthy | Universal agreement |
| D5-C2 | 100% B: post-admission support is inadequate | Universal agreement |

These are not failures of the instrument's theory — they reflect something real. The critique of higher education on cost, credential inflation, administrative bloat, and admissions fairness has achieved something close to consensus across the political spectrum. That consensus is itself a finding, but it cannot support classification. A forced-choice item that everyone answers the same way produces no information about who belongs in which class.

**Recommended revisions:** Convert these from forced-choice agreement items to *degree* or *salience* items. For example, D5-A could become: "Compared to 20 years ago, do you think the admissions process at selective colleges has become more or less fair for low-income students?" Or reframe the forced choice so one option represents a genuine alternative view that some respondents actually hold.

**Covariates to also flag:** EX-A (know someone HE improved) and EX-B (know someone HE made worse) both produced 100% "yes" across all groups — zero variation. These should be reformulated as valence or proximity items rather than yes/no.

### Items with Low but Non-Zero Variation

Three additional items produced very low discrimination (< 20pp spread), driven almost entirely by Loyal Liberals being the only group to resist the dominant response:

- **D4-B** (working-class students must abandon their identity): 98% B across all groups; 9pp spread
- **D4-C** (self-censorship is common on campus): 98% B; 18pp spread
- **D4-D2** (AI tools encode secular values): 98% B; 18pp spread

D4-C in particular is theoretically important — the self-censorship question maps onto a major public debate. But when only one group dissents (LL, at 82% vs. 98-100% for everyone else), the item cannot support class differentiation. Possible revision: restructure to distinguish *who* is being silenced and *what kind* of speech, which would reveal genuine differences.

### Items with Strong Discriminant Validity

Thirteen items produced spread greater than 80 percentage points — more than enough to anchor a latent class structure:

| Item | Spread | What It Captures |
|---|---|---|
| R-A1, R-B | 100pp | Whether HE can reform itself; whether reform or replacement is needed |
| G1 | 100pp | Global vs. domestic mission — who universities are for |
| D6-A, D6-B | 100pp | Whether local institutions actually serve their communities |
| D2-A, D2-C | 100pp | Whether academic standards and intellectual formation are real |
| D2-F | 100pp | *Purpose* of higher education: civic, moral/spiritual, or career |
| D4-A | 92pp | Whether religious students are genuinely welcomed |
| D5-B, D5-D | 91pp | Whether HE is still a mobility path or now reinforces class division |
| D3-A | 82pp | Whether college leadership acts in students' interests |
| D1-E | 82pp | Actual advice given to a young person about attending |

The reformability items (R-A1, R-B) and the mission items (G1, D2-F) are the most theoretically powerful. They do not just measure distrust — they reveal the *logic* behind it.

---

## II. The Structure of Distrust

### Mean Skepticism Scores by Group

To compute an overall skepticism score, each respondent's responses on the 34 binary clustering items were coded 0 (trusting response) or 100 (skeptical response), then averaged.

| Group | Mean Skepticism | SD |
|---|---|---|
| Faith First Conservatives (FFC) | 83.7 | 2.5 |
| No Apologies Right (NAR) | 80.3 | 2.1 |
| Unconventional Right (UR) | 80.2 | 2.5 |
| Left-Out Left (LOL) | 77.4 | 2.8 |
| Tuned-Out Middle (TOM) | 70.7 | 9.7 |
| Order and Opportunity Left (OOL) | 69.7 | 8.1 |
| Leftward Progressives (LP) | 68.2 | 5.2 |
| Pragmatic and Polite Right (PPR) | 66.4 | 7.6 |
| Loyal Liberals (LL) | 43.5 | 9.2 |

The first thing to notice is how compressed the middle of this distribution is. LP, OOL, TOM, and PPR differ by only 4 percentage points in overall skepticism — they are virtually identical on the dimension of *how much* they distrust higher education. The differences that matter are structural: *what* they distrust and *why*.

Loyal Liberals stand apart as the only group with a qualitatively different relationship to higher education — institutionally invested, reform-minded, and globally-oriented in ways no other group is. Their SD of 9.2 (the highest of any group) suggests meaningful internal variation worth examining.

### The Skepticism Is Not Uniform

Within similar overall skepticism scores, groups diverge sharply on specific dimensions:

**On academic standards (D2-A):** Loyal Liberals are the only group to predominantly say standards have held (0% skeptical). Leftward Progressives split (33% skeptical). Everyone else clusters at 83-100% skeptical — but for different reasons. LOL respondents distrust standards because they never saw rigorous education up close; PPR respondents distrust them because they believe political conformity has replaced intellectual rigor.

**On community connection (D6-A):** Loyal Liberals are the only group where a majority believe their local college is genuinely connected to community (0% skeptical). This is arguably the most revealing item in the instrument — it separates people whose relationship to higher education is abstract (reading and hearing about it) from those who have experienced a genuine local presence. NAR and UR are 100% skeptical on this item; TOM is 75% skeptical.

**On the faculty-administrator gap:** Every group trusts faculty more than administrators, but the level varies meaningfully:

| Group | Faculty mean | Admin mean | Gap |
|---|---|---|---|
| LL | 1.73 | 2.73 | +1.00 |
| LP | 2.00 | 3.50 | +1.50 |
| PPR | 2.00 | 3.00 | +1.00 |
| FFC | 2.36 | 3.64 | +1.27 |
| LOL | 2.64 | 3.91 | +1.27 |
| UR | 3.00 | 4.00 | +1.00 |
| NAR | 3.00 | 4.00 | +1.00 |

The faculty-administrator gap holds across the ideological spectrum — this is one of the most stable structural findings in the pilot. UR and NAR have collapsed trust in faculty (3.00 out of 4.00) but still trust them more than administrators. LP trusts faculty reasonably well (2.00) but has almost no trust in administrators (3.50). LL retains meaningful trust at both levels.

---

## III. Three Dimensions That Define the Typology

The pilot suggests that trust classes are not defined primarily by overall skepticism level. They are defined by three underlying dimensions:

### Dimension 1: Purpose of Higher Education (D2-F)

This is the deepest dividing line in the instrument and the most cross-cutting relative to conventional political alignment.

| Purpose | Groups | % choosing |
|---|---|---|
| Civic / intellectual formation | LP, LL | 100% each |
| Career preparation and credentials | LOL, OOL, TOM | 91-100% each |
| Moral and spiritual formation | FFC | 100% |
| Career + some moral/spiritual | UR, NAR | 73-80% career, 20-27% moral |
| Career + some civic | PPR | 64% career, 36% civic |

The civic-purpose groups (LP, LL) and the career-purpose groups (LOL, OOL, TOM) share no common answer on this item — but they often agree on specifics like administrative bloat and cost. The moral-purpose group (FFC) is distinctive in a different direction: they share LP's rejection of the career-credential frame but ground it in religious formation rather than civic reasoning.

This three-way split — civic, moral, credential — is not captured in existing surveys of trust in higher education and could be the primary dimension for LCA model specification.

### Dimension 2: Reform Pathway (R-A1, R-B, R-A2)

When asked whether higher education can reform itself and what would drive change, four distinct positions emerge:

**"Reform is possible, from within plus without" (Reformist):** LL is the only group where 100% choose this position. PPR and OOL also lean here. These groups are skeptical of institutions but retain belief in their potential for improvement.

**"External pressure is necessary" (Mandater):** NAR (80%), FFC (55%), LP (58%), OOL (45%). The interesting finding is that LP and NAR converge on "external pressure" — but for entirely different reasons. LP wants accountability for equity failures; NAR wants accountability for ideological capture.

**"The institutions should be replaced, not reformed" (Replacer):** LOL (82%), UR (82%), TOM (67%). The Replacers include both the economically excluded (LOL) and the ideologically alienated (UR) — a theoretically important alignment that shares a conclusion (replacement) but arrives there through different grievances.

**Internal leadership alone:** No group chose this as a primary answer. Confidence in institutional self-governance has essentially collapsed across the entire sample.

### Dimension 3: Global vs. National Mission (G1, G2)

G1 (whether global or domestic mission should take priority) and G2 (what to do about international enrollment) reveal a genuine left-right split that is more traditional but cuts through the groups in illuminating ways:

**Pro-global / conditional (trust international presence):** LP (0% domestic-first), LL (0%), OOL (0% domestic-first; 100% conditional)

**Domestic-first (restrict international presence):** NAR (100%), UR (100%), FFC (64%)

**Left critique of internationalization (LOL):** The most theoretically interesting response. LOL chooses "revenue capture critique" at 82% on G2 — not domestic nationalism but a left populist argument that universities have expanded international enrollment primarily to extract tuition, at the expense of access for domestic low-income students. This position is distinct from LP's conditional progressivism and from NAR's nationalism, and it does not appear in current public discourse about international enrollment.

**Conditional / access-protective (PPR):** 82% choose the conditional option — supportive of international enrollment in principle but concerned about domestic access. This aligns them unexpectedly with OOL on this dimension.

---

## IV. A Provisional Class Structure

The pilot data suggest a **four-class typology** rather than the nine Pew groups. The instrument's clustering items appear to distinguish classes not by political identity but by the logic underlying distrust:

### Class 1: Institutional Trustees

*Anchor group: Loyal Liberals*

High confidence in higher education's fundamental mission. Costs are too high; the credential is still worth it. Administrators have gotten too powerful; faculty are doing reasonable work. Global mission is genuinely valuable. Reform is possible with the right internal leadership and some external accountability. Purpose: civic and intellectual formation.

**Distinctive pattern:** R-A1 at 0% skeptical; G1 at 0% domestic-first; FA-A-administrators at 2.73 (the lowest of any group); D2-A at 0% skeptical. LL is the only group where a majority trust administrators to any degree and believe the intellectual mission of college is being fulfilled.

### Class 2: Critical Believers

*Core groups: Leftward Progressives + Order and Opportunity Left, with partial overlap from Pragmatic and Polite Right*

These respondents believe in the potential of higher education but are deeply skeptical that institutions are living up to it. LP and OOL agree on nearly every critique — administrative self-interest, cost opacity, failure to support first-gen students, degree inflation — but their frameworks differ. LP frames the failure as structural inequality and mission drift. OOL frames it as broken promise and financial betrayal. Both see purpose as either civic (LP) or credential-focused (OOL), but both remain invested enough to support reform with accountability.

**Distinctive pattern:** High skepticism on process and governance, lower skepticism on mission; R-A1 moderate (82-92% no self-reform); R-A2 split between external pressure and both; D5-D high (82-100% B); D6-C 100% prefer community colleges. This class is the reform coalition — unhappy enough to demand change, invested enough to stay.

### Class 3: Excluded Pragmatists

*Core groups: Left-Out Left + Tuned-Out Middle*

The most economically excluded groups, characterized by low engagement with HE debates (EX-C high among LOL/TOM) and career-first purpose frameworks. They are not alienated from higher education by ideology — they are alienated by economic experience. LOL respondents predominantly have no degree or incomplete college; TOM respondents have mixed educational histories. Both groups prefer replacement models to reform. Their skepticism is not about what happens on campus; it's about whether the institution is even relevant to their lives.

**Distinctive pattern:** EX-C (news engagement) shows LOL at 3.36 and TOM at 3.92 — the least engaged groups in the sample. D2-F at 100% career. R-A2 predominantly replacement models. LOL's G2 "revenue capture critique" pattern — the only group choosing the left populist anti-internationalization position. Low confidence in all institutional actors (faculty 2.64, admins 3.91 for LOL). EX-D at 0% support for increased funding.

### Class 4: Cultural Adversaries

*Core groups: Unconventional Right + Faith First Conservatives + No Apologies Right (with substructure)*

The highest overall skepticism and the most internally coherent response pattern. These three groups agree on almost everything: domestic-first mission, replacement-or-mandate reform pathway, faith hostility, self-censorship, academic freedom suppression, and full distrust of administrators and trustees. The substructure within this class is worth flagging:

- **FFC** is distinctive on purpose: 100% moral/spiritual, vs. UR/NAR's 73-80% career. FFC respondents are not angry about ideological capture in the secular sense — they want a different institution, organized around religious formation.
- **NAR** is distinctive on reform pathway: 80% external pressure (government mandate), vs. UR's 82% replacement. NAR wants federal coercion; UR wants disruption and replacement.
- **UR** is distinctive on faculty: 3.00 mean, matching NAR — unlike FFC (2.36), which retains somewhat more confidence in faculty, possibly because faith-based faculty operate in a different context they respect.

The pilot suggests FFC may belong in its own class, constituting a fifth type: **Values-Mission Adversaries** distinct from the political adversaries (UR/NAR). The key differentiator is D2-F: FFC chooses moral/spiritual at 100%; UR and NAR predominantly choose career, with a minority choosing moral. If this pattern holds in fielded data, FFC would anchor a class built around the religious mission of education, not the culture-war framing of UR/NAR.

---

## V. Key Instrument Decisions Before Fielding

### Drop (or fundamentally restructure) these six items

D1-F, D1-G, D3-B, D3-D, D5-A, D5-C2 — all produced zero between-group variation. They are measuring something real (genuine consensus on failures of higher education) but that consensus does not support classification.

**Suggested replacement logic:** Shift from binary agreement to prioritization or salience. "Of the problems listed, which do you think is most responsible for declining public trust in colleges?" would capture real variation. Alternatively, add items about *remedies* — where respondents agree on diagnosis but diverge sharply on what should be done.

### Revise three additional items for stronger signal

D4-B, D4-C, D4-D2 are real, contested dimensions, but the current wording pushes respondents toward the skeptical option regardless of their underlying orientation. Restructuring these as scale items ("How serious a problem is this?") or adding a remedy dimension would restore discrimination.

### Retain with high confidence

The 13 high-spread items should anchor the LCA model specification, with particular weight on D2-F (purpose) and the R-block (reformability). G2 should be included in the clustering battery because its four options reveal a cross-cutting structure that binary items cannot capture.

### Add or restructure EX-A and EX-B

Both items produced 100% "yes" — reformulate as comparative or intensity items: "How much has your own direct experience shaped your view of higher education?" (already captured in EX-E, which had meaningful variation) or "Which experience has been more formative — knowing someone it helped or knowing someone it harmed?"

### D6-C: The Prestige Trust Item

The item asking whether respondents trust community colleges more than research universities produced an unexpected finding: Loyal Liberals are the only group who predominantly say "equal trust." Every other group trusts community colleges more — a nearly unanimous rebuke of the research university prestige hierarchy. This item's power lies precisely in this nearly-universal response: if LL is the only group whose relationship to higher education is partially organized by prestige attachment, that is theoretically significant for understanding what anchors institutional trust.

---

## VI. What to Expect From the Fielded Study

Based on the pilot, the fielded LCA should be specified with five to seven classes. The pilot suggests:

1. A small **high-trust/reform-minded class** (~10-15% of any representative sample), anchored by respondents with graduate degrees, higher incomes, and direct positive experience with research universities
2. A **disappointed-but-still-invested class** (~20-25%), probably the largest class, cutting across moderate left and moderate right — unified by belief in reformability and civic purpose
3. A **credentialist-excluded class** (~20-25%), predominantly respondents without degrees or with incomplete college, career-purpose orientation, low engagement with HE debates, skeptical of all reform
4. A **values-adversarial class** (~15-20%), religious and traditionalist, organized around the thesis that secular universities have abandoned moral formation
5. A **political-adversarial class** (~15-20%), organized around ideological-capture narrative, domestic-first mission, government intervention as the remedy

The most important thing to watch in the fielded analysis is whether the faith-and-formation class (FFC pattern) separates cleanly from the political-adversarial class (NAR/UR pattern) or collapses into one. In the pilot, they agree on almost every distrust item but diverge on purpose (moral vs. credential) and reform pathway (external pressure vs. replacement). Whether that divergence survives with real respondents who don't have the coherent personas agents were given is the primary methodological question.

---

*Pilot simulation completed 2026-06-18. N=100. Full response data: `pilot/responses.json`. For instrument files: `src/data/instrument.js`.*
