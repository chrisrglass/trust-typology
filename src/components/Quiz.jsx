import { useState, useEffect, useRef } from 'react'
import { ITEMS } from '../data/instrument.js'
import Question from './Question.jsx'

const TOTAL = 31

// Two interstitials: before G01 (index 24) and before the covariates (index 25).
const INTERSTITIALS = {
  'interstitial-0': {
    afterIndex: -1,
    part: 'Part I of III',
    title: 'Before You Begin',
    context: 'These questions ask about colleges and universities in general — not any one campus. Answer from whatever you know best: your own experience, the experiences of people you know, or what you have seen and read. There are no right answers — choose the statement closer to your view, even if neither is exactly right.',
    nextIndex: 0,
    prevIndex: null,
  },
  'interstitial-1': {
    afterIndex: 23,
    part: 'Part II of III',
    title: 'One More Judgment',
    context: 'You have described how colleges and universities conduct themselves today. The next question asks something different: when a college repeatedly fails, who should have the authority to put it right? There is no higher-trust answer — this question maps your theory of reform.',
    nextIndex: 24,
    prevIndex: 23,
  },
  'interstitial-2': {
    afterIndex: 24,
    part: 'Part III of III',
    title: 'About You',
    context: 'These final questions help researchers understand who holds each view. They are never used to determine your type — and in this prototype they are not collected or stored at all.',
    nextIndex: 25,
    prevIndex: 24,
  },
}

const INTERSTITIAL_BY_AFTER_INDEX = Object.fromEntries(
  Object.entries(INTERSTITIALS).map(([key, cfg]) => [cfg.afterIndex, key])
)

function hasAnswer(item, value) {
  if (item.type === 'text_input') return true
  if (value === undefined || value === null) return false
  if (item.type === 'multiselect') return Array.isArray(value) && value.length > 0
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
  const [uiState, setUiState] = useState('interstitial-0') // 'question' | interstitial key
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
    const interstitialKey = INTERSTITIAL_BY_AFTER_INDEX[currentIndex]
    if (interstitialKey) {
      setLeaving(true)
      setTimeout(() => { setLeaving(false); setUiState(interstitialKey); window.scrollTo(0, 0) }, 100)
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
    if (uiState !== 'question') {
      const cfg = INTERSTITIALS[uiState]
      if (cfg.prevIndex === null) return
      setUiState('question')
      setCurrentIndex(cfg.prevIndex)
      window.scrollTo(0, 0)
      return
    }
    // stepping back into an interstitial boundary
    const boundaryKey = Object.entries(INTERSTITIALS).find(([, cfg]) => cfg.nextIndex === currentIndex)?.[0]
    if (boundaryKey) {
      setUiState(boundaryKey)
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
  if (uiState !== 'question') {
    const interstitial = INTERSTITIALS[uiState]
    return (
      <div className="section-interstitial">
        <p className="interstitial-eyebrow">{interstitial.part}</p>
        <h2 className="interstitial-title">{interstitial.title}</h2>
        <p className="interstitial-context">{interstitial.context}</p>
        <div className="interstitial-nav">
          {interstitial.prevIndex !== null && (
            <button className="btn-secondary" onClick={handleBack}>Back</button>
          )}
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
