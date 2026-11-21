// Inhalte des Webspecials. Alle Gegenwartsangaben tragen Datum und Quelle.
// Romanbezogene Angaben stützen sich auf Verlagstext und Rezensionen; genaue Seitenzahlen
// muss die Projektgruppe aus der eigenen Ausgabe ergänzen.

export type Source = { id: string; label: string; date?: string; url: string };

export const sources = {
  piper: {
    id: "piper",
    label: "Piper Verlag: Anne Stern – Die weiße Nacht (Verlagsseite)",
    date: "Erscheinungsdatum 02.01.2026",
    url: "https://www.piper.de/buecher/die-weisse-nacht-isbn-978-3-492-07461-2",
  },
  ndrBuch: {
    id: "ndrBuch",
    label: "NDR Kultur: «Die weiße Nacht» – Anne Stern entführt in die Ruinen der Nachkriegszeit",
    date: "12.01.2026",
    url: "https://www.ndr.de/kultur/buch/tipps/die-weisse-nacht-anne-stern-entfuehrt-in-die-ruinen-der-nachkriegszeit,stern-128.html",
  },
  krimicouch: {
    id: "krimicouch",
    label: "Krimi-Couch: Rezension von Thomas Gisbertz",
    date: "Januar 2026",
    url: "https://www.krimi-couch.de/titel/24229-die-weisse-nacht/",
  },
  dlf: {
    id: "dlf",
    label: "Deutschlandfunk Büchermarkt: Die gefalteten Hände der Toten (Marko Langer)",
    date: "13.02.2026",
    url: "https://bilder.deutschlandfunk.de/27/c1/40/a5/27c140a5-10a0-4312-b510-ec20417abf58/anne-stern-die-weisse-nacht-der-erste-fall-fuer-lou-und-koenig-100.pdf",
  },
  lesering: {
    id: "lesering",
    label: "Lesering.de: Die weiße Nacht von Anne Stern – Berlin friert, und die Wahrheit bleibt nicht liegen",
    date: "14.01.2026",
    url: "https://www.lesering.de/id/4947800/anne-stern-die-weisse-nacht-inhalt-rezension/",
  },
  vorablesen: {
    id: "vorablesen",
    label: "Vorablesen: Leserrezension «Erster Fall für König und Faber» (Nutzerin büchersally)",
    date: "18.01.2026",
    url: "https://www.vorablesen.de/buecher/die-weisse-nacht/rezensionen/erster-fall-fuer-koenig-und-faber",
  },
  vorablesen2: {
    id: "vorablesen2",
    label: "Vorablesen: Leserrezension «Auf der Suche nach dem Ruinenmörder» (Nutzerin lavendeleis)",
    date: "03.12.2025",
    url: "https://www.vorablesen.de/buecher/die-weisse-nacht/rezensionen/auf-der-suche-nach-dem-ruinenmoerder-im-kalten-nachkriegswinter-in-berlin",
  },
  radioeins: {
    id: "radioeins",
    label: "radioeins: Favorit Buch – «Die weiße Nacht» (Audio-Rezension)",
    date: "08.01.2026",
    url: "https://www.radioeins.de/programm/sendungen/mofr1013/buch/-die-weisse-nacht--von-anne-stern.html",
  },
  ndrFilm: {
    id: "ndrFilm",
    label: "NDR: Hungerwinter – Überleben nach dem Krieg (Dokumentation mit Zeitzeugen)",
    date: "07.05.2020",
    url: "https://www.ndr.de/kultur/film/Hungerwinter-Ueberleben-nach-dem-Krieg,hungerwinter100.html",
  },
  mieterverein: {
    id: "mieterverein",
    label: "Berliner Mieterverein, MieterMagazin: Wohnen in Kriegsruinen",
    date: "30.09.2020",
    url: "https://www.berliner-mieterverein.de/magazin/online/mm1020/wohnen-kriegsruinen-1945-hauptsache-ein-dach-ueberm-kopf102024.htm",
  },
  ndrHunger: {
    id: "ndrHunger",
    label: "NDR Geschichte: Der «weiße Tod» im Hungerwinter 1946/47",
    date: "10.01.2026",
    url: "https://www.ndr.de/geschichte/chronologie/Hungerwinter-1946-47-Weisser-Tod-und-schwarzer-Hunger,hungerwinter166.html",
  },
  dlfHunger: {
    id: "dlfHunger",
    label: "Deutschlandfunk: Der Hungerwinter 1946/47",
    date: "16.11.2021",
    url: "https://www.deutschlandfunk.de/der-hungerwinter-neunzehnhundertsechsundvierzig-100.html",
  },
  statistik1947: {
    id: "statistik1947",
    label: "Berlinische Monatsschrift: Holzvergaser und Wärmestuben – Nachkriegs-Berlin in der Statistik 1947",
    url: "https://berlingeschichte.de/bms/bmstxt00/0012proi.htm",
  },
  wahlen: {
    id: "wahlen",
    label: "Landeswahlleiterin Berlin: Ergebnis Volksentscheid «Deutsche Wohnen & Co. enteignen»",
    date: "26.09.2021",
    url: "https://www.wahlen-berlin.de/",
  },
  sz: {
    id: "sz",
    label: "Süddeutsche Zeitung: Demo für bezahlbare Mieten zieht durch die Stadt",
    date: "05.09.2026",
    url: "https://www.sueddeutsche.de/politik/berlin-wohnungskrise-mietenwahl-demonstrationen-wahl-li.3540733",
  },
  tazDemo: {
    id: "tazDemo",
    label: "taz: Mietendemo in Berlin – Enteignen, jetzt!",
    date: "06.09.2026",
    url: "https://taz.de/Mietendemo-in-Berlin/!6209966/",
  },
  zeit: {
    id: "zeit",
    label: "DIE ZEIT: Vergesellschaftung von Wohnungen – Acht Milliarden? 36 Milliarden?",
    date: "01.10.2026",
    url: "https://www.zeit.de/wirtschaft/2026-10/vergesellschaftungen-wohnungen-finanzierungskosten-berlin-studie",
  },
  monitor: {
    id: "monitor",
    label: "ARD Monitor: Mieten ausser Kontrolle – Das Tabu der Vergesellschaftung (Manuskript)",
    date: "15.10.2026",
    url: "https://www1.wdr.de/daserste/monitor/download-mieten-100.pdf",
  },
  tagesspiegel: {
    id: "tagesspiegel",
    label: "Tagesspiegel: Vergesellschaftung, Mietendeckel, Neubau – die Pläne von Linken, Grünen und SPD",
    date: "19.10.2026",
    url: "https://www.tagesspiegel.de/berlin/vergesellschaftung-mietendeckel-neubau-die-plane-von-linken-grunen-und-spd-zum-thema-wohnen-in-berlin-im-uberblick-16173622.html",
  },
  tazKosten: {
    id: "tazKosten",
    label: "taz: Kommt Berlin die Vergesellschaftung teuer zu stehen?",
    date: "21.10.2026",
    url: "https://taz.de/Kommt-Berlin-die-Vergesellschaftung-teuer-zu-stehen/!6222924/",
  },
  tazKommentar: {
    id: "tazKommentar",
    label: "taz, Kommentar Jonas Wahmkow: Alles besser als Vonovia",
    date: "09.11.2026",
    url: "https://taz.de/Debatte-um-Vergesellschaftung/!6228651/",
  },
  kurier: {
    id: "kurier",
    label: "Berliner Kurier: Linke geben zu – ohne Mieterhöhung geht's nicht (Pestel-Bau-Monitor 2026)",
    date: "11.11.2026",
    url: "https://www.berliner-kurier.de/article/linke-berlin-enteignung-vergesellschaftung-mieterhoehung-10582850",
  },
} satisfies Record<string, Source>;
export type SourceId = keyof typeof sources;

