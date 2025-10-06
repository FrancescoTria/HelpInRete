import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import A11yToolbar from '../ui/A11yToolbar'

function navItem(isActive: boolean) {
  return `navbar-item ${isActive ? 'is-active' : ''}`
}

const NavBar: React.FC = () => {
  const [active, setActive] = useState(false)
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          {/* brand con stesso trattamento active degli altri */}
          <NavLink to="/" className={({ isActive }) => navItem(isActive) + ' brand'}>
            <span className="has-text-weight-bold">HelpInRete</span>
          </NavLink>
          <a
            role="button"
            className={`navbar-burger ${active ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={active}
            onClick={() => setActive(v => !v)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <NavLink to="/supporto-amministrazione" className={({isActive}) => navItem(isActive)}>
              Supporto amministrazione
            </NavLink>
            <NavLink to="/vocabolario" className={({isActive}) => navItem(isActive)}>
              Vocabolario
            </NavLink>
            <NavLink to="/controllo-email" className={({isActive}) => navItem(isActive)}>
              Controllo email
            </NavLink>
          </div>
          <div className="navbar-end">
            <div className="navbar-item a11y-host">
              <A11yToolbar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
