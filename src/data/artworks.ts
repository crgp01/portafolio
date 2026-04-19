import type { Artwork } from '../types'

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Maqui y Mariposa',
    technique: 'Oleo sobre tela',
    year: 2022,
    dimensions: '40 cm x 27 cm',
    imageUrl: '/images/maqui-y-mariposa.jpg',
    images: [
      '/images/maqui-y-mariposa.jpg',
      '/images/maqui-y-mariposa2.jpg',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Gato negro con una mariposa monarca',
  },
  {
    id: 2,
    title: 'Esfera hiperealista',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/esfera-hiperealista.png',
    images: [
      '/images/esfera-hiperealista.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Esfera de cristal ilustrada digitalmente',
  },
  {
    id: 3,
    title: 'Familia de zorros',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/paisaje_zorro.png',
    images: [
      '/images/paisaje_zorro.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Paisaje digital con montañas y zorros',
  },
  {
    id: 4,
    title: 'Chincol furioso',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/chincol.png',
    images: [
      '/images/chincol.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Chincol furioso',
  },
  {
    id: 5,
    title: 'Manzana hiperrealista',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/manzana.png',
    images: [
      '/images/manzana.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Manzana hiperealista',
  },
  {
    id: 6,
    title: 'Avellana y Chinita',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/avellana-chinita.jpg',
    images: [
      '/images/avellana-chinita.jpg',
      '/images/avellana-chinita2.jpg',
      '/images/avellana-chinita3.jpg',
      '/images/avellana-chinita4.jpg',
      '/images/avellana-chinita5.jpg',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Avellana y Chinita',
  },
  {
    id: 7,
    title: 'Lampara vintage',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/lampara.png',
    images: [
        '/images/lampara.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Lampara Vintage',
  }, 
  {
    id: 8,
    title: 'Cordelia Rufina Mariana',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/cordelia.png',
    images: [
        '/images/cordelia.png',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Cordelia Rufina Mariana',
  }
  ,{
    id: 9,
    title: 'Retrato karin',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/karin.jpg',
    images: [
        '/images/karin.jog',
    ],
    process: 'Descripción del proceso de esta obra...',
    alt: 'Retrato karin',
  }
  // 📌 Agrega tus 7 obras restantes aquí
]

export const featuredArtworkId = 3