import { EditableText, SharedMedia } from "@/components/shared-editor";
import { useState } from "react";
import { argumentCheck, positions, presentTimeline, type ClaimKind } from "@/content/weisse-nacht";
import { ArchiveFigure, AudioPlaceholder, Eyebrow, MediaPlaceholder, Ref, Reveal, SectionTitle } from "./primitives";
import { cn } from "@/lib/utils";
const kindLabel: Record<ClaimKind, string> = {
  fakt: "Fakt",
  schaetzung: "Schätzung / Prognose",
  position: "Meinung / Position"
};
function ArgumentCheck() {
  const [answers, setAnswers] = useState<Record<number, ClaimKind>>({});
  return <div className="mt-16 border border-border bg-card p-6 md:p-10">
      <Eyebrow><EditableText id="src_components_webspecial_heute_tsx_621" value={"Interaktion / Argument-Check"} /></Eyebrow>
      <h3 className="text-[2rem] leading-tight"><EditableText id="src_components_webspecial_heute_tsx_708" value={"Fakt, Sch\xE4tzung oder Meinung?"} /></h3>
      <p className="mt-4 max-w-3xl"><EditableText id="src_components_webspecial_heute_tsx_779" value={"In der Wohnungsdebatte vermischen sich Zahlen, Prognosen und Bewertungen. Ordnet jede Aussage ein. Die R\xFCckmeldung zeigt, woher sie stammt."} /></p>
      <ul className="mt-8 space-y-4">
        {argumentCheck.map((a, i) => {
        const picked = answers[i];
        return <li key={a.text} className="border-t border-border pt-4">
              <p className="font-display text-xl leading-snug"><EditableText id="src_components_webspecial_heute_tsx_1213" value={"\xAB"} /><EditableText id="src_components_webspecial_heute_tsx_1214" value={a.text} /><EditableText id="src_components_webspecial_heute_tsx_1222" value={"\xBB"} /></p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Einordnung wählen">
                {(Object.keys(kindLabel) as ClaimKind[]).map(k => <button key={k} type="button" aria-pressed={picked === k} onClick={() => setAnswers(s => ({
              ...s,
              [i]: k
            }))} className={cn("border px-3 py-2 font-sans text-xs transition", picked === k ? k === a.kind ? "border-fact bg-fact text-primary-foreground" : "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground")}>
                    <EditableText id="src_components_webspecial_heute_tsx_2074" value={kindLabel[k]} />
                  </button>)}
              </div>
              <EditableText id="src_components_webspecial_heute_tsx_2172" value={picked && <p className="mt-3 text-[0.95rem]" aria-live="polite">
                  <strong>{picked === a.kind ? "Passt." : `Eher: ${kindLabel[a.kind]}.`}</strong> {a.note}{" "}
                  <Ref id={a.source} />
                </p>} />
            </li>;
      })}
      </ul>
    </div>;
}
function Reflection() {
  const [note, setNote] = useState("");
  const download = () => {
    const blob = new Blob([`Randnotiz zum Webspecial «Die gefallene Königin»\n\nWelche Aussage würde ich zuerst unabhängig prüfen?\n\n${note}\n`], {
      type: "text/plain;charset=utf-8"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "randnotiz-weisse-nacht.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return <div className="mt-16 bg-secondary p-6 md:p-9">
      <label htmlFor="randnotiz" className="block">
        <span className="eyebrow text-primary"><EditableText id="src_components_webspecial_heute_tsx_3161" value={"Eure Randnotiz"} /></span>
        <strong className="mb-6 mt-4 block font-display text-[1.8rem] font-normal leading-snug"><EditableText id="src_components_webspecial_heute_tsx_3279" value={"Welche Aussage aus dieser Station w\xFCrdet ihr zuerst unabh\xE4ngig pr\xFCfen \u2013 und wie?"} /></strong>
      </label>
      <textarea id="randnotiz" rows={4} value={note} onChange={e => setNote(e.target.value)} className="w-full resize-y border border-input bg-background p-4" />
      <p className="meta mt-2 text-muted-foreground"><EditableText id="src_components_webspecial_heute_tsx_3667" value={"Nur in dieser ge\xF6ffneten Seite. Keine Speicherung, keine \xDCbertragung."} /></p>
      <button type="button" onClick={download} disabled={!note.trim()} className="mt-4 border border-foreground px-4 py-2 font-sans text-xs hover:bg-foreground hover:text-background disabled:opacity-40"><EditableText id="src_components_webspecial_heute_tsx_3983" value={"Randnotiz als Text herunterladen \u2193"} /></button>
    </div>;
}
export function UndHeute() {
  return <section id="heute" className="section-pad">
      <Reveal>
        <div className="flex items-start justify-between gap-4">
          <Eyebrow><EditableText id="src_components_webspecial_heute_tsx_4250" value={"05 / Und heute? \u2014 Pflichtstation Gegenwart"} /></Eyebrow>
          <span className="stamp"><EditableText id="src_components_webspecial_heute_tsx_4337" value={"Recherche \xB7 Stand 13.11.2026"} /></span>
        </div>
        <SectionTitle><EditableText id="src_components_webspecial_heute_tsx_4410" value={"Wem geh\xF6rt"} /><br /><EditableText id="src_components_webspecial_heute_tsx_4448" value={"ein Dach \xFCber dem Kopf?"} /></SectionTitle>
        <p className="max-w-3xl font-display text-[1.5rem] leading-[1.45]"><EditableText id="src_components_webspecial_heute_tsx_4582" value={"1946 fehlten Wohnungen, weil sie zerbombt waren. 2026 fehlen sie, obwohl die Stadt steht. Berlin streitet dar\xFCber, ob grosse Wohnungskonzerne vergesellschaftet werden sollen."} /></p>
        <p className="mt-6 max-w-3xl"><EditableText id="src_components_webspecial_heute_tsx_4829" value={"85 Prozent der Berlinerinnen und Berliner wohnen zur Miete. "} /><Ref id="sz" /><EditableText id="src_components_webspecial_heute_tsx_4915" value={" Das Thema pr\xE4gte den Wahlkampf zur Abgeordnetenhauswahl am 20. September 2026 so stark, dass Initiativen von einer \xABMietenwahl\xBB sprachen. Die Linke gewann mit dem Versprechen der Vergesellschaftung. "} /><Ref id="zeit" /><EditableText id="src_components_webspecial_heute_tsx_5152" value={" Seither verhandeln Linke, Gr\xFCne und SPD \xFCber die Umsetzung. "} /><Ref id="tagesspiegel" />
        </p>

        <div className="my-14 border-y border-border py-9">
          <span className="eyebrow text-primary"><EditableText id="src_components_webspecial_heute_tsx_5372" value={"Begriff / Doppelte Verdr\xE4ngung"} /></span>
          <div className="mt-5 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl"><EditableText id="src_components_webspecial_heute_tsx_5526" value={"1946: verdr\xE4ngen"} /></h3>
              <p className="mt-2 text-[0.95rem]"><EditableText id="src_components_webspecial_heute_tsx_5597" value={"Psychologisch: Erinnerungen und Schuld werden aus dem Bewusstsein geschoben. Im Roman ist \xABNicht-Erinnern\xBB eine \xDCberlebensstrategie. "} /><Ref id="lesering" />
              </p>
            </div>
            <div>
              <h3 className="text-2xl"><EditableText id="src_components_webspecial_heute_tsx_5880" value={"2026: verdr\xE4ngt werden"} /></h3>
              <p className="mt-2 text-[0.95rem]"><EditableText id="src_components_webspecial_heute_tsx_5957" value={"Sozial: Menschen m\xFCssen ihr Quartier verlassen, weil Mieten steigen. Eine Familie verschickte in einem halben Jahr rund 70 Bewerbungen und konnte vier Wohnungen besichtigen. "} /><Ref id="sz" />
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-9 md:grid-cols-3">
          {[{
          n: "H / 01",
          t: "Die Strasse",
          p: "Am 5. September 2026 demonstrierten laut Veranstaltern gut 11 000 Menschen am Roten Rathaus unter dem Motto «Her mit den Wohnungen, runter mit der Miete».",
          r: "sz"
        }, {
          n: "H / 02",
          t: "Der Kompromiss",
          p: "Das Sondierungspapier vom 17. Oktober: Konzerne mit über 10 000 Berliner Wohnungen sollen nach Art. 15 GG vergesellschaftet werden. Die Initiative DWE hatte 3000 vorgeschlagen.",
          r: "tagesspiegel"
        }, {
          n: "H / 03",
          t: "Die Ernüchterung",
          p: "Linken-Chefin Ines Schwerdtner sagte am 8. November, sie könne keiner einzelnen Mieterin sinkende Mieten versprechen; in den Beständen sollen sie jährlich um 2 Prozent steigen.",
          r: "tazKommentar"
        }].map(c => <article key={c.n} className="border-t border-foreground pt-5">
              <span className="font-sans text-xs text-primary"><EditableText id="src_components_webspecial_heute_tsx_7410" value={c.n} /></span>
              <h3 className="my-4 text-[1.6rem]"><EditableText id="src_components_webspecial_heute_tsx_7472" value={c.t} /></h3>
              <p className="text-base">
                <EditableText id="src_components_webspecial_heute_tsx_7539" value={c.p} /> <Ref id={c.r} />
              </p>
            </article>)}
        </div>

        <div className="mt-20">
          <h3 className="text-[1.8rem]"><EditableText id="src_components_webspecial_heute_tsx_7706" value={"Quellen-Timeline"} /></h3>
          <ol className="mt-6 border-l border-border">
            {presentTimeline.map(t => <li key={t.date + t.text} className="relative pb-7 pl-8">
                <span className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-primary" aria-hidden />
                <strong className="font-display text-xl font-normal"><EditableText id="src_components_webspecial_heute_tsx_8082" value={t.date} /></strong>
                <p className="mt-1 max-w-3xl text-[0.95rem]">
                  <EditableText id="src_components_webspecial_heute_tsx_8180" value={t.text} /> <Ref id={t.source} />
                </p>
              </li>)}
          </ol>
        </div>

        <div className="mt-16">
          <h3 className="text-[1.8rem]"><EditableText id="src_components_webspecial_heute_tsx_8372" value={"Positionen \u2013 getrennt von den Belegen"} /></h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {positions.map(p => <article key={p.stance} className="border border-border bg-card p-5">
                <span className="eyebrow text-[0.62rem] text-primary"><EditableText id="src_components_webspecial_heute_tsx_8679" value={p.stance} /></span>
                <p className="mt-2 font-sans text-xs text-muted-foreground"><EditableText id="src_components_webspecial_heute_tsx_8773" value={p.who} /></p>
                <p className="mt-3 text-[0.95rem]">
                  <EditableText id="src_components_webspecial_heute_tsx_8855" value={p.claim} /> <Ref id={p.source} />
                </p>
              </article>)}
          </div>
          <p className="meta mt-4 text-muted-foreground"><EditableText id="src_components_webspecial_heute_tsx_9023" value={"Erg\xE4nzen: mindestens eine Stimme aus einer Mieterinitiative und eine aus der Wohnungswirtschaft, je mit Datum. Pressemitteilungen von Vonovia und Berliner Mieterverein eignen sich als Prim\xE4rquellen."} /></p>
        </div>

        <ArgumentCheck />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow><EditableText id="src_components_webspecial_heute_tsx_9401" value={"Vergleich / Wo tr\xE4gt er \u2013 und wo nicht?"} /></Eyebrow>
            <h3 className="text-[2rem] leading-tight"><EditableText id="src_components_webspecial_heute_tsx_9505" value={"Gleiche Stadt, andere Not"} /></h3>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="eyebrow text-[0.62rem] text-fact"><EditableText id="src_components_webspecial_heute_tsx_9665" value={"Tr\xE4gt"} /></dt>
                <dd className="mt-1"><EditableText id="src_components_webspecial_heute_tsx_9713" value={"In beiden Zeiten entscheidet Wohnraum dar\xFCber, wer in Berlin bleiben kann. 1946 regelten Zuzugssperre und Zuweisung, wer Anspruch hatte. "} /><Ref id="mieterverein" /><EditableText id="src_components_webspecial_heute_tsx_9912" value={" 2026 regeln Preis und Bewerbungsverfahren den Zugang. "} /><Ref id="sz" />
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem] text-fact"><EditableText id="src_components_webspecial_heute_tsx_10129" value={"Tr\xE4gt"} /></dt>
                <dd className="mt-1"><EditableText id="src_components_webspecial_heute_tsx_10177" value={"In beiden Zeiten ist umstritten, was eine Gesellschaft sichtbar macht: 1946 die T\xE4ter von gestern, 2026 die Frage, wem die H\xE4user geh\xF6ren."} /></dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem] text-fiction"><EditableText id="src_components_webspecial_heute_tsx_10484" value={"Tr\xE4gt nicht"} /></dt>
                <dd className="mt-1"><EditableText id="src_components_webspecial_heute_tsx_10538" value={"1946 ging es ums nackte \xDCberleben: Menschen erfroren in Ruinen und Notheimen. Heutige Wohnungsnot ist ernst, aber nicht vergleichbar mit Hungerwinter, Besatzung und Kriegszerst\xF6rung."} /></dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.62rem] text-fiction"><EditableText id="src_components_webspecial_heute_tsx_10889" value={"Tr\xE4gt nicht"} /></dt>
                <dd className="mt-1"><EditableText id="src_components_webspecial_heute_tsx_10943" value={"Der Roman verhandelt NS-Verbrechen und Mord. Wer heutige Vermieter oder Mieterinnen in diese N\xE4he r\xFCckt, verharmlost Geschichte und verzerrt eine demokratische Debatte."} /></dd>
              </div>
            </dl>
          </div>
          <ArchiveFigure k="agb" imgClassName="aspect-[4/3]" />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <MediaPlaceholder kind="video" title="Unser Kommentar: Was der Roman über die Wohnungsdebatte verrät – und was nicht (90 Sek.)" hint="Selbst gesprochen vor einem Wohnhaus in Kreuzberg. Mit Untertiteln. Als Meinung kennzeichnen." />
          <AudioPlaceholder title="Kurzinterview: Wie wohnst du in Berlin?" hint="Eine Person aus eurem Umfeld, mit schriftlicher Einwilligung. 1–2 Min., ohne Nachnamen." transcript="Transkript oder Zusammenfassung des Interviews einfügen." />
        </div>

        <Reflection />

        <p className="mt-20 max-w-4xl font-display text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.25] tracking-[-0.03em]">
          <strong className="font-normal"><EditableText id="src_components_webspecial_heute_tsx_12147" value={"Unsere Schlussfrage:"} /></strong><EditableText id="src_components_webspecial_heute_tsx_12176" value={" Was macht eine Stadt mit dem, was sie nicht sehen will \u2013 mit ihrer Schuld von gestern und mit den Menschen, die heute keinen Platz mehr finden?"} /></p>
        <p className="mt-10 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-snug"><EditableText id="src_components_webspecial_heute_tsx_12431" value={"Der Schnee schmilzt."} /><br />
          <em className="text-primary"><EditableText id="src_components_webspecial_heute_tsx_12519" value={"Die Frage bleibt liegen."} /></em>
        </p>
      </Reveal>
    </section>;
}
