import { Query, type Card } from "@tcgdex/sdk";
import { tcgdex } from "./api";
import { CacheService } from "$lib/cache/cacheService";

//interfaz de carta resume
interface CleanCardResume {
    id: string;
    localID: string;
    name: string;
    image: string; 
}

//la funcion de limpieza
const cleanCardResumeList = (cardResumes: any[]): CleanCardResume[] => {
    if (!Array.isArray(cardResumes)) {
        console.warn('cleanCardResumeList expects an array.');
        return [];
    }

    return cardResumes.map(cardResume => {                                  
        if (!cardResume || !cardResume.id || !cardResume.name || !cardResume.localId || !cardResume.image) {//asegurando formato valido
            console.warn('Invalid CardResume item found, skipping:', cardResume);
            return null; 
        }

        return {
            id: cardResume.id,
            localID: cardResume.localId,
            name: cardResume.name,
            image: cardResume.image ? `${cardResume.image}/high.webp` : ''  // Guardar la URL de la imagen directamente
        };

    }).filter(item => item !== null) as CleanCardResume[]; // Filtra cualquier null y asegura el tipo
};

// para limpiar los datos de la carta antes de guardarlos en cache
const cleanCardData = (card: any) => {
    if (!card) return null;
    
    // Guardar la URL de la imagen directamente
    const imageUrl = typeof card.getImageURL === 'function' 
        ? card.getImageURL('high', 'webp')
        : card.image 
            ? `${card.image}/high.webp`
            : undefined;

        return {
            id: card.id,
            name: card.name,
            imageUrl,  // URL de la imagen ya procesada
            localID: card.localID,
            types: card.types,
            hp: card.hp,
            rarity: card.rarity,
            attacks: card.attacks,
            weaknesses: card.weaknesses,
            description: card.description,
            // otros campos que se necesiten
        };
};

const randomCards = async () => {                   //obtiene una lista de cartas random 
    const cacheKey = 'random-list-card';
    // Intentar obtener de cache primero
    const cacheData = CacheService.get(cacheKey);
    if (cacheData) {
        console.log('Lista de cartas random obtenidas en cache: ', cacheData);
        return cacheData;
    }

    const randomListCards = await tcgdex.card.list(
        Query.create()
        .contains('rarity', 'Rare')
        .paginate(1, 100)
    );

    //guardar en cache
    if (randomListCards) {
        CacheService.set(
            cacheKey,
            randomListCards,
            {
                memoryExpiration: 5 * 60 * 1000,                    // 5 minutos en memoria
                localStorageExpiration: 24 * 60 * 60 * 1000         // 24 horas en localStorage        
            }
        );
    }
    // console.log('debug', randomListCards);
    
    return randomListCards;
}

export const getCardFromQuery = async (query:Query, page:number) => {
    const cacheKey = `fromQuery-list-card_${query.toString()}_page_${page}`
    // Intentar obtener de cache primero
    const cacheData = CacheService.get(cacheKey);
    if (cacheData) {
        console.log('Lista de cartas fromQuery obtenidas en cache: ', cacheData);
        return cacheData;
    }

    //si no esta en cache buscar en la api
    const cardsResponse = await tcgdex.card.list(
        query.paginate(page, 20)
    );
    console.log('respuesta api', cardsResponse);
    

    //guardar en cache
    const cleanedCards = cleanCardResumeList(cardsResponse);
    if (cardsResponse) {
        CacheService.set(
            cacheKey,
            cleanedCards,
            {
                memoryExpiration: 5 * 60 * 1000,                    // 5 minutos en memoria
                localStorageExpiration: 24 * 60 * 60 * 1000         // 24 horas en localStorage        
            }
        );
        console.log('cartas de fromQuery guardadas en cache', cleanedCards);
    }

    return cleanedCards;
}

export const getCardsByName = async (name: string, page: number = 0) => {
    const cards = await tcgdex.card.list(
        Query.create()
            .contains("name", name)
            .paginate(page, 20)
    );
    return cards;
};

export const getCardFromId = async (id: string) => {
    // Intentar obtener de cache primero
    const cachedCard = CacheService.get(`card-${id}`);
    if (cachedCard) {
        // console.log('Card obtenida de caché:', id);
        return cachedCard;
    }

    // Si no esta en cache, obtener de la API
    const card = await tcgdex.card.get(id);
    if (!card) {
        console.error('Card not found in cache');
        return null;
    }

    // guardar en cache
    const cleanCard = cleanCardData(card);
    CacheService.set(`card-${id}`, cleanCard, {
        memoryExpiration: 5 * 60 * 1000, // 5 minutos en memoria
        localStorageExpiration: 24 * 60 * 60 * 1000 // 24 horas en localStorage
    });
    
    return cleanCard;
}

export const getRandomCard = async () => {   
    try {
        const cardList = await randomCards();               //obtener una lista de cartas random
        if (!cardList || !Array.isArray(cardList) || cardList.length === 0) {
            console.error('No random cards found');
            return;
        }

        const cardR = cardList[Math.floor(Math.random() * cardList.length)];     //selecciona una carta random de la lista
        if (!cardR) {
            console.error('Card not found');
            return;
        }

        const cardFullData = await getCardFromId(cardR.id);                   //obtiene los detalles de la carta        

        return cardFullData;  
    } catch (error) {
        console.error('Error fetching random card:', error);
        return null;
    }
}