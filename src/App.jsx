import { lazy, Suspense, useEffect } from 'react';
import { Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';

const Screen1 = lazy(() => import('../telas/tela1/Screen1.jsx'));
const Screen2 = lazy(() => import('../telas/tela2/Screen2.jsx'));
const Screen3 = lazy(() => import('../telas/tela3/Screen3.jsx'));
const Screen4 = lazy(() => import('../telas/tela4/Screen4.jsx'));
const Screen5 = lazy(() => import('../telas/tela5/Screen5.jsx'));
const Screen6 = lazy(() => import('../telas/tela6/Screen6.jsx'));
const Screen7 = lazy(() => import('../telas/tela7/Screen7.jsx'));
const Screen8 = lazy(() => import('../telas/tela8/Screen8.jsx'));
const Screen9 = lazy(() => import('../telas/tela9/Screen9.jsx'));
const Screen10 = lazy(() => import('../telas/tela10/Screen10.jsx'));

const screens = [
  { id: 1, label: 'Acesso', description: 'Login e cadastro', component: Screen1 },
  { id: 2, label: 'Disciplina', description: 'Desenvolvimento Full Stack', component: Screen2 },
  { id: 3, label: 'Turmas', description: 'Turmas e trilhas', component: Screen3 },
  { id: 4, label: 'Competências', description: 'Busca e filtros', component: Screen4 },
  { id: 5, label: 'Gestão', description: 'Perfil acadêmico', component: Screen5 },
  { id: 6, label: 'Perfil', description: 'Perfil do aluno', component: Screen6 },
  { id: 7, label: 'Avaliação', description: 'Radar de competências', component: Screen7 },
  { id: 8, label: 'Portfólio', description: 'Habilidades técnicas', component: Screen8 },
  { id: 9, label: 'Progresso', description: 'Jornada técnica', component: Screen9 },
  { id: 10, label: 'Notificações', description: 'Central de notificações', component: Screen10 },
];

function ScreenPage() {
  const { screenId } = useParams();
  const screen = screens.find(({ id }) => id === Number(screenId));

  useEffect(() => {
    document.title = screen ? `${screen.label} | SkillTrack` : 'SkillTrack';
  }, [screen]);

  if (!screen) {
    return <Navigate to="/tela/1" replace />;
  }

  const Screen = screen.component;

  return (
    <Suspense fallback={<div className="screen-loading" role="status">Carregando tela...</div>}>
      <Screen />
    </Suspense>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span className="brand-name">SkillTrack</span>
        </div>
        <nav className="screen-nav" aria-label="Navegação entre telas">
          {screens.map((screen) => (
            <NavLink
              key={screen.id}
              className={({ isActive }) => `screen-link${isActive ? ' active' : ''}`}
              to={`/tela/${screen.id}`}
              aria-label={`Tela ${screen.id}: ${screen.description}`}
              title={screen.description}
            >
              <span className="screen-number">{String(screen.id).padStart(2, '0')}</span>
              <span>{screen.label}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="screen-container" id="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/tela/1" replace />} />
          <Route path="/tela/:screenId" element={<ScreenPage />} />
          <Route path="*" element={<Navigate to="/tela/1" replace />} />
        </Routes>
      </main>
    </div>
  );
}
