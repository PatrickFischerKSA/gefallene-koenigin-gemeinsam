import { EditableText, SharedMedia } from "@/components/shared-editor";
import { useState } from "react";
import { factOrFiction, historyTimeline, type Verdict } from "@/content/weisse-nacht";
import { ArchiveFigure, Eyebrow, Ref, Reveal, SectionTitle, imageUrls } from "./primitives";
import { imageCredits } from "@/content/weisse-nacht";
import { cn } from "@/lib/utils";
const verdictLabel: Record<Verdict, string> = {
  fakt: "Historisch belegt",
  fiktion: "Literarisch gestaltet",
  pruefen: "Prüfauftrag"
};
const verdictClass: Record<Verdict, string> = {
  fakt: "border-fact text-fact",
  fiktion: "border-fiction text-fiction",
  pruefen: "border-check text-check"
};
function FactCheck() {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return <div className="mt-20 border-t border-border pt-12">
      <Eyebrow><EditableText id="src_components_webspecial_stadt_tsx_782" value={"Quellenkritik / Fakt oder Fiktion?"} /></Eyebrow>
      <h3 className="text-[2rem] leading-tight"><EditableText id="src_components_webspecial_stadt_tsx_875" value={"Was ist belegt, was ist erz\xE4hlt?"} /></h3>
      <p className="mt-4 max-w-3xl"><EditableText id="src_components_webspecial_stadt_tsx_949" value={"Entscheidet zuerst selbst. Dann deckt die Einordnung auf."} /></p>
      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {factOrFiction.map((f, i) => <li key={f.claim} className="border border-border bg-card p-5">
            <p className="font-display text-xl leading-snug"><EditableText id="src_components_webspecial_stadt_tsx_1239" value={f.claim} /></p>
            <EditableText id="src_components_webspecial_stadt_tsx_1265" value={open[i] ? <div className="mt-4" aria-live="polite">
                <span className={cn("eyebrow inline-block border px-2 py-1 text-[0.6rem]", verdictClass[f.verdict])}>
                  {verdictLabel[f.verdict]}
                </span>
                <p className="mt-3 text-[0.95rem]">
                  {f.explain} <Ref id={f.source} />
                </p>
              </div> : <button type="button" onClick={() => setOpen(o => ({
          ...o,
          [i]: true
        }))} className="mt-4 border border-border px-4 py-2 font-sans text-xs hover:border-foreground">
                Einordnung aufdecken
              </button>} />
          </li>)}
      </ul>
    </div>;
}
function BeforeAfter() {
  const [split, setSplit] = useState(50);
  const a = imageCredits.platz1937;
  const b = imageCredits.platz2011;
  return <div className="mt-20 grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <Eyebrow><EditableText id="src_components_webspecial_stadt_tsx_2336" value={"Bildvergleich / 1937 und 2011"} /></Eyebrow>
        <h3 className="text-[2rem] leading-tight"><EditableText id="src_components_webspecial_stadt_tsx_2426" value={"Derselbe Platz."} /><br /><EditableText id="src_components_webspecial_stadt_tsx_2469" value={"Eine verschwundene Stadt."} /></h3>
        <p className="mt-5"><EditableText id="src_components_webspecial_stadt_tsx_2548" value={"Am Bl\xFCcherplatz l\xE4sst Anne Stern die erste Tote finden. Links ein Blick von 1937 \xFCber den Platz am Halleschen Tor: dichte Blockbebauung, Strassenbahn, eine Baugrube. Rechts der Bl\xFCcherplatz 2011: weite Strassen, Nachkriegsbauten, viel leerer Raum."} /></p>
        <p className="mt-4"><EditableText id="src_components_webspecial_stadt_tsx_2868" value={"Dazwischen liegt, was der Roman zeigt: die Ruinenlandschaft von 1946. Was fehlt auf dem heutigen Bild \u2013 und wer hat hier einmal gewohnt?"} /></p>
        <p className="meta mt-5 text-muted-foreground"><EditableText id="src_components_webspecial_stadt_tsx_3094" value={"Kamerastandpunkte und Ausschnitte unterscheiden sich; die Bilder sind nicht deckungsgleich. Pr\xFCfauftrag: ein Foto der Ruinen um 1946 im Bundesarchiv oder Landesarchiv Berlin suchen und hier erg\xE4nzen."} /></p>
      </div>
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden bg-night">
          <SharedMedia src={imageUrls.platz2011} alt={b.alt} className="absolute inset-0 h-full w-full object-cover" contentId="src_components_webspecial_stadt_tsx_3439" kind="img" />
          <SharedMedia src={imageUrls.platz1937} alt={a.alt} className="absolute inset-0 h-full w-full object-cover" style={{
          clipPath: `inset(0 ${100 - split}% 0 0)`
        }} contentId="src_components_webspecial_stadt_tsx_3551" kind="img" />
          <div className="absolute inset-y-0 w-0.5 bg-background" style={{
          left: `${split}%`
        }} aria-hidden>
            <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background font-sans text-sm text-foreground"><EditableText id="src_components_webspecial_stadt_tsx_4112" value={"\u2194"} /></span>
          </div>
          <span className="eyebrow absolute left-3 top-3 bg-night px-2 py-1 text-[0.6rem] text-night-foreground"><EditableText id="src_components_webspecial_stadt_tsx_4279" value={"1937"} /></span>
          <span className="eyebrow absolute right-3 top-3 bg-night px-2 py-1 text-[0.6rem] text-night-foreground"><EditableText id="src_components_webspecial_stadt_tsx_4405" value={"2011"} /></span>
        </div>
        <label className="meta mt-4 flex justify-between text-muted-foreground" htmlFor="split">
          <span><EditableText id="src_components_webspecial_stadt_tsx_4545" value={"Anteil des Bildes von 1937"} /></span>
          <span><EditableText id="src_components_webspecial_stadt_tsx_4595" value={split} /><EditableText id="src_components_webspecial_stadt_tsx_4602" value={" %"} /></span>
        </label>
        <input id="split" type="range" min={0} max={100} value={split} onChange={e => setSplit(Number(e.target.value))} className="w-full accent-primary" />
        <div className="mt-2 flex gap-2">
          {[["1937 vollständig", 100], ["Vergleichen", 50], ["2011 vollständig", 0]].map(([l, v]) => <button key={l} type="button" onClick={() => setSplit(v as number)} className="border border-border px-3 py-2 font-sans text-xs hover:border-foreground">
              <EditableText id="src_components_webspecial_stadt_tsx_5309" value={l} />
            </button>)}
        </div>
        <figcaption className="meta mt-4 text-muted-foreground">
          <strong><EditableText id="src_components_webspecial_stadt_tsx_5447" value={"1937:"} /></strong> <EditableText id="src_components_webspecial_stadt_tsx_5462" value={a.caption} /> <EditableText id="src_components_webspecial_stadt_tsx_5474" value={a.credit} /><EditableText id="src_components_webspecial_stadt_tsx_5484" value={" \xB7"} /><EditableText id="src_components_webspecial_stadt_tsx_5486" value={" "} />
          <a className="underline" href={a.page} target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_stadt_tsx_5574" value={"Bildquelle"} /></a><EditableText id="src_components_webspecial_stadt_tsx_5588" value={" \xB7"} /><EditableText id="src_components_webspecial_stadt_tsx_5590" value={" "} />
          <a className="underline" href={a.licenseUrl} target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_stadt_tsx_5684" value={a.license} /></a><EditableText id="src_components_webspecial_stadt_tsx_5699" value={"."} /><EditableText id="src_components_webspecial_stadt_tsx_5700" value={" "} />
          <strong><EditableText id="src_components_webspecial_stadt_tsx_5724" value={"2011:"} /></strong> <EditableText id="src_components_webspecial_stadt_tsx_5739" value={b.caption} /> <EditableText id="src_components_webspecial_stadt_tsx_5751" value={b.credit} /><EditableText id="src_components_webspecial_stadt_tsx_5761" value={" \xB7"} /><EditableText id="src_components_webspecial_stadt_tsx_5763" value={" "} />
          <a className="underline" href={b.page} target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_stadt_tsx_5851" value={"Bildquelle"} /></a><EditableText id="src_components_webspecial_stadt_tsx_5865" value={" \xB7"} /><EditableText id="src_components_webspecial_stadt_tsx_5867" value={" "} />
          <a className="underline" href={b.licenseUrl} target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_stadt_tsx_5961" value={b.license} /></a><EditableText id="src_components_webspecial_stadt_tsx_5976" value={". Keine Retusche, keine KI-Rekonstruktion."} /></figcaption>
      </figure>
    </div>;
}
export function DieStadt() {
  return <section id="stadt" className="section-pad">
      <Reveal>
        <Eyebrow><EditableText id="src_components_webspecial_stadt_tsx_6207" value={"02 / Die Stadt im Hungerwinter"} /></Eyebrow>
        <SectionTitle><EditableText id="src_components_webspecial_stadt_tsx_6270" value={"Drei Millionen Menschen."} /><br /><EditableText id="src_components_webspecial_stadt_tsx_6322" value={"Kaum ein Dach."} /></SectionTitle>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p><EditableText id="src_components_webspecial_stadt_tsx_6478" value={"1945 waren in Berlin rund 55 Prozent der Wohnungen zerst\xF6rt oder besch\xE4digt. Trotzdem kehrten Evakuierte zur\xFCck, Gefl\xFCchtete kamen hinzu. Wer ohne Erlaubnis zuzog, hatte weder Anspruch auf eine Wohnraumzuweisung noch auf die \xFCberlebenswichtige Lebensmittelkarte. "} /><Ref id="mieterverein" />
            </p>
            <p className="mt-5"><EditableText id="src_components_webspecial_stadt_tsx_6859" value={"Die Volksz\xE4hlung vom 29. Oktober 1946 z\xE4hlte 3 187 470 Menschen, verteilt auf vier Sektoren."} /><EditableText id="src_components_webspecial_stadt_tsx_6966" value={" "} />
              <Ref id="statistik1947" /><EditableText id="src_components_webspecial_stadt_tsx_7012" value={" Dann kam der k\xE4lteste Winter des 20. Jahrhunderts: Frostwellen von November 1946 bis M\xE4rz 1947, bis zu minus 25 Grad, kaum Kohle, kaum Nahrung. "} /><Ref id="ndrHunger" /><EditableText id="src_components_webspecial_stadt_tsx_7193" value={" "} />
              <Ref id="dlfHunger" />
            </p>
            <p className="mt-5">
              <strong><EditableText id="src_components_webspecial_stadt_tsx_7308" value={"Im Roman"} /></strong><EditableText id="src_components_webspecial_stadt_tsx_7325" value={" ist diese Not mehr als Kulisse: Strom und Licht fehlen, die Polizei arbeitet mit kaum Ausr\xFCstung, der Schwarzmarkt bl\xFCht. "} /><Ref id="radioeins" /><EditableText id="src_components_webspecial_stadt_tsx_7484" value={" Wohnen heisst hier: einen Raum finden, der warm genug ist, um die Nacht zu \xFCberleben."} /></p>
            <p className="research mt-8 border-l-2 border-primary pl-5 text-[0.95rem] text-muted-foreground"><EditableText id="src_components_webspecial_stadt_tsx_7711" value={"Bezug zur Gegenwartsstation: Wohnraum wurde 1946 von \xC4mtern zugewiesen, nicht auf einem Markt vergeben. Diesen Unterschied brauchen wir sp\xE4ter f\xFCr den Vergleich mit 2026."} /></p>
          </div>
          <ArchiveFigure k="plaza" imgClassName="aspect-[4/3]" />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <ArchiveFigure k="bett" imgClassName="aspect-[4/3]" />
          <div>
            <Eyebrow><EditableText id="src_components_webspecial_stadt_tsx_8188" value={"Der reale Ort / Karte"} /></Eyebrow>
            <h3 className="text-[1.8rem] leading-tight"><EditableText id="src_components_webspecial_stadt_tsx_8276" value={"Bl\xFCcherplatz, Kreuzberg"} /></h3>
            <p className="mt-3 text-[0.95rem]"><EditableText id="src_components_webspecial_stadt_tsx_8352" value={"Hier verortet der Roman den ersten Fund. "} /><Ref id="krimicouch" /><EditableText id="src_components_webspecial_stadt_tsx_8431" value={" Heute steht am Platz die Amerika-Gedenkbibliothek. Der Fundort selbst ist fiktiv."} /></p>
            <div className="mt-5 aspect-[4/3] overflow-hidden border border-border bg-muted">
              <iframe title="Karte: Blücherplatz in Berlin-Kreuzberg (OpenStreetMap)" src="https://www.openstreetmap.org/export/embed.html?bbox=13.3860%2C52.4955%2C13.4000%2C52.5015&layer=mapnik&marker=52.4985%2C13.3935" className="h-full w-full" loading="lazy" />
            </div>
            <p className="meta mt-3 text-muted-foreground"><EditableText id="src_components_webspecial_stadt_tsx_9060" value={"Heutige Strassenkarte. Kartendaten:"} /><EditableText id="src_components_webspecial_stadt_tsx_9110" value={" "} />
              <a className="underline" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer"><EditableText id="src_components_webspecial_stadt_tsx_9235" value={"\xA9 OpenStreetMap-Mitwirkende"} /></a><EditableText id="src_components_webspecial_stadt_tsx_9298" value={" "} /><EditableText id="src_components_webspecial_stadt_tsx_9303" value={"(ODbL). Karte l\xE4dt von openstreetmap.org."} /></p>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-[1.8rem]"><EditableText id="src_components_webspecial_stadt_tsx_9482" value={"Eine knappe Zeitachse"} /></h3>
          <ol className="mt-8 grid gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {historyTimeline.map(t => <li key={t.date} className="relative border-t border-border pr-5 pt-6">
                <span className={cn("absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full", "fiction" in t && t.fiction ? "border border-primary bg-background" : "bg-primary")} aria-hidden />
                <strong className="font-display text-xl font-normal"><EditableText id="src_components_webspecial_stadt_tsx_10089" value={t.date} /></strong>
                <p className="mt-2 text-[0.9rem]">
                  <EditableText id="src_components_webspecial_stadt_tsx_10176" value={t.text} /> <Ref id={t.source} />
                </p>
              </li>)}
          </ol>
          <p className="meta mt-4 text-muted-foreground"><EditableText id="src_components_webspecial_stadt_tsx_10337" value={"Gef\xFCllter Punkt: historisches Datum \xB7 Leerer Punkt: Romanhandlung"} /></p>
        </div>

        <BeforeAfter />
        <FactCheck />
      </Reveal>
    </section>;
}
