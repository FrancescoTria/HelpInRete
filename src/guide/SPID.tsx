import React from "react";

/**
 * Contenuti importati da HelpInRete-master e adattati:
 * - linguaggio semplice
 * - passi numerati
 * - link con target sicuro
 */
const SPID: React.FC = () => {
  return (
    <div className="guida-content">
      <p>
        SPID è il sistema che ti permette di accedere ai siti della Pubblica
        Amministrazione con un’unica identità (es. INPS, Agenzia delle Entrate).
      </p>

      <h3>Come richiedere SPID</h3>
      <ol>
        <li>Apri il browser.</li>
        <li>
          Vai su{" "}
          <a href="https://www.spid.gov.it/" target="_blank" rel="noreferrer">
            www.spid.gov.it
          </a>
          .
        </li>
        <li>Clicca su “Scegli il tuo gestore SPID”.</li>
        <li>
          Scegli un gestore (es. Poste Italiane, InfoCert, TIM ID) e segui le
          istruzioni.
        </li>
        <li>
          Tieni pronti: documento d’identità, tessera sanitaria e una email
          attiva.
        </li>
        <li>Completa la verifica dell’identità come indicato dal gestore.</li>
      </ol>

      <h3>Come usare SPID</h3>
      <ol>
        <li>Vai sul sito del servizio (es. INPS) e clicca “Entra con SPID”.</li>
        <li>Scegli il tuo gestore SPID, inserisci le credenziali.</li>
        <li>
          Conferma l’accesso con l’app del gestore o con l’SMS, se richiesto.
        </li>
      </ol>

      <p className="mt-3">
        <strong>Consiglio:</strong> se dimentichi la password, usa “recupero
        password” sul sito del tuo gestore SPID.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/7nvxkixzW94?si=9vj4NRB3lplV9fRn"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default SPID;
