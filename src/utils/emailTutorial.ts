import type { Provider } from "../components/email/ProviderTutorial";

export function getTutorial(p: Provider): string[] {
  switch (p) {
    case "Gmail":
      return [
        "Apri la conversazione email.",
        "Clicca sui tre puntini Altro azioni.",
        'Scegli "Scarica messaggio" o "Mostra originale" e poi scarica .eml.',
        "Salva il file sul computer.",
      ];
    case "Outlook":
      return [
        "Apri il messaggio.",
        "Seleziona Azioni o Altro.",
        'Scegli "Scarica messaggio" o "Salva come" in formato .eml o .msg.',
        "Salva il file sul computer.",
      ];
    case "Tiscali":
      return [
        "Apri la webmail Tiscali e il messaggio.",
        "Cerca l'opzione per scaricare il messaggio o visualizzare l'originale.",
        "Esporta/salva il file come .eml.",
        "Salva il file sul computer.",
      ];
    case "Yahoo":
      return [
        "Apri il messaggio in Yahoo Mail.",
        "Apri il menu Altro.",
        'Se disponibile, scegli "Scarica messaggio" o inoltra come allegato per ottenere .eml.',
        "Salva il file sul computer.",
      ];
    default:
      return [];
  }
}
