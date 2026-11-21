import { SharedSlot } from "@/components/shared-editor";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Camera, FileText, Map, Mic, Video } from "lucide-react";
import { getSource, imageCredits, sourceNumber, type ImageKey } from "@/content/weisse-nacht";
import { cn } from "@/lib/utils";

import holz from "@/assets/holztransport-1947.jpg.asset.json";
import plaza from "@/assets/notunterkunft-plaza-1947.jpg.asset.json";
import bett from "@/assets/winter-frau-kind-1947.jpg.asset.json";
import platz1937 from "@/assets/bluecherplatz-1937.jpg.asset.json";
import platz2011 from "@/assets/bluecherplatz-2011.jpg.asset.json";
import agb from "@/assets/agb-2020.jpg.asset.json";

export const imageUrls: Record<ImageKey, string> = {
  holz: holz.url,
  plaza: plaza.url,
  bett: bett.url,
  platz1937: platz1937.url,
  platz2011: platz2011.url,
  agb: agb.url,
};

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-visible={visible} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

/** Nummerierter Verweis auf die Quellenliste, z. B. [3] oder [1: Verlagstext]. */
export function Ref({ id, note }: { id: string; note?: string }) {
  const n = sourceNumber(id);
  const s = getSource(id);
  if (!n || !s) return null;
  return (
    <a href={`#q${n}`} className="ref" title={`${s.label}${s.date ? `, ${s.date}` : ""}`}>
      [{n}
      {note ? `: ${note}` : ""}]
    </a>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow mb-6 text-primary", className)}>{children}</p>;
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("mb-10 max-w-4xl text-[clamp(2.5rem,5.6vw,4.8rem)] leading-[1.06] tracking-[-0.04em]", className)}>
      {children}
    </h2>
  );
}

/** Gegenwartsfotos bleiben farbig, Archivbilder werden kalt und grau. */
const todayImages = new Set<ImageKey>(["platz2011", "agb"]);

export function ArchiveFigure({ k, className, imgClassName }: { k: ImageKey; className?: string; imgClassName?: string }) {
  const c = imageCredits[k];
  return (
    <figure className={className}>
      <img src={imageUrls[k]} alt={c.alt} loading="lazy" className={cn("w-full bg-muted object-cover", !todayImages.has(k) && "archive-img", imgClassName)} />
      <figcaption className="meta mt-3 text-muted-foreground">
        <span className="text-foreground">{c.caption}</span> {c.credit} ·{" "}
        <a href={c.page} target="_blank" rel="noreferrer" className="underline">
          Bildquelle
        </a>{" "}
        ·{" "}
        <a href={c.licenseUrl} target="_blank" rel="noreferrer" className="underline">
          {c.license}
        </a>
        . Für das Web unverändert übernommen.
      </figcaption>
    </figure>
  );
}

const mediaIcons = { foto: Camera, video: Video, archiv: FileText, karte: Map };

export function MediaPlaceholder({
  kind,
  title,
  hint,
  aspect = "aspect-video",
  className,
  tone = "light",
}: {
  kind: keyof typeof mediaIcons;
  title: string;
  hint: string;
  aspect?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const Icon = mediaIcons[kind];
  const label = { foto: "Eigenes Foto", video: "Eigenes Video", archiv: "Historisches Dokument", karte: "Karte" }[kind];
  return (
    <figure className={className}>
      <SharedSlot kind={kind === "video" ? "video" : "img"} title={title}><div
        role="img"
        aria-label={`Platzhalter: ${title}`}
        className={cn(
          "grain relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-night-border bg-placeholder p-6 text-center text-placeholder-foreground",
          aspect,
        )}
      >
        <Icon className="h-7 w-7 text-safelight" aria-hidden />
        <span className="eyebrow text-safelight">Platzhalter · {label}</span>
        <span className="max-w-sm font-display text-lg leading-snug">{title}</span>
      </div></SharedSlot>
      <figcaption className={cn("meta mt-3", tone === "dark" ? "text-frost-muted" : "text-muted-foreground")}>
        {hint} <span className="text-safelight">[Nachweis, Datum und Alternativtext ergänzen]</span>
      </figcaption>
    </figure>
  );
}

export function AudioPlaceholder({
  title,
  hint,
  transcript,
  tone = "light",
}: {
  title: string;
  hint: string;
  transcript: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("border-t pt-6", tone === "dark" ? "border-frost-border" : "border-border")}>
      <div className="flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dashed border-safelight text-safelight">
          <Mic className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="eyebrow text-safelight">Platzhalter · Eigene Tonaufnahme</p>
          <p className="font-display text-xl leading-snug">{title}</p>
        </div>
      </div>
      <SharedSlot kind="audio" title={title} />
      <div className="mt-5 flex h-8 items-end gap-[3px]" aria-hidden>
        {Array.from({ length: 56 }).map((_, i) => (
          <span
            key={i}
            className={cn("w-full", tone === "dark" ? "bg-frost-border" : "bg-border")}
            style={{ height: `${Math.round(18 + Math.abs(Math.sin(i * 1.7) * 82))}%` }}
          />
        ))}
      </div>
      <p className={cn("meta mt-3", tone === "dark" ? "text-frost-muted" : "text-muted-foreground")}>{hint}</p>
      <details className={cn("mt-3 border-t", tone === "dark" ? "border-frost-border" : "border-border")}>
        <summary className="meta cursor-pointer py-3">Textalternative</summary>
        <p className={cn("pb-3 text-[0.95rem]", tone === "dark" ? "text-frost-muted" : "text-muted-foreground")}>
          {transcript}
        </p>
      </details>
    </div>
  );
}

export function QuotePlaceholder({ hint }: { hint: string }) {
  return (
    <blockquote className="my-10 border-l-2 border-primary py-1 pl-6">
      <p className="font-display text-2xl italic leading-snug text-muted-foreground md:text-3xl">
        «Hier ein kurzes, wörtliches Zitat aus eurer Ausgabe einsetzen.»
      </p>
      <footer className="meta mt-3 text-muted-foreground">
        {hint} · <span className="text-primary">[Seitenzahl der verwendeten Ausgabe angeben]</span>
      </footer>
    </blockquote>
  );
}
