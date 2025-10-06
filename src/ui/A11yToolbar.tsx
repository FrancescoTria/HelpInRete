import React from 'react'
import { useAccessibility } from '../context/AccessibilityContext'

const STEPS = [100, 112, 125, 150, 175] as const

function nearestStep(current: number, dir: 1 | -1) {
  const i = STEPS.findIndex(s => s >= current)
  if (i === -1) return STEPS[STEPS.length - 1]
  if (STEPS[i] === current) {
    const n = i + (dir === 1 ? 1 : -1)
    return STEPS[Math.max(0, Math.min(STEPS.length - 1, n))]
  }
  return dir === 1 ? STEPS[i] : (i > 0 ? STEPS[i - 1] : STEPS[0])
}

const A11yToolbar: React.FC = () => {
  const { state, setContrast, setFontPct } = useAccessibility()

  const dec = () => setFontPct(nearestStep(state.baseFontPct, -1))
  const inc = () => setFontPct(nearestStep(state.baseFontPct, +1))

  return (
    <div className="a11y-toolbar" role="group" aria-label="Accessibilità">
      {/* Contrasto */}
      <span className="label" aria-hidden>Contrasto</span>
      <button
        type="button"
        className={`a11y-switch ${state.highContrast ? 'is-on' : ''}`}
        aria-pressed={state.highContrast}
        aria-label={`Contrasto ${state.highContrast ? 'attivo' : 'disattivato'}`}
        onClick={() => setContrast(!state.highContrast)}
      >
        <span className="knob" />
      </button>
      <span className="a11y-state" aria-live="polite" aria-atomic="true">
        {state.highContrast ? 'ON' : 'OFF'}
      </span>

      {/* Font size */}
      <div className="a11y-font" aria-label="Dimensione del testo">
        <button type="button" className="a11y-btn" onClick={dec} aria-label="Riduci testo">A−</button>
        <span className="a11y-display" aria-live="polite" aria-atomic="true">
          {state.baseFontPct}%
        </span>
        <button type="button" className="a11y-btn" onClick={inc} aria-label="Aumenta testo">A+</button>
      </div>
    </div>
  )
}

export default A11yToolbar
