// interfaz para el tipo de datos que vamos a cachear
interface CacheItem<T> {
    data: T;                     //datos que vamos a cachear
    timestamp: number;           //marca de tiempo de cuando se guardo el dato
    expiresIn: number;          //tiempo en milisegundos para que expire el dato
}

// clase para el cache en memoria
class MemoryCache<T> {
    private cache: Map<string, CacheItem<any>> = new Map();
    private defaultExpiry: number;

    constructor(defaultExpiry: number = 15 * 60 * 1000) {   // 15 minutos por defecto (min seg mls)
        this.cache = new Map();//
        this.defaultExpiry = defaultExpiry;
    }

    //metodo para guardar datos en cache
    set<T>(key: string, data: T, expiresIn?: number): void{
        this.cache.set(key, {
            data,                                       //pasamos los datos
            timestamp: Date.now(),
            expiresIn: expiresIn || this.defaultExpiry,
        })
    }

    get<T>(key: string): T | null {
        const item = this.cache.get(key);           //obtenemos el item del cache
        if (!item) return null;

        // Verificar si el item ha expirado
        if(Date.now() > item.timestamp + item.expiresIn){
            this.cache.delete(key);
            return null;
        }

        return item.data as T;
    }

    // metodo para eliminar un item específico
    delete(key: string): void {
        this.cache.delete(key);
    }

    // metodo para limpiar toda la caché
    clear(): void {
        this.cache.clear();
    }
}

// Exportamos una instancia unica del cache
export const memoryCache = new MemoryCache();