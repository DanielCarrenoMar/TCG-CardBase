import type { PageLoad } from './$types';
import { getCardFromId } from '$lib/api/cards';

export const load: PageLoad = async ({ url }) => {
    const cardId = url.searchParams.get('cardID');
    let card = null;
    if (cardId) {
        card = await getCardFromId(cardId);
    }
    return {
        cardId,
        card
    };
};