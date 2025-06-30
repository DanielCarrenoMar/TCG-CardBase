import TCGOnlineBanner from "./_images/banner.png"

import FondoSeccion1 from "./_images/fondo-seccion-1.png";
import ImagenSeccion1 from "./_images/imagen-seccion-1.png";

import FondoSeccion2 from "./_images/fondo-seccion-2.png";
import ImagenSeccion2 from "./_images/imagen-seccion-2.png";

import FondoSeccion3 from "./_images/fondo-seccion-3.png";
import Imagen1Seccion3 from "./_images/imagen-1-seccion-3.png";
import Imagen2Seccion3 from "./_images/imagen-2-seccion-3.png";
import Imagen3Seccion3 from "./_images/imagen-3-seccion-3.png";
import Imagen4Seccion3 from "./_images/imagen-4-seccion-3.png";

import FondoSeccion4 from "./_images/fondo-seccion-4.png";
import Imagen1Seccion4 from "./_images/imagen-1-seccion-4.png";
import Imagen2Seccion4 from "./_images/imagen-2-seccion-4.png";
import Imagen3Seccion4 from "./_images/imagen-3-seccion-4.png";

export const BANNER = TCGOnlineBanner;

export const SECTIONS = [
    {
        background: FondoSeccion1,
        image: ImagenSeccion1,
        title: "¿Qué es?",
        description: "El Juego de Cartas Coleccionables Pokémon Online (PTCGO) fue la plataforma digital oficial que, durante años, permitió a los entrenadores de todo el mundo disfrutar del estratégico y emocionante universo del JCC Pokémon desde sus computadoras y tabletas. Sirviendo como el puente entre el juego de cartas físico y el digital, PTCGO fue una herramienta fundamental para coleccionar, construir mazos y competir, replicando fielmente las reglas y la experiencia del juego de mesa antes de la llegada de su sucesor, Pokémon TCG Live.",
    },
    {
        background: FondoSeccion2,
        image: ImagenSeccion2,
        title: "Acerca del Juego",
        description: "PTCGO ofrecía una experiencia completa del JCC Pokémon, emulando las reglas y la jugabilidad del juego de cartas físico. Los jugadores podían coleccionar cartas abriendo sobres digitales, canjeando códigos de productos físicos o intercambiando con otros jugadores. La construcción de mazos era una parte central, permitiendo a los entrenadores diseñar estrategias complejas con cartas de Pokémon, Energía y Entrenador. Los duelos se desarrollaban siguiendo las reglas oficiales del JCC, con el objetivo de dejar Fuera de Combate a los Pokémon del oponente para tomar todas las cartas de Premio. PTCGO era conocido por su fidelidad a las reglas físicas y por ser la principal plataforma para que los jugadores practicaran, compitieran en torneos y se mantuvieran al día con las últimas expansiones del JCC Pokémon. Fue la base para el crecimiento de la comunidad competitiva digital durante muchos años.",
    },
    {
        background: FondoSeccion3,
        title: "Modos de Combate",
        content:[
            {
                image: Imagen1Seccion3,
                title: "Modo Entrenador:",
                description: "Este modo permitía a los jugadores enfrentarse a oponentes controlados por la inteligencia artificial, ideales para familiarizarse con las reglas, probar nuevos mazos o simplemente practicar sin la presión de una partida en línea. Los oponentes de la IA ofrecían diferentes niveles de dificultad, desde desafíos básicos para principiantes hasta enfrentamientos más complejos para jugadores con experiencia, lo que lo convertía en una excelente herramienta de aprendizaje y entrenamiento constante."
            },
            {
                image: Imagen2Seccion3,
                title: "Combates Clasificatorios (Ranked):",
                description: "Los jugadores ponían a prueba sus habilidades contra otros en un sistema de clasificación global, escalando posiciones en ligas mensuales para obtener recompensas exclusivas y reconocimiento. Era el escenario principal para la competición seria y el desarrollo de estrategias avanzadas."
            },
            {
                image: Imagen3Seccion3,
                title: "Combates Amistosos/Casual (Friendly):",
                description: "Permitía a los jugadores desafiar a sus amigos directamente o buscar oponentes aleatorios para partidas sin impacto en su clasificación. Era perfecto para probar mazos experimentales, enseñar a nuevos jugadores o simplemente disfrutar de duelos relajados."
            },
            {
                image: Imagen4Seccion3,
                title: "Torneos:",
                description: "PTCGO ofrecía un sistema de torneos en línea donde los jugadores podían competir en formatos específicos (ej. Estándar, Expandido) contra múltiples oponentes en rondas eliminatorias o suizas. Estos torneos eran la cúspide de la competición en el juego, requiriendo habilidad, consistencia y un profundo conocimiento de las reglas y el metajuego. Las recompensas por ganar torneos incluían sobres de mejora exclusivos, tickets de torneo y una posición de prestigio."
            }
            
        ],
    },
    {
        background: FondoSeccion4,
        title: "Colección e interacción",
        content:[
            {
                image: Imagen1Seccion4,
                title: "Constructor de Mazos Avanzado:",
                description: "El juego incluía una herramienta robusta para la construcción de mazos, con opciones detalladas de búsqueda, filtrado y organización de cartas. Los jugadores podían experimentar con diferentes arquetipos, guardar múltiples mazos y ajustar sus estrategias con precisión, lo que era esencial para el juego competitivo."
            },
            {
                image: Imagen2Seccion4,
                title: "Importación de Cartas Físicas:",
                description: "Una de las características más distintivas y valoradas de PTCGO era la posibilidad de canjear códigos encontrados en los productos físicos del JCC Pokémon (sobres de mejora, mazos de baraja, colecciones especiales) para obtener sus versiones digitales. Esto incentivaba la compra de productos físicos y permitía a los jugadores construir una colección digital paralela a la real."
            },
            {
                image: Imagen3Seccion4,
                title: "Sistema de Intercambio:",
                description: "Los jugadores podían intercambiar sus cartas digitales con otros jugadores dentro de la aplicación. Esta característica fundamental emulaba el comercio de cartas físicas y era crucial para completar colecciones, obtener cartas raras o adquirir los componentes necesarios para mazos específicos. Los 'trades' se realizaban en una interfaz dedicada, permitiendo ofertas públicas o privadas."
            }
        ],
    }
];