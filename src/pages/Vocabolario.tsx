import React, { useMemo, useState } from 'react'
import Breadcrumbs from '../ui/Breadcrumbs'
import { TERMINI, type Term } from '../data/Vocabolario'

const categorie: Array<Term['categoria'] | 'tutte'> = ['tutte', 'sicurezza', 'amministrazione', 'internet']

const Vocabolario: React.FC = () => {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<typeof categorie[number]>('tutte')

  const filtered = useMemo(() => {
    const key = q.trim().toLowerCase()
    return TERMINI.filter(t => {
      const matchCat = cat === 'tutte' || t.categoria === cat
      const matchKey = !key || t.chiave.toLowerCase().includes(key) || t.definizione.toLowerCase().includes(key)
      return matchCat && matchKey
    })
  }, [q, cat])

  return (
    <div>
      <Breadcrumbs />

      <h1 className="title is-3 page-title">Vocabolario</h1>
      <p className="subtitle is-6 page-subtitle">Definizioni semplici, esempi chiari.</p>

      <div className="box">
        <div className="field is-grouped is-grouped-multiline">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Cerca un termine (es. phishing)"
              value={q}
              onChange={e => setQ(e.target.value)}
              aria-label="Cerca termine"
            />
          </p>
          <p className="control">
            <div className="select">
              <select value={cat} onChange={e => setCat(e.target.value as any)} aria-label="Filtra per categoria">
                {categorie.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </p>
        </div>

        <ul>
          {filtered.map(t => (
            <li key={t.chiave} className="mb-4">
              <div className="content">
                <p className="mb-1"><strong>{t.chiave}</strong> <span className="tag is-info" aria-label="categoria">{t.categoria}</span></p>
                <p>{t.definizione}</p>
              </div>
            </li>
          ))}
          {filtered.length === 0 && <p className="has-text-grey">Nessun termine trovato.</p>}
        </ul>
      </div>
    </div>
  )
}

export default Vocabolario
