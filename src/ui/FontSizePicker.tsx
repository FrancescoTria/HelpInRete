import React from 'react'
import { useAccessibility } from '../context/AccessibilityContext'


const steps = [100, 112, 125, 150, 175]

export const FontSizePicker: React.FC = () => {
  const { state, setFontPct } = useAccessibility()
  return (
    <div className="field has-addons" aria-label="Dimensione del testo">
      <p className="control">
        <span className="button is-static is-small" aria-hidden>Testo</span>
      </p>
      <p className="control">
        <div className="select is-small">
          <select
            aria-label="Seleziona dimensione del testo"
            value={state.baseFontPct}
            onChange={e => setFontPct(Number(e.target.value))}
          >
            {steps.map(v => (
              <option key={v} value={v}>{v}%</option>
            ))}
          </select>
        </div>
      </p>
    </div>
  )
}
