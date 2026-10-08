# Nome do Projeto
SkillTrack (HackathonODS)

## ODS
**ODS 4: Educação de Qualidade.** 
A plataforma está diretamente alinhada às Metas 4.3 e 4.4 da ONU, focando na educação técnica e profissionalizante e na garantia da igualdade de acesso.

## Problema
A dificuldade no acompanhamento preciso e focado do desenvolvimento de *hard-skills* técnicas. Plataformas de ensino tradicionais muitas vezes possuem alta carga cognitiva ("ruído de gamificação"), o que não reflete a precisão e a imersão necessárias para disciplinas técnicas e complexas (como engenharia de software e ciência de dados).

## Público-alvo
* Estudantes de engenharia e tecnologia.
* Profissionais se atualizando (upskilling) em disciplinas de alta complexidade.
* Líderes técnicos corporativos.
* Mentores de engenharia que necessitam de rastreamento denso de dados e métricas de desempenho claras.

## Proposta de Valor
A **SkillTrack** atua como uma Plataforma Nacional de Aprendizagem que assegura educação inclusiva, equitativa e promove oportunidades contínuas de capacitação técnica. Ela oferece um ambiente de acompanhamento de habilidades (*skill-tree*) com estética e usabilidade inspiradas em ferramentas profissionais de desenvolvimento (IDEs), gerando foco, credibilidade e evidenciando a progressão técnica de forma limpa.

## Benchmarking
O design e a experiência foram balizados por **ambientes de desenvolvimento modernos (IDEs)**, **documentação técnica orientada a desenvolvedores** e **suítes de análise corporativa**, adotando um padrão *Developer-First Minimalism*.

## Requisitos
* **Funcionais:**
  * Sistema de autenticação com perfis de acesso (Aluno e Professor/Mentor).
  * Painéis modulares de currículo e acompanhamento de progresso de habilidades (*Skill Matrix* e Radar).
  * Navegação ininterrupta entre diferentes etapas (10 telas integradas).
* **Não Funcionais:**
  * **Acessibilidade:** Conformidade com padrões WCAG 2.1 AA (contraste alto).
  * **Responsividade:** Design adaptável para Desktop, Tablet e Mobile.
  * **Performance:** Navegação fluida tipo SPA (Single Page Application).

## User Stories
1. **Como aluno**, quero acessar a plataforma através da minha matrícula ou e-mail institucional para visualizar meus módulos de estudo e meu progresso técnico.
2. **Como professor**, quero fazer login com meu e-mail institucional (ou MASP) para acompanhar o desenvolvimento e métricas da turma.
3. **Como usuário**, quero ver meu nível de proficiência representado através de selos (badges) e barras de progresso claras para entender quais competências possuo.

## Funcionalidades
* Autenticação via e-mail institucional, MASP, RA ou Gov.br.
* Dashboard com visão geral do treinamento e de habilidades adquiridas.
* Um shell estrutural (navbar/sidebar) que permite alternar entre as 10 telas/etapas do processo educacional de maneira integrada.

## Tecnologias Utilizadas
* **HTML5 e CSS3**: Base das 10 telas originais do projeto.
* **Tailwind CSS**: Utilizado extensivamente para a construção da interface e do Design System ("Technical Precision").
* **JavaScript**: Interatividade no lado do cliente.

## Framework Utilizado
* **React 19:** Utilizado para envolver (App wrapper) e renderizar as telas estáticas em um ecossistema SPA.
* **React Router DOM 7:** Gerenciamento do roteamento entre as telas.
* **Vite:** Ferramenta de build e servidor de desenvolvimento ágil.

## Como Executar
O projeto requer o **Node.js** (versão 20.19+ ou 22.12+).
No terminal, dentro da pasta do projeto (`HackathonODS`), execute:

```bash
npm install
npm run dev
```
Acesse o endereço local informado no terminal.
Para gerar a versão de produção, utilize `npm run build` e em seguida `npm run preview`.

## Protótipo
O design segue o documento `DESIGN.md` com uma arquitetura de profundidade invertida: casca estrutural em tons escuros (Deep Slate) e áreas de conteúdo limpas em tons claros, priorizando legibilidade de dados densos (com tipografia Inter e JetBrains Mono).

## Aplicação
A aplicação é um projeto web robusto baseada em React que encapsula o projeto original de 10 telas em HTML, melhorando a experiência de navegação do usuário através de um *navbar* principal.

## Processo de Desenvolvimento
A abordagem focou primeiro em criar um guia de estilo estrito (Technical Precision). A interface foi construída em arquivos HTML e integradas ao final em uma estrutura unificada React + Vite.

## Integrantes
* Ahslam Mendes
* Fabio Bitencourt Ribeiro
* Gustavo Henrique Gouveia Gomes
* Ronaldo Francisco do Amaral Soares
