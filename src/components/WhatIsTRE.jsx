export default function WhatIsTRE({ waLink }) {
  const benefits = [
    { icon: '⚡', title: 'Libera tensión acumulada', desc: 'El cuerpo activa su mecanismo natural para soltar el estrés guardado en los músculos.' },
    { icon: '🧠', title: 'Regula el sistema nervioso', desc: 'Ayuda a salir del estado de alerta constante y volver a un equilibrio profundo.' },
    { icon: '😴', title: 'Mejora el sueño', desc: 'Con la tensión liberada, el cuerpo y la mente pueden descansar de verdad.' },
    { icon: '💪', title: 'Reduce el dolor crónico', desc: 'Muchos dolores físicos tienen raíz emocional. TRE trabaja en ese nivel.' },
    { icon: '🌊', title: 'Procesa traumas', desc: 'De forma suave y segura, sin necesidad de revivir experiencias dolorosas.' },
    { icon: '✨', title: 'Mayor vitalidad', desc: 'Al soltar cargas, fluye una energía natural que se sentía bloqueada.' },
  ]

  return (
    <section id="tre" style={{ padding: '100px 24px', background: 'linear-gradient(160deg, #fdfaf5 0%, #e8f7f9 100%)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag">Terapia TRE</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 400, color: '#2a2438', marginBottom: 20 }}>
            ¿Qué es la <span style={{ color: '#1fa8b8' }}>Terapia de Respuesta</span>?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: '#5a5470', maxWidth: 680, margin: '0 auto' }}>
            TRE (Tension & Trauma Releasing Exercises) es una técnica que activa el mecanismo natural del cuerpo para liberar tensiones profundas, estrés crónico y traumas — a través de vibraciones que el propio sistema nervioso genera.
          </p>
        </div>

        {/* Bloque destacado */}
        <div style={{
          background: 'linear-gradient(135deg, #1fa8b8, #7b52ab)',
          borderRadius: 24,
          padding: '40px 48px',
          marginBottom: 64,
          color: '#fff',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>
              Tu cuerpo sabe cómo sanar.<br />Solo necesita permiso.
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.75, opacity: 0.9 }}>
              A diferencia de otras terapias, TRE no requiere hablar del trauma. El cuerpo libera de forma natural, respetando tu ritmo y tu proceso.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 16 }}>
            {['Para personas con estrés crónico', 'Quienes vivieron situaciones traumáticas', 'Profesionales con alta demanda emocional', 'Personas que quieren mayor bienestar corporal'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, opacity: 0.95 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a96e', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {benefits.map(b => (
            <div key={b.title} className="card" style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(31,168,184,0.15)' }}
              onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(31,168,184,0.08)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 14 }}>{b.icon}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: '#2a2438', marginBottom: 10 }}>{b.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5a5470' }}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href={waLink} target="_blank" rel="noreferrer" className="btn-outline">
            ¿Tenés dudas sobre TRE? Consultame
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tre .card-grid { grid-template-columns: 1fr !important; }
          #tre > div > div:nth-child(2) { grid-template-columns: 1fr !important; padding: 28px !important; }
          #tre > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
