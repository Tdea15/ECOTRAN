
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectFilters from './components/ProjectFilters';
import FleetSection from './components/FleetSection';
import TalentPortal from './components/TalentPortal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Section - Quick Info */}
        <section className="bg-[#334155] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="space-y-1">
                <p className="text-3xl md:text-5xl font-black text-[#f59e0b]">+30</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Años de Trayectoria</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-5xl font-black text-[#f59e0b]">+150</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Obras Finalizadas</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-5xl font-black text-[#f59e0b]">+500</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Colaboradores</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl md:text-5xl font-black text-[#f59e0b]">100%</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Capital Paraguayo</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectFilters />
        
        {/* Quote Banner */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black italic text-[#1f2937] leading-tight">
              "No solo construimos estructuras, <br />
              <span className="text-[#f59e0b]">construimos el progreso de una nación</span>."
            </h2>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="h-[2px] w-12 bg-[#f59e0b]"></div>
              <span className="text-sm font-black uppercase tracking-widest text-gray-400">Directorio Ecotran S.A.</span>
              <div className="h-[2px] w-12 bg-[#f59e0b]"></div>
            </div>
          </div>
        </section>

        <FleetSection />
        <TalentPortal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
