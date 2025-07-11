import { setTcgDexEnglish, setTcgDexSpanish } from "$lib/api/api";

let initialLang = 'es';
if (typeof window !== 'undefined' && window.localStorage) {
  initialLang = localStorage.getItem('pageLanguage') || 'es';
}
export var pageLanguage = initialLang; // Default language

export function setPageLanguage(lang:string) {
    if (lang === 'es') {
        setTcgDexSpanish();
        pageLanguage = 'es';
    } else {
        setTcgDexEnglish();
        pageLanguage = 'en';
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('pageLanguage', pageLanguage);
    }
}