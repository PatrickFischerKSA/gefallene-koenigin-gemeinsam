import { AudioPlaceholder, Eyebrow, Ref, Reveal, SectionTitle } from "./primitives";

const files = [
  {
    tag: "Akte L / Die Fotografin",
    title: ["Lou sieht", "durch den Sucher."],
    rows: [
      ["Wahrnehmung", "Die Stadt als Bild: Details, Licht, Spuren, die andere übersehen. Ihre Fotos werden zum Beweismittel."],
      ["Vergangenheit", "Gehörte einer Widerstandsgruppe an, die der «Weissen Rose» nachempfunden ist. Sie hat überlebt, viele Freunde nicht."],
      ["Blinder Fleck (unsere Lesart)", "Wer festhält, steht auch ausserhalb. Das Bild schafft Distanz – zur Toten, zur eigenen Trauer."],
    ],
    refs: ["dlf", "vorablesen2"],
  },
  {
    tag: "Akte K / Der Kommissar",
    title: ["König schweigt", "über Görden."],
    rows: [
      ["Wahrnehmung", "Der Fall als Ordnungsaufgabe in einem Apparat aus Schnellkurs-Beamten und früheren NS-Polizisten."],
      ["Vergangenheit", "Verweigerte als Angehöriger eines Polizeiregiments in Belarus die Teilnahme an einem Massaker. Der Preis: Haft in Görden, ein Auge, seine Gesundheit."],
      ["Blinder Fleck (unsere Lesart)", "Er weiss, was Schweigen anrichtet – und schweigt doch selbst. Was er nicht erzählt, prägt, wie er ermittelt."],
    ],
    refs: ["dlf", "vorablesen"],
  },
] as const;

export function ZweiBlicke() {
  return (
    <section id="blicke" className="section-pad bg-frost text-frost-foreground">
      <Reveal>
        <p className="eyebrow mb-6 text-frost-muted">03 / Derselbe Fall. Zwei Blicke.</p>
        <SectionTitle>
          Wer hinschaut,
          <br />
          wer wegschaut.
        </SectionTitle>
        <p className="max-w-3xl text-frost-muted">
          Lou und König misstrauen einander zunächst, tauschen aber Hinweise aus und ermitteln gewissermassen
          gemeinsam. Beide sind vom Krieg gezeichnet, beide hellhörig für verschwiegenes Unrecht.{" "}
          <Ref id="dlf" /> Die folgende Gegenüberstellung paraphrasiert Rezensionen und enthält keine erfundenen
          Figurenreden.
        </p>

        <div className="mt-14 grid gap-16 md:grid-cols-2">
          {files.map((f) => (
            <article key={f.tag} className="border-t border-frost-border pt-6">
              <Eyebrow className="text-frost-muted">{f.tag}</Eyebrow>
              <h3 className="text-[2.4rem] leading-[1.1]">
                {f.title[0]}
                <br />
                {f.title[1]}
              </h3>
              <dl className="mt-6">
                {f.rows.map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className="eyebrow mt-6 text-[0.62rem] text-ice">{dt}</dt>
                    <dd className="mt-2">{dd}</dd>
                  </div>
                ))}
              </dl>
              <p className="meta mt-6 text-frost-muted">
                Grundlage: {f.refs.map((r) => <Ref key={r} id={r} />)} · Seitenangaben aus eurer Ausgabe ergänzen
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <AudioPlaceholder
            tone="dark"
            title="Monolog «Lou»: Was ich am Blücherplatz sah"
            hint="Selbst verfasst und eingesprochen, 60–90 Sek. Ich-Perspektive, ohne Romanzitate zu erfinden. Kennzeichnen als eigene Fiktion."
            transcript="Transkript eures Monologs hier einfügen, damit die Station auch ohne Ton verständlich ist."
          />
          <AudioPlaceholder
            tone="dark"
            title="Monolog «König»: Was ich nicht erzähle"
            hint="Selbst verfasst und eingesprochen, 60–90 Sek. Gleiche Szene, andere Wahrnehmung. Kennzeichnen als eigene Fiktion."
            transcript="Transkript eures Monologs hier einfügen."
          />
        </div>

        <p className="mt-16 max-w-4xl border-t border-frost-border pt-10 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.2]">
          Ein Foto hält fest. Ein Schweigen hält zurück. Beides entscheidet, welche Geschichte eine Stadt über sich
          erzählt.
        </p>
        <p className="meta mt-4 text-frost-muted">Redaktionelle Zuspitzung, kein Romanzitat.</p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            "Wer von beiden erkennt zuerst, dass die Toten etwas gemeinsam haben – und warum gerade diese Figur?",
            "Wo verändert ein neues Detail eure Beurteilung von König?",
            "Welche Rolle spielt es, dass eine Frau mit Kamera 1946 ernst genommen werden muss?",
          ].map((q, i) => (
            <p key={q} className="border border-frost-border p-5 text-[0.95rem]">
              <span className="font-sans text-xs text-ice">Vergleichsfrage {i + 1}</span>
              <br />
              {q}
            </p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
