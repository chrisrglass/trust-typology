#!/usr/bin/env node
// Classifier verification against the 100-respondent synthetic fixture.
// Expects ≈75–85% agreement with planted classes (naive Bayes on true params
// beats the LCA's ARI-level agreement; ~100% would indicate a leak, ~20% chance).

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { classifyResponses } from '../src/lib/classify.js'
import { CLASSES } from '../src/data/classes.js'

const here = dirname(fileURLToPath(import.meta.url))
const fixture = JSON.parse(readFileSync(join(here, 'fixture_n100.json'), 'utf8'))

let correct = 0
const reached = new Set()
const confusion = {}
for (const row of fixture) {
  const result = classifyResponses(row.responses)
  reached.add(result.id)
  if (result.id === row.planted) correct += 1
  const key = `${row.planted} -> ${result.id}`
  if (result.id !== row.planted) confusion[key] = (confusion[key] ?? 0) + 1
}

console.log(`Agreement with planted classes: ${correct}/${fixture.length} (${(100 * correct / fixture.length).toFixed(0)}%)`)
console.log(`Classes reached: ${reached.size}/5 [${[...reached].join(', ')}]`)
if (Object.keys(confusion).length) {
  console.log('Misclassifications:')
  for (const [k, v] of Object.entries(confusion).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${k}: ${v}`)
  }
}

// Sanity: every class reachable by its own archetype (answer every item with
// the response that class most favors).
import { ITEM_PROB_A } from '../src/data/classifierParams.js'
import { LCA_ITEM_IDS } from '../src/data/instrument.js'
let archetypesOk = true
for (const cls of CLASSES) {
  const responses = {}
  for (const id of LCA_ITEM_IDS) {
    responses[id] = ITEM_PROB_A[cls.id][id] >= 0.5 ? 'A' : 'B'
  }
  const result = classifyResponses(responses)
  const ok = result.id === cls.id
  archetypesOk = archetypesOk && ok
  console.log(`Archetype ${cls.id}: -> ${result.id} ${ok ? 'OK' : 'FAIL'}`)
}
process.exit(archetypesOk && correct / fixture.length > 0.6 ? 0 : 1)
