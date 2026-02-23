export default function InventoryHome() {
  const year = new Date().getFullYear();

  const tiles = [
    { k: "items", title: "Items", desc: "Master data & barcodes", soon: true },
    { k: "stock", title: "Stock", desc: "On-hand overview", soon: true },
    { k: "count", title: "Inventory Count", desc: "Cycle count / full count", soon: true },
    { k: "imports", title: "Imports", desc: "Purchase & receiving", soon: true },
    { k: "reports", title: "Reports", desc: "Audit-ready exports", soon: true },
    { k: "settings", title: "Settings", desc: "Users & permissions", soon: true }
  ];

  return (
    <div className="inv">
      <header className="invHero">
        <div className="invHeroInner">
          <div className="invBrand">
            <img className="invLogo" src="/logos/icon.svg" alt="iPharmEGY" />
            <div>
              <h1>iPharmEGY Inventory</h1>
              <p>Professional inventory workspace (Frontend)</p>
            </div>
          </div>

          <div className="invBadge">
            <span className="chip">Cloudflare Pages</span>
            <span className="chip">Vite + React</span>
          </div>
        </div>
      </header>

      <main className="invMain">
        <section className="invGrid" aria-label="Inventory modules">
          {tiles.map(t => (
            <button key={t.k} className="invCard" type="button">
              <div className="invCardTitle">{t.title}</div>
              <div className="invCardDesc">{t.desc}</div>
              <div className="invCardFoot">
                <span className="pill">{t.soon ? "Coming soon" : "Open"}</span>
              </div>
            </button>
          ))}
        </section>
      </main>

      <footer className="invFooter">
        <p> {year} iPharmEGY</p>
      </footer>
    </div>
  );
}

