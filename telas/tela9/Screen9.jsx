import { useState } from 'react';

export default function Screen9() {
  const [completedTasks, setCompletedTasks] = useState([true, true, false, false]);
  const toggleTask = (index) => {
    setCompletedTasks((tasks) => tasks.map((completed, taskIndex) => (
      taskIndex === index ? !completed : completed
    )));
  };

  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    <div className="px-margin py-space-lg flex flex-col gap-space-xl max-w-[1440px] w-full mx-auto">
                      {/* Hero Gamificado do Estudante */}
                      <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
                        <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
                          {/* Perfil e Nível */}
                          <div className="flex items-center gap-space-md min-w-0">
                            <div className="relative">
                              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-secondary via-primary to-primary-container shadow-md">
                                <img className="w-full h-full rounded-full object-cover" data-alt="A portrait of Lucas Souza, a confident young Latin-American male software engineering student with glasses and headphone around neck in a dimly lit coding lab, cyber glow reflections, cinematic lighting in dark blue and emerald green hues." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWE1DMmNr1afWqzuSPFZo4nCj-ZM8_n4-hQ0YGgRfKU7rMJFiERGtLdY7AW099ILB0jl4YOAvLj5Yx-pE_G4AchvF2IaB-IVLt1oic6uAE7Mzp59PAFjWIixM-NB9jBsaL2j114JcQL3TOnPzeXce5vMFGRIhFRAHemTk8t-dkDwFpBcXFqF0F-67weJMegCXDTRTUnRuzyqVzMquKRYNwAAUmgcLNNVst_gfZ590" />
                              </div>
                              <span className="absolute -bottom-1 -right-1 px-space-xs py-0.5 rounded-full bg-secondary font-label-sm text-label-sm font-bold text-on-secondary shadow-sm">LVL 7</span>
                            </div>
                            <div className="flex flex-col min-w-0">
                              <div className="flex items-center gap-space-xs flex-wrap">
                                <span className="font-headline-md text-headline-md text-on-surface truncate">Lucas Souza</span>
                                <span className="px-space-xs py-0.5 rounded-md bg-secondary-container/20 text-secondary font-label-sm text-label-sm uppercase tracking-wider font-semibold">ODS 4.4 Competências Técnicas</span>
                              </div>
                              <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Nível 7: Desenvolvedor Pleno em Formação</p>
                              <div className="flex items-center gap-space-sm mt-space-xs text-outline font-body-sm text-body-sm">
                                <span className="flex items-center gap-1 text-secondary">
                                  <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>bolt</span>
                                  Progresso no nível: 72%
                                </span>
                                <span>•</span>
                                <span>Próxima patente: Arquiteto Front-End Jr.</span>
                              </div>
                            </div>
                          </div>
                          {/* Estatísticas Gamificadas Rápidas */}
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-md w-full xl:w-auto">
                            {/* Card XP */}
                            <div className="flex flex-col bg-surface-container rounded-lg p-space-md shadow-md min-w-[140px]">
                              <div className="flex items-center justify-between text-primary">
                                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">Total XP</span>
                                <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>stars</span>
                              </div>
                              <span className="font-data-display text-data-display text-on-surface mt-1" id="xp-counter">2.840</span>
                              <span className="font-label-sm text-label-sm text-secondary font-medium">+160 XP esta semana</span>
                            </div>
                            {/* Card Streak */}
                            <div className="flex flex-col bg-surface-container rounded-lg p-space-md shadow-md min-w-[140px]">
                              <div className="flex items-center justify-between text-secondary">
                                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">Ofensiva</span>
                                <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>local_fire_department</span>
                              </div>
                              <div className="flex items-baseline gap-1 mt-1">
                                <span className="font-data-display text-data-display text-on-surface">14</span>
                                <span className="font-body-sm text-body-sm text-outline">dias</span>
                              </div>
                              <span className="font-label-sm text-label-sm text-secondary font-medium">Recorde pessoal!</span>
                            </div>
                            {/* Card Taxa de Domínio */}
                            <div className="col-span-2 sm:col-span-1 flex flex-col bg-surface-container rounded-lg p-space-md shadow-md min-w-[140px]">
                              <div className="flex items-center justify-between text-tertiary">
                                <span className="font-label-md text-label-md uppercase tracking-wider text-outline font-semibold">Domínio BNCC/ODS</span>
                                <span className="material-symbols-outlined text-lg">verified</span>
                              </div>
                              <span className="font-data-display text-data-display text-on-surface mt-1">88.4%</span>
                              <span className="font-label-sm text-label-sm text-outline">Critérios validados</span>
                            </div>
                          </div>
                        </div>
                        {/* Barra de progresso para próximo nível */}
                        <div className="mt-space-lg pt-space-md flex flex-col gap-space-xs">
                          <div className="flex justify-between items-center text-on-surface-variant font-label-md text-label-md">
                            <span>Progresso para Nível 8 (3.200 XP)</span>
                            <span className="text-primary font-semibold">2.840 / 3.200 XP (360 XP restantes)</span>
                          </div>
                          <div className="w-full h-2.5 rounded-full bg-surface-container-highest overflow-hidden p-0.5">
                            <div className="h-full rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary transition-all duration-500" style={{width: '72%'}} />
                          </div>
                        </div>
                      </section>
                      {/* Seção 1: Minha Jornada Técnica (Trilha Visual Interativa) */}
                      <section className="flex flex-col gap-space-md">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
                          <div>
                            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold">
                              <span className="material-symbols-outlined text-sm">route</span>
                              <span>Trilha de Aprendizagem Alinhada ao Mercado</span>
                            </div>
                            <h2 className="font-headline-md text-headline-md text-on-surface">Minha Jornada Técnica</h2>
                          </div>
                          <div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
                            <span>Última sincronização com laboratório: hoje às 14:20</span>
                          </div>
                        </div>
                        {/* Container do Mapa de Progresso */}
                        <div className="relative bg-surface-container-low rounded-xl p-space-lg shadow-xl overflow-hidden">
                          {/* SVG Decorativo de Conexão no Fundo */}
                          <div className="absolute inset-0 pointer-events-none opacity-20">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
                              <path className="text-primary" d="M 120 100 L 370 100 L 620 100 L 870 100" stroke="currentColor" strokeDasharray="8 6" strokeWidth={4} />
                            </svg>
                          </div>
                          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
                            {/* Nó 1: Concluído */}
                            <div className="flex flex-col bg-surface-container rounded-lg p-space-md shadow-md transition-all duration-200 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <span className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center font-title-sm text-title-sm font-bold shadow-sm">
                                  <span className="material-symbols-outlined text-base" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
                                </span>
                                <span className="px-space-xs py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-bold">100% CONCLUÍDO</span>
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface mt-space-md">Fundamentos Web &amp; Git</h3>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">HTML5 Semântico, CSS Grid/Flexbox, Controle de Versão Git e fluxos de Pull Request.</p>
                              <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm">
                                <span className="flex items-center gap-1 text-secondary">
                                  <span className="material-symbols-outlined text-xs">workspace_premium</span> 8 competências
                                </span>
                                <span className="text-on-surface-variant">+600 XP</span>
                              </div>
                            </div>
                            {/* Nó 2: Concluído */}
                            <div className="flex flex-col bg-surface-container rounded-lg p-space-md shadow-md transition-all duration-200 hover:scale-[1.02]">
                              <div className="flex items-center justify-between">
                                <span className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center font-title-sm text-title-sm font-bold shadow-sm">
                                  <span className="material-symbols-outlined text-base" style={{fontVariationSettings: '"FILL" 1'}}>check</span>
                                </span>
                                <span className="px-space-xs py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-bold">100% CONCLUÍDO</span>
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface mt-space-md">JS Moderno &amp; TypeScript</h3>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Assincronismo, Promises, Tipagem Estrita, Interfaces e POO aplicada à Web.</p>
                              <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm">
                                <span className="flex items-center gap-1 text-secondary">
                                  <span className="material-symbols-outlined text-xs">workspace_premium</span> 12 competências
                                </span>
                                <span className="text-on-surface-variant">+950 XP</span>
                              </div>
                            </div>
                            {/* Nó 3: Em Andamento (Ativo com Destaque) */}
                            <div className="relative flex flex-col bg-surface-container-high rounded-lg p-space-md shadow-xl transition-all duration-200 hover:scale-[1.02]">
                              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-b from-primary to-transparent opacity-30 -z-10" />
                              <div className="flex items-center justify-between">
                                <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-sm text-title-sm font-bold shadow-sm animate-pulse">
                                  <span className="material-symbols-outlined text-base">play_arrow</span>
                                </span>
                                <span className="px-space-xs py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-bold">85% EM ANDAMENTO</span>
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface mt-space-md">Arquitetura React &amp; Estado</h3>
                              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">Componentes Customizados, Context API, Redux Toolkit e Otimizações de Render.</p>
                              <div className="mt-space-sm flex flex-col gap-1">
                                <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                                  <div className="h-full bg-primary rounded-full" style={{width: '85%'}} />
                                </div>
                              </div>
                              <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm">
                                <span className="flex items-center gap-1 text-primary">
                                  <span className="material-symbols-outlined text-xs">pending</span> 2 labs pendentes
                                </span>
                                <span className="text-primary font-semibold">Meta de hoje</span>
                              </div>
                            </div>
                            {/* Nó 4: Próximo / Bloqueado */}
                            <div className="flex flex-col bg-surface-container-lowest/60 rounded-lg p-space-md shadow-sm opacity-70 transition-all duration-200">
                              <div className="flex items-center justify-between">
                                <span className="w-8 h-8 rounded-full bg-surface-variant text-outline flex items-center justify-center font-title-sm text-title-sm font-bold">
                                  <span className="material-symbols-outlined text-base">lock</span>
                                </span>
                                <span className="px-space-xs py-0.5 rounded-full bg-surface-variant text-outline font-label-sm text-label-sm font-medium">BLOQUEADO</span>
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface-variant mt-space-md">Backend com Node &amp; Docker</h3>
                              <p className="font-body-sm text-body-sm text-outline mt-1 line-clamp-2">Construção de APIs RESTful seguras, ORM Prisma e conteinerização completa.</p>
                              <div className="mt-space-md pt-space-sm flex items-center justify-between text-outline font-label-sm text-label-sm">
                                <span className="flex items-center gap-1">
                                  <span className="material-symbols-outlined text-xs">lock_clock</span> Desbloqueia no Nvl 8
                                </span>
                                <span>+1.200 XP</span>
                              </div>
                            </div>
                          </div>
                          {/* Callout de Desafio Ativo */}
                          <div className="mt-space-lg p-space-md rounded-lg bg-surface-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
                            <div className="flex items-center gap-space-md">
                              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <span className="material-symbols-outlined text-2xl">terminal</span>
                              </div>
                              <div>
                                <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-semibold">Laboratório Recomendado Pelo Professor</span>
                                <h4 className="font-title-sm text-title-sm text-on-surface">Refatoração de Store Global com Zustand &amp; TypeScript</h4>
                                <p className="font-body-sm text-body-sm text-on-surface-variant">Exercício com correção assistida por IA e validação de critérios de acessibilidade WCAG.</p>
                              </div>
                            </div>
                            <button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-primary-container/90 transition-all shadow-md flex items-center gap-space-xs flex-shrink-0">
                              <span>Iniciar Prática</span>
                              <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                          </div>
                        </div>
                      </section>
                      {/* Grid Inferior Duplo: Objetivos da Semana + Insígnias ODS 4 */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                        {/* Seção 2: Próximos Objetivos da Semana (Lado Esquerdo - 7 Colunas) */}
                        <section className="lg:col-span-7 flex flex-col gap-space-md">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-space-xs">
                              <span className="material-symbols-outlined text-secondary">checklist</span>
                              <h2 className="font-title-md text-title-md text-on-surface">Próximos Objetivos da Semana</h2>
                            </div>
                            <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container-high px-space-xs py-0.5 rounded">3 de 5 concluídos</span>
                          </div>
                          <div className="bg-surface-container-low rounded-xl p-space-md shadow-xl flex flex-col gap-space-sm" id="checklist-container">
                            {/* Item 1: Concluído */}
                            <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container transition-all">
                              <button className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center cursor-pointer shadow-sm ${completedTasks[0] ? 'bg-secondary text-surface-container-lowest' : 'bg-surface-container-lowest text-transparent hover:text-on-surface-variant'}`} onClick={() => toggleTask(0)} type="button">
                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                              </button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-space-xs">
                                  <span className={`font-title-sm text-title-sm text-on-surface ${completedTasks[0] ? 'line-through opacity-60' : ''}`}>Implementar Custom Hooks de Paginação</span>
                                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm">+80 XP</span>
                                </div>
                                <p className="font-body-sm text-body-sm text-outline mt-0.5">Criar hook reutilizável com tratamento de cache e abort signal.</p>
                                <div className="flex items-center gap-space-md mt-space-xs font-label-sm text-label-sm text-secondary">
                                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">done_all</span> Validado pelo Prof. Carlos</span>
                                </div>
                              </div>
                            </div>
                            {/* Item 2: Concluído */}
                            <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container transition-all">
                              <button className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center cursor-pointer shadow-sm ${completedTasks[1] ? 'bg-secondary text-surface-container-lowest' : 'bg-surface-container-lowest text-transparent hover:text-on-surface-variant'}`} onClick={() => toggleTask(1)} type="button">
                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                              </button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-space-xs">
                                  <span className={`font-title-sm text-title-sm text-on-surface ${completedTasks[1] ? 'line-through opacity-60' : ''}`}>Audit de Acessibilidade com Axe Core</span>
                                  <span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm">+100 XP</span>
                                </div>
                                <p className="font-body-sm text-body-sm text-outline mt-0.5">Zerar alertas de contraste de cores e navegação por leitor de tela (ODS 4).</p>
                                <div className="flex items-center gap-space-md mt-space-xs font-label-sm text-label-sm text-secondary">
                                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">check_circle</span> 100% Score A11y</span>
                                </div>
                              </div>
                            </div>
                            {/* Item 3: Pendente Urgente */}
                            <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-high transition-all">
                              <button className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center cursor-pointer shadow-sm ${completedTasks[2] ? 'bg-secondary text-surface-container-lowest' : 'bg-surface-container-lowest text-transparent hover:text-on-surface-variant'}`} onClick={() => toggleTask(2)} type="button">
                                <span className="material-symbols-outlined text-sm">check</span>
                              </button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-space-xs">
                                  <span className={`font-title-sm text-title-sm text-on-surface ${completedTasks[2] ? 'line-through opacity-60' : ''}`}>Submeter Projeto: Dashboard ODS 4 Interativo</span>
                                  <span className="px-space-xs py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">Prazo: Amanhã às 23:59</span>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Aplicação React integrada com endpoints abertos de indicadores de educação da UNESCO.</p>
                                <div className="flex items-center gap-space-md mt-space-xs font-label-sm text-label-sm text-primary">
                                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs">code</span> Repositório vinculado</span>
                                  <span>•</span>
                                  <span className="text-secondary font-bold">+250 XP ao entregar</span>
                                </div>
                              </div>
                            </div>
                            {/* Item 4: Pendente Normal */}
                            <div className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container transition-all">
                              <button className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center cursor-pointer shadow-sm ${completedTasks[3] ? 'bg-secondary text-surface-container-lowest' : 'bg-surface-container-lowest text-transparent hover:text-on-surface-variant'}`} onClick={() => toggleTask(3)} type="button">
                                <span className="material-symbols-outlined text-sm">check</span>
                              </button>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-space-xs">
                                  <span className={`font-title-sm text-title-sm text-on-surface ${completedTasks[3] ? 'line-through opacity-60' : ''}`}>Quiz Rápido: Gestão de Memória no V8 Engine</span>
                                  <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">5 dias restantes</span>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Avaliação teórica adaptativa com 10 questões de múltipla escolha.</p>
                                <div className="flex items-center gap-space-md mt-space-xs font-label-sm text-label-sm text-outline">
                                  <span>Tempo estimado: 15 min</span>
                                  <span>•</span>
                                  <span className="text-secondary font-medium">+90 XP</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* Seção 3: Minhas Conquistas & Insígnias ODS 4 (Lado Direito - 5 Colunas) */}
                        <section className="lg:col-span-5 flex flex-col gap-space-md">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-space-xs">
                              <span className="material-symbols-outlined text-primary">military_tech</span>
                              <h2 className="font-title-md text-title-md text-on-surface">Minhas Conquistas &amp; Insígnias</h2>
                            </div>
                            <button className="font-label-md text-label-md text-primary hover:underline font-semibold">Ver Todas (14)</button>
                          </div>
                          <div className="bg-surface-container-low rounded-xl p-space-md shadow-xl grid grid-cols-2 gap-space-md">
                            {/* Insígnia 1: Mestre dos Componentes (Dourada) */}
                            <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container shadow-md group hover:bg-surface-container-high transition-all">
                              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-300 relative mb-space-sm shadow-inner group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>component_exchange</span>
                                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400" />
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface leading-tight">Mestre dos Componentes</h3>
                              <span className="px-space-xs py-0.5 rounded bg-amber-400/10 text-amber-300 font-label-sm text-label-sm font-semibold mt-1">Dourada • Nível 3</span>
                              <p className="font-body-sm text-body-sm text-outline mt-space-xs">Criou +30 componentes com Storybook documentado.</p>
                            </div>
                            {/* Insígnia 2: ODS 4 Champion (Verde Esmeralda) */}
                            <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container shadow-md group hover:bg-surface-container-high transition-all">
                              <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center text-secondary relative mb-space-sm shadow-inner group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>eco</span>
                                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary animate-pulse" />
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface leading-tight">ODS 4 Champion: Código Inclusivo</h3>
                              <span className="px-space-xs py-0.5 rounded bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-semibold mt-1">Esmeralda • Rara</span>
                              <p className="font-body-sm text-body-sm text-outline mt-space-xs">Zero barreiras de acessibilidade em 5 projetos seguidos.</p>
                            </div>
                            {/* Insígnia 3: Bug Hunter (Azul Neon) */}
                            <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container shadow-md group hover:bg-surface-container-high transition-all">
                              <div className="w-16 h-16 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary relative mb-space-sm shadow-inner group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>pest_control</span>
                                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary" />
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface leading-tight">Bug Hunter Pro</h3>
                              <span className="px-space-xs py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold mt-1">Azul Neon • Épica</span>
                              <p className="font-body-sm text-body-sm text-outline mt-space-xs">Resolveu 40 issues de testes automatizados com Jest.</p>
                            </div>
                            {/* Insígnia 4: Colaborador Ágil (Prata) */}
                            <div className="flex flex-col items-center text-center p-space-md rounded-lg bg-surface-container shadow-md group hover:bg-surface-container-high transition-all">
                              <div className="w-16 h-16 rounded-2xl bg-surface-bright flex items-center justify-center text-inverse-surface relative mb-space-sm shadow-inner group-hover:scale-105 transition-transform">
                                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: '"FILL" 1'}}>groups_2</span>
                              </div>
                              <h3 className="font-title-sm text-title-sm text-on-surface leading-tight">Colaborador Ágil</h3>
                              <span className="px-space-xs py-0.5 rounded bg-surface-variant text-inverse-surface font-label-sm text-label-sm font-semibold mt-1">Prata • Coletiva</span>
                              <p className="font-body-sm text-body-sm text-outline mt-space-xs">Realizou 15 revisões de código construtivas entre pares.</p>
                            </div>
                          </div>
                          {/* Banner de Impacto Social ODS 4 */}
                          <div className="bg-gradient-to-r from-secondary-container/20 via-surface-container to-surface-container rounded-xl p-space-md shadow-md flex items-center gap-space-md">
                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                              <span className="material-symbols-outlined text-xl">public</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md text-secondary font-bold uppercase">Educação com Propósito</span>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">Seus projetos contribuem para a biblioteca de código aberto comunitária vinculada à meta ODS 4.4.</p>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </main></div>
            </div>
    </div>
  );
}
