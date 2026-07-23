import { useState } from 'react'
import { CLASSES } from '../data/classes.js'
import { PROFILE_DIMS, TYPE_DIM_PROFILES, NATIONAL_DIMS, respondentDimScores } from '../data/dimensionScores.js'

// The Living Letter: radar + portrait prose assembled from the respondent's
// answers, with a final section that rewrites itself for each hovered type.
// All text is template-assembled and traceable to specific responses.

const AGREE = 0.16

// Index-aligned to PROFILE_DIMS (grouped order, 2026-07-20) — permute together.
const PHRASE = [
  { hi: 'the price of college reads as fair for what it returns', lo: 'the price of college reads as out of proportion to what it returns' },
  { hi: 'programs can be counted on to deliver what they promise', lo: 'finishing feels like a gamble whose odds are never stated' },
  { hi: 'colleges are taken at their word about price and odds', lo: 'the sector is not believed to tell it straight about price, odds, and risk' },
  { hi: 'a real shot is open to people from every background', lo: 'the strongest opportunities still flow to the already-advantaged' },
  { hi: 'the communities that raise people register as full members of campus life', lo: 'communities like yours read as problems to manage rather than members' },
  { hi: 'inquiry is open — people can speak, and evidence can lead anywhere', lo: 'words are measured, and inquiry bends to pressure' },
  { hi: 'the rules hold for everyone, whoever pushes', lo: 'the rules bend for status, politics, and connections' },
  { hi: 'the public gets a real share of what it grants', lo: 'public privileges protect institutions more than the public' },
  { hi: 'colleges can find their failures and fix them', lo: 'failing programs are protected until protecting them costs too much' },
  { hi: 'when something goes wrong, an answer can be gotten', lo: 'when something goes wrong, no one has to answer' },
  { hi: 'institutions stay within the authority they have earned', lo: 'institutions reach past the authority they have earned' },
]

const TYPE_VOICE = {
  'institutional-reformers': {
    one: 'Reformer',
    road: 'they still believe institutions can fix what they find — their whole trust rests on renewal proving itself',
    carry: 'Ask them what verification would satisfy you both; that is a conversation, not a fight.',
  },
  'results-oriented-pragmatists': {
    one: 'Pragmatist',
    road: 'their trust is conditional by design — extended exactly as long as the deal delivers, watched like a contract',
    carry: 'You both ask institutions to show their work; start there.',
  },
  'populist-insurgents': {
    one: 'Insurgent',
    road: 'they reached their verdict through conduct — rules bent, failures obscured, complaints that never trigger consequences',
    carry: 'If you share any doubt that anyone must answer, they can tell you how they came by theirs — and it is worth hearing.',
  },
  'fair-deal-skeptics': {
    one: 'Skeptic',
    road: 'they reached their doubt through the deal itself — money, debt, and family sacrifice for results nobody could promise',
    carry: 'When they say the promise was priced beyond reach, listen for the belief in education that survived it.',
  },
  'grassroots-communitarians': {
    one: 'Communitarian',
    road: 'their trust follows the felt relationship — strong where the campus is known, thin where the sector is distant',
    carry: 'Compare notes on what the distant sector would have to do to earn what the local campus already has.',
  },
}

const phrase = (v, i) => (v[i] >= 0.6 ? PHRASE[i].hi : v[i] <= 0.4 ? PHRASE[i].lo : null)
const stance = (v, i) => (v[i] >= 0.6 ? 'most trusting' : v[i] <= 0.4 ? 'most doubtful' : 'most divided')

function salientIdx(scores, n) {
  return PROFILE_DIMS.map((_, i) => i)
    .sort((a, b) => Math.abs(scores[b] - NATIONAL_DIMS[b]) - Math.abs(scores[a] - NATIONAL_DIMS[a]))
    .slice(0, n)
}
function tensionPair(scores) {
  let hi = 0, lo = 0
  scores.forEach((s, i) => { if (s > scores[hi]) hi = i; if (s < scores[lo]) lo = i })
  return [hi, lo]
}
const distSim = (a, b) => 1 - a.reduce((s, x, i) => s + Math.abs(x - b[i]), 0) / a.length

function polygonPoints(values, cx, cy, R) {
  const N = values.length
  return values
    .map((v, i) => {
      const ang = -Math.PI / 2 + (i * 2 * Math.PI) / N
      return `${cx + Math.cos(ang) * R * v},${cy + Math.sin(ang) * R * v}`
    })
    .join(' ')
}

