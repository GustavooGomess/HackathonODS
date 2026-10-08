export default function Screen3() {
  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a aria-current="page" className="flex items-center gap-space-sm px-space-md py-space-sm transition-all group bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    {/* Top Greeting & Context Bar */}
                    <div className="w-full px-margin py-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-low shadow-sm">
                      <div className="flex items-center gap-space-md">
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-surface-container shrink-0 shadow-md">
                          <img className="w-full h-full object-cover" data-alt="Close-up portrait of an inspiring professional engineering and technology educator smiling in a high-tech modern computer laboratory with soft neon emerald and blue ambient reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgMJNmR57-pi_bLcV0m2M6bH53qXeQYQEzamYwFz3Y3RPyRAW3rDFdvAmW3aauL5mwKyOV7W63kD-mBW4WpvL_TJOQtnG6vPVOvpRr2tlTHhbKEbvZpMkZJ8jR9SJyFrvgrJZTLFJoeBCGmcdTfYt5H1QmrXAH0wtS2G2hmRBvZ0nGwqg-ychQnSUTAV0JFmO7iwRF6gfoeYzEr50fwWX3Fhs6GpiwWLhUsFcYMNw" />
                          <div className="absolute bottom-0 inset-x-0 h-1 bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-space-xs">
                            <span className="font-headline-md text-headline-md text-on-surface">Olá, Prof. Carlos Silva</span>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                              Sessão Ativa
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">Painel Gerencial de Competências Técnicas • Semestre Letivo 2024.2 • Atualizado há 3 minutos</p>
                        </div>
                      </div>
                      {/* ODS 4 Micro Badge & Quick CTA */}
                      <div className="flex items-center gap-space-md">
                        <div className="hidden lg:flex items-center gap-space-sm px-space-md py-space-xs rounded-xl bg-surface-container-lowest shadow-sm">
                          <div className="w-9 h-9 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-lg" style={{fontVariationSettings: '"FILL" 1'}}>workspace_premium</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">ODS 4.4 Competências</span>
                            <span className="font-title-sm text-title-sm text-on-surface font-semibold">Meta de Impacto 94%</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-space-xs">
                          <button className="px-space-md py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-title-sm text-title-sm transition-all flex items-center gap-1.5 shadow-sm">
                            <span className="material-symbols-outlined text-base">download</span>
                            <span>Relatório BNCC</span>
                          </button>
                          <button className="px-space-md py-2 rounded-lg bg-primary-container hover:bg-primary-container/90 text-on-primary-container font-title-sm text-title-sm transition-all flex items-center gap-1.5 shadow-[0_0_16px_rgba(37,99,235,0.35)]">
                            <span className="material-symbols-outlined text-base">assignment_add</span>
                            <span>Validar Entregas</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-margin py-space-lg flex flex-col gap-space-xl">
                      {/* Section 1: KPI Overview Cards */}
                      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                        {/* KPI 1: Turmas Ativas */}
                        <div className="p-space-lg rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Turmas Ativas</span>
                              <span className="font-headline-xl text-headline-xl text-on-surface mt-1 group-hover:text-primary transition-colors">04</span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                              <span className="material-symbols-outlined text-2xl">groups</span>
                            </div>
                          </div>
                          <div className="mt-space-md pt-space-sm flex items-center justify-between">
                            <span className="inline-flex items-center gap-1 text-secondary font-label-md text-label-md font-semibold">
                              <span className="material-symbols-outlined text-sm">trending_up</span>
                              +12% engajamento
                            </span>
                            <span className="font-body-sm text-body-sm text-outline">84 matriculados</span>
                          </div>
                        </div>
                        {/* KPI 2: Laboratórios Conectados */}
                        <div className="p-space-lg rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Laboratórios Conectados</span>
                              <span className="font-headline-xl text-headline-xl text-on-surface mt-1 group-hover:text-secondary transition-colors">13</span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary group-hover:scale-105 transition-transform">
                              <span className="material-symbols-outlined text-2xl">sensors</span>
                            </div>
                          </div>
                          <div className="mt-space-md pt-space-sm flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 text-secondary font-label-md text-label-md font-semibold">
                              <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(78,222,163,0.8)]" />
                              100% online &amp; calibrados
                            </span>
                            <span className="font-body-sm text-body-sm text-outline">IoT Edge</span>
                          </div>
                        </div>
                        {/* KPI 3: Taxa de Domínio */}
                        <div className="p-space-lg rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-all group relative overflow-hidden">
                          <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-secondary/5 blur-2xl pointer-events-none" />
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Taxa de Domínio Global</span>
                              <span className="font-headline-xl text-headline-xl text-on-surface mt-1 text-secondary group-hover:scale-105 transition-transform origin-left">84.6%</span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-secondary shadow-inner">
                              <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: '"FILL" 1'}}>military_tech</span>
                            </div>
                          </div>
                          <div className="mt-space-md pt-space-sm flex flex-col gap-1">
                            <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                              <div className="h-full bg-secondary rounded-full w-[84.6%] shadow-[0_0_8px_rgba(78,222,163,0.5)]" />
                            </div>
                            <span className="font-body-sm text-body-sm text-outline mt-0.5">Acima da meta pedagógica (+4.6%)</span>
                          </div>
                        </div>
                        {/* KPI 4: Avaliações Pendentes */}
                        <div className="p-space-lg rounded-xl bg-surface-container shadow-sm flex flex-col justify-between hover:bg-surface-container-high transition-all group">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col">
                              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Avaliações Pendentes</span>
                              <span className="font-headline-xl text-headline-xl text-on-surface mt-1 text-primary group-hover:scale-105 transition-transform origin-left">07</span>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                              <span className="material-symbols-outlined text-2xl">pending_actions</span>
                            </div>
                          </div>
                          <div className="mt-space-md pt-space-sm flex items-center justify-between">
                            <span className="inline-flex items-center gap-1 text-primary font-label-md text-label-md font-semibold">
                              <span className="material-symbols-outlined text-sm">schedule</span>
                              Requer validação prática
                            </span>
                            <span className="font-body-sm text-body-sm text-outline">Prazo: Hoje</span>
                          </div>
                        </div>
                      </section>
                      {/* Section 2: Turmas Ativas (Interactive Mosaic) */}
                      <section className="flex flex-col gap-space-md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                          <div>
                            <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Turmas &amp; Trilhas de Aprendizagem</h2>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">Acompanhamento contínuo de competências laboratoriais e frequência integrada</p>
                          </div>
                          <div className="flex items-center gap-space-xs">
                            <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors">Todas as Turmas (4)</button>
                            <button className="px-3 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-sm">Ativas Hoje (3)</button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
                          {/* Turma 1: TI-A Desenvolvimento Full Stack */}
                          <div className="rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                              <div className="flex items-start justify-between gap-space-sm">
                                <span className="px-2.5 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm uppercase tracking-wide font-semibold">
                                  TI • Semestre 4
                                </span>
                                <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                                  <span className="w-2 h-2 rounded-full bg-secondary" />
                                  Em Aula
                                </span>
                              </div>
                              <h3 className="font-title-md text-title-md text-on-surface font-bold mt-space-sm group-hover:text-primary transition-colors">
                                TI-A - Desenvolvimento Full Stack
                              </h3>
                              <p className="font-body-sm text-body-sm text-outline mt-0.5">Laboratório de Software 03 • Módulo Web Cloud</p>
                              {/* Metrics inside card */}
                              <div className="grid grid-cols-2 gap-space-sm mt-space-md p-space-sm rounded-lg bg-surface-container-lowest">
                                <div className="flex flex-col">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Estudantes</span>
                                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">32 Alunos</span>
                                </div>
                                <div className="flex flex-col text-right">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Frequência</span>
                                  <span className="font-title-sm text-title-sm text-secondary font-semibold">92% Regular</span>
                                </div>
                              </div>
                              {/* Competência em destaque */}
                              <div className="mt-space-md flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Competência Principal</span>
                                  <span className="font-label-md text-label-md text-primary font-semibold">React &amp; Node.js APIs</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                                  <div className="h-full bg-primary-container rounded-full w-[88%] shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                                </div>
                                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                                  <span>Nível Médio: Avançado</span>
                                  <span>88% Maestria</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                              <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-variant flex items-center justify-center font-label-sm text-label-sm text-on-surface">AL</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-primary-container/40 flex items-center justify-center font-label-sm text-label-sm text-on-surface">BR</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-secondary-container/30 flex items-center justify-center font-label-sm text-label-sm text-on-surface">MT</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-outline">+29</div>
                              </div>
                              <a className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:underline" href="#">
                                <span>Gerenciar Turma</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </a>
                            </div>
                          </div>
                          {/* Turma 2: Engenharia Mecatrônica - Automação & CNC */}
                          <div className="rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                              <div className="flex items-start justify-between gap-space-sm">
                                <span className="px-2.5 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm uppercase tracking-wide font-semibold">
                                  Mecatrônica • Semestre 6
                                </span>
                                <span className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
                                  <span className="w-2 h-2 rounded-full bg-outline" />
                                  Intervalo
                                </span>
                              </div>
                              <h3 className="font-title-md text-title-md text-on-surface font-bold mt-space-sm group-hover:text-secondary transition-colors">
                                Engenharia Mecatrônica - Automação &amp; CNC
                              </h3>
                              <p className="font-body-sm text-body-sm text-outline mt-0.5">Laboratório Industrial 01 • Usinagem Avançada</p>
                              <div className="grid grid-cols-2 gap-space-sm mt-space-md p-space-sm rounded-lg bg-surface-container-lowest">
                                <div className="flex flex-col">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Estudantes</span>
                                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">28 Alunos</span>
                                </div>
                                <div className="flex flex-col text-right">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Frequência</span>
                                  <span className="font-title-sm text-title-sm text-secondary font-semibold">88% Regular</span>
                                </div>
                              </div>
                              <div className="mt-space-md flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Competência Principal</span>
                                  <span className="font-label-md text-label-md text-secondary font-semibold">Usinagem CNC &amp; CLP</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                                  <div className="h-full bg-secondary rounded-full w-[82%] shadow-[0_0_10px_rgba(78,222,163,0.4)]" />
                                </div>
                                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                                  <span>Nível Médio: Prático II</span>
                                  <span>82% Maestria</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                              <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-variant flex items-center justify-center font-label-sm text-label-sm text-on-surface">GH</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-primary-container/40 flex items-center justify-center font-label-sm text-label-sm text-on-surface">RS</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-outline">+26</div>
                              </div>
                              <a className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:underline" href="#">
                                <span>Gerenciar Turma</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </a>
                            </div>
                          </div>
                          {/* Turma 3: Ciência de Dados Aplicada */}
                          <div className="rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between hover:bg-surface-container-high transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-2xl pointer-events-none" />
                            <div>
                              <div className="flex items-start justify-between gap-space-sm">
                                <span className="px-2.5 py-1 rounded-full bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm uppercase tracking-wide font-semibold">
                                  Dados • Semestre 2
                                </span>
                                <span className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
                                  <span className="w-2 h-2 rounded-full bg-secondary" />
                                  Em Aula
                                </span>
                              </div>
                              <h3 className="font-title-md text-title-md text-on-surface font-bold mt-space-sm group-hover:text-tertiary transition-colors">
                                Ciência de Dados Aplicada
                              </h3>
                              <p className="font-body-sm text-body-sm text-outline mt-0.5">Laboratório Virtual • Análise Preditiva</p>
                              <div className="grid grid-cols-2 gap-space-sm mt-space-md p-space-sm rounded-lg bg-surface-container-lowest">
                                <div className="flex flex-col">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Estudantes</span>
                                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">24 Alunos</span>
                                </div>
                                <div className="flex flex-col text-right">
                                  <span className="font-label-sm text-label-sm text-outline uppercase">Frequência</span>
                                  <span className="font-title-sm text-title-sm text-secondary font-semibold">81% Regular</span>
                                </div>
                              </div>
                              <div className="mt-space-md flex flex-col gap-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Competência Principal</span>
                                  <span className="font-label-md text-label-md text-tertiary font-semibold">Python, Pandas &amp; SQL</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                                  <div className="h-full bg-tertiary rounded-full w-[76%] shadow-[0_0_10px_rgba(123,208,255,0.4)]" />
                                </div>
                                <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                                  <span>Nível Médio: Intermediário</span>
                                  <span>76% Maestria</span>
                                </div>
                              </div>
                            </div>
                            <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                              <div className="flex -space-x-2 overflow-hidden">
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-variant flex items-center justify-center font-label-sm text-label-sm text-on-surface">CL</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-primary-container/40 flex items-center justify-center font-label-sm text-label-sm text-on-surface">VN</div>
                                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-surface-container bg-surface-container-highest flex items-center justify-center font-label-sm text-label-sm text-outline">+22</div>
                              </div>
                              <a className="inline-flex items-center gap-1 font-label-md text-label-md text-tertiary hover:underline" href="#">
                                <span>Gerenciar Turma</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </section>
                      {/* Section 3: Analytics Hub & Donut Distribution & Lab Feed */}
                      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                        {/* 7 Columns: Bar Chart Proficiency by Competence */}
                        <div className="lg:col-span-7 rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-md">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
                                <h3 className="font-title-md text-title-md text-on-surface font-bold">Distribuição de Proficiência Técnica</h3>
                              </div>
                              <p className="font-body-sm text-body-sm text-outline mt-0.5">Taxa de retenção e validação prática por competência BNCC / ODS 4</p>
                            </div>
                            <div className="flex items-center gap-2 bg-surface-container-lowest p-1 rounded-lg">
                              <button className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm font-medium shadow-sm">Geral</button>
                              <button className="px-2.5 py-1 rounded-md text-outline hover:text-on-surface font-label-sm text-label-sm transition-colors">Por Turma</button>
                            </div>
                          </div>
                          {/* Inline SVG Bar Chart Component */}
                          <div className="w-full py-space-sm flex flex-col gap-space-md">
                            {/* Competency 1 */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-body-sm">
                                <span className="font-medium text-on-surface">React &amp; Componentes Web (TI-A)</span>
                                <span className="font-semibold text-primary font-mono">91.4% Proficiente</span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
                                <div className="h-full bg-primary-container rounded-full" style={{width: '91.4%'}} />
                              </div>
                            </div>
                            {/* Competency 2 */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-body-sm">
                                <span className="font-medium text-on-surface">Usinagem CNC &amp; Metrologia (Mecatrônica)</span>
                                <span className="font-semibold text-secondary font-mono">84.2% Proficiente</span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
                                <div className="h-full bg-secondary rounded-full" style={{width: '84.2%'}} />
                              </div>
                            </div>
                            {/* Competency 3 */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-body-sm">
                                <span className="font-medium text-on-surface">Python Data Science &amp; SQL (Dados)</span>
                                <span className="font-semibold text-tertiary font-mono">78.5% Proficiente</span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
                                <div className="h-full bg-tertiary rounded-full" style={{width: '78.5%'}} />
                              </div>
                            </div>
                            {/* Competency 4 */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-body-sm">
                                <span className="font-medium text-on-surface">Automação com CLPs &amp; Sensores IoT</span>
                                <span className="font-semibold text-secondary font-mono">82.0% Proficiente</span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
                                <div className="h-full bg-secondary rounded-full" style={{width: '82%'}} />
                              </div>
                            </div>
                            {/* Competency 5 */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center justify-between text-body-sm">
                                <span className="font-medium text-on-surface">Arquitetura REST &amp; DevOps Básico</span>
                                <span className="font-semibold text-primary font-mono">72.8% Proficiente</span>
                              </div>
                              <div className="w-full h-3 rounded-full bg-surface-container-lowest overflow-hidden flex">
                                <div className="h-full bg-primary-container rounded-full" style={{width: '72.8%'}} />
                              </div>
                            </div>
                          </div>
                          <div className="mt-space-md pt-space-sm flex items-center justify-between font-label-sm text-label-sm text-outline bg-surface-container-lowest p-space-sm rounded-lg">
                            <span className="flex items-center gap-1.5 text-secondary">
                              <span className="material-symbols-outlined text-sm">verified</span>
                              Índice alinhado aos padrões BNCC Nível Técnico 4
                            </span>
                            <span>Meta Alvo: &gt;75%</span>
                          </div>
                        </div>
                        {/* 5 Columns: Donut Chart - Engagement Levels */}
                        <div className="lg:col-span-5 rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <h3 className="font-title-md text-title-md text-on-surface font-bold">Níveis de Domínio Global</h3>
                              <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest text-outline font-label-sm text-label-sm">84 Estudantes</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-outline mt-0.5">Classificação analítica por proficiência comprovada</p>
                          </div>
                          {/* Donut Vector Graphic Presentation */}
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-lg my-space-md">
                            <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
                              {/* Inline SVG Donut */}
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                {/* Background circle */}
                                <circle className="text-surface-container-lowest" cx={50} cy={50} fill="none" r={38} stroke="currentColor" strokeWidth={12} />
                                {/* Em Desenvolvimento: 11% (stroke-dasharray: 238.76 total circumference => 11% = 26.26) */}
                                <circle cx={50} cy={50} fill="none" r={38} stroke="#ffb4ab" strokeDasharray="26.3 212.5" strokeDashoffset="-212.5" strokeLinecap="round" strokeWidth={12} />
                                {/* Intermediário: 31% => 74.01 */}
                                <circle cx={50} cy={50} fill="none" r={38} stroke="#7bd0ff" strokeDasharray="74 164.8" strokeDashoffset="-138.5" strokeLinecap="round" strokeWidth={12} />
                                {/* Avançado: 58% => 138.48 */}
                                <circle cx={50} cy={50} fill="none" r={38} stroke="#4edea3" strokeDasharray="138.5 100.3" strokeDashoffset={0} strokeLinecap="round" strokeWidth={12} />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="font-data-display text-data-display font-bold text-on-surface leading-none">58%</span>
                                <span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase mt-1">Avançado</span>
                              </div>
                            </div>
                            {/* Legend list */}
                            <div className="flex flex-col gap-space-sm w-full sm:w-auto">
                              <div className="flex items-center justify-between gap-space-md p-space-xs rounded-lg hover:bg-surface-container-high transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 rounded-full bg-secondary shadow-[0_0_6px_rgba(78,222,163,0.8)]" />
                                  <span className="font-body-sm text-body-sm text-on-surface">Avançado</span>
                                </div>
                                <span className="font-title-sm text-title-sm text-secondary font-semibold font-mono">58%</span>
                              </div>
                              <div className="flex items-center justify-between gap-space-md p-space-xs rounded-lg hover:bg-surface-container-high transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 rounded-full bg-tertiary" />
                                  <span className="font-body-sm text-body-sm text-on-surface">Intermediário</span>
                                </div>
                                <span className="font-title-sm text-title-sm text-tertiary font-semibold font-mono">31%</span>
                              </div>
                              <div className="flex items-center justify-between gap-space-md p-space-xs rounded-lg hover:bg-surface-container-high transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-3 rounded-full bg-error" />
                                  <span className="font-body-sm text-body-sm text-on-surface">Em Apoio</span>
                                </div>
                                <span className="font-title-sm text-title-sm text-error font-semibold font-mono">11%</span>
                              </div>
                            </div>
                          </div>
                          <div className="pt-space-sm">
                            <button className="w-full py-2 rounded-lg bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-2">
                              <span className="material-symbols-outlined text-base">support_agent</span>
                              <span>Identificar Estudantes que Requerem Tutoria (9)</span>
                            </button>
                          </div>
                        </div>
                      </section>
                      {/* Section 4: Live Activity Feed in Technical Labs & Fast Action Hub */}
                      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                        {/* 8 Columns: Live Feed of Laboratory Telemetry & Student Submissions */}
                        <div className="lg:col-span-8 rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between">
                          <div className="flex items-center justify-between pb-space-sm">
                            <div className="flex items-center gap-space-sm">
                              <div className="w-3 h-3 rounded-full bg-secondary animate-ping" />
                              <div>
                                <h3 className="font-title-md text-title-md text-on-surface font-bold">Feed de Atividades em Tempo Real</h3>
                                <p className="font-body-sm text-body-sm text-outline">Interações de bancadas físicas e plataformas virtuais SkillTrack</p>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm font-mono">
                              LIVE STREAM
                            </span>
                          </div>
                          {/* Feed List */}
                          <div className="flex flex-col gap-space-sm my-space-md">
                            {/* Feed Item 1 */}
                            <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                              <div className="flex items-start gap-space-sm">
                                <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-lg">check_circle</span>
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">Lucas Mendonça</span>
                                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">CNC Validado</span>
                                    <span className="font-label-sm text-label-sm text-outline">Engenharia Mecatrônica</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Completou a peça-teste de usinagem com tolerância de ±0.02mm no Centro CNC Haas.</p>
                                </div>
                              </div>
                              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                                <span className="font-label-sm text-label-sm text-outline font-mono">14:38</span>
                                <span className="text-secondary font-label-md text-label-md font-bold mt-0.5">Nota A+</span>
                              </div>
                            </div>
                            {/* Feed Item 2 */}
                            <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                              <div className="flex items-start gap-space-sm">
                                <div className="w-9 h-9 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-lg">code</span>
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">Beatriz Albuquerque</span>
                                    <span className="px-2 py-0.5 rounded-full bg-primary-container/30 text-primary font-label-sm text-label-sm">Pull Request #42</span>
                                    <span className="font-label-sm text-label-sm text-outline">TI-A Full Stack</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Submeteu implementação de autenticação JWT e testes unitários via Docker.</p>
                                </div>
                              </div>
                              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                                <span className="font-label-sm text-label-sm text-outline font-mono">14:32</span>
                                <button className="px-2 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:bg-primary-container/80 transition-colors">Avaliar</button>
                              </div>
                            </div>
                            {/* Feed Item 3 */}
                            <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                              <div className="flex items-start gap-space-sm">
                                <div className="w-9 h-9 rounded-lg bg-tertiary-container/30 text-tertiary flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-lg">dataset</span>
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">Guilherme Siqueira</span>
                                    <span className="px-2 py-0.5 rounded-full bg-tertiary-container/40 text-tertiary font-label-sm text-label-sm">Pipeline SQL</span>
                                    <span className="font-label-sm text-label-sm text-outline">Ciência de Dados</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Executou pipeline ETL sobre banco PostgreSQL com 120 mil registros limpos.</p>
                                </div>
                              </div>
                              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                                <span className="font-label-sm text-label-sm text-outline font-mono">14:15</span>
                                <span className="text-tertiary font-label-md text-label-md font-bold mt-0.5">95% Concluído</span>
                              </div>
                            </div>
                            {/* Feed Item 4 */}
                            <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                              <div className="flex items-start gap-space-sm">
                                <div className="w-9 h-9 rounded-lg bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
                                </div>
                                <div className="flex flex-col">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">Bancada IoT 07</span>
                                    <span className="px-2 py-0.5 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm">Telemetria OK</span>
                                    <span className="font-label-sm text-label-sm text-outline">Lab Mecatrônica</span>
                                  </div>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">CLP Siemens S7-1200 sincronizou simulação de esteira transportadora com sucesso.</p>
                                </div>
                              </div>
                              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center shrink-0">
                                <span className="font-label-sm text-label-sm text-outline font-mono">13:58</span>
                                <span className="text-secondary font-label-sm text-label-sm font-mono">ONLINE</span>
                              </div>
                            </div>
                          </div>
                          <div className="pt-space-xs flex items-center justify-between">
                            <span className="font-body-sm text-body-sm text-outline">Mostrando 4 de 48 eventos registrados hoje</span>
                            <a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-1" href="#">
                              <span>Ver feed completo</span>
                              <span className="material-symbols-outlined text-sm">chevron_right</span>
                            </a>
                          </div>
                        </div>
                        {/* 4 Columns: Pedagogy Spotlight & Quick Evaluation Tray */}
                        <div className="lg:col-span-4 rounded-xl bg-surface-container shadow-sm p-space-lg flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-lg">flag</span>
                              </div>
                              <div>
                                <h3 className="font-title-md text-title-md text-on-surface font-bold">Fila de Validação Prática</h3>
                                <p className="font-body-sm text-body-sm text-outline">7 entregas aguardando sua assinatura digital</p>
                              </div>
                            </div>
                            {/* Pending list */}
                            <div className="flex flex-col gap-space-sm mt-space-md">
                              <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Projeto API Express</span>
                                  <span className="font-body-sm text-body-sm text-outline">Juliana Costa • TI-A</span>
                                </div>
                                <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:bg-primary-container/90 transition-colors shadow-sm">
                                  Avaliar
                                </button>
                              </div>
                              <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">G-Code Peça Cilindro</span>
                                  <span className="font-body-sm text-body-sm text-outline">Mateus Rocha • Mecatrônica</span>
                                </div>
                                <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:bg-primary-container/90 transition-colors shadow-sm">
                                  Avaliar
                                </button>
                              </div>
                              <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between">
                                <div className="flex flex-col">
                                  <span className="font-title-sm text-title-sm text-on-surface">Dashboard Matplotlib</span>
                                  <span className="font-body-sm text-body-sm text-outline">Carla Diniz • Dados</span>
                                </div>
                                <button className="px-2.5 py-1 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm hover:bg-primary-container/90 transition-colors shadow-sm">
                                  Avaliar
                                </button>
                              </div>
                            </div>
                          </div>
                          {/* ODS 4 Quick Commitment Box */}
                          <div className="mt-space-lg p-space-md rounded-xl bg-gradient-to-br from-surface-container-low to-surface-container-lowest flex flex-col gap-space-xs shadow-sm">
                            <div className="flex items-center gap-2 text-secondary">
                              <span className="material-symbols-outlined text-lg">school</span>
                              <span className="font-label-md text-label-md font-bold uppercase tracking-wider">ODS 4.4 • Jovens &amp; Competências</span>
                            </div>
                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                              Sua disciplina contribui diretamente para a formação prática profissional certificada pelo sistema educacional.
                            </p>
                            <div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-outline">
                              <span>Certificados Prontos: 68/84</span>
                              <span className="text-secondary font-semibold">81% da Meta</span>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div></main></div>
            </div>
    </div>
  );
}
