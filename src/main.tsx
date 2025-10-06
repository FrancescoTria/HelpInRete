import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

// CSS globali: Bulma + Bootstrap + override app
import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.css'

import { router } from './router'
import { AccessibilityProvider } from './context/AccessibilityContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provider per accessibilità: gestione contrasto, grandezza font, preferenze persistenti */}
    <AccessibilityProvider>
      <RouterProvider router={router} />
    </AccessibilityProvider>
  </React.StrictMode>
)
