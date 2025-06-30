import { tcgdex } from "./api";
import { getSetById } from "./sets";

interface setDetail {
    cardCount: any;
    id: string;
    name: string;
    symbol: string;
}

interface LogoData {
    id: string; 
    alt: string;
    src: string;
    title: string;
}

const logoData: LogoData[] = [
    { id: 'base', alt: 'Logo de la serie Base', src: 'https://images.pokemontcg.io/base2/logo.png', title: 'Base' },
    { id: 'neo', alt: 'Logo de la serie Neo', src: 'https://images.pokemontcg.io/neo1/logo.png', title: 'Neo' },
    { id: 'ex', alt: 'Logo de la serie EX', src: 'https://images.pokemontcg.io/ex1/logo.png', title: 'EX' },
    { id: 'pop', alt: 'Logo de la serie POP', src: 'https://images.pokemontcg.io/pop1/logo.png', title: 'POP' },
    { id: 'dp', alt: 'Logo de la serie Diamante & Perla', src: 'https://images.pokemontcg.io/dpp/logo.png', title: 'Diamond & Pearl' },
    { id: 'pl', alt: 'Logo de la serie Platino', src: 'https://images.pokemontcg.io/pl4/logo.png', title: 'Platinum' },
    { id: 'hgss', alt: 'Logo de la serie HeartGold SoulSilver', src: 'https://images.pokemontcg.io/hgss1/logo.png', title: 'HeartGold & SoulSilver' },
    { id: 'bw', alt: 'Logo de la serie Negro y Blanco', src: 'https://images.pokemontcg.io/bw1/logo.png', title: 'Black & White' },
    { id: 'xy', alt: 'Logo de la serie XY', src: 'https://images.pokemontcg.io/xy4/logo.png', title: 'XY' },
    { id: 'sm', alt: 'Logo de la serie Sol y Luna', src: 'https://images.pokemontcg.io/smp/logo.png', title: 'Sun & Moon' },
    { id: 'swsh', alt: 'Logo de la serie Espada y Escudo', src: 'https://images.pokemontcg.io/swsh1/logo.png', title: 'Sword & Shield' },
    { id: 'sv', alt: 'Logo de la serie Escarlata y Púrpura', src: 'https://images.pokemontcg.io/sv1/logo.png', title: 'Scarlet & Violet' },
    { id: 'tk', alt: 'Logo de la serie Kits de Entrenador', src: 'https://images.pokemontcg.io/tk1a/logo.png', title: 'Trainer Kits' }, // Se asume un logo representativo para Trainer Kits
    { id: 'mc', alt: "Logo de la serie McDonald's Collection", src: 'https://images.pokemontcg.io/mc1/logo.png', title: "McDonald's Collection" }, // Se asume un logo representativo para McDonald's
    { id: 'tcgp', alt: 'Logo de la serie Juego de Cartas Coleccionables Pokémon Pocket', src: 'https://images.pokemontcg.io/p25/logo.png', title: 'Pokémon TCG Pocket' }, // Se asume un logo representativo para TCG Pocket
];

function setsWithoutSDK(sets:any) {
    const { sdk, restOfSet } = sets;
    return restOfSet as setDetail;
}

//obtener lista de series con toda la tada, mas el logo
export const getListSeries = async () => {                             //obtiene una lista de series random
    try {
        const listSeries = await tcgdex.serie.list() ;                   //obtengo la informacion basica de las series
        if (!listSeries || listSeries.length === 0) {
            console.error('No series found');
            return [];
        }    

        const seriesPromises = listSeries.map(serie => getSerieFullData(serie.id));         //map para un array de promesas, cada promesa es el result de getSerieFullData
        const listSeriesFullData = await Promise.all(seriesPromises);                   //resuelve todas las promesas y devuelve un array con los resultados
        
// console.log('de', listSeriesFullData);


        //incluir logo
        const seriesFullDataWithLogo = listSeriesFullData.map(serie =>{
            let logoDataI = logoData.find(logo => logo.id == serie?.id);                        //extraer src logo             
            const { sdk, sets,...restOfSerie } = serie;                                              //quitar sdk
// const serieData = serie as any; // Usar any para acceder a propiedades dinámicas
//const { sdk, sets,...restOfSerie } = serieData;               
            const setsI = setsWithoutSDK(sets);  
            console.log('pruebaaaaaa', setsI);
                      
            return{
                ...restOfSerie,
                sets: sets,
                src: logoDataI?.src,
            }
        })
        return seriesFullDataWithLogo;
    } catch (error) {
        console.error('Error fetching series:', error);
        return null;
    }
}

//para retornar el nombre de la serie con el logo. Impementa otra api
export const getSeriesWithLogo = async () => {
    try {
        const response = await fetch('https://api.pokemontcg.io/v2/sets');          //otra api
        // console.log('debug ', response);
        
        if (!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }

        const data = await response.json();
        if (!data || !data.data || data.data.length === 0) {
            console.error('No series found in otra API');
            return [];
        }

        const filterData = new Map();  // Use a Map para almacenar nombre de series unicas y su primer logo

        data.data.forEach((set: { series: any; images: { logo: any; }; }) => {
            const serieName = set.series;
            const serieLogo = set.images.logo; 

            if (!filterData.has(serieName)) {                   //si el nombre de la serie aun no se ha almacenado
                if (serieLogo) {
                    filterData.set(serieName,{ 
                        name: serieName,
                        logo: serieLogo,}
                    );
                }
            }
        });
        
        const series = Array.from(filterData.values());                  // convierte el map a un array de objetos

        // console.log('Series data from otra API: ', series);
        
        return series;
    } catch (e) {
        console.error(e);
        return null;
    }
}

//setea el formato de las series para ser aceptados por Carrusel de svelte
export const getSeriesForCarrousel = async() => {
    try {
        // const data = await getSeriesWithLogo();
        // if (!data) {
        //     console.error('No series found in otra API');
        //     return [];
        // }

        // let seriesForCarrousel: { alt: any; src: string; title: any; }[] = [];                 //array que va a contener el formato que espera carousel
        // if (data) {         
        //     seriesForCarrousel = data.map(serie => {             
        //         return{
        //             id: `${serie.name.toLowerCase()}`,
        //             alt: `Logo de la serie ${serie.name}`,
        //             src: serie.logo,
        //             title: serie.name                    
        //         }
        //     })
        // }
        // console.log('series para carousel', seriesForCarrousel);


        return logoData;
    } catch (e) {
        console.error(e);
        return null;       
    }    
}

const getSerieFullData = async (id: string) => {
    try {
        const serie = await tcgdex.serie.get(id);
        if (!serie) {
            console.error('Serie not found');
            return null;
        }
        return serie;        
    } catch (error) {
        console.error('Error fetching serie:', error);
        return null;
    }
}

// Obtener una serie por ID con logo
export const getSerieById = async (id: string) => {
    try {
        const serie = await tcgdex.serie.get(id);
        if (!serie) {
            console.error('Serie not found');
            return null;
        }

        // Buscar el logo correspondiente
        let logoDataI = logoData.find(logo => logo.id === id);
        
        // Extraer sets sin SDK
        const serieData = serie as any; // Usar any para acceder a propiedades diamicas
        const { sdk, sets, ...restOfSerie } = serieData;
        const setsI = setsWithoutSDK(sets);

        return {
            ...restOfSerie,
            sets: sets,
            src: logoDataI?.src,
        };
    } catch (error) {
        console.error('Error fetching serie by ID:', error);
        return null;
    }
}