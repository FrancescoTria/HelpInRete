import React, { useMemo, useState } from "react";
import { RiskBadge, type RiskLevel, RISK_LABEL, RISK_BULMA } from "./RiskBadge";

/**
 * Pannello con tre pulsanti per simulare (solo UI) lo stato di pericolosità.
 * - Disabilitato finché non c'è almeno una email caricata.
 * - Totalmente autonomo: non muta stato di altre parti dell'app.
 */
type Props = {
  disabled?: boolean;
};

const buttons: { level: RiskLevel; btnClass: string; hint: string }[] = [
  { level: "danger", btnClass: "is-danger", hint: "Rosso" },
  { level: "warning", btnClass: "is-warning", hint: "Giallo" },
  { level: "safe", btnClass: "is-success", hint: "Verde" },
];

const RiskTestPanel: React.FC<Props> = ({ disabled = false }) => {
  const [selected, setSelected] = useState<RiskLevel | null>(null);

  const message = useMemo(() => {
    if (!selected) return null;
    const color = RISK_BULMA[selected];
    const label = RISK_LABEL[selected];
    return (
      <article
        className={["message", color, "mt-4"].join(" ")}
        role="status"
        aria-live="polite"
      >
        <div className="message-header">
          <p>Valutazione di prova</p>
        </div>
        <div className="message-body">
          <p className="mb-2">
            <strong>Stato selezionato:</strong> <RiskBadge level={selected} />
          </p>
          <p className="is-size-6">
            Questo è un test puramente visivo per verificare i colori e la resa
            dell'interfaccia. Non è il risultato dell'analisi AI.
          </p>
        </div>
      </article>
    );
  }, [selected]);

  return (
    <section className="mt-5" aria-labelledby="risk-test-title">
      <h2 id="risk-test-title" className="mb-2">
        <strong>Test stato pericolosità (solo UI)</strong>
      </h2>
      <p className="help mb-3">
        I pulsanti qui sotto simulano lo stato dopo l'analisi. Servono a testare
        i colori e l'accessibilità.
      </p>

      <div className="buttons">
        {buttons.map(({ level, btnClass, hint }) => (
          <button
            key={level}
            type="button"
            className={[
              "button",
              btnClass,
              "is-light",
              selected === level ? "is-selected" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            disabled={disabled}
            aria-pressed={selected === level}
            onClick={() => setSelected(level)}
            title={`${RISK_LABEL[level]} • ${hint}`}
          >
            {RISK_LABEL[level]}
          </button>
        ))}
      </div>

      {disabled && (
        <p className="help mt-3">
          Carica prima almeno una email per abilitare i test.
        </p>
      )}

      {message}
    </section>
  );
};

export default RiskTestPanel;
