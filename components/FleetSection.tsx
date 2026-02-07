
import React from 'react';
import { FLEET } from '../constants';
import { Truck, Activity, Building2 } from 'lucide-react';

const FleetSection: React.FC = () => {
  return (
    <section id="maquinaria" className="py-24 bg-[#1f2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-sm font-black text-[#f59e0b] uppercase tracking-widest mb-2">Poder Logístico</h2>
              <h3 className="text-4xl md:text-5xl font-black leading-tight">CAPACIDAD OPERATIVA SIN LÍMITES</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Contamos con una de las flotas de maquinaria pesada más modernas del país, asegurando autonomía y rapidez en la ejecución de grandes obras de infraestructura.
            </p>
            <div className="space-y-6">
              {[
                { icon: <Truck />, label: "Logística propia integral", desc: "Transporte y abastecimiento sin terceros." },
                { icon: <Activity />, label: "Mantenimiento preventivo", desc: "Equipos certificados para operatividad 24/7." },
                { icon: <Building2 />, label: "Soporte en sitio", desc: "Talleres móviles para asistencia inmediata." }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="bg-[#334155] p-3 rounded text-[#f59e0b]">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-wide">{item.label}</h5>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {FLEET.map((machine) => (
              <div key={machine.id} className="bg-[#334155] p-2 rounded-lg overflow-hidden flex flex-col group">
                <div className="relative h-48 overflow-hidden rounded-t-md mb-4">
                  <img 
                    src={machine.image} 
                    alt={machine.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 bg-[#f59e0b] text-white font-black px-4 py-2 text-sm uppercase">
                    {machine.count}
                  </div>
                </div>
                <div className="px-4 pb-6">
                  <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter">{machine.name}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {machine.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
