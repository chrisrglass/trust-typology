# How Pew Went from Pilot to Final Quiz: The Process

Source documentation: Appendix B (2021 and 2026), "Behind Pew Research Center's 2021 Political Typology" (Bradley Jones, Decoded), "How We Identified Your Typology Group" (2021).

---

## The Full Pipeline

### Phase 1: Questionnaire Development

Pew started with **"scores of questions across nine substantive dimensions"** (the 1987 framing) and, by 2021, a pool of approximately **50 potential measures**. These were developed over several weeks with "careful consideration to developing measures of opinion on a broad cross-section of topical areas." The guiding constraint from the beginning was quizzability: "We always want to ensure that we are creating a typology that can be implemented as a quiz." This means item development and quiz design are not sequential phases — the quiz requirement shapes item design from the start.

### Phase 2: Exploratory Analysis (Pre-Clustering)

Before running any cluster models, Pew used **standard cross-tabulation and topline reviews** to identify underperforming measures. Jones describes this phase as helping to "narrow our focus somewhat" and identify "dead ends to avoid." This is the stage where items with no discriminant power across political identities, demographics, or known attitude dimensions get cut from the pool.

This is the analog to the Trust Project's pilot: identify items where everyone answers the same way, items that fail to vary across groups, and items that are theoretically important but empirically redundant with other items.

### Phase 3: Genetic Algorithm Search (as Exploratory Tool — Not the Final Answer)

Pew used a genetic algorithm as "an additional exercise to iteratively search for cluster solutions" — explicitly not as the definitive method but as a systematic way to explore a search space that would otherwise be "literally trillions of different possibilities."

**How the genetic algorithm worked:**
- Starts with random possible clustering solutions
- Evaluates each solution for "fitness"
- Takes best solutions, propagates to next generation with small mutations
- Repeats for tens of thousands of generations (ran for a full weekend)

**Fitness function (this is the key):** Rather than optimizing for internal cluster quality (tightness, separation), Pew optimized for **external outcome prediction**. The fitness score was the average BIC (Bayesian Information Criterion) across a set of regression models where the clustering solution predicted outcomes *external to the model* — healthcare preferences, abortion attitudes, presidential approval ratings. Penalty was added for large spread across outcomes, "to prevent it from finding models that performed very well on only one item of the set but not on the others."

Jones's verdict on the genetic algorithm: "The results were decidedly mixed. It was not a fruitless exercise" — it helped eliminate dead ends and confirm patterns — but it did not produce the final solution.

### Phase 4: Manual Iteration ("Whac-a-Mole")

The actual solution emerged from "hundreds of different possible solutions" examined manually. Jones describes this as "a game of Whac-a-Mole. When we tried something to solve one problem, others would surface." This phase required both statistical and substantive judgment: groups had to be not just statistically distinct but **meaningfully interpretable as actual political types** that reflect current political reality and are comprehensible to a general audience.

Throughout this phase, Pew tested multiple clustering algorithms:
- Classic K-means, K-means++
- Latent Class Analysis
- Entropy-weighted K-means
- Community detection (network analysis)
- Bagged k-means
- Hierarchical clustering
- Fuzzy c-means
- Gaussian mixture models
- Weighted k-medoids ← *what they ultimately used*

### Phase 5: Final Clustering Model

**Algorithm:** Weighted clustering around medoids, using the `WeightedCluster` R package (v1.4-1 in 2021; v1.8.1 in 2026).

**Key technical choices:**
- All variables standardized (subtract mean, divide by SD) to equalize each item's influence
- Scale items (5-point) received enhanced distance weighting between middle and extreme responses
- Each model run several thousand times due to order-of-entry sensitivity in cluster algorithms
- Missing data handled via multiple imputation (10 copies of dataset, predictive mean matching)
- Analysis restricted to **registered voters** for clustering; unregistered respondents assigned post-hoc to nearest group

**Item counts:**
- 2021: 27 items in clustering model → 20 items in public quiz
- 2026: 30 items in clustering model → 24 items in public quiz

