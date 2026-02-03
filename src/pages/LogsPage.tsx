const LogsPage = () => (
  <section className="page">
    <div className="section">
      <h2>Logs & Sync</h2>
      <p>Últimos syncs por restaurante e status da integração.</p>
      <div className="table">
        <div className="table__row table__row--head">
          <span>Restaurante</span>
          <span>Último sync</span>
          <span>Status</span>
          <span>Itens importados</span>
        </div>
        <div className="table__row">
          <span>Formigas Shawarmas</span>
          <span>Hoje · 08:45</span>
          <span>OK</span>
          <span>120</span>
        </div>
      </div>
    </div>
  </section>
);

export default LogsPage;
