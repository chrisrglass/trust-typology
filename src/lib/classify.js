// Five-class profile-matching classifier — Trust Typology v2 prototype.
//
// PROVISIONAL, PRE-FIELDING. Naive-Bayes scoring against the five synthetic
// signature profiles from the design study:
//   score(c) = log(prior_c) + Σ_items log P(response_i | c)
// Classification uses the 24 paired items ONLY. G01 and the covariates never
// enter scoring — G01 is an external validator by design (v22 coding rule 2),
// reflected back to the respondent as their "theory of reform."
//
// This replaces the old site's 6-item decision tree: no single-item hinges;
// every one of the 24 judgments contributes evidence.

import { CLASSES } from '../data/classes.js'
import { CLASS_PRIORS, ITEM_PROB_A } from '../data/classifierParams.js'
import { LCA_ITEM_IDS } from '../data/instrument.js'

const FLOOR = 0.03
const CEIL = 0.97

function clip(p) {
  return Math.min(CEIL, Math.max(FLOOR, p))
}

/**
 * Classify a completed response set.
 * @param {Object} responses — item id → 'A' | 'B' (plus G01/covariates, ignored here)
 * @returns the winning class object, augmented with { scores } (normalized
 *          posterior-style weights per class id, for transparency/debugging).
 */
export function classifyResponses(responses) {
  const logScores = {}
  for (const cls of CLASSES) {
    let s = Math.log(CLASS_PRIORS[cls.id])
    for (const itemId of LCA_ITEM_IDS) {
      const resp = responses[itemId]
      if (resp !== 'A' && resp !== 'B') continue // unanswered: contributes nothing
      const pA = clip(ITEM_PROB_A[cls.id][itemId])
      s += Math.log(resp === 'A' ? pA : 1 - pA)
    }
    logScores[cls.id] = s
  }

  // Normalize to posterior-style weights (softmax over log scores).
  const maxLog = Math.max(...Object.values(logScores))
  let z = 0
  const weights = {}
  for (const [id, s] of Object.entries(logScores)) {
    weights[id] = Math.exp(s - maxLog)
    z += weights[id]
  }
  for (const id of Object.keys(weights)) {
    weights[id] = weights[id] / z
  }

  const winnerId = Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0]
  const winner = CLASSES.find(c => c.id === winnerId) ?? CLASSES[0]
  return { ...winner, scores: weights }
}
