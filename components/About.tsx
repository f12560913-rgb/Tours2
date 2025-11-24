import React from 'react';
import { CheckCircle2, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-patagonia-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Más que un arriendo, una experiencia de vida</h2>
            <p className="text-gray-300 mb-6 text-lg">
              En Patagonia Campers, nacimos de la pasión por el sur del mundo. Entendemos que Torres del Paine no es solo un destino, es un desafío y una revelación.
            </p>
            <p className="text-gray-300 mb-8">
              Inspirados por la tradición turística de excelencia (como nuestros amigos de Angelmó Tours en el norte), traemos ese estándar de hospitalidad a la ruta austral. Ofrecemos asistencia 24/7 y vehículos chequeados mecánicamente para las condiciones de la Patagonia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-patagonia-ice mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Libertad Total</h4>
                  <p className="text-gray-400 text-sm">Sin horarios. Tú decides dónde ver el amanecer.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-patagonia-ice mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Seguridad Garantizada</h4>
                  <p className="text-gray-400 text-sm">Seguro full cobertura y asistencia en ruta incluidos.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-patagonia-ice mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Turismo Sustentable</h4>
                  <p className="text-gray-400 text-sm">Comprometidos con el cuidado del parque y 'Leave No Trace'.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/camping/600/700" 
              alt="Camping experience" 
              className="rounded-lg shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden sm:block">
              <p className="text-gray-900 font-bold text-3xl">10+</p>
              <p className="text-gray-600 text-sm">Años recorriendo<br/>la Patagonia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;