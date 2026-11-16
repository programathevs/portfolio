import "./About.css";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Import Icons
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  LuTerminal,
  LuFileCode2,
  LuCopy,
  LuCheck,
  LuCode,
  LuGraduationCap,
  LuCpu,
  LuSparkles,
} from "react-icons/lu";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "philosophy">("profile");
  const [copied, setCopied] = useState(false);

  // Animação suave no Scroll
  useGSAP(
    () => {
      if (!aboutRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about__header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          ".about__terminal-wrapper",
          {
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .from(
          ".about__bio",
          {
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .from(
          ".about__pillar",
          {
            opacity: 0,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          ".about__social-bar",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        );
    },
    { scope: aboutRef },
  );

  const profileCode = `/**
 * @developer Matheus Luiz
 * @role Full Stack Developer & Educator
 */
export const developer: DeveloperProfile = {
  name: "Matheus Luiz",
  coreStack: {
    frontend: ["React", "React Native", "TypeScript"],
    backend: ["Node.js", "Express / REST APIs"],
    database: ["PostgreSQL", "MySQL"],
  },
  secondaryStack: ["Laravel", "PHP", "Docker"],
  tools: ["Git/GitHub", "Postman", "Insomnia", "Vite"],
  mission: "Software escalável, limpo e didática técnica."
};`;

  const philosophyCode = `/**
 * @principles Engenharia & Didática
 * @author Matheus Luiz
 */
export const principles: Principles = {
  cleanCode: "Código legível para humanos antes de máquinas.",
  architecture: "Separation of Concerns & Type Safety.",
  teaching: "Didática clara fortalece a colaboração em equipe.",
  mindset: "Evolução contínua e resolução pragmática.",
  quality: "Testes de APIs e ambientes com Docker.",
  collaboration: "Versionamento semântico e code reviews.",
  goal: "Entregar valor através de engenharia sólida."
};`;

  const handleCopy = () => {
    const textToCopy = activeTab === "profile" ? profileCode : philosophyCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="about section" id="about" ref={aboutRef}>
      <div className="container">
        {/* Cabeçalho Padronizado da Seção */}
        <div className="about__header text-center">
          <span className="section__subtitle">SOBRE MIM</span>
          <h2 className="section__title">
            Código Limpo, Arquitetura Sólida e Paixão por Ensinar
          </h2>
          <p className="about__lead">
            Desenvolvedor Full Stack unindo rigor de engenharia de software,
            construção de produtos modernos e comunicação didática assertiva.
          </p>
        </div>

        {/* ========================================================
            LINHA 1 (2 Colunas): Terminal à Esquerda | Bio à Direita
           ======================================================== */}
        <div className="about__row-top">
          {/* Coluna 1: Terminal Interativo */}
          <div className="about__terminal-wrapper">
            <div className="code-window">
              {/* Header da Janela */}
              <div className="code-window__header">
                <div className="code-window__controls">
                  <span className="window-dot window-dot--red" />
                  <span className="window-dot window-dot--yellow" />
                  <span className="window-dot window-dot--green" />
                </div>

                {/* Abas do Editor */}
                <div className="code-window__tabs">
                  <button
                    type="button"
                    className={`code-tab ${activeTab === "profile" ? "code-tab--active" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <LuFileCode2 className="code-tab__icon" />
                    <span>matheus.ts</span>
                  </button>
                  <button
                    type="button"
                    className={`code-tab ${activeTab === "philosophy" ? "code-tab--active" : ""}`}
                    onClick={() => setActiveTab("philosophy")}
                  >
                    <LuTerminal className="code-tab__icon" />
                    <span>filosofia.ts</span>
                  </button>
                </div>

                {/* Botão Copiar */}
                <button
                  type="button"
                  className="code-copy-btn"
                  onClick={handleCopy}
                  title="Copiar código"
                  aria-label="Copiar código"
                >
                  {copied ? (
                    <span className="copy-status">
                      <LuCheck className="copy-icon text-accent" /> Copiado!
                    </span>
                  ) : (
                    <LuCopy className="copy-icon" />
                  )}
                </button>
              </div>

              {/* Corpo do Código */}
              <div className="code-window__body">
                {activeTab === "profile" ? (
                  <pre className="code-block">
                    <code>
                      <span className="code-comment">{"/**\n"}</span>
                      <span className="code-comment">{" * @developer Matheus Luiz\n"}</span>
                      <span className="code-comment">{" * @role Full Stack Developer & Educator\n"}</span>
                      <span className="code-comment">{" */\n"}</span>
                      <span className="code-keyword">export const </span>
                      <span className="code-variable">developer</span>:{" "}
                      <span className="code-type">DeveloperProfile</span> = {"{\n"}
                      {"  "}
                      <span className="code-prop">name</span>:{" "}
                      <span className="code-string">"Matheus Luiz"</span>,{"\n"}
                      {"  "}
                      <span className="code-prop">coreStack</span>: {"{\n"}
                      {"    "}
                      <span className="code-prop">frontend</span>: [
                      <span className="code-string">"React"</span>,{" "}
                      <span className="code-string">"React Native"</span>,{" "}
                      <span className="code-string">"TypeScript"</span>],{"\n"}
                      {"    "}
                      <span className="code-prop">backend</span>: [
                      <span className="code-string">"Node.js"</span>,{" "}
                      <span className="code-string">"Express / REST APIs"</span>],{"\n"}
                      {"    "}
                      <span className="code-prop">database</span>: [
                      <span className="code-string">"PostgreSQL"</span>,{" "}
                      <span className="code-string">"MySQL"</span>],{"\n"}
                      {"  }"},{"\n"}
                      {"  "}
                      <span className="code-prop">secondaryStack</span>: [
                      <span className="code-string">"Laravel"</span>,{" "}
                      <span className="code-string">"PHP"</span>,{" "}
                      <span className="code-string">"Docker"</span>],{"\n"}
                      {"  "}
                      <span className="code-prop">tools</span>: [
                      <span className="code-string">"Git/GitHub"</span>,{" "}
                      <span className="code-string">"Postman"</span>,{" "}
                      <span className="code-string">"Insomnia"</span>,{" "}
                      <span className="code-string">"Vite"</span>],{"\n"}
                      {"  "}
                      <span className="code-prop">mission</span>:{" "}
                      <span className="code-string">
                        "Software escalável, limpo e didática técnica."
                      </span>
                      {"\n};"}
                    </code>
                  </pre>
                ) : (
                  <pre className="code-block">
                    <code>
                      <span className="code-comment">{"/**\n"}</span>
                      <span className="code-comment">{" * @principles Engenharia & Didática\n"}</span>
                      <span className="code-comment">{" * @author Matheus Luiz\n"}</span>
                      <span className="code-comment">{" */\n"}</span>
                      <span className="code-keyword">export const </span>
                      <span className="code-variable">principles</span>:{" "}
                      <span className="code-type">Principles</span> = {"{\n"}
                      {"  "}
                      <span className="code-prop">cleanCode</span>:{" "}
                      <span className="code-string">
                        "Código legível para humanos antes de máquinas."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">architecture</span>:{" "}
                      <span className="code-string">
                        "Separation of Concerns & Type Safety."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">teaching</span>:{" "}
                      <span className="code-string">
                        "Didática clara fortalece a colaboração em equipe."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">mindset</span>:{" "}
                      <span className="code-string">
                        "Evolução contínua e resolução pragmática."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">quality</span>:{" "}
                      <span className="code-string">
                        "Testes de APIs e ambientes com Docker."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">collaboration</span>:{" "}
                      <span className="code-string">
                        "Versionamento semântico e code reviews."
                      </span>
                      ,{"\n"}
                      {"  "}
                      <span className="code-prop">goal</span>:{" "}
                      <span className="code-string">
                        "Entregar valor através de engenharia sólida."
                      </span>
                      {"\n};"}
                    </code>
                  </pre>
                )}
              </div>

              {/* Barra de Status */}
              <div className="code-window__footer">
                <span className="status-item">
                  <span className="status-indicator" /> TypeScript
                </span>
                <span className="status-item">UTF-8</span>
                <span className="status-item">LF</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Biografia e Visão */}
          <div className="about__bio">
            <div className="about__bio-card">
              <div className="about__bio-badge">
                <LuSparkles className="bio-badge-icon" />
                <span>Trajetória & Propósito</span>
              </div>

              <p className="about__description">
                Sou um <b>Desenvolvedor Full Stack</b> e <b>Professor</b> focado em
                transformar problemas reais em soluções digitais modernas, eficientes e
                sustentáveis. Minha base principal de engenharia está centrada no ecossistema{" "}
                <b>TypeScript</b>, desenvolvendo interfaces ricas e reativas com{" "}
                <b>React</b> e <b>React Native</b>, integradas a back-ends assíncronos e
                APIs RESTful em <b>Node.js</b>, com persistência robusta em{" "}
                <b>PostgreSQL</b> e <b>MySQL</b>.
              </p>

              <p className="about__description">
                Além do ecossistema JS/TS, possuo sólida bagagem com <b>PHP / Laravel</b>{" "}
                e conteinerização com <b>Docker</b>. Minha atuação como educador
                fortalece diariamente minha <b>comunicação assertiva</b>, didática e
                habilidade de documentar e estruturar sistemas que qualquer equipe
                consegue compreender e evoluir com facilidade.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            LINHA 2 (Largura Total): 3 Pilares + Barra Social
           ======================================================== */}
        <div className="about__row-bottom">
          {/* Os 3 Pilares Técnicos ocupando toda a largura */}
          <div className="about__pillars">
            <div className="about__pillar">
              <div className="pillar__icon-wrapper">
                <LuCode className="pillar__icon" />
              </div>
              <div className="pillar__content">
                <h4 className="pillar__title">Full Stack & Mobile</h4>
                <p className="pillar__desc">
                  React, React Native e Node.js com tipagem estática e arquitetura
                  escalável de ponta a ponta.
                </p>
              </div>
            </div>

            <div className="about__pillar">
              <div className="pillar__icon-wrapper">
                <LuGraduationCap className="pillar__icon" />
              </div>
              <div className="pillar__content">
                <h4 className="pillar__title">Didática & Liderança</h4>
                <p className="pillar__desc">
                  Experiência docente que facilita mentoria técnica, alinhamento
                  claro de equipe e empatia.
                </p>
              </div>
            </div>

            <div className="about__pillar">
              <div className="pillar__icon-wrapper">
                <LuCpu className="pillar__icon" />
              </div>
              <div className="pillar__content">
                <h4 className="pillar__title">Arquitetura & Dados</h4>
                <p className="pillar__desc">
                  Modelagem relacional em PostgreSQL e MySQL, Docker e testes
                  rigorosos com Postman/Insomnia.
                </p>
              </div>
            </div>
          </div>

          {/* Barra Social / Conexão em Largura Total */}
          <div className="about__social-bar">
            <div className="social-bar__info">
              <h4 className="social-bar__title">
                Vamos conversar sobre tecnologia ou novas oportunidades?
              </h4>
              <p className="social-bar__desc">
                Disponível para novos projetos, mentorias e conexões profissionais.
              </p>
            </div>

            <div className="about__social-links">
              <a
                href="https://www.linkedin.com/in/matheus-luiz99/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn"
              >
                <FaLinkedin className="social-icon text-accent" />
                <span>Conectar no LinkedIn</span>
              </a>
              <a
                href="https://github.com/programathevs"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social-btn about-social-btn--github"
              >
                <FaGithub className="social-icon" />
                <span>Seguir no GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
