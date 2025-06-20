import { memoryCache } from "./memoryCache";
import { localStorageCache } from "./localStorage"; 

export class CacheService{
    // metodo para guardar datos en ambos sistemas de cache
    static set<T>(key: string, data: T, options: {              //objeto
        memoryExpiration?: number;
        localStorageExpiration?: number;
        useLocalStorage?: boolean;
    } = {}): void {
        const {                     //desestructuración del objeto
            memoryExpiration, 
            localStorageExpiration, 
            useLocalStorage = true 
        } = options;
        
        memoryCache.set(key, data, memoryExpiration);                   // guardar en memoria

        // guardar en localStorage si se requiere
        if (useLocalStorage) {
            localStorageCache.set(key, data, localStorageExpiration);
        }
    }

    //metodo para obtener datos de ambas cache
    static get<T>(key: string): T | null{

        //intentar obtener de memoria primero
        const memoryData = memoryCache.get<T>(key);
        if (memoryData) return memoryData;

        const localStorageData = localStorageCache.get<T>(key);
        if (localStorageData){                  //si la obtenemos del localStorage la guardames en cache
            memoryCache.set(key, localStorageData);       
            return localStorageData;      
        }

        return null;
    }

    // metodo para eliminar datos de ambos sistemas
    static delete(key: string): void {
        memoryCache.delete(key);
        localStorageCache.delete(key);
    }

    // metodo para limpiar ambos sistemas
    static clear(): void {
        memoryCache.clear();
        localStorageCache.clear();
    }
}
