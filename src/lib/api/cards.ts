import { Query } from "@tcgdex/sdk";
import { tcgdex } from "./api";

const allCards = await tcgdex.card.list(
    Query.create()
    .contains('rarity', 'Rare')
);

export const getRandomCard = async () => {    
  const card = allCards[Math.floor(Math.random() * allCards.length)];
//   const card = await tcgdex.random.card(); //Math.floor(Math.random() * 1000)
  if (!card) {
    console.error('Card not found');
    return;
  }
  return card;
}

export const getCard = async (id: string) => {
  const card = await tcgdex.card.get(id);
  if (!card) {
    console.error('Card not found');
    return;
  }
  return card;
}