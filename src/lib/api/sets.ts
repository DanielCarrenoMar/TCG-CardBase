import { Query, type Card, type StringEndpoint } from "@tcgdex/sdk";
import { tcgdex } from "./api";
import { CacheService } from "$lib/cache/cacheService";

export const getSetById = async (id: string) =>{
    const set = await tcgdex.set.get(id);

    return set
}

export const getNameById = async (setId: string) => {
    const set = await tcgdex.set.get(setId);

    return set?.name;
}

export const getListSetFullData = async (sets: any[]) => {
    if (!Array.isArray(sets)) {
        console.error('El argumento debe ser un array de sets');
        return [];
    }

    // Mapea cada set para obtener su información completa
    const setsFullData = await Promise.all(
        sets.map(async (setResume) => {
            if (!setResume || !setResume.id) {
                return null;
            }
            // Llama a la función que obtiene el set completo
            const setFull = await getSetById(setResume.id);
            return setFull;
        })
    );    

    // Filtra los posibles nulls 
    return setsFullData.filter(Boolean);
};