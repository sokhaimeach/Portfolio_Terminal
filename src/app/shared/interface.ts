export type LangCode = 'en' | 'km';

export interface SocialLink {
  label: string; url: string; username?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tech: string;
  links?: { label: string; url: string }[];
}

export interface Experience {
  title: string;
  discription: string;
}

export interface SkillGroup { name: string; items: string; }

export interface Profile {
  displayName: string;
  alias?: string;
  tagline: string;
  greeting?: string;
  email?: string;
  avatarUrl?: string;
  discription?: string;
  socials: SocialLink[];
}

export interface LabelKeys {
  key: string;
  way: string;
}

export interface Portfolio {
  commands: string[];
  labels: LabelKeys[];
  profile: Profile;
  about: string[];
  projects: Project[];
  experience: Experience[];
  skills: SkillGroup[];
  contact: {
    email?: string; phone?: string; telegram?: string; location?: string; availability?: string;
    socials?: SocialLink[];
  };
}
