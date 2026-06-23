import { CLASSES } from '../data/classes.js'

// Classification uses 6 key items from the 23-item LCA battery.
// All items are binary forced-choice; 'A' = Pole A (first option in catalog).
//
// Decision tree:
//   D5-D:  'A' = degree is a ladder (optimist), 'B' = degree mirrors class divisions
//   D3-G:  'A' = research is a public good, 'B' = too much funding, too little accountability
//   D1-I:  'A' = underemployment is temporary, 'B' = underemployment is the structural outcome
//   D2-C:  'A' = college gives genuine intellectual formation, 'B' = credential only
//   R-G:   'A' = government oversight is legitimate accountability, 'B' = political content control
//   D2-H:  'A' = AI systems are ideologically neutral, 'B' = AI excludes non-secular traditions
export function classifyResponses(responses) {
  const mobility    = responses['D5-D']
  const publicGood  = responses['D3-G']
  const underemploy = responses['D1-I']
  const formation   = responses['D2-C']
  const govOversight = responses['R-G']
  const aiNeutral   = responses['D2-H']

  let classId

  if (mobility === 'A') {
    // Optimists: believe the degree leads to real economic mobility
    if (publicGood === 'B') {
      classId = 'faith-and-freedom-families'        // C5: FFC — public research skeptics
    } else if (underemploy === 'A') {
      classId = 'market-oriented-pragmatists'         // C4: PPR — underemployment is temporary
    } else {
      classId = 'university-defenders'        // C6: LL — underemployment is structural
    }
  } else {
    // Pessimists: believe the degree reinforces class divisions more than it overcomes them
    if (formation === 'A') {
      classId = 'critical-reformers'            // C1: LP — mission believers despite economic pessimism
    } else if (govOversight === 'A') {
      // Want government accountability
      if (aiNeutral === 'A') {
        classId = 'institutional-skeptics'        // C3: TOM — AI is neutral, want accountability
      } else {
        classId = 'populist-insurgents'        // C2: UR+NAR — AI as values threat, want accountability
      }
    } else {
      classId = 'economically-betrayed'  // C7: LOL+OOL — oppose government content control
    }
  }

  return CLASSES.find(c => c.id === classId) ?? CLASSES[0]
}
