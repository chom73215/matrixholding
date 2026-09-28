export interface EcosystemUnit {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  subtitleVi: string;
  category: string;
  categoryVi: string;
  tagline: string;
  taglineVi: string;
  description: string;
  descriptionVi: string;
  detailedOverview: string;
  detailedOverviewVi: string;
  pillars: string[];
  pillarsVi: string[];
  metrics?: { label: string; labelVi: string; value: string }[];
  image: string;
  caption: string;
  captionVi: string;
}

export interface NewsArticle {
  id: string;
  number: string;
  date: string;
  category: string;
  categoryVi: string;
  title: string;
  titleVi: string;
  excerpt: string;
  excerptVi: string;
  readTime: string;
  readTimeVi: string;
  featured?: boolean;
  image: string;
  content: string[];
  contentVi: string[];
  author: string;
  authorVi: string;
}

export interface CareerPosition {
  id: string;
  number: string;
  title: string;
  titleVi: string;
  department: string;
  departmentVi: string;
  type: string;
  typeVi: string;
  location: string;
  locationVi: string;
  experience: string;
  experienceVi: string;
  description: string;
  descriptionVi: string;
  responsibilities: string[];
  responsibilitiesVi: string[];
  requirements: string[];
  requirementsVi: string[];
}

export interface ValueItem {
  number: string;
  title: string;
  titleVi: string;
  subtitle: string;
  subtitleVi: string;
  description: string;
  descriptionVi: string;
}
