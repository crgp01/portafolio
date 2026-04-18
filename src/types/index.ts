export interface Artwork {
  id: number;
  title: string;
  technique: string;
  year: number;
  dimensions?: string;
  imageUrl: string;       // imagen principal (para la card)
  images: string[];       // todas las imágenes (para el modal)
  process: string;        // descripción del proceso
  alt: string;
}

export interface ContactFormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
}