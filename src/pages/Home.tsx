import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";

/**
 * Home
 * - Hero con immagine di background e scrim scuro (vedi CSS .home-hero)
 * - Testo ben leggibile in stile “ANPR”: kicker, titolo grande, sottotitolo chiaro
 * - CTA primario e secondario con varianti “hero-safe”
 */
const Home: React.FC = () => {
  return (
    <div>
      <Breadcrumbs />

      {/* HERO */}
      <section
        className="hero home-hero is-medium"
        aria-label="Introduzione HelpInRete"
      >
        <div className="hero-body">
          <div className="container hero-content">
            <p className="hero-kicker">Servizi guidati e inclusivi</p>
            <h1 className="title hero-title">HelpInRete</h1>

            <div className="buttons mt-4">
              <Link
                to="/supporto-amministrazione"
                className="button is-primary hero-btn-primary"
              >
                Inizia ora
              </Link>
              <Link
                to="/vocabolario"
                className="button is-light hero-btn-ghost"
              >
                Scopri i termini
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONI PRINCIPALI */}
      <div className="columns is-multiline mt-5">
        <div className="column is-4">
          <div className="card h-100">
            <header className="card-header">
              <p className="card-header-title">📄 Supporto amministrazione</p>
            </header>
            <div className="card-content">
              <p>
                Procedure guidate, step chiari e promemoria. Zero ansia, solo
                check-list.
              </p>
            </div>
            <footer className="card-footer">
              <Link to="/supporto-amministrazione" className="card-footer-item">
                Apri
              </Link>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card h-100">
            <header className="card-header">
              <p className="card-header-title">🔎 Vocabolario</p>
            </header>
            <div className="card-content">
              <p>
                Phishing, backdoor, OTP. Definizioni semplici con esempi
                pratici.
              </p>
            </div>
            <footer className="card-footer">
              <Link to="/vocabolario" className="card-footer-item">
                Apri
              </Link>
            </footer>
          </div>
        </div>

        <div className="column is-4">
          <div className="card h-100">
            <header className="card-header">
              <p className="card-header-title">✉️ Controllo email</p>
            </header>
            <div className="card-content">
              <p>
                Tutorial provider e caricamento .eml/.msg con anteprima sicura.
              </p>
            </div>
            <footer className="card-footer">
              <Link to="/controllo-email" className="card-footer-item">
                Apri
              </Link>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
