import { EditableText, SharedMedia } from "@/components/shared-editor";
import { imageCredits, sourceOrder, sources, type Source } from "@/content/weisse-nacht";
import { Eyebrow, SectionTitle } from "./primitives";
const todo = ["Alle Romanangaben mit Seitenzahlen der eigenen Ausgabe belegen und mindestens drei kurze Zitate einsetzen.", "Eigene Fotos, Videos und Tonaufnahmen vom Blücherplatz und aus Kreuzberg produzieren und die Platzhalter ersetzen.", "Prüfaufträge erledigen: Berliner Polizei 1945–47, Zeitschrift «Die Frau von heute», ein Ruinenfoto um 1946.", "Gegenwart: je eine Primärquelle von Mieterinitiative und Wohnungswirtschaft ergänzen; Zahlen kurz vor Abgabe erneut prüfen.", "Untertitel für alle Videos, Transkripte für alle Audios, Alternativtexte für eigene Bilder."];
export function Quellen() {
  return <section id="quellen" className="section-pad bg-muted">
      <Eyebrow><EditableText id="src_components_webspecial_quellen_tsx_849" value={"06 / Quellen und Werkstatt"} /></Eyebrow>
      <SectionTitle className="text-[clamp(2.2rem,4.5vw,3.4rem)]"><EditableText id="src_components_webspecial_quellen_tsx_952" value={"Was wir wissen."} /><br /><EditableText id="src_components_webspecial_quellen_tsx_991" value={"Was noch fehlt."} /></SectionTitle>
      <p className="max-w-3xl text-[0.95rem]"><EditableText id="src_components_webspecial_quellen_tsx_1084" value={"Romanangaben st\xFCtzen sich bisher auf Verlagstext und Rezensionen; sie sind als Paraphrasen formuliert. Interpretationen sind als \xABunsere Lesart\xBB gekennzeichnet. Das Buchcover und Abbildungen aus dem Roman werden nicht \xFCbernommen. Roman: Anne Stern, "} /><em><EditableText id="src_components_webspecial_quellen_tsx_1362" value={"Die wei\xDFe Nacht. Der erste Fall f\xFCr Lou & K\xF6nig"} /></em><EditableText id="src_components_webspecial_quellen_tsx_1414" value={", Piper, M\xFCnchen 2026, 400 Seiten, ISBN 978-3-492-07461-2."} /></p>

      <ol className="mt-10">
        {sourceOrder.map((id, i) => {
        const s: Source = sources[id];
        return <li key={id} id={`q${i + 1}`} className="scroll-mt-24 border-t border-border py-5 text-[0.95rem]">
              <strong><EditableText id="src_components_webspecial_quellen_tsx_1753" value={"["} /><EditableText id="src_components_webspecial_quellen_tsx_1754" value={i + 1} /><EditableText id="src_components_webspecial_quellen_tsx_1761" value={"] "} /><EditableText id="src_components_webspecial_quellen_tsx_1763" value={s.label} /></strong>
              <EditableText id="src_components_webspecial_quellen_tsx_1796" value={s.date ? `, ${s.date}` : ""} /><EditableText id="src_components_webspecial_quellen_tsx_1825" value={"."} /><EditableText id="src_components_webspecial_quellen_tsx_1826" value={" "} />
              <a href={s.url} target="_blank" rel="noreferrer" className="break-all font-sans text-xs underline"><EditableText id="src_components_webspecial_quellen_tsx_1945" value={"Zur Quelle \u2197"} /></a><EditableText id="src_components_webspecial_quellen_tsx_1993" value={" "} />
              <span className="meta text-muted-foreground"><EditableText id="src_components_webspecial_quellen_tsx_2058" value={"Abruf 13.11.2026."} /></span>
            </li>;
      })}
      </ol>

      <details className="mt-6 border-t border-border">
        <summary className="cursor-pointer py-4 font-sans text-sm"><EditableText id="src_components_webspecial_quellen_tsx_2262" value={"Bildnachweise"} /></summary>
        <ul className="space-y-2 pb-6 text-[0.9rem]">
          {Object.values(imageCredits).map(c => <li key={c.key}>
              <EditableText id="src_components_webspecial_quellen_tsx_2435" value={c.caption} /> <EditableText id="src_components_webspecial_quellen_tsx_2447" value={c.credit} /><EditableText id="src_components_webspecial_quellen_tsx_2457" value={" \xB7"} /><EditableText id="src_components_webspecial_quellen_tsx_2459" value={" "} />
              <a href={c.page} className="underline" target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_quellen_tsx_2551" value={"Wikimedia Commons"} /></a><EditableText id="src_components_webspecial_quellen_tsx_2604" value={" "} /><EditableText id="src_components_webspecial_quellen_tsx_2609" value={"\xB7"} /><EditableText id="src_components_webspecial_quellen_tsx_2625" value={" "} />
              <a href={c.licenseUrl} className="underline" target="_blank" rel="noreferrer">
                <EditableText id="src_components_webspecial_quellen_tsx_2740" value={c.license} />
              </a>
            </li>)}
          <li><EditableText id="src_components_webspecial_quellen_tsx_2817" value={"Karte: \xA9 OpenStreetMap-Mitwirkende, ODbL. Schneefall und Klangkulisse: im Browser erzeugt, keine Fremdmedien."} /></li>
        </ul>
      </details>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div className="border-t-2 border-foreground pt-5">
          <h3 className="text-2xl"><EditableText id="src_components_webspecial_quellen_tsx_3152" value={"Was noch fehlt"} /></h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem]">
            {todo.map(t => <li key={t}><EditableText id="src_components_webspecial_quellen_tsx_3301" value={t} /></li>)}
          </ul>
        </div>
        <div className="border-t-2 border-foreground pt-5">
          <h3 className="text-2xl"><EditableText id="src_components_webspecial_quellen_tsx_3452" value={"Transparenz: KI-Einsatz"} /></h3>
          <p className="mt-4 text-[0.95rem]"><EditableText id="src_components_webspecial_quellen_tsx_3526" value={"Grundstruktur, Gestaltung und Interaktionen dieser Seite wurden mit Lovable (KI) erstellt. Recherche-Links und Textentw\xFCrfe sind KI-gest\xFCtzt und m\xFCssen von der Projektgruppe gepr\xFCft und \xFCberarbeitet werden. Es wurden keine KI-generierten \xABhistorischen\xBB Bilder, Zitate oder Quellen verwendet. Alle Archivfotos stammen aus dem Bundesarchiv bzw. von Wikimedia Commons mit offener Lizenz."} /></p>
          <p className="meta mt-4 text-muted-foreground"><EditableText id="src_components_webspecial_quellen_tsx_4032" value={"Impressum: [Namen der Projektgruppe, Klasse, Schule, Lehrperson, Datum der Abgabe erg\xE4nzen]"} /></p>
        </div>
      </div>
    </section>;
}
export function Footer() {
  return <footer className="flex flex-col justify-between gap-6 bg-night px-[6%] py-10 font-sans text-[0.7rem] text-night-muted md:flex-row md:items-center">
      <p>
        <span className="font-semibold tracking-[0.1em] text-night-foreground"><EditableText id="src_components_webspecial_quellen_tsx_4483" value={"DIE GEFALLENE K\xD6NIGIN"} /></span><EditableText id="src_components_webspecial_quellen_tsx_4511" value={" \xB7 Ein literarisches Webspecial der Berlin-Thriller-Werkstatt"} /></p>
      <p><EditableText id="src_components_webspecial_quellen_tsx_4601" value={"Nach Anne Stern, Die wei\xDFe Nacht (Piper 2026) \xB7 Schulprojekt, nicht kommerziell"} /></p>
    </footer>;
}
