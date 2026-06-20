import { ITEM_LABELS } from '../data/profileData.js'

export default function ItemBar({ itemId, classProb, avgProb, accentColor, className = '' }) {
  const label = ITEM_LABELS[itemId] ?? itemId
  const classPct = Math.round(classProb * 100)
  const avgPct = Math.round(avgProb * 100)

  return (
    <div
      className={`item-bar-group ${className}`}
      role="img"
      aria-label={`${label} — This type: ${classPct}%, All types: ${avgPct}%`}
    >
      <p className="item-bar-label">{label}</p>
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
