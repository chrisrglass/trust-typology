// Per-dimension trust scores for the Living Letter (Results page).
//
// Eleven measured dimensions: Reform Authority (D12) is deliberately excluded —
// it is the respondent's theory of reform (G01), never a trust judgment.
//
// Each dimension is measured by its 2-3 paired items; a respondent's score is
// the share of trusting-pole choices (so positions move in steps of 1/2 or 1/3
// — say so in the fine print). Type profiles and the national profile are the
// mean P(trusting) across the dimension's items, from the synthetic design
// study (classifierParams). SYNTHETIC, PROVISIONAL, PRE-FIELDING.

import { ITEM_PROB_A, NATIONAL_PROB_A } from './classifierParams.js'
import { CLASSES } from './classes.js'

// Which option is the trusting pole, per item (hand-coded from the v22 item text).
export const ITEM_TRUSTING = {
  Q01: 'B', Q02: 'A', Q04: 'A', Q06: 'A', Q08: 'A', Q09: 'B',
  Q10: 'A', Q11: 'B', Q13: 'B', Q15: 'B', Q16: 'A', Q17: 'B',
  Q18: 'A', Q19: 'B', Q20: 'A', Q21: 'B', Q23: 'B', Q24: 'A',
  Q25: 'B', Q27: 'B', Q30: 'A', Q32: 'A', Q33: 'B', Q35: 'B',
}

// Display order matches the Dimensions page: grouped by the three trusts
// (Economic, Cultural, Institutional) so the radar reads as three arcs
// (ratified 2026-07-20). The `group` field drives the radar's rim labels
// and boundary ticks. NOTE: TrustProfile.jsx's PHRASE array is
// index-aligned to this order — permute both together, always.
export const PROFILE_DIMS = [
  { id: 'burden-proportionality',    group: 'Economic', title: 'Burden Sharing',           short: 'Burden',      items: ['Q01', 'Q02'] },
  { id: 'outcome-dependability',     group: 'Economic', title: 'Reliable Results',         short: 'Results',    items: ['Q04', 'Q06'] },
  { id: 'institutional-candor',      group: 'Economic', title: 'Information Transparency', short: 'Candor',     items: ['Q08', 'Q09'] },
  { id: 'opportunity-fairness',      group: 'Economic', title: 'Equal Access',             short: 'Access',     items: ['Q10', 'Q11'] },
  { id: 'moral-recognizability',     group: 'Cultural', title: 'Moral Recognizability',    short: 'Belonging',  items: ['Q19', 'Q20', 'Q21'] },
  { id: 'intellectual-hospitality',  group: 'Cultural', title: 'Intellectual Hospitality', short: 'Inquiry',    items: ['Q16', 'Q17', 'Q18'] },
  { id: 'procedural-evenhandedness', group: 'Cultural', title: 'Equal Protection',         short: 'Same rules', items: ['Q13', 'Q15'] },
  { id: 'public-purpose-fidelity',   group: 'Cultural', title: 'Community Benefit',        short: 'Benefit',    items: ['Q23', 'Q24'] },
  { id: 'institutional-correctability', group: 'Institutional', title: 'Self-Correction',       short: 'Self-fix',   items: ['Q30', 'Q32'] },
  { id: 'institutional-answerability',  group: 'Institutional', title: 'Public Answerability',  short: 'Answering',  items: ['Q33', 'Q35'] },
  { id: 'authority-warrant',         group: 'Institutional', title: 'Earned Authority',         short: 'Authority',  items: ['Q25', 'Q27'] },
]

const pTrusting = (probsA, item) =>
  ITEM_TRUSTING[item] === 'A' ? probsA[item] : 1 - probsA[item]

const dimMean = probsA => d =>
  d.items.reduce((s, q) => s + pTrusting(probsA, q), 0) / d.items.length

// Mean P(trusting) per dimension, per class and nationally.
export const TYPE_DIM_PROFILES = Object.fromEntries(
  CLASSES.map(c => [c.id, PROFILE_DIMS.map(dimMean(ITEM_PROB_A[c.id]))])
)
export const NATIONAL_DIMS = PROFILE_DIMS.map(dimMean(NATIONAL_PROB_A))

// A respondent's per-dimension scores from their actual answers.
export function respondentDimScores(responses) {
  return PROFILE_DIMS.map(d => {
    const answered = d.items.filter(q => responses[q])
    if (!answered.length) return 0.5
    return answered.reduce((s, q) => s + (responses[q] === ITEM_TRUSTING[q] ? 1 : 0), 0) / answered.length
  })
}
