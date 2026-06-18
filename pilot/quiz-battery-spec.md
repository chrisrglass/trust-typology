# Trust Project: Quiz Battery Specification

**Target:** 16 clustering items + 6 demographic items + 4 EX covariates = 26 total questions  
**Assignment method:** Nearest-centroid (Pew model) — respondent assigned to class whose centroid profile is closest to their responses  
**Basis:** Pew-group pilot (N=100), naturalistic pilot (N=50), excluded-items pilot (N=50); finalization in `finalization-recommendations.md` + `excluded-items-findings.md`

---

## Part I: Clustering Battery (15 items)

These items go into the LCA model and define the class centroids. They are also the items used for quiz assignment via nearest-centroid scoring.

Items are listed in recommended **quiz display order** — moving from personal/economic (high completion) to structural/institutional (higher dropout risk).

| # | Item | Type | Naturalistic %B | What It Captures |
|---|---|---|---|---|
| 1 | **D2-F** | 3-option | 40%A / 6%B / 54%C | Primary classification axis: purpose of HE (civic / moral-spiritual / career-credential) |
| 2 | **D5-B** | Binary | 76% B | Mobility skepticism: whether HE is still a reliable path for low-income families |
| 3 | **D1-E** | 4-option | 2%A / 78%B / 20%C / 0%D | **[Reinstated]** Behavioral advice intent: what you'd tell a young person about college |
| 4 | **D6-A** | Binary | 54% B | Local embeddedness: whether the local institution genuinely cares about the community |
| 5 | **D6-B** | Binary | 66% B | Research reach: whether graduates and research benefit communities like mine |
| 6 | **D6-C** | Binary | 22% B | Prestige investment: equal trust in community colleges vs. research universities |
| 7 | **D2-C** | Binary | 68% B | Intellectual formation: whether college actually produces the deeper learning it claims |
| 8 | **D4-A** | Binary | 90% B | Religious inclusion: whether students with strong faith are genuinely welcomed |
| 9 | **G1** | Binary | 54% B | Mission scope: global (strongest students from everywhere) vs. domestic-first |
| 10 | **G2** | 4-option | 4%A / 6%B / 18%C / 72%D* | International enrollment stance — see wording note below |
| 11 | **G3** | 4-option | 30%A / 12%B / 8%C / 50%D | Foreign government involvement: collaboration vs. restriction vs. federal mandate |
| 12 | **R-A1** | Binary | 84% B | Self-reform capacity: can HE institutions meaningfully fix themselves? |
| 13 | **R-B** | **3-option** | 32%A / 28%B / 40%C† | Reform / replace / **varies widely** — see upgrade note below |
| 14 | **R-A2** | 4-option | 2%A / 10%B / 44%C / 44%D | Reform pathway: internal leadership / external pressure / both / disruption |
| 15 | **FA-A-faculty** | Scale 1–4 | mean 2.2 | Confidence in faculty acting in students' genuine interests |
| 16 | **FA-A-administrators** | Scale 1–4 | mean 3.3 | Confidence in college administrators acting in students' genuine interests |

*G2 distribution from naturalistic pilot (pre-wording revision). Distribution expected to shift after revision — see note below.  
†R-B distribution from excluded-items pilot (N=50, first exposure to 3-option version).

*G2 distribution from naturalistic pilot (pre-wording revision). Distribution expected to shift after revision — see note below.

### D1-E: Reinstated as Item 3

D1-E ("If a young person you care about asked whether to pursue a four-year college degree, what would you tell them?") was in Tier 1 in the Pew-group pilot (82pp spread) and was accidentally omitted from the finalization spec. The excluded-items pilot (N=50) confirms 76pp naturalistic spread.

Option C ("Consider vocational training or a two-year credential") attracted 20% of respondents and was chosen exclusively by white respondents with lower educational attainment. Option D ("Skip college") attracted 0% — the "against college" position in American culture manifests as vocational redirection, not blanket rejection. Option A ("Go — worth it") was near-floor (2%).

The item adds a behavioral-advice dimension (revealed preference, not abstract assessment) not captured by D5-B (systemic mobility skepticism) or D2-F (purpose orientation).

**Display position:** After D5-B (mobility skepticism) and before the community embeddedness block — it bridges the abstract "path to mobility?" question with a personalized behavioral choice.

### R-B Upgrade: Binary → 3-Option

The excluded-items pilot is the first time option C ("The challenges vary widely — some institutions are in serious trouble, others are doing reasonably well; there is no single problem requiring a single solution") was offered to respondents. It attracted 40% of the sample on first exposure.

Graduate-educated respondents chose option C at 48% — they almost unanimously avoided option B (replace), splitting evenly between A (reform) and C (varies). High-income respondents (over $150k) chose C at 100%.

**This is a measurement correction, not an addition.** The binary R-B was forcing approximately 40% of respondents — particularly the most educated and highest-income — into a false choice between "reform" and "replace" when their actual position is "it varies by institution." Upgrading to 3-option recovers this misclassification without increasing battery length.

