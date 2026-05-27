export default function Footer({ waLink }) {
  return (
    <footer style={{ background: '#2a2438', color: '#9992ab', padding: '60px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: '#1fa8b8' }}>Julieta </span>
              <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontStyle: 'italic', fontWeight: 400, color: '#c9a96e' }}>Paz</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 320 }}>
              Coach espiritual y practicante de TRE. Acompañando a personas a liberar tensiones, reconectar con su interior y vivir con más ligereza.
            </p>
            <a href="mailto:hola@julietapazcoach.com" style={{ display: 'block', marginTop: 16, fontSize: 14, color: '#1fa8b8', textDecoration: 'none' }}>
              hola@julietapazcoach.com
            </a>
          </div>

          {/* Links */}
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>Navegación</div>
            {[['Sobre mí', '#sobre-mi'], ['TRE', '#tre'], ['Servicios', '#servicios'], ['Contacto', '#contacto']].map(([label, href]) => (
              <a key={href} href={href} style={{ display: 'block', fontSize: 14, color: '#9992ab', textDecoration: 'none', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseOver={e => e.target.style.color = '#1fa8b8'}
                onMouseOut={e => e.target.style.color = '#9992ab'}
              >{label}</a>
            ))}
          </div>

          {/* Contacto */}
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', marginBottom: 20 }}>Contacto</div>
            <a href={waLink} target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#25d36620', color: '#25d366', border: '1px solid #25d36640', padding: '10px 16px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: 12 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #3d3650', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© 2025 Julieta Paz · Todos los derechos reservados</p>
          <p style={{ fontSize: 13 }}>julietapazcoach.com</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  )
}
