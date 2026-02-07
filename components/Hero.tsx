
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Video/Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-3 py-1 bg-[#f59e0b] text-[#1f2937] text-xs font-black uppercase tracking-widest rounded-sm mb-4">
            Líderes en Paraguay
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            CONSTRUYENDO EL <br />
            <span className="text-[#f59e0b]">FUTURO DE</span> <br />
            PARAGUAY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl border-l-4 border-[#f59e0b] pl-6">
            Solidez, compromiso y excelencia operativa en cada proyecto. Transformamos el paisaje nacional con ingeniería de vanguardia.
          </p>
          <div className="pt-8 flex flex-wrap gap-4">
            <a href="#obras" className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-10 py-4 rounded-sm font-extrabold text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1">
              Ver Nuestros Proyectos
            </a>
            <a href="#maquinaria" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-sm font-extrabold text-sm uppercase tracking-widest transition-all">
              Capacidad Operativa
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
