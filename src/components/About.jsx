export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

        {/* Imagen con cita */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e8f7f9 0%, #f2ecfa 100%)',
            borderRadius: 28,
            padding: 40,
            position: 'relative',
          }}>
            <div style={{
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: 20,
              overflow: 'hidden',
              background: 'linear-gradient(160deg, #e8f7f9, #f2ecfa)',
            }}>
              <img
                src="/julieta.jpg"
                alt="Julieta Paz"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: 24, right: 24,
              background: '#fff',
              borderRadius: 16,
              padding: '14px 20px',
              boxShadow: '0 8px 32px rgba(31,168,184,0.15)',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 600, color: '#1fa8b8' }}>+200</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#7b8794', marginTop: 2 }}>personas<br />acompañadas</div>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="section-tag">Sobre mí</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.15, color: '#2a2438', marginBottom: 24 }}>
            Hola, soy <span style={{ color: '#7b52ab' }}>Julieta</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#5a5470', marginBottom: 20 }}>
            Soy coach espiritual certificada y practicante de TRE (Terapia de Respuesta). Mi camino comenzó cuando encontré en estas herramientas una forma profunda de sanar y reconectar conmigo misma.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#5a5470', marginBottom: 32 }}>
            Hoy acompaño a personas que quieren soltar las tensiones, el estrés y las cargas acumuladas — para que puedan vivir con más ligereza, claridad y conexión con su ser interior.
          </p>

          <div className="about-tags" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { icon: '🌱', text: 'Coaching espiritual' },
              { icon: '🤲', text: 'Terapia TRE' },
              { icon: '💫', text: 'Bienestar integral' },
              { icon: '🧘', text: 'Sesiones online y presencial' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: '#f8f9fb', borderRadius: 12, fontSize: 14, fontWeight: 500, color: '#2a2438' }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre-mi > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
