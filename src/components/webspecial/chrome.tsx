import { EditableText, SharedMedia } from "@/components/shared-editor";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { stations } from "@/content/weisse-nacht";
import { cn } from "@/lib/utils";
import { imageUrls } from "./primitives";
export function Topbar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className="sticky top-0 z-50 border-b border-night-border bg-night text-night-foreground">
      <a href="#inhalt" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-card focus:p-2 focus:text-foreground"><EditableText id="src_components_webspecial_chrome_tsx_902" value={"Zum Inhalt"} /></a>
      <div className="flex h-[72px] items-center justify-between gap-6 px-[4%]">
        <a href="#top" className="flex items-center gap-3 font-sans text-[0.95rem] font-semibold tracking-[0.1em] no-underline"><EditableText id="src_components_webspecial_chrome_tsx_1142" value={"K"} /><span className="h-5 border-l border-night-muted" aria-hidden /><EditableText id="src_components_webspecial_chrome_tsx_1218" value={"DIE GEFALLENE K\xD6NIGIN"} /><small className="hidden text-[0.65rem] font-normal tracking-normal text-night-muted md:inline"><EditableText id="src_components_webspecial_chrome_tsx_1357" value={"Nach Anne Sterns \xABDie wei\xDFe Nacht\xBB"} /></small>
        </a>
        <nav aria-label="Kapitel" className="hidden gap-6 font-sans text-xs lg:flex">
          {stations.slice(0, 5).map(s => <a key={s.id} href={`#${s.id}`} className="hover:underline">
              <EditableText id="src_components_webspecial_chrome_tsx_1655" value={s.short} />
            </a>)}
        </nav>
        <a href="#quellen" className="font-sans text-xs text-ice hover:underline"><EditableText id="src_components_webspecial_chrome_tsx_1793" value={"Quellen \u2197"} /></a>
      </div>
      <div className="h-[2px] origin-left bg-safelight" style={{
      transform: `scaleX(${progress})`
    }} aria-hidden />
    </header>;
}

