import { useState, useCallback, useEffect } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import ProfileIndex from './components/ProfileIndex.jsx'
import TypologyLanding from './components/TypologyLanding.jsx'
import DimensionsPage from './components/DimensionsPage.jsx'
import NavBar from './components/NavBar.jsx'
import { CLASSES } from './data/classes.js'
import { classifyResponses } from './lib/classify.js'
import { submitResponse } from './lib/supabase.js'
import './App.css'

const DEFAULT_TITLE = 'The Trust Typology — Five Ways Americans Relate to Higher Education'

function generateSessionId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
}

const SESSION_ID = generateSessionId()

function parseHash(hash) {
  if (hash.startsWith('#/profiles/')) return { type: 'profile', classId: hash.replace('#/profiles/', '') }
  if (hash === '#/profiles') return { type: 'profile-index' }
  if (hash === '#/typology') return { type: 'typology-landing' }
  if (hash === '#/dimensions') return { type: 'dimensions', dimId: null }
  if (hash.startsWith('#/dimensions/')) return { type: 'dimensions', dimId: hash.replace('#/dimensions/', '') }
  return { type: 'quiz-flow' }
}

export default function App() {
  const [stage, setStage] = useState('landing') // 'landing' | 'quiz' | 'results'
  const [classResult, setClassResult] = useState(null)
  const [g01Choice, setG01Choice] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [view, setView] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const check = () => {
      setView(parseHash(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])

  useEffect(() => {
    if (view.type === 'profile') {
      const cls = CLASSES.find(c => c.id === view.classId)
      if (cls) {
        document.title = `${cls.name} | The Trust Typology`
        return
      }
    }
    document.title = DEFAULT_TITLE
  }, [view])

  const handleStart = useCallback(() => {
    window.location.hash = ''
    setView({ type: 'quiz-flow' })
    setStage('quiz')
    window.scrollTo(0, 0)
  }, [])

  const handleComplete = useCallback((responses) => {
    // Classification uses the 24 paired items only (v22 rule 2).
    const result = classifyResponses(responses)
    setClassResult(result)
    setG01Choice(responses.G01 ?? null)
    setAnswers(responses)
    setStage('results')
    window.scrollTo(0, 0)
    // background submit — fire and forget
    submitResponse(SESSION_ID, responses).catch(err => console.error('Submit failed:', err))
  }, [])

  if (view.type === 'profile') {
    return (
      <div className="app app--profile">
        <NavBar />
        <ProfilePage classId={view.classId} highlightedId={classResult?.id} />
      </div>
    )
  }

  if (view.type === 'profile-index') {
    return (
      <div className="app app--profile">
        <NavBar />
        <ProfileIndex highlightedId={classResult?.id} />
      </div>
    )
  }

  if (view.type === 'typology-landing') {
    return (
      <div className="app app--profile">
        <NavBar />
        <TypologyLanding />
      </div>
    )
  }

  if (view.type === 'dimensions') {
    return (
      <div className="app app--profile">
        <NavBar />
        <DimensionsPage initialDimId={view.dimId} />
      </div>
    )
  }

  return (
    <div className="app">
      {stage !== 'quiz' && <NavBar />}
      <div className="app-inner">
        {stage === 'landing' && <Landing onStart={handleStart} />}
        {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
        {stage === 'results' && <Results classResult={classResult} g01Choice={g01Choice} answers={answers} />}
      </div>
    </div>
  )
}
