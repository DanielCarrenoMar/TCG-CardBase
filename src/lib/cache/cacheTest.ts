// import { CacheService } from "./cacheService";

// export class CacheTest {
// private static testResults: Array<{
//     test: string;
//     passed: boolean;
//     message: string;
//     timestamp: number;
// }> = [];

// // Test básico de memoria cache
// static testMemoryCache(): boolean {
//     try {
//         const testKey = 'test-memory-key';
//         const testData = { id: 1, name: 'Test Card', hp: 100 };
        
//         CacheService.delete(testKey);
        
//         CacheService.set(testKey, testData, { 
//             memoryExpiration: 5000,
//             useLocalStorage: false 
//         });
        
//         const retrievedData = CacheService.get(testKey);
        
//         if (retrievedData && retrievedData.id === testData.id) {
//             this.logTest('Memory Cache Test', true, 'Datos guardados y recuperados correctamente de memoria');
//             return true;
//         } else {
//             this.logTest('Memory Cache Test', false, 'Error al recuperar datos de memoria');
//             return false;
//         }
//     } catch (error) {
//         this.logTest('Memory Cache Test', false, `Error: ${error}`);
//         return false;
//     }
// }

// // Test de localStorage cache
// static testLocalStorageCache(): boolean {
//     try {
//         const testKey = 'test-localstorage-key';
//         const testData = { id: 2, name: 'Test Card 2', hp: 150 };
        
//         CacheService.delete(testKey);
        
//         CacheService.set(testKey, testData, { 
//             localStorageExpiration: 10000
//         });
        
//         const retrievedData = CacheService.get(testKey);
        
//         if (retrievedData && retrievedData.id === testData.id) {
//             this.logTest('LocalStorage Cache Test', true, 'Datos guardados y recuperados correctamente de localStorage');
//             return true;
//         } else {
//             this.logTest('LocalStorage Cache Test', false, 'Error al recuperar datos de localStorage');
//             return false;
//         }
//     } catch (error) {
//         this.logTest('LocalStorage Cache Test', false, `Error: ${error}`);
//         return false;
//     }
// }

// // Test de expiración de cache
// static async testCacheExpiration(): Promise<boolean> {
//     try {
//         const testKey = 'test-expiration-key';
//         const testData = { id: 3, name: 'Expiration Test', hp: 200 };
        
//         CacheService.delete(testKey);
        
//         CacheService.set(testKey, testData, { 
//             memoryExpiration: 100,
//             localStorageExpiration: 100
//         });
        
//         const immediateData = CacheService.get(testKey);
//         if (!immediateData) {
//             this.logTest('Cache Expiration Test', false, 'Datos no disponibles inmediatamente');
//             return false;
//         }
        
//         await new Promise(resolve => setTimeout(resolve, 200));
        
//         const expiredData = CacheService.get(testKey);
//         if (expiredData) {
//             this.logTest('Cache Expiration Test', false, 'Datos aún disponibles después de la expiración');
//             return false;
//         } else {
//             this.logTest('Cache Expiration Test', true, 'Datos expiraron correctamente');
//             return true;
//         }
//     } catch (error) {
//         this.logTest('Cache Expiration Test', false, `Error: ${error}`);
//         return false;
//     }
// }

// // Ejecutar todos los tests
// static async runAllTests(): Promise<{
//     total: number;
//     passed: number;
//     failed: number;
//     results: typeof this.testResults;
// }> {
//     this.testResults = [];
    
//     const tests = [
//         () => this.testMemoryCache(),
//         () => this.testLocalStorageCache(),
//         () => this.testCacheExpiration()
//     ];
    
//     let passed = 0;
//     let failed = 0;
    
//     for (const test of tests) {
//         try {
//             const result = await test();
//             if (result) {
//                 passed++;
//             } else {
//                 failed++;
//             }
//         } catch (error) {
//             failed++;
//             this.logTest('Test Execution', false, `Error ejecutando test: ${error}`);
//         }
//     }
    
//     return {
//         total: tests.length,
//         passed,
//         failed,
//         results: this.testResults
//     };
// }

// // Método para obtener estadísticas del cache
// static getCacheStats(): {
//     localStorageItems: number;
//     localStorageKeys: string[];
// } {
//     const localStorageKeys = Object.keys(localStorage).filter(key => 
//         key.startsWith('card-') || key.startsWith('random-') || key.startsWith('test-')
//     );
    
//     return {
//         localStorageItems: localStorageKeys.length,
//         localStorageKeys
//     };
// }

// // Limpiar todos los datos de test
// static cleanupTestData(): void {
//     const testKeys = [
//         'test-memory-key',
//         'test-localstorage-key', 
//         'test-expiration-key'
//     ];
    
//     testKeys.forEach(key => CacheService.delete(key));
//     this.logTest('Cleanup', true, 'Datos de test limpiados');
// }

// private static logTest(test: string, passed: boolean, message: string): void {
//     const result = {
//         test,
//         passed,
//         message,
//         timestamp: Date.now()
//     };
    
//     this.testResults.push(result);
    
//     const status = passed ? '✅ PASÓ' : '❌ FALLÓ';
//     console.log(`[Cache Test] ${status} - ${test}: ${message}`);
// }
// } 