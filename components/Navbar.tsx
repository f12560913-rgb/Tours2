import React, { useState, useEffect } from 'react';
import { Menu, X, Mountain } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Campers', href: '#vehicles' },
    { name: 'Destinos', href: '#destinations' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-900 shadow-xl py-2' : 'bg-gradient-to-b from-black/80 to-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home" className="flex items-center space-x-2">
              <Mountain className="h-8 w-8 text-patagonia-ice transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none tracking-wider">PATAGONIA</span>
                <span className="text-patagonia-ice text-xs font-semibold tracking-[0.2em]">CAMPERS</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-100 hover:text-patagonia-ice px-3 py-2 rounded-md text-sm font-medium transition-all hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="bg-patagonia-ice text-brand-900 px-5 py-2.5 rounded-full font-bold hover:bg-white hover:shadow-lg transition-all transform hover:scale-105 active:scale-95 text-sm">
                Reservar Ahora
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-brand-900 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-white hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-brand-900 bg-patagonia-ice block px-3 py-2 rounded-md text-base font-bold text-center mt-4"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;