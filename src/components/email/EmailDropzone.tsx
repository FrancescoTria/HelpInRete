import React, { useCallback, useRef, useState } from "react";

export type UploadedEmail = { file: File; text?: string };

type Props = {
  onFiles: (emails: UploadedEmail[]) => void;
};

const ACCEPTED = [".eml", ".msg"];

const EmailDropzone: React.FC<Props> = ({ onFiles }) => {
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      const items: UploadedEmail[] = [];

      for (const f of Array.from(files)) {
        const ext = f.name.toLowerCase().slice(f.name.lastIndexOf("."));
        if (!ACCEPTED.includes(ext)) continue;
        if (ext === ".eml") {
          const text = await f.text().catch(() => undefined);
          items.push({ file: f, text });
        } else {
          items.push({ file: f });
        }
      }
      if (items.length) onFiles(items);
    },
    [onFiles]
  );

  return (
    <div>
      <div
        className={`box has-text-centered ${
          drag ? "has-background-light" : ""
        }`}
        role="region"
        aria-label="Caricamento file email"
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <p className="mb-2">
          <strong>Trascina qui</strong> i file .eml o .msg
        </p>
        <p className="mb-3">oppure</p>
        <button
          className="button is-link"
          onClick={() => inputRef.current?.click()}
        >
          Seleziona file
        </button>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED.join(",")}
          multiple
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <p className="help mt-3">
          Suggerimento: scarica prima l'email dal tuo provider seguendo il
          tutorial sopra.
        </p>
      </div>
    </div>
  );
};

export default EmailDropzone;
