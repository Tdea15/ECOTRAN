
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { MapPin } from 'lucide-react';

const ProjectFilters: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'Todas'>('Todas');

  const filteredProjects = filter === 'Todas' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: (ProjectCategory | 'Todas')[] = [
    'Todas',
    ProjectCategory.CIVILES,
    ProjectCategory.VIALES,
    ProjectCategory.INDUSTRIALES
  ];

  return (
    <section id="obras" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <h2 className="text-sm font-black text-[#f59e0b] uppercase tracking-widest mb-2">Nuestro Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1f2937]">PROYECTOS QUE TRASCIENDEN</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-[#1f2937] text-white shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 rounded-lg transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#f59e0b] text-white text-[10px] font-black uppercase px-3 py-1 rounded shadow-md">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                  <MapPin size={14} className="mr-1 text-[#f59e0b]" />
                  {project.location}, PY
                </div>
                <h4 className="text-xl font-black text-[#1f2937] mb-4 group-hover:text-[#f59e0b] transition-colors uppercase">
                  {project.title}
                </h4>
                <div className="h-1 w-12 bg-[#f59e0b] transition-all group-hover:w-full duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;
