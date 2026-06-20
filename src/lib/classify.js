import { CLASSES } from '../data/classes.js'

// Option values from instrument.js (single letters, not semantic strings):
// D2-F: 'A'=civic, 'B'=moral-spiritual, 'C'=career
// G1:   'A'=global, 'B'=domestic
// R-A1: 'A'=can self-reform, 'B'=cannot
// R-B:  'A'=reform, 'B'=replace, 'C'=varies
export function classifyResponses(responses) {
  const purpose = responses['D2-F']
  const mission = responses['G1']
  const selfReform = responses['R-A1']
  const reformPref = responses['R-B']

  let classId

  if (purpose === 'B') {
    classId = 'faith-formation'
  } else if (purpose === 'A') {
    if (mission === 'A') {
      classId = selfReform === 'A' ? 'institutional-trustee' : 'critical-reformer'
    } else {
      classId = reformPref === 'B'
        ? 'mission-aligned-abolitionist'
        : reformPref === 'A'
          ? 'critical-reformer'
          : 'institutional-trustee'
    }
  } else {
    classId = mission === 'A' ? 'outcomes-focused' : 'credential-pragmatist'
  }

  return CLASSES.find(c => c.id === classId) ?? CLASSES[0]
}
