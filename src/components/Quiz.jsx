import { useState, useEffect, useRef } from 'react'
import { ITEMS } from '../data/instrument.js'
import Question from './Question.jsx'

const TOTAL = 30
const INTERSTITIAL_1_AFTER = 19  // show interstitial after item at index 19 (D7-A, last LCA item)

const INTERSTITIALS = {
  'interstitial-1': {
    part: 'Part II of III',
    title: 'About You',
    context: 'These questions help us understand who holds each view. They are not used to determine your typology class.',
    nextIndex: 20,
    prevIndex: 19,
  },
}

function hasAnswer(item, value) {
  if (item.type === 'text_input') return true  // optional field — always enabled
  if (value === undefined || value === null) return false
  if (item.type === 'multiselect') return Array.isArray(value) && value.length > 0
  if (item.type === 'matrix') {
    return (
      typeof value === 'object' &&
      item.rows.every(row => value[row.id] !== undefined)
    )
  }
  return value !== ''
}

const AUTO_ADVANCE_TYPES = new Set([
  'forced_choice', 'yes_no', 'yes_no_depends',
  'options_3', 'options_4', 'single_select',
  'scale_4', 'scale_4_plus',
])

export default function Quiz({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [uiState, setUiState] = useState('question') // 'question' | 'interstitial-1'
  const [leaving, setLeaving] = useState(false)
  const promptRef = useRef(null)

  // browser back / tab close warning
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [])

  // focus question prompt after each advance
  useEffect(() => {
    if (uiState === 'question') {
      promptRef.current?.focus()
    }
  }, [currentIndex, uiState])

  const currentItem = ITEMS[currentIndex]
  const currentValue = responses[currentItem?.id]
  const answered = currentItem ? hasAnswer(currentItem, currentValue) : false
  const needsNextButton = currentItem && (currentItem.type === 'multiselect' || currentItem.type === 'matrix' || currentItem.type === 'text_input')
  const progress = Math.round((currentIndex / TOTAL) * 100)

  function handleChange(value) {
    setResponses(prev => ({ ...prev, [currentItem.id]: value }))
  }

  function advance(nextIndex) {
    setLeaving(true)
    setTimeout(() => {
      setLeaving(false)
      setCurrentIndex(nextIndex)
      window.scrollTo(0, 0)
    }, 100)
  }

  function handleAutoAdvance() {
    if (currentIndex === INTERSTITIAL_1_AFTER) {
      setLeaving(true)
      setTimeout(() => { setLeaving(false); setUiState('interstitial-1'); window.scrollTo(0, 0) }, 100)
    } else if (currentIndex === TOTAL - 1) {
      onComplete(responses)
    } else {
      advance(currentIndex + 1)
    }
  }

  function handleNext() {
    if (!answered) return
    handleAutoAdvance()
  }

  function handleBack() {
    if (uiState === 'interstitial-1') {
      setUiState('question')
      setCurrentIndex(INTERSTITIALS['interstitial-1'].prevIndex)
      window.scrollTo(0, 0)
      return
    }
    if (currentIndex === INTERSTITIALS['interstitial-1'].nextIndex) {
      setUiState('interstitial-1')
      window.scrollTo(0, 0)
      return
    }
    if (currentIndex > 0) {
      advance(currentIndex - 1)
    }
  }

  function handleInterstitialContinue(key) {
    const { nextIndex } = INTERSTITIALS[key]
    setUiState('question')
    setCurrentIndex(nextIndex)
    window.scrollTo(0, 0)
  }

  // ── Interstitial screen ────────────────────────────────────────────────────
  if (uiState === 'interstitial-1') {
    const interstitial = INTERSTITIALS[uiState]
    return (
      <div className="section-interstitial">
        <p className="interstitial-eyebrow">{interstitial.part}</p>
        <h2 className="interstitial-title">{interstitial.title}</h2>
        <p className="interstitial-context">{interstitial.context}</p>
        <div className="interstitial-nav">
          <button className="btn-secondary" onClick={handleBack}>Back</button>
          <button className="btn-primary" onClick={() => handleInterstitialContinue(uiState)}>Continue</button>
        </div>
      </div>
    )
  }

  // ── Question screen ────────────────────────────────────────────────────────
  const isLast = currentIndex === TOTAL - 1
  const showBack = currentIndex > 0

  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={TOTAL}
          aria-label={`Question ${currentIndex + 1} of ${TOTAL}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="quiz-meta">
        <span className="quiz-count">Question {currentIndex + 1} of {TOTAL}</span>
      </div>

      <div
        className={`quiz-body question-container${leaving ? ' leaving' : ''}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <Question
          item={currentItem}
          value={currentValue}
          onChange={handleChange}
          onAutoAdvance={AUTO_ADVANCE_TYPES.has(currentItem?.type) ? handleAutoAdvance : null}
          promptRef={promptRef}
        />
      </div>

      <div className="quiz-nav">
        {showBack && (
          <button className="btn-secondary" onClick={handleBack}>
            Back
          </button>
        )}
        {needsNextButton && (
          <button
            className={`btn-primary ${!answered ? 'btn-disabled' : ''}`}
            onClick={handleNext}
            disabled={!answered}
          >
            {isLast ? 'Submit' : 'Next'}
          </button>
        )}
      </div>
    </div>
  )
}
