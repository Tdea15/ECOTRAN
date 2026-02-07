
import { Project, ProjectCategory, Machine } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Torre Corporativa Delta",
    category: ProjectCategory.CIVILES,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    location: "Asunción"
  },
  {
    id: 2,
    title: "Viaducto Interurbano Ruta 2",
    category: ProjectCategory.VIALES,
    image: "https://images.unsplash.com/photo-1545139224-79b173178ee1?q=80&w=800&auto=format&fit=crop",
    location: "Central"
  },
  {
    id: 3,
    title: "Planta de Celulosa Norte",
    category: ProjectCategory.INDUSTRIALES,
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop",
    location: "Concepción"
  },
  {
    id: 4,
    title: "Puente Bioceánico",
    category: ProjectCategory.VIALES,
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=800&auto=format&fit=crop",
    location: "Chaco"
  },
  {
    id: 5,
    title: "Hospital de Alta Complejidad",
    category: ProjectCategory.CIVILES,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    location: "Encarnación"
  },
  {
    id: 6,
    title: "Silos de Grano Estándar",
    category: ProjectCategory.INDUSTRIALES,
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop",
    location: "Alto Paraná"
  }
];

export const FLEET: Machine[] = [
  {
    id: 1,
    name: "Excavadoras Hidráulicas",
    count: "+45 Unidades",
    description: "Equipos de última generación para movimientos de suelo a gran escala.",
    image: "https://images.unsplash.com/photo-1579401765057-01314ec4101e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Camiones Fuera de Ruta",
    count: "+30 Unidades",
    description: "Logística pesada capaz de operar en terrenos de alta complejidad.",
    image: "https://images.unsplash.com/photo-1519003300449-424ad040507b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Plantas de Asfalto",
    count: "5 Plantas Móviles",
    description: "Capacidad de producción in-situ para proyectos viales estratégicos.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop"
  }
];
