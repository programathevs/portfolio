# Portfolio - Matheus Luiz

Portfólio web pessoal e interativo desenvolvido por Matheus Luiz, focado em apresentar projetos, stack de tecnologias, trajetória profissional e disponibilizar um canal direto de contato com animações modernas e experiência de usuário fluida.

---

## 🚀 Funcionalidades

- **Apresentação Hero Interativa:** Apresentação dinâmica com efeito de digitação (`react-type-animation`) e botão rotativo estilizado para navegação rápida.
- **Rastro Fluído de Cursor (FluidCursor):** Canvas 2D interativo com física suave (interpolação *lerp*) e transição dinâmica de cores HSL acompanhando o mouse, desativado inteligentemente sobre elementos interativos (`a`, `button`).
- **Seção Sobre Mim Animada:** Animação de entrada e fixação de tela via **GSAP ScrollTrigger** (`pin: true`) destacando a atuação como Desenvolvedor Full Stack e Professor.
- **Carrossel de Habilidades (Tech Stack):** Esteira contínua estilo *marquee* com recurso de pausa no *hover* para visualização das tecnologias front-end e back-end.
- **Galeria de Projetos em 3D (GlassCard + Swiper):** Carrossel responsivo em modo *Coverflow 3D* com cards estilizados em *glassmorphism* e efeito de inclinação 3D interativa ao movimentar o ponteiro sobre o card.
- **Formulário de Contato Assíncrono:** Envio direto de mensagens integrado à API do EmailJS, com validação de campos, estado visual de carregamento (*spinner*) e confirmação de envio.
- **Header & Navegação Responsiva:** Menu com realce da seção ativa durante a rolagem (*scroll spy*) e gaveta de navegação mobile animada via GSAP.

---

## 🛠️ Tecnologias utilizadas

- **Core & Linguagens:** React 19, TypeScript, HTML5, CSS3
- **Build Tool:** Vite 8
- **Estilização & Layout:** Tailwind CSS v4, Custom Modular CSS (com breakpoints responsivos)
- **Animações & Interatividade:** GSAP 3 (GreenSock Animation Platform) + `@gsap/react`, GSAP ScrollTrigger
- **Canvas & Gráficos:** HTML5 Canvas 2D API (para o rastro do cursor)
- **Carrossel & Efeitos 3D:** Swiper 14 (EffectCoverflow, Autoplay, Pagination, Keyboard)
- **Integração de E-mail:** EmailJS (`@emailjs/browser`)
- **Ícones & Componentes Visuais:** React Icons, Lucide React, React Type Animation

---

## 📂 Estrutura do projeto

```text
portfolio/
├── constants/             # Dados constantes (skills, cores e dimensões dos badges)
│   └── skills.tsx
├── public/                # Favicon e ativos públicos estáticos
├── src/
│   ├── assets/            # Imagens do projeto, avatar, background e prints
│   ├── components/        # Componentes visuais reutilizáveis
│   │   ├── FluidCursor/   # Componente de canvas para efeito fluido do cursor
│   │   ├── Footer/        # Rodapé animado com links sociais e copyright
│   │   ├── GlassCard/     # Card 3D com efeito glassmorphism e controle GSAP quickTo
│   │   ├── Header/        # Menu de navegação com scroll-spy e drawer mobile
│   │   └── ProjectSlider/ # Carrossel 3D Coverflow powered by Swiper
│   ├── sections/          # Seções principais da landing page
│   │   ├── About/         # Seção Sobre Mim (com pinning via ScrollTrigger)
│   │   ├── Contact/       # Form de contato integrado ao EmailJS
│   │   ├── Hero/          # Apresentação inicial e animação de texto
│   │   ├── Projects/      # Seção container do portfólio
│   │   └── Stack/         # Esteira contínua (marquee) de tecnologias
│   ├── styles/            # Tokens globais de design e breakpoints responsivos
│   │   ├── Breakpoints.css
│   │   └── index.css
│   ├── App.tsx            # Componente raiz da aplicação
│   └── main.tsx           # Ponto de entrada React DOM
├── .env.example           # Modelo seguro de variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git (proteção de dados)
├── package.json           # Scripts e dependências do projeto
└── vite.config.ts         # Configuração de build do Vite
```

---

## ⚙️ Como executar o projeto

### Pré-requisitos
- Node.js (versão 18 ou superior recomendada)
- npm ou yarn

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/programathevs/portfolio.git
   cd portfolio
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Configurar as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto com base no modelo `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Em seguida, abra o arquivo `.env` e preencha as variáveis com suas chaves do EmailJS:
   ```env
   VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
   VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
   VITE_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
   ```

4. **Executar a aplicação em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse a aplicação no navegador através do endereço exibido no terminal (geralmente `http://localhost:5173`).

5. **Gerar a build de produção (opcional):**
   ```bash
   npm run build
   ```

---

## 🔐 Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | ID do serviço configurado no painel do EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | ID do template de e-mail configurado no EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Chave pública de autenticação para chamadas de API do EmailJS |

> **Atenção:** Nunca insira credenciais ou valores reais no controle de versão. Mantenha os valores sensíveis exclusivamente no seu arquivo `.env` local.

---

## 📸 Screenshots

> *As imagens da interface estão localizadas com segurança em `src/assets/images/`.*

- **Hero Section & Fluid Cursor:** Apresentação inicial com animação de digitação e efeito dinâmico do ponteiro.
- **Galeria 3D de Projetos:** Swiper em modo Coverflow com cards em estilo glassmorphism.
- **Formulário de Contato:** Formulário responsivo com feedback em tempo real e status de disponibilidade.

---

## 📚 Aprendizados

Durante o desenvolvimento deste portfólio, foram consolidados diversos conhecimentos práticos de engenharia front-end:

- **Animações Avançadas com GSAP & React:** Utilização de `useGSAP` em conjunto com `ScrollTrigger` para pinning de seção (`pin: true` na seção About) e otimização de performance usando `quickTo` para efeitos de inclinação 3D nos cards.
- **Física de Cursor com HTML5 Canvas 2D:** Implementação do componente `FluidCursor` utilizando algoritmos de interpolação linear (*lerp*), ciclo de cores HSL dinâmico e detecção inteligente de elementos interativos para suspender o rastro sob botões e links.
- **Integração Serverless Front-End:** Conexão assíncrona com EmailJS, lidando com tratamento de erros, estados de carregamento e feedback visual amigável.
- **Arquitetura de Software Front-End:** Estruturação modular com React 19, TypeScript e Vite 8, mantendo separação clara entre lógica, componentes, estilos e constantes.

---

## 🔮 Possíveis melhorias

- [ ] **Mapeamento Dinâmico de Projetos:** Refatorar o `ProjectSlider` para consumir os dados de projetos a partir de um arquivo centralizado (ex: `constants/projects.ts`) contendo imagens, descrições e repositórios distintos.
- [ ] **Acessibilidade e Redução de Movimento:** Implementar suporte à regra `@media (prefers-reduced-motion: reduce)` para desativar ou suavizar animações complexas para usuários sensíveis.
- [ ] **Otimização de SEO e Open Graph:** Incluir meta tags detalhadas de SEO, Open Graph (`og:image`, `og:title`) e Twitter Cards no `index.html`.
- [ ] **Suporte a Múltiplos Idiomas (i18n):** Adicionar chaveamento entre Português e Inglês.
