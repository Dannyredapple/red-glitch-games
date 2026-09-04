import { useRef, useState } from "react";
import { PixelButton } from "@/components/pixel-ui";

export function GameFrame({
  title,
  embedUrl,
  cover,
}: {
  title: string;
  embedUrl: string;
  cover: string;
}) {
  const [started, setStarted] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapRef}
      className="scanlines relative aspect-video w-full overflow-hidden border-2 border-primary/60 bg-black shadow-[0_0_60px_-18px_var(--color-primary)]"
    >
      {started ? (
        <iframe
          src={embedUrl}
          title={`${title} — juego en el navegador`}
          className="h-full w-full border-0"
          allow="autoplay; fullscreen; gamepad"
        />
      ) : (
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-6"
          aria-label={`Iniciar ${title}`}
        >
          <img
            src={cover}
            alt={`Captura pixel art de ${title}`}
            loading="lazy"
            width={1024}
            height={576}
            className="pixelated absolute inset-0 h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-60"
          />
          <span className="animate-flicker relative font-pixel text-sm uppercase tracking-widest text-primary glow-text sm:text-lg">
            ▶ Press Start
          </span>
          <span className="relative font-mono text-xs text-muted-foreground">
            Cargar {title} en esta ventana
          </span>
        </button>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-primary/40 bg-background/85 px-3 py-2">
        <span className="font-pixel text-[8px] uppercase tracking-widest text-primary">
          ● {title}
        </span>
        <span className="pointer-events-auto">
          <PixelButton
            type="button"
            className="px-3 py-1 text-[8px] shadow-none"
            onClick={() => wrapRef.current?.requestFullscreen?.()}
          >
            Pantalla completa
          </PixelButton>
        </span>
      </div>
    </div>
  );
}
