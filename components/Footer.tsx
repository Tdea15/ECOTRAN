
import React from 'react';
import { Facebook, Instagram, Linkedin, HardHat, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2937] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <HardHat className="h-8 w-8 text-[#f59e0b]" />
              <span className="text-2xl font-black tracking-tighter">
                ECOTRAN <span className="text-[#f59e0b]">S.A.</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicados a la infraestructura nacional desde hace más de 30 años. Construyendo solidez para las futuras generaciones de Paraguay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#334155] hover:bg-[#f59e0b] transition-colors rounded">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-[#334155] hover:bg-[#f59e0b] transition-colors rounded">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-[#334155] hover:bg-[#f59e0b] transition-colors rounded">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f59e0b]">Menú</h5>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#obras" className="hover:text-white transition-colors">Nuestras Obras</a></li>
              <li><a href="#maquinaria" className="hover:text-white transition-colors">Flota de Equipos</a></li>
              <li><a href="#talento" className="hover:text-white transition-colors">Recursos Humanos</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f59e0b]">Contacto</h5>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#f59e0b]" />
                <span>+595 (21) 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#f59e0b]" />
                <span>contacto@ecotran.com.py</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#f59e0b] mt-1" />
                <span>Avda. Aviadores del Chaco 1234, <br />Piso 12 - Asunción, Paraguay</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-bold mb-6 uppercase tracking-widest text-[#f59e0b]">Newsletter</h5>
            <p className="text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">Reciba actualizaciones sobre nuestras obras</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Su email"
                className="bg-[#334155] border-none px-4 py-3 text-sm focus:ring-1 focus:ring-[#f59e0b] outline-none rounded-l w-full"
              />
              <button className="bg-[#f59e0b] px-4 py-3 rounded-r hover:bg-[#d97706] transition-colors">
                Unirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-bold text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Ecotran S.A. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
