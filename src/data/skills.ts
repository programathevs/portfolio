import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaGithub,
  FaHtml5,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa6";
import { BsTypescript } from "react-icons/bs";
import {
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiInsomnia,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import type { Skill, AllSkill, BentoCategory } from "../types/skill";

export const skills: Skill[] = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    description: "Componentização moderna, hooks avançados e ecossistema SPA",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#5FA04E",
    description: "Back-ends assíncronos de alta concorrência e APIs RESTful",
  },
  {
    name: "TypeScript",
    icon: BsTypescript,
    color: "#3178C6",
    description: "Tipagem estática ponta a ponta e interfaces robustas",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    description: "Modelagem relacional corporativa, transações e integridade",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    description: "Queries otimizadas, índices e persistência relacional",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    description: "Containerização, isolamento de ambientes e microsserviços",
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
    color: "#61DAFB",
    description: "Desenvolvimento mobile multiplataforma (iOS & Android)",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
    description: "Arquitetura MVC, Eloquent ORM e APIs robustas em PHP",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "#777BB4",
    description: "POO sólida, padrões de design e ecossistema moderno",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    description: "ES6+, assincronismo e manipulação de estado reativo",
  },
  {
    name: "Git & GitHub",
    icon: FaGitAlt,
    color: "#F05032",
    description: "Versionamento semântico, branches e fluxos colaborativos",
  },
  {
    name: "Postman & Insomnia",
    icon: SiPostman,
    color: "#FF6C37",
    description: "Testes, documentação e depuração rigorosa de APIs",
  },
  {
    name: "HTML5 & CSS3",
    icon: FaHtml5,
    color: "#E34F26",
    description: "Estruturas semânticas, acessibilidade (a11y) e responsividade",
  },
];

export const bentoCategories: BentoCategory[] = [
  {
    id: "core",
    title: "Core Stack",
    badge: "Principal Domínio",
    description:
      "Meu núcleo principal de desenvolvimento: ecossistema Full Stack JavaScript/TypeScript com alta robustez em dados.",
    skills: [
      {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
        description: "Front-end reativo com componentização, estado e SPA",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#5FA04E",
        description: "Back-end assíncrono, serviços escaláveis e APIs RESTful",
      },
      {
        name: "TypeScript",
        icon: BsTypescript,
        color: "#3178C6",
        description: "Tipagem estática unificando Front e Back com segurança",
      },
      {
        name: "PostgreSQL & MySQL",
        icon: SiPostgresql,
        color: "#4169E1",
        description: "Modelagem relacional de alta performance e integridade",
      },
    ],
  },
  {
    id: "frontend",
    title: "Front-end & Mobile",
    badge: "Interface & Apps",
    description:
      "Criação de experiências interativas, acessíveis e responsivas para Web e dispositivos móveis.",
    skills: [
      {
        name: "React & React Native",
        icon: TbBrandReactNative,
        color: "#61DAFB",
        description: "Aplicações web reativas e apps nativos para iOS e Android",
      },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
        color: "#F7DF1E",
        description: "Programação moderna, assincronismo e lógica avançada",
      },
      {
        name: "HTML5 & CSS3",
        icon: FaHtml5,
        color: "#E34F26",
        description: "Semântica, responsividade e fidelidade aos layouts",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        description: "Estilização utilitária de alto desempenho e design modular",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-end & Arquitetura",
    badge: "Serviços & Dados",
    description:
      "Construção de APIs seguras, regras de negócio escaláveis e modelagem de bancos relacionais.",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#5FA04E",
        description: "Arquitetura assíncrona orientada a eventos e microsserviços",
      },
      {
        name: "Laravel & PHP",
        icon: FaLaravel,
        color: "#FF2D20",
        description: "APIs robustas, padrão MVC, autenticação e Eloquent ORM",
      },
      {
        name: "PostgreSQL & MySQL",
        icon: SiMysql,
        color: "#00758F",
        description: "Transações ACID, normalização e consultas otimizadas",
      },
    ],
  },
  {
    id: "tools",
    title: "DevOps, Ferramentas & Testes",
    badge: "Workflow & Qualidade",
    description:
      "Ferramental para garantir ambientes padronizados, testes de integração e deploys confiáveis.",
    skills: [
      {
        name: "Docker",
        icon: FaDocker,
        color: "#2496ED",
        description: "Containers, padronização de ambiente e isolamento",
      },
      {
        name: "Git & GitHub",
        icon: FaGitAlt,
        color: "#F05032",
        description: "Versionamento de código, branches semânticas e CI/CD",
      },
      {
        name: "Postman & Insomnia",
        icon: SiInsomnia,
        color: "#5849BE",
        description: "Validação rigorosa de endpoints, contratos e payloads",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
        description: "Build tooling ultrarrápido com HMR otimizado",
      },
    ],
  },
];

export const allSkills: AllSkill[] = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    width: "120px",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#5FA04E",
    width: "130px",
  },
  {
    name: "TypeScript",
    icon: BsTypescript,
    color: "#3178C6",
    width: "150px",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
    width: "140px",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    width: "130px",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
    width: "130px",
  },
  {
    name: "React Native",
    icon: TbBrandReactNative,
    color: "#61DAFB",
    width: "160px",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
    width: "130px",
  },
  {
    name: "PHP",
    icon: FaPhp,
    color: "#777BB4",
    width: "110px",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#e2e8f0",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
];
