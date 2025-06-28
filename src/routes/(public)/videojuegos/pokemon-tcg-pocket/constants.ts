import TCGPocketBanner from "./_images/banner.png"
import ImagenBanner1 from "./_images/imagen-1-banner.png"
import ImagenBanner2 from "./_images/imagen-2-banner.png"

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
import ImagenSeccion4 from "./_images/imagen-seccion-4.png";

export const BANNER = [
    {
        background: TCGPocketBanner,
        image1: ImagenBanner1,
        image2: ImagenBanner2
    }
    
];

export const SECTIONS = [
    {
        background: FondoSeccion1,
        image: ImagenSeccion1,
        title: "¿Qué es?",
        description: "Pokémon JCC Pocket es una nueva y emocionante aplicación móvil que busca reimaginar y simplificar la experiencia del icónico Juego de Cartas Coleccionables Pokémon, llevándola a un formato completamente optimizado para dispositivos móviles y el juego rápido. Desarrollado en una colaboración estratégica entre The Pokémon Company y DeNA, este título promete una forma innovadora de coleccionar, intercambiar y combatir con tus Pokémon favoritos. La aplicación combina la profunda nostalgia de las cartas físicas con la inigualable comodidad y accesibilidad de lo digital, permitiendo a los jugadores disfrutar del universo JCC en cualquier momento y lugar.",
    },
    {
        background: FondoSeccion2,
        image: ImagenSeccion2,
        title: "Acerca del Juego",
        description: "En Pokémon JCC Pocket, los jugadores se sumergen en una experiencia de juego de cartas que es tanto estratégicamente profunda como ágil y visualmente cautivadora. El diseño del juego prioriza sesiones de juego más cortas y dinámicas, lo que lo hace ideal para momentos de ocio o desplazamientos. La mecánica de combate ha sido cuidadosamente refinada para ser increíblemente fácil de aprender, permitiendo que tanto los recién llegados al JCC como los veteranos experimenten duelos rápidos y emocionantes sin la complejidad inherente de las reglas completas del juego de mesa. Además de los combates, el juego enfatiza el coleccionismo, permitiendo a los entrenadores adquirir y apreciar cartas de toda la rica historia del JCC Pokémon, incluyendo las revolucionarias 'Cartas de Inmersión' que ofrecen una forma única y envolvente de interactuar con el arte de tus cartas.",
    },
    {
        background: FondoSeccion3,
        title: "Experiencia de Juego",
        content:[
            {
                image: Imagen1Seccion3,
                title: "Duelos Rápidos e Intensos:",
                description: "Sumérgete en batallas estratégicas que han sido meticulosamente adaptadas para las plataformas móviles. Las reglas simplificadas de Pokémon JCC Pocket permiten que cada partida se desarrolle de manera ágil y dinámica, a menudo completándose en solo unos minutos. Esta optimización es perfecta para aquellos momentos en los que tienes poco tiempo pero deseas disfrutar de un duelo completo y satisfactorio, ya sea durante una pausa, en el transporte público o mientras esperas. La accesibilidad no compromete la necesidad de pensar tácticamente, lo que lo hace atractivo tanto para jugadores casuales como para aquellos que disfrutan de la estrategia condensada."
            },
            {
                image: Imagen2Seccion3,
                title: "Apertura de Sobres Inmersiva:",
                description: "Experimenta la inigualable emoción y anticipación de abrir un nuevo paquete de cartas, replicada con un nivel de detalle y dramatismo que solo el formato digital puede ofrecer. Siente la expectativa crecer mientras las animaciones y los efectos visuales revelan una por una las cartas dentro del sobre. Cada apertura es un evento por sí mismo, diseñado para capturar la magia y la sorpresa del coleccionismo físico y transportarla directamente a tu dispositivo móvil. Es una experiencia sensorial que va más allá de simplemente recibir una carta."
            },
            {
                image: Imagen3Seccion3,
                title: "Cartas de Inmersión (Immerse Cards):",
                description: "Prepárate para una revolución en cómo interactúas con el arte de tus cartas. Las 'Cartas de Inmersión' son una característica distintiva de Pokémon JCC Pocket que te permiten sumergirte literalmente dentro de la ilustración de la carta. Al activarlas, el arte de la carta se expande en una escena tridimensional interactiva, dándote la sensación de estar dentro del mundo Pokémon representado. Podrás explorar los detalles, la profundidad y la belleza de tus cartas favoritas como nunca antes, ofreciendo una nueva dimensión de aprecio por el icónico arte del JCC."
            },
            {
                image: Imagen4Seccion3,
                title: "Colección Histórica y Diversa:",
                description: "Construye la colección de tus sueños explorando y adquiriendo cartas de toda la rica y extensa historia del Juego de Cartas Coleccionables Pokémon. Desde los legendarios sets originales que marcaron el inicio de la franquicia hasta las más recientes expansiones, Pokémon JCC Pocket te permitirá reunir una vasta gama de cartas digitales, reviviendo la nostalgia y descubriendo nuevas estrategias. Esta característica es ideal tanto para coleccionistas veteranos que buscan completar su acervo como para nuevos jugadores que desean explorar la evolución del JCC a lo largo del tiempo."
            }
        ],
    },
    {
        background: FondoSeccion4,
        title: "Conexion y Comercio",
        content:[
            {
                image: ImagenSeccion4,
                title: "Intercambio de Cartas con Amigos",
                description: "Una de las características más esenciales y queridas del JCC Pokémon físico se mantiene vibrante en su contraparte digital. Conéctate fácilmente con tus amigos y otros entrenadores para intercambiar cartas. Esta funcionalidad social no solo te permite obtener las cartas que necesitas para completar tu colección o construir tu mazo ideal, sino que también fomenta la interacción y la formación de una comunidad activa dentro del juego. La negociación y el comercio son componentes clave que fortalecen los lazos entre jugadores."
            }
        ],
    }
];