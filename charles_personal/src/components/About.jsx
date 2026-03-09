export default function About() {
  const credentials = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      ),
      title: 'Bacharel em Educação Física',
      desc: 'Formação completa com base científica em treinamento e desempenho humano',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a5 5 0 015 5v3H7V7a5 5 0 015-5z"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M12 14v4"/>
        </svg>
      ),
      title: 'Pós-graduado em Nutrição Esportiva',
      desc: 'Especialização para unir treino e alimentação em prol do seu resultado',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
        </svg>
      ),
      title: '+10 Anos de Experiência',
      desc: 'Uma década de resultados reais transformando corpos e vidas',
    },
  ]

  const goals = [
    { label: 'Hipertrofia' },
    { label: 'Emagrecimento' },
    { label: 'Ganho de Massa Magra' },
    { label: 'Qualidade de Vida' },
  ]

  return (
    <section id="sobre" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1520 50%, #0a0a0a 100%)' }}>
      <div className="section-container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#C9A227', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Quem é Charles
          </p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', marginBottom: '1rem' }}>
            SOBRE <span className="gold-gradient-text">MIM</span>
          </h2>
          <div className="section-divider" style={{ width: '8rem' }} />
        </div>

        {/* Two columns */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start', justifyContent: 'center' }}>

          {/* Left */}
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <h3 className="font-bebas" style={{ fontSize: '1.75rem', color: '#F0C040', marginBottom: '1.5rem', lineHeight: 1.3 }}>
              TRANSFORMANDO VIDAS HÁ MAIS DE UMA DÉCADA
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#d1d5db', fontSize: '1rem', lineHeight: 1.75 }}>
              <p>Sou <strong style={{ color: '#fff' }}>Charles Rech Boeira</strong>, personal trainer com formação em{' '}
                <strong style={{ color: '#F0C040' }}>Bacharel em Educação Física</strong> e pós-graduação em{' '}
                <strong style={{ color: '#F0C040' }}>Nutrição Esportiva</strong>.</p>
              <p>Com mais de <strong style={{ color: '#fff' }}>10 anos de experiência</strong>, já ajudei centenas de alunos a alcançarem seus objetivos — seja hipertrofia, emagrecimento ou ganho de massa magra.</p>
              <p>Minha metodologia é baseada na <strong style={{ color: '#fff' }}>individualidade de cada cliente</strong>: treinos 100% personalizados, acompanhamento nutricional e foco total nos seus resultados.</p>
              <p>Se o seu foco é ter mais saúde, um corpo mais definido ou simplesmente uma melhor qualidade de vida — <strong style={{ color: '#F0C040' }}>pode contar comigo</strong>.</p>
            </div>

            {/* Goals */}
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#6b7280', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Especialidades</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {goals.map((g) => (
                  <span key={g.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                    background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.3)', color: '#F0C040',
                  }}>
                    {g.label}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5551999150552"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                marginTop: '2rem', padding: '0.875rem 1.75rem',
                borderRadius: '6px', fontWeight: 700, color: '#000',
                background: 'linear-gradient(135deg, #C9A227, #F0C040)',
                textDecoration: 'none',
              }}
            >
              Quero Começar Agora
            </a>
          </div>

          {/* Right */}
          <div style={{ flex: '1 1 320px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {credentials.map((c) => (
              <div key={c.title} className="card-hover" style={{
                display: 'flex', gap: '1.25rem', padding: '1.5rem',
                borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(201,162,39,0.05))',
                border: '1px solid rgba(201,162,39,0.2)',
              }}>
                <div style={{
                  flexShrink: 0, width: '3.5rem', height: '3.5rem',
                  borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(201,162,39,0.12)',
                }}>
                  {c.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: '0.25rem' }}>{c.title}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              </div>
            ))}

            <div style={{
              padding: '1.5rem', borderRadius: '0.75rem', marginTop: '0.5rem',
              background: 'linear-gradient(135deg, rgba(201,162,39,0.12), rgba(201,162,39,0.04))',
              border: '1px solid rgba(201,162,39,0.3)',
              borderLeft: '4px solid #C9A227',
            }}>
              <p style={{ color: '#e5e7eb', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: 1.7 }}>
                "Treinos personalizados baseados no que o cliente necessita — resultados reais e qualidade de vida."
              </p>
              <p style={{ marginTop: '0.75rem', fontWeight: 600, color: '#C9A227' }}>— Charles Rech Boeira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
