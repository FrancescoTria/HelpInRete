import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type AccessibilityState = {
  highContrast: boolean
  baseFontPct: number // percentuale dimensione base (100, 112, 125, ...)
}

type AccessibilityAction =
  | { type: 'SET_CONTRAST'; value: boolean }
  | { type: 'SET_FONT'; value: number }

const defaultState: AccessibilityState = { highContrast: false, baseFontPct: 100 }

const AccessibilityContext = createContext<{
  state: AccessibilityState
  setContrast: (v: boolean) => void
  setFontPct: (v: number) => void
} | null>(null)

function reducer(state: AccessibilityState, action: AccessibilityAction): AccessibilityState {
  switch (action.type) {
    case 'SET_CONTRAST':
      return { ...state, highContrast: action.value }
    case 'SET_FONT':
      return { ...state, baseFontPct: action.value }
    default:
      return state
  }
}

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stored, setStored] = useLocalStorage<AccessibilityState>('a11y', defaultState)
  const [state, dispatch] = React.useReducer(reducer, stored)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--base-font-size', `${state.baseFontPct}%`)
    if (state.highContrast) document.body.classList.add('theme-hc')
    else document.body.classList.remove('theme-hc')
    setStored(state)
  }, [state, setStored])

  const api = useMemo(
    () => ({
      state,
      setContrast: (v: boolean) => dispatch({ type: 'SET_CONTRAST', value: v }),
      setFontPct: (v: number) => dispatch({ type: 'SET_FONT', value: v }),
    }),
    [state]
  )

  return <AccessibilityContext.Provider value={api}>{children}</AccessibilityContext.Provider>
}

export const useAccessibility = () => {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility must be used within AccessibilityProvider')
  return ctx
}
