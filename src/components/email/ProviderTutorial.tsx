import React from "react";
import { getTutorial } from "../../utils/emailTutorial";

export type Provider = "Gmail" | "Outlook" | "Tiscali" | "Yahoo";

/**
 * Riquadro tutorial con lo stesso stile del pannello "Come funziona"
 * in Supporto amministrazione.
 * - Usa Bulma `.message.is-primary` per coerenza cromatica e leggibilità.
 * - In modalità Alto Contrasto i colori vengono forzati dal CSS globale.
 */
export const ProviderTutorial: React.FC<{ provider: Provider }> = ({
  provider,
}) => {
  const steps = getTutorial(provider);
  return (
    <article
      className="message is-primary"
      role="region"
      aria-labelledby="tutorial-title"
    >
      <div className="message-header" id="tutorial-title">
        <p>Tutorial: scaricare email come file ({provider})</p>
      </div>
      <div className="message-body">
        <ol>
          {steps.map((s, i) => (
            <li key={i} className="mb-2">
              {s}
            </li>
          ))}
        </ol>
        <p className="mt-3">
          <strong>Formato supportato:</strong> .eml e .msg
        </p>
      </div>
    </article>
  );
};
