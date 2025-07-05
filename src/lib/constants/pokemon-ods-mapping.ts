export interface PokemonTypeODSMapping {
  type: string;
  ods: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

export const POKEMON_TYPE_ODS_MAPPING: PokemonTypeODSMapping[] = [
  {
    type: 'Fuego',
    ods: {
      id: 7,
      name: 'Energía asequible y no contaminante',
      description: 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos',
      image: '/images/ods/S-WEB-Goal-07.png'
    }
  },
  {
    type: 'Agua',
    ods: {
      id: 6,
      name: 'Agua limpia y saneamiento',
      description: 'Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos',
      image: '/images/ods/S-WEB-Goal-06.png'
    }
  },
  {
    type: 'Planta',
    ods: {
      id: 15,
      name: 'Vida de ecosistemas terrestres',
      description: 'Gestionar sosteniblemente los bosques, luchar contra la desertificación, detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad',
      image: '/images/ods/S-WEB-Goal-15.png'
    }
  },
  {
    type: 'Rayo',
    ods: {
      id: 7,
      name: 'Energía asequible y no contaminante',
      description: 'Garantizar el acceso a una energía asequible, segura, sostenible y moderna para todos',
      image: '/images/ods/S-WEB-Goal-07.png'
    }
  },
  {
    type: 'Psíquico',
    ods: {
      id: 3,
      name: 'Salud y bienestar',
      description: 'Garantizar una vida sana y promover el bienestar para todos en todas las edades',
      image: '/images/ods/S-WEB-Goal-03.png'
    }
  },
  {
    type: 'Lucha',
    ods: {
      id: 16,
      name: 'Paz, justicia e instituciones sólidas',
      description: 'Promover sociedades, justas, pacíficas e inclusivas',
      image: '/images/ods/S-WEB-Goal-16.png'
    }
  },
  {
    type: 'Normal',
    ods: {
      id: 10,
      name: 'Reducción de las desigualdades',
      description: 'Reducir la desigualdad en y entre los países',
      image: '/images/ods/S-WEB-Goal-10.png'
    }
  },
  {
    type: 'Hada',
    ods: {
      id: 5,
      name: 'Igualdad de género',
      description: 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas',
      image: '/images/ods/S-WEB-Goal-05.png'
    }
  },
  {
    type: 'Acero',
    ods: {
      id: 9,
      name: 'Industria, innovación e infraestructura',
      description: 'Construir infraestructuras resilientes, promover la industrialización sostenible y fomentar la innovación',
      image: '/images/ods/S-WEB-Goal-09.png'
    }
  },
  {
    type: 'Siniestro',
    ods: {
      id: 16,
      name: 'Paz, justicia e instituciones sólidas',
      description: 'Promover sociedades, justas, pacíficas e inclusivas',
      image: '/images/ods/S-WEB-Goal-16.png'
    }
  },
  {
    type: 'Dragón',
    ods: {
      id: 14,
      name: 'Vida submarina',
      description: 'Conservar y utilizar en forma sostenible los océanos, los mares y los recursos marinos para el desarrollo sostenible',
      image: '/images/ods/S-WEB-Goal-14.png'
    }
  }
];

export function getODSByPokemonType(type: string) {
  const cleanType = type?.replace(/guego/gi, 'Fuego')
    .replace(/incolora/gi, 'Normal')
    .replace(/metalica/gi, 'Hada')
    .replace(/Metálica/gi, 'Acero')
    .replace(/Oscura/gi, 'Siniestro');
  
  return POKEMON_TYPE_ODS_MAPPING.find(mapping => mapping.type === cleanType);
}

export function getTypeImagePath(type: string): string {
  const typeImageMap: { [key: string]: string } = {
    'Fuego': '/src/lib/images/fire.png',
    'Agua': '/src/lib/images/water.png',
    'Planta': '/src/lib/images/grass.png',
    'Rayo': '/src/lib/images/electric.png',
    'Psíquico': '/src/lib/images/psychic.png',
    'Lucha': '/src/lib/images/fighting.png',
    'Normal': '/src/lib/images/normal.png',
    'Hada': '/src/lib/images/fairy.png',
    'Acero': '/src/lib/images/steel.png',
    'Siniestro': '/src/lib/images/dark.png',
    'Dragón': '/src/lib/images/dragon.png',
  };
  
  const cleanType = type?.replace(/guego/gi, 'Fuego')
    .replace(/incolora/gi, 'Normal')
    .replace(/metalica/gi, 'Hada')
    .replace(/Metálica/gi, 'Acero')
    .replace(/Oscura/gi, 'Siniestro');
  
  return typeImageMap[cleanType] || '/src/lib/images/normal.png';
}

export function getAllODS() {
  return POKEMON_TYPE_ODS_MAPPING.map(mapping => mapping.ods);
} 