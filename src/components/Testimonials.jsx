const testimonials = [
  {
    tag: 'Sesión TRE',
    quote: 'Hasta ayer me levantaba llorando pidiendo fuerzas. Hoy no.',
    desc: 'Después de una sola sesión, pudo dormir, descansar y sentirse liviana por primera vez en mucho tiempo. Sus palabras, no las mías.',
    source: 'Mensaje real de WhatsApp · Sesión individual TRE',
    color: '#1fa8b8',
  },
  {
    tag: 'Taller Método Conexión',
    quote: 'Antes: indecisa e insegura. Ahora: plena, renovada, con seguridad.',
    desc: 'Lo que más cambió fue su forma de mirar hacia adelante, hacia una vida próspera y abundante.',
    source: 'Participante · Método Conexión',
    color: '#7b52ab',
  },
  {
    tag: 'Formación TRE',
    quote: 'Esto era para mí. Es una puerta a todo.',
    desc: 'Al principio costó. Pero después se apoderó, y lo que encontró adentro fue paz, armonía y un camino completamente propio.',
    source: 'Alumna · Formación Nivel 1',
    color: '#c9a96e',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 24px', background: 'linear-gradient(160deg, #fdfaf5 0%, #f2ecfa 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Testimonios</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438', marginBottom: 12 }}>
            Lo que dicen quienes ya dieron el paso
          </h2>
          <p style={{ fontSize: 16, color: '#5a5470' }}>En sus propias palabras.</p>
        </div>

        {/* Foto grupal */}
        <div style={{ marginBottom: 56, borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.10)' }}>
          <img
            src="/grupo-taller.jpg"
            alt="Participantes del taller Método Conexión"
            style={{ width: '100%', display: 'block' }}
          />
        </div>

        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map(t => (
            <div key={t.tag} style={{
              background: '#fff',
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Placeholder video */}
              <div style={{
                background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`,
                height: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 12,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <span style={{ fontSize: 12, color: t.color, fontWeight: 600, letterSpacing: '0.08em' }}>VER TESTIMONIO</span>
              </div>

              <div style={{ padding: '28px 24px', flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: t.color, textTransform: 'uppercase', marginBottom: 14 }}>{t.tag}</p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, lineHeight: 1.5, color: '#2a2438', fontStyle: 'italic', marginBottom: 16 }}>
                  "{t.quote}"
                </p>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5470', marginBottom: 16 }}>{t.desc}</p>
                <p style={{ fontSize: 12, color: '#9992ab' }}>{t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
