# 🧩 HelpInRete

**HelpInRete** è una webapp progettata per assistere **anziani e persone meno esperte di tecnologia** nelle pratiche amministrative digitali, aiutandole a:

- comprendere termini tecnici legati all’ambiente **amministrativo e informatico** (es. _phishing, backdoor, scam, blackmail_);
- riconoscere e prevenire **truffe online**, **email di spam** o **tentativi di phishing**;
- apprendere tramite **tutorial guidati** come scaricare e caricare file `.msg` o `.eml` dal proprio servizio di posta elettronica (Gmail, Outlook, Tiscali, Yahoo, ecc.);
- analizzare tali file attraverso un sistema di **intelligenza artificiale** per valutarne la sicurezza.

Il progetto nasce per promuovere **l’inclusione digitale** e ridurre il divario tecnologico generazionale, con particolare attenzione all’**accessibilità visiva e cognitiva**.

---

## 🧠 Obiettivi del progetto

- Rendere **accessibile e intuitiva** la navigazione per utenti anziani o ipovedenti.
- Fornire **spiegazioni semplici e comprensibili** di termini tecnici.
- Permettere all’utente di **caricare email sospette** in totale sicurezza.
- Offrire **tutorial video interattivi** personalizzati per ogni servizio email.
- Creare un’esperienza chiara, empatica e non intimidatoria per chi non ha familiarità con il digitale.

---

## ♿ Accessibilità e inclusione

HelpInRete è progettato per essere **usabile da chiunque**, anche da persone con:

- difficoltà visive (palette colori ad alto contrasto, font leggibili, icone grandi);
- difficoltà motorie (pulsanti ampi, navigazione semplificata);
- scarsa familiarità tecnologica (interfaccia guidata, linguaggio semplice e non tecnico).

Palette cromatica conforme alle linee guida **WCAG 2.1**.

---

## 📚 Struttura del progetto

HelpInRete/
│
├── public/ # File statici e risorse (icone, immagini)
├── src/
│ ├── components/ # Componenti React modulari
| ├── context/ # Logiche per l'accessibilità
| ├── data/ # Termini del vocabolario
| ├── guide/ # Guide per l'amministrazuine
| ├── hooks/ # Hooks
| ├── layout/ # Layout di base della webapp
│ ├── pages/ # Pagine principali (Home, Tutorial, Upload, Glossario, ecc.)
│ ├── styles/ # File CSS (incluso main.css)
| ├── ui/ # Interfaccia utente
│ └── utils/ # Funzioni di supporto generiche
│
├── package.json
└── README.md

---

## 🧩 Funzionalità principali

- 🔍 **Glossario interattivo:** ricerca e spiegazione dei principali termini digitali.
- 📤 **Upload sicuro:** caricamento di email `.msg` o `.eml` per l’analisi.
- 🎓 **Tutorial video:** guida passo-passo per scaricare email dai diversi provider.
- 🧠 **Analisi AI:** il file viene inviato all’intelligenza artificiale per il rilevamento di truffe o spam.
- 🧭 **Interfaccia accessibile:** supporto vocale, caratteri grandi e colori calmanti.

---
