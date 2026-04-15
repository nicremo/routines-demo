# Team Rules - Claude Code Review Checklist

Diese Datei wird von der Routine "Auto PR Review Deutsch" gelesen. Sie definiert, wogegen jeder neue Pull Request auf `main` geprüft wird.

## 1. TypeScript

- Strikte Typen. Kein `any`, kein `unknown` ohne Narrowing.
- `strictNullChecks` ist an. Optional Chaining statt impliziter Null-Pfade.
- Props-Interfaces expliziert. Keine inline-Objekt-Typen in Function-Signatures.

## 2. DSGVO

- Keine Drittanbieter-Cookies ohne Consent-Check.
- Kein `document.cookie`, `localStorage` oder `sessionStorage` für Tracking-Daten vor User-Opt-In.
- Kein externer Font-Load von Google Fonts ohne Self-Hosting-Fallback.
- Kein direktes Einbinden von Analytics-Scripts (GTM, GA, Hotjar, etc.) ohne Consent-Wrapper.

## 3. Accessibility

- Jedes interaktive Element hat ein semantisch korrektes Tag (`button`, `a`, `input`).
- ARIA-Labels bei Icon-only-Buttons.
- Kontrast-Ratio mindestens 4.5:1 für Fliesstext.
- Keyboard-Navigation funktioniert ohne Maus.
- Kein `onclick` auf `<div>`.

## 4. Performance

- Keine N+1 Queries.
- Bilder immer via `astro:assets` `<Image />` oder `next/image`, nie als raw `<img>`.
- Keine massiven Libraries im Client-Bundle (Moment.js, Lodash komplett, etc.).
- `client:load` sparsam, `client:visible` bevorzugen.

## 5. Deutsche Texte

- Umlaute IMMER korrekt: ö ä ü ß.
- NIEMALS oe, ae, ue, ss als Ersatz.
- Keine em dashes oder en dashes. Nur Punkt, Komma, Bindestrich, Doppelpunkt.
- Sie-Form oder Du-Form konsistent über die ganze App.

## Review-Verhalten

- Maximal 5 Inline-Kommentare pro PR.
- Nur kritische Punkte. Kein Lob-Fluff.
- Bei allen Checks bestanden: Approve mit einem Satz.
- Bei Verstössen: Request Changes mit Zusammenfassung oben + Inline-Kommentare.
- Sprache: Deutsch. Du-Form (Fabian).
