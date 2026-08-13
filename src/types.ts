export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  college: string;
  location: string;
  year: string;
  course: string;
  courseFull: string;
  phone: string;
  email: string;
  bio: string;
  tagline: string;
}

export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  field: string;
  year: string;
  status: string;
  highlights: string[];
}

export interface PersonalStrength {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'web' | 'programming' | 'core' | 'soft';
  icon: string;
  description: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role?: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  keyFeatures: string[];
  imagePlaceholderText: string;
  bgGradient: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface NavLink {
  path: string;
  label: string;
}
