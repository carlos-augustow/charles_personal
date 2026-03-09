export default function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid rgba(201,162,39,0.15)' }}>
      <div className="section-container" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>

        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.75rem', height: '2.75rem', borderRadius: '50%',
              border: '2px solid #C9A227',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span className="font-bebas" style={{ color: '#C9A227', fontSize: '1.1rem' }}>CB</span>
            </div>
            <div>
              <p className="font-bebas" style={{ color: '#fff', fontSize: '1.25rem', letterSpacing: '0.05em' }}>
                Charles <span style={{ color: '#C9A227' }}>Boeira</span>
              </p>
              <p style={{ color: '#6b7280', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Personal Trainer
              </p>
            </div>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['#inicio', '#sobre', '#servicos', '#contato'].map((href, i) => (
              <a key={href} href={href} style={{
                color: '#6b7280', fontSize: '0.875rem', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#F0C040'}
              onMouseLeave={e => e.target.style.color = '#6b7280'}
              >
                {['Início', 'Sobre', 'Serviços', 'Contato'][i]}
              </a>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://wa.me/5551999150552"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/charlesrechBoeira"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#E1306C">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ margin: '2.5rem 0 2rem' }} />

        {/* Bottom copyright */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#4b5563', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Charles Rech Boeira — Todos os direitos reservados.
          </p>
          <p style={{ color: '#374151', fontSize: '0.75rem', marginTop: '0.375rem' }}>
            Personal Trainer · Bacharel em Educação Física · Pós-graduado em Nutrição Esportiva
          </p>
        </div>
      </div>
    </footer>
  )
}