// Nummerierte Quellenliste in der Reihenfolge der Quellenseite.
export const sourceOrder = [
  "piper", "krimicouch", "ndrBuch", "dlf", "lesering", "vorablesen", "vorablesen2", "radioeins",
  "mieterverein", "ndrHunger", "dlfHunger", "statistik1947", "ndrFilm",
  "wahlen", "sz", "tazDemo", "zeit", "monitor", "tagesspiegel", "tazKosten", "tazKommentar", "kurier",
] as const;

export const sourceNumber = (id: string) => sourceOrder.indexOf(id as (typeof sourceOrder)[number]) + 1;
export const getSource = (id: string): Source | undefined => (sources as Record<string, Source>)[id];

export type ImageCredit = {
  key: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  licenseUrl: string;
  page: string;
};

export const imageCredits = {
  holz: {
    key: "holz",
    alt: "Schwarzweissfoto: Drei Menschen in Wintermänteln ziehen auf einer verschneiten Strasse Säcke und einen Schlitten mit Holz.",
    caption: "«Ein wenig Holz, ein kostbares Gut in der grimmigen Kälte des Winters.» Originaler Bildtext, Berlin 1947.",
    credit: "Bundesarchiv, Bild 183-2006-1106-500, Foto: o. Ang.",
    license: "CC BY-SA 3.0 DE",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    page: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-2006-1106-500,_Berlin,_Holztransport_mit_dem_Schlitten.jpg",
  },
  plaza: {
    key: "plaza",
    alt: "Schwarzweissfoto: Dicht an dicht liegen Menschen in Decken auf Notbetten in einem grossen, teilweise zerstörten Saal.",
    caption: "Notunterkunft im früheren, teilweise zerstörten Varieté «Plaza», 7. März 1947. Laut Originaltext stellte die Polizei Ermittlungen an, wo Menschen durch Hunger und Kälte in Todesgefahr waren.",
    credit: "Bundesarchiv, Bild 183-R66645, Foto: Bittner",
    license: "CC BY-SA 3.0 DE",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    page: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-R66645,_Berlin,_eisiger_Winter,_Notunterkunft.jpg",
  },
  bett: {
    key: "bett",
    alt: "Schwarzweissfoto: Eine Frau und ein Kind liegen mit Mütze, Mantel und Handschuhen im Bett, das Kind hält einen Teddybären.",
    caption: "«So geht man in Berlin bei minus 20 Grad ins Bett.» Originaler Bildtext. Datierung uneinheitlich: Januar/Februar bzw. 7. März 1947.",
    credit: "Bundesarchiv, Bild 183-R66487, Foto: Ernst E. Schwahn",
    license: "CC BY-SA 3.0 DE",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    page: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-R66487,_Berlin,_eisiger_Winter,_Frau_mit_Kind.jpg",
  },
  platz1937: {
    key: "platz1937",
    alt: "Schwarzweissfoto von oben: Blücherplatz 1937 mit dichter Blockbebauung, Strassenbahn, Autos und einer Baugrube.",
    caption: "Blücherplatz am Halleschen Tor, 1937: Blick auf einen Bauplatz für ein Rathaus des Bezirks Kreuzberg.",
    credit: "Bundesarchiv, Bild 183-C01694, Foto: Schwahn",
    license: "CC BY-SA 3.0 DE",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    page: "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-C01694,_Berlin,_Bl%C3%BCcherplatz.jpg",
  },
  platz2011: {
    key: "platz2011",
    alt: "Farbfoto: Blücherplatz 2011, breite Strasse, kahle Bäume, ein parkendes Auto, Nachkriegsbauten im Hintergrund.",
    caption: "Blücherplatz, 13. März 2011: weite Strassenräume und Nachkriegsbauten.",
    credit: "Foto: Assenmacher, Wikimedia Commons",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    page: "https://commons.wikimedia.org/wiki/File:Berlin-Kreuzberg_-_Bl%C3%BCcherplatz.jpg",
  },
  agb: {
    key: "agb",
    alt: "Farbfoto: Die Amerika-Gedenkbibliothek mit gerasterter Fassade hinter einer Wiese mit Bäumen.",
    caption: "Amerika-Gedenkbibliothek am Blücherplatz, 9. August 2020.",
    credit: "Foto: Gunnar Klack, Wikimedia Commons",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    page: "https://commons.wikimedia.org/wiki/File:2020-08-09-Amerika-Gedenkbibliothek-Bluecherplatz-Berlin-Kreuzberg.jpg",
  },
} satisfies Record<string, ImageCredit>;
export type ImageKey = keyof typeof imageCredits;

