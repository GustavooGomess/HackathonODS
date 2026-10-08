import { Children, createContext, useContext, useState } from 'react';

const NotificationContext = createContext(null);
const notificationIds = ['notif-1', 'notif-2', 'notif-3', 'notif-4'];

function getText(children) {
  return Children.toArray(children).map((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return String(child);
    }
    return child?.props ? getText(child.props.children) : '';
  }).join(' ');
}

function NotificationCard({ category, id, children }) {
  const { searchTerm, activeCategory, readIds, markRead } = useContext(NotificationContext);
  const text = getText(children).toLocaleLowerCase('pt-BR');
  const isRead = readIds.has(id);

  if ((activeCategory !== 'all' && activeCategory !== category)
      || !text.includes(searchTerm.toLocaleLowerCase('pt-BR').trim())) {
    return null;
  }

  return (
    <article
      className={`notification-item group relative p-space-lg rounded-xl hover:bg-surface-container transition-all shadow-md overflow-hidden flex flex-col sm:flex-row gap-space-md items-start ${isRead ? 'is-read bg-surface-container-low/70 opacity-85' : 'bg-surface-container-low'}`}
      data-category={category}
      data-id={id}
      onClick={(event) => {
        if (event.target.closest('.mark-single-read-btn')) {
          markRead(id);
        }
      }}
    >
      {children}
    </article>
  );
}

