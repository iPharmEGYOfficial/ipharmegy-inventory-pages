export default function Dashboard() {
  const year = new Date().getFullYear();

      const tiles = [
    { k: "items",     title: "Items",            desc: "Master data & barcodes",                soon: true },
    { k: "stock",     title: "Stock",            desc: "On-hand overview",                      soon: true },
    { k: "count",     title: "Inventory Count",  desc: "Cycle count / full count",             soon: true },
    { k: "imports",   title: "Imports",          desc: "Purchase & receiving",                 soon: true },

    { k: "transfers", title: "Transfers",        desc: "Store-to-store movement",              soon: true },
    { k: "adjust",    title: "Adjustments",      desc: "Damage, loss, corrections",            soon: true },
    { k: "expiry",    title: "Expiry Watch",     desc: "Near-expiry & FEFO hints",             soon: true },
    { k: "pricing",   title: "Pricing",          desc: "Cost & margin utilities",              soon: true },

    { k: "suppliers", title: "Suppliers",        desc: "Vendors & purchase history",           soon: true },
    { k: "audit",     title: "Audit Log",        desc: "Trace every change",                   soon: true },
    { k: "reports",   title: "Reports",          desc: "Exports & KPI snapshots",              soon: true },
    { k: "settings",  title: "Settings",         desc: "Users, roles & permissions",           soon: true }
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
          
          <div className="infRing" aria-hidden="true">
            <svg className="infRingSvg" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path className="infRingPath" d="M 20 50 C 20 20, 70 20, 100 50 C 130 80, 180 80, 180 50 C 180 20, 130 20, 100 50 C 70 80, 20 80, 20 50" />
            </svg>
          </div>
{tiles.map((t, i) => (
            <button key={t.k} className="invCard infLoop" style={{ "--i": i }} type="button">
              <div className="invCardTitle"> {t.title}</div>
              <div className="invCardDesc">{t.desc}</div>
              <div className="invCardFoot">
                <span className="pill">{t.soon ? "Coming soon" : "Open"}</span>
              <div className="infOverlay" aria-hidden="true">
                <svg className="infSvg" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path
                    className="infPath"
                    d="M 20 50
                       C 20 20, 70 20, 100 50
                       C 130 80, 180 80, 180 50
                       C 180 20, 130 20, 100 50
                       C 70 80, 20 80, 20 50"
                  />
                  <circle className="infDot" cx="100" cy="50" r="3" />
                </svg>
              </div>

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







