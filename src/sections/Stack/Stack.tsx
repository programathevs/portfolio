import "./Stack.css";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { bentoCategories } from "../../data/skills";
import { LuSparkles, LuGraduationCap, LuTerminal } from "react-icons/lu";

export default function Stack() {
  const stackRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Efeito Spotlight: calcula a posição relativa do cursor dentro de cada card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  useGSAP(
    () => {
      if (!stackRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".stack__header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".bento-card",
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
        },
        "-=0.4",
      );
    },
    { scope: stackRef },
  );

  const coreCategory = bentoCategories.find((c) => c.id === "core");
  const frontendCategory = bentoCategories.find((c) => c.id === "frontend");
  const backendCategory = bentoCategories.find((c) => c.id === "backend");
  const toolsCategory = bentoCategories.find((c) => c.id === "tools");

  return (
    <section className="stack section" id="stack" ref={stackRef}>
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="stack__header text-center">
          <span className="section__subtitle">STACK & REPERTÓRIO TÉCNICO</span>
          <h2 className="section__title">Tecnologias que Dominam meu Workflow</h2>
          <p className="stack__lead">
            Combinando ecossistemas modernos de front-end com arquiteturas de
            back-end robustas para criar produtos digitais completos e escaláveis.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid" ref={cardsContainerRef}>
          {/* Card 1: Core Stack (Card Principal - 2 Colunas) */}
          {coreCategory && (
            <div
              className="bento-card bento-card--featured"
              onMouseMove={handleMouseMove}
            >
              <div className="bento-card__spotlight" />
              <div className="bento-card__badge">
                <LuSparkles className="bento-badge-icon animate-pulse" />
                <span>{coreCategory.badge}</span>
              </div>

              <div className="bento-card__header">
                <h3 className="bento-card__title">{coreCategory.title}</h3>
                <p className="bento-card__desc">{coreCategory.description}</p>
              </div>

              <div className="bento-items-grid bento-items-grid--2cols">
                {coreCategory.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="bento-item"
                      style={{ "--brand-color": skill.color } as React.CSSProperties}
                    >
                      <div className="bento-item__icon-wrapper">
                        <Icon className="bento-item__icon" />
                      </div>
                      <div className="bento-item__info">
                        <h4 className="bento-item__name">{skill.name}</h4>
                        <p className="bento-item__desc">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Card 2: Front-end Experience (1 Coluna) */}
          {frontendCategory && (
            <div
              className="bento-card bento-card--frontend"
              onMouseMove={handleMouseMove}
            >
              <div className="bento-card__spotlight" />
              <div className="bento-card__badge">
                <span>{frontendCategory.badge}</span>
              </div>

              <div className="bento-card__header">
                <h3 className="bento-card__title">{frontendCategory.title}</h3>
                <p className="bento-card__desc">{frontendCategory.description}</p>
              </div>

              <div className="bento-items-grid bento-items-grid--1col">
                {frontendCategory.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="bento-item"
                      style={{ "--brand-color": skill.color } as React.CSSProperties}
                    >
                      <div className="bento-item__icon-wrapper">
                        <Icon className="bento-item__icon" />
                      </div>
                      <div className="bento-item__info">
                        <h4 className="bento-item__name">{skill.name}</h4>
                        <p className="bento-item__desc">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Card 3: Back-end & Dados (1 Coluna) */}
          {backendCategory && (
            <div
              className="bento-card bento-card--backend"
              onMouseMove={handleMouseMove}
            >
              <div className="bento-card__spotlight" />
              <div className="bento-card__badge">
                <span>{backendCategory.badge}</span>
              </div>

              <div className="bento-card__header">
                <h3 className="bento-card__title">{backendCategory.title}</h3>
                <p className="bento-card__desc">{backendCategory.description}</p>
              </div>

              <div className="bento-items-grid bento-items-grid--1col">
                {backendCategory.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="bento-item"
                      style={{ "--brand-color": skill.color } as React.CSSProperties}
                    >
                      <div className="bento-item__icon-wrapper">
                        <Icon className="bento-item__icon" />
                      </div>
                      <div className="bento-item__info">
                        <h4 className="bento-item__name">{skill.name}</h4>
                        <p className="bento-item__desc">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Card 4: Ferramentas & Workflow (2 Colunas) */}
          {toolsCategory && (
            <div
              className="bento-card bento-card--tools"
              onMouseMove={handleMouseMove}
            >
              <div className="bento-card__spotlight" />
              <div className="bento-card__badge">
                <span>{toolsCategory.badge}</span>
              </div>

              <div className="bento-card__header">
                <h3 className="bento-card__title">{toolsCategory.title}</h3>
                <p className="bento-card__desc">{toolsCategory.description}</p>
              </div>

              <div className="bento-items-grid bento-items-grid--2cols">
                {toolsCategory.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="bento-item"
                      style={{ "--brand-color": skill.color } as React.CSSProperties}
                    >
                      <div className="bento-item__icon-wrapper">
                        <Icon className="bento-item__icon" />
                      </div>
                      <div className="bento-item__info">
                        <h4 className="bento-item__name">{skill.name}</h4>
                        <p className="bento-item__desc">{skill.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Card 5: Filosofia de Engenharia & Ensino (Linha Inteira - 3 Colunas) */}
          <div
            className="bento-card bento-card--philosophy"
            onMouseMove={handleMouseMove}
          >
            <div className="bento-card__spotlight" />
            <div className="bento-card__badge bento-card__badge--accent">
              <LuGraduationCap className="bento-badge-icon" />
              <span>Diferencial</span>
            </div>

            <div className="bento-card__header bento-card__header--full">
              <h3 className="bento-card__title">Engenharia com Didática</h3>
              <p className="bento-card__desc">
                Minha atuação como educador aprimora constantemente minha
                habilidade de decompor problemas complexos, documentar com
                clareza e construir códigos fáceis de manter por toda a equipe.
              </p>
            </div>

            <div className="philosophy-tags">
              <span className="philosophy-tag">
                <LuTerminal className="philosophy-tag-icon" /> Código Limpo
              </span>
              <span className="philosophy-tag">Arquitetura MVC</span>
              <span className="philosophy-tag">Comunicação Clara</span>
              <span className="philosophy-tag">Mentoria & Pair Programming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
