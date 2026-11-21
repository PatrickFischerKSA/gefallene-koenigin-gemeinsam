import { imageCredits, sourceOrder, sources, type Source } from "@/content/weisse-nacht";
import { Eyebrow, SectionTitle } from "./primitives";

const todo = [
  "Alle Romanangaben mit Seitenzahlen der eigenen Ausgabe belegen und mindestens drei kurze Zitate einsetzen.",
  "Eigene Fotos, Videos und Tonaufnahmen vom Blücherplatz und aus Kreuzberg produzieren und die Platzhalter ersetzen.",
  "Prüfaufträge erledigen: Berliner Polizei 1945–47, Zeitschrift «Die Frau von heute», ein Ruinenfoto um 1946.",
  "Gegenwart: je eine Primärquelle von Mieterinitiative und Wohnungswirtschaft ergänzen; Zahlen kurz vor Abgabe erneut prüfen.",
  "Untertitel für alle Videos, Transkripte für alle Audios, Alternativtexte für eigene Bilder.",
];

export function Quellen() {
  return (
    <section id="quellen" className="section-pad bg-muted">
      <Eyebrow>06 / Quellen und Werkstatt</Eyebrow>
      <SectionTitle className="text-[clamp(2.2rem,4.5vw,3.4rem)]">
        Was wir wissen.
        <br />
        Was noch fehlt.
      </SectionTitle>
      <p className="max-w-3xl text-[0.95rem]">
        Romanangaben stützen sich bisher auf Verlagstext und Rezensionen; sie sind als Paraphrasen formuliert.
        Interpretationen sind als «unsere Lesart» gekennzeichnet. Das Buchcover und Abbildungen aus dem Roman werden
        nicht übernommen. Roman: Anne Stern, <em>Die weiße Nacht. Der erste Fall für Lou & König</em>, Piper, München
        2026, 400 Seiten, ISBN 978-3-492-07461-2.
      </p>

      <ol className="mt-10">
        {sourceOrder.map((id, i) => {
          const s: Source = sources[id];
          return (
            <li key={id} id={`q${i + 1}`} className="scroll-mt-24 border-t border-border py-5 text-[0.95rem]">
              <strong>[{i + 1}] {s.label}</strong>
              {s.date ? `, ${s.date}` : ""}.{" "}
              <a href={s.url} target="_blank" rel="noreferrer" className="break-all font-sans text-xs underline">
                Zur Quelle ↗
              </a>{" "}
              <span className="meta text-muted-foreground">Abruf 13.11.2026.</span>
            </li>
          );
        })}
      </ol>

      <details className="mt-6 border-t border-border">
        <summary className="cursor-pointer py-4 font-sans text-sm">Bildnachweise</summary>
        <ul className="space-y-2 pb-6 text-[0.9rem]">
          {Object.values(imageCredits).map((c) => (
            <li key={c.key}>
              {c.caption} {c.credit} ·{" "}
              <a href={c.page} className="underline" target="_blank" rel="noreferrer">
                Wikimedia Commons
              </a>{" "}
              ·{" "}
              <a href={c.licenseUrl} className="underline" target="_blank" rel="noreferrer">
                {c.license}
              </a>
            </li>
          ))}
          <li>
            Karte: © OpenStreetMap-Mitwirkende, ODbL. Schneefall und Klangkulisse: im Browser erzeugt, keine
            Fremdmedien.
          </li>
        </ul>
      </details>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div className="border-t-2 border-foreground pt-5">
          <h3 className="text-2xl">Was noch fehlt</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem]">
            {todo.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-foreground pt-5">
          <h3 className="text-2xl">Transparenz: KI-Einsatz</h3>
          <p className="mt-4 text-[0.95rem]">
            Grundstruktur, Gestaltung und Interaktionen dieser Seite wurden mit Lovable (KI) erstellt. Recherche-Links
            und Textentwürfe sind KI-gestützt und müssen von der Projektgruppe geprüft und überarbeitet werden. Es
            wurden keine KI-generierten «historischen» Bilder, Zitate oder Quellen verwendet. Alle Archivfotos stammen
            aus dem Bundesarchiv bzw. von Wikimedia Commons mit offener Lizenz.
          </p>
          <p className="meta mt-4 text-muted-foreground">
            Impressum: [Namen der Projektgruppe, Klasse, Schule, Lehrperson, Datum der Abgabe ergänzen]
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-6 bg-night px-[6%] py-10 font-sans text-[0.7rem] text-night-muted md:flex-row md:items-center">
      <p>
        <span className="font-semibold tracking-[0.1em] text-night-foreground">DIE GEFALLENE KÖNIGIN</span> · Ein
        literarisches Webspecial der Berlin-Thriller-Werkstatt
      </p>
      <p>Nach Anne Stern, Die weiße Nacht (Piper 2026) · Schulprojekt, nicht kommerziell</p>
    </footer>
  );
}