export const stations = [
  { id: "fall", no: "01", short: "Der Fall" },
  { id: "stadt", no: "02", short: "Die Stadt" },
  { id: "blicke", no: "03", short: "Zwei Blicke" },
  { id: "leica", no: "04", short: "Die Leica" },
  { id: "heute", no: "05", short: "Und heute?" },
  { id: "quellen", no: "06", short: "Quellen" },
] as const;

export const historyTimeline = [
  { date: "8. Mai 1945", text: "Kriegsende in Europa. In Berlin sind rund 55 % der Wohnungen zerstört oder beschädigt.", source: "mieterverein" },
  { date: "1945/46", text: "Zuzugssperre: Wer illegal nach Berlin kommt, hat weder Anspruch auf Wohnraumzuweisung noch auf Lebensmittelkarte.", source: "mieterverein" },
  { date: "29. Okt. 1946", text: "Volkszählung: 3 187 470 Menschen leben in Gross-Berlin, aufgeteilt auf vier Sektoren.", source: "statistik1947" },
  { date: "Nov. 1946", text: "Die Temperaturen fallen unter null. Es beginnt der kälteste Winter des 20. Jahrhunderts.", source: "ndrHunger" },
  { date: "14. Dez. 1946", text: "Romanhandlung: Lou Faber findet in einer Ruine am Blücherplatz die erste Tote.", source: "krimicouch", fiction: true },
  { date: "24. Dez. 1946", text: "Romanhandlung: Heiligabend rückt näher – und mit ihm der Zeitdruck für die Ermittler.", source: "piper", fiction: true },
  { date: "bis März 1947", text: "Bis zu −25 °C, wochenlanger Dauerfrost. Kohle und Nahrung fehlen, der Schwarzmarkt blüht.", source: "dlfHunger" },
] as const;

