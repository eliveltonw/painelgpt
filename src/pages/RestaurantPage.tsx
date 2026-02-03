import { NavLink, useSearchParams } from "react-router-dom";

const tabs = [
  { label: "Monitor Geraldo", value: "monitor" },
  { label: "Itens", value: "itens" },
  { label: "Categorias", value: "categorias" },
  { label: "iFood (Preencher)", value: "ifood" },
  { label: "Matches", value: "matches" },
];

const RestaurantPage = () => {
  const [searchParams] = useSearchParams();
  const highlight = searchParams.get("highlight");

  return (
    <section className="page">
      <div className="section section--tight">
        <div className="restaurant-header">
          <div>
            <h2>Restaurante 11359</h2>
            <p>Links: Geraldo menu · Geraldo restaurante · Vitrine · iFood</p>
          </div>
          <div className="restaurant-header__actions">
            <button type="button" className="button button--ghost">
              Abrir Geraldo
            </button>
            <button type="button" className="button">
              Abrir Vitrine
            </button>
          </div>
        </div>
        {highlight && (
          <div className="highlight">
            Destacar item: <strong>{highlight}</strong>
          </div>
        )}
      </div>

      <div className="tabs">
        {tabs.map((tab) => (
          <NavLink key={tab.value} to={`?tab=${tab.value}`} className="tab">
            {tab.label}
          </NavLink>
        ))}
      </div>

      <div className="section">
        <h3>Monitor Geraldo</h3>
        <p>
          Use filtros de pendência para encontrar itens sem foto, descrição ou preço.
        </p>
        <div className="monitor">
          <aside className="monitor__sidebar">
            <h4>Categorias</h4>
            <ul>
              <li>Shawarmas (3 pendências)</li>
              <li>Bebidas (1 pendência)</li>
            </ul>
          </aside>
          <div className="monitor__content">
            <div className="item-card">
              <div>
                <h4>Shawarma Frango</h4>
                <p>Sem descrição · Sem preço em tamanho P</p>
              </div>
              <div className="item-card__actions">
                <button type="button" className="button button--ghost">
                  Copiar descrição
                </button>
                <button type="button" className="button">
                  Abrir imagem
                </button>
              </div>
            </div>
            <div className="item-card">
              <div>
                <h4>Falafel</h4>
                <p>Sem foto · Sem preço</p>
              </div>
              <div className="item-card__actions">
                <button type="button" className="button button--ghost">
                  Copiar nome
                </button>
                <button type="button" className="button">
                  Abrir Geraldo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantPage;
