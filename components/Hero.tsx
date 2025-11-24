import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1533035339943-524f0c96c469?q=80&w=2574&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 via-black/20 to-brand-900/60"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 z-10">
        <span className="text-patagonia-ice font-bold tracking-widest uppercase mb-4 animate-fade-in text-sm sm:text-base bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">
          Patagonia Chilena
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight max-w-5xl animate-fade-in">
          Torres del Paine <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-patagonia-ice to-white">
            Sin Límites
          </span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-100 max-w-2xl mb-10 drop-shadow-lg font-light animate-fade-in">
          Arrienda tu camper y vive la libertad de la carretera austral con la seguridad y confort que mereces.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in">
          <a href="#vehicles" className="px-8 py-4 bg-patagonia-ice text-brand-900 font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 shadow-lg text-center">
            Ver Flota 2025
          </a>
          <a href="#contact" className="px-8 py-4 bg-black/30 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-brand-900 transition-all shadow-lg backdrop-blur-sm text-center">
            Planificar Aventura
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-10">
        <a href="#about" className="text-white hover:text-patagonia-ice transition-colors p-2 bg-black/20 rounded-full backdrop-blur-sm">
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Hero;