import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/redapple-logo.png";
import { games } from "@/data/games";
import { GlitchTitle, NeonPanel, PixelLink } from "@/components/pixel-ui";
import { ContactForm } from "@/components/contact-form";
import { SocialButtons } from "@/components/social-buttons";
import { Marquee } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RedApple Studios — Estudio indie de juegos 2D en pixel art" },
      {
        name: "description",
        content:
          "RedApple Studios es un estudio indie que crea juegos 2D en pixel art con estética cyberpunk. Juega en el navegador y únete a la comunidad.",
      },
      { property: "og:title", content: "RedApple Studios — Juegos 2D en pixel art" },
      {
        property: "og:description",
        content:
          "Estudio indie de juegos 2D en pixel art y estética cyberpunk. Juega gratis en el navegador.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]"
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <img
            src={logo}
            alt="Logo pixel art de una manzana roja brillante — RedApple Studios"
            width={816}
            height={816}
            className="animate-neon-pulse pixelated h-48 w-48 sm:h-64 sm:w-64"
          />
          <GlitchTitle as="h1" className="mt-8 text-2xl sm:text-4xl">
            REDAPPLE STUDIOS
          </GlitchTitle>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Bienvenido al búnker. Somos un estudio indie que fabrica juegos 2D en pixel art con
            neón, ruido de CRT y mucha nostalgia arcade. Enciende la máquina y juega directo en tu
            navegador.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PixelLink to="/juegos">Ver los juegos</PixelLink>
          </div>
        </div>
      </section>

      <Marquee text="◆ Pixel art hecho a mano ◆ Juegos 2D ◆ Jugables en el navegador" />

      {/* ACERCA */}
      <section className="mx-auto max-w-4xl px-4 py-20" id="estudio">
        <NeonPanel label="/ acerca del estudio" className="p-6 sm:p-10">
          <GlitchTitle className="text-base sm:text-xl">EL ESTUDIO</GlitchTitle>
          <p className="mt-6 font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            RedApple Studios nació en 2024 en un departamento con demasiadas pantallas: tres
            amigos que se conocieron en una game jam y decidieron no volver a separarse. Nuestro
            primer prototipo, un puzzle de circuitos hecho en 48 horas, se convirtió en{" "}
            <span className="text-primary">Apple Protocol</span> y nos dio la excusa perfecta para
            fundar el estudio.
          </p>
          <p className="mt-4 font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
            Nos enfocamos en juegos 2D y pixel art dibujado cuadro a cuadro: mundos oscuros
            iluminados por neón, controles precisos y partidas que caben en un rato libre. Nada de
            motores gigantes ni mundos abiertos — solo mecánicas afiladas, sprites con carácter y
            builds que se pueden jugar en el navegador sin instalar nada.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-primary/30 pt-6 sm:grid-cols-4">
            {[
              ["2024", "Fundación"],
              ["3", "Devs"],
              [`${games.length}`, "Juegos"],
              ["2D", "Siempre"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-pixel text-lg text-primary glow-text">{value}</dt>
                <dd className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </NeonPanel>
      </section>

      {/* JUEGOS */}
      <section className="mx-auto max-w-6xl px-4 py-10" id="juegos">
        <GlitchTitle className="text-base sm:text-xl">NUESTROS JUEGOS</GlitchTitle>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          Cada juego tiene su propio espacio con la build jugable, su descripción y los controles.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <Link
              key={game.slug}
              to="/juegos/$slug"
              params={{ slug: game.slug }}
              className="group block border-2 border-primary/40 bg-card/60 transition-all duration-100 hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_36px_-10px_var(--color-primary)]"
            >
              <div className="scanlines relative aspect-video overflow-hidden border-b border-primary/40">
                <img
                  src={game.cover}
                  alt={`Captura pixel art del juego ${game.title}`}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="pixelated h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <h3 className="font-pixel text-[11px] uppercase text-foreground group-hover:text-primary">
                  {game.title}
                </h3>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{game.tagline}</p>
                <p className="mt-4 font-pixel text-[8px] uppercase tracking-widest text-primary">
                  {game.status} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="mx-auto max-w-4xl px-4 py-20" id="contacto">
        <GlitchTitle className="text-base sm:text-xl">CONTACTO &amp; COMUNIDAD</GlitchTitle>
        <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground">
          ¿Prensa, colaboraciones o solo quieres saludar? Escríbenos.
        </p>
        <NeonPanel className="mt-10 p-6 sm:p-8">
          <ContactForm />
        </NeonPanel>
        <div className="mt-10">
          <h3 className="mb-5 font-pixel text-[10px] uppercase tracking-widest text-primary">
            Únete a la comunidad
          </h3>
          <SocialButtons />
        </div>
      </section>
    </div>
  );
}