**Updated R-B wording (in quiz flow):**
> Thinking about the problems facing higher education in the United States today, which comes closest to your view?
> - A: The problems are serious but fixable — higher education needs significant reform from within.
> - B: Parts of the system should be replaced by fundamentally different alternatives — not just reformed.
> - C: The challenges vary widely — some institutions are in serious trouble, others are doing reasonably well; there is no single problem requiring a single solution.

### G2 Wording (Revised)

The original D option ("contingent on demonstrating that domestic low-income students are not losing access") was too procedurally reasonable — 72% chose it in the naturalistic pilot, collapsing the distinctions between genuine internationalists, conditionally supportive moderates, and skeptics. The revised options sharpen A and D to force a clearer commitment.

**Current wording in `src/data/instrument.js` (revised 2026-06-18):**

> *A* — American universities are stronger because they recruit globally — the best students, researchers, and collaborators come from everywhere, and restricting that would make us weaker, not stronger.

> *B* — Universities have expanded international enrollment primarily to increase tuition revenue and improve their global rankings — at the cost of genuine access for domestic students, especially those from low-income and working-class families, and at the expense of their academic integrity.

> *C* — American universities should put qualified domestic applicants first — students from abroad are taking seats that should go to Americans, and institutions that receive public support and tax exemptions owe their first obligation to the people who fund them.

> *D* — Universities should freeze or reduce international enrollment until they can demonstrate with evidence that domestic low-income and first-generation students are gaining seats and financial aid — not losing them.

---

## Items Dropped from Clustering Battery

### Floor Items (zero or near-zero discriminant validity — both pilots)

| Item | Naturalistic %B | Reason |
|---|---|---|
| **D2-B** | 100% | Viewpoint suppression: universal agreement in both pilots — not a classifier |
| **D3-C** | 100% | Values-practice gap: universal agreement in both pilots |
| **D3-A** | 98% | Leadership self-interest: near-floor; only 1 of 50 naturalistic respondents chose A |

These represent genuine public consensus, not classification fault lines. Retain in the full descriptive survey as toplines; remove from clustering battery.

### Redundant Items (high pairwise concordance with a better item)

| Item | Redundant With | Concordance | Decision |
|---|---|---|---|
| **D5-D** | D5-B | 96% | Drop D5-D; D5-B has better spread (76% vs 80% B) |
| **D2-A** | D2-C | 88% | Drop D2-A; D2-C has better spread (68% vs 80% B) |
| **FA-A-trustees** | FA-A-administrators | Near-floor | Drop trustees (76% chose "none at all"); keep faculty + administrators |

### Previously Dropped (from Pew-group pilot)

| Items | Reason |
|---|---|
| D1-F, D1-G, D3-B, D3-D, D5-A, D5-C2 | Zero spread in Pew-group pilot |
| D4-B, D4-C, D4-D2 | <20pp spread — near-universal agreement |
| EX-A, EX-B | 100% "yes" — no variation |
| D1-D1, D1-D2, D3-E, D1-B | <30pp spread or marginal signal |
| D2-E, D5-C1, D1-A | Redundant with higher-signal items from same dimension |
| EX-D | Too attitudinal for clustering; use as post-LCA validation covariate |

---

## Part II: Demographic Items (6 items)

These items are NOT used in the LCA clustering model. They characterize classes after formation and support cross-sectional equity analysis. They appear after the clustering battery in quiz flow.

### D-1. Employment Sector

Strongest single demographic discriminant in naturalistic pilot. Education workers: 73% believe reform is possible, 27% domestic-first, 18% career-purpose. Trades/self-employed: 100% on every skepticism measure.

> *Which of the following best describes your current or most recent employment?*
> - Education (K-12 school, college, or university)
> - Healthcare or social services
> - Government or public sector (other than education)
> - Private business or corporate sector
> - Nonprofit, advocacy, or faith-based organization
> - Self-employed, small business owner, or trades
> - Currently not employed

### D-2. Community Type

Geographic anchor for D6 community embeddedness items.

> *How would you describe the community where you live?*
> - Major city (more than 250,000 people)
> - Suburb of a major city
> - Small city or large town (25,000–250,000 people)
> - Small town or rural area (under 25,000 people)

### D-3. Household Income

Mobility items (D5-B) split sharply by income. Essential for equity cross-tabs.

> *What is your household's approximate annual income?*
> - Under $40,000
> - $40,000 to $79,999
> - $80,000 to $124,999
> - $125,000 or more
> - Prefer not to say

### D-4. Importance of Religion

Key for identifying Faith Formation class and interpreting D4-A responses.

> *How important is religion or faith in your daily life and decisions?*
> - Religion is at the center of how I understand my life and make decisions
> - Religion is important to me and shapes many of my decisions
> - Religion is one factor among many in how I live — not the primary one
> - Religion plays little or no role in my daily life

### D-5. Age Group

Essential for generational trend analysis and interpreting EX-G (education level) correctly.

> *What is your age?*
> - 18–29
> - 30–44
> - 45–59
> - 60 or older

