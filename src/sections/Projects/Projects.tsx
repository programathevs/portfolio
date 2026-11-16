import "./Projects.css";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { projects } from "../../data/projects";
import { FaGithub } from "react-icons/fa6";
import { HiBadgeCheck } from "react-icons/hi";
import { LuExternalLink, LuFolderGit2 } from "react-icons/lu";

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!projectsRef.current) return;

      // Animação de entrada do cabeçalho
      gsap.from(".projects__header", {
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animação individual para cada projeto no scroll
      const items = gsap.utils.toArray<HTMLElement>(".project-showcase");
      items.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power2.out",
        });
      });
    },
    { scope: projectsRef },
  );

  return (
    <section className="projects section" id="projects" ref={projectsRef}>
      <div className="container">
        {/* Cabeçalho */}
        <div className="projects__header text-center">
          <span className="section__subtitle">PORTFÓLIO & CASOS DE USO</span>
          <h2 className="section__title">Projetos em Destaque</h2>
          <p className="projects__lead">
            Uma seleção de aplicações desenvolvidas com foco em resolver dores
            reais, aplicando arquiteturas escaláveis, boas práticas e experiência
            de usuário intuitiva.
          </p>
        </div>

        {/* Lista de Projetos com Layout Alternado */}
        <div className="projects__list">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <article
                key={project.id}
                className={`project-showcase ${isReversed ? "project-showcase--reversed" : ""}`}
              >
                {/* Lado da Mídia (Mockup Frame) */}
                <div className="project-showcase__media-wrapper">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mockup-frame"
                    aria-label={`Ver projeto ${project.title}`}
                  >
                    {/* Barra de janela do navegador */}
                    <div className="mockup-frame__bar">
                      <div className="mockup-dots">
                        <span className="dot dot--red" />
                        <span className="dot dot--yellow" />
                        <span className="dot dot--green" />
                      </div>
                      <div className="mockup-url">
                        {project.title.toLowerCase().replace(/\s+/g, "-")}.dev
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="mockup-frame__content">
                      <img
                        src={project.image}
                        alt={`Screenshot do projeto ${project.title}`}
                        className="mockup-frame__img"
                        loading="lazy"
                      />
                      <div className="mockup-frame__overlay">
                        <span className="mockup-view-btn">
                          <LuExternalLink /> Visualizar Projeto
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Lado do Conteúdo (Storytelling) */}
                <div className="project-showcase__content">
                  <div className="project-showcase__meta">
                    <span className="project-category-badge">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="project-showcase__title">
                    <a
                      href={project.liveUrl || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="project-showcase__description">
                    {project.description}
                  </p>

                  {/* Destaques de Engenharia */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="project-showcase__highlights">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="project-highlight-item">
                          <HiBadgeCheck className="highlight-icon" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags de Tecnologias */}
                  <div className="project-showcase__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ações (Links / CTAs) */}
                  <div className="project-showcase__actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                      >
                        <LuExternalLink className="btn-icon" />
                        <span>Acessar Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary"
                      >
                        <FaGithub className="btn-icon" />
                        <span>Repositório</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Rodapé da seção chamando para mais repositórios */}
        <div className="projects__footer text-center">
          <p>Deseja ver outros repositórios e contribuições de código aberto?</p>
          <a
            href="https://github.com/programathevs?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            <LuFolderGit2 className="btn-icon" />
            <span>Explorar mais no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
