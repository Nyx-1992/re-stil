export default function Home() {
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
        <img src="/logo.svg" alt="Re:Stil Logo" width={80} height={80} style={{ marginBottom: '1rem' }} />
        <h1 style={{ color: 'var(--olive)', fontSize: '2.7rem', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>
          Re:Stil – Dein Stil, neu gedacht
        </h1>
        <p style={{ color: 'var(--terracotta)', fontSize: '1.25rem', marginBottom: '1.5rem', textAlign: 'center', maxWidth: 600 }}>
          Nachhaltig. Persönlich. Inspirierend. <br />
          Miete deine eigene Kleiderstange, genieße Kaffee & Community und werde Teil einer Bewegung für bewusste Mode.
        </p>
        <a href="/book" className="button" style={{ marginBottom: '1.5rem' }}>Jetzt Stange buchen</a>
      </div>

      <div className="card" style={{ marginBottom: '2.5rem', background: 'var(--beige-dark)' }}>
        <h2 style={{ color: 'var(--olive)', fontSize: '1.5rem', marginBottom: '0.7rem' }}>Was macht Re:Stil besonders?</h2>
        <ul style={{ color: 'var(--olive-dark)', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, paddingLeft: '1.2em' }}>
          <li>Secondhand neu gedacht: Miete, präsentiere & verkaufe deine Lieblingsstücke.</li>
          <li>Wohlfühl-Atmosphäre mit Coffee Corner & Events.</li>
          <li>Digitale Galerie für jede Stange – mit QR-Code & Fotos.</li>
          <li>Starke Community & nachhaltige Mission.</li>
        </ul>
      </div>

      <div className="coffee-corner" style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ margin: 0, fontWeight: 600 }}>☕ Coffee Corner</h3>
        <p style={{ margin: 0 }}>Genieße lokalen Kaffee, tausche dich aus und lass dich inspirieren – Re:Stil ist mehr als ein Laden, es ist ein Treffpunkt.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <b>Book</b><br />
          Stange mieten & verkaufen
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <b>Gallery</b><br />
          Looks & Outfits entdecken
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <b>Community</b><br />
          Events & Austausch erleben
        </div>
        <div className="card" style={{ minWidth: 220, flex: 1 }}>
          <b>Sustainability</b><br />
          Nachhaltigkeit leben
        </div>
      </div>
    </section>
  );
}
