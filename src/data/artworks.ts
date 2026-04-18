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
      // 📌 agrega más fotos del proceso aquí
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
  // 📌 Agrega tus 7 obras restantes aquí
]

export const featuredArtworkId = 3