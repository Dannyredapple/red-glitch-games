const socials = [
  {
    name: "Twitch",
    handle: "/redapplestudios",
    url: "https://twitch.tv",
    blurb: "Dev streams en vivo",
    icon: (
      <svg viewBox="0 0 16 16" className="h-8 w-8" fill="currentColor" shapeRendering="crispEdges">
        <path d="M2 1h12v9l-3 3H8l-2 2H4v-2H2V1zm2 2v7h2v2l2-2h3l2-2V3H4zm4 1h1v4H8V4zm3 0h1v4h-1V4z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    handle: "/redapple",
    url: "https://discord.com",
    blurb: "Comunidad y playtests",
    icon: (
      <svg viewBox="0 0 16 16" className="h-8 w-8" fill="currentColor" shapeRendering="crispEdges">
        <path d="M3 2h10v1h1v1h1v8h-1v1h-2v-2H4v2H2v-1H1V4h1V3h1V2zm2 5h2v2H5V7zm4 0h2v2H9V7z" />
      </svg>
    ),
  },
  {
    name: "itch.io",
    handle: "/redapplestudios",
    url: "https://itch.io",
    blurb: "Descarga los juegos",
    icon: (
      <svg viewBox="0 0 16 16" className="h-8 w-8" fill="currentColor" shapeRendering="crispEdges">
        <path d="M1 3h14v3h-1v8H2V6H1V3zm3 5h2v2H4V8zm3 0h2v4H7V8zm3 0h2v2h-2V8z" />
      </svg>
    ),
  },
];

export function SocialButtons() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noreferrer noopener"
          className="group relative flex items-center gap-4 border-2 border-primary/50 bg-surface/60 p-4 text-left transition-all duration-100 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:shadow-[0_0_30px_-6px_var(--color-primary)]"
        >
          <span className="text-primary transition-transform duration-100 group-hover:scale-110">
            {s.icon}
          </span>
          <span className="min-w-0">
            <span className="block font-pixel text-[11px] uppercase text-foreground group-hover:glow-text">
              {s.name}
            </span>
            <span className="mt-1 block truncate text-xs text-muted-foreground">{s.blurb}</span>
            <span className="block truncate font-mono text-[11px] text-primary/80">{s.handle}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
