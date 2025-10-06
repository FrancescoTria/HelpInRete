import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Guida.css";

// Contenuti delle guide (portati da HelpInRete-master e adattati allo stile)
import SPID from "../guide/SPID";
import F24 from "../guide/F24";
import CUP from "../guide/CUP";
import ISEE from "../guide/ISEE";

/**
 * Componente router-driven che mostra la guida richiesta.
 * - Accessibile: titoli chiari, liste ordinate, pulsante "torna indietro".
 * - Mantiene il design system di HelpInRete (section, card, ecc.).
 */
const VALID = ["spid", "f24", "cup", "isee"] as const;
type GuidaId = (typeof VALID)[number];

const titleMap: Record<GuidaId, string> = {
  spid: "Guida SPID",
  f24: "Guida F24",
  cup: "Guida CUP",
  isee: "Guida ISEE",
};

const Guida: React.FC = () => {
  const { guidaId } = useParams<{ guidaId: GuidaId }>();
  const navigate = useNavigate();

  const normalized = (guidaId || "").toLowerCase() as GuidaId;
  const isValid = VALID.includes(normalized);

  const renderBody = () => {
    switch (normalized) {
      case "spid":
        return <SPID />;
      case "f24":
        return <F24 />;
      case "cup":
        return <CUP />;
      case "isee":
        return <ISEE />;
      default:
        return (
          <div className="message is-warning">
            <div className="message-body">
              Guida non trovata. Controlla l’indirizzo o torna all’elenco.
            </div>
          </div>
        );
    }
  };

  return (
    <div className="section">
      <div className="mb-4">
        <button
          className="button is-small is-light"
          onClick={() => navigate(-1)}
          aria-label="Torna alla pagina precedente"
        >
          ← Torna indietro
        </button>
      </div>

      <h1 className="title is-3">{isValid ? titleMap[normalized] : "Guida"}</h1>

      <div className="card guida-card">
        <div className="card-content">{renderBody()}</div>
      </div>
    </div>
  );
};

export default Guida;
