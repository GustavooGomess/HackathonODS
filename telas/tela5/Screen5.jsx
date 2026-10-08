export default function Screen5() {
  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container min-h-full">
      <div>
              <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between py-space-md"><div className="flex flex-col gap-space-lg"><div className="flex items-center gap-space-sm px-space-md"><img alt="SkillTrack Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WfM5BFFxSsg68bvBGD3fQglNlphnJF7tefx2ZOxTle4G7gjtl93-cvD0S4XhqSXayVD9449-aCR87MlI-riSXVeDAY_QBXGxb9AnzcGE5zCWzDH0j5g1-1D6is-wcqz1SDk9Cdksg5dIIQORun-VcWAZbkOG2jUn6hzahgohgV9TAtTyTAhh6ZYJ-96YVMQmqmGISXXkBGrua0I82oWmRmlK4FfZXe2PjDt9bBBo1h" /><div className="flex flex-col"><span className="font-title-md text-title-md text-on-surface tracking-tight">SkillTrack</span><span className="font-label-sm text-label-sm text-secondary font-medium tracking-wide uppercase">Competency Engine</span></div></div><div className="px-space-md"><div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container text-on-surface-variant"><span className="material-symbols-outlined text-sm text-secondary">verified</span><span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">ODS 4 • Meta Global</span></div></div><nav className="flex flex-col gap-space-xs px-space-sm" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]"><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="dashboard-professor" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">dashboard</span><span className="font-body-md text-body-md">Dashboard Professor</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="turmas-e-alunos" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">groups</span><span className="font-body-md text-body-md">Turmas &amp; Alunos</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="avaliacoes-e-metricas" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">insights</span><span className="font-body-md text-body-md">Avaliações &amp; Métricas</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="busca-de-competencias" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">manage_search</span><span className="font-body-md text-body-md">Busca de Competências</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="visao-do-estudante" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">school</span><span className="font-body-md text-body-md">Visão do Estudante</span></a><a className="flex items-center gap-space-sm px-space-md py-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all group" data-path="notificacoes" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">notifications</span><span className="font-body-md text-body-md">Notificações</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-md py-space-sm transition-all group bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-[0_0_16px_rgba(37,99,235,0.35)]" data-path="perfil-do-docente" href="#"><span className="material-symbols-outlined transition-colors group-hover:text-primary">person</span><span className="font-body-md text-body-md">Perfil do Docente</span></a></nav></div><div className="px-space-md flex flex-col gap-space-sm"><div className="p-space-md rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs"><div className="flex items-center justify-between"><span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Meta ODS 4.4</span><span className="font-label-md text-label-md text-secondary font-bold">86%</span></div><div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden"><div className="h-full bg-secondary rounded-full w-[86%]" /></div><span className="font-body-sm text-body-sm text-outline">Competências técnicas ativas</span></div><div className="flex items-center justify-between pt-space-xs text-outline"><span className="font-label-sm text-label-sm">SkillTrack Edu v2.4</span><span className="material-symbols-outlined text-sm">lock_open</span></div></div></aside><div className="pl-72 flex flex-col min-h-screen"><header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-low/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40"><div className="h-16 w-full px-space-lg flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md flex-1"><div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm"><span className="hover:text-on-surface transition-colors cursor-pointer">Educação</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="hover:text-on-surface transition-colors cursor-pointer">Gestão ODS 4</span><span className="material-symbols-outlined text-sm text-outline">chevron_right</span><span className="text-on-surface font-title-sm text-title-sm">Painel Docente</span></div><div className="relative max-w-md w-full ml-space-md"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">search</span><input className="w-full h-9 pl-9 pr-space-md rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" placeholder="Buscar competência, turma, BNCC ou estudante..." type="search" /></div></div><div className="flex items-center gap-space-md"><div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary"><span className="material-symbols-outlined text-sm">public</span><span className="font-label-md text-label-md font-semibold tracking-wide">ODS 4 - Educação de Qualidade</span></div><button className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md"><span className="material-symbols-outlined text-sm">add</span><span>Nova Avaliação</span></button><div className="relative"><button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"><span className="material-symbols-outlined text-xl">notifications</span></button><span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-secondary animate-pulse" /></div><div className="flex items-center gap-space-sm pl-space-sm"><div className="flex flex-col text-right"><span className="font-title-sm text-title-sm text-on-surface leading-tight">Prof. Carlos Silva</span><span className="font-label-sm text-label-sm text-outline">Gestor Pedagógico</span></div><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" /></div></div></div></header><main className="w-full pt-16 bg-background flex-1 flex flex-col"><div className="flex flex-col w-full">
                    <div className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl px-margin">
                      <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none" />
                      <div className="absolute top-1/2 right-10 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none" />
                      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-space-lg relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                          <div className="flex flex-col gap-space-xs">
                            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                              <span>Corpo Docente Ativo</span>
                              <span className="text-outline">•</span>
                              <span>ID: DOC-40982-BR</span>
                            </div>
                            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Perfil Acadêmico &amp; Gestão</h1>
                            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                              Acompanhamento integrado de desempenho docente, carga horária em laboratórios de tecnologia e aderência direta às metas da ODS 4 (Educação Inclusiva, Equitativa e Tecnológica).
                            </p>
                          </div>
                          <div className="flex items-center gap-space-sm flex-wrap">
                            <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright transition-all font-label-md text-label-md shadow-sm">
                              <span className="material-symbols-outlined text-sm">print</span>
                              <span>Exportar Dossiê</span>
                            </button>
                            <button className="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-all font-label-md text-label-md shadow-md">
                              <span className="material-symbols-outlined text-sm">edit</span>
                              <span>Editar Dados</span>
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
                          <div className="lg:col-span-5 flex flex-col gap-gutter">
                            <div className="rounded-xl bg-surface-container p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-lg">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-secondary to-tertiary" />
                              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-space-lg">
                                <div className="relative shrink-0">
                                  <div className="w-32 h-32 rounded-xl overflow-hidden shadow-2xl bg-surface-container-high">
                                    <img alt="Prof. Dr. Carlos Silva" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtV03w6XLEu9r1afB8NvHeFnXTTt3VaZG-LaicBV0Jiy0dxvU04gypsB8LnMO9W4vbOc1Q2asNIzFqdcHfu8fRMixEBcvPhC-kSCM5m-Gj637xk5hKwReuAAsj7Ra93sSBIdEfcCvwj3_Hs9N-4kHpbpPS8WnrI5KnBwyCOF7kjuSJQIgl_v47bw9vMG1XFlsGT_SG45ZhuepSHIo1sf8jCQhOkvypGVUl3nc4KZ8" />
                                  </div>
                                  <div className="absolute -bottom-2 -right-2 px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-bold shadow-md flex items-center gap-0.5">
                                    <span className="material-symbols-outlined text-xs">verified</span>
                                    <span>ATIVO</span>
                                  </div>
                                </div>
                                <div className="flex flex-col text-center sm:text-left gap-space-xs min-w-0">
                                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Cátedra Tecnológica</span>
                                  <h2 className="font-headline-md text-headline-md text-on-surface leading-tight">Prof. Dr. Carlos Silva</h2>
                                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                    Especialista em Engenharia de Software e Tecnologias Educacionais
                                  </p>
                                  <div className="pt-space-xs flex flex-wrap gap-space-xs justify-center sm:justify-start">
                                    <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold">
                                      <span className="material-symbols-outlined text-xs">workspace_premium</span>
                                      Instrutor Certificado ODS 4
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-space-xs p-space-sm rounded-lg bg-surface-container-lowest text-center">
                                <div className="flex flex-col py-space-xs">
                                  <span className="font-data-display text-data-display text-primary leading-none">8</span>
                                  <span className="font-label-sm text-label-sm text-outline mt-1">Turmas Formadas</span>
                                </div>
                                <div className="flex flex-col py-space-xs">
                                  <span className="font-data-display text-data-display text-secondary leading-none">240+</span>
                                  <span className="font-label-sm text-label-sm text-outline mt-1">Alunos Capacitados</span>
                                </div>
                                <div className="flex flex-col py-space-xs">
                                  <div className="flex items-center justify-center gap-0.5">
                                    <span className="font-data-display text-data-display text-on-surface leading-none">4.9</span>
                                    <span className="material-symbols-outlined text-sm text-secondary" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
                                  </div>
                                  <span className="font-label-sm text-label-sm text-outline mt-1">Avaliação Docente</span>
                                </div>
                              </div>
                              <div className="flex flex-col gap-space-sm">
                                <div className="flex items-center justify-between">
                                  <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-space-xs">
                                    <span className="material-symbols-outlined text-primary text-base">history_edu</span>
                                    Bio Acadêmica &amp; Trajetória
                                  </span>
                                  <span className="font-label-sm text-label-sm text-outline">Lattes verificado</span>
                                </div>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                                  Doutor em Ciência da Computação pela USP com ênfase em Ambientes Virtuais de Aprendizagem e Sistemas Distribuídos. Atua há mais de 12 anos na intersecção entre o desenvolvimento de software robusto e abordagens pedagógicas contemporâneas, com foco na formação técnica orientada à resolução de desafios reais da indústria 4.0.
                                </p>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-justify">
                                  Líder do grupo de pesquisa institucional em Avaliação Baseada em Competências (CBE), integrando indicadores mensuráveis da meta global ODS 4.4 para o fomento de competências técnicas e socioemocionais para empregos dignos.
                                </p>
                              </div>
                              <div className="flex flex-col gap-space-sm">
                                <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-secondary text-base">psychology</span>
                                  Áreas de Especialidade
                                </span>
                                <div className="flex flex-wrap gap-space-xs">
                                  <span className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                                    Arquitetura de Software
                                  </span>
                                  <span className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    Full Stack Development
                                  </span>
                                  <span className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                                    Metodologias Ativas
                                  </span>
                                  <span className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                                    IoT &amp; Automação Industrial
                                  </span>
                                  <span className="px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Avaliação Baseada em Competências
                                  </span>
                                </div>
                              </div>
                              <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                                <div className="flex items-center justify-between">
                                  <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm text-secondary">verified_user</span>
                                    Conformidade Pedagógica ODS 4.4
                                  </span>
                                  <span className="font-label-md text-label-md text-secondary font-bold">94%</span>
                                </div>
                                <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                                  <div className="h-full bg-gradient-to-r from-primary-container to-secondary rounded-full w-[94%]" />
                                </div>
                                <span className="font-body-sm text-body-sm text-outline">Currículo 100% mapeado em competências técnicas para empregabilidade</span>
                              </div>
                            </div>
                            <div className="rounded-xl bg-surface-container p-space-lg shadow-xl flex flex-col gap-space-md">
                              <div className="flex items-center justify-between">
                                <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-primary text-base">radar</span>
                                  Índice de Retenção &amp; Engajamento
                                </span>
                                <span className="font-label-sm text-label-sm text-secondary">Semestre Vigente</span>
                              </div>
                              <div className="flex items-center justify-between gap-space-md">
                                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    <circle className="text-surface-container-highest" cx={50} cy={50} fill="transparent" r={40} stroke="currentColor" strokeWidth={8} />
                                    <circle className="text-secondary transition-all duration-1000" cx={50} cy={50} fill="transparent" r={40} stroke="currentColor" strokeDasharray="251.2" strokeDashoffset={20} strokeLinecap="round" strokeWidth={8} />
                                  </svg>
                                  <div className="absolute flex flex-col items-center">
                                    <span className="font-title-md text-title-md text-on-surface font-bold leading-none">92%</span>
                                    <span className="font-label-sm text-label-sm text-outline scale-90">Presença</span>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-space-xs flex-1">
                                  <div className="flex items-center justify-between text-body-sm font-body-sm">
                                    <span className="text-on-surface-variant">Taxa de Conclusão</span>
                                    <span className="font-semibold text-on-surface">96.4%</span>
                                  </div>
                                  <div className="w-full h-1.5 rounded-full bg-surface-container-lowest overflow-hidden">
                                    <div className="h-full bg-primary rounded-full w-[96.4%]" />
                                  </div>
                                  <div className="flex items-center justify-between text-body-sm font-body-sm mt-1">
                                    <span className="text-on-surface-variant">Projetos ODS Aprovados</span>
                                    <span className="font-semibold text-secondary">28 de 30</span>
                                  </div>
                                  <div className="w-full h-1.5 rounded-full bg-surface-container-lowest overflow-hidden">
                                    <div className="h-full bg-secondary rounded-full w-[93%]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="lg:col-span-7 flex flex-col gap-gutter">
                            <div className="flex flex-col gap-space-md">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-primary text-xl">auto_stories</span>
                                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Cursos &amp; Unidades Curriculares sob sua Gestão</h3>
                                </div>
                                <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-sm py-1 rounded-full">
                                  4 Unidades Ativas
                                </span>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                                <div className="rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between gap-space-md hover:bg-surface-container-high transition-all">
                                  <div className="flex flex-col gap-space-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="px-space-xs py-0.5 rounded bg-primary-container/20 text-primary font-label-sm text-label-sm font-semibold uppercase">Eng. Software</span>
                                      <span className="font-label-sm text-label-sm text-secondary font-medium">Turma TI-A</span>
                                    </div>
                                    <h4 className="font-title-md text-title-md text-on-surface">Arquitetura de Microsserviços e Cloud</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Desenvolvimento de sistemas escaláveis com containers Docker, orquestração Kubernetes e mensageria assíncrona.
                                    </p>
                                  </div>
                                  <div className="pt-space-xs border-t-0 flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-space-sm rounded-lg">
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">schedule</span>
                                      <span>80h</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">meeting_room</span>
                                      <span>Lab 04 (TI)</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-primary">
                                      <span className="material-symbols-outlined text-sm">groups</span>
                                      <span className="font-semibold">32 Alunos</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between gap-space-md hover:bg-surface-container-high transition-all">
                                  <div className="flex flex-col gap-space-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="px-space-xs py-0.5 rounded bg-secondary-container/20 text-secondary font-label-sm text-label-sm font-semibold uppercase">Mecatrônica</span>
                                      <span className="font-label-sm text-label-sm text-tertiary font-medium">Turma MEC-3</span>
                                    </div>
                                    <h4 className="font-title-md text-title-md text-on-surface">Automação Industrial &amp; IoT Aplicada</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Sensoriamento de plantas industriais, telemetria MQTT, protocolos Modbus e esteiras integradas.
                                    </p>
                                  </div>
                                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-space-sm rounded-lg">
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">schedule</span>
                                      <span>60h</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">precision_manufacturing</span>
                                      <span>Lab CNC &amp; Robótica</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-secondary">
                                      <span className="material-symbols-outlined text-sm">groups</span>
                                      <span className="font-semibold">24 Alunos</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between gap-space-md hover:bg-surface-container-high transition-all">
                                  <div className="flex flex-col gap-space-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-label-sm text-label-sm font-semibold uppercase">ODS 4 Interdisciplinar</span>
                                      <span className="font-label-sm text-label-sm text-outline font-medium">Multicampus</span>
                                    </div>
                                    <h4 className="font-title-md text-title-md text-on-surface">Projetos Integradores: Soluções de Impacto</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Mentoria direcionada a produtos tecnológicos voltados à inclusão, acessibilidade e sustentabilidade social.
                                    </p>
                                  </div>
                                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-space-sm rounded-lg">
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">schedule</span>
                                      <span>45h</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">hub</span>
                                      <span>Hub Maker ODS</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-tertiary">
                                      <span className="material-symbols-outlined text-sm">groups</span>
                                      <span className="font-semibold">40 Alunos</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="rounded-xl bg-surface-container p-space-md shadow-md flex flex-col justify-between gap-space-md hover:bg-surface-container-high transition-all">
                                  <div className="flex flex-col gap-space-xs">
                                    <div className="flex items-center justify-between">
                                      <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm font-semibold uppercase">Full Stack</span>
                                      <span className="font-label-sm text-label-sm text-secondary font-medium">Turma DEV-B</span>
                                    </div>
                                    <h4 className="font-title-md text-title-md text-on-surface">Desenvolvimento Web Avançado &amp; APIs</h4>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                                      Construção de aplicações reativas, padrões RESTful/GraphQL e testes automatizados orientados a domínio.
                                    </p>
                                  </div>
                                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest p-space-sm rounded-lg">
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">schedule</span>
                                      <span>75h</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <span className="material-symbols-outlined text-sm text-outline">computer</span>
                                      <span>Lab 02 (Informática)</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-primary">
                                      <span className="material-symbols-outlined text-sm">groups</span>
                                      <span className="font-semibold">28 Alunos</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="rounded-xl bg-surface-container p-space-lg shadow-xl flex flex-col gap-space-md">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                                <div className="flex items-center gap-space-xs">
                                  <span className="material-symbols-outlined text-secondary text-xl">calendar_month</span>
                                  <div className="flex flex-col">
                                    <h3 className="font-title-md text-title-md text-on-surface">Agenda &amp; Calendário Semanal</h3>
                                    <span className="font-label-sm text-label-sm text-outline">Semana Letiva Atual • Carga Presencial &amp; Mentoria</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-space-xs self-start sm:self-auto">
                                  <button className="px-space-sm py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-xs">chevron_left</span>
                                    <span>Anterior</span>
                                  </button>
                                  <span className="px-space-sm py-1 rounded-md bg-surface-container-lowest font-label-sm text-label-sm text-on-surface font-semibold">
                                    18 Mai - 24 Mai
                                  </span>
                                  <button className="px-space-sm py-1 rounded-md bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                                    <span>Próximo</span>
                                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                                  </button>
                                </div>
                              </div>
                              <div className="flex flex-col gap-space-sm">
                                <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                                  <div className="flex items-center gap-space-md">
                                    <div className="w-14 h-14 rounded-lg bg-primary-container/20 text-primary flex flex-col items-center justify-center shrink-0">
                                      <span className="font-label-sm text-label-sm uppercase font-bold">SEG</span>
                                      <span className="font-headline-sm text-headline-sm leading-none">19</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-space-xs">
                                        <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">08:00 - 11:30</span>
                                        <span className="font-body-sm text-body-sm text-secondary font-medium">Presencial Obrigatório</span>
                                      </div>
                                      <span className="font-title-sm text-title-sm text-on-surface mt-1">Laboratório 04 - TI-A</span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">Arquitetura de Microsserviços e Deploy Contínuo</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-space-sm self-end md:self-auto">
                                    <span className="font-label-md text-label-md text-outline flex items-center gap-1">
                                      <span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
                                      Confirmado
                                    </span>
                                    <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-all">
                                      <span className="material-symbols-outlined text-base">more_vert</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                                  <div className="flex items-center gap-space-md">
                                    <div className="w-14 h-14 rounded-lg bg-secondary-container/20 text-secondary flex flex-col items-center justify-center shrink-0">
                                      <span className="font-label-sm text-label-sm uppercase font-bold">TER</span>
                                      <span className="font-headline-sm text-headline-sm leading-none">20</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-space-xs">
                                        <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">14:00 - 17:00</span>
                                        <span className="font-body-sm text-body-sm text-secondary font-medium">Prática de Bancada</span>
                                      </div>
                                      <span className="font-title-sm text-title-sm text-on-surface mt-1">Mecatrônica - Lab CNC</span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">Telemetria e Controle Lógico Programável (CLP)</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-space-sm self-end md:self-auto">
                                    <span className="font-label-md text-label-md text-outline flex items-center gap-1">
                                      <span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
                                      Confirmado
                                    </span>
                                    <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-all">
                                      <span className="material-symbols-outlined text-base">more_vert</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                                  <div className="flex items-center gap-space-md">
                                    <div className="w-14 h-14 rounded-lg bg-tertiary-container/20 text-tertiary flex flex-col items-center justify-center shrink-0">
                                      <span className="font-label-sm text-label-sm uppercase font-bold">QUA</span>
                                      <span className="font-headline-sm text-headline-sm leading-none">21</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-space-xs">
                                        <span className="px-space-xs py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-sm text-label-sm font-semibold">09:00 - 12:00</span>
                                        <span className="font-body-sm text-body-sm text-tertiary font-medium">Banca de Mentoria ODS 4</span>
                                      </div>
                                      <span className="font-title-sm text-title-sm text-on-surface mt-1">Orientação de Projetos Integradores ODS 4</span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">Revisão de protótipos inclusivos e metas sustentáveis</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-space-sm self-end md:self-auto">
                                    <span className="font-label-md text-label-md text-outline flex items-center gap-1">
                                      <span className="material-symbols-outlined text-xs text-tertiary">group_work</span>
                                      4 Grupos
                                    </span>
                                    <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-all">
                                      <span className="material-symbols-outlined text-base">more_vert</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                                  <div className="flex items-center gap-space-md">
                                    <div className="w-14 h-14 rounded-lg bg-surface-container-highest text-on-surface-variant flex flex-col items-center justify-center shrink-0">
                                      <span className="font-label-sm text-label-sm uppercase font-bold">SEX</span>
                                      <span className="font-headline-sm text-headline-sm leading-none">23</span>
                                    </div>
                                    <div className="flex flex-col">
                                      <div className="flex items-center gap-space-xs">
                                        <span className="px-space-xs py-0.5 rounded bg-surface-variant text-on-surface font-label-sm text-label-sm font-semibold">10:00 - 11:30</span>
                                        <span className="font-body-sm text-body-sm text-outline font-medium">Atendimento Individual</span>
                                      </div>
                                      <span className="font-title-sm text-title-sm text-on-surface mt-1">Plantão de Dúvidas &amp; Feedback Individual</span>
                                      <span className="font-body-sm text-body-sm text-on-surface-variant">Sala de Apoio Pedagógico &amp; Videoconferência</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-space-sm self-end md:self-auto">
                                    <span className="font-label-md text-label-md text-secondary flex items-center gap-1">
                                      <span className="material-symbols-outlined text-xs">event_available</span>
                                      6 Agendados
                                    </span>
                                    <button className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-bright transition-all">
                                      <span className="material-symbols-outlined text-base">more_vert</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-center justify-between gap-space-md flex-wrap">
                                <div className="flex items-center gap-space-sm">
                                  <span className="material-symbols-outlined text-secondary text-2xl">co_present</span>
                                  <div className="flex flex-col">
                                    <span className="font-title-sm text-title-sm text-on-surface">Necessita de Alocação Extra?</span>
                                    <span className="font-body-sm text-body-sm text-outline">Solicite novos horários de laboratório à coordenação</span>
                                  </div>
                                </div>
                                <button className="px-space-md py-space-xs rounded-lg bg-secondary text-on-secondary hover:bg-secondary/90 transition-all font-label-md text-label-md font-semibold">
                                  Requisitar Espaço
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></main></div>
            </div>
    </div>
  );
}
