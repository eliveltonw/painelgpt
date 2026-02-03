import { useLocation } from "react-router-dom";

const titleMap: Record<string, string> = {
  "/": "Restaurantes",
  "/itens": "Itens Global",
  "/categorias": "Categorias",
  "/logs": "Logs",
};

const TopBar = () => {
  const location = useLocation();
  const title = titleMap[location.pathname] ?? "Restaurante";

  return (
    <header className="topbar">
      <div>
        <h1>{title}</h1>
        <p>Monitoramento focado no Geraldo, iFood como apoio.</p>
      </div>
      <div className="topbar__actions">
        <button type="button" className="button button--ghost">
          Exportar
        </button>
        <button type="button" className="button">
          Atualizar
        </button>
      </div>
    </header>
  );
};

export default TopBar;
