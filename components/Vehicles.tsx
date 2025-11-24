import React from 'react';
import { Vehicle } from '../types';
import { Users, Fuel, Gauge } from 'lucide-react';

const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Patagonia Overland 4x4",
    category: "4x4 Rooftop",
    capacity: 2,
    price: "$120.000 / día",
    image: "https://picsum.photos/seed/jeep/800/600",
    features: ["Carpa de Techo", "Cocina Equipada", "Tracción 4WD", "Kit de Camping"]
  },
  {
    id: 2,
    name: "Explorer Van",
    category: "Campervan",
    capacity: 3,
    price: "$150.000 / día",
    image: "https://picsum.photos/seed/van/800/600",
    features: ["Baño Portátil", "Cama Queen", "Calefacción Diesel", "Panel Solar"]
  },
  {
    id: 3,
    name: "Family Home",
    category: "Motorhome",
    capacity: 5,
    price: "$210.000 / día",
    image: "https://picsum.photos/seed/motorhome/800/600",
    features: ["Baño Completo", "Ducha Caliente", "Cocina Full", "Amplio Comedor"]
  }
];

const Vehicles: React.FC = () => {
  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-patagonia-green sm:text-4xl">Nuestra Flota</h2>
          <p className="mt-4 text-xl text-gray-600">Vehículos equipados para la hostilidad y belleza de la Patagonia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded-full uppercase tracking-wide">
                    {vehicle.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    {vehicle.capacity} Pers.
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{vehicle.name}</h3>
                <ul className="space-y-2 mb-6">
                  {vehicle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-patagonia-ice rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-2xl font-bold text-patagonia-green">{vehicle.price}</span>
                  <a href="#contact" className="text-brand-600 font-semibold hover:text-brand-800">
                    Cotizar &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;