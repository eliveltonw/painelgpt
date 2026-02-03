const ItemsPage = () => (
  <section className="page">
    <div className="section">
      <h2>Itens Global</h2>
      <p>
        Auditoria geral para encontrar itens sem foto, descrição ou preço em todo o sistema.
      </p>
      <div className="table">
        <div className="table__row table__row--head">
          <span>Item</span>
          <span>Categoria</span>
          <span>Restaurante</span>
          <span>Flags</span>
        </div>
        <div className="table__row">
          <span>Shawarma Frango</span>
          <span>Shawarmas</span>
          <span>Formigas Shawarmas</span>
          <span className="tags">Sem descrição · Sem preço</span>
        </div>
      </div>
    </div>
  </section>
);

export default ItemsPage;
