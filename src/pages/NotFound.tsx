import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound: React.FC = () => {
  const err = useRouteError() as any
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-2">Pagina non trovata</h1>
        {err?.statusText && <p className="subtitle">{err.statusText}</p>}
        <Link to="/" className="button is-link mt-4">Torna alla Home</Link>
      </div>
    </section>
  )
}

export default NotFound
