export default function Hero({ waLink, calendlyLink }) {
  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      background: 'linear-gradient(150deg, #fdfaf5 0%, #e8f7f9 50%, #f2ecfa 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '100px 24px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Círculo decorativo fondo */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(31,168,184,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-5%',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(123,82,171,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        {/* Texto */}
        <div>
          <span className="section-tag">Coach Espiritual · TRE</span>
          <h1 style={{ fontSize: 'clamp(42px, 6vw, 68px)', fontWeight: 400, lineHeight: 1.1, color: '#2a2438', marginBottom: 24 }}>
            Reconectá con<br />
            <span style={{ color: '#1fa8b8' }}>tu paz</span> interior
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: '#5a5470', marginBottom: 40, maxWidth: 460 }}>
            Acompañamiento espiritual y terapia TRE para liberar el estrés, el trauma y las tensiones acumuladas en el cuerpo. Encontrá el equilibrio que merecés.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <a href={calendlyLink} target="_blank" rel="noreferrer" className="btn-teal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Agendar sesión
            </a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-wsp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Escribime
            </a>
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: '#9992ab' }}>
            ✦ Primera consulta sin costo &nbsp;·&nbsp; Sesiones presenciales y online
          </p>
        </div>

        {/* Foto */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{
            width: 'clamp(280px, 40vw, 440px)',
            height: 'clamp(280px, 40vw, 440px)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1fa8b8 0%, #7b52ab 100%)',
            padding: 4,
            boxShadow: '0 30px 80px rgba(31,168,184,0.25)',
            position: 'relative',
          }}>
            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: '#e8f7f9' }}>
              <img
                src="/julieta.jpg"
                alt="Julieta Paz — Coach espiritual"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                onError={e => { e.target.style.display = 'none' }}
              />
            </div>
            {/* Anillos decorativos */}
            <div style={{
              position: 'absolute', inset: -16, borderRadius: '50%',
              border: '1px solid rgba(31,168,184,0.2)',
              animation: 'pulse-ring 3s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', inset: -32, borderRadius: '50%',
              border: '1px solid rgba(123,82,171,0.1)',
              animation: 'pulse-ring 3s ease-in-out infinite 1s',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        @media (max-width: 768px) {
          #inicio > div {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #inicio > div > div:first-child {
            order: 2;
          }
          #inicio > div > div:last-child {
            order: 1;
          }
          #inicio > div > div:first-child > div {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
