import React from "react";

const CUP: React.FC = () => {
  return (
    <div className="guida-content">
      <p>
        Il CUP (Centro Unico Prenotazioni) permette di prenotare visite ed esami
        nelle strutture pubbliche o convenzionate.
      </p>

      <h3>Prenotare una visita</h3>
      <ol>
        <li>Apri il sito del tuo Servizio Sanitario Regionale.</li>
        <li>Accedi con SPID o tessera sanitaria con PIN, se richiesto.</li>
        <li>Seleziona “Prenota una visita” e scegli lo specialista.</li>
        <li>Scegli la sede e la data disponibili, poi conferma.</li>
        <li>Salva o stampa la conferma di prenotazione.</li>
      </ol>

      <p className="mt-3">
        <strong>Consiglio:</strong> se non trovi posto, prova con altre
        strutture vicine o orari diversi.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wj-V1IQnGdU?si=UiXl2MoVy868Hd3B"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CUP;
