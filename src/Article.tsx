import {HomeSections,HomeSection} from '@/components/site-manager';
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
      <HomeSections><HomeSection id="original-navigation" label="Ursprüngliche Kapitelnavigation"><Topbar /></HomeSection>
<HomeSection id="hero" label="Titelseite"><Hero/></HomeSection>
<HomeSection id="opening" label="Einleitung"><Opening/></HomeSection>
<HomeSection id="fall" label="Der Fall"><DerFall/></HomeSection>
<HomeSection id="stadt" label="Die Stadt"><DieStadt/></HomeSection>
<HomeSection id="blicke" label="Zwei Blicke"><ZweiBlicke/></HomeSection>
<HomeSection id="leica" label="Die Leica"><DieLeica/></HomeSection>
<HomeSection id="heute" label="Und heute?"><UndHeute/></HomeSection>
<HomeSection id="quellen" label="Quellen"><Quellen/></HomeSection>
      </HomeSections>
      <Footer />
    </>
  );
}
