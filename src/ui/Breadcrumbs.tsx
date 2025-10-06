import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const labelMap: Record<string, string> = {
  'supporto-amministrazione': 'Supporto amministrazione',
  'vocabolario': 'Vocabolario',
  'controllo-email': 'Controllo email',
}

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation()
  const parts = pathname.split('/').filter(Boolean)

  return (
    <div className="bc-center">
      <nav className="breadcrumb pretty-breadcrumb is-medium" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {parts.map((p, i) => {
            const href = '/' + parts.slice(0, i + 1).join('/')
            const isLast = i === parts.length - 1
            return (
              <li
                key={href}
                className={isLast ? 'is-active' : ''}
                aria-current={isLast ? 'page' : undefined}
              >
                {isLast ? <span>{labelMap[p] ?? p}</span> : <Link to={href}>{labelMap[p] ?? p}</Link>}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumbs
