import { useMemo } from "react";

const kpis = [
  { label: "Total restaurantes", value: "—" },
  { label: "Sem iFood", value: "—" },
  { label: "Itens s/ foto", value: "—" },
  { label: "Itens s/ descrição", value: "—" },
  { label: "Itens s/ preço", value: "—" },
];

const HomePage = () => {
  const filters = useMemo(
    () => ["Busca", "Só com problema", "Sem iFood", "Ordenar"],
    []
  );

  return (
    <section className="page">
      <div className="section">
        <h2>Resumo rápido</h2>
        <div className="kpi-grid">
          {kpis.map((kpi) => (
            <button key={kpi.label} type="button" className="kpi-card">
              <span>{kpi.label}</span>
              <strong>{kpi.value}</strong>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section__header">
          <h2>Restaurantes</h2>
          <div className="chips">
            {filters.map((filter) => (
              <span key={filter} className="chip">
                {filter}
              </span>
            ))}
          </div>
        </div>
        <div className="list">
          <div className="card">
            <div className="card__header">
              <div>
                <h3>Restaurante Exemplo</h3>
                <p>ID: 11359</p>
              </div>
              <span className="badge">Sem iFood</span>
            </div>
            <div className="card__meta">
              <span>Itens: —</span>
              <span>Sem foto: —</span>
              <span>Sem descrição: —</span>
              <span>Sem preço: —</span>
            </div>
            <div className="card__actions">
              <button type="button" className="button button--ghost">
                Resumo
              </button>
              <button type="button" className="button">
                Abrir
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