### D-6. Race or Ethnicity

Required for equity cross-tabs on D5 mobility items. Multi-select.

> *How do you identify racially or ethnically? (Select all that apply)*
> - White or Caucasian
> - Black or African American
> - Hispanic or Latino
> - Asian American or Pacific Islander
> - Native American or Alaska Native
> - Another race or ethnicity
> - Prefer not to say

---

## Part III: EX Covariates (4 items)

These appear last and are not used in classification. They support post-LCA characterization and external validity checks.

| Item | Keep/Drop | Rationale |
|---|---|---|
| **EX-C** (how closely follow HE news) | Keep | Strongest scale spread in both pilots; identifies high- vs. low-engagement audiences |
| **EX-E** (how much own experience shaped views) | Keep | 70pp spread; proximity-to-institution measure independent of education level |
| **EX-F** (types of institutions with experience) | Keep | Selective/flagship → Trustee pattern; community-only → Pragmatist pattern |
| **EX-G** (own education level) | Keep | Strongest demographic class predictor; Trustees = 100% bachelors+; Pragmatists = mixed |
| EX-A, EX-B | Drop | 100% "yes" — no variation |
| EX-D | Validation covariate | Use post-LCA to check external validity; do not include in clustering battery |

### Confirmed Floor — Excluded-Items Pilot (N=50)

Additional items confirmed as floor or unusable in the excluded-items pilot. These are now double-confirmed across both the Pew-group pilot and the naturalistic excluded-items pilot.

| Item | Distribution | Reason |
|---|---|---|
| **D3-E** | 100% B | AI deployment: universal consensus that colleges prioritize cost savings over student welfare |
| **D4-C** | 100% B | Self-censorship: universal consensus that students self-censor — no classification signal |
| **D5-C1** | 100% B | Genuine recruitment: universal consensus that colleges favor advantaged families |
| **D1-A** | 90% A, 10% B | Cost vs. worth: extreme skew; 80pp spread unusable due to 9:1 asymmetry |
| **D2-D** | 20% major / 78% moderate / 2% minor | AI fraud: piles at "moderate problem" — no discrimination |
| **R-C** | 16% somewhat confident / 68% not too confident / 16% not at all | 10-year confidence: 68% at midpoint — anchors rather than discriminates |

---

## Summary: Full Quiz Structure

| Section | Items | Count |
|---|---|---|
| Clustering battery | D2-F, D5-B, **D1-E**, D6-A, D6-B, D6-C, D2-C, D4-A, G1, G2, G3, R-A1, **R-B (3-opt)**, R-A2, FA-A-faculty, FA-A-administrators | **16** |
| New demographic items | Employment, community type, income, religion importance, age, race/ethnicity | 6 |
| EX covariates | EX-C, EX-E, EX-F, EX-G | 4 |
| **Total quiz length** | | **26 items** |

Changes from prior spec: D1-E reinstated (+1 item); R-B upgraded from binary to 3-option (no change in item count). The FA-A two-item scale and five multi-option items (D2-F, D1-E, G2, G3, R-A2) are efficient — each carries three or four response options while taking up the screen space of one question.

---

## Provisional Class Structure (pre-LCA)

Six classes suggested by pilot data. Names and profiles are provisional pending LCA on fielded data.

| Class | Pilot % | Core Signature |
|---|---|---|
| **Credential Pragmatist** | 42% | Career purpose + domestic mission + want replacement via market disruption |
| **Institutional Trustee** | 20% | Civic purpose + global mission + believe reform is possible |
| **Mission-Aligned Abolitionist** | 14% | Civic purpose + want replacement; believe the mission but not these institutions |
| **Critical Reformer** | 10% | Civic purpose + cannot self-reform + want reform not replacement; need external accountability |
| **Outcomes-Focused** | 8% | Career purpose + global mission; may merge with Trustee or Pragmatist in LCA |
| **Faith Formation** | 6% | Moral-spiritual purpose + domestic mission + want replacement via external pressure |

The three-way classification logic: **D2-F** (purpose) → **G1** (mission) → **R-A1 + R-B** (reform capacity and preference).

---

## Post-LCA: Building the Nearest-Centroid Classifier

Once LCA defines the trust classes on the full fielded sample (target N=400–600):

1. Compute each class's **response profile** (centroid) across the 15 clustering items
2. For any new quiz respondent, compute the **distance** between their answers and each class centroid
3. Assign respondent to the class with minimum distance
4. Show respondents their class name and description; optionally show distance to adjacent classes

The demographic items appear after the quiz result — they enrich the respondent's understanding of how they compare to others in their class along demographic dimensions, but play no role in the assignment itself.

---

*Revised 2026-06-18 (v3): excluded-items pilot (N=50, excluded-items-responses.json) added D1-E (+1) and upgraded R-B to 3-option. Prior revision 2026-06-18 (v2): naturalistic pilot (N=50, quiz-responses.json), finalization-recommendations.md. Supersedes prior 20-item specification.*
