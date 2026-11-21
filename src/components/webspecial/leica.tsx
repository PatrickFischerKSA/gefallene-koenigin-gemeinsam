import { EditableText, SharedMedia } from "@/components/shared-editor";
import { ArchiveFigure, Eyebrow, MediaPlaceholder, QuotePlaceholder, Ref, Reveal, SectionTitle } from "./primitives";
export function DieLeica() {
  return <section id="leica" className="section-pad bg-paper text-paper-foreground">
      <Reveal>
        <div className="flex items-center justify-between gap-6">
          <div>
            <Eyebrow><EditableText id="src_components_webspecial_leica_tsx_357" value={"04 / Freier Aspekt \u2014 Fotografie als Ermittlung"} /></Eyebrow>
            <SectionTitle><EditableText id="src_components_webspecial_leica_tsx_440" value={"Sie sieht,"} /><br /><EditableText id="src_components_webspecial_leica_tsx_486" value={"was andere \xFCbersehen."} /></SectionTitle>
          </div>
          <span className="hidden font-display text-[10rem] leading-none text-paper-border md:block" aria-hidden><EditableText id="src_components_webspecial_leica_tsx_681" value={"L."} /></span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl">
            <p><EditableText id="src_components_webspecial_leica_tsx_847" value={"Lou Faber fotografiert nicht die Sieger und nicht den Wiederaufbau. Sie sucht in den Ruinen nach Bildern, die \xABmehr zeigen als Tr\xFCmmer\xBB. "} /><Ref id="lesering" /><EditableText id="src_components_webspecial_leica_tsx_1034" value={" Ausgerechnet das Bild einer Toten wird f\xFCr K\xF6nig zum wichtigsten Beweismittel \u2013 zu Beginn haben die Ermittler kaum etwas anderes in der Hand."} /><EditableText id="src_components_webspecial_leica_tsx_1190" value={" "} />
              <Ref id="vorablesen2" />
            </p>
            <p className="mt-5">
              <strong><EditableText id="src_components_webspecial_leica_tsx_1307" value={"Unsere These:"} /></strong><EditableText id="src_components_webspecial_leica_tsx_1329" value={" Die Kamera ist im Roman ein Gegenmittel gegen das Verdr\xE4ngen. Wer ein Bild macht, behauptet: Das hat es gegeben. In einer Stadt, die vergessen will, ist das eine Form von Widerstand \u2013 und eine Fortsetzung von Lous Vergangenheit mit anderen Mitteln."} /></p>
            <QuotePlaceholder hint="Passage, in der Lou über die Macht ihrer Leica nachdenkt" />
          </div>
          <ArchiveFigure k="holz" imgClassName="aspect-[4/3]" />
        </div>

        <div className="my-14 border-y border-paper-border py-9">
          <span className="eyebrow text-primary"><EditableText id="src_components_webspecial_leica_tsx_1934" value={"Rechercheakte / Vom Roman zur Geschichte"} /></span>
          <h3 className="my-4 text-[2rem] leading-tight"><EditableText id="src_components_webspecial_leica_tsx_2039" value={"Frauen hinter der Kamera, 1946"} /></h3>
          <p className="max-w-3xl"><EditableText id="src_components_webspecial_leica_tsx_2110" value={"Lou will ihre Bilder an \xABDie Frau von heute\xBB verkaufen. "} /><Ref id="vorablesen2" /><EditableText id="src_components_webspecial_leica_tsx_2203" value={" Pr\xFCfauftrag f\xFCr die Gruppe: Wann erschien diese Zeitschrift, wer gab sie heraus, und welche Fotografinnen arbeiteten im Nachkriegsberlin? Belegt jede Angabe mit einer Archiv- oder Museumsquelle."} /></p>
        </div>

        <h3 className="text-[1.8rem]"><EditableText id="src_components_webspecial_leica_tsx_2492" value={"Unser Kontaktabzug: Lous Weg heute"} /></h3>
        <p className="mt-3 max-w-2xl text-[0.95rem]"><EditableText id="src_components_webspecial_leica_tsx_2585" value={"Sechs eigene Fotos entlang der Orte, die der Roman nennt. Gleiche Tageszeit, gleiche Blickh\xF6he, nur Schwarzweiss \u2013 so wird der Vergleich mit den Archivbildern fair."} /></p>
        <div className="film-perf mt-6" aria-hidden />
        <div className="grid grid-cols-2 gap-1 bg-night p-1 md:grid-cols-3">
          {["Blücherplatz, Morgendämmerung", "Hallesches Tor, Blick nach Norden", "Ruinenreste oder Brandmauer in Kreuzberg", "Ort eines früheren Schwarzmarkts", "Polizeigebäude der Nachkriegszeit", "Ein Detail, das andere übersehen"].map((t, i) => <MediaPlaceholder key={t} kind="foto" title={`${String(i + 1).padStart(2, "0")} · ${t}`} hint="" aspect="aspect-[3/2]" className="[&_figcaption]:hidden" />)}
        </div>
        <div className="film-perf" aria-hidden />
        <p className="meta mt-3 text-muted-foreground"><EditableText id="src_components_webspecial_leica_tsx_3554" value={"Platzhalter f\xFCr eigene Fotos. Pro Bild: Ort, Datum, Fotograf:in, Alternativtext. Keine erkennbaren Personen ohne Einwilligung."} /></p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <MediaPlaceholder kind="video" title="Stadtspaziergang: Auf Lous Spuren durch Kreuzberg (2–3 Min.)" hint="Eigenes Video mit Untertiteln. Extern hosten (z. B. YouTube, nicht gelistet) und hier einbetten." />
          <div>
            <p className="eyebrow text-primary"><EditableText id="src_components_webspecial_leica_tsx_4102" value={"Weiterf\xFChrend"} /></p>
            <p className="mt-3 text-[0.95rem]"><EditableText id="src_components_webspecial_leica_tsx_4167" value={"Zum Hintergrund eignet sich die NDR-Dokumentation \xABHungerwinter \u2013 \xDCberleben nach dem Krieg\xBB mit Zeitzeugen. Vor dem Einbetten Rechte und Verf\xFCgbarkeit pr\xFCfen; bis dahin als Link."} /></p>
            <a className="mt-4 inline-block border border-current px-4 py-2 font-sans text-xs hover:bg-foreground hover:text-background" href="https://www.ndr.de/kultur/film/Hungerwinter-Ueberleben-nach-dem-Krieg,hungerwinter100.html" target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_leica_tsx_4729" value={"NDR: Hungerwinter \u2013 \xDCberleben nach dem Krieg \u2197"} /></a>
          </div>
        </div>
      </Reveal>
    </section>;
}
