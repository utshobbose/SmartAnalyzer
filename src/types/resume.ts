export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface JobRecommendation {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  salary: string;
  skills: string[];
  description: string;
  type: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  recommendations: JobRecommendation[];
}
