import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
      setFormStatus('idle');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Comienza Tu Aventura</h2>
          <p className="mt-4 text-gray-600">Contáctanos para verificar disponibilidad o armar tu itinerario.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="bg-patagonia-green text-white rounded-2xl p-8 shadow-lg lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-patagonia-ice" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Llámanos / WhatsApp</p>
                  <p className="font-semibold">+56 9 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-patagonia-ice" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-semibold">reservas@patagoniacampers.cl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-patagonia-ice" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Oficina Central</p>
                  <p className="font-semibold">Puerto Natales, Región de Magallanes</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4">Horario de Atención</h4>
              <p className="text-gray-300 text-sm">Lunes - Domingo: 09:00 - 20:00</p>
              <p className="text-gray-300 text-sm mt-2">Soporte en ruta: 24/7</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                  <input required type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-patagonia-green focus:ring focus:ring-patagonia-green focus:ring-opacity-50 bg-gray-50 p-3" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <input required type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-patagonia-green focus:ring focus:ring-patagonia-green focus:ring-opacity-50 bg-gray-50 p-3" placeholder="juan@ejemplo.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha Estimada</label>
                  <input type="date" id="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-patagonia-green focus:ring focus:ring-patagonia-green focus:ring-opacity-50 bg-gray-50 p-3" />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700">Vehículo de Interés</label>
                  <select id="vehicle" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-patagonia-green focus:ring focus:ring-patagonia-green focus:ring-opacity-50 bg-gray-50 p-3">
                    <option>Patagonia Overland 4x4</option>
                    <option>Explorer Van</option>
                    <option>Family Home</option>
                    <option>Aún no lo decido</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje / Consultas</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-patagonia-green focus:ring focus:ring-patagonia-green focus:ring-opacity-50 bg-gray-50 p-3" placeholder="Cuéntanos sobre tu viaje ideal..."></textarea>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : (
                    <>
                      Enviar Consulta
                      <Send className="ml-2 -mr-1 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;