export type Verdict = "fakt" | "fiktion" | "pruefen";

export const factOrFiction: { claim: string; verdict: Verdict; explain: string; source: string }[] = [
  {
    claim: "Der Winter 1946/47 war der kälteste des 20. Jahrhunderts.",
    verdict: "fakt",
    explain: "Historisch belegt: Zwischen November 1946 und März 1947 gab es mehrere Frostwellen mit neuen Minusrekorden.",
    source: "ndrHunger",
  },
  {
    claim: "Mehr als die Hälfte der Berliner Wohnungen war 1945 zerstört oder beschädigt.",
    verdict: "fakt",
    explain: "Historisch belegt: Der Berliner Mieterverein nennt 55 %. Viele Menschen suchten Schutz in baufälligen Ruinen.",
    source: "mieterverein",
  },
  {
    claim: "Ein Täter legt Frauen mit gefalteten Händen in Ruinen ab.",
    verdict: "fiktion",
    explain: "Literarisch gestaltet: Die Mordserie ist die Erfindung des Romans. Das Motiv der gefalteten Hände ist zentral für die Deutung.",
    source: "piper",
  },
  {
    claim: "Lou Faber gehörte einer Widerstandsgruppe an.",
    verdict: "fiktion",
    explain: "Fiktive Figur mit historischem Vorbild: Laut Rezension ist ihre Gruppe der «Weissen Rose» nachempfunden. Das Vorbild selbst ist historisch belegt.",
    source: "dlf",
  },
  {
    claim: "In der Nachkriegspolizei arbeiteten Schnellkurs-Beamte neben früheren NSDAP-Mitgliedern.",
    verdict: "pruefen",
    explain: "So stellt es der Roman dar. Prüfauftrag: Mit einer historischen Quelle zur Berliner Polizei 1945–47 belegen oder einschränken.",
    source: "dlf",
  },
];

