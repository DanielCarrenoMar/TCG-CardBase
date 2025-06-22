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

export const SECTIONS = [
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
];