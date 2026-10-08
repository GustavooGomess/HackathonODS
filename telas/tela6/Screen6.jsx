import { useState } from 'react';

export default function Screen6() {
  const [ratings, setRatings] = useState([94, 90, 82]);
  const [selectedGitLevel, setSelectedGitLevel] = useState(4);
  const [toast, setToast] = useState({
    visible: true,
    message: 'Alterações salvas com sucesso!',
  });
  const gitLevels = ['Básico', 'Intermediário', 'Consistente', 'Avançado'];
  const gitButtonClass = (level) => `git-btn p-space-sm rounded-lg text-left flex flex-col gap-1 transition-all ${
    selectedGitLevel === level
      ? 'bg-secondary/15 ring-2 ring-secondary/50'
      : 'bg-surface-container-lowest hover:bg-surface-variant'
  }`;
  const updateRating = (index, value) => {
    setRatings((previous) => previous.map((rating, ratingIndex) => (
      ratingIndex === index ? Number(value) : rating
    )));
  };
  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast((current) => ({ ...current, visible: false })), 5000);
  };

  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full relative">
                    {/* Success Toast Floating Upper-Right */}
                    <div className={`fixed top-20 right-8 z-50 flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-high/95 backdrop-blur-xl shadow-xl transition-all duration-300 max-w-md ${toast.visible ? '' : 'opacity-0 pointer-events-none'}`} id="toastNotification" style={{boxShadow: '0 0 25px -4px rgba(78, 222, 163, 0.25)'}}>
                      <div className="w-10 h-10 rounded-lg bg-secondary/15 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>check_circle</span>
                      </div>
                      <div className="flex flex-col gap-0.5 pr-2 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-on-surface font-semibold tracking-tight">{toast.message}</span>
                          <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Sincronizado</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">A matriz de competências de Lucas Souza foi sincronizada com a base institucional e vinculada ao ODS 4.4.</p>
                      </div>
                      <button className="text-outline hover:text-on-surface transition-colors p-1 rounded-lg hover:bg-surface-variant" onClick={() => setToast((current) => ({ ...current, visible: false }))} type="button">
                        <span className="material-symbols-outlined text-sm">close</span>
                      </button>
                    </div>
                    {/* Background Dashboard Context (Subdued backdrop feeling for deep immersion) */}
                    <div className="w-full px-space-lg py-space-md">
                      <div className="flex items-center justify-between pb-space-md">
                        <div className="flex items-center gap-space-sm">
                          <a className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            <span>Voltar para Turmas &amp; Alunos</span>
                          </a>
                          <span className="text-outline">/</span>
                          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary">TI-A • Ciclo 2024.2</span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="font-label-sm text-label-sm text-outline">Modo de Avaliação Individual Contínua</span>
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                        </div>
                      </div>
                      {/* Main Evaluation Panel / Modal Hub */}
                      <div className="w-full max-w-5xl mx-auto rounded-xl bg-surface-container-low shadow-2xl overflow-hidden flex flex-col relative" style={{boxShadow: '0 20px 50px -10px rgba(0,0,0,0.7), 0 0 35px -5px rgba(37, 99, 235, 0.15)'}}>
                        {/* Top Decorative Ambient Glow */}
                        <div className="absolute -top-32 left-1/3 w-96 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -top-24 right-1/4 w-80 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                        {/* Header Section: Student & Academic Profile */}
                        <div className="p-space-lg bg-surface-container relative z-10">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                            <div className="flex items-center gap-space-md">
                              <div className="relative">
                                <img className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/40 shadow-lg" data-alt="Portrait photo of a young university student named Lucas Souza looking confident with glasses in a modern campus tech laboratory with subtle blue neon ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJYxpj1AAGmWvJ0rGOrzreZpb5cwqC44CboZEUJwoqnui5p-MX0mUgPGEi82a-yRhRgB6MvFFQWcMqY7u6nRtFqawvDUx09yxDkEzCpKOVOfF-UiCe_XSP4usTWeGIpYIecqTbF_q1uuSOxHEtZa681fYwrjR_-ixV8PM6Te6nZS1tLmQoNpNe-RBQm0kg7QhJnGdLeyWqnkH053XC1yjfRa5gzEvdFOJQMx2V1E" />
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-secondary text-surface-container-lowest flex items-center justify-center text-xs shadow-md" title="Perfil Verificado">
                                  <span className="material-symbols-outlined text-xs font-bold">verified</span>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <h1 className="font-headline-md text-headline-md text-on-surface">Lucas Souza</h1>
                                  <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-sm text-label-sm font-semibold tracking-wide uppercase">Turma TI-A</span>
                                  <span className="px-2 py-0.5 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold tracking-wide">RA: 2024-88412</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5 mt-0.5">
                                  <span className="material-symbols-outlined text-base text-tertiary">code</span>
                                  Módulo Prático: APIs &amp; Front-End Reativo • 3º Semestre
                                </p>
                              </div>
                            </div>
                            {/* Academic Progress Summary Badge */}
                            <div className="flex items-center gap-space-md bg-surface-container-lowest/80 p-space-sm rounded-xl px-space-md">
                              <div className="flex flex-col items-end">
                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Coeficiente Global</span>
                                <span className="font-data-display text-data-display text-secondary tracking-tight">88.7 <span className="font-title-sm text-title-sm text-outline">/100</span></span>
                              </div>
                              <div className="h-10 w-px bg-surface-container-highest" />
                              <div className="flex flex-col">
                                <span className="font-label-sm text-label-sm text-on-surface-variant">Classificação</span>
                                <span className="font-title-sm text-title-sm text-primary font-semibold flex items-center gap-1">
                                  <span className="material-symbols-outlined text-sm">military_tech</span> Proficiente Alto
                                </span>
                              </div>
                            </div>
                          </div>
                          {/* Meta ODS Context Strip */}
                          <div className="mt-space-md pt-space-sm flex items-center justify-between text-on-surface-variant flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                              <span className="font-label-md text-label-md text-on-surface font-medium">Meta ODS 4.4: Competências Técnicas para Empregabilidade e Inovação</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-outline">Avaliador: Prof. Carlos Silva • Data: 24 de Outubro, 2024</span>
                          </div>
                        </div>
                        {/* Main Body: Sliders & Rubrics */}
                        <div className="p-space-lg flex flex-col gap-space-lg relative z-10">
                          {/* Rubric Title */}
                          <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                              <span className="font-title-md text-title-md text-on-surface">Matriz de Habilidades Práticas</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">Ajuste os indicadores com base em projetos práticos, pull requests e testes de laboratório.</span>
                            </div>
                            <button className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-md text-label-md flex items-center gap-1 transition-all">
                              <span className="material-symbols-outlined text-sm">history</span> Histórico de Versões
                            </button>
                          </div>
                          {/* Competency Card 1: React Components & Hooks */}
                          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm hover:bg-surface-container-high/80 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-space-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-bold">
                                  1
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Domínio de Componentização e Hooks no React</span>
                                  <span className="font-body-sm text-body-sm text-outline">Uso de Custom Hooks, useMemo, useCallback e arquitetura atômica de UI</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-space-sm self-end sm:self-center">
                                <span className="px-2 py-0.5 rounded-md bg-secondary/15 text-secondary font-label-md text-label-md font-semibold tracking-wide uppercase">Mestre</span>
                                <span className="font-data-display text-headline-sm text-secondary font-bold min-w-[3.5rem] text-right" id="val-1">{ratings[0]}</span>
                                <span className="text-outline font-title-sm text-title-sm">/100</span>
                              </div>
                            </div>
                            {/* Interactive Slider */}
                            <div className="flex flex-col gap-1.5 pt-1">
                              <input className="w-full h-2 bg-surface-container-lowest rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none" id="slider-1" max={100} min={0} onChange={(event) => updateRating(0, event.target.value)} type="range" value={ratings[0]} />
                              <div className="flex justify-between items-center text-outline font-label-sm text-label-sm px-1">
                                <span>Iniciante (0-40)</span>
                                <span>Médio (41-70)</span>
                                <span className="text-on-surface-variant">Proficiente (71-89)</span>
                                <span className="text-secondary font-semibold">Mestre (90-100)</span>
                              </div>
                            </div>
                          </div>
                          {/* Competency Card 2: RESTful / GraphQL API Integration */}
                          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm hover:bg-surface-container-high/80 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-space-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-bold">
                                  2
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Consumo e Integração de APIs RESTful / GraphQL</span>
                                  <span className="font-body-sm text-body-sm text-outline">Tratamento de status HTTP, caching, refetching reativo e paginação com TanStack Query</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-space-sm self-end sm:self-center">
                                <span className="px-2 py-0.5 rounded-md bg-secondary/15 text-secondary font-label-md text-label-md font-semibold tracking-wide uppercase">Mestre</span>
                                <span className="font-data-display text-headline-sm text-secondary font-bold min-w-[3.5rem] text-right" id="val-2">{ratings[1]}</span>
                                <span className="text-outline font-title-sm text-title-sm">/100</span>
                              </div>
                            </div>
                            {/* Interactive Slider */}
                            <div className="flex flex-col gap-1.5 pt-1">
                              <input className="w-full h-2 bg-surface-container-lowest rounded-lg appearance-none cursor-pointer accent-secondary focus:outline-none" id="slider-2" max={100} min={0} onChange={(event) => updateRating(1, event.target.value)} type="range" value={ratings[1]} />
                              <div className="flex justify-between items-center text-outline font-label-sm text-label-sm px-1">
                                <span>Iniciante (0-40)</span>
                                <span>Médio (41-70)</span>
                                <span className="text-on-surface-variant">Proficiente (71-89)</span>
                                <span className="text-secondary font-semibold">Mestre (90-100)</span>
                              </div>
                            </div>
                          </div>
                          {/* Competency Card 3: Automated Testing & Best Practices */}
                          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm hover:bg-surface-container-high/80 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-space-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-bold">
                                  3
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Aplicação de Testes Automatizados e Boas Práticas</span>
                                  <span className="font-body-sm text-body-sm text-outline">Testes unitários e de integração com Vitest e React Testing Library, ESLint e tipagem estrita</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-space-sm self-end sm:self-center">
                                <span className="px-2 py-0.5 rounded-md bg-primary-container/20 text-primary font-label-md text-label-md font-semibold tracking-wide uppercase">Proficiente</span>
                                <span className="font-data-display text-headline-sm text-primary font-bold min-w-[3.5rem] text-right" id="val-3">{ratings[2]}</span>
                                <span className="text-outline font-title-sm text-title-sm">/100</span>
                              </div>
                            </div>
                            {/* Interactive Slider */}
                            <div className="flex flex-col gap-1.5 pt-1">
                              <input className="w-full h-2 bg-surface-container-lowest rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none" id="slider-3" max={100} min={0} onChange={(event) => updateRating(2, event.target.value)} type="range" value={ratings[2]} />
                              <div className="flex justify-between items-center text-outline font-label-sm text-label-sm px-1">
                                <span>Iniciante (0-40)</span>
                                <span>Médio (41-70)</span>
                                <span className="text-primary font-semibold">Proficiente (71-89)</span>
                                <span>Mestre (90-100)</span>
                              </div>
                            </div>
                          </div>
                          {/* Competency Card 4: Git Collaboration & Versioning (Button Selector) */}
                          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm hover:bg-surface-container-high/80 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="flex items-center gap-space-sm">
                                <div className="w-8 h-8 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center font-bold">
                                  4
                                </div>
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Trabalho Colaborativo e Versionamento com Git</span>
                                  <span className="font-body-sm text-body-sm text-outline">Gestão de Branches, Git Flow, resolução de conflitos, revisões de código via Pull Request</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-space-xs self-end sm:self-center">
                                <span className="font-label-sm text-label-sm text-outline uppercase">Nível Selecionado:</span>
                                <span className="font-title-sm text-title-sm text-secondary font-bold" id="selected-git-level">Nível {selectedGitLevel} - {gitLevels[selectedGitLevel - 1]}</span>
                              </div>
                            </div>
                            {/* Multi-tier Button Selector */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-1" id="git-level-container">
                              <button className={gitButtonClass(1)} onClick={() => setSelectedGitLevel(1)} type="button">
                                <span className={`font-label-md text-label-md ${selectedGitLevel === 1 ? 'text-secondary font-bold' : 'text-outline'}`}>Nível 1</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">Básico</span>
                                <span className="font-label-sm text-label-sm text-outline">Comandos git clone, add e push linear</span>
                              </button>
                              <button className={gitButtonClass(2)} onClick={() => setSelectedGitLevel(2)} type="button">
                                <span className={`font-label-md text-label-md ${selectedGitLevel === 2 ? 'text-secondary font-bold' : 'text-outline'}`}>Nível 2</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">Intermediário</span>
                                <span className="font-label-sm text-label-sm text-outline">Branches de feature e merges simples</span>
                              </button>
                              <button className={gitButtonClass(3)} onClick={() => setSelectedGitLevel(3)} type="button">
                                <span className={`font-label-md text-label-md ${selectedGitLevel === 3 ? 'text-secondary font-bold' : 'text-outline'}`}>Nível 3</span>
                                <span className="font-body-sm text-body-sm text-on-surface font-medium">Consistente</span>
                                <span className="font-label-sm text-label-sm text-outline">Rebase, stash e histórico convencional</span>
                              </button>
                              <button className={gitButtonClass(4)} onClick={() => setSelectedGitLevel(4)} type="button">
                                <div className="flex items-center justify-between">
                                  <span className={`font-label-md text-label-md ${selectedGitLevel === 4 ? 'text-secondary font-bold' : 'text-outline'}`}>Nível 4</span>
                                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                </div>
                                <span className="font-body-sm text-body-sm text-on-surface font-semibold">Avançado</span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">Code Review ativa, CI/CD e merge conflicts complexos</span>
                              </button>
                            </div>
                          </div>
                          {/* Rich Descriptive Feedback Area */}
                          <div className="flex flex-col gap-space-sm pt-space-xs">
                            <div className="flex items-center justify-between">
                              <label className="flex items-center gap-space-xs font-title-sm text-title-sm text-on-surface" htmlFor="feedback">
                                <span className="material-symbols-outlined text-primary text-lg">rate_review</span>
                                Feedback Pedagógico e Recomendações para o Plano de Estudos ODS 4
                              </label>
                              <span className="font-label-sm text-label-sm text-outline">Formato Markdown Habilitado</span>
                            </div>
                            <div className="rounded-xl bg-surface-container-lowest overflow-hidden focus-within:ring-2 focus-within:ring-primary/60 transition-all">
                              {/* Mini Formatting Toolbar */}
                              <div className="px-space-md py-space-xs bg-surface-container flex items-center gap-space-sm text-on-surface-variant">
                                <button className="p-1 rounded hover:bg-surface-variant hover:text-on-surface transition-colors" title="Negrito" type="button"><span className="material-symbols-outlined text-sm">format_bold</span></button>
                                <button className="p-1 rounded hover:bg-surface-variant hover:text-on-surface transition-colors" title="Itálico" type="button"><span className="material-symbols-outlined text-sm">format_italic</span></button>
                                <button className="p-1 rounded hover:bg-surface-variant hover:text-on-surface transition-colors" title="Lista com Marcadores" type="button"><span className="material-symbols-outlined text-sm">format_list_bulleted</span></button>
                                <button className="p-1 rounded hover:bg-surface-variant hover:text-on-surface transition-colors" title="Inserir Trecho de Código" type="button"><span className="material-symbols-outlined text-sm">code</span></button>
                                <div className="h-4 w-px bg-surface-variant mx-1" />
                                <button className="p-1 rounded hover:bg-surface-variant hover:text-on-surface transition-colors text-secondary flex items-center gap-1 font-label-sm text-label-sm" type="button">
                                  <span className="material-symbols-outlined text-sm">auto_fix_high</span> Sugerir com IA Pedagógica
                                </button>
                              </div>
                              {/* Rich Textarea */}
                              <textarea className="w-full p-space-md bg-transparent text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none resize-y" id="feedback" placeholder="Escreva um parecer descritivo pontuando pontos fortes do aluno e sugestões de trilhas complementares no portal ODS 4..." rows={4} defaultValue={"Lucas demonstrou excelência excepcional na modularização dos componentes e no gerenciamento assíncrono de estado com TanStack Query durante a entrega do projeto integrado da API de Gestão Social.\n\nRecomendo intensificar a cobertura de testes de regressão automatizados com Vitest na camada de hooks personalizados para atingir o nível 'Mestre' também nessa dimensão. Parabéns pelo desempenho colaborativo exemplar como líder de Pull Requests na Squad 2!"} />
                            </div>
                            <div className="flex items-center justify-between text-outline font-label-sm text-label-sm px-1">
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs text-secondary">shield</span> Visível para o aluno e coordenação acadêmica</span>
                              <span>412 caracteres</span>
                            </div>
                          </div>
                        </div>
                        {/* Action Footer */}
                        <div className="p-space-lg bg-surface-container flex flex-col-reverse sm:flex-row items-center justify-between gap-space-md relative z-10">
                          <div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
                            <span className="material-symbols-outlined text-sm text-secondary">cloud_done</span>
                            <span>Último auto-salvamento: há 2 minutos</span>
                          </div>
                          <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                            <button className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md">
                              Cancelar
                            </button>
                            <button className="px-space-md py-2 rounded-lg bg-surface-container-highest hover:bg-surface-bright text-on-surface transition-all font-label-md text-label-md flex items-center gap-1.5" onClick={() => showToast('Rascunho atualizado localmente')} type="button">
                              <span className="material-symbols-outlined text-sm">save</span>
                              <span>Salvar como Rascunho</span>
                            </button>
                            {/* Primary Emerald Glow Action Button */}
                            <button className="px-space-lg py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold transition-all flex items-center gap-2 hover:bg-secondary/90 hover:scale-[1.02] active:scale-[0.98]" onClick={() => showToast('Avaliação concluída e certificada!')} style={{boxShadow: '0 0 20px -2px rgba(78, 222, 163, 0.45)'}} type="button">
                              <span className="material-symbols-outlined text-base">check_circle</span>
                              <span>Concluir Avaliação</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></main></div>
            </div>
    </div>
  );
}
