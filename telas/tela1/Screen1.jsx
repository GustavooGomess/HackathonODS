import { useState } from 'react';

export default function Screen1() {
  const [role, setRole] = useState('teacher');
  const [showPassword, setShowPassword] = useState(false);
  const [authStatus, setAuthStatus] = useState('idle');
  const activeTabClass = 'flex-1 py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md flex items-center justify-center gap-space-xs transition-all duration-200 bg-primary-container text-on-primary shadow-sm';
  const inactiveTabClass = 'flex-1 py-space-sm px-space-md rounded-DEFAULT font-label-md text-label-md flex items-center justify-center gap-space-xs transition-all duration-200 text-on-surface-variant hover:text-on-surface';

  return (
    <div className="legacy-screen bg-background font-body-md text-on-surface antialiased min-h-full flex items-center justify-center p-space-md">
      <main className="w-full flex items-center justify-center"><div className="flex flex-col w-full max-w-xl mx-auto items-center relative py-space-lg px-gutter-sm">
                <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary-container/15 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none" />
                <div className="w-full bg-surface-container-low rounded-xl p-space-lg shadow-xl relative z-10 flex flex-col gap-space-lg">
                  <div className="flex flex-col items-center text-center gap-space-sm">
                    <div className="inline-flex items-center gap-space-xs bg-surface-container-highest px-space-md py-space-xs rounded-full">
                      <span className="material-symbols-outlined text-secondary text-sm">verified</span>
                      <span className="font-label-sm text-secondary tracking-wider uppercase">ODS 4: Educação de Qualidade</span>
                    </div>
                    <div className="flex items-center gap-space-sm mt-space-xs">
                      <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shadow-md shadow-primary-container/30">
                        <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: '"FILL" 1'}}>school</span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-headline-md text-headline-md text-on-surface tracking-tight">SkillTrack</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Plataforma Nacional de Aprendizagem</span>
                      </div>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                      Assegurando educação inclusiva, equitativa e promovendo oportunidades contínuas de capacitação técnica.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs rounded-lg flex gap-space-xs" role="tablist">
                    <button className={role === 'teacher' ? activeTabClass : inactiveTabClass} id="tab-teacher" onClick={() => setRole('teacher')} type="button">
                      <span className="material-symbols-outlined text-base">co_present</span>
                      <span>Sou Professor</span>
                    </button>
                    <button className={role === 'student' ? activeTabClass : inactiveTabClass} id="tab-student" onClick={() => setRole('student')} type="button">
                      <span className="material-symbols-outlined text-base">local_library</span>
                      <span>Sou Aluno</span>
                    </button>
                  </div>
                  <form className="flex flex-col gap-space-md" onSubmit={(event) => { event.preventDefault(); setAuthStatus('loading'); setTimeout(() => setAuthStatus('approved'), 1000); }}>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-between" htmlFor="identifier-input">
                        <span id="role-label">{role === 'teacher' ? 'Email institucional ou MASP' : 'RA, Matrícula ou Email Institucional'}</span>
                        <span className="text-tertiary font-label-sm">Autenticação Segura</span>
                      </label>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline pointer-events-none text-xl">badge</span>
                        <input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-4 py-2.5 rounded-lg font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" id="identifier-input" placeholder={role === 'teacher' ? 'professor@educacao.gov.br ou matrícula' : 'aluno@estudante.gov.br ou RA'} required type="text" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="password-input">Senha de Acesso</label>
                        <a className="font-label-sm text-label-sm text-primary hover:underline" href="#">Esqueceu a senha?</a>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline pointer-events-none text-xl">lock</span>
                        <input className="w-full bg-surface-container-lowest text-on-surface pl-10 pr-10 py-2.5 rounded-lg font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all" id="password-input" placeholder="••••••••••••" required type={showPassword ? 'text' : 'password'} />
                        <button aria-label="Alternar visibilidade de senha" className="absolute right-3 text-outline hover:text-on-surface transition-colors" onClick={() => setShowPassword((visible) => !visible)} type="button">
                          <span className="material-symbols-outlined text-xl" id="password-visibility-icon">{showPassword ? 'visibility_off' : 'visibility'}</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <label className="flex items-center gap-space-sm cursor-pointer select-none">
                        <input className="w-4 h-4 rounded bg-surface-container-lowest accent-secondary-container cursor-pointer" id="remember-me" type="checkbox" />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Lembrar meu acesso neste dispositivo</span>
                      </label>
                    </div>
                    <button className="w-full mt-space-xs py-3 px-space-md rounded-lg bg-primary-container text-on-primary font-title-sm text-title-sm shadow-md hover:bg-inverse-primary transition-all duration-200 flex items-center justify-center gap-space-xs" disabled={authStatus === 'loading'} type="submit">
                      {authStatus === 'idle' ? <><span>Acessar Plataforma</span><span className="material-symbols-outlined text-lg">arrow_forward</span></> : authStatus === 'loading' ? <><span className="material-symbols-outlined animate-spin text-lg">progress_activity</span><span>Validando Credenciais...</span></> : <><span className="material-symbols-outlined text-secondary text-lg">check_circle</span><span>Acesso Autorizado</span></>}
                    </button>
                  </form>
                  <div className="flex items-center gap-space-md">
                    <div className="flex-1 h-px bg-surface-container-highest" />
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Ou acesse via</span>
                    <div className="flex-1 h-px bg-surface-container-highest" />
                  </div>
                  <div className="grid grid-cols-2 gap-space-sm">
                    <button className="flex items-center justify-center gap-space-sm py-2.5 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg transition-colors group" type="button">
                      <span className="font-bold text-xs bg-surface-bright px-1.5 py-0.5 rounded text-secondary">gov.br</span>
                      <span className="font-label-md text-label-md truncate">Acesso Gov.br</span>
                    </button>
                    <button className="flex items-center justify-center gap-space-sm py-2.5 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg transition-colors group" type="button">
                      <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
                      <span className="font-label-md text-label-md truncate">Workspace Edu</span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-sm border-t border-surface-container-highest/60 text-center">
                    <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-secondary text-base">public</span>
                      <span>Alinhado às Metas 4.3 e 4.4 da ONU para Formação Técnica</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-outline leading-tight">
                      Educação profissionalizante acessível e acompanhamento pedagógico integrado de alto impacto.
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center px-space-md mt-space-md font-label-sm text-label-sm text-outline">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Rede Integrada Ativa</span>
                  </div>
                  <div className="flex gap-space-md">
                    <a className="hover:text-on-surface transition-colors" href="#">Termos</a>
                    <a className="hover:text-on-surface transition-colors" href="#">Privacidade</a>
                    <a className="hover:text-on-surface transition-colors" href="#">Suporte</a>
                  </div>
                </div>
              </div></main>
    </div>
  );
}
