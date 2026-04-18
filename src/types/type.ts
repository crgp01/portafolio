export interface Artwork {
    id: number;
    title: string;
    technique: string;
    year: number;
    dimensions?: string;
    imageUrl: string;
    alt: string;
  }
  
  export interface ContactFormData {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    mensaje: string;
  }