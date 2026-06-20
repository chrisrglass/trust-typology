import { ITEM_OPTIONS, ITEM_LABELS } from '../data/profileData.js'

export default function ItemBar({ itemId, classProb, avgProb, accentColor, className = '' }) {
  const options = ITEM_OPTIONS[itemId]
  const dominant = classProb >= 0.5 ? 'a' : 'b'
  const displayText = options
    ? options[dominant]
    : (ITEM_LABELS[itemId] ?? itemId)

  const classPct = dominant === 'a'
    ? Math.round(classProb * 100)
    : Math.round((1 - classProb) * 100)
  const avgPct = dominant === 'a'
    ? Math.round(avgProb * 100)
    : Math.round((1 - avgProb) * 100)

  const optionTag = dominant === 'a' ? 'Option A' : 'Option B'

  return (
    <div
      className={`item-bar-group ${className}`}
      role="img"
      aria-label={`${displayText} — This type: ${classPct}%, All types: ${avgPct}%`}
    >
      <p className="item-bar-option-tag">{optionTag}</p>
      <p className="item-bar-label">{displayText}</p>
      <div className="item-bar-rows">
        <div className="item-bar-row">
          <span className="item-bar-legend-label">This type</span>
          <div className="item-bar-track">
            <div
              className="item-bar-fill item-bar-fill--class"
              style={{ width: `${classPct}%`, background: accentColor }}
            />
          </div>
          <span className="item-bar-pct">{classPct}%</span>
        </div>
        <div className="item-bar-row">
          <span className="item-bar-legend-label">All types</span>
          <div className="item-bar-track">
            <div
              className="item-bar-fill item-bar-fill--avg"
              style={{ width: `${avgPct}%` }}
            />
          </div>
          <span className="item-bar-pct">{avgPct}%</span>
        </div>
      </div>
    </div>
  )
}