export const presentTimeline = [
  { date: "26. Sep. 2021", text: "Volksentscheid «Deutsche Wohnen & Co. enteignen»: Rund 59 % stimmen für die Vergesellschaftung grosser Wohnungskonzerne. Umgesetzt ist er bis heute nicht.", source: "wahlen" },
  { date: "5. Sep. 2026", text: "Grossdemo «Her mit den Wohnungen, runter mit der Miete» am Roten Rathaus – laut Veranstaltern gut 11 000 Teilnehmende.", source: "sz" },
  { date: "20. Sep. 2026", text: "Abgeordnetenhauswahl, von Initiativen als «Mietenwahl» bezeichnet. Die Linke gewinnt mit dem Versprechen der Vergesellschaftung.", source: "zeit" },
  { date: "1. Okt. 2026", text: "Studien widersprechen sich: Kosten der Entschädigung je nach Modell zwischen 8 und 36 Milliarden Euro.", source: "zeit" },
  { date: "17. Okt. 2026", text: "Sondierung Linke, Grüne, SPD: Konzerne mit mehr als 10 000 Wohnungen sollen nach Art. 15 GG vergesellschaftet werden.", source: "tagesspiegel" },
  { date: "8./9. Nov. 2026", text: "Linken-Chefin Ines Schwerdtner: Mieten in vergesellschafteten Beständen sollen jährlich um 2 % steigen. Debatte über Wahlversprechen.", source: "tazKommentar" },
  { date: "11. Nov. 2026", text: "Pestel-Bau-Monitor 2026: In Berlin fehlen rund 58 500 Wohnungen, gebaut wird immer weniger.", source: "kurier" },
] as const;

export const positions = [
  {
    stance: "Dafür",
    who: "Mieterbündnis, Initiative DWE, Linke",
    claim: "Grosse Bestände sollen dem profitorientierten Markt entzogen werden; Überschüsse fliessen in Erhalt, Modernisierung oder günstigere Mieten.",
    source: "tazKommentar",
  },
  {
    stance: "Kompromiss",
    who: "SPD (Sondierungspapier)",
    claim: "Schwelle bei 10 000 statt 3000 Wohnungen; Genossenschaften und Neubauten ab 2021 ausgenommen. Gleichzeitig 100 000 neue Baugenehmigungen.",
    source: "tagesspiegel",
  },
  {
    stance: "Skeptisch",
    who: "taz-Gastbeitrag, ZEIT-Analyse",
    claim: "Entschädigung könnte vor Gericht viel teurer werden; Geld fehlt dann für Neubau. Der Wohnungsmangel sinke nur durch massiven Neubau.",
    source: "tazKosten",
  },
  {
    stance: "Dagegen",
    who: "Katherina Reiche (CDU), Bundeswirtschaftsministerin, 03.10.2026",
    claim: "Lehnt Enteignung grundsätzlich ab und warnt vor wirtschaftlichen und politischen Folgen (Aussage zitiert im ARD-Magazin Monitor).",
    source: "monitor",
  },
] as const;

export type ClaimKind = "fakt" | "schaetzung" | "position";

export const argumentCheck: { text: string; kind: ClaimKind; note: string; source: string }[] = [
  { text: "85 % der Berlinerinnen und Berliner wohnen zur Miete.", kind: "fakt", note: "Statistische Angabe, in der SZ berichtet.", source: "sz" },
  { text: "In Berlin fehlen rund 58 500 Wohnungen.", kind: "schaetzung", note: "Modellrechnung eines Instituts (Pestel-Bau-Monitor 2026) – Methode prüfen.", source: "kurier" },
  { text: "Die Entschädigung kostet zwischen 8 und 36 Milliarden Euro.", kind: "schaetzung", note: "Spannweite verschiedener Studien; kein Präzedenzfall.", source: "zeit" },
  { text: "Die Vergesellschaftung bricht die Macht der Immobilienkonzerne.", kind: "position", note: "Politische Bewertung aus einem Kommentar.", source: "tazKommentar" },
  { text: "Vonovia besitzt in Berlin rund 130 000 Wohnungen.", kind: "fakt", note: "Angabe im Tagesspiegel; Unternehmensberichte zum Abgleich nutzen.", source: "tagesspiegel" },
];
