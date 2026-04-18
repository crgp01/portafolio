import type { Artwork } from '../types'

// 📁 Las imágenes deben ir en: public/images/
export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Maqui y Mariposa',
    technique: 'Oleo sobre tela',
    year: 2022,
    dimensions: '40 cm x 27 cm',
    imageUrl: '/images/maqui-y-mariposa.jpg',
    alt: 'Gato negro con una mariposa monarca',
  },
  {
    id: 2,
    title: 'Esfera hiperealista',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/esfera-hiperealista.jpg',
    alt: 'Esfera de cristal ilustrada digitalmente',
  },
  {
    id: 3,
    title: 'Familia de zorros',
    technique: 'Procreate',
    year: 2023,
    imageUrl: '/images/familia-de-zorros.jpg',
    alt: 'Paisaje digital con montañas y zorros',
  },
]

// ID de la obra que aparece destacada en el Hero
export const featuredArtworkId = 3