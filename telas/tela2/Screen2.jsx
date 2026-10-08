import { Children, createContext, useContext, useState } from 'react';

const StudentFilterContext = createContext({ searchTerm: '', activeFilter: 'all' });

function getText(children) {
  return Children.toArray(children).map((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return String(child);
    }
    return child?.props ? getText(child.props.children) : '';
  }).join(' ');
}

function normalizeText(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function StudentTableRow({ className, children }) {
  const { searchTerm, activeFilter } = useContext(StudentFilterContext);
  const text = normalizeText(getText(children));
  const filterMatches = activeFilter === 'all'
    || (activeFilter === 'on-track' && text.includes('em dia'))
    || (activeFilter === 'attention' && text.includes('atencao'))
    || (activeFilter === 'highlight' && text.includes('destaque'));

  if (!filterMatches || !text.includes(normalizeText(searchTerm))) {
    return null;
  }

  return <tr className={className}>{children}</tr>;
}

export default function Screen2() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    {/* Dynamic Glow & Ambient Accents */}
                    <div className="relative w-full px-margin py-space-lg flex flex-col gap-space-lg overflow-hidden">
                      <div className="absolute -top-32 right-12 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute top-48 left-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
                      {/* Header Context Strip (Bento Overview) */}
                      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-space-md">
                        {/* Cohort Identity Card */}
                        <div className="xl:col-span-8 bg-surface-container rounded-xl p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-surface-container-high/40 rounded-full pointer-events-none" />
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                            <div className="flex items-center gap-space-md">
                              <div className="w-14 h-14 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined text-3xl">terminal</span>
                              </div>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-space-xs">
                                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Turma Ativa • 2024.1</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
                                  <span className="font-label-sm text-label-sm text-on-surface-variant">Turno Matutino</span>
                                </div>
                                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">TI-A - Desenvolvimento Full Stack</h1>
                                <span className="font-body-md text-body-md text-on-surface-variant">Matriz Curricular: Engenharia de Software Aplicada • BNCC &amp; ODS 4.4</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-space-sm self-start sm:self-center">
                              <div className="px-space-md py-space-xs rounded-lg bg-surface-container-high text-on-surface flex flex-col items-end">
                                <span className="font-label-sm text-label-sm text-outline">Capacidade</span>
                                <span className="font-title-sm text-title-sm text-on-surface font-semibold">32 Alunos</span>
                              </div>
                            </div>
                          </div>
                          {/* Metric micro-strip */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg pt-space-md border-t-0 bg-surface-container-low/60 p-space-md rounded-lg">
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline">Média da Turma</span>
                              <div className="flex items-baseline gap-space-xs mt-0.5">
                                <span className="font-data-display text-data-display text-on-surface">80.2%</span>
                                <span className="font-label-sm text-label-sm text-secondary flex items-center">
                                  <span className="material-symbols-outlined text-xs">arrow_upward</span> +3.4%
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline">Competências Ativas</span>
                              <div className="flex items-baseline gap-space-xs mt-0.5">
                                <span className="font-data-display text-data-display text-primary">14</span>
                                <span className="font-body-sm text-body-sm text-outline-variant">/ 18 metas</span>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline">Nível Crítico</span>
                              <div className="flex items-baseline gap-space-xs mt-0.5">
                                <span className="font-data-display text-data-display text-error">3</span>
                                <span className="font-label-sm text-label-sm text-on-surface-variant">em atenção</span>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <span className="font-label-sm text-label-sm text-outline">Adesão ODS 4.4</span>
                              <div className="flex items-baseline gap-space-xs mt-0.5">
                                <span className="font-data-display text-data-display text-secondary">88.5%</span>
                                <span className="font-label-sm text-label-sm text-secondary">Meta Atingida</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Quick Summary Radar/Telemetry Card */}
                        <div className="xl:col-span-4 bg-surface-container rounded-xl p-space-lg shadow-md flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-space-xs">
                              <span className="material-symbols-outlined text-secondary text-lg">auto_graph</span>
                              <span className="font-title-sm text-title-sm text-on-surface">Distribuição de Status</span>
                            </div>
                            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-space-xs py-0.5 rounded">Semana 12</span>
                          </div>
                          <div className="flex items-center justify-between gap-space-md my-space-md">
                            {/* Inline Sparkline / Ring Summary */}
                            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
                              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                                {/* Green (Em dia: 70%) */}
                                <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="70, 100" strokeLinecap="round" strokeWidth="3.5" />
                                {/* Blue Purple (Destaque: 20%) */}
                                <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset={-70} strokeLinecap="round" strokeWidth="3.5" />
                              </svg>
                              <div className="absolute flex flex-col items-center">
                                <span className="font-title-sm text-title-sm text-on-surface font-bold">92%</span>
                                <span className="font-label-sm text-label-sm text-outline text-[9px] uppercase">Rendimento</span>
                              </div>
                            </div>
                            <div className="flex flex-col gap-space-xs flex-1">
                              <div className="flex items-center justify-between text-body-sm font-body-sm">
                                <span className="flex items-center gap-1.5 text-on-surface">
                                  <span className="w-2 h-2 rounded-full bg-secondary" />Em dia
                                </span>
                                <span className="font-semibold text-on-surface">24 alunos</span>
                              </div>
                              <div className="flex items-center justify-between text-body-sm font-body-sm">
                                <span className="flex items-center gap-1.5 text-on-surface">
                                  <span className="w-2 h-2 rounded-full bg-primary-container" />Destaques
                                </span>
                                <span className="font-semibold text-on-surface">5 alunos</span>
                              </div>
                              <div className="flex items-center justify-between text-body-sm font-body-sm">
                                <span className="flex items-center gap-1.5 text-on-surface">
                                  <span className="w-2 h-2 rounded-full bg-error" />Atenção
                                </span>
                                <span className="font-semibold text-error">3 alunos</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-space-xs text-outline">
                            <span className="font-label-sm text-label-sm">Auditoria pedagógica ativa</span>
                            <span className="font-label-sm text-label-sm text-secondary font-medium flex items-center gap-1">
                              <span className="material-symbols-outlined text-xs">sync</span> Atualizado hoje
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* Control Bar & Search Centerpiece */}
                      <div className="bg-surface-container rounded-xl p-space-md shadow-md flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                        {/* Search Input Container */}
                        <div className="relative flex-1 min-w-[280px]">
                          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
                          <input className="w-full h-11 pl-11 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-all shadow-inner" id="studentSearch" onChange={(event) => setSearchTerm(event.target.value.trim())} placeholder="Buscar aluno por nome, matrícula ou competência..." type="search" value={searchTerm} />
                        </div>
                        {/* Segmented Status Filter Tabs */}
                        <div className="flex items-center overflow-x-auto p-1 bg-surface-container-lowest rounded-lg gap-1 scrollbar-none">
                          <button className={`filter-tab px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all ${activeFilter === 'all' ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`} data-filter="all" onClick={() => setActiveFilter('all')} type="button">
                            Todos (32)
                          </button>
                          <button className={`filter-tab px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${activeFilter === 'on-track' ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`} data-filter="on-track" onClick={() => setActiveFilter('on-track')} type="button">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            Em dia
                          </button>
                          <button className={`filter-tab px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${activeFilter === 'attention' ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`} data-filter="attention" onClick={() => setActiveFilter('attention')} type="button">
                            <span className="w-2 h-2 rounded-full bg-error" />
                            Atenção
                          </button>
                          <button className={`filter-tab px-space-md py-1.5 rounded-lg font-label-md text-label-md transition-all flex items-center gap-1.5 ${activeFilter === 'highlight' ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`} data-filter="highlight" onClick={() => setActiveFilter('highlight')} type="button">
                            <span className="w-2 h-2 rounded-full bg-primary-container" />
                            Destaque
                          </button>
                        </div>
                        {/* Action Buttons */}
                        <div className="flex items-center gap-space-sm flex-wrap sm:flex-nowrap">
                          <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-all font-label-md text-label-md shadow-sm">
                            <span className="material-symbols-outlined text-secondary text-sm">download</span>
                            <span>Exportar Relatório ODS 4</span>
                          </button>
                          <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md font-semibold shadow-[0_0_16px_rgba(37,99,235,0.35)]">
                            <span className="material-symbols-outlined text-sm font-bold">add</span>
                            <span>+ Lançar Avaliação Rápida</span>
                          </button>
                        </div>
                      </div>
                      {/* Student Table Card */}
                      <div className="bg-surface-container rounded-xl shadow-md overflow-hidden flex flex-col">
                        <div className="overflow-x-auto w-full">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-surface-container-high/80 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                                <th className="py-space-md px-space-lg font-semibold" scope="col">Aluno &amp; Identificação</th>
                                <th className="py-space-md px-space-md font-semibold" scope="col">Competência Principal</th>
                                <th className="py-space-md px-space-md font-semibold w-56" scope="col">Progresso Geral</th>
                                <th className="py-space-md px-space-md font-semibold" scope="col">Proficiência</th>
                                <th className="py-space-md px-space-md font-semibold" scope="col">Status Pedagógico</th>
                                <th className="py-space-md px-space-lg font-semibold text-right" scope="col">Ações</th>
                              </tr>
                            </thead>
                            <StudentFilterContext.Provider value={{ searchTerm, activeFilter }}>
                            <tbody className="divide-y-0 text-body-md font-body-md">
                              {/* Row 1: Lucas Souza (Destaque) */}
                              <StudentTableRow className="student-row group hover:bg-surface-container-high transition-colors bg-surface-container/40">
                                <td className="py-space-md px-space-lg">
                                  <div className="flex items-center gap-space-md">
                                    <div className="relative">
                                      <img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Close-up professional portrait of a young male Brazilian computer science student named Lucas, smiling with modern studio lighting in soft cool cyan and slate blue tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhKSBupsY6igStAyqfH6O8v2VdslnSfaSrex9H0cCfe_EHmUi9bMdVyUHj11vsB9u5DSLhZkrxhe35xNFBf6s2JXPc6Ta5t2VVKEf_bm7HYrV8fPita1AiEc0D1CmvkEowxucRjcaAuRzYrCMPFEhYJa1sp4L60MiALvBfmTP2yPwpr5HfATmEB9tTE9j-6vUIszcdukT4wPvAe_vQtxsccIpgDltLoF-x4D1l9KI" />
                                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary-container flex items-center justify-center text-[10px] text-white">
                                        <span className="material-symbols-outlined text-[11px]">star</span>
                                      </span>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors truncate">Lucas Souza</span>
                                      <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">2024-TI01</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-primary text-base">code</span>
                                    <div className="flex flex-col">
                                      <span className="text-on-surface font-medium">React &amp; TS</span>
                                      <span className="font-label-sm text-label-sm text-outline">Frontend Architecture</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex flex-col gap-1.5 w-full">
                                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                                      <span className="font-label-sm text-label-sm font-mono font-bold text-secondary">94%</span>
                                      <span className="font-label-sm text-label-sm text-outline">Meta ODS 4.4</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                      <div className="h-full bg-gradient-to-r from-primary-container to-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.4)]" style={{width: '94%'}} />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-primary font-label-md text-label-md font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Avançado
                                  </span>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-primary-container/20 text-primary-fixed font-label-md text-label-md font-semibold shadow-[0_0_12px_rgba(37,99,235,0.25)]">
                                    <span className="material-symbols-outlined text-xs">workspace_premium</span>
                                    Destaque da Semana
                                  </span>
                                </td>
                                <td className="py-space-md px-space-lg text-right">
                                  <div className="inline-flex items-center gap-space-xs">
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-sm">
                                      Ver Perfil
                                    </button>
                                    <button className="px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 font-label-md text-label-md font-semibold transition-all shadow-sm">
                                      Avaliar
                                    </button>
                                  </div>
                                </td>
                              </StudentTableRow>
                              {/* Row 2: Beatriz Lima (Em dia) */}
                              <StudentTableRow className="student-row group hover:bg-surface-container-high transition-colors bg-surface-container-low/50">
                                <td className="py-space-md px-space-lg">
                                  <div className="flex items-center gap-space-md">
                                    <img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Professional studio portrait of an intelligent young female Latin American software engineering student named Beatriz with warm smile, dark neat hair, dark slate ambient background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTTw1lGBNBhY4eBriJXZcvtMeuDmDDzCh7TjHbEmueWoRlaruTSLW54ExISPPlWlQCZWf9LS1ribdb_WpVee7f6HUOen1SzBndgpdRb_QTV59EMUw8qTZouYxpMYG2lCJy1Ut3E_e0mcez-6uRKnyCnAfqWduJC4zTPB0c93ZAa7YqZxOEoLnpuLLi71vlbFyBvTu8SyW7O1snM5Wowb5MiMmwQEr1suz4twClVWE" />
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors truncate">Beatriz Lima</span>
                                      <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">2024-TI02</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-secondary text-base">api</span>
                                    <div className="flex flex-col">
                                      <span className="text-on-surface font-medium">Python &amp; APIs</span>
                                      <span className="font-label-sm text-label-sm text-outline">FastAPI &amp; Data Pipeline</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex flex-col gap-1.5 w-full">
                                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                                      <span className="font-label-sm text-label-sm font-mono font-bold text-secondary">88%</span>
                                      <span className="font-label-sm text-label-sm text-outline">Meta ODS 4.4</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                      <div className="h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.3)]" style={{width: '88%'}} />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-md text-label-md font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Avançado
                                  </span>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md font-semibold">
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    Em dia
                                  </span>
                                </td>
                                <td className="py-space-md px-space-lg text-right">
                                  <div className="inline-flex items-center gap-space-xs">
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-sm">
                                      Ver Perfil
                                    </button>
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md font-medium transition-all shadow-sm">
                                      Avaliar
                                    </button>
                                  </div>
                                </td>
                              </StudentTableRow>
                              {/* Row 3: Gabriel Santos (Atenção necessária) */}
                              <StudentTableRow className="student-row group hover:bg-surface-container-high transition-colors bg-surface-container/40">
                                <td className="py-space-md px-space-lg">
                                  <div className="flex items-center gap-space-md">
                                    <div className="relative">
                                      <img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Realistic headshot portrait of a focused young male student named Gabriel, glasses, casual dark hoodie, clean tech modern office background with low cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5bXc_jLsFMc1JXisDxJsroPc7n5ksJJAn43YWc1NINHlbIffortCWr9ZAnP6MuzgkpXn6hXOSrx8NN4qzaGTqYpW1G2JLb6lg7i3zcQfwal1f1wewAS5olUhiFrV9Yv_Ku-MsNGKc6Yk3ra46anegYWN9COOe3hJOw-yYliWDM4fHCb0uaHhmeFiC3bwivvIqwjCn7JxDBFPOf0qd-Vgf9Izr0HYZj39ffESB1RQ" />
                                      <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-error flex items-center justify-center text-[9px] text-on-error">!</span>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors truncate">Gabriel Santos</span>
                                      <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">2024-TI03</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-error text-base">cloud</span>
                                    <div className="flex flex-col">
                                      <span className="text-on-surface font-medium">Arquitetura Cloud</span>
                                      <span className="font-label-sm text-label-sm text-outline">AWS &amp; Docker DevOps</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex flex-col gap-1.5 w-full">
                                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                                      <span className="font-label-sm text-label-sm font-mono font-bold text-error">52%</span>
                                      <span className="font-label-sm text-label-sm text-error/80">Recuperação</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                      <div className="h-full bg-error rounded-full shadow-[0_0_8px_rgba(255,180,171,0.3)]" style={{width: '52%'}} />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-md text-label-md font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                                    Iniciante
                                  </span>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-error-container/40 text-error font-label-md text-label-md font-semibold">
                                    <span className="material-symbols-outlined text-xs">warning</span>
                                    Atenção necessária
                                  </span>
                                </td>
                                <td className="py-space-md px-space-lg text-right">
                                  <div className="inline-flex items-center gap-space-xs">
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-sm">
                                      Ver Perfil
                                    </button>
                                    <button className="px-space-sm py-1.5 rounded-lg bg-error-container text-on-error font-label-md text-label-md font-semibold hover:bg-error-container/80 transition-all shadow-sm">
                                      Avaliar
                                    </button>
                                  </div>
                                </td>
                              </StudentTableRow>
                              {/* Row 4: Mariana Costa (Em dia) */}
                              <StudentTableRow className="student-row group hover:bg-surface-container-high transition-colors bg-surface-container-low/50">
                                <td className="py-space-md px-space-lg">
                                  <div className="flex items-center gap-space-md">
                                    <img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Portrait photography of a confident young Brazilian woman named Mariana, curly hair, bright engaging expression, modern educational tech hub atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr_Yj0zkmPo7RwHl7aeKWT0oQ4asxhSdglBkZXW-EiX9oISKzbYk9j2QoX8lpwiE9wJXUJjnBMl88HnJ1R5Uh-DjaOBhvOHYe--ed2V9Dsz0KAkcoaoOAjCVFY_2O3rJs_paiprwXs_Z2FieODk35PdQ97SgE48WCuEvO5I5iqS2GObTCv-JjHs7FLFcczllKLkRvuxKcGImpoKQ0tP7zuE4IoeQu7GzDS85hJ_CA" />
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors truncate">Mariana Costa</span>
                                      <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">2024-TI04</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-tertiary text-base">database</span>
                                    <div className="flex flex-col">
                                      <span className="text-on-surface font-medium">Banco de Dados</span>
                                      <span className="font-label-sm text-label-sm text-outline">PostgreSQL &amp; Redis Cache</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex flex-col gap-1.5 w-full">
                                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                                      <span className="font-label-sm text-label-sm font-mono font-bold text-secondary">91%</span>
                                      <span className="font-label-sm text-label-sm text-outline">Meta ODS 4.4</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                      <div className="h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(78,222,163,0.3)]" style={{width: '91%'}} />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-secondary font-label-md text-label-md font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Avançado
                                  </span>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md font-semibold">
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    Em dia
                                  </span>
                                </td>
                                <td className="py-space-md px-space-lg text-right">
                                  <div className="inline-flex items-center gap-space-xs">
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-sm">
                                      Ver Perfil
                                    </button>
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md font-medium transition-all shadow-sm">
                                      Avaliar
                                    </button>
                                  </div>
                                </td>
                              </StudentTableRow>
                              {/* Row 5: Rafael Oliveira (Em dia) */}
                              <StudentTableRow className="student-row group hover:bg-surface-container-high transition-colors bg-surface-container/40">
                                <td className="py-space-md px-space-lg">
                                  <div className="flex items-center gap-space-md">
                                    <img className="w-10 h-10 rounded-full object-cover shadow-sm" data-alt="Clean corporate and tech portrait of a young male software apprentice named Rafael, short dark hair, focused gaze, minimalist dark office background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUrecCWpcDCDypqnKlVZbypu_nOivF0ovxAgE-ERXLAiaD6PGG678sxb-0mqQKJEjMJo_z0ksl9EAVypsjKXChwcrxxyj5qmW2KXtzSdYEADdgmrqQk85UTRo7QR5AyoTQ0Gq17ShEuIE8TK7iptCXfN2jUBI066KqD8sPRZsc-0oDE3_Yv1HTqAumPnGJZNioxNjNw0IK0B6dN9sT_ypF1T7eVR6kaRedRHNNDw4" />
                                    <div className="flex flex-col min-w-0">
                                      <span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors truncate">Rafael Oliveira</span>
                                      <span className="font-label-sm text-label-sm text-outline tracking-wider font-mono">2024-TI05</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-primary-fixed-dim text-base">account_tree</span>
                                    <div className="flex flex-col">
                                      <span className="text-on-surface font-medium">Lógica de Programação</span>
                                      <span className="font-label-sm text-label-sm text-outline">Estruturas &amp; Algoritmos</span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <div className="flex flex-col gap-1.5 w-full">
                                    <div className="flex items-center justify-between text-body-sm font-body-sm">
                                      <span className="font-label-sm text-label-sm font-mono font-bold text-primary">76%</span>
                                      <span className="font-label-sm text-label-sm text-outline">Meta ODS 4.4</span>
                                    </div>
                                    <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                      <div className="h-full bg-primary-container rounded-full shadow-[0_0_8px_rgba(37,99,235,0.3)]" style={{width: '76%'}} />
                                    </div>
                                  </div>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container-highest text-tertiary font-label-md text-label-md font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                    Intermediário
                                  </span>
                                </td>
                                <td className="py-space-md px-space-md">
                                  <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md font-semibold">
                                    <span className="w-2 h-2 rounded-full bg-secondary" />
                                    Em dia
                                  </span>
                                </td>
                                <td className="py-space-md px-space-lg text-right">
                                  <div className="inline-flex items-center gap-space-xs">
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all shadow-sm">
                                      Ver Perfil
                                    </button>
                                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md font-medium transition-all shadow-sm">
                                      Avaliar
                                    </button>
                                  </div>
                                </td>
                              </StudentTableRow>
                            </tbody>
                            </StudentFilterContext.Provider>
                          </table>
                        </div>
                        {/* Clean Aesthetic Pagination Footer */}
                        <div className="px-space-lg py-space-md bg-surface-container-high/60 flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                          <div className="flex items-center gap-space-xs">
                            <span className="material-symbols-outlined text-secondary text-sm">groups</span>
                            <span>Exibindo <strong className="text-on-surface font-semibold">1-5</strong> de <strong className="text-on-surface font-semibold">32</strong> alunos da turma <strong className="text-primary font-semibold">TI-A</strong></span>
                          </div>
                          <div className="flex items-center gap-space-xs">
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-outline hover:text-on-surface hover:bg-surface-container-highest transition-all disabled:opacity-40" disabled>
                              <span className="material-symbols-outlined text-sm">chevron_left</span>
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-sm">
                              1
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all">
                              2
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all">
                              3
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all">
                              ...
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all">
                              7
                            </button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest transition-all">
                              <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main></div>
            </div>
    </div>
  );
}
