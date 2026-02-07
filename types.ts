
export enum ProjectCategory {
  ALL = 'Todas',
  CIVILES = 'Obras Civiles',
  VIALES = 'Viales',
  INDUSTRIALES = 'Industriales'
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  location: string;
}

export interface Machine {
  id: number;
  name: string;
  count: string;
  description: string;
  image: string;
}
