import React from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  icons: React.ReactNode[];
  color: string;
  href: string;
  image: string;
}
