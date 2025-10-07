import React from "react";

/**
 * Livelli di rischio mostrati nel pannello di test.
 * Manteniamo etichette e mappature centralizzate per riuso e consistenza.
 */
export type RiskLevel = "danger" | "warning" | "safe";

const LABEL: Record<RiskLevel, string> = {
  danger: "Pericolosa",
  warning: "Forse pericolosa",
  safe: "Sicura",
};

const BULMA: Record<RiskLevel, string> = {
  danger: "is-danger",
  warning: "is-warning",
  safe: "is-success",
};

/**
 * Restituisce un badge accessibile che rappresenta il livello di rischio.
 * Non richiede CSS aggiuntivo: usa le classi Bulma per i colori.
 */
const RiskBadge: React.FC<{ level: RiskLevel; className?: string }> = ({
  level,
  className = "",
}) => {
  const label = LABEL[level];
  const color = BULMA[level];
  return (
    <span
      className={["tag", "is-medium", color, className]
        .filter(Boolean)
        .join(" ")}
      aria-label={`Stato pericolosità: ${label}.`}
      title={label}
    >
      {label}
    </span>
  );
};

export { RiskBadge, LABEL as RISK_LABEL, BULMA as RISK_BULMA };
