interface LocalStorageItem<T> {
    data: T;                     //datos que vamos a cachear
    timestamp: number;           //marca de tiempo de cuando se guardo el dato
    expiresIn: number;          //tiempo en milisegundos para que expire el dato    
}

class LocalStorageCache{
    private defaultExpiration: number;

    constructor(defaultExpiration = 24 * 60 * 60 * 1000) { // 24 horas por defecto
        this.defaultExpiration = defaultExpiration;
    }

    //method para guardar datos en localstorage
    set<T>(key: string, data: T, expiresIn?: number): void{
        if (!this.isSupported()) return;

        //creamos el item a guardar
        const item: LocalStorageItem<T> = {
            data,
            timestamp: Date.now(),
            expiresIn: expiresIn || this.defaultExpiration,
        };

        //guardamos el item en localStorage
        try {
            const cleanData = this.cleanCircularReferences(item);
            localStorage.setItem(key, JSON.stringify(cleanData));
        } catch (e) {
            if (e instanceof DOMException && (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')) {
                console.warn(`Advertencia: El localStorage ha excedido la cuota. No se pudo cachear la clave: ${key}`);
                // Opcionalmente, se podría implementar una estrategia para limpiar el caché aquí.
            } else {
                console.error('Error al guardar en localStorage:', e);
            }
        }
    }

    get<T>(key: string): T | null{
        if (!this.isSupported()) return null;

        try {
            const item = localStorage.getItem(key);
            if (!item) return null;

            const parsedItem: LocalStorageItem<T> = JSON.parse(item);          //parseamos el item

            //verificar si el item ha expirado
            if(Date.now() > parsedItem.timestamp + parsedItem.expiresIn){
                localStorage.removeItem(key);
                return null;
            }

            return parsedItem.data as T;
        } catch (error) {
            console.error('Error al leer en localStorage:', error);
            return null;
        }
    }

    // metodo para eliminar un item especifico
    delete(key: string): void {
        localStorage.removeItem(key);
    }

    // metodo para limpiar toda la cache
    clear(): void {
        localStorage.clear();
    }

    // Metodo para limpiar referencias circulares
    private cleanCircularReferences<T>(obj: T): T {
        const seen = new WeakSet<object>();
        
        try {
            return JSON.parse(JSON.stringify(obj, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                    if (seen.has(value)) {
                        return {
                            _type: 'circular_reference',
                            id: (value as any).id || 'unknown',
                            originalType: value.constructor.name
                        };
                    }
                    seen.add(value);
                }
                return value;
            }));
        } catch (error) {
            console.error('Error cleaning circular references:', error);            
            return {} as T;
        }
    }

    private isSupported(): boolean {
        return typeof localStorage !== 'undefined';
    }
}

export const localStorageCache = new LocalStorageCache();