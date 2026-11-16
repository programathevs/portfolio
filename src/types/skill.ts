import type { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  level?: string;
  description?: string;
}

export interface AllSkill extends Skill {
  width?: string;
}

export interface BentoCategory {
  id: string;
  title: string;
  badge?: string;
  description: string;
  skills: Skill[];
}
