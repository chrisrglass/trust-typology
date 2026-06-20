import { useState, useCallback } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import { submitResponse } from './lib/supabase.js'
import { classifyResponses } from './lib/classify.js'
import './App.css'

function generateSessionId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
}

const SESSION_ID = generateSessionId()

export default function App() {
  const [stage, setStage] = useState('landing') // 'landing' | 'quiz' | 'results'
  const [classResult, setClassResult] = useState(null)

  const handleStart = useCallback(() => {
    setStage('quiz')
    window.scrollTo(0, 0)
  }, [])

  const handleComplete = useCallback((responses) => {
    const result = classifyResponses(responses)
    setClassResult(result)
    setStage('results')
    window.scrollTo(0, 0)
    // background submit — fire and forget
    submitResponse(SESSION_ID, responses).catch(err => console.error('Submit failed:', err))
  }, [])

  return (
    <div className="app">
      <div className="app-inner">
        {stage === 'landing' && <Landing onStart={handleStart} />}
        {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
        {stage === 'results' && <Results classResult={classResult} />}
      </div>
    </div>
  )
}