export default function TrustProfile({ responses, classId }) {
  const [hovered, setHovered] = useState(null)
  const [pinned, setPinned] = useState(null)
  const active = hovered || pinned

  if (!responses) return null
  const scores = respondentDimScores(responses)
  const ranked = CLASSES.map(c => ({ ...c, s: distSim(scores, TYPE_DIM_PROFILES[c.id]) }))
    .sort((a, b) => b.s - a.s)

  const nearest = CLASSES.find(c => c.id === classId) || ranked[0]
  const nearestDims = TYPE_DIM_PROFILES[nearest.id]
  const ng = PROFILE_DIMS.map((_, i) => i)
    .sort((a, b) => Math.abs(scores[b] - nearestDims[b]) - Math.abs(scores[a] - nearestDims[a]))[0]
  const ngGap = Math.abs(scores[ng] - nearestDims[ng])

  const [s1, s2] = salientIdx(scores, 2)
  const [ti, tj] = tensionPair(scores)
  const p1 = phrase(scores, s1) || `your judgments on ${PROFILE_DIMS[s1].title.toLowerCase()} sit apart from the national pattern`
  const p2 = phrase(scores, s2) || `on ${PROFILE_DIMS[s2].title.toLowerCase()}, you hold the question open`

  const cx = 230, cy = 212, R = 138
  // Radial floor: a score of 0 renders on the innermost ring, not the center,
  // so the profile stays one continuous shape. Rings pass through the same
  // transform — the innermost ring IS zero.
  const FLOOR = 0.12
  const disp = v => FLOOR + v * (1 - FLOOR)
  const grid = [0, 0.25, 0.5, 0.75, 1]

  function bridgeFor(t) {
    const tv = TYPE_DIM_PROFILES[t.id]
    const agrees = PROFILE_DIMS.map((_, i) => i).filter(i => Math.abs(scores[i] - tv[i]) <= AGREE)
    const agTop = [...agrees]
      .sort((a, b) => Math.abs(scores[b] - NATIONAL_DIMS[b]) - Math.abs(scores[a] - NATIONAL_DIMS[a]))
      .slice(0, 2)
    const gap = PROFILE_DIMS.map((_, i) => i)
      .sort((a, b) => Math.abs(scores[b] - tv[b]) - Math.abs(scores[a] - tv[a]))[0]
    const voice = TYPE_VOICE[t.id]
    return { agrees, agTop, gap, voice }
  }

  const activeProfile = active ? TYPE_DIM_PROFILES[active.id] : null

  return (
    <div className="tp">
      <h2 className="tp-title">Your profile</h2>
      <p className="tp-sub">
        The shape and the sentences below were both drawn from your answers. Hover or tap a type to
        see its shape against yours — and to read what the two of you share.
      </p>

      <div className="tp-chips">
        {CLASSES.map(t => (
          <button
            key={t.id}
            className={`tp-chip${active && active.id === t.id ? ' tp-chip--on' : ''}`}
            style={{
              color: active && active.id === t.id ? '#fff' : t.accentColor,
              borderColor: t.accentColor,
              background: active && active.id === t.id ? t.accentColor : 'transparent',
            }}
            onMouseEnter={() => setHovered(t)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setPinned(pinned && pinned.id === t.id ? null : t)}
          >
            {t.name.split(' ').slice(-1)[0]}
          </button>
        ))}
      </div>

      <div className="tp-grid">
        <div className="tp-radar">
          <svg viewBox="0 0 460 430" width="100%" role="img" aria-label="Your trust profile across eleven dimensions">
            {grid.map(g => (
              <polygon key={g} points={polygonPoints(PROFILE_DIMS.map(() => disp(g)), cx, cy, R)} fill="none" stroke="#e8e2d8" />
            ))}
            {PROFILE_DIMS.map((d, i) => {
              const ang = -Math.PI / 2 + (i * 2 * Math.PI) / PROFILE_DIMS.length
              const x = cx + Math.cos(ang) * R, y = cy + Math.sin(ang) * R
              const lx = cx + Math.cos(ang) * R * 1.17, ly = cy + Math.sin(ang) * R * 1.17
              const agree = activeProfile && Math.abs(scores[i] - activeProfile[i]) <= AGREE
              return (
                <g key={d.id}>
                  <line x1={cx} y1={cy} x2={x} y2={y} stroke={agree ? '#a08347' : '#e8e2d8'} strokeWidth={agree ? 6 : 1} opacity={agree ? 0.35 : 1} strokeLinecap="round" />
                  <text x={lx} y={ly} fontSize="10" fill="#6b645b" textAnchor="middle">{d.short}</text>
                </g>
              )
            })}
            {(() => {
              const groups = []
              PROFILE_DIMS.forEach((d, i) => {
                const g = groups[groups.length - 1]
                if (g && g.name === d.group) g.idx.push(i)
                else groups.push({ name: d.group, idx: [i] })
              })
              const N = PROFILE_DIMS.length
              const angOf = i => -Math.PI / 2 + (i * 2 * Math.PI) / N
              return groups.map(g => {
                const mid = (angOf(g.idx[0]) + angOf(g.idx[g.idx.length - 1])) / 2
                const bAng = angOf(g.idx[0]) - Math.PI / N
                return (
                  <g key={g.name}>
                    <line
                      x1={cx + Math.cos(bAng) * R * 1.0} y1={cy + Math.sin(bAng) * R * 1.0}
                      x2={cx + Math.cos(bAng) * R * 1.08} y2={cy + Math.sin(bAng) * R * 1.08}
                      stroke="#C8C1B7" strokeWidth="1.5"
                    />
                    <text
                      x={cx + Math.cos(mid) * R * 1.38} y={cy + Math.sin(mid) * R * 1.38}
                      fontSize="9" fill="#8a867d" textAnchor="middle" letterSpacing="2"
                      style={{ fontFamily: "'Roboto Condensed', sans-serif", textTransform: 'uppercase' }}
                    >{g.name}</text>
                  </g>
                )
              })
            })()}
            {activeProfile && (
              <polygon
                points={polygonPoints(activeProfile.map(disp), cx, cy, R)}
                fill="none" stroke={active.accentColor} strokeWidth="2" strokeDasharray="5 4" strokeLinejoin="round"
              />
            )}
            <polygon points={polygonPoints(scores.map(disp), cx, cy, R)} fill="rgba(115,26,37,.16)" stroke="#731a25" strokeWidth="2.5" strokeLinejoin="round" />
            {scores.map((v, i) => {
              const ang = -Math.PI / 2 + (i * 2 * Math.PI) / PROFILE_DIMS.length
              return <circle key={i} cx={cx + Math.cos(ang) * R * disp(v)} cy={cy + Math.sin(ang) * R * disp(v)} r="3" fill="#731a25" />
            })}
          </svg>
        </div>

        <div className="tp-letter">
          <p>
            Two judgments define your profile: {p1}, and {p2}. These are the places your answers
            depart most from the national pattern — they are yours.
          </p>
          <p>
            There is a shape worth noticing: you are {stance(scores, ti)} on{' '}
            <strong>{PROFILE_DIMS[ti].title}</strong> and {stance(scores, tj)} on{' '}
            <strong>{PROFILE_DIMS[tj].title}</strong>. That is not inconsistency; it is precision —
            trust given where you have seen it earned, withheld where you have not.
          </p>
          <p>
            {ngGap >= 0.12 ? (
              <>
                And you are not a textbook{' '}
                <a className="tp-typelink" href={`#/profiles/${nearest.id}`} style={{ color: nearest.accentColor }}>{TYPE_VOICE[nearest.id].one}</a>, either:
                on <strong>{PROFILE_DIMS[ng].title}</strong> you are{' '}
                {scores[ng] > nearestDims[ng] ? 'more trusting' : 'more doubtful'} than most of your own
                type — the profile fits you, but it does not contain you.
              </>
            ) : (
              <>
                You track the{' '}
                <a className="tp-typelink" href={`#/profiles/${nearest.id}`} style={{ color: nearest.accentColor }}>{TYPE_VOICE[nearest.id].one}</a>{' '}
                profile unusually closely across all eleven dimensions — few respondents match their
                type this cleanly.
              </>
            )}
          </p>

          <p className="tp-bridgehead">
            {active ? (
              <>You and the <a className="tp-typelink" href={`#/profiles/${active.id}`} style={{ color: active.accentColor }}>{active.name}</a></>
            ) : 'Where you meet the others'}
          </p>
          <div className="tp-bridge" style={{ borderColor: active ? active.accentColor : '#e5ddcf' }}>
            {!active && (
              <p>
                Nearest to you stand the{' '}
                <a className="tp-typelink" href={`#/profiles/${ranked[0].id}`} style={{ color: ranked[0].accentColor, fontWeight: 650 }}>{ranked[0].name}</a> and the{' '}
                <a className="tp-typelink" href={`#/profiles/${ranked[1].id}`} style={{ color: ranked[1].accentColor, fontWeight: 650 }}>{ranked[1].name}</a>. Hover any
                of the five publics above to see their shape against yours — and to read what you
                share, where you part, and the road they took to get there.
              </p>
            )}
            {active && (() => {
              const b = bridgeFor(active)
              return (
                <>
                  <p>
                    You agree on <strong>{b.agrees.length} of 11</strong> dimensions.
                    {b.agTop.length > 0 && (
                      <>
                        {' '}Where it matters most:{' '}
                        {b.agTop.map((i, k) => (
                          <span key={i}>
                            {k > 0 && ' and '}
                            <strong>{PROFILE_DIMS[i].title.toLowerCase()}</strong>
                          </span>
                        ))}
                        {' '}— there, the <a className="tp-typelink" href={`#/profiles/${active.id}`} style={{ color: active.accentColor }}>{b.voice.one}</a> sees what you see.
                      </>
                    )}
                  </p>
                  <p>
                    Where you part is <strong>{PROFILE_DIMS[b.gap].title.toLowerCase()}</strong>: you
                    are {scores[b.gap] > TYPE_DIM_PROFILES[active.id][b.gap] ? 'more trusting' : 'more doubtful'} there
                    than they are. Not carelessness on either side — {b.voice.road}.
                  </p>
                  <p className="tp-whisper">{b.voice.carry}</p>
                </>
              )
            })()}
          </div>
        </div>
      </div>

      <p className="tp-note">
        Each dimension is measured by two or three questions, so positions move in steps; the innermost ring is zero, so even full doubt keeps a visible shape. Agreement
        means positions within honest range on that dimension — computed from your answers, never
        asserted. Reform Authority is deliberately absent: your theory of reform is a choice, not a
        trust judgment. Type shapes are provisional, from the pre-fielding design study.
      </p>
    </div>
  )
}
