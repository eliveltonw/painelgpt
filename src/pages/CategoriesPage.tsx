const CategoriesPage = () => (
  <section className="page">
    <div className="section">
      <h2>Categorias</h2>
      <p>Resumo por categoria com contadores de pendências.</p>
      <div className="table">
        <div className="table__row table__row--head">
          <span>Categoria</span>
          <span>Restaurante</span>
          <span>Itens</span>
          <span>Pendências</span>
        </div>
        <div className="table__row">
          <span>Shawarmas</span>
          <span>Formigas Shawarmas</span>
          <span>12</span>
          <span className="tags">Sem foto · Sem preço</span>
        </div>
      </div>
    </div>
  </section>
);

export default CategoriesPage;
