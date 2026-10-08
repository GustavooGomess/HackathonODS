import { useRef, useState } from 'react';

export default function Screen7() {
  const noteInput = useRef(null);
  const [noteCategory, setNoteCategory] = useState('Feedback Técnico');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [score, setScore] = useState(95);
  const [evaluationSubmitted, setEvaluationSubmitted] = useState(false);

  const saveNote = () => {
    const text = noteText.trim();
    if (!text) {
      noteInput.current?.focus();
      return;
    }
    setNotes((previous) => [{ id: Date.now(), category: noteCategory, text }, ...previous]);
    setNoteText('');
  };

  const confirmEvaluation = () => {
    setModalOpen(false);
    setEvaluationSubmitted(true);
    setTimeout(() => setEvaluationSubmitted(false), 2400);
  };

  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    <div className="px-space-md lg:px-space-lg py-space-md flex flex-col gap-space-lg max-w-[1440px] mx-auto w-full">
                      {/* Top Breadcrumb & Status Quick Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-space-sm">
                        <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                          <span className="hover:text-primary transition-colors cursor-pointer">Turma TI-2024.1</span>
                          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
                          <span className="hover:text-primary transition-colors cursor-pointer">Engenharia de Software</span>
                          <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
                          <span className="text-on-surface font-title-sm text-title-sm font-semibold">Lucas Souza</span>
                        </div>
                        <div className="flex items-center gap-space-sm">
                          <span className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            Matrícula Ativa Regular
                          </span>
                          <span className="text-outline font-label-sm text-label-sm">Último sync: Hoje às 14:32</span>
                        </div>
                      </div>
                      {/* Student Header Banner Card */}
                      <section className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-lg shadow-xl">
                        <div className="absolute -right-20 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />
                        <div className="absolute right-40 -bottom-24 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                          {/* Student Identity */}
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                            <div className="relative">
                              <img className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover shadow-lg" data-alt="Close-up professional portrait of a focused young male Brazilian technology student named Lucas Souza wearing glasses, subtle soft blue ambient studio lighting, dark modern tech environment, high-end photography, sharp focus, confident and approachable expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIKLMJ7unqMQibFEuIiwV_z2amy5jhNnK6r74F9s8zmzh8yap-okI-oC6DC8vQU_ZMHqwizYYThJMhEZ_vCjlaW-2IyoxL12UrEzOcHEw8OXzNKGWisAYR6qijG6L6bAyhT75pENi2RxcJFOANN-LcyRcRkNUp9EGWTxDkX7JERt1xqccoP_JPJVe2NcuI9JLilRqA1D39HQCqylGLnPWZmmdSmrdsyMgBXbujupA" />
                              <div className="absolute -bottom-1 -right-1 bg-secondary text-surface-container-lowest p-1 rounded-lg flex items-center justify-center shadow-md" title="Alto Desempenho ODS 4">
                                <span className="material-symbols-outlined text-base" style={{fontVariationSettings: '"FILL" 1'}}>workspace_premium</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <div className="flex flex-wrap items-center gap-space-sm">
                                <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Lucas Souza</h1>
                                <span className="px-2.5 py-0.5 rounded-lg bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold tracking-wider">
                                  MATRÍCULA: 2024-TI01
                                </span>
                              </div>
                              <p className="text-on-surface-variant font-body-md text-body-md">
                                4º Semestre • Desenvolvimento de Sistemas &amp; DevOps Corporativo
                              </p>
                              <div className="flex flex-wrap items-center gap-space-md pt-1">
                                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                                  <span className="material-symbols-outlined text-base text-secondary">verified</span>
                                  <span>Frequência Prática: <strong className="text-on-surface font-semibold">97.8%</strong></span>
                                </div>
                                <span className="text-outline-variant font-body-sm text-body-sm">•</span>
                                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                                  <span className="material-symbols-outlined text-base text-tertiary">code_blocks</span>
                                  <span>18 Sprints Entregues</span>
                                </div>
                                <span className="text-outline-variant font-body-sm text-body-sm">•</span>
                                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-label-md">
                                  <span className="material-symbols-outlined text-base text-primary">groups</span>
                                  <span>Líder de Squad TI</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Performance Badge & Quick CTA */}
                          <div className="flex flex-wrap sm:flex-nowrap items-center gap-space-md bg-surface-container/70 p-space-md rounded-xl backdrop-blur-md">
                            <div className="flex items-center gap-space-sm pr-space-md">
                              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: '"FILL" 1'}}>energy_savings_leaf</span>
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                  <span className="font-data-display text-data-display text-secondary leading-none">94%</span>
                                  <span className="material-symbols-outlined text-secondary text-sm">trending_up</span>
                                </div>
                                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Domínio ODS 4.4</span>
                                <span className="font-body-sm text-body-sm text-outline">Competências Globais</span>
                              </div>
                            </div>
                            <button className="flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-primary-container text-on-primary-container font-title-sm text-title-sm hover:opacity-95 shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all whitespace-nowrap cursor-pointer" id="openEvaluationModal" onClick={() => setModalOpen(true)} type="button">
                              <span className="material-symbols-outlined text-lg">{evaluationSubmitted ? 'check_circle' : 'rate_review'}</span>
                              <span>{evaluationSubmitted ? 'Avaliação Registrada!' : 'Lançar Nova Avaliação'}</span>
                            </button>
                          </div>
                        </div>
                      </section>
                      {/* Main Workspace Bento Grid (2 Columns) */}
                      <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
                        {/* ================= COLUNA 1 (7 cols): Visualizações Técnicas ================= */}
                        <section className="xl:col-span-7 flex flex-col gap-space-lg">
                          {/* Radar Chart Card (Spider Chart) */}
                          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                              <div>
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-primary text-xl">radar</span>
                                  <h2 className="font-title-md text-title-md text-on-surface">Radar de Competências Técnicas</h2>
                                </div>
                                <p className="font-body-sm text-body-sm text-outline mt-0.5">Diagnóstico das 6 competências nucleares práticas vs. benchmark do semestre</p>
                              </div>
                              <div className="flex items-center gap-space-sm">
                                <span className="flex items-center gap-1 font-label-sm text-label-sm text-secondary">
                                  <span className="w-3 h-3 rounded-full bg-secondary inline-block" /> Lucas (Real)
                                </span>
                                <span className="flex items-center gap-1 font-label-sm text-label-sm text-primary">
                                  <span className="w-3 h-3 rounded-full bg-primary-container inline-block" /> Média Turma
                                </span>
                              </div>
                            </div>
                            {/* Radar SVG Container */}
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center py-space-sm">
                              <svg className="w-full h-full max-h-[380px] overflow-visible" viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg">
                                {/* Radial Grid Polygons (6 Axes: cx=250, cy=200, R=140) */}
                                {/* Levels: 20%, 40%, 60%, 80%, 100% */}
                                {/* 0 deg: Front-End (250, 60) */}
                                {/* 60 deg: Back-End (371.2, 130) */}
                                {/* 120 deg: DevOps (371.2, 270) */}
                                {/* 180 deg: Algoritmos (250, 340) */}
                                {/* 240 deg: Resolução de Problemas (128.8, 270) */}
                                {/* 300 deg: Trabalho em Equipe (128.8, 130) */}
                                <defs>
                                  <linearGradient id="lucasRadarGrad" x1="0%" x2="100%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#4edea3" stopOpacity="0.45" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.30" />
                                  </linearGradient>
                                  <linearGradient id="classBenchmarkGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.15" />
                                    <stop offset="100%" stopColor="#7bd0ff" stopOpacity="0.05" />
                                  </linearGradient>
                                  <filter height="140%" id="softGlow" width="140%" x="-20%" y="-20%">
                                    <feGaussianBlur result="blur" stdDeviation={4} />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                  </filter>
                                </defs>
                                {/* Radial Grid Level 20% */}
                                <polygon className="text-surface-variant/40" fill="none" points="250,172 274.2,186 274.2,214 250,228 225.8,214 225.8,186" stroke="currentColor" strokeWidth={1} />
                                {/* Radial Grid Level 40% */}
                                <polygon className="text-surface-variant/40" fill="none" points="250,144 298.5,172 298.5,228 250,256 201.5,228 201.5,172" stroke="currentColor" strokeWidth={1} />
                                {/* Radial Grid Level 60% */}
                                <polygon className="text-surface-variant/50" fill="none" points="250,116 322.7,158 322.7,242 250,284 177.3,242 177.3,158" stroke="currentColor" strokeWidth={1} />
                                {/* Radial Grid Level 80% */}
                                <polygon className="text-surface-variant/60" fill="none" points="250,88 347,144 347,256 250,312 153,256 153,144" stroke="currentColor" strokeWidth={1} />
                                {/* Radial Grid Level 100% Perimeter */}
                                <polygon className="text-surface-bright/70" fill="none" points="250,60 371.2,130 371.2,270 250,340 128.8,270 128.8,130" stroke="currentColor" strokeWidth="1.5" />
                                {/* Axis Rays */}
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2={250} y1={200} y2={60} />
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2="371.2" y1={200} y2={130} />
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2="371.2" y1={200} y2={270} />
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2={250} y1={200} y2={340} />
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2="128.8" y1={200} y2={270} />
                                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="2 3" strokeWidth={1} x1={250} x2="128.8" y1={200} y2={130} />
                                {/* Benchmark Polygon (Média da Turma: Front 75%, Back 70%, Devops 60%, Alg 65%, Prob 72%, Team 80%) */}
                                {/* Front: 250, 95 | Back: 335, 151 | DevOps: 323, 242 | Alg: 250, 291 | Prob: 162.7, 250 | Team: 153, 144 */}
                                <polygon fill="url(#classBenchmarkGrad)" points="250,95 335,151 323,242 250,291 162.7,250 153,144" stroke="#2563eb" strokeDasharray="4 4" strokeOpacity="0.6" strokeWidth={2} />
                                {/* Lucas Data Area (Front 92%, Back 96%, DevOps 85%, Algoritmos 88%, Resolução 95%, Trabalho Equipe 98%) */}
                                {/* Front 92%: 250, 71.2 */}
                                {/* Back 96%: 366.4, 132.8 */}
                                {/* DevOps 85%: 353, 259.5 */}
                                {/* Algoritmos 88%: 250, 323.2 */}
                                {/* Resolução 95%: 134.9, 266.5 */}
                                {/* Trabalho Equipe 98%: 131.2, 131.4 */}
                                <polygon fill="url(#lucasRadarGrad)" filter="url(#softGlow)" points="250,71.2 366.4,132.8 353,259.5 250,323.2 134.9,266.5 131.2,131.4" stroke="#4edea3" strokeWidth="2.5" />
                                {/* Anchor Dots for Lucas Profile */}
                                <circle cx={250} cy="71.2" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                <circle cx="366.4" cy="132.8" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                <circle cx={353} cy="259.5" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                <circle cx={250} cy="323.2" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                <circle cx="134.9" cy="266.5" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                <circle cx="131.2" cy="131.4" fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                                {/* Axis Labels with Badges / Values */}
                                {/* Front-End (Top) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="middle" x={250} y={38}>Front-End</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="middle" x={250} y={52}>92% Domínio</text>
                                {/* Back-End (Top Right) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="start" x={382} y={125}>Back-End</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="start" x={382} y={139}>96% Domínio</text>
                                {/* DevOps (Bottom Right) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="start" x={382} y={275}>DevOps</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="start" x={382} y={289}>85% Domínio</text>
                                {/* Algoritmos (Bottom) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="middle" x={250} y={365}>Algoritmos</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="middle" x={250} y={379}>88% Domínio</text>
                                {/* Resolução de Problemas (Bottom Left) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="end" x={118} y={275}>Resolução de Prob.</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="end" x={118} y={289}>95% Domínio</text>
                                {/* Trabalho em Equipe (Top Left) */}
                                <text className="fill-on-surface font-title-sm text-title-sm font-semibold" textAnchor="end" x={118} y={125}>Trabalho em Equipe</text>
                                <text className="fill-secondary font-label-sm text-label-sm font-bold" textAnchor="end" x={118} y={139}>98% Maestria</text>
                              </svg>
                            </div>
                            {/* Radar Mini Legend Indicators */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-space-sm pt-space-xs">
                              <div className="bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
                                <span className="text-on-surface-variant font-label-sm text-label-sm">Nível Taxonômico</span>
                                <span className="text-secondary font-label-md text-label-md font-bold">Avançado (Bloom 5)</span>
                              </div>
                              <div className="bg-surface-container p-space-sm rounded-lg flex items-center justify-between">
                                <span className="text-on-surface-variant font-label-sm text-label-sm">Evidências Práticas</span>
                                <span className="text-primary font-label-md text-label-md font-bold">42 Commits Validados</span>
                              </div>
                              <div className="bg-surface-container p-space-sm rounded-lg flex items-center justify-between col-span-2 sm:col-span-1">
                                <span className="text-on-surface-variant font-label-sm text-label-sm">Desvio da Média</span>
                                <span className="text-secondary font-label-md text-label-md font-bold">+21.4 p.p.</span>
                              </div>
                            </div>
                          </div>
                          {/* 6-Month Timeline Evolution Stepper & Curve */}
                          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                              <div>
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-secondary text-xl">show_chart</span>
                                  <h3 className="font-title-md text-title-md text-on-surface">Evolução Temporal de Habilidades</h3>
                                </div>
                                <p className="font-body-sm text-body-sm text-outline">Trajetória longitudinal dos últimos 6 meses (Março - Agosto 2024)</p>
                              </div>
                              <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded-lg">
                                <span className="material-symbols-outlined text-sm text-secondary">trending_up</span>
                                <span className="font-label-sm text-label-sm text-on-surface font-semibold">+34% Crescimento Geral</span>
                              </div>
                            </div>
                            {/* Trend Chart SVG */}
                            <div className="relative w-full h-44 bg-surface-container-lowest/80 rounded-xl p-3 flex flex-col justify-between">
                              <svg className="w-full h-28 overflow-visible" preserveAspectRatio="none" viewBox="0 0 540 100">
                                <defs>
                                  <linearGradient id="areaFill" x1={0} x2={0} y1={0} y2={1}>
                                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0.0} />
                                  </linearGradient>
                                </defs>
                                {/* Horizontal gridlines */}
                                <line className="text-surface-variant/40" stroke="currentColor" strokeDasharray="3 3" strokeWidth={1} x1={0} x2={540} y1={20} y2={20} />
                                <line className="text-surface-variant/40" stroke="currentColor" strokeDasharray="3 3" strokeWidth={1} x1={0} x2={540} y1={50} y2={50} />
                                <line className="text-surface-variant/40" stroke="currentColor" strokeDasharray="3 3" strokeWidth={1} x1={0} x2={540} y1={80} y2={80} />
                                {/* Progression Area */}
                                <path d="M 10,82 Q 100,75 110,68 T 215,55 T 320,38 T 425,24 T 530,12 L 530,95 L 10,95 Z" fill="url(#areaFill)" />
                                {/* Progression Line */}
                                <path d="M 10,82 Q 100,75 110,68 T 215,55 T 320,38 T 425,24 T 530,12" fill="none" stroke="#2563eb" strokeWidth={3} />
                                {/* Spark Points */}
                                <circle cx={10} cy={82} fill="#b4c5ff" r={4} />
                                <circle cx={110} cy={68} fill="#b4c5ff" r={4} />
                                <circle cx={215} cy={55} fill="#b4c5ff" r={4} />
                                <circle cx={320} cy={38} fill="#b4c5ff" r={4} />
                                <circle cx={425} cy={24} fill="#b4c5ff" r={4} />
                                <circle cx={530} cy={12} fill="#4edea3" r={5} stroke="#0f131d" strokeWidth={2} />
                              </svg>
                              {/* Month Stepper Timeline Labels */}
                              <div className="grid grid-cols-6 text-center pt-2">
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Mar</span>
                                  <span className="font-label-sm text-label-sm text-outline">60%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Abr</span>
                                  <span className="font-label-sm text-label-sm text-outline">68%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Mai</span>
                                  <span className="font-label-sm text-label-sm text-outline">74%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Jun</span>
                                  <span className="font-label-sm text-label-sm text-outline">83%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Jul</span>
                                  <span className="font-label-sm text-label-sm text-outline">89%</span>
                                </div>
                                <div className="flex flex-col items-center">
                                  <span className="font-label-sm text-label-sm text-secondary font-bold">Ago</span>
                                  <span className="font-label-sm text-label-sm text-secondary font-bold">94%</span>
                                </div>
                              </div>
                            </div>
                            {/* Stepper Milestones list */}
                            <div className="flex flex-col gap-space-sm pt-space-xs">
                              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container">
                                <span className="material-symbols-outlined text-secondary text-lg mt-0.5">verified_user</span>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-space-sm">
                                    <span className="font-title-sm text-title-sm text-on-surface">Marco: Maestria em Arquitetura Modular (Back-End)</span>
                                    <span className="font-label-sm text-label-sm text-secondary font-semibold">12 Ago</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Lucas demonstrou excelência na modelagem de microsserviços Node.js e orquestração Docker, atingindo nível sênior nos critérios de avaliação prática.
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container">
                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">flag</span>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-space-sm">
                                    <span className="font-title-sm text-title-sm text-on-surface">Marco: Resolução de Conflitos em CI/CD Pipeline</span>
                                    <span className="font-label-sm text-label-sm text-outline">18 Jul</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                                    Implementação bem-sucedida de GitHub Actions com testes automatizados e rollback resiliente sob condições simuladas de falha crítica.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Student Project Evidence Gallery */}
                          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="font-title-md text-title-md text-on-surface">Evidências de Projeto &amp; Artefatos</h3>
                                <p className="font-body-sm text-body-sm text-outline">Projetos práticos integrados avaliados pelo corpo docente</p>
                              </div>
                              <button className="text-primary hover:underline font-label-md text-label-md flex items-center gap-1">
                                <span>Repositório Completo</span>
                                <span className="material-symbols-outlined text-sm">open_in_new</span>
                              </button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                              <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col">
                                <img className="w-full h-32 object-cover" data-alt="Digital high tech user interface screen mockup of an automated API microservices system with real time telemetry analytics, dark clean theme with glowing green and cyan charts, futuristic code IDE layout, crisp design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClKOmeILSHIy5_gPkQfHTgwMxCHGtf-M00gXEy4LPpx-s2cGa8FECSJSFbXCzgJOs6GTwkAxJCb5UZvUwAMNcZj-r5Dgo6MMDb4HINylJE-Nn1bjUpo-spbbAHarE6Hw6Nw88XIExK2h-l4zdwCAb3Ay8Yj6WyN2d-zmveoAPe4rsEpQuJSr0kHbgzwZ7UuKvkxf_aV_C1q3aBvHBU-bquK_yIYlxyi9btrgvY_58" />
                                <div className="p-space-md flex flex-col gap-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-title-sm text-title-sm text-on-surface">Nexus Gateway Core</span>
                                    <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">Nota 10.0</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Gateway de autenticação com Redis Cache e validação de tokens JWT.</p>
                                </div>
                              </div>
                              <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col">
                                <img className="w-full h-32 object-cover" data-alt="Modern clean DevOps infrastructure topology diagram dashboard, showing Kubernetes cluster nodes connected with secure mesh, glowing dark slate interface, minimalist technology graphics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcFc3HSuuVhtfyIKLbUP-r3u5GzR1Whw7ujA9r3gcSoSFFjYIsnFbzEisGAf-K5xw1Zuk65NfgWwYwmYWdTBC8kQ9PvCX-FuWn-L47GUfgUeUV7uw9vuLqDRBTyquDtpdZ_baJeWjvnNS776oYF3wuMCtyeFR-Eq0szqZuC8bdjF1BtAZhGZJydwtKS2rS-vB0go53a-fUWZRSIY4Pk8rRICw71oHDvuQSIY2YYBs" />
                                <div className="p-space-md flex flex-col gap-1">
                                  <div className="flex items-center justify-between">
                                    <span className="font-title-sm text-title-sm text-on-surface">Cluster K8s Auto-Scale</span>
                                    <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">Nota 9.5</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant">Cluster Kubernetes com Terraform para provisionamento multi-cloud.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* ================= COLUNA 2 (5 cols): Registro Docente & ODS 4 ================= */}
                        <section className="xl:col-span-5 flex flex-col gap-space-lg">
                          {/* ODS 4 Target Compliance Status Card */}
                          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md relative overflow-hidden">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-space-xs">
                                <div className="w-8 h-8 rounded-lg bg-secondary/15 flex items-center justify-center text-secondary">
                                  <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>public</span>
                                </div>
                                <h3 className="font-title-md text-title-md text-on-surface">Conformidade ODS 4</h3>
                              </div>
                              <span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">
                                Meta 4.4 • Alinhado
                              </span>
                            </div>
                            <div className="bg-surface-container p-space-md rounded-xl flex flex-col gap-space-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-title-sm text-title-sm text-on-surface font-semibold">Habilidades para Empregabilidade e Trabalho Decente</span>
                                <span className="font-data-display text-data-display text-secondary leading-none">94%</span>
                              </div>
                              {/* Progress Bar */}
                              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                                <div className="h-full bg-secondary rounded-full w-[94%] shadow-[0_0_12px_rgba(78,222,163,0.5)]" />
                              </div>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Indicador 4.4.1 da UNESCO: Jovens e adultos com competências em tecnologia da informação e comunicação (TIC).
                              </p>
                            </div>
                            {/* ODS 4 Specific Sub-Competencies */}
                            <div className="flex flex-col gap-space-xs">
                              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high/40">
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                                  <span className="font-body-sm text-body-sm text-on-surface">Pensamento Crítico &amp; Resolução Lógica</span>
                                </div>
                                <span className="font-label-md text-label-md text-secondary font-semibold">Nível 5/5</span>
                              </div>
                              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high/40">
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                                  <span className="font-body-sm text-body-sm text-on-surface">Colaboração Interpessoal e Pair Programming</span>
                                </div>
                                <span className="font-label-md text-label-md text-secondary font-semibold">Nível 5/5</span>
                              </div>
                              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-high/40">
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-primary text-base">hourglass_top</span>
                                  <span className="font-body-sm text-body-sm text-on-surface">Segurança Cibernética &amp; LGPD em Aplicações</span>
                                </div>
                                <span className="font-label-md text-label-md text-primary font-semibold">Nível 4/5 (Em Progresso)</span>
                              </div>
                            </div>
                          </div>
                          {/* Registro Pedagógico & Logs do Docente */}
                          <div className="rounded-xl bg-surface-container-low p-space-lg shadow-lg flex flex-col gap-space-md">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-primary text-xl">history_edu</span>
                                <h3 className="font-title-md text-title-md text-on-surface">Anotações Pedagógicas</h3>
                              </div>
                              <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                                Confidencial Docente
                              </span>
                            </div>
                            {/* Add Note Form Container */}
                            <div className="bg-surface-container-lowest p-space-md rounded-xl flex flex-col gap-space-sm">
                              <div className="flex items-center justify-between">
                                <span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                                  <span className="material-symbols-outlined text-secondary text-sm">add_circle</span>
                                  Nova Observação Pedagógica
                                </span>
                                <span className="font-label-sm text-label-sm text-outline">Prof. Carlos Silva</span>
                              </div>
                              <div className="grid grid-cols-2 gap-space-xs">
                                <select className="h-9 px-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high" id="noteCategory" onChange={(event) => setNoteCategory(event.target.value)} value={noteCategory}>
                                  <option value="Feedback Técnico">Feedback Técnico</option>
                                  <option value="Mentoria de Carreira">Mentoria de Carreira</option>
                                  <option value="Desafio Prático">Desafio Prático</option>
                                  <option value="Comportamento & Squad">Comportamento &amp; Squad</option>
                                </select>
                                <select className="h-9 px-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-high" defaultValue="Impacto Médio" id="noteImpact">
                                  <option value="Impacto Alto">Prioridade: Alta</option>
                                  <option value="Impacto Médio">Prioridade: Normal</option>
                                  <option value="Elogio">Reconhecimento</option>
                                </select>
                              </div>
                              <textarea className="w-full p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-high resize-none" id="newPedagogicalNote" onChange={(event) => setNoteText(event.target.value)} placeholder="Descreva o progresso técnico, postura colaborativa ou intervenção diagnóstica recomendada..." ref={noteInput} rows={3} value={noteText} />
                              <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center gap-space-xs cursor-pointer select-none">
                                  <input className="w-4 h-4 rounded bg-surface-container text-secondary accent-secondary cursor-pointer" id="markFollowup" type="checkbox" />
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Requer acompanhamento na Sprint 5</span>
                                </label>
                                <button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-primary-container/90 transition-all flex items-center gap-1 cursor-pointer" id="savePedagogicalNoteBtn" onClick={saveNote} type="button">
                                  <span className="material-symbols-outlined text-sm">send</span>
                                  <span>Salvar Registro</span>
                                </button>
                              </div>
                            </div>
                            {/* Feed de Anotações Existentes */}
                            <div className="flex flex-col gap-space-sm max-h-[520px] overflow-y-auto pr-1" id="pedagogicalNotesList">
                              {notes.map((note) => (
                                <article className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs transition-all hover:bg-surface-container-high" key={note.id}>
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-space-xs">
                                      <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">{note.category}</span>
                                      <span className="text-secondary font-label-sm text-label-sm">• Agora</span>
                                    </div>
                                    <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                                      <span className="material-symbols-outlined text-xs">verified</span>
                                      Prof. Carlos
                                    </span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface">&quot;{note.text}&quot;</p>
                                  <span className="flex items-center gap-1 pt-1 text-outline font-label-sm text-label-sm">
                                    <span className="material-symbols-outlined text-xs">sync</span>
                                    Registrado no Histórico Docente
                                  </span>
                                </article>
                              ))}
                              {/* Log 1: Feedback Técnico Recente */}
                              <article className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs transition-all hover:bg-surface-container-high">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="px-2 py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold">
                                      Feedback Técnico
                                    </span>
                                    <span className="text-outline font-label-sm text-label-sm">• Ontem, 16:45</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                                    <span className="material-symbols-outlined text-xs">verified</span>
                                    <span>Prof. Carlos</span>
                                  </div>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface">
                                  "Lucas apresentou excelente capacidade de abstração na refatoração da camada de persistência. Aconselhado a documentar o padrão CQRS aplicado como material de apoio para a turma."
                                </p>
                                <div className="flex items-center gap-space-md pt-1 text-outline font-label-sm text-label-sm">
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">hub</span> Arquitetura Node.js
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">thumb_up</span> Desempenho Notável
                                  </span>
                                </div>
                              </article>
                              {/* Log 2: Desafio Prático */}
                              <article className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs transition-all hover:bg-surface-container-high">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="px-2 py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-semibold">
                                      Desafio Prático
                                    </span>
                                    <span className="text-outline font-label-sm text-label-sm">• 08 Ago 2024</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                                    <span className="material-symbols-outlined text-xs">person</span>
                                    <span>Prof. Carlos</span>
                                  </div>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface">
                                  "Desafio de alta concorrência: simulamos 10.000 requisições simultâneas. O aluno solucionou gargalos de conexão no banco utilizando connection pooling e índices parciais no Postgres."
                                </p>
                                <div className="flex items-center gap-space-md pt-1 text-outline font-label-sm text-label-sm">
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">speed</span> Benchmark Aprovado
                                  </span>
                                </div>
                              </article>
                              {/* Log 3: Mentoria */}
                              <article className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs transition-all hover:bg-surface-container-high">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="px-2 py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">
                                      Mentoria de Carreira
                                    </span>
                                    <span className="text-outline font-label-sm text-label-sm">• 25 Jul 2024</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                                    <span className="material-symbols-outlined text-xs">person</span>
                                    <span>Prof. Carlos</span>
                                  </div>
                                </div>
                                <p className="font-body-sm text-body-sm text-on-surface">
                                  "Conversa de alinhamento profissional: Lucas demonstrou forte interesse em seguir carreira de Engenheiro de Plataforma (Platform Engineering). Orientado a buscar certificações AWS e CKA."
                                </p>
                                <div className="flex items-center gap-space-md pt-1 text-outline font-label-sm text-label-sm">
                                  <span className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">stars</span> Potencial de Mercado ODS 4.4
                                  </span>
                                </div>
                              </article>
                            </div>
                          </div>
                          {/* Next Pedagogical Actions Quick Panel */}
                          <div className="rounded-xl bg-surface-container-low p-space-md shadow-lg flex flex-col gap-space-sm">
                            <span className="font-label-md text-label-md text-outline uppercase font-semibold">Ações Recomendadas pelo Sistema</span>
                            <div className="flex flex-col gap-space-xs">
                              <button className="w-full flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all">
                                <div className="flex items-center gap-space-sm">
                                  <span className="material-symbols-outlined text-secondary text-lg">school</span>
                                  <span className="font-body-sm text-body-sm text-on-surface">Emitir Certificado Intermediário ODS 4</span>
                                </div>
                                <span className="material-symbols-outlined text-outline text-sm">arrow_forward</span>
                              </button>
                              <button className="w-full flex items-center justify-between p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high text-left transition-all">
                                <div className="flex items-center gap-space-sm">
                                  <span className="material-symbols-outlined text-primary text-lg">military_tech</span>
                                  <span className="font-body-sm text-body-sm text-on-surface">Nomear como Monitor da Disciplina de Back-End</span>
                                </div>
                                <span className="material-symbols-outlined text-outline text-sm">arrow_forward</span>
                              </button>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                    {/* Interactive Modal: Lançar Nova Avaliação Rápida */}
                    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dim/80 backdrop-blur-md ${modalOpen ? '' : 'hidden'}`} id="evaluationModal">
                      <div className="relative w-full max-w-lg bg-surface-container-low rounded-xl shadow-2xl p-space-lg flex flex-col gap-space-md">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-primary text-xl">rate_review</span>
                            <h3 className="font-title-md text-title-md text-on-surface">Avaliar Lucas Souza</h3>
                          </div>
                          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container" id="closeEvaluationModal" onClick={() => setModalOpen(false)} type="button">
                            <span className="material-symbols-outlined text-lg">close</span>
                          </button>
                        </div>
                        <div className="flex flex-col gap-space-sm">
                          <div>
                            <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Competência-Alvo</label>
                            <select className="w-full h-10 px-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none" id="modalSkillSelect">
                              <option value="Front-End">Front-End (UI/UX, React, Tailwind)</option>
                              <option value="Back-End">Back-End (APIs, Microsserviços, SQL/NoSQL)</option>
                              <option value="DevOps">DevOps (Docker, CI/CD, Kubernetes)</option>
                              <option value="Algoritmos">Algoritmos &amp; Estruturas de Dados</option>
                              <option value="Resolução de Problemas">Resolução de Problemas Complexos</option>
                              <option value="Trabalho em Equipe">Trabalho em Equipe &amp; Liderança Ágil</option>
                            </select>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <label className="font-label-sm text-label-sm text-on-surface-variant">Nível de Domínio Alcançado</label>
                              <span className="font-label-md text-label-md text-secondary font-bold" id="scoreValueDisplay">{score}%</span>
                            </div>
                            <input className="w-full accent-secondary cursor-pointer" id="scoreRange" max={100} min={50} onChange={(event) => setScore(Number(event.target.value))} type="range" value={score} />
                          </div>
                          <div>
                            <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Evidência Pedagógica / Link do Commit</label>
                            <input className="w-full h-9 px-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none" placeholder="ex: Repositório GitHub sprint-04 / Pull Request #22" type="text" />
                          </div>
                          <div>
                            <label className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Parecer Diagnóstico</label>
                            <textarea className="w-full p-space-sm rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none resize-none" placeholder="Comentários sobre a entrega e conformidade com critérios ODS 4..." rows={3} defaultValue={""} />
                          </div>
                        </div>
                        <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                          <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md" id="cancelModalBtn" onClick={() => setModalOpen(false)} type="button">
                            Cancelar
                          </button>
                          <button className="px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-primary-container/90 flex items-center gap-1 shadow-md" id="confirmEvaluationBtn" onClick={confirmEvaluation} type="button">
                            <span className="material-symbols-outlined text-sm">check</span>
                            <span>Registrar Avaliação</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div></main></div>
            </div>
    </div>
  );
}
