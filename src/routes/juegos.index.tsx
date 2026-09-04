import { createFileRoute, Link } from "@tanstack/react-router";
import { games } from "@/data/games";
import { GlitchTitle } from "@/components/pixel-ui";

export const Route = createFileRoute("/juegos/")({
  head: () => ({
    meta: [
      { title: "Juegos — RedApple Studios" },
      {
        name: "description",
        content:
          "Todos los juegos de RedApple Studios: plataformas, roguelike y puzzle en pixel art, jugables directamente en el navegador.",
      },
      { property: "og:title", content: "Juegos — RedApple Studios" },
      {
        property: "og:description",
        content: "Juegos 2D en pixel art jugables en el navegador, uno por uno.",
      },
    ],
  }),
  component: GamesIndex,
});

function GamesIndex() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <GlitchTitle as="h1" className="text-xl sm:text-3xl">
        SELECCIONA TU JUEGO
      </GlitchTitle>
      <p className="mt-5 max-w-2xl font-mono text-sm text-muted-foreground">
        Cada título tiene su propio espacio: build jugable en el navegador, descripción y cómo
        jugar.
      </p>

      <div className="mt-12 space-y-6">
        {games.map((game, i) => (
          <Link
            key={game.slug}
            to="/juegos/$slug"
            params={{ slug: game.slug }}
            className="group grid gap-0 border-2 border-primary/40 bg-card/50 transition-all duration-100 hover:border-primary hover:shadow-[0_0_40px_-12px_var(--color-primary)] sm:grid-cols-[280px_1fr]"
          >
            <div className="scanlines relative aspect-video overflow-hidden border-b border-primary/40 sm:border-b-0 sm:border-r">
              <img
                src={game.cover}
                alt={`Captura pixel art del juego ${game.title}`}
                loading="lazy"
                width={1024}
                height={576}
                className="pixelated h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="p-6">
              <span className="font-pixel text-[8px] uppercase tracking-widest text-primary/70">
                {String(i + 1).padStart(2, "0")} · {game.year}
              </span>
              <h2 className="mt-3 font-pixel text-xs uppercase text-foreground group-hover:text-primary group-hover:glow-text sm:text-sm">
                {game.title}
              </h2>
              <p className="mt-4 font-mono text-sm text-muted-foreground">{game.tagline}</p>
              <p className="mt-6 font-pixel text-[9px] uppercase tracking-widest text-primary">
                {game.status} →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
