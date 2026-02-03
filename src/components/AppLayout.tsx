import { NavLink, Outlet } from "react-router-dom";

import TopBar from "./TopBar";

const AppLayout = () => (
  <div className="app-shell">
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__title">PainelGPT</span>
        <span className="sidebar__subtitle">Monitor Geraldo</span>
      </div>
      <nav className="sidebar__nav">
        <NavLink to="/" end>
          Restaurantes
        </NavLink>
        <NavLink to="/itens">Itens</NavLink>
        <NavLink to="/categorias">Categorias</NavLink>
        <NavLink to="/logs">Logs</NavLink>
      </nav>
      <div className="sidebar__footer">
        <p>Prioridade: qualidade do cardápio.</p>
      </div>
    </aside>
    <div className="main">
      <TopBar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  </div>
);

export default AppLayout;
