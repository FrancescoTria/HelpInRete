import React from "react";

const F24: React.FC = () => {
  return (
    <div className="guida-content">
      <p>
        Il modello F24 serve per pagare tasse e tributi. Si può compilare online
        e pagare tramite banca o servizi abilitati.
      </p>

      <h3>Compilazione base</h3>
      <ol>
        <li>
          Recupera il codice tributo (lo trovi nella lettera o sul sito
          dell’ente).
        </li>
        <li>Inserisci i tuoi dati anagrafici.</li>
        <li>Compila i campi richiesti con importi e periodi.</li>
        <li>Controlla attentamente i numeri prima dell’invio.</li>
      </ol>

      <h3>Pagamento</h3>
      <ol>
        <li>
          Accedi al tuo home banking oppure a un servizio online abilitato.
        </li>
        <li>Cerca la sezione “F24” e incolla i dati.</li>
        <li>Conferma e salva la ricevuta.</li>
      </ol>

      <p className="mt-3">
        <strong>Nota:</strong> in caso di dubbi, chiedi conferma al CAF o al tuo
        commercialista.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/-P9Nqj0z4QU?si=ff9PhkhGNDsAXR2D"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default F24;
