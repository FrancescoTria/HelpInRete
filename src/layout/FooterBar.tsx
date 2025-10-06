import React from "react";
import { NavLink } from "react-router-dom";

const FooterBar: React.FC = () => {
  const toTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="site-footer"
      role="contentinfo"
      aria-label="Piè di pagina"
    >
      <div className="container">
        {/* fascia superiore */}
        <div className="columns is-multiline">
          <div className="column is-12-tablet is-5-desktop">
            <div className="footer-brand">
              <div className="brand-title">HelpInRete</div>
              <p className="brand-copy">
                Assistenza semplice per pratiche, termini digitali e sicurezza
                email. Pensato per essere chiaro, calmo e inclusivo.
              </p>
            </div>
          </div>

          <nav
            className="column is-6-tablet is-4-desktop"
            aria-label="Link rapidi"
          >
            <h2 className="footer-heading">Link rapidi</h2>
            <ul className="footer-list">
              <li>
                <NavLink className="footer-link" to="/supporto-amministrazione">
                  Supporto amministrazione
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-link" to="/vocabolario">
                  Vocabolario
                </NavLink>
              </li>
              <li>
                <NavLink className="footer-link" to="/controllo-email">
                  Controllo email
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="column is-6-tablet is-3-desktop">
            <h2 className="footer-heading">Aiuto</h2>
            <ul className="footer-list">
              <li>
                <span className="footer-muted">
                  Tutorial provider email nella pagina “Controllo email”.
                </span>
              </li>
              <li>
                <span className="footer-muted">
                  Anteprima sicura dei file .eml/.msg.
                </span>
              </li>
            </ul>
            <button
              className="btn-top"
              onClick={toTop}
              aria-label="Torna all’inizio"
            >
              ↑ Torna su
            </button>
          </div>
        </div>

        {/* fascia inferiore */}
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} HelpInRete</p>
          <p className="footer-copy small">
            Tria Francesco, Panunzio Davide, Maggio Michele
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
