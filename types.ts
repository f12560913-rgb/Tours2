export interface Vehicle {
  id: number;
  name: string;
  category: '4x4 Rooftop' | 'Motorhome' | 'Campervan';
  capacity: number;
  price: string;
  image: string;
  features: string[];
}

export interface Destination {
  id: number;
  title: string;
  description: string;
  image: string;
  highlight: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  rating: number;
}