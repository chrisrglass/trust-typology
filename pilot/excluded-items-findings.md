# Excluded Items Pilot — Findings Report

**N = 50 | Diverse Americans, no pre-assigned group labels**
**Items tested: 10 excluded from current 15-item quiz battery**
**Method: Naturalistic agent simulation (same protocol as N=50 quiz pilot)**

---

## Overview

Three meaningful findings emerge from this pilot:

1. **D1-E should be reinstated.** The item was in Tier 1 in the Pew-group pilot (82pp spread) and was accidentally omitted from the final quiz-battery spec. Naturalistic spread: 76pp. Adds a behavioral-advice dimension not captured elsewhere.

2. **R-B must be upgraded to 3-option.** Option C ("challenges vary widely — some good, some bad") was chosen by 40% of respondents in its first exposure. The binary version is forcing false choices for a large share of respondents, particularly the highly educated and middle/upper-income. This is a measurement correction to an existing item, not an addition.

3. **Six items are confirmed floor in a naturalistic sample.** D3-E, D4-C, D5-C1 returned 0pp spread (100% chose B). D1-A returned 90/10 skew. D2-D and R-C show severe midpoint piling. None are viable clustering items.

---

## Item-by-Item Spread Table

| Item | Distribution | Spread | Verdict | Dimension |
|------|-------------|--------|---------|-----------|
| **D1-A** | A=90%, B=10% | 80pp | REJECT — extreme skew | Cost vs. worth (unusable asymmetry) |
| **D1-C** | 1=18%, 2=46%, 3=30%, 4=6% | 40pp | MARGINAL — overlaps FA-A | Financial confidence scale |
| **D1-E** | A=2%, B=78%, C=20%, D=0% | **76pp** | **REINSTATE** | Behavioral advice intent |
| **D2-D** | 1=20%, 2=78%, 3=2% | 76pp | REJECT — piling at "2" | AI academic fraud (no discrimination) |
| **D3-E** | A=0%, B=100% | 0pp | CONFIRMED FLOOR | AI deployment stance |
| **D4-C** | A=0%, B=100% | 0pp | CONFIRMED FLOOR | Self-censorship climate |
| **D5-C1** | A=0%, B=100% | 0pp | CONFIRMED FLOOR | Genuine recruitment effort |
| **D6-D** | 2=58%, 3=12%, 5=30% | 46pp* | CONDITIONAL | Local welfare scale (see below) |
| **R-B (3-opt)** | A=32%, B=28%, C=40% | 12pp | **STRUCTURAL CORRECTION** | Contextual evaluator (see below) |
| **R-C** | 2=16%, 3=68%, 4=16% | 52pp | REJECT — midpoint piling | 10-year confidence (84% at 3+) |

*D6-D: 46pp spread is technically above threshold but driven by the "don't know" option (30%). Among evaluators who know a college well enough to judge (n=35), spread collapses to 83% "Some" / 17% "Not much" — effectively no discrimination among the engaged segment.

---

## D1-E: Reinstate as Item 16

**Spread: 76pp | A=2%, B=78%, C=20%, D=0%**

D1-E asks what advice you would give a young person about college. The meaningful discrimination is between:
- **Option B (78%)**: "Go, but only if you can do it without significant debt, or only for certain fields" — the broad qualified-support position
- **Option C (20%)**: "Consider vocational training, apprenticeship, or two-year credential" — active redirection away from four-year college

Option D ("Skip college — not worth it for most") attracted zero respondents. The "against college" position that exists in American culture does not manifest as blanket rejection — it manifests as vocational redirection.

**Demographic profile of option C choosers (n=10):**

| Characteristic | Option C | Option B |
|----------------|----------|----------|
| Race/ethnicity | 100% white non-Hispanic | 64% white, 26% Black, 23% Hispanic, 15% Asian |
| Education | Mostly no-college or some-college (60%) | Mostly bachelor's or graduate (72%) |
| Income | Concentrated in under-$30k and $60-100k | Spread across all income bands |

The option C profile is distinctly white and working-class or lower-education. All Black (n=10), Hispanic (n=9), and Asian (n=6) respondents chose B — none chose C or D. This is a notable pattern: for non-white respondents in this sample, the conditional-go stance is universal; the vocational-alternative stance is held exclusively by white respondents with lower educational attainment.

**Why this adds discriminant validity:** D5-B (current quiz item) asks whether HE is a reliable mobility path for low-income families. D1-E asks what advice you would personally give. The items are correlated but distinct — D5-B is a systemic assessment, D1-E is a revealed behavioral preference. The race/education stratification on D1-E may add classification signal not captured by D5-B alone.

**Flag for analysis:** The 100% white composition of C-choosers in this pilot (n=50) warrants attention in any live-field implementation. This may be a sampling artifact of the 50-person simulation or may reflect a real population pattern — flag for race-stratified analysis in the real instrument.

---

## R-B Three-Option: Structural Correction

**Distribution: A=32% (reform), B=28% (replace), C=40% (varies widely)**

