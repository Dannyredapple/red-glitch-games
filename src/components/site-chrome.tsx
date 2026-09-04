import { Link } from "@tanstack/react-router";
import logo from "@/assets/redapple-logo.png";

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/juegos", label: "Juegos" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/30 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Logo pixel art de RedApple Studios" width={36} height={36} className="pixelated h-9 w-9" />
          <span className="font-pixel text-[11px] uppercase tracking-widest text-foreground">
            RedApple<span className="text-primary"> Studios</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary glow-text border-primary" }}
              className="border border-transparent px-3 py-2 font-pixel text-[9px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#contacto"
            className="border border-transparent px-3 py-2 font-pixel text-[9px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/30 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center">
        <span className="font-pixel text-[10px] uppercase tracking-widest text-primary/80">
          RedApple Studios
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          Juegos 2D hechos a mano, píxel por píxel. © {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export function Marquee({ text }: { text: string }) {
  const item = ` ${text} `;
  return (
    <div className="overflow-hidden border-y border-primary/30 bg-primary/5 py-2">
      <div className="animate-marquee flex w-max font-pixel text-[9px] uppercase tracking-[0.3em] text-primary/70">
        {Array.from({ length: 2 }).map((_, i) => (
          <span key={i} className="flex shrink-0">
            {Array.from({ length: 6 }).map((__, j) => (
              <span key={j} className="px-6">
                {item}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
