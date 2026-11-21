import { useState } from "react";
import { Ref, Eyebrow, SectionTitle, AudioPlaceholder, Reveal } from "./primitives";
import { SoundToggle } from "./chrome";
import { cn } from "@/lib/utils";

export function Opening() {
  return (
    <section id="inhalt" className="section-pad">
      <Reveal>
        <Eyebrow>Der Schnee liegt. Die Frage bleibt.</Eyebrow>
        <SectionTitle>
          Wer verdrängt wird –<br />
          und was verdrängt wird.
        </SectionTitle>
        <div className="max-w-3xl">
          <p className="font-display text-[1.6rem] leading-[1.45] tracking-[-0.02em]">
            Ein Bild hält fest, was andere lieber vergessen würden. In einer Stadt aus Trümmern wird das zur
            gefährlichen Fähigkeit.
          </p>
          <p className="mt-6">
            Anne Sterns <em>Die weiße Nacht</em> (Piper, 2026) eröffnet die Reihe um die Fotografin Lou Faber und
            Kriminalkommissar Alfred König. Berlin im Dezember 1946: Der Krieg ist vorbei, doch die Stadt liegt in
            Ruinen, und der Hungerwinter beginnt. <Ref id="piper" /> Stern wollte nach eigener Aussage nicht vom
            Aufbruch erzählen, sondern von der Zeit, «in der das noch nicht eingelöst werden konnte».{" "}
            <Ref id="ndrBuch" note="Interview" />
          </p>
          <p className="mt-6">
            <strong>Unsere Lesart:</strong> Das Wort <em>Verdrängung</em> hat in Berlin zwei Bedeutungen. 1946 meint
            es das Schweigen über Schuld und Mitwirkung im Nationalsozialismus. 2026 meint es Menschen, die sich ihre
            Wohnung nicht mehr leisten können. Beide Male geht es um die Frage, wer in dieser Stadt einen Platz hat –
            und wer entscheidet, was sichtbar bleibt.
          </p>
          <p className="meta mt-6 text-muted-foreground">
            Redaktionelle Interpretation · Handlungsspoiler ab dem folgenden Abschnitt · Die Auflösung des Falls
            verraten wir nicht.
          </p>
        </div>

        <div className="mt-16 grid gap-12 border-y border-border py-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow>Hörraum / Atmosphäre</Eyebrow>
            <h3 className="text-2xl">Kälte hören</h3>
            <p className="mt-3 text-[0.95rem]">
              Bevor ihr weiterlest: Wie klingt eine Stadt bei minus 20 Grad, wenn keine Strassenbahn fährt und kein
              Ofen brennt? Die Klangkulisse rechts wird im Browser erzeugt – Windrauschen und zwei Klicks einer
              Kamera. Sie ist ein Platzhalter für eure eigene Atmo-Aufnahme.
            </p>
            <SoundToggle className="mt-5" />
            <p className="meta mt-6 text-muted-foreground">
              Ergänzend: Audio-Rezension von Thomas Böhm bei radioeins, 08.01.2026, laut Sender abrufbar bis
              08.01.2027. <Ref id="radioeins" />
            </p>
          </div>
          <AudioPlaceholder
            title="Atmo: Blücherplatz im Winter, frühmorgens"
            hint="30–60 Sek. eigene Aufnahme vor Ort (Wind, Schritte im Schnee, entfernter Verkehr). Keine erkennbaren Stimmen ohne Einwilligung."
            transcript="Textalternative zur Atmo-Aufnahme: Beschreibt in zwei bis drei Sätzen, was zu hören ist und wann aufgenommen wurde."
          />
        </div>
      </Reveal>
    </section>
  );
}

const people = [
  {
    no: "A / 01",
    name: "Lou Faber",
    role: "Die Fotografin",
    text: "Streift mit ihrer Leica durch die Ruinen und will Bilder an die Frauenzeitschrift «Die Frau von heute» verkaufen. Sie findet die erste Tote – und fotografiert sie.",
    refs: [["krimicouch"], ["vorablesen2"]],
  },
  {
    no: "A / 02",
    name: "Alfred König",
    role: "Der Kriminalkommissar",
    text: "Ermittelt mit improvisierten Mitteln. Ein Glasauge erinnert an Haft und Misshandlung. Über seine Vergangenheit spricht er zunächst nicht.",
    refs: [["dlf"]],
  },
  {
    no: "A / 03",
    name: "Inspektor Trautwein",
    role: "Der Assistent",
    text: "Der junge Kollege an Königs Seite. Gemeinsam haben sie zu Beginn kaum mehr in der Hand als Lous Fotografie vom Fundort.",
    refs: [["krimicouch"]],
  },
] as const;