### Phase 6: Quiz Item Selection (the Least Documented Step)

Pew does **not publicly document** the specific criteria used to reduce 27→20 or 30→24 items for the quiz. The appendices describe the clustering model but not the item-reduction step. What is known:

- The quiz uses a **subset** of the clustering items, not a separate instrument
- The quiz "does a good job identifying your group, but [is] not quite as precise as if we had used the full [27/30] questions"
- Pew has always designed the questionnaire with the quiz in mind — items were written to be clear enough for public self-administration

The reasonable inference from the methodology: items excluded from the quiz are those with **lowest marginal discriminant contribution** after the core classifiers are in place — i.e., items that are redundant with other items that are already doing the same work. Items about the same underlying dimension as a higher-spread item would be candidates for exclusion.

### Phase 7: Quiz Assignment (Nearest Centroid)

> "For the [20/24] questions on the quiz used in defining the typology groups, we calculate how closely your responses match the response pattern of the **typical member** of each of the nine typology groups. We then use those calculations to find the group that you are closest to, overall."

This is a **nearest-centroid classifier**: the "typical member" of each group is the centroid (average response profile) of that group across all quiz items. A quiz respondent's answers are compared to each of the nine centroids; they are assigned to whichever group is closest (minimum distance).

- The procedure assigns **everyone** to a group — even if they fit poorly
- Some respondents are "good fits for more than one group"
- Pew does not publish the accuracy rate (% of quiz assignments that match what the full 27/30-item clustering would have assigned)

---

## Implications for the Trust Project

The Pew process maps to a clear sequence for the Trust Project:

| Pew Phase | Trust Project Equivalent | Status |
|---|---|---|
| Item development with quiz in mind | 47-item instrument developed | Done |
| Pilot / exploratory analysis | 100-agent simulation | Done |
| Identify underperforming items | 6 zero-spread, 3 low-spread items flagged | Done |
| Genetic algorithm / cluster search | LCA with external validation | Next |
| Manual iteration to interpretable groups | Class naming and characterization | Next |
| Reduce to quiz battery | Select ~15-20 highest-spread items | After LCA |
| Define quiz centroids | Compute group response profiles | After LCA |
| Build nearest-centroid quiz | Assign respondents to closest group profile | Final |

### What Pew's process tells us about the LCA decision

Two things stand out:

**1. External validity is the fitness criterion, not internal cluster fit.** Pew did not optimize for tightest clusters or highest entropy reduction. They optimized for how well the solution predicts outcomes *outside the model*. For the Trust Project, this means the LCA model should be evaluated against outcomes like: willingness to recommend college to a young person (D1-E), willingness to support public funding (EX-D), and actual college attendance and completion (EX-G) — not just internal metrics like BIC or entropy.

**2. The quiz is a nearest-centroid classifier, not a replica of the LCA.** Once the classes are defined and named, the quiz doesn't re-run LCA — it computes the distance between a respondent's answers and each class centroid, and assigns them to the closest one. This means the quiz can be built after the LCA is done, using the class profiles as the classification targets.

### Suggested quiz item count for Trust Project

Based on Pew's ratio (27→20 = 74%, 30→24 = 80%), and the Trust Project's 40 clustering items, the target quiz battery would be approximately **20-25 items** — probably the 13 high-spread items identified in the pilot plus 7-12 additional items with spread > 40pp that provide dimensional coverage across the five theoretical dimensions (economic promise, intellectual mission, cultural alignment, access, reformability).

Items with zero spread (D1-F, D1-G, D3-B, D3-D, D5-A, D5-C2) should be excluded from the quiz regardless of their theoretical importance — they produce no classification information.

---

*Sources: Pew Appendix B (2021, 2026); Bradley Jones, "Behind Pew Research Center's 2021 Political Typology," Pew Decoded, Nov. 9, 2021; "How We Identified Your Typology Group," Pew Research Center, Nov. 9, 2021.*
