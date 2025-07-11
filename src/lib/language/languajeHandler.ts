import { setTcgDexEnglish, setTcgDexSpanish } from "$lib/api/api";

export var pageLanguage = 'es'; // Default language

export function setPageLanguage(lang:string) {
    if (lang === 'es') {
        setTcgDexSpanish();
        pageLanguage = 'es';
    } else {
        setTcgDexEnglish();
        pageLanguage = 'en';
    }
}