This is the most consequential finding in the pilot. Option C — "The challenges vary widely — some institutions are in serious trouble, others are doing reasonably well; there is no single problem requiring a single solution" — attracted 40% of respondents in its first exposure, despite never having been offered before.

**Education stratification is striking:**

| Education | Reform (A) | Replace (B) | Varies (C) |
|-----------|-----------|-------------|------------|
| No college (n=6) | 0% | 33% | 67% |
| Some college (n=10) | 30% | 40% | 30% |
| Associates (n=3) | 0% | 67% | 33% |
| Bachelor's (n=10) | 30% | 50% | 20% |
| **Graduate (n=21)** | **48%** | **5%** | **48%** |

Graduate-educated respondents almost unanimously rejected "replace" (B). They split evenly between "reform" and "varies." The current binary R-B forces these respondents into option A, making the reform/replace dimension look like a gradient of optimism when it is actually a gradient of institutional differentiation. The most educated respondents see a heterogeneous system; less-educated respondents are more likely to see a uniformly broken one.

**Income stratification:**

| Income | Reform (A) | Replace (B) | Varies (C) |
|--------|-----------|-------------|------------|
| Under $30k (n=11) | 27% | 45% | 27% |
| $30–60k (n=13) | 38% | 8% | 54% |
| $60–100k (n=16) | 38% | 38% | 25% |
| $100–150k (n=5) | 40% | 40% | 20% |
| Over $150k (n=5) | 0% | 0% | **100%** |

High-income respondents (over $150k) unanimously chose "varies." Low-income respondents are most likely to want replacement (45%). Middle-income ($30-60k) strongly preferred "varies" (54%).

**Classification consequence:** The binary R-B was conflating two distinct positions — genuine reformers (who believe internal reform is possible) and contextual evaluators (who see institutional heterogeneity and resist the premise that there is a single problem). Graduate-educated, higher-income respondents who are currently classified as "reformers" in the quiz may actually be expressing contextual evaluation, not institutional confidence. Adding option C corrects this misclassification without increasing battery length.

**Recommendation: Replace binary R-B with 3-option R-B in the quiz battery.** This is a measurement correction, not an item addition. Net effect: 15 items remain, with R-B now offering three options.

---

## D6-D: Conditional

**Spread: 46pp | 2=58% (Some), 3=12% (Not much), 5=30% (Don't know)**

The spread calculation (46pp) nominally meets the 40pp threshold, but the spread is driven by the "don't know" option (30% of respondents don't know any college well enough to evaluate). Among the 35 respondents who do evaluate a college they know:
- "Some" (2): 29/35 = 83%
- "Not much" (3): 6/35 = 17%

That's an 66pp compression among evaluators — no useful discrimination.

The "don't know" segment (30%) is substantively interesting — these are people without meaningful institutional connection. But a single item that separates "connected" from "unconnected" respondents is better served by a direct "how close is your connection to a local college?" screener than by a welfare-assessment item where one option is abstention.

**Recommendation: Do not add D6-D to the quiz battery at this stage.** If the article's analysis suggests that institutional disconnection is a meaningful class dimension, add a direct connection-screener item rather than D6-D.

---

## Items Confirmed as Floor in Both Pilots

| Item | Pew spread | Naturalistic spread | Status |
|------|-----------|---------------------|--------|
| D3-E | Not tested | 0pp | Confirmed floor |
| D4-C | 18pp | 0pp | Confirmed floor |
| D5-C1 | Moderate | 0pp | Confirmed floor |
| D1-A | — | 80pp skew | Unusable asymmetry |
| D2-D | 45pp | 76pp, piles at "2" | Floor in practice |
| R-C | scale 1.64 | 68% at midpoint | Midpoint anchor |

D4-C (self-censorship) and D5-C1 (genuine recruitment effort) show zero spread — every respondent chose "students self-censor" and "colleges don't genuinely recruit" respectively. The consensus is so complete that these items offer no classification signal.

---

## Final Recommendations

**Action 1 (required): Reinstate D1-E as item 16.**
- 76pp naturalistic spread, 82pp Pew spread
- Adds behavioral-advice dimension (not in current battery)
- Battery: 16 clustering items

**Action 2 (required): Upgrade R-B from binary to 3-option.**
- 40% of respondents chose option C in first exposure
- Corrects misclassification of graduate/high-income respondents as "reformers"
- Battery: 16 clustering items (no length change, measurement precision improves)

**Action 3 (deferred): D6-D — do not add at this stage.**
- Spread driven by abstention option, not welfare discrimination
- Revisit after live field data if institutional disconnection emerges as a classification dimension

**No other excluded item passes the threshold.** D3-E, D4-C, D5-C1 are confirmed floor. D1-A has unusable skew. D2-D and R-C pile at single values. D1-C falls marginally below threshold and overlaps existing FA-A items.

**Updated battery summary:**
- 16 clustering items (15 original + D1-E reinstated)
- R-B now 3-option (reform / replace / varies widely)
- 6 demographic items
- 4 EX covariates
- **Total: 26 items**
