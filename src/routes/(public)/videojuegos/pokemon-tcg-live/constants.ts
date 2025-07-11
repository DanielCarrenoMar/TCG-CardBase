import TCGLiveBanner from "./_images/banner.png"

import FondoSeccion1 from "./_images/fondo-seccion-1.png";
import ImagenSeccion1 from "./_images/imagen-seccion-1.png";

import FondoSeccion2 from "./_images/fondo-seccion-2.png";
import ImagenSeccion2 from "./_images/imagen-seccion-2.png";

import FondoSeccion3 from "./_images/fondo-seccion-3.png";
import Imagen1Seccion3 from "./_images/imagen-1-seccion-3.png";
import Imagen2Seccion3 from "./_images/imagen-2-seccion-3.png";
import Imagen3Seccion3 from "./_images/imagen-3-seccion-3.png";
import Imagen4Seccion3 from "./_images/imagen-4-seccion-3.png";
import Imagen5Seccion3 from "./_images/imagen-5-seccion-3.png";

import FondoSeccion4 from "./_images/fondo-seccion-4.png";
import Imagen1Seccion4 from "./_images/imagen-1-seccion-4.png";
import Imagen2Seccion4 from "./_images/imagen-2-seccion-4.png";

export const BANNER = TCGLiveBanner;

import { pageLanguage } from '$lib/language/languajeHandler';

