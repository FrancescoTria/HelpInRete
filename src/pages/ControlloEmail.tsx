import React, { useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import {
  ProviderTutorial,
  type Provider,
} from "../components/email/ProviderTutorial";
import EmailDropzone, {
  type UploadedEmail,
} from "../components/email/EmailDropzone";
import EmailPreview from "../components/email/EmailPreview";
import RiskTestPanel from "../components/email/RiskBadgePanel";

/**
 * Elenco dei provider supportati per mostrare il tutorial di download.
 */
const providers: Provider[] = ["Gmail", "Outlook", "Tiscali", "Yahoo"];

const ControlloEmail: React.FC = () => {
  const [provider, setProvider] = useState<Provider>("Gmail");
  const [emails, setEmails] = useState<UploadedEmail[]>([]);

  return (
    <div className="container mt-5">
      <Breadcrumbs />

      <h1 className="title is-3 page-title">Controllo email</h1>
      <p className="subtitle is-6 page-subtitle">
        Prima segui il tutorial per scaricare il messaggio, poi carica il file
        <code> .eml</code> o <code>.msg</code>.
      </p>

      <div className="box">
        {/* Selettore provider + tutorial inline */}
        <label className="label" htmlFor="provider">
          Scegli il tuo servizio di posta
        </label>
        <div className="select is-medium">
          <select
            id="provider"
            value={provider}
            onChange={(e) => setProvider(e.target.value as Provider)}
            aria-label="Seleziona provider"
          >
            {providers.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <ProviderTutorial provider={provider} />
        </div>

        {/* Caricamento email */}
        <div className="mt-4">
          <EmailDropzone onFiles={setEmails} />
        </div>

        {/* Anteprima dei file caricati */}
        <div className="mt-4">
          <EmailPreview emails={emails} />
        </div>

        {/* Pannello di test pericolosità */}
        <RiskTestPanel disabled={!emails.length} />

        {/* Placeholder invio all'AI */}
        <div className="mt-5">
          <button
            className="button is-success"
            disabled={!emails.length}
            onClick={() => alert("TODO: invio alla AI da integrare")}
          >
            Invia all'AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default ControlloEmail;
