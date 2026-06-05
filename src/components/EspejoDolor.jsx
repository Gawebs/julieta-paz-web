export default function EspejoDolor() {
  const bullets = [
    'Te levantás y lo primero que sentís es peso. No sabés bien de qué, pero está ahí.',
    'Rezás, pedís fuerzas, aguantás. Y al otro día, lo mismo.',
    'Probaste terapia, leíste, meditaste. Algo mejora, pero no termina de sanar.',
    'Sentís que perdiste el hilo de quién sos, qué querés, a dónde vas.',
    'Lo que más extrañás es esa paz. La que era tuya y no sabés cuándo se fue.',
  ]

  return (
    <section style={{ padding: '100px 24px', background: 'linear-gradient(160deg, #fdfaf5 0%, #f2ecfa 100%)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438', marginBottom: 12, lineHeight: 1.2 }}>
          ¿Te suena alguna de estas?
        </h2>
        <p style={{ fontSize: 16, color: '#5a5470', marginBottom: 48 }}>
          No hace falta que sean todas. Con una alcanza.
        </p>

        <div style={{ display: 'grid', gap: 16, marginBottom: 56 }}>
          {bullets.map((b, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 16,
              background: '#fff',
              borderRadius: 16,
              padding: '20px 24px',
              boxShadow: '0 2px 12px rgba(123,82,171,0.07)',
              borderLeft: '4px solid #7b52ab',
            }}>
              <span style={{ color: '#7b52ab', fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 600, flexShrink: 0, marginTop: 2 }}>•</span>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: '#2a2438', margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #1fa8b8, #7b52ab)',
          borderRadius: 20,
          padding: '32px 40px',
          textAlign: 'center',
        }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 400, color: '#fff', lineHeight: 1.5, margin: 0 }}>
            Si te reconocés acá, no es casualidad que hayas llegado hasta esta página.
          </p>
        </div>
      </div>
    </section>
  )
}
