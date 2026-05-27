import { useState, useEffect } from 'react'

export default function Navbar({ waLink, calendlyLink }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'TRE', href: '#tre' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(253,250,245,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #f0ece4' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 24px',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <a href="#inicio" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: '#1fa8b8', letterSpacing: '-0.3px' }}>Julieta</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontStyle: 'italic', fontWeight: 400, color: '#c9a96e', marginTop: -4 }}>Paz</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#2a2438', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => e.target.style.color = '#1fa8b8'}
              onMouseOut={e => e.target.style.color = '#2a2438'}
            >{l.label}</a>
          ))}
          <a href={calendlyLink} target="_blank" rel="noreferrer" className="btn-teal" style={{ padding: '10px 22px', fontSize: 14 }}>
            Agendar sesión
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="mobile-menu-btn"
          aria-label="Menú"
        >
          <div style={{ width: 24, height: 2, background: '#2a2438', marginBottom: 5, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: 24, height: 2, background: '#2a2438', marginBottom: 5, opacity: menuOpen ? 0 : 1 }} />
          <div style={{ width: 24, height: 2, background: '#2a2438', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#fdfaf5', borderTop: '1px solid #f0ece4', padding: '16px 24px 24px' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '12px 0', fontFamily: 'DM Sans, sans-serif', fontSize: 16, fontWeight: 500, color: '#2a2438', textDecoration: 'none', borderBottom: '1px solid #f0ece4' }}
            >{l.label}</a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
            <a href={calendlyLink} target="_blank" rel="noreferrer" className="btn-teal" style={{ justifyContent: 'center' }}>Agendar sesión</a>
            <a href={waLink} target="_blank" rel="noreferrer" className="btn-wsp" style={{ justifyContent: 'center' }}>WhatsApp</a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}
