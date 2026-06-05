const formacion = [
  ['Terapia de Respuesta Espiritual', 'Gestalt y Psicoterapia Integrativa'],
  ['Mirada Sistémica', 'Coaching Ontológico Profesional'],
  ['Ontología Corporal', 'Coaching Transformacional'],
  ['Liderazgo y Desarrollo Personal', 'Cosmovisión del Ser'],
]

export default function About() {
  return (
    <section id="sobre-mi" style={{ padding: '100px 24px', background: '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

        {/* Imagen */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'linear-gradient(135deg, #e8f7f9 0%, #f2ecfa 100%)',
            borderRadius: 28,
            padding: 40,
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
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="section-tag">Quién soy</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.2, color: '#2a2438', marginBottom: 28 }}>
            No llegué a este trabajo estudiando.<br />
            <span style={{ color: '#7b52ab' }}>Llegué atravesándolo.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#5a5470', marginBottom: 20 }}>
            A los veinte y pico estaba muy perdida. Rebelde, llena de dolor, sin saber quién era ni por qué me pasaba lo que me pasaba. Hasta que caí en un lugar tan oscuro que me dije: esto no puede seguir así.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#5a5470', marginBottom: 32 }}>
            Desde ahí empecé a buscar. Recorrí muchos caminos, aprendí muchas herramientas, viví en mi propio cuerpo lo que hoy acompaño en otros. Ese recorrido no fue en línea recta — y por eso entiendo cuando el tuyo tampoco lo es.
          </p>

          {/* Frase destacada */}
          <div style={{
            borderLeft: '4px solid #7b52ab',
            paddingLeft: 24,
            marginBottom: 32,
          }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, lineHeight: 1.6, color: '#2a2438', fontWeight: 500, margin: 0 }}>
              Lo que me diferencia no es una sola técnica. Es la capacidad de ver el panorama completo — el cuerpo, la mente, el alma y el espíritu — y trabajar desde ahí.
            </p>
          </div>

          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#5a5470', marginBottom: 36 }}>
            Integro múltiples herramientas no como un menú, sino como una visión. Cada persona necesita algo distinto, y mi trabajo es saber qué.
          </p>

          {/* Formación */}
          <div style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: '#1fa8b8', textTransform: 'uppercase', marginBottom: 16 }}>Formación y herramientas</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {formacion.flat().map(item => (
                <div key={item} style={{
                  padding: '10px 14px',
                  background: '#f8f9fb',
                  borderRadius: 10,
                  fontSize: 13,
                  color: '#2a2438',
                  fontWeight: 500,
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Cosmovisión */}
          <div style={{
            background: 'linear-gradient(135deg, #7b52ab18, #1fa8b818)',
            borderRadius: 16,
            padding: '20px 24px',
          }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, lineHeight: 1.6, color: '#2a2438', margin: 0, fontStyle: 'italic' }}>
              Acompaño a cada persona a recordar que no es solo un humano con problemas — es un ser infinito que está teniendo una experiencia humana.
            </p>
            <p style={{ fontSize: 13, color: '#7b52ab', fontWeight: 600, marginTop: 12, marginBottom: 0 }}>
              Soy Julieta Paz · Coach Espiritual y Formadora en TRE
            </p>
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
