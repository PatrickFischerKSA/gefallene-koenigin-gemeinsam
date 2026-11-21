import { EditableText, SharedMedia } from "@/components/shared-editor";
import { useState } from "react";
import { Ref, Eyebrow, SectionTitle, AudioPlaceholder, Reveal } from "./primitives";
import { SoundToggle } from "./chrome";
import { cn } from "@/lib/utils";
export function Opening() {
  return <section id="inhalt" className="section-pad">
      <Reveal>
        <Eyebrow><EditableText id="src_components_webspecial_fall_tsx_315" value={"Der Schnee liegt. Die Frage bleibt."} /></Eyebrow>
        <SectionTitle><EditableText id="src_components_webspecial_fall_tsx_383" value={"Wer verdr\xE4ngt wird \u2013"} /><br /><EditableText id="src_components_webspecial_fall_tsx_420" value={"und was verdr\xE4ngt wird."} /></SectionTitle>
        <div className="max-w-3xl">
          <p className="font-display text-[1.6rem] leading-[1.45] tracking-[-0.02em]"><EditableText id="src_components_webspecial_fall_tsx_601" value={"Ein Bild h\xE4lt fest, was andere lieber vergessen w\xFCrden. In einer Stadt aus Tr\xFCmmern wird das zur gef\xE4hrlichen F\xE4higkeit."} /></p>
          <p className="mt-6"><EditableText id="src_components_webspecial_fall_tsx_792" value={"Anne Sterns "} /><em><EditableText id="src_components_webspecial_fall_tsx_821" value={"Die wei\xDFe Nacht"} /></em><EditableText id="src_components_webspecial_fall_tsx_841" value={" (Piper, 2026) er\xF6ffnet die Reihe um die Fotografin Lou Faber und Kriminalkommissar Alfred K\xF6nig. Berlin im Dezember 1946: Der Krieg ist vorbei, doch die Stadt liegt in Ruinen, und der Hungerwinter beginnt. "} /><Ref id="piper" /><EditableText id="src_components_webspecial_fall_tsx_1090" value={" Stern wollte nach eigener Aussage nicht vom Aufbruch erz\xE4hlen, sondern von der Zeit, \xABin der das noch nicht eingel\xF6st werden konnte\xBB."} /><EditableText id="src_components_webspecial_fall_tsx_1236" value={" "} />
            <Ref id="ndrBuch" note="Interview" />
          </p>
          <p className="mt-6">
            <strong><EditableText id="src_components_webspecial_fall_tsx_1358" value={"Unsere Lesart:"} /></strong><EditableText id="src_components_webspecial_fall_tsx_1381" value={" Das Wort "} /><em><EditableText id="src_components_webspecial_fall_tsx_1395" value={"Verdr\xE4ngung"} /></em><EditableText id="src_components_webspecial_fall_tsx_1411" value={" hat in Berlin zwei Bedeutungen. 1946 meint es das Schweigen \xFCber Schuld und Mitwirkung im Nationalsozialismus. 2026 meint es Menschen, die sich ihre Wohnung nicht mehr leisten k\xF6nnen. Beide Male geht es um die Frage, wer in dieser Stadt einen Platz hat \u2013 und wer entscheidet, was sichtbar bleibt."} /></p>
          <p className="meta mt-6 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_1817" value={"Redaktionelle Interpretation \xB7 Handlungsspoiler ab dem folgenden Abschnitt \xB7 Die Aufl\xF6sung des Falls verraten wir nicht."} /></p>
        </div>

        <div className="mt-16 grid gap-12 border-y border-border py-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow><EditableText id="src_components_webspecial_fall_tsx_2129" value={"H\xF6rraum / Atmosph\xE4re"} /></Eyebrow>
            <h3 className="text-2xl"><EditableText id="src_components_webspecial_fall_tsx_2197" value={"K\xE4lte h\xF6ren"} /></h3>
            <p className="mt-3 text-[0.95rem]"><EditableText id="src_components_webspecial_fall_tsx_2261" value={"Bevor ihr weiterlest: Wie klingt eine Stadt bei minus 20 Grad, wenn keine Strassenbahn f\xE4hrt und kein Ofen brennt? Die Klangkulisse rechts wird im Browser erzeugt \u2013 Windrauschen und zwei Klicks einer Kamera. Sie ist ein Platzhalter f\xFCr eure eigene Atmo-Aufnahme."} /></p>
            <SoundToggle className="mt-5" />
            <p className="meta mt-6 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_2688" value={"Erg\xE4nzend: Audio-Rezension von Thomas B\xF6hm bei radioeins, 08.01.2026, laut Sender abrufbar bis 08.01.2027. "} /><Ref id="radioeins" />
            </p>
          </div>
          <AudioPlaceholder title="Atmo: Blücherplatz im Winter, frühmorgens" hint="30–60 Sek. eigene Aufnahme vor Ort (Wind, Schritte im Schnee, entfernter Verkehr). Keine erkennbaren Stimmen ohne Einwilligung." transcript="Textalternative zur Atmo-Aufnahme: Beschreibt in zwei bis drei Sätzen, was zu hören ist und wann aufgenommen wurde." />
        </div>
      </Reveal>
    </section>;
}
const people = [{
  no: "A / 01",
  name: "Lou Faber",
  role: "Die Fotografin",
  text: "Streift mit ihrer Leica durch die Ruinen und will Bilder an die Frauenzeitschrift «Die Frau von heute» verkaufen. Sie findet die erste Tote – und fotografiert sie.",
  refs: [["krimicouch"], ["vorablesen2"]]
}, {
  no: "A / 02",
  name: "Alfred König",
  role: "Der Kriminalkommissar",
  text: "Ermittelt mit improvisierten Mitteln. Ein Glasauge erinnert an Haft und Misshandlung. Über seine Vergangenheit spricht er zunächst nicht.",
  refs: [["dlf"]]
}, {
  no: "A / 03",
  name: "Inspektor Trautwein",
  role: "Der Assistent",
  text: "Der junge Kollege an Königs Seite. Gemeinsam haben sie zu Beginn kaum mehr in der Hand als Lous Fotografie vom Fundort.",
  refs: [["krimicouch"]]
}] as const;
const hypotheses = [{
  id: "gebet",
  label: "Eine religiöse Geste",
  finding: "Textbefund laut Rezension: Lou erinnert die Haltung der gefalteten Hände an Kinder, die das Nachtgebet sprechen sollen.",
  refs: ["vorablesen"],
  gap: "Beweislücke: Eine Erinnerung der Figur ist noch keine Erklärung des Täters. Wer deutet hier – Lou, König oder wir?"
}, {
  id: "botschaft",
  label: "Eine Botschaft an die Ermittler",
  finding: "Textbefund laut Verlagstext: Die Toten werden auffällig inszeniert, die Polizei gerät unter Zeitdruck, weitere Leichen folgen.",
  refs: ["piper", "lesering"],
  gap: "Beweislücke: Eine Inszenierung kann sich an die Öffentlichkeit, an die Polizei oder an niemanden richten. Prüft, wer im Roman die Bilder überhaupt sieht."
}, {
  id: "vergangenheit",
  label: "Ein Verweis in die Vergangenheit",
  finding: "Textbefund laut Verlagstext: Die Spur weist «zurück in die finstere Vergangenheit». Rezensionen betonen Lücken in Biografien, in denen Nicht-Erinnern zur Überlebensstrategie wurde.",
  refs: ["piper", "lesering"],
  gap: "Beweislücke: Welche Vergangenheit genau gemeint ist, klärt erst die Lektüre. Haltet eure Vermutung fest und prüft sie am Romanende."
}] as const;
export function DerFall() {
  const [pick, setPick] = useState<string | null>(null);
  const current = hypotheses.find(h => h.id === pick);
  return <section id="fall" className="section-pad bg-secondary">
      <Reveal>
        <div className="flex items-start justify-between gap-4">
          <Eyebrow><EditableText id="src_components_webspecial_fall_tsx_5752" value={"01 / Der Fall"} /></Eyebrow>
          <span className="stamp"><EditableText id="src_components_webspecial_fall_tsx_5810" value={"Literarische Rekonstruktion"} /></span>
        </div>
        <SectionTitle><EditableText id="src_components_webspecial_fall_tsx_5882" value={"Eine Tote im Schnee."} /><br /><EditableText id="src_components_webspecial_fall_tsx_5930" value={"Gefaltete H\xE4nde."} /></SectionTitle>
        <p className="max-w-3xl"><EditableText id="src_components_webspecial_fall_tsx_6015" value={"14. Dezember 1946, fr\xFCher Morgen, minus zw\xF6lf Grad. In einer Ruine am Bl\xFCcherplatz in Kreuzberg findet Lou Faber eine Frauenleiche, die H\xE4nde wie zum Gebet gefaltet. Sie hebt die Kamera und dr\xFCckt ab."} /><EditableText id="src_components_webspecial_fall_tsx_6236" value={" "} />
          <Ref id="krimicouch" /><EditableText id="src_components_webspecial_fall_tsx_6275" value={" W\xE4hrend Heiligabend n\xE4herr\xFCckt, werden weitere Tote gefunden. Was folgt daraus \u2013 und was gerade nicht? "} /><Ref id="piper" />
        </p>

        <div className="my-14 grid gap-9 md:grid-cols-3">
          {people.map(p => <article key={p.name} className="border-t-2 border-foreground pt-5">
              <p className="font-sans text-[0.7rem] text-primary"><EditableText id="src_components_webspecial_fall_tsx_6658" value={p.no} /></p>
              <h3 className="mb-1 mt-4 text-[1.7rem]"><EditableText id="src_components_webspecial_fall_tsx_6723" value={p.name} /></h3>
              <p className="eyebrow mb-5 text-[0.62rem] text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_6816" value={p.role} /></p>
              <p className="text-base"><EditableText id="src_components_webspecial_fall_tsx_6868" value={p.text} /></p>
              <p className="meta mt-4 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_6942" value={"Grundlage: "} /><EditableText id="src_components_webspecial_fall_tsx_6970" value={p.refs.map(([r]) => <Ref key={r} id={r} />)} /><EditableText id="src_components_webspecial_fall_tsx_7015" value={" \xB7 Seitenangaben aus eurer Ausgabe erg\xE4nzen"} /></p>
            </article>)}
        </div>

        <div className="border border-border bg-card p-6 md:p-10">
          <Eyebrow><EditableText id="src_components_webspecial_fall_tsx_7217" value={"Interaktive Fallakte / leichte Spoiler"} /></Eyebrow>
          <h3 className="text-[2.1rem] leading-tight"><EditableText id="src_components_webspecial_fall_tsx_7320" value={"Warum die gefalteten H\xE4nde?"} /></h3>
          <p className="mt-5 max-w-3xl"><EditableText id="src_components_webspecial_fall_tsx_7393" value={"Pr\xFCft eine Hypothese. Die R\xFCckmeldung trennt Textbefund und Beweisl\xFCcke. Es gibt keine Punktzahl f\xFCr vermeintliche Gewissheit \u2013 und keine Aufl\xF6sung."} /></p>
          <div className="my-8 grid gap-3 md:grid-cols-3">
            {hypotheses.map((h, i) => <button key={h.id} type="button" aria-pressed={pick === h.id} onClick={() => setPick(h.id)} className={cn("flex items-center gap-3 border px-5 py-4 text-left font-sans text-xs transition", pick === h.id ? "border-frost bg-frost text-frost-foreground" : "border-border hover:border-foreground")}>
                <span className="text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_8237" value={String(i + 1).padStart(2, "0")} /></span>
                <span className="flex-1"><EditableText id="src_components_webspecial_fall_tsx_8318" value={h.label} /></span>
                <span aria-hidden><EditableText id="src_components_webspecial_fall_tsx_8369" value={"\u2197"} /></span>
              </button>)}
          </div>
          <div className="min-h-[160px] border-l-[3px] border-primary bg-muted p-6" aria-live="polite">
            {current ? <>
                <p className="font-semibold"><EditableText id="src_components_webspecial_fall_tsx_8626" value={current.label} /></p>
                <p className="mt-3"><EditableText id="src_components_webspecial_fall_tsx_8682" value={current.finding} /></p>
                <p className="mt-3 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_8762" value={current.gap} /></p>
                <p className="meta mt-3 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_8843" value={"Belege: "} /><EditableText id="src_components_webspecial_fall_tsx_8870" value={current.refs.map(r => <Ref key={r} id={r} />)} /><EditableText id="src_components_webspecial_fall_tsx_8919" value={" \xB7 Leserrezensionen sind keine Fachquelle \u2013 am Roman pr\xFCfen."} /></p>
              </> : <>
                <p className="font-semibold"><EditableText id="src_components_webspecial_fall_tsx_9099" value={"Die Akte ist offen."} /></p>
                <p className="mt-3"><EditableText id="src_components_webspecial_fall_tsx_9159" value={"W\xE4hlt eine Hypothese, um Befund und Grenzen zu sehen."} /></p>
              </>}
          </div>
          <p className="meta mt-5 text-muted-foreground"><EditableText id="src_components_webspecial_fall_tsx_9324" value={"Die Mordserie ist Fiktion. Sie dient im Roman dazu, verdr\xE4ngte Geschichte sichtbar zu machen \u2013 sie ist kein Bericht \xFCber reale Taten."} /></p>
        </div>
        <p className="mt-12 max-w-3xl font-display text-2xl italic"><EditableText id="src_components_webspecial_fall_tsx_9581" value={"Die Frage nach den H\xE4nden f\xFChrt aus der Ruine hinaus: Wie lebte eine Stadt, in der Mord nur eine von vielen Todesarten war?"} /></p>
      </Reveal>
    </section>;
}
