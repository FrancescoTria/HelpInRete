import React from "react";
import type { UploadedEmail } from "./EmailDropzone";

const EmailPreview: React.FC<{ emails: UploadedEmail[] }> = ({ emails }) => {
  if (!emails.length) return null;
  return (
    <div className="content">
      <p className="mb-2">
        <strong>File caricati</strong>
      </p>
      <ul>
        {emails.map((e, i) => (
          <li key={i} className="mb-3">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">{e.file.name}</p>
              </header>
              <div className="card-content">
                <p className="mb-2">
                  <strong>Dimensione:</strong> {(e.file.size / 1024).toFixed(1)}{" "}
                  KB
                </p>
                {e.text && (
                  <details>
                    <summary>Anteprima testo (.eml)</summary>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                      {e.text.slice(0, 999999)}
                      {e.text.length > 999999 ? "…" : ""}
                    </pre>
                  </details>
                )}
                <p className="mt-2">
                  <em>Pronto per analisi AI (fase successiva da integrare).</em>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailPreview;
