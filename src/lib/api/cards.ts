import { Query } from "@tcgdex/sdk";
import { tcgdex } from "./api";

const randomCards = async () => {                   //obtiene una lista de cartas random 
    const cards = await tcgdex.card.list(
        Query.create()
        .contains('rarity', 'Rare')
    );
    return cards;
}

const getCardFullData = async (id: string) => {
    const card = await tcgdex.card.get(id);
    if (!card) {
        console.error('Card not found');
        return null;
    }
    return card;
}

export const getRandomCard = async () => {   
    try {
        const cardList = await randomCards();               //obtener una lista de cartas random
        if (!cardList || cardList.length === 0) {
            console.error('No random cards found');
            return;
        }

        const cardR = cardList[Math.floor(Math.random() * cardList.length)];     //selecciona una carta random de la lista
        if (!cardR) {
            console.error('Card not found');
            return;
        }

        const cardFullData = await getCardFullData(cardR.id);                   //obtiene los detalles de la carta

        return cardFullData;  
    } catch (error) {
        console.error('Error fetching random card:', error);
        return null;
    }
}