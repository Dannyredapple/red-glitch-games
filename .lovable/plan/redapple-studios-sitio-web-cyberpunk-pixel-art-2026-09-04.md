# RedApple Studios — sitio web cyberpunk / pixel art

Sitio del estudio indie con estética cyberpunk retro: negros profundos, acentos rojo neón, tipografía pixel y UI retro-futurista.

## Páginas

- `/` — Página principal
  - **Hero**: logo grande centrado de una manzana roja en pixel art, con glitch cyberpunk y parpadeo de neón (animaciones CSS: desplazamiento RGB, scanlines, pulso de brillo). Texto breve de bienvenida + CTA hacia los juegos.
  - **Acerca del estudio**: párrafo corto sobre la historia y el enfoque en juegos 2D y pixel art, en un panel tipo "terminal" con borde neón.
  - **Juegos**: rejilla de tarjetas, una por juego individual (sin géneros), cada una enlaza a su propia página.
  - **Contacto y comunidad**: formulario limpio (nombre, email, mensaje) + botones grandes e interactivos a Twitch, Discord e itch.io con íconos pixel y efecto hover neón/glitch.
- `/juegos` — Listado con una pestaña/espacio dedicado por juego.
- `/juegos/$slug` — Plantilla de juego jugable en navegador:
  - Contenedor grande y central con `iframe` (marco tipo arcade, botón de pantalla completa).
  - Sección **Descripción**.
  - Sección **Cómo jugar** con controles (teclas dibujadas estilo pixel) y mecánicas.
  - Metadatos: estado, plataforma, enlace a itch.io.

Se incluyen 2–3 juegos de ejemplo con datos ficticios y un iframe de marcador de posición, listos para reemplazar por juegos reales.

## Diseño

- Tokens en `src/styles.css`: fondo casi negro, rojo neón como `--primary`, superficie carbón, borde rojo tenue, sombras/glow neón y gradiente rojo.
- Fuentes vía `<link>` en `__root.tsx`: "Press Start 2P" para títulos/UI y una sans legible para el cuerpo.
- Detalles: rejilla CRT sutil, scanlines, cursores/bordes en píxeles, botones con desplazamiento sólido al hacer clic.
- Logo de la manzana pixel art generado como imagen y usado en el hero y el favicon visual.

## Notas técnicas

- Rutas TanStack: `src/routes/index.tsx` (reemplaza el placeholder), `juegos.index.tsx`, `juegos.$slug.tsx`, cada una con su propio `head()` (título, descripción, og).
- Datos de juegos en un módulo local `src/data/games.ts` (sin backend).
- Formulario de contacto: validación en cliente y confirmación con toast (sonner). Sin envío real de correo.
- Componentes reutilizables: `PixelButton`, `NeonPanel`, `GlitchTitle`, `GameFrame`, `SocialButtons`.

## Fuera de alcance (por ahora)

- Backend/base de datos para guardar los mensajes del formulario o subir juegos. Se puede añadir después con Lovable Cloud.
