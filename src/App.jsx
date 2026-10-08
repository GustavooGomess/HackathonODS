import { Navigate, NavLink, Route, Routes, useParams } from 'react-router-dom';

const screens = [
  { id: 1, label: 'Acesso', description: 'Login e cadastro' },
  { id: 2, label: 'Disciplina', description: 'Desenvolvimento Full Stack' },
  { id: 3, label: 'Turmas', description: 'Turmas e trilhas' },
  { id: 4, label: 'Competências', description: 'Busca e filtros' },
  { id: 5, label: 'Gestão', description: 'Perfil acadêmico' },
  { id: 6, label: 'Perfil', description: 'Perfil do aluno' },
  { id: 7, label: 'Avaliação', description: 'Radar de competências' },
  { id: 8, label: 'Portfólio', description: 'Habilidades técnicas' },
  { id: 9, label: 'Progresso', description: 'Jornada técnica' },
  { id: 10, label: 'Notificações', description: 'Central de notificações' },
];

function ScreenPage() {
  const { screenId } = useParams();
  const screen = screens.find(({ id }) => id === Number(screenId));

  if (!screen) {
    return <Navigate to="/tela/1" replace />;
  }

  return (
    <iframe
      key={screen.id}
      className="screen-frame"
      src={`/telas/tela${screen.id}/tela${screen.id}.html`}
      title={screen.description}
    />
  );
}

export default function App() {
  return (
    <div className="app-shell">
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
      <main className="screen-container">
        <Routes>
          <Route path="/" element={<Navigate to="/tela/1" replace />} />
          <Route path="/tela/:screenId" element={<ScreenPage />} />
          <Route path="*" element={<Navigate to="/tela/1" replace />} />
        </Routes>
      </main>
    </div>
  );
}
