import type { PageLoad } from './$types';

export const load: PageLoad = ({ url }) => {
    const cardId = url.searchParams.get('cardID');
    return {
        cardId
    };
};