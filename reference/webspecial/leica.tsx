import { ArchiveFigure, Eyebrow, MediaPlaceholder, QuotePlaceholder, Ref, Reveal, SectionTitle } from "./primitives";

export function DieLeica() {
  return (
    <section id="leica" className="section-pad bg-paper text-paper-foreground">
      <Reveal>
        <div className="flex items-center justify-between gap-6">
          <div>
            <Eyebrow>04 / Freier Aspekt — Fotografie als Ermittlung</Eyebrow>
            <SectionTitle>
              Sie sieht,
              <br />
              was andere übersehen.
            </SectionTitle>
          </div>
          <span className="hidden font-display text-[10rem] leading-none text-paper-border md:block" aria-hidden>
            L.
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-w-2xl">
            <p>
              Lou Faber fotografiert nicht die Sieger und nicht den Wiederaufbau. Sie sucht in den Ruinen nach Bildern,
              die «mehr zeigen als Trümmer». <Ref id="lesering" /> Ausgerechnet das Bild einer Toten wird für König
              zum wichtigsten Beweismittel – zu Beginn haben die Ermittler kaum etwas anderes in der Hand.{" "}
              <Ref id="vorablesen2" />
            </p>
            <p className="mt-5">
              <strong>Unsere These:</strong> Die Kamera ist im Roman ein Gegenmittel gegen das Verdrängen. Wer ein Bild
              macht, behauptet: Das hat es gegeben. In einer Stadt, die vergessen will, ist das eine Form von
              Widerstand – und eine Fortsetzung von Lous Vergangenheit mit anderen Mitteln.
            </p>
            <QuotePlaceholder hint="Passage, in der Lou über die Macht ihrer Leica nachdenkt" />
          </div>
          <ArchiveFigure k="holz" imgClassName="aspect-[4/3]" />
        </div>

        <div className="my-14 border-y border-paper-border py-9">
          <span className="eyebrow text-primary">Rechercheakte / Vom Roman zur Geschichte</span>
          <h3 className="my-4 text-[2rem] leading-tight">Frauen hinter der Kamera, 1946</h3>
          <p className="max-w-3xl">
            Lou will ihre Bilder an «Die Frau von heute» verkaufen. <Ref id="vorablesen2" /> Prüfauftrag für die
            Gruppe: Wann erschien diese Zeitschrift, wer gab sie heraus, und welche Fotografinnen arbeiteten im
            Nachkriegsberlin? Belegt jede Angabe mit einer Archiv- oder Museumsquelle.
          </p>
        </div>

        <h3 className="text-[1.8rem]">Unser Kontaktabzug: Lous Weg heute</h3>
        <p className="mt-3 max-w-2xl text-[0.95rem]">
          Sechs eigene Fotos entlang der Orte, die der Roman nennt. Gleiche Tageszeit, gleiche Blickhöhe, nur
          Schwarzweiss – so wird der Vergleich mit den Archivbildern fair.
        </p>
        <div className="film-perf mt-6" aria-hidden />
        <div className="grid grid-cols-2 gap-1 bg-night p-1 md:grid-cols-3">
          {[
            "Blücherplatz, Morgendämmerung",
            "Hallesches Tor, Blick nach Norden",
            "Ruinenreste oder Brandmauer in Kreuzberg",
            "Ort eines früheren Schwarzmarkts",
            "Polizeigebäude der Nachkriegszeit",
            "Ein Detail, das andere übersehen",
          ].map((t, i) => (
            <MediaPlaceholder key={t} kind="foto" title={`${String(i + 1).padStart(2, "0")} · ${t}`} hint="" aspect="aspect-[3/2]" className="[&_figcaption]:hidden" />
          ))}
        </div>
        <div className="film-perf" aria-hidden />
        <p className="meta mt-3 text-muted-foreground">
          Platzhalter für eigene Fotos. Pro Bild: Ort, Datum, Fotograf:in, Alternativtext. Keine erkennbaren Personen
          ohne Einwilligung.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <MediaPlaceholder
            kind="video"
            title="Stadtspaziergang: Auf Lous Spuren durch Kreuzberg (2–3 Min.)"
            hint="Eigenes Video mit Untertiteln. Extern hosten (z. B. YouTube, nicht gelistet) und hier einbetten."
          />
          <div>
            <p className="eyebrow text-primary">Weiterführend</p>
            <p className="mt-3 text-[0.95rem]">
              Zum Hintergrund eignet sich die NDR-Dokumentation «Hungerwinter – Überleben nach dem Krieg» mit
              Zeitzeugen. Vor dem Einbetten Rechte und Verfügbarkeit prüfen; bis dahin als Link.
            </p>
            <a
              className="mt-4 inline-block border border-current px-4 py-2 font-sans text-xs hover:bg-foreground hover:text-background"
              href="https://www.ndr.de/kultur/film/Hungerwinter-Ueberleben-nach-dem-Krieg,hungerwinter100.html"
              target="_blank"
              rel="noreferrer"
            >
              NDR: Hungerwinter – Überleben nach dem Krieg ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
