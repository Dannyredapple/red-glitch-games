import { createFileRoute, notFound } from "@tanstack/react-router";
import { getGame } from "@/data/games";
import { GameFrame } from "@/components/game-frame";
import { GlitchTitle, NeonPanel, PixelAnchor, PixelLink } from "@/components/pixel-ui";

export const Route = createFileRoute("/juegos/$slug")({
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Juego no disponible — RedApple Studios" }, { name: "robots", content: "noindex" }],
      };
    }
    const { game } = loaderData;
    return {
      meta: [
        { title: `${game.title} — RedApple Studios` },
        { name: "description", content: game.tagline },
        { property: "og:title", content: `${game.title} — RedApple Studios` },
        { property: "og:description", content: game.tagline },
      ],
    };
  },
  notFoundComponent: GameNotFound,
  component: GamePage,
});

function GameNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <GlitchTitle as="h1" className="text-lg">
        JUEGO NO ENCONTRADO
      </GlitchTitle>
      <p className="mt-5 font-mono text-sm text-muted-foreground">
        Ese cartucho no está en el estante.
      </p>
      <div className="mt-8 flex justify-center">
        <PixelLink to="/juegos">Volver al catálogo</PixelLink>
      </div>
    </div>
  );
}

function GamePage() {
  const { game } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-pixel text-[8px] uppercase tracking-widest text-primary/70">
            {game.year} · {game.status}
          </span>
          <GlitchTitle as="h1" className="mt-3 text-xl sm:text-3xl">
            {game.title}
          </GlitchTitle>
          <p className="mt-4 font-mono text-sm text-muted-foreground">{game.tagline}</p>
        </div>
        <PixelLink to="/juegos" className="px-4 py-2 text-[9px]">
          ← Catálogo
        </PixelLink>
      </div>

      <div className="mt-10">
        <GameFrame title={game.title} embedUrl={game.embedUrl} cover={game.cover} />
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <NeonPanel label="/ descripción" className="p-6 sm:p-8">
          <h2 className="font-pixel text-[11px] uppercase text-primary">Descripción</h2>
          <div className="mt-5 space-y-4">
            {game.description.map((p) => (
              <p key={p} className="font-mono text-sm leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <PixelAnchor href={game.itchUrl} target="_blank" rel="noreferrer noopener">
              Ver en itch.io
            </PixelAnchor>
          </div>
        </NeonPanel>

        <NeonPanel label="/ cómo jugar" className="p-6 sm:p-8">
          <h2 className="font-pixel text-[11px] uppercase text-primary">Cómo jugar</h2>

          <h3 className="mt-6 font-pixel text-[9px] uppercase tracking-widest text-muted-foreground">
            Controles
          </h3>
          <ul className="mt-4 space-y-2">
            {game.controls.map((c) => (
              <li key={c.key} className="flex items-center gap-4">
                <kbd className="min-w-24 border-2 border-primary/60 bg-surface px-3 py-2 text-center font-pixel text-[9px] uppercase text-primary shadow-[2px_2px_0_0_var(--color-primary)]">
                  {c.key}
                </kbd>
                <span className="font-mono text-sm text-muted-foreground">{c.action}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-pixel text-[9px] uppercase tracking-widest text-muted-foreground">
            Mecánicas
          </h3>
          <ul className="mt-4 space-y-3">
            {game.howToPlay.map((tip) => (
              <li key={tip} className="flex gap-3 font-mono text-sm text-muted-foreground">
                <span className="text-primary">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </NeonPanel>
      </div>
    </div>
  );
}
