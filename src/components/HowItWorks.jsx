export default function HowItWorks() {
  const steps = [
    { n: '01', title: 'Primera consulta gratuita', desc: 'Nos conocemos en una videollamada o chat de WhatsApp. Me contás lo que estás atravesando y yo te explico cómo puedo acompañarte.', color: '#1fa8b8' },
    { n: '02', title: 'Diseñamos tu proceso', desc: 'Juntos definimos qué herramienta es la más adecuada para vos — TRE, coaching espiritual o una combinación de ambas.', color: '#7b52ab' },
    { n: '03', title: 'Empezamos a trabajar', desc: 'Comenzamos las sesiones a tu ritmo. Cada encuentro está diseñado para que salgas con más claridad, ligereza y conexión.', color: '#c9a96e' },
    { n: '04', title: 'Transformación sostenida', desc: 'Te enseño herramientas que podés usar de forma autónoma. El bienestar no depende solo de las sesiones, sino de lo que integrás en tu vida.', color: '#1fa8b8' },
  ]

  return (
    <section id="como-funciona" style={{ padding: '100px 24px', background: 'linear-gradient(160deg, #fdfaf5 0%, #f2ecfa 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">El proceso</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438' }}>
            ¿Cómo es trabajar con Julieta?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', top: 28, left: '60%', width: '80%', height: 1, background: 'linear-gradient(90deg, #e2dff0, transparent)', zIndex: 0 }} />
              )}
              <div style={{ background: '#fff', borderRadius: 20, padding: '28px 24px', position: 'relative', zIndex: 1, height: '100%', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${s.color}18`, border: `2px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600, color: s.color }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: '#2a2438', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.75, color: '#5a5470' }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #como-funciona > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          #como-funciona > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
