import neonDrifter from "@/assets/game-neon-drifter.jpg";
import coreDump from "@/assets/game-core-dump.jpg";
import appleProtocol from "@/assets/game-apple-protocol.jpg";

export type Control = { key: string; action: string };

export type Game = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: string;
  cover: string;
  embedUrl: string;
  description: string[];
  howToPlay: string[];
  controls: Control[];
  itchUrl: string;
};

export const games: Game[] = [
  {
    slug: "neon-drifter",
    title: "Neon Drifter",
    tagline: "Plataformas 2D en los tejados de Neo-Valparaíso",
    year: "2026",
    status: "Jugable en el navegador",
    cover: neonDrifter,
    embedUrl: "https://itch.io/embed-upload/0?color=000000",
    description: [
      "Neon Drifter es un plataformas de precisión ambientado en los tejados saturados de lluvia ácida de Neo-Valparaíso. Corres como mensajera de datos: cada entrega es un nivel cronometrado donde el impulso lo es todo.",
      "Construido a mano, píxel por píxel, con animación a 12 fps y una banda sonora synthwave original. Sin vidas, sin castigo: reinicias al instante y vuelves a intentarlo hasta clavar la ruta perfecta.",
    ],
    howToPlay: [
      "Encadena carreras por pared y deslizamientos para conservar velocidad: el cronómetro solo se detiene en la antena de entrega.",
      "El dash de neón se recarga al tocar suelo o al rebotar en un dron; úsalo para cruzar huecos imposibles.",
      "Los chips ocultos de cada nivel desbloquean rutas alternativas y skins retro.",
    ],
    controls: [
      { key: "← →", action: "Moverse" },
      { key: "Z", action: "Saltar / doble salto" },
      { key: "X", action: "Dash de neón" },
      { key: "↓", action: "Deslizarse" },
      { key: "R", action: "Reiniciar nivel" },
    ],
    itchUrl: "https://itch.io",
  },
  {
    slug: "core-dump",
    title: "Core Dump",
    tagline: "Roguelike cenital dentro de un servidor corrupto",
    year: "2025",
    status: "Acceso anticipado",
    cover: coreDump,
    embedUrl: "https://itch.io/embed-upload/0?color=000000",
    description: [
      "Core Dump te encierra en las entrañas de un servidor abandonado. Cada partida genera un mapa nuevo de pasillos, terminales infectadas y procesos hostiles que aprenden de tu forma de jugar.",
      "Un roguelike compacto: partidas de 20 minutos, permadeath y mejoras que se escriben como líneas de código en tu propio kernel.",
    ],
    howToPlay: [
      "Hackea las terminales rojas para revelar la planta y desactivar torretas antes de entrar en combate.",
      "Cada mejora ocupa memoria: si superas tu RAM disponible, los procesos enemigos se vuelven más rápidos.",
      "Un jefe custodia el núcleo de cada sector; derrótalo para conservar una mejora en la siguiente partida.",
    ],
    controls: [
      { key: "W A S D", action: "Moverse" },
      { key: "Ratón", action: "Apuntar" },
      { key: "Clic izq.", action: "Disparar" },
      { key: "E", action: "Interactuar / hackear" },
      { key: "Espacio", action: "Esquivar" },
    ],
    itchUrl: "https://itch.io",
  },
  {
    slug: "apple-protocol",
    title: "Apple Protocol",
    tagline: "Puzzle arcade de circuitos en una rejilla infinita",
    year: "2024",
    status: "Jugable en el navegador",
    cover: appleProtocol,
    embedUrl: "https://itch.io/embed-upload/0?color=000000",
    description: [
      "Apple Protocol es un puzzle de ritmo rápido: conectas bloques de circuito para dirigir la corriente hacia el núcleo antes de que la rejilla se sature.",
      "Nuestro primer lanzamiento como estudio y todavía nuestra obsesión: reglas simples, techo de habilidad altísimo y una tabla de puntuaciones diaria.",
    ],
    howToPlay: [
      "Rota y coloca los bloques para formar un camino continuo desde la fuente roja hasta el núcleo.",
      "Cada circuito completado limpia la fila y suma multiplicador; encadena varios sin fallar para entrar en OVERCLOCK.",
      "La rejilla acelera cada 60 segundos: guarda los bloques comodín para las fases finales.",
    ],
    controls: [
      { key: "← →", action: "Mover pieza" },
      { key: "↑", action: "Rotar" },
      { key: "↓", action: "Caída rápida" },
      { key: "Espacio", action: "Usar comodín" },
      { key: "P", action: "Pausa" },
    ],
    itchUrl: "https://itch.io",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