/** Im Browser erzeugte Klangkulisse: Wind aus gefiltertem Rauschen und zwei Auslöser-Klicks. */
function useWinterSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);
  const [on, setOn] = useState(false);
  const start = () => {
    const ctx = ctxRef.current ?? new AudioContext();
    ctxRef.current = ctx;
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;
    const band = ctx.createBiquadFilter();
    band.type = "bandpass";
    band.frequency.value = 420;
    band.Q.value = 0.7;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 2.5);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.12;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 260;
    lfo.connect(lfoGain).connect(band.frequency);
    noise.connect(band).connect(gain).connect(ctx.destination);
    noise.start();
    lfo.start();
    const click = (t: number) => {
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const hp = ctx.createBiquadFilter();
      hp.type = "highpass";
      hp.frequency.value = 2200;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.6, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      src.connect(hp).connect(g).connect(ctx.destination);
      src.start(t, Math.random(), 0.08);
    };
    click(ctx.currentTime + 1.6);
    click(ctx.currentTime + 1.72);
    stopRef.current = () => {
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
      setTimeout(() => {
        noise.stop();
        lfo.stop();
      }, 700);
    };
    setOn(true);
  };
  const stop = () => {
    stopRef.current?.();
    stopRef.current = null;
    setOn(false);
  };
  useEffect(() => () => stopRef.current?.(), []);
  return {
    on,
    toggle: () => on ? stop() : start()
  };
}
export function SoundToggle({
  className
}: {
  className?: string;
}) {
  const sound = useWinterSound();
  return <button type="button" onClick={sound.toggle} aria-pressed={sound.on} className={cn("inline-flex items-center gap-3 border border-current px-5 py-3 font-sans text-xs transition hover:bg-foreground hover:text-background", className)}>
      <EditableText id="src_components_webspecial_chrome_tsx_4623" value={sound.on ? <VolumeX className="h-4 w-4" aria-hidden /> : <Volume2 className="h-4 w-4" aria-hidden />} />
      <EditableText id="src_components_webspecial_chrome_tsx_4732" value={sound.on ? "Klangkulisse stoppen" : "Klangkulisse: Wind & Auslöser"} />
    </button>;
}
export function Hero() {
  return <section id="top" className="grain relative min-h-[calc(100svh-74px)] md:h-[calc(100svh-74px)] md:min-h-[640px] md:max-h-[1100px] overflow-hidden bg-night text-night-foreground">
      <SharedMedia src={imageUrls.holz} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale contrast-125" contentId="src_components_webspecial_chrome_tsx_5049" kind="img" />
      <div className="hero-shade absolute inset-0" aria-hidden />
      <div className="fog-layer" aria-hidden />
      <div className="snow-layer s1" aria-hidden />
      <div className="snow-layer s2" aria-hidden />
      <div className="snow-layer s3" aria-hidden />

      <div className="relative z-10 px-[8vw] pb-52 pt-[8vh]">
        <p className="eyebrow text-night-muted animate-develop"><EditableText id="src_components_webspecial_chrome_tsx_5622" value={"Berlin, 1946 "} /><span className="mx-3 text-safelight"><EditableText id="src_components_webspecial_chrome_tsx_5684" value={"\u2022"} /></span><EditableText id="src_components_webspecial_chrome_tsx_5692" value={" Nach Anne Sterns Kriminalroman"} /></p>
        <h1 aria-label="Die gefallene Königin" className="animate-flicker relative mb-4 mt-8 w-fit text-[clamp(2.6rem,10.5vw,10rem)] font-normal uppercase leading-[0.95] tracking-[0.03em]">
          <span aria-hidden><EditableText id="src_components_webspecial_chrome_tsx_5984" value={"Die "} /><span className="whitespace-nowrap"><EditableText id="src_components_webspecial_chrome_tsx_6037" value={"gefa"} /><span className="sunk-letter"><EditableText id="src_components_webspecial_chrome_tsx_6071" value={"l"} /></span><EditableText id="src_components_webspecial_chrome_tsx_6079" value={"lene"} /></span>
            <br />
            <span className="whitespace-nowrap"><EditableText id="src_components_webspecial_chrome_tsx_6158" value={"K\xF6ni"} /><span className="sunk-letter"><EditableText id="src_components_webspecial_chrome_tsx_6192" value={"g"} /></span><EditableText id="src_components_webspecial_chrome_tsx_6200" value={"i"} /><span className="fallen-letter"><EditableText id="src_components_webspecial_chrome_tsx_6233" value={"n"} /></span></span>
          </span>
          {/* Riss quer durch den Titel */}
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full text-night">
            <polyline points="57,-2 55,14 59,24 54,37 58,49 52,61 56,74 50,88 53,102" fill="none" stroke="currentColor" strokeWidth="4" vectorEffect="non-scaling-stroke" />
            <polyline points="58,49 66,53 71,51" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </h1>
        <p className="animate-develop max-w-3xl font-display text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.15] tracking-[-0.025em]"><EditableText id="src_components_webspecial_chrome_tsx_7156" value={"\u2026aber immer noch"} /><br /><EditableText id="src_components_webspecial_chrome_tsx_7200" value={"dieselbe."} /></p>
        <p className="animate-develop mt-4 max-w-2xl font-display text-[clamp(1.1rem,1.8vw,1.5rem)] italic leading-[1.3] text-night-muted"><EditableText id="src_components_webspecial_chrome_tsx_7373" value={"Wer erz\xE4hlt vom Leid der Frauen?"} /></p>
        <p className="mt-6 max-w-lg text-night-muted"><EditableText id="src_components_webspecial_chrome_tsx_7484" value={"Berlin war einmal die K\xF6nigin unter den St\xE4dten. 1946 ist sie geteilt, zerbombt, hungrig \u2013 gefallen, aber immer noch dieselbe. Eine Tote liegt mit gefalteten H\xE4nden in einer Ruine. Eine Fotografin dr\xFCckt ab."} /><br /><EditableText id="src_components_webspecial_chrome_tsx_7729" value={"Was den Frauen dieser Stadt widerfahren ist, erz\xE4hlt kaum jemand."} /></p>
        <a href="#fall" className="mt-8 inline-flex items-center gap-12 border border-night-foreground/60 px-6 py-4 font-sans text-xs text-night-foreground transition hover:bg-night-foreground hover:text-night"><EditableText id="src_components_webspecial_chrome_tsx_8059" value={"Die Akte \xF6ffnen "} /><span aria-hidden><EditableText id="src_components_webspecial_chrome_tsx_8104" value={"\u2193"} /></span>
        </a>
      </div>

      <div className="absolute inset-x-[4%] bottom-24 z-10 flex justify-between gap-4 border-t border-night-border py-5 font-sans text-[0.62rem] uppercase tracking-[0.1em] text-night-muted">
        <span><EditableText id="src_components_webspecial_chrome_tsx_8345" value={"01 / 06 \xA0 Eine Frage des Blicks"} /></span>
        <span className="text-right"><EditableText id="src_components_webspecial_chrome_tsx_8426" value={"Hintergrund: Bundesarchiv, Bild 183-2006-1106-500 \xB7 Schnee: Animation"} /></span>
      </div>
    </section>;
}
