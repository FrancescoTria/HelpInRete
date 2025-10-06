import React from "react";

const ISEE: React.FC = () => {
  return (
    <div className="guida-content">
      <p>
        L’ISEE è l’indicatore che misura la situazione economica del nucleo
        familiare per accedere a bonus e agevolazioni.
      </p>

      <h3>Come richiederlo online</h3>
      <ol>
        <li>Accedi al portale INPS con SPID/CIE/CNS.</li>
        <li>
          Compila la DSU (Dichiarazione Sostitutiva Unica) con i dati richiesti.
        </li>
        <li>Invia la DSU e attendi l’elaborazione.</li>
        <li>Scarica l’attestazione ISEE quando pronta.</li>
      </ol>

      <p className="mt-3">
        <strong>Attenzione:</strong> tieni pronti i dati su redditi, patrimonio,
        componenti del nucleo e giacenze medie.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/6CGTDNOpVak?si=GJ55vnOMAQRaId3T"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ISEE;
