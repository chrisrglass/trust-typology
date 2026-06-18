export default function Question({ item, value, onChange }) {
  if (item.type === 'forced_choice' || item.type === 'yes_no' || item.type === 'yes_no_depends') {
    return (
      <div className="question">
        {item.preface && <p className="question-preface">{item.preface}</p>}
        <p className="question-prompt">{item.prompt}</p>
        <div className="options options-stacked">
          {item.options.map(opt => (
            <label
              key={opt.value}
              className={`option-card ${value === opt.value ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={item.id}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
              />
              <span className="option-letter">{opt.value.toUpperCase()}</span>
              <span className="option-text">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    )
  }

  if (item.type === 'scale_4' || item.type === 'scale_4_plus' || item.type === 'options_3' || item.type === 'options_4' || item.type === 'single_select') {
    const isHorizontalScale = item.type === 'scale_4' && item.options.length <= 4
    return (
      <div className="question">
        {item.instruction && <p className="question-instruction">{item.instruction}</p>}
        <p className="question-prompt">{item.prompt}</p>
        <div className={`options ${isHorizontalScale ? 'options-scale' : 'options-stacked'}`}>
          {item.options.map((opt, i) => {
            const letter = String.fromCharCode(65 + i)
            return (
              <label
                key={opt.value}
                className={`option-card ${value === opt.value ? 'selected' : ''} ${isHorizontalScale ? 'option-scale-item' : ''}`}
              >
                <input
                  type="radio"
                  name={item.id}
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={() => onChange(opt.value)}
                />
                {!isHorizontalScale && (
                  <span className="option-letter">{letter}</span>
                )}
                <span className="option-text">{opt.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  if (item.type === 'multiselect') {
    const selected = value || []
    const toggle = (v) => {
      if (v === 'none') {
        onChange(['none'])
        return
      }
      const without = selected.filter(s => s !== 'none')
      const next = without.includes(v)
        ? without.filter(s => s !== v)
        : [...without, v]
      onChange(next)
    }
    return (
      <div className="question">
        <p className="question-prompt">{item.prompt}</p>
        <div className="options options-stacked">
          {item.options.map(opt => {
            const isChecked = selected.includes(opt.value)
            return (
              <label
                key={opt.value}
                className={`option-card ${isChecked ? 'selected' : ''}`}
              >
                <input
                  type="checkbox"
                  name={item.id}
                  value={opt.value}
                  checked={isChecked}
                  onChange={() => toggle(opt.value)}
                />
                <span className="option-text">{opt.label}</span>
              </label>
            )
          })}
        </div>
      </div>
    )
  }

  if (item.type === 'matrix') {
    const matrixValues = value || {}
    return (
      <div className="question">
        <p className="question-prompt">{item.prompt}</p>
        <div className="matrix">
          <div className="matrix-header">
            <div className="matrix-row-label" />
            {item.options.map(opt => (
              <div key={opt.value} className="matrix-col-label">{opt.label}</div>
            ))}
          </div>
          {item.rows.map(row => (
            <div key={row.id} className="matrix-row">
              <div className="matrix-row-label">{row.label}</div>
              {item.options.map(opt => (
                <div key={opt.value} className="matrix-cell">
                  <input
                    type="radio"
                    name={`${item.id}-${row.id}`}
                    value={opt.value}
                    checked={matrixValues[row.id] === opt.value}
                    onChange={() => onChange({ ...matrixValues, [row.id]: opt.value })}
                    aria-label={`${row.label}: ${opt.label}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}
