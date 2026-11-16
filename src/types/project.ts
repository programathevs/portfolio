import React from "react";

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge?: string;
  solution?: string;
  highlights?: string[];
  tags: string[];
  icons: React.ReactNode[];
  color: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  href?: string; // Retrocompatibilidade com componentes legados
}
