const testimonials = [
  {
    name: 'Rodrigo M.',
    goal: 'Hipertrofia',
    text: 'Em 4 meses com o Charles ganhei mais massa do que em 2 anos treinando sozinho. O treino personalizado faz toda a diferença!',
    result: '+8kg de massa magra em 4 meses',
  },
  {
    name: 'Fernanda S.',
    goal: 'Emagrecimento',
    text: 'Perdi 12kg em 3 meses de consultoria online. O acompanhamento nutricional junto com o treino foi fundamental para meu resultado.',
    result: '-12kg em 3 meses',
  },
  {
    name: 'Lucas A.',
    goal: 'Condicionamento',
    text: 'O Charles me atende presencialmente na Paradox. A dedicação dele é incrível — cada detalhe do treino é pensado para o meu corpo.',
    result: 'Composição corporal totalmente reformulada',
  },
]

const metrics = [
  {
    value: '+500', label: 'Alunos Atendidos',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    value: '+10', label: 'Anos de Experiência',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
      </svg>
    ),
  },
  {
    value: '2', label: 'Formações Acadêmicas',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    value: '100%', label: 'Foco no Resultado',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
]

export default function Results() {
  return (
    <section id="resultados" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1520 50%, #0a0a0a 100%)' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ color: '#C9A227', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Histórias reais
          </p>
          <h2 className="font-bebas" style={{ fontSize: 'clamp(2.5rem,6vw,4rem)', color: '#fff', marginBottom: '1rem' }}>
            RESULTADOS <span className="gold-gradient-text">REAIS</span>
          </h2>
          <div className="section-divider" style={{ width: '8rem' }} />
        </div>

        {/* Metrics */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginBottom: '5rem' }}>
          {metrics.map((m) => (
            <div key={m.label} className="card-hover" style={{
              flex: '1 1 160px', maxWidth: '220px',
              textAlign: 'center', padding: '1.5rem', borderRadius: '0.75rem',
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,162,39,0.2)',
            }}>
              <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{m.icon}</div>
              <div className="font-bebas gold-gradient-text" style={{ fontSize: '2.5rem' }}>{m.value}</div>
              <div style={{ color: '#9ca3af', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover"
              style={{
                flex: '1 1 260px', maxWidth: '360px',
                display: 'flex', flexDirection: 'column',
                padding: '1.75rem', borderRadius: '1rem',
                background: 'linear-gradient(160deg, rgba(255,255,255,0.04), rgba(201,162,39,0.04))',
                border: '1px solid rgba(201,162,39,0.2)',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: 0.3, color: '#C9A227' }}>"</div>
              <p style={{ color: '#d1d5db', fontSize: '0.9rem', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{t.text}</p>
              <div style={{
                display: 'inline-block', padding: '0.375rem 0.75rem',
                borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem',
                background: 'rgba(201,162,39,0.15)', color: '#F0C040', border: '1px solid rgba(201,162,39,0.3)',
              }}>
                {t.result}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: '#000', fontSize: '0.875rem',
                  background: 'linear-gradient(135deg, #C9A227, #F0C040)',
                  flexShrink: 0,
                }}>
                  {t.name[0]}
                </div>
                <div>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{t.name}</p>
                  <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>{t.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          marginTop: '4rem', borderRadius: '1rem', overflow: 'hidden', position: 'relative',
          background: 'linear-gradient(135deg, #1a1200 0%, #2a1f00 60%, #0d1b2a 100%)',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.2,
            backgroundImage: 'linear-gradient(#C9A227 1px, transparent 1px), linear-gradient(90deg, #C9A227 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
          <div style={{
            position: 'relative', zIndex: 10, padding: '3rem',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem',
          }}>
            <div>
              <h3 className="font-bebas" style={{ fontSize: 'clamp(1.75rem,4vw,3rem)', color: '#fff', marginBottom: '0.5rem' }}>
                PRONTO PARA COMEÇAR <span className="gold-gradient-text">SUA TRANSFORMAÇÃO?</span>
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '1.1rem' }}>
                Entre em contato agora e inicie sua jornada com o personal certo.
              </p>
            </div>
            <a
              href="https://wa.me/5551999150552"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-gold"
              style={{
                flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '1rem 2rem', borderRadius: '0.75rem', fontWeight: 700,
                color: '#000', fontSize: '1.1rem', textDecoration: 'none',
                background: 'linear-gradient(135deg, #C9A227, #F0C040)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Comece Hoje
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
