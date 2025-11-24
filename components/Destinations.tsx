import React from 'react';
import { Destination } from '../types';
import { MapPin } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 1,
    title: "Base Torres",
    description: "El icónico mirador de las tres torres de granito. Un trekking exigente pero recompensado con una vista única en el mundo.",
    highlight: "Trekking Día Completo",
    image: "https://picsum.photos/seed/torres/600/400"
  },
  {
    id: 2,
    title: "Glaciar Grey",
    description: "Navega o camina cerca de esta impresionante masa de hielo. Parte del Campo de Hielo Sur.",
    highlight: "Navegación & Hielo",
    image: "https://picsum.photos/seed/grey/600/400"
  },
  {
    id: 3,
    title: "Cuernos del Paine",
    description: "Formaciones rocosas únicas visibles desde el Lago Pehoé. El mejor lugar para amaneceres fotográficos.",
    highlight: "Vistas Panorámicas",
    image: "https://picsum.photos/seed/cuernos/600/400"
  },
  {
    id: 4,
    title: "Valle del Francés",
    description: "El corazón del circuito W. Un anfiteatro natural rodeado de glaciares colgantes y picos de granito.",
    highlight: "Trekking Intermedio",
    image: "https://picsum.photos/seed/frances/600/400"
  }
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 font-semibold tracking-wider uppercase">Explora el Parque Nacional</span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mt-2">Destinos Imperdibles</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Con Patagonia Campers, tienes la libertad de despertar en estos lugares soñados. Te ayudamos a planificar tu ruta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-w-16 aspect-h-9 h-64 sm:h-80">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 text-patagonia-ice mr-1" />
                  <span className="text-sm font-medium text-patagonia-ice">{dest.highlight}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{dest.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2 group-hover:line-clamp-none transition-all">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;