export default function Screen10() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [readIds, setReadIds] = useState(() => new Set(['notif-4']));
  const markRead = (id) => setReadIds((previous) => new Set(previous).add(id));
  const markAllRead = () => setReadIds(new Set(notificationIds));
  const unreadCount = notificationIds.length - readIds.size;

  return (
    <NotificationContext.Provider value={{ searchTerm, activeCategory, readIds, markRead }}>
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    <div className="px-space-md py-space-md lg:px-margin lg:py-space-lg max-w-[1440px] w-full mx-auto flex flex-col gap-space-lg">
                      {/* Top Bar: Overview & Quick Actions */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                        <div className="flex flex-col gap-space-xs">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping inline-block" />
                              Monitor em Tempo Real
                            </span>
                            <span className="text-outline-variant">•</span>
                            <span className="font-label-md text-label-md text-on-surface-variant">Sincronização ODS 4.4</span>
                          </div>
                          <div className="flex items-center gap-space-sm flex-wrap">
                            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Central de Notificações</h1>
                            <span className={`px-space-sm py-0.5 rounded-full font-label-md text-label-md font-semibold ${unreadCount > 0 ? 'bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(37,99,235,0.4)]' : 'bg-surface-container-high text-outline'}`} id="unread-counter-badge">
                              {unreadCount > 0 ? `${unreadCount} novas atualizações` : 'Tudo lido'}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm self-start md:self-auto">
                          <button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-label-md text-label-md shadow-sm group" id="mark-all-read-btn" onClick={markAllRead} type="button">
                            <span className="material-symbols-outlined text-sm text-secondary group-hover:scale-110 transition-transform">done_all</span>
                            <span>Marcar todas como lidas</span>
                          </button>
                          <button className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all shadow-sm" title="Configurações de Alerta">
                            <span className="material-symbols-outlined text-base">tune</span>
                          </button>
                        </div>
                      </div>
                      {/* Filter & Search Toolbar */}
                      <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-sm shadow-md">
                        {/* Category Tabs */}
                        <div className="flex items-center gap-1 overflow-x-auto pb-1 lg:pb-0" id="filter-tabs">
                          <button className={`filter-tab px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs shrink-0 ${activeCategory === 'all' ? 'bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(37,99,235,0.3)]' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} data-category="all" onClick={() => setActiveCategory('all')} type="button">
                            <span>Todas</span>
                            <span className="px-1.5 py-0.2 rounded-full bg-background/40 text-[10px] font-bold">4</span>
                          </button>
                          <button className={`filter-tab px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs shrink-0 ${activeCategory === 'avaliacoes' ? 'bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(37,99,235,0.3)]' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} data-category="avaliacoes" onClick={() => setActiveCategory('avaliacoes')} type="button">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span>Avaliações</span>
                          </button>
                          <button className={`filter-tab px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs shrink-0 ${activeCategory === 'feedbacks' ? 'bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(37,99,235,0.3)]' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} data-category="feedbacks" onClick={() => setActiveCategory('feedbacks')} type="button">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Feedbacks</span>
                          </button>
                          <button className={`filter-tab px-space-md py-2 rounded-lg font-label-md text-label-md transition-all flex items-center gap-space-xs shrink-0 ${activeCategory === 'avisos' ? 'bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(37,99,235,0.3)]' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'}`} data-category="avisos" onClick={() => setActiveCategory('avisos')} type="button">
                            <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                            <span>Avisos Gerais</span>
                          </button>
                        </div>
                        {/* Quick Search Bar */}
                        <div className="relative w-full lg:w-80 shrink-0">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg pointer-events-none">search</span>
                          <input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" id="notification-search" onChange={(event) => setSearchTerm(event.target.value)} placeholder="Buscar avisos, módulos, docentes..." type="search" value={searchTerm} />
                        </div>
                      </div>
                      {/* Notifications Layout: Main Feed & Context Metrics */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                        {/* Primary Notifications Stream (8 cols) */}
                        <div className="lg:col-span-8 flex flex-col gap-space-md" id="notifications-feed">
                          {/* Notification 1: Prioridade Alta (Verde Esmeralda) */}
                          <NotificationCard category="avaliacoes" id="notif-1">
                            {/* Visual Status Stripe / Glow Marker */}
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary shadow-[0_0_12px_rgba(78,222,163,0.8)]" />
                            {/* Avatar / Accent Icon */}
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary shadow-[0_0_16px_rgba(78,222,163,0.2)]">
                                <span className="material-symbols-outlined text-2xl">verified</span>
                              </div>
                              <span className="unread-dot absolute -top-1 -right-1 w-3 h-3 rounded-full bg-secondary shadow-[0_0_6px_rgba(78,222,163,0.9)] ring-2 ring-surface-container-low" />
                            </div>
                            {/* Content Details */}
                            <div className="flex-1 flex flex-col gap-space-xs min-w-0 w-full">
                              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wide bg-secondary-container/30 text-secondary font-bold">
                                    Avaliação
                                  </span>
                                  <span className="font-label-sm text-label-sm text-secondary font-semibold">Prioridade Alta</span>
                                  <span className="text-outline-variant font-label-sm text-label-sm">•</span>
                                  <span className="font-body-sm text-body-sm text-outline">Há 15 minutos</span>
                                </div>
                                {/* Quick Options Menu */}
                                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                  <button className="mark-single-read-btn p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Marcar como lida">
                                    <span className="material-symbols-outlined text-sm">done</span>
                                  </button>
                                  <button className="p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Silenciar">
                                    <span className="material-symbols-outlined text-sm">notifications_off</span>
                                  </button>
                                </div>
                              </div>
                              <h2 className="font-title-md text-title-md text-on-surface font-semibold tracking-tight pt-1">
                                Nova avaliação prática lançada por Prof. Carlos Silva
                              </h2>
                              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Sua nota e parecer sobre a entrega do módulo <span className="text-on-surface font-medium">"React &amp; Arquitetura de Componentes"</span> já estão disponíveis na sua matriz.
                              </p>
                              <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm mt-1">
                                <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                                  <span className="material-symbols-outlined text-base">grade</span>
                                  <span>Desempenho: Excelente (96/100)</span>
                                </div>
                                <button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-semibold hover:bg-secondary/90 transition-all shadow-[0_0_16px_rgba(78,222,163,0.3)] flex items-center gap-1.5">
                                  <span>Ver Avaliação Completa</span>
                                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                              </div>
                            </div>
                          </NotificationCard>
                          {/* Notification 2: Prioridade Média (Azul Vibrante) */}
                          <NotificationCard category="feedbacks" id="notif-2">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-container shadow-[0_0_12px_rgba(37,99,235,0.7)]" />
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary shadow-[0_0_16px_rgba(37,99,235,0.2)]">
                                <span className="material-symbols-outlined text-2xl">chat</span>
                              </div>
                              <span className="unread-dot absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary-container shadow-[0_0_6px_rgba(37,99,235,0.8)] ring-2 ring-surface-container-low" />
                            </div>
                            <div className="flex-1 flex flex-col gap-space-xs min-w-0 w-full">
                              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wide bg-primary-container/20 text-primary font-bold">
                                    Feedback Docente
                                  </span>
                                  <span className="font-label-sm text-label-sm text-primary font-semibold">Prioridade Média</span>
                                  <span className="text-outline-variant font-label-sm text-label-sm">•</span>
                                  <span className="font-body-sm text-body-sm text-outline">Há 2 horas</span>
                                </div>
                                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                  <button className="mark-single-read-btn p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Marcar como lida">
                                    <span className="material-symbols-outlined text-sm">done</span>
                                  </button>
                                  <button className="p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Silenciar">
                                    <span className="material-symbols-outlined text-sm">notifications_off</span>
                                  </button>
                                </div>
                              </div>
                              <h2 className="font-title-md text-title-md text-on-surface font-semibold tracking-tight pt-1">
                                Feedback pedagógico disponível
                              </h2>
                              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                O professor adicionou comentários detalhados no seu repositório de laboratório referente às boas práticas de estado global e acessibilidade web.
                              </p>
                              <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm mt-1">
                                <div className="flex items-center gap-space-xs font-body-sm text-body-sm text-outline">
                                  <span className="material-symbols-outlined text-base">code</span>
                                  <span className="font-mono">repo/lab-hooks-context</span>
                                </div>
                                <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-primary hover:bg-primary-container hover:text-on-primary-container font-label-md text-label-md transition-all flex items-center gap-1.5">
                                  <span>Acessar Anotações</span>
                                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                                </button>
                              </div>
                            </div>
                          </NotificationCard>
                          {/* Notification 3: Alerta do Sistema (Âmbar / Atenção Crítica) */}
                          <NotificationCard category="avisos" id="notif-3">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f59e0b] shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 flex items-center justify-center text-[#f59e0b]">
                                <span className="material-symbols-outlined text-2xl">alarm</span>
                              </div>
                              <span className="unread-dot absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_6px_rgba(245,158,11,0.8)] ring-2 ring-surface-container-low" />
                            </div>
                            <div className="flex-1 flex flex-col gap-space-xs min-w-0 w-full">
                              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wide bg-[#f59e0b]/20 text-[#f59e0b] font-bold">
                                    Prazo
                                  </span>
                                  <span className="font-label-sm text-label-sm text-[#f59e0b] font-semibold">Alerta do Sistema</span>
                                  <span className="text-outline-variant font-label-sm text-label-sm">•</span>
                                  <span className="font-body-sm text-body-sm text-outline">Ontem às 18:30</span>
                                </div>
                                <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                  <button className="mark-single-read-btn p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Marcar como lida">
                                    <span className="material-symbols-outlined text-sm">done</span>
                                  </button>
                                  <button className="p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Silenciar">
                                    <span className="material-symbols-outlined text-sm">notifications_off</span>
                                  </button>
                                </div>
                              </div>
                              <h2 className="font-title-md text-title-md text-on-surface font-semibold tracking-tight pt-1">
                                Lembrete de Entrega de Projeto Integrador ODS 4
                              </h2>
                              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                O prazo para envio do protótipo final encerra-se nesta sexta-feira às 23:59. Verifique os critérios de rubrica antes do upload do artefato.
                              </p>
                              <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm mt-1">
                                <div className="flex items-center gap-space-xs text-[#f59e0b] font-label-md text-label-md">
                                  <span className="material-symbols-outlined text-base">timer</span>
                                  <span>Restam 2 dias para o fechamento</span>
                                </div>
                                <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all flex items-center gap-1.5">
                                  <span>Ver Rubrica de Avaliação</span>
                                  <span className="material-symbols-outlined text-sm">assignment</span>
                                </button>
                              </div>
                            </div>
                          </NotificationCard>
                          {/* Notification 4: Informativo Geral (Lida / Comunidade) */}
                          <NotificationCard category="avisos" id="notif-4">
                            <div className="relative shrink-0">
                              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-outline">
                                <span className="material-symbols-outlined text-2xl">groups_3</span>
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-space-xs min-w-0 w-full">
                              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                                <div className="flex items-center gap-space-xs flex-wrap">
                                  <span className="px-space-xs py-0.5 rounded font-label-sm text-label-sm uppercase tracking-wide bg-surface-container-highest text-on-surface-variant font-bold">
                                    Comunidade
                                  </span>
                                  <span className="font-label-sm text-label-sm text-outline">Informativo Geral</span>
                                  <span className="text-outline-variant font-label-sm text-label-sm">•</span>
                                  <span className="font-body-sm text-body-sm text-outline">Há 2 dias</span>
                                </div>
                                <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
                                  <button className="p-1 rounded hover:bg-surface-container-high text-outline hover:text-on-surface transition-colors" title="Arquivar">
                                    <span className="material-symbols-outlined text-sm">archive</span>
                                  </button>
                                </div>
                              </div>
                              <h2 className="font-title-md text-title-md text-on-surface font-semibold tracking-tight pt-1">
                                Novo grupo de estudos disponível: Inteligência Artificial na Educação
                              </h2>
                              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Encontros síncronos semanais às terças-feiras focados em modelos generativos, ética de dados e personalização de trilhas pedagógicas.
                              </p>
                              <div className="pt-space-sm flex flex-wrap items-center justify-between gap-space-sm mt-1">
                                <div className="flex items-center gap-space-xs text-outline font-body-sm text-body-sm">
                                  <span className="material-symbols-outlined text-base">event</span>
                                  <span>Terças-feiras • 19h00 (Google Meet)</span>
                                </div>
                                <button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all flex items-center gap-1.5">
                                  <span>Participar do Círculo</span>
                                  <span className="material-symbols-outlined text-sm">add_link</span>
                                </button>
                              </div>
                            </div>
                          </NotificationCard>
                        </div>
                        {/* Context Sidebar: Focus Panels & Highlights (4 cols) */}
                        <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                          {/* Live Alert Priority Breakdown Card */}
                          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                            <div className="flex items-center justify-between">
                              <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Status de Atenção Pedagógica</h3>
                              <span className="material-symbols-outlined text-outline text-lg">donut_large</span>
                            </div>
                            {/* Inline SVG Distribution Ring */}
                            <div className="flex items-center gap-space-md py-space-xs">
                              <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                  {/* Track */}
                                  <path className="text-surface-container-highest" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5" />
                                  {/* Emerald Segment (40%) */}
                                  <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="40, 100" strokeLinecap="round" strokeWidth="3.5" />
                                  {/* Blue Segment (30%) */}
                                  <path className="text-primary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="30, 100" strokeDashoffset={-40} strokeLinecap="round" strokeWidth="3.5" />
                                  {/* Amber Segment (20%) */}
                                  <path className="text-[#f59e0b]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset={-70} strokeLinecap="round" strokeWidth="3.5" />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                  <span className="font-data-display text-lg font-bold text-on-surface leading-none">3</span>
                                  <span className="font-label-sm text-[10px] text-outline uppercase">Pendentes</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                                <div className="flex items-center justify-between font-label-md text-label-md">
                                  <span className="flex items-center gap-1.5 text-on-surface-variant">
                                    <span className="w-2 h-2 rounded-full bg-secondary" /> Avaliações
                                  </span>
                                  <span className="font-semibold text-secondary">1 ativa</span>
                                </div>
                                <div className="flex items-center justify-between font-label-md text-label-md">
                                  <span className="flex items-center gap-1.5 text-on-surface-variant">
                                    <span className="w-2 h-2 rounded-full bg-primary-container" /> Feedback
                                  </span>
                                  <span className="font-semibold text-primary">1 ativo</span>
                                </div>
                                <div className="flex items-center justify-between font-label-md text-label-md">
                                  <span className="flex items-center gap-1.5 text-on-surface-variant">
                                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" /> Prazos ODS
                                  </span>
                                  <span className="font-semibold text-[#f59e0b]">1 crítico</span>
                                </div>
                              </div>
                            </div>
                            <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-secondary text-lg shrink-0">speed</span>
                              <span className="font-body-sm text-body-sm text-on-surface-variant">Tempo médio de resposta docente: <strong className="text-on-surface">3.8 horas</strong></span>
                            </div>
                          </div>
                          {/* ODS 4 Spotlight Action Card */}
                          <div className="relative p-space-lg rounded-xl bg-surface-container-low overflow-hidden shadow-md flex flex-col gap-space-md">
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-secondary-container/10 blur-2xl pointer-events-none" />
                            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md font-semibold uppercase tracking-wider">
                              <span className="material-symbols-outlined text-base">eco</span>
                              <span>Meta ONU ODS 4.4</span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h4 className="font-title-sm text-title-sm text-on-surface font-semibold">Competências Profissionais Ativas</h4>
                              <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Notificações prioritárias garantem que você nunca perca ciclos de validação das habilidades técnicas de desenvolvimento e arquitetura.
                              </p>
                            </div>
                            {/* Mini Progress Tracker */}
                            <div className="flex flex-col gap-space-xs pt-1">
                              <div className="flex justify-between font-label-sm text-label-sm">
                                <span className="text-outline">Progresso semanal de revisões</span>
                                <span className="text-secondary font-bold">86% atingido</span>
                              </div>
                              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                                <div className="h-full bg-secondary rounded-full w-[86%] shadow-[0_0_8px_rgba(78,222,163,0.5)]" />
                              </div>
                            </div>
                            <button className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-1.5">
                              <span>Acessar Metas da BNCC</span>
                              <span className="material-symbols-outlined text-sm">open_in_new</span>
                            </button>
                          </div>
                          {/* Instructor Direct Channel Preview */}
                          <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md shadow-md">
                            <div className="flex items-center justify-between">
                              <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Canais de Tutoria</h3>
                              <span className="px-2 py-0.5 rounded font-label-sm text-label-sm bg-secondary-container/20 text-secondary">Online</span>
                            </div>
                            <div className="flex items-center gap-space-sm">
                              <img className="w-10 h-10 rounded-full object-cover shrink-0 ring-2 ring-primary-container" data-alt="Close up pedagogical educator portrait with glasses in an ambient dark technical digital classroom studio lighting blue tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD54A50BtLQxFDcm4k0g8Dc2zoTuaSqKKX38PshOgI_ctEGEV3UOMawlkHh_Cj5nD1C_0s3g0T0f3ZE27chxeQR0ApEZLgWlhOiyujGF6Ds_nb_5Fe9AR6EfCqB52eXq0RgFJQvW_y-FWFuZCZYLe-rWKX2bYFBLkafZT5tzv8yzdSR0Vq9TThh_vFtXA6O88d-uemwGNHVDP90NIXAxKFWfYF2ZXgDB27dlwfBNP8" />
                              <div className="flex flex-col min-w-0">
                                <span className="font-title-sm text-title-sm text-on-surface truncate">Prof. Carlos Silva</span>
                                <span className="font-body-sm text-body-sm text-outline truncate">Orientador de Arquitetura de Software</span>
                              </div>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                              Plantão de dúvidas aberto para alinhamento da entrega final do Projeto Integrador ODS 4.
                            </p>
                            <button className="w-full py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-primary-container/90 transition-all flex items-center justify-center gap-1.5 shadow-[0_0_14px_rgba(37,99,235,0.3)]">
                              <span className="material-symbols-outlined text-sm">chat_bubble</span>
                              <span>Enviar Mensagem ao Docente</span>
                            </button>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </main></div>
            </div>
    </div>
    </NotificationContext.Provider>
  );
}