const hypotheses = [
  {
    id: "gebet",
    label: "Eine religiöse Geste",
    finding:
      "Textbefund laut Rezension: Lou erinnert die Haltung der gefalteten Hände an Kinder, die das Nachtgebet sprechen sollen.",
    refs: ["vorablesen"],
    gap: "Beweislücke: Eine Erinnerung der Figur ist noch keine Erklärung des Täters. Wer deutet hier – Lou, König oder wir?",
  },
  {
    id: "botschaft",
    label: "Eine Botschaft an die Ermittler",
    finding:
      "Textbefund laut Verlagstext: Die Toten werden auffällig inszeniert, die Polizei gerät unter Zeitdruck, weitere Leichen folgen.",
    refs: ["piper", "lesering"],
    gap: "Beweislücke: Eine Inszenierung kann sich an die Öffentlichkeit, an die Polizei oder an niemanden richten. Prüft, wer im Roman die Bilder überhaupt sieht.",
  },
  {
    id: "vergangenheit",
    label: "Ein Verweis in die Vergangenheit",
    finding:
      "Textbefund laut Verlagstext: Die Spur weist «zurück in die finstere Vergangenheit». Rezensionen betonen Lücken in Biografien, in denen Nicht-Erinnern zur Überlebensstrategie wurde.",
    refs: ["piper", "lesering"],
    gap: "Beweislücke: Welche Vergangenheit genau gemeint ist, klärt erst die Lektüre. Haltet eure Vermutung fest und prüft sie am Romanende.",
  },
] as const;

export function DerFall() {
  const [pick, setPick] = useState<string | null>(null);
  const current = hypotheses.find((h) => h.id === pick);
  return (
    <section id="fall" className="section-pad bg-secondary">
      <Reveal>
        <div className="flex items-start justify-between gap-4">
          <Eyebrow>01 / Der Fall</Eyebrow>
          <span className="stamp">Literarische Rekonstruktion</span>
        </div>
        <SectionTitle>
          Eine Tote im Schnee.
          <br />
          Gefaltete Hände.
        </SectionTitle>
        <p className="max-w-3xl">
          14. Dezember 1946, früher Morgen, minus zwölf Grad. In einer Ruine am Blücherplatz in Kreuzberg findet Lou
          Faber eine Frauenleiche, die Hände wie zum Gebet gefaltet. Sie hebt die Kamera und drückt ab.{" "}
          <Ref id="krimicouch" /> Während Heiligabend näherrückt, werden weitere Tote gefunden. Was folgt daraus – und
          was gerade nicht? <Ref id="piper" />
        </p>

        <div className="my-14 grid gap-9 md:grid-cols-3">
          {people.map((p) => (
            <article key={p.name} className="border-t-2 border-foreground pt-5">
              <p className="font-sans text-[0.7rem] text-primary">{p.no}</p>
              <h3 className="mb-1 mt-4 text-[1.7rem]">{p.name}</h3>
              <p className="eyebrow mb-5 text-[0.62rem] text-muted-foreground">{p.role}</p>
              <p className="text-base">{p.text}</p>
              <p className="meta mt-4 text-muted-foreground">
                Grundlage: {p.refs.map(([r]) => <Ref key={r} id={r} />)} · Seitenangaben aus eurer Ausgabe ergänzen
              </p>
            </article>
          ))}
        </div>

        <div className="border border-border bg-card p-6 md:p-10">
          <Eyebrow>Interaktive Fallakte / leichte Spoiler</Eyebrow>
          <h3 className="text-[2.1rem] leading-tight">Warum die gefalteten Hände?</h3>
          <p className="mt-5 max-w-3xl">
            Prüft eine Hypothese. Die Rückmeldung trennt Textbefund und Beweislücke. Es gibt keine Punktzahl für
            vermeintliche Gewissheit – und keine Auflösung.
          </p>
          <div className="my-8 grid gap-3 md:grid-cols-3">
            {hypotheses.map((h, i) => (
              <button
                key={h.id}
                type="button"
                aria-pressed={pick === h.id}
                onClick={() => setPick(h.id)}
                className={cn(
                  "flex items-center gap-3 border px-5 py-4 text-left font-sans text-xs transition",
                  pick === h.id
                    ? "border-frost bg-frost text-frost-foreground"
                    : "border-border hover:border-foreground",
                )}
              >
                <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{h.label}</span>
                <span aria-hidden>↗</span>
              </button>
            ))}
          </div>
          <div className="min-h-[160px] border-l-[3px] border-primary bg-muted p-6" aria-live="polite">
            {current ? (
              <>
                <p className="font-semibold">{current.label}</p>
                <p className="mt-3">{current.finding}</p>
                <p className="mt-3 text-muted-foreground">{current.gap}</p>
                <p className="meta mt-3 text-muted-foreground">
                  Belege: {current.refs.map((r) => <Ref key={r} id={r} />)} · Leserrezensionen sind keine Fachquelle – am Roman prüfen.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold">Die Akte ist offen.</p>
                <p className="mt-3">Wählt eine Hypothese, um Befund und Grenzen zu sehen.</p>
              </>
            )}
          </div>
          <p className="meta mt-5 text-muted-foreground">
            Die Mordserie ist Fiktion. Sie dient im Roman dazu, verdrängte Geschichte sichtbar zu machen – sie ist
            kein Bericht über reale Taten.
          </p>
        </div>
        <p className="mt-12 max-w-3xl font-display text-2xl italic">
          Die Frage nach den Händen führt aus der Ruine hinaus: Wie lebte eine Stadt, in der Mord nur eine von vielen
          Todesarten war?
        </p>
      </Reveal>
    </section>
  );
}
