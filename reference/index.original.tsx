import { createFileRoute } from "@tanstack/react-router";
import { Topbar, Hero } from "@/components/webspecial/chrome";
import { Opening, DerFall } from "@/components/webspecial/fall";
import { DieStadt } from "@/components/webspecial/stadt";
import { ZweiBlicke } from "@/components/webspecial/blicke";
import { DieLeica } from "@/components/webspecial/leica";
import { UndHeute } from "@/components/webspecial/heute";
import { Quellen, Footer } from "@/components/webspecial/quellen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Die gefallene Königin – Wer erzählt vom Leid der Frauen? | Webspecial" },
      {
        name: "description",
        content:
          "Multimediales Webspecial zu Anne Sterns Krimi «Die weiße Nacht»: Berlin im Hungerwinter 1946/47 und die Wohnungsdebatte 2026.",
      },
      { property: "og:title", content: "Die gefallene Königin – Wer erzählt vom Leid der Frauen?" },
      {
        property: "og:description",
        content: "Berlin 1946: geteilt, zerbombt, hungrig – und das Leid der Frauen bleibt ungesagt. Ein Webspecial zu Anne Sterns «Die weiße Nacht».",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Opening />
        <DerFall />
        <DieStadt />
        <ZweiBlicke />
        <DieLeica />
        <UndHeute />
        <Quellen />
      </main>
      <Footer />
    </>
  );
}
