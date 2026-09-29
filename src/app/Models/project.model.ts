export type ProjectCategory = 'Web' | 'Integration' | 'Dashboard' | 'Mobile';

export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;

  description: string;
  businessPurpose: string;
  role: string;

  highlights: string[];
  responsibilities: string[];
  technicalDetails: string;
  challenges: string[];
  outcome: string;

  tech: string[];
}