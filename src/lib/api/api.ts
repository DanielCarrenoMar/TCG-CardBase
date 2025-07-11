import TCGdex from '@tcgdex/sdk'

const tcgdex = new TCGdex('es');

export function setTcgDexSpanish() {
    tcgdex.setLang('es');
}

export function setTcgDexEnglish() {
    tcgdex.setLang('en');
}

export { 
    tcgdex,
 };
