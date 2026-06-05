const serviciosResumen = [
  { title: 'Sesión TRE', meta: 'Online · Individual\n2 hs aprox.' },
  { title: 'Método Conexión', meta: 'Presencial u online\nGrupales' },
  { title: 'Formación TRE', meta: 'Sin experiencia previa\nNivel 1 · 3 meses' },
]

export default function CtaFinal({ waLink }) {
  return (
    <section id="contacto" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1fa8b8 0%, #7b52ab 100%)',
          borderRadius: 32,
          padding: 'clamp(48px, 8vw, 80px) clamp(32px, 6vw, 80px)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 48,
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(38px, 5vw, 58px)', fontWeight: 400, lineHeight: 1.15, marginBottom: 20, position: 'relative' }}>
            Si llegaste hasta acá,<br />
            algo en vos está listo.
          </h2>

          <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.9, maxWidth: 520, margin: '0 auto 40px', position: 'relative' }}>
            No hace falta tener todo claro. Solo hace falta dar el primer paso. Escribime y charlamos sin compromiso — juntas vemos por dónde empezar.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', position: 'relative' }}>
            <a href={waLink} target="_blank" rel="noreferrer"
              style={{ background: '#fff', color: '#7b52ab', padding: '14px 32px', borderRadius: 50, fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'transform 0.15s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={e => e.currentTarget.style.transform = 'none'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribime por WhatsApp
            </a>
            <a href="mailto:hola@julietapazcoach.com"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', padding: '12px 32px', borderRadius: 50, fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: 15, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.15s' }}
              onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
              onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            >
              O mandame un mail
            </a>
          </div>
        </div>

        {/* Recordatorio de servicios */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {serviciosResumen.map(s => (
            <div key={s.title} style={{
              background: '#f8f9fb',
              borderRadius: 16,
              padding: '20px 16px',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: '#2a2438', marginBottom: 8 }}>{s.title}</p>
              <p style={{ fontSize: 13, color: '#9992ab', lineHeight: 1.6, whiteSpace: 'pre-line', margin: 0 }}>{s.meta}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #contacto > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
