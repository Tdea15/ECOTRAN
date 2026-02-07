
import React, { useState, useEffect } from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Obras', href: '#obras' },
    { name: 'Maquinaria', href: '#maquinaria' },
    { name: 'Trabaja con nosotros', href: '#talento' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1f2937] py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-[#f59e0b]" />
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              ECOTRAN <span className="text-[#f59e0b]">S.A.</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-100 hover:text-[#f59e0b] transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-2 rounded font-bold uppercase text-xs transition-colors">
              Contacto
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1f2937] border-t border-gray-700">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-100 hover:text-[#f59e0b] py-2 font-bold uppercase text-sm tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-[#f59e0b] text-white py-3 rounded font-bold uppercase text-sm mt-4">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
