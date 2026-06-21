import { useState, useCallback, useEffect } from 'react'
import Landing from './components/Landing.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import ProfileIndex from './components/ProfileIndex.jsx'
import DemographicsPage from './components/DemographicsPage.jsx'
import TypologyLanding from './components/TypologyLanding.jsx'
import DimensionsPage from './components/DimensionsPage.jsx'
import NavBar from './components/NavBar.jsx'
import { CLASSES } from './data/classes.js'
import { submitResponse } from './lib/supabase.js'
import { classifyResponses } from './lib/classify.js'
import './App.css'

function generateSessionId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)
}

const SESSION_ID = generateSessionId()

const DEFAULT_TITLE = 'The Trust Typology — Seven Ways Americans Relate to Higher Education'
const DEFAULT_DESC = 'Trust in higher education isn\'t just high or low — it takes seven distinct shapes. Find your type.'

function setMeta(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`) ||
           document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

function parseHash(hash) {
  if (hash.startsWith('#/profiles/')) return { type: 'profile', classId: hash.replace('#/profiles/', '') }
  if (hash === '#/profiles') return { type: 'profile-index' }
  if (hash === '#/demographics') return { type: 'demographics' }
  if (hash === '#/typology') return { type: 'typology-landing' }
  if (hash === '#/dimensions') return { type: 'dimensions', dimId: null }
  if (hash.startsWith('#/dimensions/')) return { type: 'dimensions', dimId: hash.replace('#/dimensions/', '') }
  return { type: 'quiz-flow' }
}

export default function App() {
  const [stage, setStage] = useState('landing') // 'landing' | 'quiz' | 'results'
  const [classResult, setClassResult] = useState(null)
  const [view, setView] = useState(() => parseHash(window.location.hash))

  useEffect(() => {
    const check = () => {
      setView(parseHash(window.location.hash))
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', check)
    return () => window.removeEventListener('hashchange', check)
  }, [])

  // Update page title + OG tags when view changes
  useEffect(() => {
    if (view.type === 'profile') {
      const cls = CLASSES.find(c => c.id === view.classId)
      if (cls) {
        const title = `${cls.name} | The Trust Typology`
        document.title = title
        setMeta('og:title', title)
        setMeta('twitter:title', title)
        setMeta('og:description', cls.tagline)
        setMeta('twitter:description', cls.tagline)
        setMeta('og:image', `/social-cards/${cls.id}.svg`)
        setMeta('twitter:image', `/social-cards/${cls.id}.svg`)
        return
      }
    }
    document.title = DEFAULT_TITLE
    setMeta('og:title', DEFAULT_TITLE)
    setMeta('twitter:title', DEFAULT_TITLE)
    setMeta('og:description', DEFAULT_DESC)
    setMeta('twitter:description', DEFAULT_DESC)
    setMeta('og:image', '/social-cards/hero.svg')
    setMeta('twitter:image', '/social-cards/hero.svg')
  }, [view])

  const handleStart = useCallback(() => {
    window.location.hash = ''
    setView({ type: 'quiz-flow' })
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

  if (view.type === 'demographics') {
    return (
      <div className="app app--profile">
        <NavBar />
        <DemographicsPage />
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
        {stage === 'results' && <Results classResult={classResult} />}
      </div>
    </div>
  )
}
