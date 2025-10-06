export type Term = { chiave: string; definizione: string; categoria: 'sicurezza' | 'amministrazione' | 'internet' }

export const TERMINI: Term[] = [
  { chiave: 'phishing', categoria: 'sicurezza', definizione: 'Truffa tramite email o messaggi che imitano enti affidabili per rubare dati.' },
  { chiave: 'backdoor', categoria: 'sicurezza', definizione: 'Accesso nascosto a un sistema che consente a malintenzionati di rientrare.' },
  { chiave: 'blackmail', categoria: 'sicurezza', definizione: 'Ricatto: richiesta di denaro o favori minacciando di divulgare informazioni.' },
  { chiave: 'scam', categoria: 'sicurezza', definizione: 'Truffa di vario tipo, spesso per ottenere denaro o dati personali.' },
  { chiave: 'SPID', categoria: 'amministrazione', definizione: 'Sistema Pubblico di Identità Digitale per accedere ai servizi online della PA.' },
  { chiave: 'PEC', categoria: 'amministrazione', definizione: 'Posta Elettronica Certificata, ha valore legale come una raccomandata.' },
  { chiave: 'OTP', categoria: 'internet', definizione: 'One-Time Password, codice usa e getta per verifiche di sicurezza.' },
]
