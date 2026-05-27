const testimonials = [
  {
    name: 'Laura M.',
    role: 'Docente',
    text: 'Llegué a Julieta con un nivel de estrés que ya me estaba enfermando. Después de tres sesiones de TRE sentí algo que hacía años no sentía: ligereza. Es increíble cómo el cuerpo sabe sanar cuando lo dejás.',
    stars: 5,
  },
  {
    name: 'Sebastián R.',
    role: 'Emprendedor',
    text: 'Tenía muchas dudas sobre el coaching espiritual, no era "mi mundo". Pero Julieta tiene una forma de explicar y acompañar que hace que todo sea muy natural. Cambió mi perspectiva completamente.',
    stars: 5,
  },
  {
    name: 'Valeria G.',
    role: 'Mamá y profesional',
    text: 'El proceso de coaching con Juli me ayudó a reconectar con lo que realmente quiero. Llegué sintiéndome perdida y salí con un mapa propio. La recomiendo con el corazón.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Testimonios</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438' }}>
            Lo que dicen quienes ya<br />
            <span style={{ color: '#7b52ab' }}>dieron el primer paso</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {testimonials.map(t => (
            <div key={t.name} className="card" style={{ background: 'linear-gradient(160deg, #fdfaf5, #f2ecfa)' }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {Array(t.stars).fill(0).map((_, i) => (
                  <span key={i} style={{ color: '#c9a96e', fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 19, lineHeight: 1.7, color: '#2a2438', fontStyle: 'italic', marginBottom: 24 }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg, #1fa8b8, #7b52ab)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600 }}>
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: '#2a2438' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#9992ab' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
