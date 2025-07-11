import { pageLanguage } from "$lib/language/languajeHandler";

export interface PokemonTypeODSMapping {
  type: string;
  ods: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

export const POKEMON_TYPE_ODS_MAPPING = {
  es: [
    {
      type: 'Fuego',
      ods: {
        id: 7,
        name: 'Energía asequible y no contaminante',
        description: 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos',
        image: 'images/ods/S-WEB-Goal-07.png'
      }
    },
    {
      type: 'Agua',
      ods: {
        id: 6,
        name: 'Agua limpia y saneamiento',
        description: 'Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos',
        image: 'images/ods/S-WEB-Goal-06.png'
      }
    },
    {
      type: 'Planta',
      ods: {
        id: 15,
        name: 'Vida de ecosistemas terrestres',
        description: 'Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad',
        image: 'images/ods/S-WEB-Goal-15.png'
      }
    },
    {
      type: 'Rayo',
      ods: {
        id: 7,
        name: 'Energía asequible y no contaminante',
        description: 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos',
        image: 'images/ods/S-WEB-Goal-07.png'
      }
    },
    {
      type: 'Psíquico',
      ods: {
        id: 3,
        name: 'Salud y bienestar',
        description: 'Garantizar una vida sana y promover el bienestar para todos en todas las edades',
        image: 'images/ods/S-WEB-Goal-03.png'
      }
    },
    {
      type: 'Lucha',
      ods: {
        id: 16,
        name: 'Paz, justicia e instituciones sólidas',
        description: 'Promover sociedades, justas, pacíficas e inclusivas',
        image: 'images/ods/S-WEB-Goal-16.png'
      }
    },
    {
      type: 'Normal',
      ods: {
        id: 10,
        name: 'Reducción de las desigualdades',
        description: 'Reducir la desigualdad en y entre los países',
        image: 'images/ods/S-WEB-Goal-10.png'
      }
    },
    {
      type: 'Hada',
      ods: {
        id: 5,
        name: 'Igualdad de género',
        description: 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas',
        image: 'images/ods/S-WEB-Goal-05.png'
      }
    },
    {
      type: 'Acero',
      ods: {
        id: 9,
        name: 'Industria, innovación e infraestructura',
        description: 'Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación',
        image: 'images/ods/S-WEB-Goal-09.png'
      }
    },
    {
      type: 'Siniestro',
      ods: {
        id: 16,
        name: 'Paz, justicia e instituciones sólidas',
        description: 'Promover sociedades, justas, pacíficas e inclusivas',
        image: 'images/ods/S-WEB-Goal-16.png'
      }
    },
    {
      type: 'Dragón',
      ods: {
        id: 14,
        name: 'Vida submarina',
        description: 'Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible',
        image: 'images/ods/S-WEB-Goal-14.png'
      }
    }
  ],
  en: [
    {
      type: 'Fire',
      ods: {
        id: 7,
        name: 'Affordable and Clean Energy',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
        image: 'images/ods/S-WEB-Goal-07.png'
      }
    },
    {
      type: 'Water',
      ods: {
        id: 6,
        name: 'Clean Water and Sanitation',
        description: 'Ensure availability and sustainable management of water and sanitation for all',
        image: 'images/ods/S-WEB-Goal-06.png'
      }
    },
    {
      type: 'Grass',
      ods: {
        id: 15,
        name: 'Life on Land',
        description: 'Sustainably manage forests, combat desertification, halt and reverse land degradation, halt biodiversity loss',
        image: 'images/ods/S-WEB-Goal-15.png'
      }
    },
    {
      type: 'Electric',
      ods: {
        id: 7,
        name: 'Affordable and Clean Energy',
        description: 'Ensure access to affordable, reliable, sustainable and modern energy for all',
        image: 'images/ods/S-WEB-Goal-07.png'
      }
    },
    {
      type: 'Psychic',
      ods: {
        id: 3,
        name: 'Good Health and Well-being',
        description: 'Ensure healthy lives and promote well-being for all at all ages',
        image: 'images/ods/S-WEB-Goal-03.png'
      }
    },
    {
      type: 'Fighting',
      ods: {
        id: 16,
        name: 'Peace, Justice and Strong Institutions',
        description: 'Promote peaceful and inclusive societies for sustainable development',
        image: 'images/ods/S-WEB-Goal-16.png'
      }
    },
    {
      type: 'Normal',
      ods: {
        id: 10,
        name: 'Reduced Inequalities',
        description: 'Reduce inequality within and among countries',
        image: 'images/ods/S-WEB-Goal-10.png'
      }
    },
    {
      type: 'Fairy',
      ods: {
        id: 5,
        name: 'Gender Equality',
        description: 'Achieve gender equality and empower all women and girls',
        image: 'images/ods/S-WEB-Goal-05.png'
      }
    },
    {
      type: 'Steel',
      ods: {
        id: 9,
        name: 'Industry, Innovation and Infrastructure',
        description: 'Build resilient infrastructure, promote sustainable industrialization and foster innovation',
        image: 'images/ods/S-WEB-Goal-09.png'
      }
    },
    {
      type: 'Dark',
      ods: {
        id: 16,
        name: 'Peace, Justice and Strong Institutions',
        description: 'Promote peaceful and inclusive societies for sustainable development',
        image: 'images/ods/S-WEB-Goal-16.png'
      }
    },
    {
      type: 'Dragon',
      ods: {
        id: 14,
        name: 'Life Below Water',
        description: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
        image: 'images/ods/S-WEB-Goal-14.png'
      }
    }
  ]
};

export function getODSByPokemonType(type: string) {
  const cleanType = type?.replace(/guego/gi, pageLanguage === 'es' ? 'Fuego' : 'Fire')
    .replace(/incolora/gi, pageLanguage === 'es' ? 'Normal' : 'Normal')
    .replace(/metalica/gi, pageLanguage === 'es' ? 'Hada' : 'Fairy')
    .replace(/Metálica/gi, pageLanguage === 'es' ? 'Acero' : 'Steel')
    .replace(/Oscura/gi, pageLanguage === 'es' ? 'Siniestro' : 'Dark');
  return POKEMON_TYPE_ODS_MAPPING[pageLanguage].find((mapping: any) => mapping.type === cleanType);
}

export function getTypeImagePath(type: string): string {
  const typeImageMap: { [key: string]: string } = {
    'Fuego': 'images/types/fire.png',
    'Agua': 'images/types/water.png',
    'Planta': 'images/types/grass.png',
    'Rayo': 'images/types/electric.png',
    'Psíquico': 'images/types/psychic.png',
    'Lucha': 'images/types/fighting.png',
    'Normal': 'images/types/normal.png',
    'Hada': 'images/types/fairy.png',
    'Acero': 'images/types/steel.png',
    'Siniestro': 'images/types/dark.png',
    'Dragón': 'images/types/dragon.png',
  };

  const cleanType = type?.replace(/guego/gi, 'Fuego')
    .replace(/incolora/gi, 'Normal')
    .replace(/metalica/gi, 'Hada')
    .replace(/Metálica/gi, 'Acero')
    .replace(/Oscura/gi, 'Siniestro');

  return typeImageMap[cleanType] || 'images/types/normal.png';
}

export function getAllODS() {
  return POKEMON_TYPE_ODS_MAPPING[pageLanguage].map((mapping: any) => mapping.ods);
}