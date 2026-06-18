import { useState, useCallback } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import { submitResponse } from './lib/supabase.js'
import './App.css'

function generateSessionId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
}

const SESSION_ID = generateSessionId()

export default function App() {
  const [stage, setStage] = useState('landing') // 'landing' | 'quiz' | 'results'
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleStart = useCallback(() => {
    setStage('quiz')
    window.scrollTo(0, 0)
  }, [])

  const handleComplete = useCallback(async (responses) => {
    setStage('results')
    setSubmitting(true)
    window.scrollTo(0, 0)

    const { error } = await submitResponse(SESSION_ID, responses)

    setSubmitting(false)
    if (error) {
      setSubmitError(error.message || 'Unknown error')
    }
  }, [])

  return (
    <div className="app">
      <div className="app-inner">
        {stage === 'landing' && <Landing onStart={handleStart} />}
        {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
        {stage === 'results' && <Results submitting={submitting} error={submitError} />}
      </div>
    </div>
  )
}
