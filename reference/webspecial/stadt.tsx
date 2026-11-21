import { useState } from "react";
import { factOrFiction, historyTimeline, type Verdict } from "@/content/weisse-nacht";
import { ArchiveFigure, Eyebrow, Ref, Reveal, SectionTitle, imageUrls } from "./primitives";
import { imageCredits } from "@/content/weisse-nacht";
import { cn } from "@/lib/utils";

const verdictLabel: Record<Verdict, string> = {
  fakt: "Historisch belegt",
  fiktion: "Literarisch gestaltet",
  pruefen: "Prüfauftrag",
};
const verdictClass: Record<Verdict, string> = {
  fakt: "border-fact text-fact",
  fiktion: "border-fiction text-fiction",
  pruefen: "border-check text-check",
};

function FactCheck() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <div className="mt-20 border-t border-border pt-12">
      <Eyebrow>Quellenkritik / Fakt oder Fiktion?</Eyebrow>
      <h3 className="text-[2rem] leading-tight">Was ist belegt, was ist erzählt?</h3>
      <p className="mt-4 max-w-3xl">Entscheidet zuerst selbst. Dann deckt die Einordnung auf.</p>
      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {factOrFiction.map((f, i) => (
          <li key={f.claim} className="border border-border bg-card p-5">
            <p className="font-display text-xl leading-snug">{f.claim}</p>
            {open[i] ? (
              <div className="mt-4" aria-live="polite">
                <span className={cn("eyebrow inline-block border px-2 py-1 text-[0.6rem]", verdictClass[f.verdict])}>
                  {verdictLabel[f.verdict]}
                </span>
                <p className="mt-3 text-[0.95rem]">
                  {f.explain} <Ref id={f.source} />
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setOpen((o) => ({ ...o, [i]: true }))}
                className="mt-4 border border-border px-4 py-2 font-sans text-xs hover:border-foreground"
              >
                Einordnung aufdecken
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BeforeAfter() {
  const [split, setSplit] = useState(50);
  const a = imageCredits.platz1937;
  const b = imageCredits.platz2011;
  return (
    <div className="mt-20 grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <Eyebrow>Bildvergleich / 1937 und 2011</Eyebrow>
        <h3 className="text-[2rem] leading-tight">
          Derselbe Platz.
          <br />
          Eine verschwundene Stadt.
        </h3>
        <p className="mt-5">
          Am Blücherplatz lässt Anne Stern die erste Tote finden. Links ein Blick von 1937 über den Platz am Halleschen
          Tor: dichte Blockbebauung, Strassenbahn, eine Baugrube. Rechts der Blücherplatz 2011: weite Strassen,
          Nachkriegsbauten, viel leerer Raum.
        </p>
        <p className="mt-4">
          Dazwischen liegt, was der Roman zeigt: die Ruinenlandschaft von 1946. Was fehlt auf dem heutigen Bild – und
          wer hat hier einmal gewohnt?
        </p>
        <p className="meta mt-5 text-muted-foreground">
          Kamerastandpunkte und Ausschnitte unterscheiden sich; die Bilder sind nicht deckungsgleich. Prüfauftrag:
          ein Foto der Ruinen um 1946 im Bundesarchiv oder Landesarchiv Berlin suchen und hier ergänzen.
        </p>
      </div>
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden bg-night">
          <img src={imageUrls.platz2011} alt={b.alt} className="absolute inset-0 h-full w-full object-cover" />
          <img
            src={imageUrls.platz1937}
            alt={a.alt}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          />
          <div
            className="absolute inset-y-0 w-0.5 bg-background"
            style={{ left: `${split}%` }}
            aria-hidden
          >
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background font-sans text-sm text-foreground">
              ↔
            </span>
          </div>
          <span className="eyebrow absolute left-3 top-3 bg-night px-2 py-1 text-[0.6rem] text-night-foreground">1937</span>
          <span className="eyebrow absolute right-3 top-3 bg-night px-2 py-1 text-[0.6rem] text-night-foreground">2011</span>
        </div>
        <label className="meta mt-4 flex justify-between text-muted-foreground" htmlFor="split">
          <span>Anteil des Bildes von 1937</span>
          <span>{split} %</span>
        </label>
        <input
          id="split"
          type="range"
          min={0}
          max={100}
          value={split}
          onChange={(e) => setSplit(Number(e.target.value))}
          className="w-full accent-primary"
        />
        <div className="mt-2 flex gap-2">
          {[
            ["1937 vollständig", 100],
            ["Vergleichen", 50],
            ["2011 vollständig", 0],
          ].map(([l, v]) => (
            <button
              key={l}
              type="button"
              onClick={() => setSplit(v as number)}
              className="border border-border px-3 py-2 font-sans text-xs hover:border-foreground"
            >
              {l}
            </button>
          ))}
        </div>
        <figcaption className="meta mt-4 text-muted-foreground">
          <strong>1937:</strong> {a.caption} {a.credit} ·{" "}
          <a className="underline" href={a.page} target="_blank" rel="noreferrer">Bildquelle</a> ·{" "}
          <a className="underline" href={a.licenseUrl} target="_blank" rel="noreferrer">{a.license}</a>.{" "}
          <strong>2011:</strong> {b.caption} {b.credit} ·{" "}
          <a className="underline" href={b.page} target="_blank" rel="noreferrer">Bildquelle</a> ·{" "}
          <a className="underline" href={b.licenseUrl} target="_blank" rel="noreferrer">{b.license}</a>. Keine
          Retusche, keine KI-Rekonstruktion.
        </figcaption>
      </figure>
    </div>
  );
}

export function DieStadt() {
  return (
    <section id="stadt" className="section-pad">
      <Reveal>
        <Eyebrow>02 / Die Stadt im Hungerwinter</Eyebrow>
        <SectionTitle>
          Drei Millionen Menschen.
          <br />
          Kaum ein Dach.
        </SectionTitle>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p>
              1945 waren in Berlin rund 55 Prozent der Wohnungen zerstört oder beschädigt. Trotzdem kehrten Evakuierte
              zurück, Geflüchtete kamen hinzu. Wer ohne Erlaubnis zuzog, hatte weder Anspruch auf eine
              Wohnraumzuweisung noch auf die überlebenswichtige Lebensmittelkarte. <Ref id="mieterverein" />
            </p>
            <p className="mt-5">
              Die Volkszählung vom 29. Oktober 1946 zählte 3 187 470 Menschen, verteilt auf vier Sektoren.{" "}
              <Ref id="statistik1947" /> Dann kam der kälteste Winter des 20. Jahrhunderts: Frostwellen von November
              1946 bis März 1947, bis zu minus 25 Grad, kaum Kohle, kaum Nahrung. <Ref id="ndrHunger" />{" "}
              <Ref id="dlfHunger" />
            </p>
            <p className="mt-5">
              <strong>Im Roman</strong> ist diese Not mehr als Kulisse: Strom und Licht fehlen, die Polizei arbeitet
              mit kaum Ausrüstung, der Schwarzmarkt blüht. <Ref id="radioeins" /> Wohnen heisst hier: einen Raum
              finden, der warm genug ist, um die Nacht zu überleben.
            </p>
            <p className="research mt-8 border-l-2 border-primary pl-5 text-[0.95rem] text-muted-foreground">
              Bezug zur Gegenwartsstation: Wohnraum wurde 1946 von Ämtern zugewiesen, nicht auf einem Markt vergeben.
              Diesen Unterschied brauchen wir später für den Vergleich mit 2026.
            </p>
          </div>
          <ArchiveFigure k="plaza" imgClassName="aspect-[4/3]" />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <ArchiveFigure k="bett" imgClassName="aspect-[4/3]" />
          <div>
            <Eyebrow>Der reale Ort / Karte</Eyebrow>
            <h3 className="text-[1.8rem] leading-tight">Blücherplatz, Kreuzberg</h3>
            <p className="mt-3 text-[0.95rem]">
              Hier verortet der Roman den ersten Fund. <Ref id="krimicouch" /> Heute steht am Platz die
              Amerika-Gedenkbibliothek. Der Fundort selbst ist fiktiv.
            </p>
            <div className="mt-5 aspect-[4/3] overflow-hidden border border-border bg-muted">
              <iframe
                title="Karte: Blücherplatz in Berlin-Kreuzberg (OpenStreetMap)"
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.3860%2C52.4955%2C13.4000%2C52.5015&layer=mapnik&marker=52.4985%2C13.3935"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <p className="meta mt-3 text-muted-foreground">
              Heutige Strassenkarte. Kartendaten:{" "}
              <a className="underline" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
                © OpenStreetMap-Mitwirkende
              </a>{" "}
              (ODbL). Karte lädt von openstreetmap.org.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-[1.8rem]">Eine knappe Zeitachse</h3>
          <ol className="mt-8 grid gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {historyTimeline.map((t) => (
              <li key={t.date} className="relative border-t border-border pr-5 pt-6">
                <span
                  className={cn(
                    "absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full",
                    "fiction" in t && t.fiction ? "border border-primary bg-background" : "bg-primary",
                  )}
                  aria-hidden
                />
                <strong className="font-display text-xl font-normal">{t.date}</strong>
                <p className="mt-2 text-[0.9rem]">
                  {t.text} <Ref id={t.source} />
                </p>
              </li>
            ))}
          </ol>
          <p className="meta mt-4 text-muted-foreground">
            Gefüllter Punkt: historisches Datum · Leerer Punkt: Romanhandlung
          </p>
        </div>

        <BeforeAfter />
        <FactCheck />
      </Reveal>
    </section>
  );
}
