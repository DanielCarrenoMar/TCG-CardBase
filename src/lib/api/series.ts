import { Query, SerieModel } from "@tcgdex/sdk";
import { tcgdex } from "./api";

export const getListSeries = async () => {                             //obtiene una lista de series random
    try {
        const listSeries = await tcgdex.serie.list();                   //obtengo la informacion basica de las series
        if (!listSeries || listSeries.length === 0) {
            console.error('No series found');
            return [];
        }    

        // console.log('lista basica series: ', listSeries);

        const seriesPromises = listSeries.map(serie => getSerieFullData(serie.id));         //map para un array de promesas, cada promesa es el result de getSerieFullData
        const listSeriesFullData = await Promise.all(seriesPromises);                   //resuelve todas las promesas y devuelve un array con los resultados

        // console.log('series full data: ', listSeriesFullData);
        // console.log('logo', listSeries[0].logo);
        // const serie = await tcgdex.fetch('series', 'xy');
        // console.log('serie xy: ', serie?.logo, ' nombre: ', serie?.name, 'sets: ', serie?.sets[0].symbol);
        
        
        return listSeriesFullData;  
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
        const data = await getSeriesWithLogo();
        if (!data) {
            console.error('No series found in otra API');
            return [];
        }

        let seriesForCarrousel: { alt: any; src: string; title: any; }[] = [];                 //array que va a contener el formato que espera carousel
        if (data) {         
            seriesForCarrousel = data.map(serie => {                 
                return{
                    alt: `Logo de la serie ${serie.name}`,
                    src: serie.logo,
                    title: serie.name
                }
            })
        }
        // console.log('series para carousel', seriesForCarrousel);
        return seriesForCarrousel;
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