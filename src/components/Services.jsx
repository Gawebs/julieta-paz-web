export default function Services({ waLink }) {
  const services = [
    {
      tag: 'Sesión individual',
      title: 'Terapia de Respuesta Espiritual',
      desc: 'Trabajamos con tu Yo Superior para identificar y liberar los bloqueos energéticos, creencias limitantes y programas del alma que están detrás de lo que repetís — en tus vínculos, tu salud, tu bienestar, tu vida.',
      meta: 'Online · Zoom · 2 horas aprox. · Individual',
      color: '#1fa8b8',
      bg: '#e8f7f9',
      icon: '✨',
    },
    {
      tag: 'Talleres grupales',
      title: 'Método Conexión',
      desc: 'Un espacio de transformación donde integrás cuerpo, mente, alma y espíritu. Cada encuentro es una experiencia completa — no una charla, un proceso vivencial.',
      meta: 'Presencial: 1 vez al mes · 5 hs\nOnline — Programa Conexión 360: 5 semanas por Zoom · 2 hs por encuentro · Grupo WhatsApp + tareas diarias',
      color: '#7b52ab',
      bg: '#f2ecfa',
      featured: true,
      icon: '🌀',
    },
    {
      tag: 'Formación',
      title: 'Formación en TRE',
      desc: 'Para cualquier persona que quiera transformarse y aprender a acompañar a otros. No necesitás experiencia previa — solo ganas de crecer y de ser herramienta de cambio.',
      niveles: [
        { label: 'Nivel 1', desc: 'Transformación para vos', dur: '3 meses' },
        { label: 'Nivel 2', desc: 'Facilitar a otro', dur: '3 meses' },
        { label: 'Especialización', desc: 'Chakras aplicada a TRE', dur: 'Avanzado' },
      ],
      color: '#c9a96e',
      bg: '#f5eedf',
      icon: '🌱',
    },
  ]

  return (
    <section id="servicios" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Servicios</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438', marginBottom: 12 }}>
            ¿Con qué te puedo acompañar?
          </h2>
          <p style={{ fontSize: 16, color: '#5a5470' }}>
            Tres caminos, según dónde estés y qué necesitás.
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
            }}>
              {s.featured && (
                <div style={{ background: `linear-gradient(90deg, ${s.color}, #1fa8b8)`, padding: '8px', textAlign: 'center', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em' }}>
                  MÁS ELEGIDO
                </div>
              )}
              <div style={{ padding: '32px 28px' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>
                  {s.icon}
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: s.color, textTransform: 'uppercase', marginBottom: 8 }}>{s.tag}</p>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500, color: '#2a2438', marginBottom: 16, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#5a5470', marginBottom: 20 }}>{s.desc}</p>

                {s.meta && (
                  <p style={{ fontSize: 12, color: '#9992ab', lineHeight: 1.7, marginBottom: 24, whiteSpace: 'pre-line' }}>{s.meta}</p>
                )}

                {s.niveles && (
                  <div style={{ marginBottom: 24 }}>
                    {s.niveles.map(n => (
                      <div key={n.label} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 10, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0f0f0' }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{n.label}</span>
                        <span style={{ fontSize: 13, color: '#2a2438' }}>{n.desc}</span>
                        <span style={{ fontSize: 12, color: '#9992ab' }}>{n.dur}</span>
                      </div>
                    ))}
                  </div>
                )}

                <a href={waLink} target="_blank" rel="noreferrer"
                  style={{ display: 'block', textAlign: 'center', padding: '12px 20px', borderRadius: 12, border: `2px solid ${s.color}`, color: s.featured ? '#fff' : s.color, background: s.featured ? s.color : 'transparent', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 14, textDecoration: 'none' }}
                >
                  Consultá por WhatsApp →
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
