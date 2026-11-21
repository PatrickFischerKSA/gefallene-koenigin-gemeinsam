import { Topbar, Hero } from "@/components/webspecial/chrome";
import { Opening, DerFall } from "@/components/webspecial/fall";
import { DieStadt } from "@/components/webspecial/stadt";
import { ZweiBlicke } from "@/components/webspecial/blicke";
import { DieLeica } from "@/components/webspecial/leica";
import { UndHeute } from "@/components/webspecial/heute";
import { Quellen, Footer } from "@/components/webspecial/quellen";
export default function Article() {
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
