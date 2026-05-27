export default function Services({ calendlyLink }) {
  const services = [
    {
      icon: '🌿',
      title: 'Sesión individual TRE',
      desc: 'Una sesión personal donde guío tu cuerpo para activar el mecanismo de liberación de tensiones. Incluye contención y seguimiento.',
      features: ['60-90 minutos', 'Presencial u online', 'Primera sesión de exploración sin costo'],
      color: '#1fa8b8',
      bg: '#e8f7f9',
    },
    {
      icon: '✨',
      title: 'Acompañamiento de coaching espiritual',
      desc: 'Un proceso de 4 a 8 semanas para trabajar en profundidad tu bienestar interior, propósito y conexión espiritual.',
      features: ['Sesiones semanales', 'Material de apoyo', 'Seguimiento entre sesiones'],
      color: '#7b52ab',
      bg: '#f2ecfa',
      featured: true,
    },
    {
      icon: '🤝',
      title: 'Taller grupal TRE',
      desc: 'Vivencia colectiva de TRE en un espacio seguro y acompañado. Ideal para quienes prefieren el proceso en comunidad.',
      features: ['Grupos reducidos (máx. 8 personas)', 'Presencial', 'Calendario mensual'],
      color: '#c9a96e',
      bg: '#f5eedf',
    },
  ]

  return (
    <section id="servicios" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Servicios</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438', marginBottom: 16 }}>
            ¿Cómo puedo acompañarte?
          </h2>
          <p style={{ fontSize: 16, color: '#5a5470', maxWidth: 520, margin: '0 auto' }}>
            Cada persona es única. Por eso ofrezco diferentes formatos para que encuentres el que mejor se adapta a vos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'start' }}>
          {services.map(s => (
            <div key={s.title} style={{
              borderRadius: 24,
              overflow: 'hidden',
              border: s.featured ? `2px solid ${s.color}` : '1px solid #f0f0f0',
              background: '#fff',
              transform: s.featured ? 'scale(1.03)' : 'none',
              boxShadow: s.featured ? `0 20px 60px ${s.color}25` : '0 4px 20px rgba(0,0,0,0.06)',
              position: 'relative',
            }}>
              {s.featured && (
                <div style={{ background: `linear-gradient(90deg, ${s.color}, #c9a96e)`, padding: '8px', textAlign: 'center', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em' }}>
                  MÁS ELEGIDO
                </div>
              )}
              <div style={{ padding: '32px 28px' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500, color: '#2a2438', marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5470', marginBottom: 24 }}>{s.desc}</p>
                <div style={{ display: 'grid', gap: 8, marginBottom: 28 }}>
                  {s.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#2a2438' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <a href={calendlyLink} target="_blank" rel="noreferrer"
                  style={{ display: 'block', textAlign: 'center', padding: '12px 20px', borderRadius: 12, border: `2px solid ${s.color}`, color: s.featured ? '#fff' : s.color, background: s.featured ? s.color : 'transparent', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseOver={e => { e.target.style.background = s.color; e.target.style.color = '#fff' }}
                  onMouseOut={e => { if (!s.featured) { e.target.style.background = 'transparent'; e.target.style.color = s.color } }}
                >
                  Quiero saber más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #servicios > div > div:last-child { grid-template-columns: 1fr !important; }
          #servicios > div > div:last-child > div { transform: none !important; }
        }
      `}</style>
    </section>
  )
}
