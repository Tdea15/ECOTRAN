
import React, { useState } from 'react';
import { UserPlus, Upload, X, Briefcase } from 'lucide-react';

const TalentPortal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="talento" className="relative py-24 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center opacity-5">
        <Briefcase size={800} />
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
        <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-4">
          <UserPlus size={48} className="text-[#1f2937]" />
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#1f2937] leading-none uppercase">
          ¿Querés formar parte <br />de <span className="text-[#f59e0b]">Ecotran?</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Buscamos ingenieros, operarios y profesionales apasionados por la construcción que quieran dejar su huella en el desarrollo del país.
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1f2937] hover:bg-black text-white px-12 py-5 rounded-sm font-black text-sm uppercase tracking-widest shadow-2xl transition-all transform hover:scale-105"
        >
          Enviar mi Currículum
        </button>
      </div>

      {/* Modal Simulation */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#1f2937]/90 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="bg-[#f59e0b] p-6 flex justify-between items-center text-white">
              <h4 className="text-2xl font-black uppercase tracking-tighter">Portal de Talento</h4>
              <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>
            
            <form className="p-10 space-y-6" onSubmit={(e) => { e.preventDefault(); alert('CV Simulado enviado exitosamente'); setIsModalOpen(false); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400">Nombre Completo</label>
                  <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:border-[#f59e0b] outline-none font-medium" placeholder="Ej: Juan Pérez" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400">Email de Contacto</label>
                  <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:border-[#f59e0b] outline-none font-medium" placeholder="juan@ejemplo.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400">Área de Interés</label>
                <select className="w-full border-b-2 border-gray-200 py-2 focus:border-[#f59e0b] outline-none font-medium bg-white">
                  <option>Ingeniería y Obras</option>
                  <option>Operación de Maquinaria</option>
                  <option>Logística y Suministros</option>
                  <option>Administración</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-gray-400">Adjuntar CV (PDF/DOC)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-[#f59e0b] transition-colors cursor-pointer group">
                  <input type="file" className="hidden" id="cv-upload" />
                  <label htmlFor="cv-upload" className="cursor-pointer">
                    <Upload className="mx-auto mb-4 text-gray-300 group-hover:text-[#f59e0b] transition-colors" size={40} />
                    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Haga clic o arrastre su archivo aquí</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#1f2937] text-white py-5 font-black uppercase tracking-widest hover:bg-black transition-colors rounded">
                Finalizar Postulación
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TalentPortal;
