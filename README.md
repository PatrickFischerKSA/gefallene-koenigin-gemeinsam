# Die gefallene Königin – gemeinsam bearbeiten

Eigenständiges Webspecial zu Anne Sterns **Die weiße Nacht**, aus dem freigegebenen Lovable-Projekt `89446467-33d6-4a3f-910b-140837be002a` übernommen. Alle Kapitel, Quellen, interaktiven Aufgaben und sechs Originalbilder sind enthalten.

**Website:** https://patrickfischerksa.github.io/gefallene-koenigin-gemeinsam/

## Online bearbeiten

Öffnen Sie den separat übermittelten Bearbeitungslink. Klicken Sie auf markierte Texte. Unter **Bilder, Video & Ton** lassen sich Archivbilder ersetzen und die vorgesehenen eigenen Fotos, Videos und Tonaufnahmen einfügen. Ergänzen Sie Bildnachweise, Datum, Beschreibung und Transkripte in den zugehörigen Texten. Änderungen werden automatisch online gespeichert; warten Sie auf **Online gespeichert** oder **Gemeinsame Version · aktuell**.

Alle sehen dieselbe gespeicherte Fassung. Unterschiedliche Textfelder werden automatisch zusammengeführt. Bei gleichzeitigen Änderungen am selben Feld erscheint eine Auswahl, bevor Inhalte überschrieben werden. Im Versionsverlauf können die letzten 50 vorherigen Fassungen wiederhergestellt werden. Quizantworten und die persönliche Randnotiz bleiben persönliche Eingaben und werden nicht als gemeinsame redaktionelle Inhalte gespeichert.

Der Ansichtslink ist öffentlich. Alle mit dem Bearbeitungslink können gemeinsame Inhalte verändern. Geben Sie diesen Link nur an Mitwirkende weiter. Bilder: JPG, PNG, WebP, GIF, AVIF bis 15 MB. Video und Ton bis 60 MB, u. a. MP4, WebM, MOV, MP3, WAV, OGG, M4A, FLAC.

## Entwicklung

Node.js ab 22.12:

```sh
npm ci
npm run dev
npm test
npm run build
```

`src/components/webspecial/` enthält die Kapitel; `src/content/weisse-nacht.ts` die Ausgangsdaten. `src/components/shared-editor.tsx` und `src/lib/` stellen die gemeinsame Bearbeitung bereit. `reference/` bewahrt die übernommenen Ausgangsdateien und die Bildherkunft; Originaltexte wurden inhaltlich nicht redigiert. Bei neuen redaktionellen Feldern stabile IDs verwenden. Den einmaligen Konverter `scripts/prepare-editor.mjs` nicht nach manuellen Kapiteländerungen ausführen: er überschreibt konvertierte Dateien aus `reference/`.

GitHub Actions prüft und veröffentlicht `main` auf GitHub Pages. Beiträge per Fork und Pull Request sind möglich; für direkten Repository-Schreibzugriff muss der Eigentümer den jeweiligen GitHub-Account einladen.

## Getrennte Infrastruktur

- Repository und Pages: `PatrickFischerKSA/gefallene-koenigin-gemeinsam`
- Eigene Worker-API: `https://gefallene-koenigin-gemeinsam.patrick-fischer.workers.dev`
- Ausschliesslich eigener R2-Bucket: `gefallene-koenigin-medien`
- Neuer unabhängiger Bearbeitungsschlüssel, als SHA-256-Hash in `EDIT_TOKEN_HASH`
- Keine Datenbank, Schlüssel, Mediendaten oder Speicherbindungen der Stasi- oder Lunapark-Projekte

R2 speichert `project/state.json`, unveränderliche `history/<revision>.json` sowie Medien unter zufälligen UUIDs. Schreibzugriffe verwenden eine atomare ETag-Bedingung und Revisionsprüfung, damit gleichzeitige Änderungen nicht still verloren gehen. Historische Fassungen bleiben im eigenen Bucket erhalten; die Oberfläche zeigt die letzten 50. Der Bucket selbst ist nicht öffentlich: die API liefert nur die gemeinsame Fassung und UUID-Medien öffentlich, Verlauf und Schreibzugriffe benötigen den Bearbeitungsschlüssel.

Cloudflare-Deployment (angemeldeter Eigentümer):

```sh
npx wrangler deploy
npx wrangler secret put EDIT_TOKEN_HASH
```

Der Secret-Wert ist der SHA-256-Hash eines zufälligen Schlüssels mit mindestens 32 Bytes. Der Rohschlüssel gehört ausschliesslich in den privat weitergegebenen `#edit=…`-Link, niemals ins Repository. Eine Rotation ersetzt den gültigen Bearbeitungslink. Die Website fragt alle zwei Sekunden den gemeinsamen Stand ab; bei einem Speicherausfall bleiben offene Eingaben erhalten, bis die Verbindung wieder besteht. Vor dem Schliessen auf erfolgreiche Speicherung warten.

R2 API: https://developers.cloudflare.com/r2/api/workers/workers-api-reference/ · Konsistenz: https://developers.cloudflare.com/r2/reference/consistency/

## Inhalte und Rechte

Die Quellen- und Bildnachweise des Originals bleiben auf der Webseite erhalten. Die Bilder enthalten unterschiedliche, dort ausgewiesene Lizenzen; dieses Repository erteilt keine pauschale neue Lizenz für Texte, Buchzitate oder Medien. Für eigene Uploads die nötigen Rechte und Quellenangaben ergänzen. Die GitHub-Version ist nach dem Export unabhängig vom Lovable-Original; spätere Änderungen werden nicht automatisch zwischen beiden synchronisiert.
