import { useState } from 'react'
import { ITEMS, SECTIONS } from '../data/instrument.js'
import Question from './Question.jsx'

function hasAnswer(item, value) {
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

export default function Quiz({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [responses, setResponses] = useState({})

  const currentItem = ITEMS[currentIndex]
  const currentValue = responses[currentItem.id]
  const answered = hasAnswer(currentItem, currentValue)

  const totalItems = ITEMS.length
  const progress = Math.round((currentIndex / totalItems) * 100)

  const currentSection = SECTIONS.find(s => s.id === currentItem.section)
  const sectionItems = ITEMS.filter(i => i.section === currentItem.section)
  const sectionIndex = sectionItems.indexOf(currentItem) + 1

  function handleChange(value) {
    setResponses(prev => ({ ...prev, [currentItem.id]: value }))
  }

  function handleNext() {
    if (!answered) return
    if (currentIndex === totalItems - 1) {
      onComplete(responses)
    } else {
      setCurrentIndex(i => i + 1)
      window.scrollTo(0, 0)
    }
  }

  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
      window.scrollTo(0, 0)
    }
  }

  const isLast = currentIndex === totalItems - 1

  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-meta">
        <span className="quiz-section">
          {currentSection.title}
        </span>
        <span className="quiz-count">
          {currentIndex + 1} of {totalItems}
        </span>
      </div>

      <div className="quiz-body">
        <Question
          item={currentItem}
          value={currentValue}
          onChange={handleChange}
        />
      </div>

      <div className="quiz-nav">
        {currentIndex > 0 && (
          <button className="btn-secondary" onClick={handleBack}>
            Back
          </button>
        )}
        <button
          className={`btn-primary ${!answered ? 'btn-disabled' : ''}`}
          onClick={handleNext}
          disabled={!answered}
        >
          {isLast ? 'Submit' : 'Next'}
        </button>
      </div>

      <div className="quiz-section-desc">
        <p>{currentSection.description}</p>
        <span>Question {sectionIndex} of {sectionItems.length} in this section</span>
      </div>
    </div>
  )
}
