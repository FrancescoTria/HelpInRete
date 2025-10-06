import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../ui/Breadcrumbs";

/**
 * Pagina "Supporto amministrazione"
 * - Mantiene lo stile e i pattern di HelpInRete (card, grid, breadcrumbs).
 * - Reintroduce le voci tutorial di HelpInRete-master con routing verso /guida/:guidaId.
 * - Contenuti semplici e ad alta leggibilità per utenza senior.
 */
const cards: Array<{
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ariaLabel: string;
}> = [
  {
    id: "spid",
    title: "SPID",
    subtitle: "Identità digitale",
    description: "Accesso ai servizi pubblici online con un’unica identità.",
    ariaLabel: "Apri guida SPID",
  },
  {
    id: "f24",
    title: "F24",
    subtitle: "Pagamenti tributi",
    description: "Compilazione e pagamento del modello F24.",
    ariaLabel: "Apri guida F24",
  },
  {
    id: "cup",
    title: "CUP",
    subtitle: "Prenotazioni visite",
    description: "Come prenotare visite ed esami medici.",
    ariaLabel: "Apri guida CUP",
  },
  {
    id: "isee",
    title: "ISEE",
    subtitle: "Indicatore economico",
    description: "Richiesta e consultazione ISEE online.",
    ariaLabel: "Apri guida ISEE",
  },
];

const SupportoAmministrazione: React.FC = () => {
  return (
    <div className="section">
      <Breadcrumbs />

      <h1 className="title is-3 page-title">Supporto amministrazione</h1>
      <p className="page-subtitle is-5 mb-5">
        Guide pratiche e brevi, scritte in modo chiaro.
      </p>

      <div className="columns is-multiline">
        {cards.map((card) => (
          <div key={card.id} className="column is-12-tablet is-6-desktop">
            <div className="card h-100" role="region" aria-label={card.title}>
              <header className="card-header">
                <p className="card-header-title">
                  {card.title}
                  <span className="tag is-light ml-2" aria-hidden="true">
                    {card.subtitle}
                  </span>
                </p>
              </header>
              <div className="card-content">
                <p>{card.description}</p>
              </div>
              <footer className="card-footer">
                <Link
                  to={`/guida/${card.id}`}
                  className="card-footer-item has-text-weight-semibold"
                  aria-label={card.ariaLabel}
                >
                  Apri guida
                </Link>
              </footer>
            </div>
          </div>
        ))}
      </div>

      {/* Suggerimenti rapidi / onboarding */}
      <div className="notification is-light mt-5" role="note">
        <p className="mb-2">
          <strong>Consiglio:</strong> tieni a portata di mano documento, tessera
          sanitaria e telefono.
        </p>
        <p>
          Se usi lo zoom o l’alto contrasto, puoi attivarli dalla toolbar in
          alto.
        </p>
      </div>
    </div>
  );
};

export default SupportoAmministrazione;
