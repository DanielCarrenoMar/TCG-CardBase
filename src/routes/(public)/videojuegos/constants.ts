import TcgLiveBackground from "./_images/tcg-live-fondo.png";
import TcgPocketBackground from "./_images/tcg-pocket-fondo.png";
import TcgOnlineBackground from "./_images/tcg-online-fondo.png";
import TcgGameboyBackground from "./_images/tcg-gameboy-fondo.png";

import TcgLiveLogo from "./_images/tcg-live-logo.png";
import TcgPocketLogo from "./_images/tcg-pocket-logo.png";
import TcgOnlineLogo from "./_images/tcg-online-logo.png";
import TcgGameboyLogo from "./_images/tcg-gameboy-logo.png";

import TcgLiveImage from "./_images/tcg-live-image.png";
import TcgPocketImage from "./_images/tcg-pocket-image.png";
import TcgOnlineImage from "./_images/tcg-online-image.png";
import TcgGameboyImage from "./_images/tcg-gameboy-image.png";


export const GAMES = [

    {
        background: TcgLiveBackground,
        logo: TcgLiveLogo,
        image: TcgLiveImage,
    },
    {
        background: TcgPocketBackground,
        logo: TcgPocketLogo,
        image: TcgPocketImage,
    },
    {
        background: TcgOnlineBackground,
        logo: TcgOnlineLogo,
        image: TcgOnlineImage,
    },
    {
        background: TcgGameboyBackground,
        logo: TcgGameboyLogo,
        image: TcgGameboyImage,
    }

];


import { pageLanguage } from '$lib/language/languajeHandler';

export const USED_INFO_CARD_TEXTS = {
  es: [
    {
      title: "Pokémon TCG Live",
      description: "Sumérgete en el clásico juego de cartas coleccionables Pokémon en formato digital. Construye mazos poderosos, desafía a entrenadores de todo el mundo y participa en torneos emocionantes. ¡Colecciona cartas virtuales y domina la estrategia del JCC Pokémon!",
      background_color: "from-gray-400 to-gray-700",
      url: "/videojuegos/pokemon-tcg-live",
    },
    {
      title: "Pokémon TCG Pocket",
      description: "Experimenta el JCC Pokémon de una manera completamente nueva, diseñada para dispositivos móviles. Disfruta de batallas rápidas y sencillas, colecciona cartas digitales únicas con ilustraciones inmersivas y descubre un estilo de juego adaptado para la palma de tu mano. ¡Una forma ágil y divertida de jugar!",
      background_color: "from-[#5eb1bb] to-[#20444a]",
      url: "/videojuegos/pokemon-tcg-pocket",
    },
    {
      title: "Pokémon TCG Online",
      description: "Diseñado para jugadores de todas partes, este juego te permite sumergirte en batallas estratégicas, coleccionar cartas digitales auténticas y desafiar a oponentes de todo el mundo en un entorno dinámico y fiel al juego de mesa. Cada partida es una nueva oportunidad para demostrar tu habilidad. ¿Listo para revivir la nostalgia o descubrir esta aventura clásica?",
      background_color: "from-[#f8981d] to-[#a85a13]",
      url: "/videojuegos/pokemon-tcg-online",
    },
    {
      title: "Pokémon Trading Card Game (GameBoy Color)",
      description: "¿Alguna vez soñaste con vivir como un auténtico maestro del JCC Pokémon, desafiando rivales en duelos estratégicos y coleccionando cartas legendarias? Pokémon Trading Card Game para GameBoy Color no es solo un juego retro: es un viaje lleno de nostalgia, desafíos y secretos ocultos que marcó a toda una generación.",
      background_color: "from-[#a3d06c] to-[#425c2a]",
      url: "/videojuegos/pokemon-trading-card-game",
    },
  ],
  en: [
    {
      title: "Pokémon TCG Live",
      description: "Dive into the classic Pokémon Trading Card Game in digital format. Build powerful decks, challenge trainers from around the world, and participate in exciting tournaments. Collect virtual cards and master the strategy of the Pokémon TCG!",
      background_color: "from-gray-400 to-gray-700",
      url: "/videojuegos/pokemon-tcg-live",
    },
    {
      title: "Pokémon TCG Pocket",
      description: "Experience the Pokémon TCG in a whole new way, designed for mobile devices. Enjoy fast and simple battles, collect unique digital cards with immersive illustrations, and discover a play style adapted for the palm of your hand. A quick and fun way to play!",
      background_color: "from-[#5eb1bb] to-[#20444a]",
      url: "/videojuegos/pokemon-tcg-pocket",
    },
    {
      title: "Pokémon TCG Online",
      description: "Designed for players everywhere, this game lets you dive into strategic battles, collect authentic digital cards, and challenge opponents from around the world in a dynamic environment true to the tabletop game. Each match is a new opportunity to show your skill. Ready to relive nostalgia or discover this classic adventure?",
      background_color: "from-[#f8981d] to-[#a85a13]",
      url: "/videojuegos/pokemon-tcg-online",
    },
    {
      title: "Pokémon Trading Card Game (GameBoy Color)",
      description: "Have you ever dreamed of living like a true Pokémon TCG master, challenging rivals in strategic duels and collecting legendary cards? Pokémon Trading Card Game for GameBoy Color is not just a retro game: it's a journey full of nostalgia, challenges, and hidden secrets that marked a whole generation.",
      background_color: "from-[#a3d06c] to-[#425c2a]",
      url: "/videojuegos/pokemon-trading-card-game",
    },
  ]
};

export const USED_INFO_CARD = USED_INFO_CARD_TEXTS[pageLanguage as 'es' | 'en'];


