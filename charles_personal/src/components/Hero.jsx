export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0d1b2a 0%, #0a0a0a 55%, #1a1500 100%)',
      }}
    >
      {/* Background decorative elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', top: '25%', right: 0,
          width: '24rem', height: '24rem', borderRadius: '50%', opacity: 0.1,
          background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '25%', left: 0,
          width: '16rem', height: '16rem', borderRadius: '50%', opacity: 0.05,
          background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Main content */}
      <div className="section-container" style={{
        position: 'relative', zIndex: 10,
        paddingTop: '8rem', paddingBottom: '8rem',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center',
        gap: '4rem',
      }}>
        {/* Text */}
        <div style={{ flex: '1 1 340px', minWidth: 0, textAlign: 'center' }}>
          <p style={{
            display: 'inline-block', fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            marginBottom: '1rem', padding: '0.375rem 1rem',
            borderRadius: '9999px', border: '1px solid #C9A227',
            color: '#C9A227', background: 'rgba(201,162,39,0.08)',
          }}>
            Personal Trainer & Nutrição Esportiva
          </p>

          <h1 className="font-bebas" style={{ fontSize: 'clamp(3rem,8vw,6rem)', lineHeight: 1, marginBottom: '1.5rem' }}>
            <span style={{ color: '#fff' }}>CHARLES</span><br />
            <span className="gold-gradient-text">RECH BOEIRA</span>
          </h1>

          <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '36rem', margin: '0 auto 2rem' }}>
            Treinos personalizados, resultados reais e qualidade de vida.<br />
            Mais de <strong style={{ color: '#F0C040' }}>10 anos</strong> transformando corpos e vidas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <a
              href="https://wa.me/5551999150552"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-gold"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 2rem', borderRadius: '6px',
                fontWeight: 700, color: '#000', fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #C9A227, #F0C040)',
                textDecoration: 'none', transition: 'filter 0.2s',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Comece Hoje
            </a>
            <a
              href="#sobre"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '1rem 2rem', borderRadius: '6px',
                fontWeight: 600, color: '#fff', fontSize: '1.1rem',
                border: '1px solid rgba(201,162,39,0.5)',
                textDecoration: 'none',
              }}
            >
              Saiba Mais
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginTop: '3rem' }}>
            {[
              { value: '+10', label: 'Anos de Experiência' },
              { value: '+500', label: 'Alunos Transformados' },
              { value: '100%', label: 'Dedicação' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div className="font-bebas gold-gradient-text" style={{ fontSize: '2.5rem' }}>{stat.value}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Circle */}
        <div style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{
            width: '300px', height: '300px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(201,162,39,0.15), rgba(201,162,39,0.05))',
            border: '2px solid rgba(201,162,39,0.4)',
            boxShadow: '0 0 60px rgba(201,162,39,0.15)',
          }}>
            <div style={{
              width: '270px', height: '270px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #1a1500, #0d1b2a)',
              border: '1px solid rgba(201,162,39,0.2)',
            }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="120" height="120" viewBox="0 0 100 120" fill="none">
                  <ellipse cx="50" cy="70" rx="22" ry="28" fill="#C9A227" opacity="0.9"/>
                  <circle cx="50" cy="28" r="14" fill="#C9A227" opacity="0.9"/>
                  <ellipse cx="22" cy="65" rx="10" ry="18" fill="#C9A227" opacity="0.8" transform="rotate(-15 22 65)"/>
                  <ellipse cx="78" cy="65" rx="10" ry="18" fill="#C9A227" opacity="0.8" transform="rotate(15 78 65)"/>
                  <line x1="50" y1="55" x2="50" y2="90" stroke="#0a0a0a" strokeWidth="1.5" opacity="0.4"/>
                  <line x1="35" y1="63" x2="65" y2="63" stroke="#0a0a0a" strokeWidth="1" opacity="0.4"/>
                  <line x1="35" y1="73" x2="65" y2="73" stroke="#0a0a0a" strokeWidth="1" opacity="0.4"/>
                  <line x1="35" y1="83" x2="65" y2="83" stroke="#0a0a0a" strokeWidth="1" opacity="0.4"/>
                  <circle cx="50" cy="60" r="46" stroke="#C9A227" strokeWidth="2" fill="none" opacity="0.5"/>
                </svg>
                <p className="font-bebas" style={{ color: '#C9A227', fontSize: '1.25rem', marginTop: '4px' }}>CHARLES BOEIRA</p>
                <p style={{ color: '#C9A227', opacity: 0.7, fontSize: '0.65rem', letterSpacing: '0.2em' }}>TREINADOR</p>
              </div>
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: '-1rem', right: '-1rem',
            padding: '0.5rem 1rem', borderRadius: '8px',
            fontWeight: 700, fontSize: '0.85rem', color: '#000',
            background: 'linear-gradient(135deg, #C9A227, #F0C040)',
          }}>
            CREF Certificado
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5,
      }}>
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9ca3af' }}>Role para baixo</span>
        <div style={{ width: '2px', height: '2rem', background: 'linear-gradient(to bottom, transparent, #eab308)' }} />
      </div>
    </section>
  )
}