export const SECTIONS_TEXTS = {
  es: [
    {
      background: FondoSeccion1,
      image: ImagenSeccion1,
      title: "¿Qué es?",
      description: "Pokémon TCG Live es la adaptación digital oficial del aclamado TCG de Pokémon. Este título te sumerge en el estratégico y emocionante mundo de los duelos de cartas, permitiéndote coleccionar miles de cartas digitales, construir mazos poderosos y competir con entrenadores de todo el planeta. Pokémon TCG Live ofrece una experiencia moderna y accesible que evoluciona constantemente, garantizando que tu viaje como Maestro Pokémon sea tan desafiante como gratificante.",
    },
    {
      background: FondoSeccion2,
      image: ImagenSeccion2,
      title: "Acerca del Juego",
      description: "En Pokémon TCG Live, los jugadores se sumergen en el arte de la construcción de mazos y la estrategia de batalla. Cada partida implica el uso de cartas de Pokémon, Energía y Entrenador para atacar al Pokémon Activo de tu oponente, poner en juego Pokémon más fuertes, buscar recursos clave y gestionar tu mano de cartas. El objetivo principal es tomar todas tus cartas de Premio, lo cual se logra al dejar Fuera de Combate a los Pokémon de tu rival. Con mecánicas fáciles de aprender pero difíciles de dominar, el juego invita a la experimentación constante con diferentes tipos de Pokémon, habilidades y tácticas para encontrar tu estilo de juego perfecto y ascender en las ligas.",
    },
    {
      background: FondoSeccion3,
      title: "Modos de Juego",
      content:[
        {
          image: Imagen1Seccion3,
          title: "Combates Clasificatorios (Ranked):",
          description: "Sumérgete en la adrenalina de la competición. Enfrenta a oponentes de nivel similar para escalar en las ligas, desde la Liga Principiante hasta las prestigiosas Ligas Poké Ball, Master Ball y más allá. Cada victoria te acerca a la cima y a recompensas exclusivas al final de cada temporada. Es el escenario ideal para los jugadores que buscan demostrar su maestría y medir su progreso competitivo."
        },
        {
          image: Imagen2Seccion3,
          title: "Combates Casuales (Casual):",
          description: "¿Quieres probar una nueva combinación de cartas o perfeccionar una estrategia sin la presión del ranking? El Modo Casual es tu campo de entrenamiento ideal. Disfruta de duelos relajados contra otros jugadores, experimenta libremente con tus mazos y aprende a tu propio ritmo. Las victorias y derrotas no afectarán tu posición, creando un ambiente de aprendizaje y diversión."
        },
        {
          image: Imagen3Seccion3,
          title: "Desafio del Entrenador:",
          description: "Pon a prueba tus habilidades contra una serie de oponentes controlados por la inteligencia artificial. Estos combates te permiten familiarizarte con las mecánicas del juego, entender cómo funcionan diferentes tipos de mazos y probar tus propias construcciones en un entorno controlado. Cada victoria te recompensa con progresión y la oportunidad de desbloquear nuevos mazos para usar."
        },
        {
          image: Imagen4Seccion3,
          title: "Desafios Diarios:",
          description: "Mantente activo y gana recompensas adicionales completando tareas específicas cada día. Desde 'Juega 5 cartas de Energía' hasta 'Gana 1 partida con un mazo de tipo Fuego', estos desafíos diarios son una excelente forma de obtener Puntos de Batalla para el Pase de Batalla, Monedas para la tienda, o Cristales valiosos."
        },
        {
          image: Imagen5Seccion3,
          title: "Torneos y Eventos especiales:",
          description: "Si bien las funcionalidades de torneos dedicados están en desarrollo, el juego ocasionalmente presenta eventos especiales y desafíos de tiempo limitado. Estos eventos pueden ofrecer formatos de juego únicos y reglas específicas, brindando una experiencia fresca y oportunidades para ganar recompensas exclusivas que no se encuentran en otros modos. ¡Prepárate para futuras competiciones y demuéstrales a todos tu valía!"
        }
      ],
    },
    {
      background: FondoSeccion4,
      title: "Progresos y Recompensas",
      content:[
        {
          image: Imagen1Seccion4,
          title: "Pase de Batalla",
          description: "Gana Puntos de Batalla al jugar y completar desafíos para avanzar en el Pase de Batalla. Este sistema de progresión ofrece recompensas escalonadas, incluyendo Cristales, Monedas, sobres de mejora y elementos cosméticos, proporcionando metas emocionantes a largo plazo."
        },
        {
          image: Imagen2Seccion4,
          title: "Tienda del Juego",
          description: "Utiliza las monedas y los cristales obtenidos en el juego para adquirir sobres de mejora, productos estéticos para tu avatar, fundas de cartas, cajas de mazo y más. Expande tu colección y personaliza tu experiencia sin necesidad de compras con dinero real (aunque también existen opciones de compra directa para aquellos que deseen acelerar su progreso)."
        }
      ],
    }
  ],
  en: [
    {
      background: FondoSeccion1,
      image: ImagenSeccion1,
      title: "What is it?",
      description: "Pokémon TCG Live is the official digital adaptation of the acclaimed Pokémon TCG. This title immerses you in the strategic and exciting world of card duels, allowing you to collect thousands of digital cards, build powerful decks, and compete with trainers from all over the world. Pokémon TCG Live offers a modern and accessible experience that is constantly evolving, ensuring your journey as a Pokémon Master is as challenging as it is rewarding.",
    },
    {
      background: FondoSeccion2,
      image: ImagenSeccion2,
      title: "About the Game",
      description: "In Pokémon TCG Live, players dive into the art of deck building and battle strategy. Each match involves using Pokémon, Energy, and Trainer cards to attack your opponent's Active Pokémon, bring stronger Pokémon into play, search for key resources, and manage your hand. The main goal is to take all your Prize cards, which is achieved by Knocking Out your rival's Pokémon. With mechanics that are easy to learn but hard to master, the game encourages constant experimentation with different Pokémon types, abilities, and tactics to find your perfect play style and climb the leagues.",
    },
    {
      background: FondoSeccion3,
      title: "Game Modes",
      content:[
        {
          image: Imagen1Seccion3,
          title: "Ranked Battles:",
          description: "Dive into the thrill of competition. Face opponents of similar level to climb the leagues, from the Beginner League to the prestigious Poké Ball, Master Ball Leagues, and beyond. Each victory brings you closer to the top and to exclusive rewards at the end of each season. It's the ideal setting for players looking to prove their mastery and measure their competitive progress."
        },
        {
          image: Imagen2Seccion3,
          title: "Casual Battles:",
          description: "Want to try a new card combination or perfect a strategy without the pressure of ranking? Casual Mode is your ideal training ground. Enjoy relaxed duels against other players, experiment freely with your decks, and learn at your own pace. Wins and losses won't affect your position, creating a learning and fun environment."
        },
        {
          image: Imagen3Seccion3,
          title: "Trainer Challenge:",
          description: "Test your skills against a series of AI-controlled opponents. These battles let you get familiar with the game mechanics, understand how different deck types work, and try your own builds in a controlled environment. Each win rewards you with progression and the chance to unlock new decks to use."
        },
        {
          image: Imagen4Seccion3,
          title: "Daily Challenges:",
          description: "Stay active and earn extra rewards by completing specific tasks each day. From 'Play 5 Energy cards' to 'Win 1 match with a Fire-type deck', these daily challenges are a great way to earn Battle Points for the Battle Pass, Coins for the shop, or valuable Crystals."
        },
        {
          image: Imagen5Seccion3,
          title: "Tournaments and Special Events:",
          description: "While dedicated tournament features are in development, the game occasionally presents special events and limited-time challenges. These events can offer unique play formats and specific rules, providing a fresh experience and opportunities to earn exclusive rewards not found in other modes. Get ready for future competitions and prove your worth!"
        }
      ],
    },
    {
      background: FondoSeccion4,
      title: "Progress and Rewards",
      content:[
        {
          image: Imagen1Seccion4,
          title: "Battle Pass",
          description: "Earn Battle Points by playing and completing challenges to advance in the Battle Pass. This progression system offers tiered rewards, including Crystals, Coins, booster packs, and cosmetic items, providing exciting long-term goals."
        },
        {
          image: Imagen2Seccion4,
          title: "In-Game Shop",
          description: "Use the coins and crystals earned in the game to purchase booster packs, cosmetic products for your avatar, card sleeves, deck boxes, and more. Expand your collection and personalize your experience without the need for real money purchases (although there are also direct purchase options for those who wish to speed up their progress)."
        }
      ],
    }
  ]
};

export const SECTIONS = SECTIONS_TEXTS[pageLanguage as 'es' | 'en'];