import React from 'react'
import { useAccessibility } from '../context/AccessibilityContext'

export const ContrastToggle: React.FC = () => {
  const { state, setContrast } = useAccessibility()
  return (
    <button
      type="button"
      className={`button is-small ${state.highContrast ? 'is-dark' : 'is-light'}`}
      onClick={() => setContrast(!state.highContrast)}
      aria-pressed={state.highContrast}
      aria-label="Attiva/disattiva alto contrasto"
      title="Alto contrasto"
    >
      Contrasto {state.highContrast ? 'ON' : 'OFF'}
    </button>
  )
}
