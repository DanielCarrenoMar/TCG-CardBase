import TCGGameBoyBanner from "./_images/banner.png"

import FondoSeccion1 from "./_images/fondo-seccion-1.png";
import ImagenSeccion1 from "./_images/imagen-seccion-1.png";

import FondoSeccion2 from "./_images/fondo-seccion-2.png";
import ImagenSeccion2 from "./_images/imagen-seccion-2.png";

import FondoSeccion3 from "./_images/fondo-seccion-3.png";
import Imagen1Seccion3 from "./_images/imagen-1-seccion-3.png";
import Imagen2Seccion3 from "./_images/imagen-2-seccion-3.png";
import Imagen3Seccion3 from "./_images/imagen-3-seccion-3.png";

import FondoSeccion4 from "./_images/fondo-seccion-4.png";
import Imagen1Seccion4 from "./_images/imagen-1-seccion-4.png";
import Imagen2Seccion4 from "./_images/imagen-2-seccion-4.png";
import Imagen3Seccion4 from "./_images/imagen-3-seccion-4.png";
import Imagen4Seccion4 from "./_images/imagen-4-seccion-4.png";

export const BANNER = TCGGameBoyBanner;

import { pageLanguage } from '$lib/language/languajeHandler';

export const SECTIONS_TEXTS = {
  es: [
    {
      background: FondoSeccion1,
      image: ImagenSeccion1,
      title: "¿Qué es?",
      description: "El Pokémon Trading Card Game para Game Boy Color, lanzado en Japón en 1998 y en Occidente en 2000, fue el primer videojuego en adaptar fielmente la experiencia del popular Juego de Cartas Coleccionables Pokémon a una consola portátil. Desarrollado por Hudson Soft y publicado por Nintendo, este título no solo sirvió como una excelente introducción a las reglas del JCC para miles de jugadores, sino que también ofreció una forma innovadora y accesible de coleccionar cartas y participar en emocionantes duelos Pokémon, mucho antes de la era de las conexiones a internet generalizadas.",
    },
    {
      background: FondoSeccion2,
      image: ImagenSeccion2,
      title: "Acerca del Juego",
      description: "Pokémon TCG para Game Boy Color sumergía a los jugadores en una historia lineal donde, como jóvenes entrenadores, debían convertirse en un 'Maestro del JCC Pokémon'. Esto se lograba viajando a través de varios Clubes Pokémon para desafiar a los 'Maestros del Club' en intensos duelos de cartas. A medida que avanzabas, ganabas sobres de mejora y nuevas cartas, construyendo y mejorando tus mazos estratégicamente. El juego recreaba con precisión las reglas del JCC Pokémon físico de la época, permitiendo a los jugadores experimentar la emoción de las batallas con Pokémon, el uso estratégico de Energías y las tácticas de las cartas de Entrenador. Su objetivo principal era coleccionar las 8 Medallas del Gran Maestro y, finalmente, enfrentar a los Cuatro Grandes Maestros. Fue una herramienta educativa fantástica para el juego de cartas, enseñando sus complejidades a través de una aventura atractiva y fácil de seguir.",
    },
    {
      background: FondoSeccion3,
      title: "Modos de Juego",
      content:[
        {
          image: Imagen1Seccion3,
          title: "Modo Historia",
          description: "Sumérgete en una cautivadora narrativa de un solo jugador donde tu objetivo es convertirte en el mejor jugador de JCC Pokémon. Viaja por la Isla Gran Maestros, visitando diversos Clubes Pokémon, cada uno con su propio estilo y maestros especializados. Deberás derrotar a todos los líderes de club para obtener sus medallas y avanzar hacia el desafío final: los Cuatro Grandes y la legendaria carta 'Phantom' (fantasma), que representa el mayor desafío en el juego. Esta progresión lineal te introduce gradualmente a estrategias más complejas y mazos más desafiantes."
        },
        {
          image: Imagen2Seccion3,
          title: "Duelos Libres:",
          description: "Una vez que derrotabas a un líder de club o a otros personajes importantes, tenías la opción de volver a desafiarlos en duelos libres en cualquier momento. Este modo era invaluable para practicar contra mazos específicos, probar nuevas combinaciones de cartas en tu propio mazo o simplemente disfrutar de batallas sin la presión de la progresión de la historia. Era el campo de entrenamiento personal para afinar tus habilidades."
        },
        {
          image: Imagen3Seccion3,
          title: "Duelo con Amigos (Mediante Cable Link):",
          description: "Aunque la conectividad online no existía, el juego permitía a los jugadores enfrentarse a amigos usando el icónico Cable Link de Game Boy Color. Esta función convertía el juego en una experiencia social, permitiendo duelos uno a uno con mazos personalizados, llevando la competición del JCC Pokémon a cualquier lugar donde hubiera dos Game Boys y un cable. Era la forma principal de poner a prueba tus mazos contra un oponente humano."
        }
      ],
    },
    {
      background: FondoSeccion4,
      title: "Cartas y Personajes",
      content:[
        {
          image: Imagen1Seccion4,
          title: "Amplia Variedad de Cartas:",
          description: "El juego presentaba una extensa colección de cartas de las primeras expansiones del JCC Pokémon (Base Set, Jungle, Fossil y Gym Heroes/Challenge), recreadas con detalle en los gráficos pixelados de la Game Boy Color. Los jugadores obtenían cartas abriendo 'sobres' virtuales ganados en batallas o comprándolos con las Monedas Imakuni?, un dinero dentro del juego."
        },
        {
          image: Imagen2Seccion4,
          title: "Constructor de Mazos Intuitivo:",
          description: "El juego ofrecía un constructor de mazos funcional que permitía a los jugadores ensamblar sus propias estrategias. Podías elegir entre tus cartas coleccionadas, buscar por tipo, rareza o nombre, y guardar múltiples configuraciones de mazo. Esta característica era esencial para adaptar tu estrategia a los diferentes Maestros de Club y sus estilos de juego."
        },
        {
          image: Imagen3Seccion4,
          title: "Maestros de Club y Rivales:",
          description: "El juego presentaba un elenco memorable de personajes, incluyendo a los distintos Maestros de Club con sus propias personalidades y estrategias de mazo, así como rivales que te desafiaban a lo largo de tu viaje. Esto añadió una capa de profundidad y encanto a la experiencia del jugador."
        },
        {
          image: Imagen4Seccion4,
          title: "Profesor Oak y Ayudantes:",
          description: "Personajes icónicos como el Profesor Oak ofrecían consejos y guiaban al jugador a través de las mecánicas del juego, haciendo la curva de aprendizaje más suave y divertida."
        }
      ],
    }
  ],
  en: [
    {
      background: FondoSeccion1,
      image: ImagenSeccion1,
      title: "What is it?",
      description: "The Pokémon Trading Card Game for Game Boy Color, released in Japan in 1998 and in the West in 2000, was the first video game to faithfully adapt the experience of the popular Pokémon Trading Card Game to a handheld console. Developed by Hudson Soft and published by Nintendo, this title not only served as an excellent introduction to the TCG rules for thousands of players, but also offered an innovative and accessible way to collect cards and participate in exciting Pokémon duels, long before the era of widespread internet connections.",
    },
    {
      background: FondoSeccion2,
      image: ImagenSeccion2,
      title: "About the Game",
      description: "Pokémon TCG for Game Boy Color immersed players in a linear story where, as young trainers, they had to become a 'Pokémon TCG Master.' This was achieved by traveling through various Pokémon Clubs to challenge the 'Club Masters' in intense card duels. As you progressed, you earned booster packs and new cards, strategically building and improving your decks. The game accurately recreated the rules of the physical Pokémon TCG of the time, allowing players to experience the thrill of battles with Pokémon, the strategic use of Energy, and the tactics of Trainer cards. The main goal was to collect the 8 Grand Master Medals and, finally, face the Four Grand Masters. It was a fantastic educational tool for the card game, teaching its complexities through an engaging and easy-to-follow adventure.",
    },
    {
      background: FondoSeccion3,
      title: "Game Modes",
      content:[
        {
          image: Imagen1Seccion3,
          title: "Story Mode",
          description: "Immerse yourself in a captivating single-player narrative where your goal is to become the best Pokémon TCG player. Travel across the Grand Masters Island, visiting various Pokémon Clubs, each with its own style and specialized masters. You must defeat all club leaders to earn their badges and advance to the final challenge: the Four Grand Masters and the legendary 'Phantom' card, which represents the greatest challenge in the game. This linear progression gradually introduces you to more complex strategies and tougher decks."
        },
        {
          image: Imagen2Seccion3,
          title: "Free Duels:",
          description: "Once you defeated a club leader or other important characters, you had the option to challenge them again in free duels at any time. This mode was invaluable for practicing against specific decks, trying new card combinations in your own deck, or simply enjoying battles without the pressure of story progression. It was your personal training ground to hone your skills."
        },
        {
          image: Imagen3Seccion3,
          title: "Duel with Friends (via Link Cable):",
          description: "Although online connectivity did not exist, the game allowed players to face friends using the iconic Game Boy Color Link Cable. This feature made the game a social experience, allowing one-on-one duels with custom decks, bringing Pokémon TCG competition anywhere there were two Game Boys and a cable. It was the main way to test your decks against a human opponent."
        }
      ],
    },
    {
      background: FondoSeccion4,
      title: "Cards and Characters",
      content:[
        {
          image: Imagen1Seccion4,
          title: "Wide Variety of Cards:",
          description: "The game featured an extensive collection of cards from the first Pokémon TCG expansions (Base Set, Jungle, Fossil, and Gym Heroes/Challenge), recreated in detail with the pixel graphics of the Game Boy Color. Players obtained cards by opening virtual 'packs' won in battles or purchased with Imakuni? Coins, an in-game currency."
        },
        {
          image: Imagen2Seccion4,
          title: "Intuitive Deck Builder:",
          description: "The game offered a functional deck builder that allowed players to assemble their own strategies. You could choose from your collected cards, search by type, rarity, or name, and save multiple deck configurations. This feature was essential for adapting your strategy to the different Club Masters and their play styles."
        },
        {
          image: Imagen3Seccion4,
          title: "Club Masters and Rivals:",
          description: "The game featured a memorable cast of characters, including the various Club Masters with their own personalities and deck strategies, as well as rivals who challenged you throughout your journey. This added a layer of depth and charm to the player experience."
        },
        {
          image: Imagen4Seccion4,
          title: "Professor Oak and Assistants:",
          description: "Iconic characters like Professor Oak offered advice and guided the player through the game mechanics, making the learning curve smoother and more fun."
        }
      ],
    }
  ]
};

export const SECTIONS = SECTIONS_TEXTS[pageLanguage as 'es' | 'en'];