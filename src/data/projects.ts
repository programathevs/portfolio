import React from "react";
import habitTracker from "../assets/images/projects/habit_tracker.png";
import projectCover from "../assets/img-projects.jpg";
import { FaReact, FaLaravel, FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiMysql, SiTailwindcss } from "react-icons/si";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    category: "Full Stack • Produtividade",
    description:
      "Aplicação completa para rastreamento e consolidação de hábitos diários, com métricas visuais de consistência, sequências (streaks) e relatórios de progresso em tempo real.",
    challenge:
      "Criar uma experiência fluida de marcação diária com sincronização em tempo real e prevenção de inconsistências no cálculo de histórico e fusos horários.",
    solution:
      "Arquitetura com front-end reativo em React e TypeScript integrado a uma API RESTful em Laravel, com cache inteligente e modelagem relacional otimizada em MySQL.",
    highlights: [
      "Autenticação de usuários segura e isolamento de dados",
      "Cálculo automatizado de streaks e gráficos de desempenho",
      "Interface responsiva com feedback visual instantâneo",
    ],
    tags: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
    icons: [
      React.createElement(FaReact, { key: "react" }),
      React.createElement(SiTypescript, { key: "ts" }),
      React.createElement(FaLaravel, { key: "laravel" }),
      React.createElement(SiMysql, { key: "mysql" }),
    ],
    color: "#FF2D20",
    image: habitTracker,
    liveUrl: "https://github.com/programathevs/habit-tracker",
    githubUrl: "https://github.com/programathevs/habit-tracker",
    href: "https://github.com/programathevs/habit-tracker",
  },
  {
    id: "edu-tech-platform",
    title: "Portal Educacional & Gestão de Aulas",
    category: "Full Stack • Educação & Ensino",
    description:
      "Plataforma interativa desenvolvida para conectar professores e estudantes de tecnologia, centralizando módulos práticos de código, trilhas de aprendizagem e acompanhamento de evolução individual.",
    challenge:
      "Estruturar uma interface didática e acessível que facilite a distribuição de exercícios técnicos e o acompanhamento de turmas sem atrito operacional.",
    solution:
      "Dashboard modular com separação clara de papéis (aluno/instrutor), API de entrega de conteúdo assíncrono e relatórios consolidados de frequência e aproveitamento.",
    highlights: [
      "Painel administrativo para gestão de turmas e módulos",
      "Visualização de progresso por competências técnicas",
      "Design focado em legibilidade e acessibilidade (a11y)",
    ],
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],
    icons: [
      React.createElement(FaReact, { key: "react" }),
      React.createElement(SiTypescript, { key: "ts" }),
      React.createElement(FaNodeJs, { key: "node" }),
      React.createElement(SiMysql, { key: "mysql" }),
    ],
    color: "#3178C6",
    image: projectCover,
    liveUrl: "https://github.com/programathevs",
    githubUrl: "https://github.com/programathevs",
    href: "https://github.com/programathevs",
  },
  {
    id: "interactive-portfolio",
    title: "Portfólio Interativo & Design System",
    category: "Front-end • Engenharia Criativa",
    description:
      "Portfólio pessoal e laboratório de interfaces desenvolvido com foco em alta performance visual, microinterações cinematográficas, canvas 2D com física fluida e animações guiadas por scroll.",
    challenge:
      "Equilibrar animações complexas em GSAP e renderização de canvas contínua a 60 FPS sem comprometer o tempo de carregamento e a usabilidade em dispositivos móveis.",
    solution:
      "Uso de interpolação linear (lerp) com detecção inteligente de elementos interativos, desacoplamento de listeners com requestAnimationFrame e build otimizado com Vite.",
    highlights: [
      "Cursor fluido interativo em Canvas com desativação contextual",
      "Animações coordenadas via GSAP ScrollTrigger",
      "Layout em Bento Grid e arquitetura CSS modular com tokens",
    ],
    tags: ["React 19", "TypeScript", "GSAP", "Tailwind CSS v4", "Canvas 2D"],
    icons: [
      React.createElement(FaReact, { key: "react" }),
      React.createElement(SiTypescript, { key: "ts" }),
      React.createElement(SiTailwindcss, { key: "tailwind" }),
    ],
    color: "#08E260",
    image: habitTracker,
    liveUrl: "https://github.com/programathevs/portfolio",
    githubUrl: "https://github.com/programathevs/portfolio",
    href: "https://github.com/programathevs/portfolio",
  },
];
