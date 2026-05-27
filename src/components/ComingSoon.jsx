export default function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdfaf5 0%, #e8f7f9 50%, #f2ecfa 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      textAlign: 'center',
    }}>
      {/* Decorative circles */}
      <div style={{ position: 'fixed', top: -120, right: -120, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, #1fa8b820 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: -100, left: -100, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, #7b52ab18 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Logo */}
      <div style={{ marginBottom: 48 }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 38, fontWeight: 500, color: '#1fa8b8' }}>Julieta </span>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 38, fontStyle: 'italic', fontWeight: 400, color: '#c9a96e' }}>Paz</span>
      </div>

      {/* Badge */}
      <span style={{
        display: 'inline-block',
        background: 'linear-gradient(135deg, #1fa8b820, #7b52ab20)',
        border: '1px solid #1fa8b840',
        color: '#1fa8b8',
        padding: '6px 18px',
        borderRadius: 20,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: 28,
      }}>
        Muy pronto
      </span>

      {/* Headline */}
      <h1 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(36px, 6vw, 68px)',
        fontWeight: 400,
        color: '#2a2438',
        lineHeight: 1.15,
        marginBottom: 24,
        maxWidth: 640,
      }}>
        Algo hermoso<br />
        <span style={{ color: '#7b52ab' }}>está por llegar</span>
      </h1>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 17,
        lineHeight: 1.8,
        color: '#5a5470',
        maxWidth: 440,
        marginBottom: 48,
      }}>
        Estamos preparando el espacio. Pronto vas a poder conocer todo sobre el acompañamiento espiritual y TRE.
      </p>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/5493815169112"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#25d366',
          color: '#fff',
          padding: '14px 28px',
          borderRadius: 50,
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 600,
          fontSize: 15,
          textDecoration: 'none',
          boxShadow: '0 4px 20px #25d36640',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Escribime por WhatsApp
      </a>

      <p style={{ marginTop: 32, fontSize: 13, color: '#9992ab', fontFamily: 'DM Sans, sans-serif' }}>
        hola@julietapazcoach.com
      </p>
    </div>
  )
}
