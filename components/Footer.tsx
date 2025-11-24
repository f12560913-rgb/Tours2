import React from 'react';
import { Instagram, Facebook, Twitter, Mountain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6 text-patagonia-ice" />
              <span className="font-bold text-xl">PATAGONIA CAMPERS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Facilitando aventuras en Torres del Paine y la Patagonia chilena desde 2014. Calidad, seguridad y naturaleza.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-patagonia-ice transition-colors">Inicio</a></li>
              <li><a href="#vehicles" className="hover:text-patagonia-ice transition-colors">Campers</a></li>
              <li><a href="#destinations" className="hover:text-patagonia-ice transition-colors">Destinos</a></li>
              <li><a href="#contact" className="hover:text-patagonia-ice transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Arriendo de Campers</li>
              <li>Equipamiento de Camping</li>
              <li>Asesoría de Ruta W & O</li>
              <li>Traslados Aeropuerto</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-patagonia-ice hover:text-gray-900 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-patagonia-ice hover:text-gray-900 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-patagonia-ice hover:text-gray-900 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Patagonia Campers. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <span className="mr-4">Política de Privacidad</span>
            <span>Términos y Condiciones</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;