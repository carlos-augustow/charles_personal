import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#resultados', label: 'Resultados' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          transition: 'background 0.3s, box-shadow 0.3s',
          background: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        <div className="section-container" style={{ paddingTop: '1rem', paddingBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.5rem', height: '2.5rem', borderRadius: '50%',
              border: '2px solid #C9A227',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="font-bebas" style={{ color: '#C9A227', fontSize: '1.1rem' }}>CB</span>
            </div>
            <span className="font-bebas" style={{ color: '#fff', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
              Charles <span style={{ color: '#C9A227' }}>Boeira</span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="navbar-desktop-links" style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="nav-link" style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/5551999150552"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta pulse-gold"
            style={{
              alignItems: 'center', gap: '0.5rem',
              padding: '0.625rem 1.5rem', borderRadius: '6px',
              fontWeight: 600, fontSize: '0.875rem', color: '#000',
              background: 'linear-gradient(135deg, #C9A227, #F0C040)',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}
          >
            Fale Comigo
          </a>

          {/* Mobile Hamburger / Close button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.5rem', color: '#fff',
            }}
            className="navbar-hamburger"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? (
              /* X icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 49,
          background: 'linear-gradient(160deg, #080808 0%, #0f0a00 60%, #0a0a0a 100%)',
          display: 'flex', flexDirection: 'column',
          padding: '6rem 2rem 3rem',
        }}>
          {/* Links */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.125rem 1.25rem',
                    borderRadius: '0.75rem',
                    color: '#e5e7eb',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{
                      fontFamily: 'Bebas Neue, cursive',
                      color: '#C9A227', fontSize: '1rem',
                      opacity: 0.7, minWidth: '1.5rem',
                    }}>
                      0{i + 1}
                    </span>
                    {l.label}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(201,162,39,0.6)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom area */}
          <div>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)', marginBottom: '1.75rem' }} />
            <a
              href="https://wa.me/5551999150552"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                padding: '1.125rem', borderRadius: '0.875rem',
                fontWeight: 700, fontSize: '1.05rem', color: '#000',
                background: 'linear-gradient(135deg, #C9A227, #F0C040)',
                textDecoration: 'none',
                boxShadow: '0 6px 32px rgba(201,162,39,0.4)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
