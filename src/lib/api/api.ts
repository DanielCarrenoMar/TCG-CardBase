import TCGdex from '@tcgdex/sdk'

let initialLang: "es" | "en" = 'es';
if (typeof window !== 'undefined' && window.localStorage) {
    initialLang = localStorage.getItem('pageLanguage') as "es" | "en" || 'es';
}
const tcgdex = new TCGdex(initialLang);

export function setTcgDexSpanish() {
    tcgdex.setLang('es');
}

export function setTcgDexEnglish() {
    tcgdex.setLang('en');
}

export { 
    tcgdex,
 };
