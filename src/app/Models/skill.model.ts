export interface Skill {
  name: string;
  learning?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}